import App from './App'
import HomeScreen from './home/HomeScreen'
import SurveyScreen from './survey/SurveyScreen'


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
            }            
        ]
    }
]

export default routes
