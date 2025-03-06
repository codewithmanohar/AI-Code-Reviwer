import mongoose from "mongoose" ;

const studentSchema = mongoose.Schema({
    Name : {
        type : String , 
        required : true ,
    },

    Email : {
        type : String , 
        required : true ,
        unique : true 
    },

    Mobile : {
        type : Number , 
        required : true ,
        unique : true 
    },
    
    Gender : {
        type : String , 
        required : true ,
    },

    Course : {
        type : String , 
        required : true ,
    },

    Branch : {
        type : String , 
        required : true ,
    },

    Address : {
        type : String , 
        default : "NA"
    },

    PinCode : {
        type : String , 
        required : true ,
    },

    State : {
        type : String , 
        required : true ,
    },

})

export const studentModel = mongoose.model("student" , studentSchema);