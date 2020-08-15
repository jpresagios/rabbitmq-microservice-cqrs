import * as dotenv from 'dotenv';

dotenv.config({});

export default {
  AMQP_URL: process.env.AMQP_URL,
  API_PORT: process.env.API_PORT,
  MONGODB_URI: process.env.MONGODB_URI,
};
