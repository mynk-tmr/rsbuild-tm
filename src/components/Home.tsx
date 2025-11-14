import { Suspense, useRef } from 'react'
import { Link, type RouteObject } from 'react-router'

export const HOME: RouteObject = { Component: Home, path: '/home' }

const base_url = import.meta.env.DEV ? 'http://localhost:3000' : ''

function Home() {
	const ref = useRef(
		fetch(`${base_url}/api/hello`)
			.then((res) => res.text())
			.catch((e) => e.message),
	)
	return (
		<div>
			<h1>Home</h1>
			<article>
				<Suspense fallback={<em>Loading...</em>}>
					<b>{ref.current}</b>
				</Suspense>
				<br />
				<br />
				Built with <mark>dev.css</mark> and <mark>rsbuild</mark>. See 404 page{' '}
				<Link to='/404'>here</Link>.
			</article>
		</div>
	)
}
