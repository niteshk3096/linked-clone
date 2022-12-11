import "./App.css";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useSelector, useDispatch } from "react-redux";
import Router from "./router/Router";
import { userAction } from "./store/user";
import { loaderAction } from "./store/loader";
import { auth } from "./firebase";
import { snackbarAction } from "./store/snackbar";
import { Snackbar } from "@mui/material";
import Alert from "@mui/material/Alert";
import { Backdrop } from "@mui/material";
import { CircularProgress } from "@mui/material";
function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.loader.isLoading);
  const { mesaageStatus, message, severity } = useSelector(
    (state) => state.snackbar
  );
  useEffect(() => {
    const userState = async function () {
      dispatch(loaderAction.setLoading(true));
      onAuthStateChanged(auth, (user) => {
        if (user) {
          dispatch(userAction.login(user));
          dispatch(loaderAction.setLoading(false));
        } else {
          dispatch(userAction.logout());
          dispatch(loaderAction.setLoading(false));
        }
      });
    };
    userState();
    return () => {
      userState;
    };
  }, []);
  return (
    <div className="app">
      <Snackbar
        open={mesaageStatus}
        autoHideDuration={6000}
        onClose={() => dispatch(snackbarAction.disableSnackbar())}
      >
        <Alert variant="filled" severity={severity} className="snackbarMessage">
          {message}
        </Alert>
      </Snackbar>
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
