import pool from '../database.js';

export async function getallPolls(req,res){
    try{
        const pollData = await pool.query("SELECT * FROM polls_info");
        return res.status(200).json({
            success: true,
            message: "Data Fetched Successfully",
            pollsData: pollData[0]
        });

        //get questions
        
    }catch(error){
        console.log(error.message);
        return res.status(500).json({
            success:false,
            message:error,
        })
    }
}

export default getallPolls;