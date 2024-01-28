import { lazy } from "react"

const App = lazy(() => import('../App'))
const AdminLogin = lazy(() => import('../pages/Authentication/AdminLogin'))

const routes = [
    {
        path: '/',
        element: <App />
    },
    {
        path: '/admin-login',
        element: <AdminLogin />,
    },
]

export default routes