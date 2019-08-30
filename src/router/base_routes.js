import Dashboard from '..views/dashboard';
import Page404 from '../views/page404';

let routes=[
    {
        path:'/',
        component:Dashboard,
    },
    {
        path:'/404',
        component:Page404,
    }
]
export default routes;