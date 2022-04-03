import {mongoose} from 'mongoose'

export const ipSchema = new mongoose.Schema({

	ip: {
		//this is to put required in ip
		type: String,
		required: true,
	},
	createdAt: {
		type: Date,
		immutable: true,//cant change
		default: () => Date.now()
	},
})

export const ip = mongoose.model('ip', ipSchema)


export default ip