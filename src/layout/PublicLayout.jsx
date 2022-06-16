import {lazy, Suspense} from "react";
import {Outlet} from 'react-router-dom';
import Loader from "../components/Loader";

const Header = lazy(() => import('../components/common/Header'));
const Footer = lazy(() => import('../components/common/Footer'));

const PublicLayout = (props) => {
    return (
        <>
            <Suspense fallback={<Loader/>}><Header/></Suspense>
            <main className={'main-content'}>
                <Outlet/>
            </main>
            <Suspense fallback={<Loader/>}><Footer/></Suspense>
        </>
    )
}

export default PublicLayout;