import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { logger } from 'hono/logger'
import hello from './_src/hello'

const app = new Hono().basePath('/api')

if (!process.env.VERCEL) {
	app.use(cors({ origin: '*' }))
	app.use(logger())
}

app.get('/hello', (c) => {
	return c.text(hello())
})

export default app
