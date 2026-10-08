pipeline {

    agent any

    stages {

        stage("Install NPM dependencies") {
            steps {
                bat "npm install"
            }
        }

        stage("Execute tests") {

            parallel {

                stage("Run unit tests") {
                    steps {
                        catchError(buildResult: 'UNSTABLE', stageResult: 'UNSTABLE') {
                            bat "npm test"
                        }
                    }
                }

                stage("Run integration tests") {
                    steps {
                        echo "Running integration tests"
                    }
                }

            }
        }
    }
}