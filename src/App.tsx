import Header from "components/UI/header";
import React, { useEffect, useCallback } from "react";
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
import Component from "components/UI";
import { useGetCodeRegionQuery } from "sever/code-region-api/codeApi";
import { useDispatch, useSelector } from "react-redux";
import { getRegion } from "reducers/user/userSlice";
import { IFlag } from "interface";
import Login from "components/UI/header/login/Login";
import { RootState } from "store";
import { ModalName } from "utils/modalName";
const router = createBrowserRouter([
  {
    path: "/academy",
    element: <AcademyScreen />,
    index: true,
  },
]);
const Root = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isShow =
    useSelector((state: RootState) => state.modalSlice.nameModal) ===
    ModalName.LOGIN;
  const getRegionUser = useCallback(async () => {
    try {
      let response = await fetch("https://api.db-ip.com/v2/free/self").then(
        (res) => res.json()
      );
      if (!response?.error) {
        dispatch(getRegion({ region: response.countryCode }));
      } else {
        throw response;
      }
    } catch (error) {
      dispatch(getRegion({ region: "VN" }));
    }
  }, []);

  useEffect(() => {
    getRegionUser();
    if (location.pathname === "/") {
      navigate("/academy");
    }
  }, []);

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <Login show={isShow} />
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
            <Route path="/storybook" element={<Component />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
