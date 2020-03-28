import App from './App'
import HomeScreen from './home/HomeScreen'
import SurveyScreen from './survey/SurveyScreen'
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
                path: '/survey',
                exact: true,
                component: SurveyScreen
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
