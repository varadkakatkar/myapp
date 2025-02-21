import { createBrowserRouter } from 'react-router-dom';
import AppLayout from './components/AppLayout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        errorElement: <NotFound />,
        children: [
            {
                path: '/',  
                element: <Home />,
                errorElement : <NotFound />,
            },
            {
                path: '/about',
                element: <About />,
            },
            {
                path: '/contact',
                element: <Contact />,
            },
            {
                path: '*',
                element: <NotFound />,
            },
        ]
    }
])

export default appRouter;
