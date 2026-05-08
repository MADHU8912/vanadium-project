pipeline {
    agent any

    stages {

        stage('Clone') {
            steps {
                git branch: 'main',
                url: 'https://github.com/MADHU8912/vanadium-project.git'
            }
        }

        stage('Remove Old Container') {
            steps {
                bat 'docker rm -f vanadium-container || exit 0'
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