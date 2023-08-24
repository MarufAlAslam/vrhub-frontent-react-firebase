import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/login";
import SignUp from "../pages/signup";
import Main from "../layouts/main.layout";
import Homepage from "../pages/home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login/>
    },
    {
        path: "/signup",
        element: <SignUp/>
    },
    {
        path: "/main",
        element: <Main/>,
        children: [
            {
                path: "/main",
                element: <Homepage/>
            }
        ]
    }
])

export default router;