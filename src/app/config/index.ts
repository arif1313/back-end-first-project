import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.join(process.cwd(), '.env') });
export default {
  Port: process.env.PORT,
  DB_URL: process.env.MONGO_URL,
  default_password: process.env.DEFAULT_PASS,
  bcrypt_salt_rounds: process.env.BCRYPT_SALT_ROUNDS,
};
