
///////////-------------
import express from 'express';
import { StudentControlers } from './student.controler';

const Router = express.Router();
Router.post('/create-student',StudentControlers.createStudent);


