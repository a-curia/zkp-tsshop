  
import {cleanEnv, port, str,} from 'envalid';

function validateEnv() {
  cleanEnv(process.env, {
    MONGO_CLUSTER: str(),
    PORT: port(),
  });
}

export default validateEnv;