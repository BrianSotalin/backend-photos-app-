import {connect} from 'mongoose';

export async function conection(){
  await  connect('mongodb://localhost/gallery-db',{
       useNewUrlParser:true,
       useUnifiedTopology:true,
       useFindAndModify:false
   });
   console.log('Database is working')
}