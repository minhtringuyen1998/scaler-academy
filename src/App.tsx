import Header from "components/UI/header";
import React, { useEffect } from "react";
import {
  createBrowserRouter,
  Route,
  Routes,
  BrowserRouter,
  useLocation,
  useNavigate,
  Outlet,
} from "react-router-dom";
import AcademyScreen from "screen/academy/presenters/AcademyScreen";
import { Helmet } from "react-helmet";
import Footer from "components/UI/footer/Footer";
const router = createBrowserRouter([
  {
    path: "/academy",
    element: <AcademyScreen />,
    index: true,
  },
]);
const Root = () => {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/academy");
    }
  }, []);
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
function App() {
  return (
    <>
      <Helmet>
        <title>Scaler Academy: Scale Your Tech Career</title>
      </Helmet>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Root />}>
            <Route path="academy" element={<AcademyScreen />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
