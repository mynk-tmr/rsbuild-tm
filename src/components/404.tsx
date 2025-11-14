import { type RouteObject, useNavigate } from 'react-router'

export const NOT_FOUND: RouteObject = { Component: NotFound, path: '*' }

function NotFound() {
	const goto = useNavigate()
	return (
		<div>
			<h1>Not Found</h1>
			<button type='button' onClick={() => goto('/home', { replace: true })}>
				Go Back
			</button>
		</div>
	)
}
