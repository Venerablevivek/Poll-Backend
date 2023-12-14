import pool from '../../database.js';

export async function updateQuestion(req,res){
    try{

        const question_id = req.params.id;
    
        const {
            Question_text, 
            type,
            options
        } = req.body;

        if(!question_id || !Question_text || !type || !options){
            return res.status(404).json({
                success:false,
                message: "All fields are mandatory, PLEASE TRY AGAIN !"
            })
        }

        const opt = JSON.stringify(options);

        const updateQuestionResult = await pool.query
        (`UPDATE questions
        SET Question_text = ?, type = ?, options = ?
        WHERE id = "${question_id}"`,[ Question_text, type, opt]); 

        if(updateQuestionResult[0].changedRows===0){
            return res.status(500).json({
                success:false,
                message:"Enter Correct Question Id or make changes to the Questions ",
            })
        }

        return res.status(200).json({
            success:true,
            message:"Question Updated Successfully",
        })
       
    }catch(error){
        console.log(error.message);
        return res.status(500).json({
            success:false,
            message:"Cannot create Question",
        })
    }
}

export default updateQuestion;