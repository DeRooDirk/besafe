import  React from 'react'; 
const Settings=React.lazy(()=>import('./pages/Settings'));
const Feed=React.lazy(()=>import('./pages/Feed'));
const Home=React.lazy(()=>import('./pages/Home'));
const Info=React.lazy(()=>import('./pages/Info'));
const routes = [  
    { path: '/Settings', component: Settings },  
    { path: '/Feed', component: Feed }, 
    { path: '/Home', component: Home }, 
    { path: '/Info', component: Info },    
];  
export default routes;  