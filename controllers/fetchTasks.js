const task = require('../database/models/task')

module.exports = async(req, res)=>{
	task.find((error,result) => {
       if(error) 
            return res.status(400).json('error')
        else{
            return res.status(200).json(result)
        }
            
    })
}