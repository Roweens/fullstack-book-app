import { registerAs } from '@nestjs/config';

/**
 * Mongo database connection config
 */
export default registerAs('mongodb', () => {
  return {
    uri: process.env.MONGO_URI,
  };
});
