import pool from '../database.js';

export async function updatePoll(req,res){
    try{
    
        const {
            poll_id,
            title, 
            poll_category, 
            StartDate, 
            EndDate,
            MIN_REWARD,
            MAX_REWARD
        } = req.body;

        if(!poll_id){
            return res.status(404).json({
                success:false,
                message: "Poll id is mandatory, Enter poll-id"
            })
        }

        const updatePoll = await pool.query
        (`UPDATE polls_info
        SET title = ?, poll_category = ?, StartDate = ?, EndDate = ?, MIN_REWARD = ?, MAX_REWARD = ?
        WHERE id = "${poll_id}"`,[title, poll_category, StartDate, EndDate, MIN_REWARD, MAX_REWARD]); 
    
        if(updatePoll[0].changedRows===0){
            return res.status(500).json({
                success:false,
                message:"Enter Correct Poll Id or make changes to the Poll ",
            })
        }

        return res.status(200).json({
            success:true,
            message:"Poll Data Updated Successfully",
        })
       
    }catch(error){
        console.log(error.message);
        return res.status(500).json({
            success:false,
            message:error,
        })
    }
}

export default updatePoll;