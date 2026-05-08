pipeline {

    agent any

    stages {

        stage('Clone Repository') {
            steps {

                git branch: 'main',
                url: 'https://github.com/MADHU8912/vanadium-project.git'

            }
        }

        stage('Remove Old Containers') {
            steps {

                bat 'docker rm -f vanadium-backend-container || exit 0'
                bat 'docker rm -f vanadium-frontend-container || exit 0'
                bat 'docker rm -f vanadium-container || exit 0'
                bat 'docker rm -f vanadium-project-backend-1 || exit 0'
                bat 'docker rm -f vanadium-project-frontend-1 || exit 0'

            }
        }

        stage('Build Backend Image') {
            steps {

                bat 'docker build -t vanadium-backend ./backend'

            }
        }

        stage('Build Frontend Image') {
            steps {

                bat 'docker build -t vanadium-frontend ./frontend'

            }
        }

        stage('Run Backend Container') {
            steps {

                bat 'docker run -d -p 6000:5000 --name vanadium-backend-container vanadium-backend'

            }
        }

        stage('Run Frontend Container') {
            steps {

                bat 'docker run -d -p 3001:80 --name vanadium-frontend-container vanadium-frontend'

            }
        }

    }

}