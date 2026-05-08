pipeline {

    agent any

    environment {

        IMAGE_NAME = "vanadium-backend"

        CONTAINER_NAME = "vanadium-backend-container"

        PORT = "5000"

    }

    stages {

        stage('Clone Repository') {

            steps {

                git branch: 'main',
                url: 'https://github.com/MADHU8912/vanadium-project.git'

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

        stage('Health Check') {

            steps {

                bat 'curl http://localhost:5000/health'

            }

        }

        stage('Docker Logs') {

            steps {

                bat 'docker logs %CONTAINER_NAME%'

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