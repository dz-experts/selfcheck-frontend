import App from './App'
import HomeScreen from './home/HomeScreen'
import SurveyScreen from './survey/SurveyScreen'
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
                path: '/legal-notice',
                exact: true,
                component: LegalScreen
            }
        ]
    }
]

export default routes
