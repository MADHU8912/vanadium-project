pipeline {

    agent any

    stages {

        stage('Clone') {
            steps {
                git branch: 'main',
                url: 'https://github.com/MADHU8912/vanadium-project.git'
            }
        }

        stage('Remove Old Containers') {
            steps {
                bat 'docker rm -f vanadium-backend-container || exit 0'
                bat 'docker rm -f vanadium-frontend-container || exit 0'
            }
        }

        stage('Build Backend') {
            steps {
                bat 'docker build -t vanadium-backend ./backend'
            }
        }

        stage('Build Frontend') {
            steps {
                bat 'docker build -t vanadium-frontend ./frontend'
            }
        }

        stage('Run Backend') {
            steps {
                bat 'docker run -d -p 5001:5000 --name vanadium-backend-container vanadium-backend'
            }
        }

        stage('Run Frontend') {
            steps {
                bat 'docker run -d -p 3001:80 --name vanadium-frontend-container vanadium-frontend'
            }
        }

    }
}