import routesConfig from '~/config/routes';

//import pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';

//import layout
import HeaderOnly from '~/layouts/HeaderOnly';

//public route

const publicRoutes = [
    { path: routesConfig.home, component: Home },
    { path: routesConfig.following, component: Following },
    { path: routesConfig.profile, component: Profile },
    { path: routesConfig.upload, component: Upload, layout: HeaderOnly },
    { path: routesConfig.search, component: Search, layout: null },
    { path: routesConfig.explore, component: Profile },
    { path: routesConfig.live, component: Profile },

];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
