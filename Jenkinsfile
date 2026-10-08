pipeline {

    agent any

    stages {

        stage("Install NPM dependencies") {
            steps {
                bat "npm install"
            }
        }

        stage("Tests and Audit") {
            parallel {

                stage("Run unit tests") {
                    steps {
                       bat "npm test"
                    }
                }

                stage("Run integration tests") {
                    steps {
                        echo "Running integration tests"
                    }
                }
            }
        }

        stage("Deploy to Production") {
            steps {
                input message: 'Do you want to deploy?', 
                      ok: 'Deploy'
            }
        }

        stage("Deploy") {
            steps {
                echo "Deploying application..."
            }
        }
    }
}