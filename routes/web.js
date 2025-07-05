import { StudentController } from "../controllers/studentController.js";
import express from "express";
const router=express.Router();
router.get('/',StudentController.getAllDocs);
router.post('/',StudentController.createDoc);
router.get('/edit/:id',StudentController.editDocs);
router.post('/update/:id',StudentController.updateDocsById);
router.post('/delete/:id',StudentController.deleteDocsById);
export default router;