import pool from '../database.js';

export async function getonePoll(req,res){
    try{
        //user Id to fetch specific poll Data
        // we can fetch it from req body also
        const id = req.params.id;
        const pollData = await pool.query
        (`SELECT * 
        FROM polls_info
        WHERE id = ?
        `,[id]);
       
        return res.status(200).json({
            success: true,
            message: "Poll Data Fetched Successfully",
            pollsData: pollData[0]
        });
    }catch(error){
        console.log(error.message);
        return res.status(500).json({
            success:false,
            message:error,
        })
    }
}

export default getonePoll;