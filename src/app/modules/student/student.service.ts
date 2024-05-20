import { StudentModel } from '../student.model';
import { Student } from './student.interface';

const createStudentInDb = async (student: Student) => {
  const result = await StudentModel.create(student);
  return result;
};
const getStudentsFromDb = async () => {
  const result = await StudentModel.find();
  return result;
};
const getSingleStudent = async (id: string) => {
  const result = await StudentModel.findOne({ id });
  return result;
};
export const studentService = {
  createStudentInDb,
  getStudentsFromDb,
  getSingleStudent,
};
