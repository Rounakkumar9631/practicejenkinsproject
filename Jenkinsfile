pipeline {
  agent any
    stages {
      stage ('git pull') {
        steps {
          git 'https://github.com/Rounakkumar9631/practicejenkinsproject.git'
         }
        }
      stage  ('Build Docker image') {
        steps {
          sh 'docker build -t devops-apps:latest .'
         }  
        }
      stage ('push image') {
        steps {
          sh 'docker login -u rounakj06 -p rounakjaiswal'
          sh 'docker tag myapp:latest rounakj06/devops-apps:latest'
          sh 'docker push rounakj06/devops-app:latest'
         }
        }
  }
}