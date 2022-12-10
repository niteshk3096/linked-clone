import "./App.css";
import { useSelector, useDispatch } from "react-redux";
// import { loaderAction } from "./store/loader";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Feed from "./components/feed/Feed";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Router from "./router/Router";
import { Backdrop } from "@mui/material";
import { CircularProgress } from "@mui/material";
function App() {
  const isLoading = useSelector((state) => state.loader.isLoading);
  return (
    <div className="app">
      {isLoading ? (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={isLoading}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      ) : (
        <Router />
      )}
    </div>
  );
}

export default App;
