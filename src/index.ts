import app from './app';
import {conection} from './database'

async function rock() {
   conection();
   await app.listen(app.get('port'));
   console.log('Server is working',app.get('port'))
}
rock();
