import express from 'express'
import db from '../model/model.js'

const router = express.Router()


router.get('/', (req, res) => {
	db.find((err, data) => {
		if (err) {
			return next(err)
		} else {
			res.json(data)
		}
	})
})


router.get('/fetchState', (req, res) => {
	db.find({bool:true},(err, data,next) => {
		if (err) {
			return next(err)
		} else {
			res.json(data)
		}
	})
})

router.post('/keepTrue', (req, res) => {
	db.updateMany(req.body,{bool:false},(err, data,next) => {
		if (err) {
			return next(err)
		} else {
			res.json(data)
		}
	})
})

router.post('/createip', (req, res) => {

	db.findOneAndUpdate(req.body,{bool:true},(err, data,next) => {
		if (err) {
			return next(err)
		} else if (data) {
			console.log('this already saved')
		} else {
			db.create(req.body, (err, data,next) => {
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