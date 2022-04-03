import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import config from './config.js'
import 'dotenv/config'
import useRouter from './routes/ip.js'



const app = express()

const port = process.env.PORT || 5000


try {
	mongoose.connect(config.MONGO_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true
	}).then(()=>{
		console.log('DB connected')
	}),
	error=>{
		console.log(`this is ${error}`)
	}
} catch (error) {
	handleError(error)
}


app.use(express.json())
app.use(express.urlencoded())
app.use(cors())
app.use('/api', useRouter)


app.use('*',(req,res)=>{
	res.send('404')
})

app.use((err,req,res,next)=>{
	console.error(err.stack)
	res.status(500).send('something is broke')
})






app.listen(port, () => {
	console.log(`listening to port ${port}`)
})



