  
import 'dotenv/config';
import PostController from './post/post.controller';
import App from './app';
import validateEnv from './utils/validateEnv';

validateEnv();
 
const app = new App(
  [
    new PostController(),
  ],
);
 
app.listen();