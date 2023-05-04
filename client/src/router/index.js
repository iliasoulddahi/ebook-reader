import { createBrowserRouter, redirect } from "react-router-dom"
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import Layout from "../components/Layout";
import WelcomePage from "../pages/WelcomePage";
import YourEbooksPage from "../pages/YourEbooksPage";
import EbookViewPage from "../pages/EbookViewPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    loader:()=>{
      if( !localStorage.access_token ){
          return redirect('/auth')
      }
      return null
  },
    children:[
      {
        path: "",
        element: <HomePage/>,
      },
      {
        path: "welcome",
        element: <WelcomePage/>,
      },     
      {
        path: "your-ebooks",
        element: <YourEbooksPage/>,
      },   
      {
        path: "ebook-view/:id",
        element: <EbookViewPage/>,
      }   
    ]
  },
  {
    path: "/auth",
    element: <LoginPage/>,
  },
]);

export default router;