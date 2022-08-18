# MongoElastic

#ENV
    MONGOURL = "Your mongo url"

#Elastic
    Default = http://localhost:9200

## API Endpoints
```bash
    #MONGO
    POST - https://{URL}/car/create
    POST - https://{URL}/user/create
    GET - https://{URL}/user/getAll
    GET - https://{URL}/car/getAll
    GET - https://{URL}/user/get/:id
    GET - https://{URL}/car/get/:id
    PUT - https://{URL}/user/update/:id
    PUT - https://{URL}/car/update/:id
    DELETE - https://{URL}/user/delete/:id
    DELETE - https://{URL}/car/delete/:id

    #ELASTIC
    POST - https://{URL}/elasticSearch/sync
    GET - https://{URL}/elasticSearch/:index/:type
```

# Create User
```bash
curl --location --request POST 'http://localhost:3000/user/create' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "user",
    "age": "100",
    "cars": [ "carid1" , "carid2" ]
}'
```

# Create Car
```bash
curl --location --request POST 'http://localhost:3000/car/create' \
--header 'Content-Type: application/json' \
--data-raw '{
    "brand": "BMW",
    "model": "M7"
}'
```

# Get All Users
```bash
curl --location --request GET 'http://localhost:3000/user/getAll' \
--data-raw ''
```

# Get All Cars
```bash
curl --location --request GET 'http://localhost:3000/car/getAll' \
--data-raw ''
```

#Get User by Id
```bash
curl --location --request GET 'http://localhost:3000/user/get/:id' \
--data-raw ''
```

#Get Car by Id
```bash
curl --location --request GET 'http://localhost:3000/car/get/:id' \
--data-raw ''
```

#Update User by Id
```bash
curl --location --request PUT 'http://localhost:3000/user/update/:id' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "user",
    "age": "100",
    "cars": [ "carid1" , "carid2" ]
}'
```

#Update Car by Id
```bash
curl --location --request PUT 'http://localhost:3000/car/update/:id' \
--header 'Content-Type: application/json' \
--data-raw '{
    "brand": "BMW",
    "model": "M7"
}'
```
#Delete User by Id
```bash
curl --location --request GET 'http://localhost:3000/user/delete/:id' \
--data-raw ''
```

#Delete Car by Id
```bash
curl --location --request GET 'http://localhost:3000/car/delete/:id' \
--data-raw ''
```

#Elastic Sync
```bash
curl --location --request POST 'http://localhost:3000/elasticSearch/sync'\
--data-raw ''
```

#Elastic Search
```bash
curl --location --request GET 'http://localhost:3000/elasticSearch/:index/:type/_doc?q="yourquery"'\
--data-raw ''
```