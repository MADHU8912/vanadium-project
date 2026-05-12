pipeline {

    agent any

    triggers {

        githubPush()

    }

    environment {

        BACKEND_IMAGE = "nikhilabba12/vanadium-backend"

        BACKEND_CONTAINER = "vanadium-backend"

        DOCKER_BUILDKIT = "1"

    }

    stages {

        stage('Clone Repository') {

            steps {

                git branch: 'main',
                url: 'https://github.com/MADHU8912/vanadium-project.git'

            }

        }

        stage('Docker Login') {

            steps {

                withCredentials([usernamePassword(

                    credentialsId: 'docker-creds',

                    usernameVariable: 'DOCKER_USER',

                    passwordVariable: 'DOCKER_PASS'

                )]) {

                    bat 'docker login -u %DOCKER_USER% -p %DOCKER_PASS%'

                }

            }

        }

        stage('Docker Automation Info') {

            steps {

                bat 'echo ===== DOCKER AUTOMATION STARTED ====='

                bat 'docker version'

                bat 'docker info'

            }

        }

        stage('Build Backend Image') {

            steps {

                bat 'docker build -t %BACKEND_IMAGE% ./backend'

            }

        }

        stage('Automatic Docker Tag') {

            steps {

                bat 'docker tag %BACKEND_IMAGE% %BACKEND_IMAGE%:latest'

            }

        }

        stage('Push Backend Image') {

            steps {

                bat 'docker push %BACKEND_IMAGE%'

                bat 'docker push %BACKEND_IMAGE%:latest'

            }

        }

        stage('Automatic Docker Pull') {

            steps {

                bat 'docker pull %BACKEND_IMAGE%'

            }

        }

        stage('Stop Old Container') {

            steps {

                bat 'docker stop %BACKEND_CONTAINER% || exit 0'

                bat 'docker rm %BACKEND_CONTAINER% || exit 0'

            }

        }

        stage('Run Backend Container') {

            steps {

                bat '''
                docker run -d -p 5001:5000 ^
                --restart always ^
                --name %BACKEND_CONTAINER% ^
                %BACKEND_IMAGE%
                '''

            }

        }

        stage('Docker Logs') {

            steps {

                bat 'docker logs %BACKEND_CONTAINER% || exit 0'

            }

        }

        stage('Docker Copy Files') {

            steps {

                bat 'docker cp %BACKEND_CONTAINER%:/app/server.js . || exit 0'

            }

        }

        stage('Local Health Check') {

            steps {

                bat 'curl http://localhost:5001/health'

            }

        }

        stage('Check Running Containers') {

            steps {

                bat 'docker ps'

            }

        }

        stage('Docker Automation Debug') {

            steps {

                bat 'echo ===== DOCKER IMAGES ====='

                bat 'docker images'

                bat 'echo ===== RUNNING CONTAINERS ====='

                bat 'docker ps'

                bat 'echo ===== ALL CONTAINERS ====='

                bat 'docker ps -a'

                bat 'echo ===== BACKEND LOGS ====='

                bat 'docker logs %BACKEND_CONTAINER% || exit 0'

                bat 'echo ===== PORT CHECK ====='

                bat 'netstat -ano | findstr :5000 || exit 0'

                bat 'netstat -ano | findstr :5001 || exit 0'

            }

        }

        stage('Cloud Deployment') {

            steps {

                bat 'echo ===== DEPLOYING TO CLOUD ====='

                bat 'curl -X POST https://api.render.com/deploy/srv-d7up1t50lvsc7382pmog?key=jzIAaV4S3io'

            }

        }

        stage('Cloud Health Check') {

            steps {

                bat 'curl https://vanadium-backend.onrender.com/health || exit 0'

            }

        }

    }

    post {

        success {

            echo '✅ VANADIUM Docker Automation Pipeline Completed Successfully'

        }

        failure {

            echo '❌ VANADIUM Docker Automation Pipeline Failed'

        }

        always {

            bat 'docker ps -a'

        }

    }

}