import { Request, Response } from "express";
import { StudentService } from "./student.service";

const createStudent=async(req:Request, res:Response)=>{

   try{
    const student=req.body;
    const result =await StudentService.createStudenInDB(student)
res.status(200).json({
    success:true,
    message:"student create success",
    data:result,
})
   }catch(error){
    console.log(error)
   }
}
export const StudentControlers ={
    createStudent
}