import pool from '../../database.js';

export async function createQuestion(req,res){
    try{
    
        const {
            poll_id, 
            Question_text, 
            type,
            options
        } = req.body;

        if(!poll_id || !Question_text || !type || !options){
            return res.status(404).json({
                success:false,
                message: "All fields are mandatory, PLEASE TRY AGAIN !"
            })
        }

        const opt = JSON.stringify(options);

        const result = await pool.query
        (`INSERT INTO questions 
        (poll_id, Question_text, type, options)
        VALUES (?, ?, ?, ?);
        `,[poll_id, Question_text, type, opt]);

        return res.status(200).json({
            success:true,
            message:"Question Created in Poll Successfully",
        })
       
    }catch(error){
        console.log(error.message);
        return res.status(500).json({
            success:false,
            message:"Cannot create Question",
        })
    }
}

export default createQuestion;