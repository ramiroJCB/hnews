# Welcome to Hnews

This is  a Front-back App with both artifacts dockerize.
To  use this application  you  2 ways :
1)Without docker ,you just need to go  to each of the repos on the root and make a yarn  and then run both apps with yarn start(in the back End I recommend yarn start:dev)
2)With Docker  , so to run  this on docker you should run this  docker build -t <name> . on each of the repos root to create their images on your local env. Then go to the root of this project and do a docker compose up sadly I have issues with the connection to mongodb with this current build making it not testable right now.If you  want to test that out . you could the reign-api  app.module and change the port mongodb://localHost:27017/reign-api to mongodb://mongo:27017/reign-api or mongodb://mongo/reign-api
