Create a rest to store user information in mongodb.

You need to start mongodb before run node.js:
nohup /usr/bin/mongod --smallfiles &

Reference:
http://mongodb.github.io/node-mongodb-native/2.1/tutorials/crud/

Curl commands: 
curl -X POST -H "content-type: application/json" --data '{"name": "studygroup", "company": "ADP"}' localhost:3000/users/
curl -X GET localhost:3000/users/
curl -X GET localhost:3000/users/:id
curl -X PUT -H "content-type: application/json" --data '{"name": "studygroup", "company": "ADP"}' localhost:3000/users/:id
curl -X DELETE localhost:3000/users/:id

Tip: 
Use nodemon index.js for auto restart.