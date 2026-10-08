pipeline{
    agent any

    stages{
        stage("Install NPM dependencies"){
            steps{
                bat "npm install"
            }
        }
        stage("Run tests"){
            steps{
                bat "npm test"
            }
        }
    }
}