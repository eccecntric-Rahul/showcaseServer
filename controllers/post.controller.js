import EducationModel from "../model/EducationSchema";
import ExperienceModel from "../model/ExperienceSchema";
import PersonalDetailsModel from "../model/PersonalDetailsSchema";
import PhotosSchema from "../model/PhotosSchema";
import ProfileModel from "../model/ProfileSchema";
import ProjectModel from "../model/ProjectSchema";
import ReviewSchema from "../model/ReviewSchema";
import SkillModel from "../model/SkillModel";
import TrainingModel from "../model/TrainingSchema";
import nodemailer from 'nodemailer';

const postEducation= async (req,res)=>{
    try{
        const response = await EducationModel.create({...req.fields});
        return res.status(200).send(response);
    }catch(err){
        console.log(err)
        return res.status(400).send({message:err.message});
    }
}
export const postExperience= async (req,res)=>{
    try{
        const response = await ExperienceModel.create({...req.fields});
        return res.status(200).send(response);
    }catch(err){
        console.log(err)
        return res.status(400).send({message:err.message});
    }
}

export const postPersonalDetails= async (req,res)=>{
    try{
        const response = await PersonalDetailsModel.create({...req.fields});
        return res.status(200).send(response);
    }catch(err){
        console.log(err)
        return res.status(400).send({message:err.message});
    }
}

export const postProject= async (req,res)=>{
    try{
        const response = await ProjectModel.create({...req.fields});
        return res.status(200).send(response);
    }catch(err){
        console.log(err)
        return res.status(400).send({message:err.message});
    }
}

export const postSkill= async (req,res)=>{
    try{
        const response = await SkillModel.create({...req.fields});
        return res.status(200).send(response);
    }catch(err){
        console.log(err)
        return res.status(400).send({message:err.message});
    }
}

export const postTraining= async (req,res)=>{
    try{
        const response = await TrainingModel.create({...req.fields});
        return res.status(200).send(response);
    }catch(err){
        console.log(err)
        return res.status(400).send({message:err.message});
    }
}

export const postProfile= async (req,res)=>{
    try{
        const response = await ProfileModel.create({...req.fields});
        return res.status(200).send(response);
    }catch(err){
        console.log(err)
        return res.status(400).send({message:err.message});
    }
}

export const postReview= async (req,res)=>{
    try{
        const response = await ReviewSchema.create({...req.fields});
        let transporter = nodemailer.createTransport({
            service: 'gmail',
        auth: {
          user: process.env.EMAIL,
          pass: process.env.APP_PASSWORD
        }
          });
          const text = `
          Name - ${req.fields.guestName}
          Review - ${req.fields.comment}
          Liked - ${req.fields.like}`
          let info = await transporter.sendMail({
            from: `"TechRahul" <${process.env.EMAIL}>`, // sender address
            to: `${process.env.RECIEVER_EMAIL1},${process.env.RECIEVER_EMAIL2}`, // list of receivers
            subject: "New Review Posted on TechRahul!", // Subject line
            text: text, 
          });
          console.log("Message sent: %s", info.messageId);
          console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        return res.status(200).send(response);
    }catch(err){
        console.log(err.message)
        return res.status(400).send({message:err.message});
    }
}

export const postPhotos= async (req,res)=>{
    try{
        const response = await PhotosSchema.create({...req.fields});
        return res.status(200).send(response);
    }catch(err){
        console.log(err)
        return res.status(400).send({message:err.message});
    }
}

export default postEducation;