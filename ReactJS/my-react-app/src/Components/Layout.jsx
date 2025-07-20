import App from "../App";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Sample from "./Sample";
import Navbar from "./Navbar";
import { lazy, Suspense } from "react";
//import { useLocation, useNavigate, useParams } from "react-router-dom"

function Layout() {
// const {id} = useParams();
// const loc = useLocation();
// const queryParam = new URLSearchParams(loc.search)
// const city = queryParam.get('city');
// const country = queryParam.get('Country');
// const navigate = useNavigate();
const Databinding = lazy(() => import('./Sample'))

        return (
        <>
        <BrowserRouter>
        <Navbar/>
        <Suspense fallback={<div>Loading......</div>}>
            <Routes>
            <Route path="/sample" element={<Sample/>}/>
            <Route path="/app" element={<App/>}/>
            </Routes>
        </Suspense>
        </BrowserRouter>

        </>)
}

export default Layout;