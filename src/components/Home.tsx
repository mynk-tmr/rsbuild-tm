import { useEffect, useEffectEvent, useState } from 'react'

function useFetch<R>(fetcher: () => Promise<R>) {
	const [data, setData] = useState<R | null>(null)
	const [error, setError] = useState<Error | null>(null)
	const [isLoading, setIsLoading] = useState(false)
	const run = useEffectEvent(async () => {
		setIsLoading(true)
		setError(null)
		try {
			const data = await fetcher()
			setData(data)
		} catch (e) {
			setError(e as Error)
		} finally {
			setIsLoading(false)
		}
	})
	useEffect(() => void run(), [])
	return { data, error, isLoading, run }
}

export function Home() {
	const base_url = import.meta.env.DEV ? 'http://localhost:3000' : ''
	const { data, error, isLoading } = useFetch(() =>
		fetch(`${base_url}/api/hello`).then((res) => res.text()),
	)
	return (
		<div>
			<h1>Home</h1>
			<article>
				{isLoading && <em>Loading...</em>}
				{error && <s>{error.message}</s>}
				{data && <b>{data}</b>}
				<br />
				<br />
				Built with <mark>dev.css</mark> and <mark>rsbuild</mark>.
			</article>
		</div>
	)
}
