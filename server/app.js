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
	})
} catch (error) {
	handleError(error)
}


app.use(express.json())
app.use(cors())
app.use('/api', useRouter)




app.listen(port, () => {
	console.log(`listening to port ${port}`)
})



