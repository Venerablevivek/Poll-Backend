import pool from '../database.js';

export async function createPolls(req,res){
    try{
    
        const {
            title, 
            poll_category, 
            StartDate, 
            EndDate,
            MIN_REWARD,
            MAX_REWARD
        } = req.body;

        if(!title || !poll_category || !StartDate || !EndDate || !MIN_REWARD || !MAX_REWARD){
            return res.status(404).json({
                success:false,
                message: "All fields are mandatory, PLEASE TRY AGAIN !"
            })
        }

        const result = await pool.query
        (` INSERT INTO polls_info 
        (title, poll_category, StartDate, EndDate, MIN_REWARD, MAX_REWARD)
        VALUES (?, ?, ? ,?, ?, ?)
        `,[title, poll_category, StartDate, EndDate, MIN_REWARD, MAX_REWARD]);

        return res.status(200).json({
            success:true,
            message:"Poll Created Successfully",
        })
       
    }catch(error){
        console.log(error.message);
        return res.status(500).json({
            success:false,
            message:error,
        })
    }
}

export default createPolls;