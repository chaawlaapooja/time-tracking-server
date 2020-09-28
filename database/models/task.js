const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
	name : {type:String, required:true},
	tags : Array,
	startTime : Date,
	endTime : Date,
	createdAt:{type:Date,default:new Date()}
})

const task = mongoose.model('task', taskSchema)

module.exports = task