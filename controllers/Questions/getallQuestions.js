import pool from '../../database.js';

export async function getallQuestions(req,res){
    try{

        const pollData = await pool.query("SELECT * FROM questions");
        return res.status(200).json({
            success: true,
            message: "Data Fetched Successfully",
            pollsData: pollData[0]
        });
       
    }catch(error){
        console.log(error.message);
        return res.status(500).json({
            success:false,
            message:"Cannot create Question",
        })
    }
}

export default getallQuestions;