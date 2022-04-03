import express from 'express'
import ip from '../model/model.js'

const router = express.Router()


router.get('/',(req,res)=>{
	ip.find((err,data)=>{
		if(err){
			return next(err)
		}else{
			res.json(data)
		}
	})
})



router.post('/createip',(req,res,next)=>{
	console.log(req.body)
	ip.create(req.body,(err,data)=>{
		if(err){
			return next(err)
		}else{
			res.json(data)
		}
	})
})


export default router