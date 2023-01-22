import Main from "../Pages/Mainpage/Main";
import NewLocation from "../Pages/NewLocation/NewLocation";

const routes = [
    { path: "/", element: <Main /> },
    { path: "/newLocations", element: <NewLocation /> },
]

export default routes