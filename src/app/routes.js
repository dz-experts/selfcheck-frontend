import App from './App'
import HomeScreen from './home/HomeScreen'
import SelfCheckScreen from './self-check/SelfCheckScreen'
import AboutScreen from './home/AboutScreen'
import LegalScreen from './home/LegalScreen'


const routes = [
    {
        component: App,
        routes: [
            {
                path: '/',
                exact: true,
                component: HomeScreen
            },
            {
                path: '/self-check',
                exact: true,
                component: SelfCheckScreen
            },
            {
                path: '/about',
                exact: true,
                component: AboutScreen
            },
            {
                path: '/legal-notice',
                exact: true,
                component: LegalScreen
            }
        ]
    }
]

export default routes
