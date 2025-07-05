import  Student  from "../models/student.js";
class StudentController {
    static createDoc = async (req, res) => {
        try {
            const result=new Student(req.body);
            const savedData = await result.save();
            res.redirect("/student");
        } catch (error) {
            console.error("Error saving data:", error);
        }
    }
    static getAllDocs = async (req, res) => {
        try {
            const students = await Student.find({});
            res.render("index", {data: students });
        } catch (error) {
            console.error("Error reading data:", error);
        }
    }
    static editDocs = async (req, res) => {
        try {
            const result = await Student.findById(req.params.id);
            res.render("edit",{data: result});
        } catch (error) {
            console.error("Error updating data:", error);
        }
    }
    static updateDocsById = async (req, res) => {
        try {
            const result = await Student.findByIdAndUpdate(req.params.id,req.body);
            res.redirect("/student");
        } catch (error) {
            console.error("Error updating data:", error);
        }
    }
    static deleteDocsById = async (req, res) => {
        try {
            const result= await Student.findByIdAndDelete(req.params.id);
            res.redirect("/student");
        } catch (error) {
            console.error("Error updating data:", error);
        }
    }
}
export { StudentController };