import express from "express";
import { studentModel } from "../Models/student.js";
const router = express.Router();

router.post("/data" , async (req , res ) => {
    try {
        // create user 
        const createdUser = await studentModel.create(req.body);
        if(createdUser) {
            res.status(201).json({"message" : "user Created Successfully" , "student" : req.body});
        }else{
            res.status(400).json({"message" : "User not created !"});
        }
    } catch (error) {
        res.json({"error" : error});
}
});

router.get("/student" , async(req , res) => {
    try {
        const students = await studentModel.find({});
        if(students.length === 0)  return res.status(400).send({"message" : "Student Not found "}); 
        return res.status(200).json({"student" : students});
    } catch (error) {
        res.status(500).send("Internal Server Error");
    }
})

export default router ;