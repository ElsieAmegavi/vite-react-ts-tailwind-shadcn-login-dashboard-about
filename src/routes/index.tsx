import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import { Home } from "../pages/Home"
import { About } from "../pages/About"
import { Login } from "../pages/Login"
import Contact from "../pages/Contact"
import Sell from "../pages/Sell"
import Shop from "../pages/Shop"
import { BuyerSignup } from "../pages/Signup/BuyerSignup"
import { SellerSignup } from "../pages/Signup/SellerSignup"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "sell",
        element: <Sell />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "buyer-signup",
        element: <BuyerSignup />
      },
      {
        path: "seller-signup",
        element: <SellerSignup />
      }
    ],
  },
]) 