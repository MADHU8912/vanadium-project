pipeline {

    agent any

    environment {

        BACKEND_IMAGE = "nikhilabba12/vanadium-backend"

        BACKEND_CONTAINER = "vanadium-backend"

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

        stage('Build Backend Image') {

            steps {

                bat 'docker build -t %BACKEND_IMAGE% ./backend'

            }

        }

        stage('Push Backend Image') {

            steps {

                bat 'docker push %BACKEND_IMAGE%'

            }

        }

        stage('Pull Latest Image') {

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

        stage('Health Check') {

            steps {

                bat 'curl http://localhost:5001/health'

            }

        }

        stage('Check Running Containers') {

            steps {

                bat 'docker ps'

            }

        }

        stage('Debug Containers') {

            steps {

                bat 'docker ps -a'

                bat 'docker logs %BACKEND_CONTAINER% || exit 0'

            }

        }

        stage('Deploy To Render') {

            steps {

                bat 'curl -X POST https://api.render.com/deploy/srv-d7up1t50lvsc7382pmog?key=jzIAaV4S3io'

            }

        }

    }

    post {

        success {

            echo '✅ VANADIUM Backend CI/CD Pipeline Completed Successfully'

        }

        failure {

            echo '❌ VANADIUM Backend Pipeline Failed'

        }

    }

}