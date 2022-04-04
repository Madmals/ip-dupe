import express from 'express'
import mongoose from 'mongoose'
import ip from '../model/model.js'

const router = express.Router()


router.get('/', (req, res) => {
	ip.find((err, data) => {
		if (err) {
			return next(err)
		} else {
			res.json(data)
		}
	})
})



router.post('/createip', (req, res, next) => {
	
	ip.findOneAndUpdate(req.body,{bool:true},(err, data,next) => {
		if (err) {
			return next(err)
		} else if (data) {
			console.log('this already saved')
		} else {

			ip.create(req.body, (err, data) => {
				if (err) {
					return next(err)
				} else {
					res.json(data)
				}
			})
		}
	})
})


export default router