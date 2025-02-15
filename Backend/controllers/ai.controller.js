import { generateContent } from "../services/ai.service.js";

export const getReview = async (req , res) => {
    try {
        const {code} = req.body ;
        
        // prompt validation 
        if(!code){
            return res.status(404).json({message : "code required !"});
        }

        const response = await generateContent(code);
        return res.status(200).json(response);
    } catch (error) {
        console.log("Error in ai-controller : " , error.message);
        res.status(500).send("Internal Server Error ");
    }
}