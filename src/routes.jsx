import App from "./App";
import Channel from "./components/Channel";
import Errorpage from "./components/Errorpage";
import Videos from "./components/Videos";


const routes = [
    {
        path: "/",
        element:<App/>,
        errorElement: <Errorpage />
        
    },
    {
        path:"/about",
        element:<About />,
        errorElement:<Errorpage/>

    },
    {
        path:"/reposts",
        element:<Videos/>,
        errorElement:<Errorpage/>
    },
    {
        path:"/channel",
        element:<Channel/>,
        errorElement: <Errorpage/>
    }
]

export default routes ;