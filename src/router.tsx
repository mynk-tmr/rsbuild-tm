import { createBrowserRouter, Outlet, RouterProvider } from 'react-router'
import { NOT_FOUND } from './components/404'
import { HOME } from './components/Home'
import { routeLog, sendtoHome } from './middlewares/roots'

const routes = createBrowserRouter([
	{
		path: '/',
		middleware: [routeLog, sendtoHome],
		element: <Outlet />,
		children: [HOME, NOT_FOUND],
	},
])

export const MainRouter: React.FC = () => {
	return <RouterProvider router={routes} />
}
