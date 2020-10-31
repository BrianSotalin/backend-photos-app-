import {Schema,model,Document} from 'mongoose';

const modelo = new Schema({
    title: String,
    description: String,
    imagePath: String
});//indica que lleva cada parte o como se escribe 
interface iPhoto extends Document{
    title: string;
    description: string;
    imagePath: string;
}//indica la interfaz o estructura que es requerida
export default model <iPhoto>('photom',modelo)
    
