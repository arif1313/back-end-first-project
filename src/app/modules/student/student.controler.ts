import { Request, Response } from 'express';
import { studentService } from './student.service';
// import { error } from 'console';

const createAstudent = async (req: Request, res: Response) => {
  try {
    const student = req.body.student;
    const result = await studentService.createStudentInDb(student);

    res.status(200).json({
      success: true,
      message: 'student created succes',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};
const getStudents = async (req: Request, res: Response) => {
  try {
    const result = await studentService.getStudentsFromDb();
    res.status(200).json({
      success: true,
      message: 'find success',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};
const getAsingleStudent = async (req: Request, res: Response) => {
  const studentInfo = req.params;
  const result = await studentService.getSingleStudent(studentInfo.id);
  res.status(200).json({
    success: true,
    message: 'got asingle data',
    data: result,
  });
};
export const StudentControlers = {
  createAstudent,
  getStudents,
  getAsingleStudent,
};
