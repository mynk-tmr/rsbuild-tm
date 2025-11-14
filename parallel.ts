import { spawn } from 'node:child_process'

const args = process.argv.slice(2)
const ctr = new AbortController()

args.forEach((arg) => {
	const z = spawn('bun', ['run', arg], { stdio: 'inherit', signal: ctr.signal })
	z.on('exit', (c) => {
		ctr.abort(c)
	})
})
