node {
 stage('Checkout') {
 git url: '/home/osboxes/LabWorks/node-app'
 }
 stage('Build Docker Image') {
 sh 'docker build -t node-app:v1.0 .'
 }
 stage('Delete Service') {
 sh 'kubectl delete service node-app'
 }
 stage('Delete Deployment Configuration') {
 sh 'kubectl delete deployment node-app'
 }
 stage('Redeploy App') {
 sh 'kubectl create deployment node-app --image=node-app:v1.0'
 }
 stage('Expose Service') {
 sh 'kubectl expose deployment node-app --type=LoadBalancer --port=9090'
 }
}
