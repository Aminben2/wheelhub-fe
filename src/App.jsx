import "./App.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Login from "./user-pannel/pages/auth/login/Login";
import Home from "./user-pannel/pages/home/Home";
import Signup from "./user-pannel/pages/auth/signup/Signup";
import AuthLayout from "./layouts/AuthLayout";
import AdminPannelLayout from "./layouts/AdminPannelLayout";
import Index from "./admin-pannel/pages/Index/Index";
import Users from "./admin-pannel/pages/users/Users";
import NotFound from "./user-pannel/pages/404/NotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route element={<AuthLayout />}></Route>
      </Route>

      <Route path="/admin" element={<AdminPannelLayout />}>
        <Route index element={<Index />} />
        <Route path="users" element={<Users />} />
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />

      <Route path="*" element={<NotFound />} />
      {/* <Route path="/500" element={<ServerError />} />  */}
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
