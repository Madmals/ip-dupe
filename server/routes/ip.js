import express from 'express'
import ip from '../model/model.js'

const router = express.Router()


router.get('/allIp',(req,res)=>{
	ip.find((err,data)=>{
		if(err){
			return next(err)
		}else{
			res.json(data)
		}
	})
})



router.post('/newIp',(req,res,next)=>{
	ip.create((err,data)=>{
		if(err){
			return next(err)
		}else{
			res.json(data)
		}
	})
})


export default router