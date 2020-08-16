# rabbitmq-microservice-cqrs

CQRS Microservice using Rabbitmq Message Broker, MongoDB and Elasticsearch for faster searching

Resilient microservices require resilient interservice communications.

Messages broker like NATS used **Fire and forget**, no persistence: NATS doesn’t do persistent messaging; if you’re offline, you don’t get the message.

For better resilient interservice communications is better used other Message broker for example
RabbitMQ offers a variety of features to let you trade off performance with reliability, including persistence, delivery acknowledgements, publisher confirms, and high availability. This features help with resilient interservice communications.

### Services news

Services news expose API's to persist news and publish async message using RabbitMQ message broker.

### Service Searching

Searching engines Indexes the news published by each service, and decouples the queries providing high search speed on Elasticsearch

## Run locally

Each service contains a README file with instrucction to run service and expose Swagger UI to review API contract
and interact with the API's

## Deploy

Have docker and docker-compose in your computer

```
https://docs.docker.com/compose/install/
```

```
docker-compose up --build
```
