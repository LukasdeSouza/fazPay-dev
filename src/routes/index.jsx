import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/login";
import RootLayout from "../components/RootLayout";
import SignUpPage from "../pages/signUp";
import ForgotPasswordPage from "../pages/forgotPassword";
import NotFound404Page from "../pages/404";
import MalesProductsPage from "../pages/products/males";
import FemaleProductsPage from "../pages/products/females";
import JewelryProductsPage from "../pages/products/jewelry";
import SplashPage from "../pages/splash";

export const router = createBrowserRouter([
  {
    path: '/splash',
    element: <SplashPage/>
  },
  {
    path: '/',
    element: <LoginPage/>
  },
  {
    path: '/sign-up',
    element: <SignUpPage/>
  },
  {
    path: '/forgot-password',
    element: <ForgotPasswordPage/>
  },
  {
    path: '/products',
    element: <RootLayout/>,
    errorElement: <NotFound404Page/>,
    children: [
      {
        path: '/products/male',
        element: <MalesProductsPage/>,
      },
      {
        path: '/products/female',
        element: <FemaleProductsPage/>,
      },
      {
        path: '/products/jewelry',
        element: <JewelryProductsPage/>,
      },
    ]
  }
])