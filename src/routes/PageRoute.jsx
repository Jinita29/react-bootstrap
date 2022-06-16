import {lazy, Suspense} from "react";
import {Route, Routes} from "react-router-dom";
import PublicLayout from "../layout/PublicLayout";
import {PrivateLayout} from "../layout/PrivateLayout";
import Loader from "../components/Loader";

const Home = lazy(() => import('../pages/home/Home'));
const About = lazy(() => import('../pages/about/About'));
const Login = lazy(() => import('../authentication/Login'));
const Register = lazy(() => import('../authentication/Register'));
const Error = lazy(() => import('../components/Error'));

const PageRoute = () => {
    return (
        <>
            <Routes>
                <Route path={'/'} element={<PublicLayout/>}>
                    <Route index path={'/'} element={<Suspense fallback={<Loader/>}><Home/></Suspense>}/>
                    <Route exact path={'about'} element={<Suspense fallback={<Loader/>}><About/></Suspense>}/>
                </Route>
                <Route path={'/'} element={<PrivateLayout/>}>
                    <Route exact path={'login'} element={<Suspense fallback={<Loader/>}><Login/></Suspense>}/>
                    <Route exact path={'register'} element={<Suspense fallback={<Loader/>}><Register/></Suspense>}/>
                </Route>
                <Route path={'*'} element={<PrivateLayout/>}>
                    <Route path={'*'} element={<Suspense fallback={'Loading'}><Error/></Suspense>}/>
                </Route>
            </Routes>
        </>
    )
}

export default PageRoute;