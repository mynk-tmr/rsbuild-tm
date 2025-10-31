import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MainRouter } from './router'

const rootEl = document.getElementById('root')
if (rootEl) {
	const root = createRoot(rootEl)
	root.render(
		<StrictMode>
			<MainRouter />
		</StrictMode>,
	)
} else {
	alert('Root element not found')
}
