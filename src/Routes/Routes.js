import AboutYourPlace from "../Pages/HostingPage/AboutPlace/AboutYourPlace";
import HostingPage from "../Pages/HostingPage/HostingPage";

import Main from "../Pages/Mainpage/Main";
import NewLocation from "../Pages/NewLocation/NewLocation";

const routes = [
    { path: "/", element: <Main /> },
    { path: "/newLocations", element: <NewLocation /> },
    { path: "/become-a-host", element: <HostingPage /> },
    { path: "/become-a-host/about-your-place", element: <AboutYourPlace /> }

]


export default routes