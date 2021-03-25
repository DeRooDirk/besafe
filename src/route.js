import  React from 'react'; 
const Settings=React.lazy(()=>import('./pages/Settings'));
const Feed=React.lazy(()=>import('./pages/Feed'));

const routes = [  
    { path: '/Settings', component: Settings },  
    { path: '/Feed', component: Feed },  
    
];  
export default routes;  