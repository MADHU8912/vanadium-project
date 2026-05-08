pipeline {

    agent any

    environment {

        IMAGE_NAME = "vanadium-backend"

        CONTAINER_NAME = "vanadium-backend-container"

        DOCKER_HUB = "nikhilabba12"

    }

    stages {

        stage('Clone Repository') {

            steps {

                git branch: 'main',
                url: 'https://github.com/MADHU8912/vanadium-project.git'

            }

        }

        stage('Docker Pull') {

            steps {

                bat 'docker pull %DOCKER_HUB%/%IMAGE_NAME% || exit 0'

            }

        }

        stage('Remove Old Container') {

            steps {

                bat 'docker rm -f %CONTAINER_NAME% || exit 0'

            }

        }

        stage('Build Docker Image') {

            steps {

                bat 'docker build -t %IMAGE_NAME% ./backend'

            }

        }

        stage('Run Docker Container') {

            steps {

                bat 'docker run -d -p 5000:5000 --name %CONTAINER_NAME% %IMAGE_NAME%'

            }

        }

        stage('Docker Logs') {

            steps {

                bat 'docker logs %CONTAINER_NAME%'

            }

        }

        stage('Docker Copy') {

            steps {

                bat 'docker cp %CONTAINER_NAME%:/app/server.js server-copy.js'

            }

        }

        stage('Health Check') {

            steps {

                bat 'curl http://localhost:5000/health'

            }

        }

        stage('Docker Tag') {

            steps {

                bat 'docker tag %IMAGE_NAME% %DOCKER_HUB%/%IMAGE_NAME%'

            }

        }

        stage('Docker Push') {

            steps {

                bat 'docker push %DOCKER_HUB%/%IMAGE_NAME%'

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

            echo '✅ Pipeline completed successfully'

        }

        failure {

            echo '❌ Pipeline failed'

        }

    }

}