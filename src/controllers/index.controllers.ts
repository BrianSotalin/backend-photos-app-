import {Request,Response} from 'express'
import path from 'path'
import fs from 'fs-extra'
import Photo from '../models/photo';
export async function getPhoto (req:Request,res:Response): Promise<Response>{
    const galeria = await Photo.find();
    return res.json(galeria);
}
export async function getOne (req:Request,res:Response): Promise<Response>{
    const{id} = req.params;
    const foto = await Photo.findById(id);
    return res.json({foto});
}
export async function createPhoto(req:Request,res:Response): Promise<Response>{
   const {title,description } = req.body;
   const newPhoto = {
        title:title,
        description:description,
        imagePath:req.file.path 
   };
   const foto = new Photo(newPhoto);
   await foto.save();

    return res.json({
        message:'Photo successfully saved',
        foto
    })
}

export async  function deleteOne (req:Request,res:Response):Promise<Response>{
    const {id} = req.params;
   const foto = await  Photo.findByIdAndRemove(id);
   if(foto){
       await fs.unlink(path.resolve(foto.imagePath))
   }
     return res.json({
         message:'Photo deleted',
         foto
     })
}
export async  function upPhoto (req:Request,res:Response):Promise<Response>{
    const{id} = req.params;
    const{title,description} = req.body;
    const updated = await Photo.findByIdAndUpdate(id,{
        title,
        description
    },{new:true});
     return res.json({
         mesage:'Sucessfully update',
         updated
     })
}