import 'dotenv/config'

const uri = process.env.mongo_URI

export const config = {
	MONGO_URI: uri
}

export default config