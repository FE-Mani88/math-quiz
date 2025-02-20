import Landing from './pages/Landing/Landing'
import Select from './pages/Select/Select'
import About from './pages/About/About'
import { QuizDetails } from './components/QuizDetails/QuizDetails'
import Erroe404 from './pages/Error404/Erroe404'

export const routes = [
    { path: '/', element: <Landing /> },
    { path: '/select', element: <Select /> },
    { path: '/quiz/:id', element: <QuizDetails /> },
    { path: '*', element: <Erroe404 /> }
]