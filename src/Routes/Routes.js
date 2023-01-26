import HostingPage from "../Pages/HostingPage/HostingPage";
import Main from "../Pages/Mainpage/Main";
import NewLocation from "../Pages/NewLocation/NewLocation";

const routes = [
    { path: "/", element: <Main /> },
    { path: "/newLocations", element: <NewLocation /> },
    { path: "/hosting", element: <HostingPage /> },

]

export default routes