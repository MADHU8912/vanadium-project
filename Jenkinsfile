pipeline {
    agent any

    stages {

        stage('Clone') {
            steps {
                git 'https://github.com/MADHU8912/vanadium-project.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t vanadium-app ./backend'
            }
        }

        stage('Run Docker Container') {
            steps {
                bat 'docker run -d -p 5001:5000 --name vanadium-container vanadium-app'
            }
        }

    }
}