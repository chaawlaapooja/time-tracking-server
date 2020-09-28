const task = require('../database/models/task')

module.exports = (req, res) => {
    const {action, name, tags, _id, timeStamp} = req.body
    if(action==='add')
        task.create({name,tags, startTime:null, endTime:null}, (error, result)=>{
            if(error)
                return res.status(400).json('error')
            else{
                return res.status(200).json(result)

            }
        })
    else if(action==='update'){
        task.updateOne({_id:_id},{$set :
            {
                name, tags
            }}, (error, result)=>{
                    if(error)
                        return res.status(400).json('error')
                    else{
                        return res.status(200).json('success')
                    }
                        
            }
        )
    }
    else if(action==='updateStartTime')
            task.updateOne({_id:_id},{$set :
                {
                    startTime : timeStamp
                }}, (error, result)=>{
                        if(error)
                            return res.status(400).json('error')
                        else{
                            return res.status(200).json('success')
                        }
                            
                }
            )
    else if(action==='updateEndTime')
            task.updateOne({_id:_id},{$set :
                {
                    endTime : timeStamp
                }}, (error, result)=>{
                        if(error)
                            return res.status(400).json('error')
                        else{
                            return res.status(200).json('success')
                        }
                            
                }
            )
    else if(action==='deleteTask')
        task.deleteOne({_id:_id}, (error) => {
            if(error) 
                return res.status(400).json('error')
            else
                return res.status(200).json('success')
        })
    }