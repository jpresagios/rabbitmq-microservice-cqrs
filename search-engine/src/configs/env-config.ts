import * as dotenv from 'dotenv';

dotenv.config({});

export default {
  AMQP_URL: process.env.AMQP_URL,
  API_PORT: process.env.API_PORT,
  ELASTICSEARCH_URL: process.env.ELASTICSEARCH_URL,
  ELASTICSEARCH_INDEX: process.env.ELASTICSEARCH_INDEX,
};
