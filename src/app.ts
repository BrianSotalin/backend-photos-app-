import express from 'express';
import morgan from 'morgan';
import indexRoutes from './routes/index.routes'
import path from 'path'

const app = express();
//settings
app.set('port', process.env.PORT || 9000);/*se indica si ya existe un puerto lo utilie caso contrario se le da un puerto para que lo escuche */

//middlewares
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use('/app',indexRoutes);

//Public files
app.use('/uploads',express.static(path.resolve('uploads')));

export default app;