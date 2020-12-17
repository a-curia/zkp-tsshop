import * as express from 'express';
import * as bodyParser from 'body-parser';

function loggerMiddleware(request: express.Request, response: express.Response, next) {
    console.log(`${request.method} ${request.path}`);
    next();
}

 
const app = express();
const router = express.Router();

app.use(loggerMiddleware);
app.use(bodyParser.json());
app.use('/api', router);


app.get('/hello', (request, response) => {
  response.send('Hello world!');
});

app.post('/bodyparser', (request, response) => {
    response.send(request.body);
});

router.get('/userouter', (request, response) => {
    response.send('Hello world!');
});
 
app.get('/customresponse', (request, response) => {
    response.send({
      hostname: request.hostname,
      path: request.path,
      method: request.method,
    });
});

app.listen(4500);