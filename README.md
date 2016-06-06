#Node.js Study Group
  		  
##Description
Create a rest to store user information in mongodb.

You need to start mongodb first:
```bash
nohup /usr/bin/mongod --smallfiles &
```

Reference:
http://mongodb.github.io/node-mongodb-native/2.1/tutorials/crud/

Curl commands: 
```bash
curl -X POST -H "content-type: application/json" --data '{"name": "studygroup", "company": "ADP"}' localhost:3000/users/
```

```bash
curl -X GET localhost:3000/users/
```

```bash
curl -X GET localhost:3000/users/:id
```

```bash
curl -X PUT -H "content-type: application/json" --data '{"name": "studygroup", "company": "ADP"}' localhost:3000/users/:id
```

```bash
curl -X DELETE localhost:3000/users/:id
```

Tip: 
Use nodemon index.js for auto restart.
