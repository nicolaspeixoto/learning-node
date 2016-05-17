#References:
#http://expressjs.com/en/starter/installing.html
#http://expressjs.com/en/starter/hello-world.html
#http://expressjs.com/en/api.html#req

curl -X POST -H "content-type: application/json" --data '{"name": "studygroup", "company": "ADP"}' localhost:3000/users/
curl -X GET localhost:3000/users/

#next steps
curl -X GET localhost:3000/users/{id}
curl -X PUT -H "content-type: application/json" --data '{"name": "studygroup", "company": "ADP"}' localhost:3000/users/1
curl -X DELETE -H localhost:3000/users/1
