import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { counterAction } from "./store/counter";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Feed from "./components/feed/Feed";
function App() {
  const count = useSelector((state) => state.counter.counter);
  const dispatch = useDispatch();

  const setCounter = () => {
    dispatch(counterAction.increament(2));
  };

  return (
    <div className="app">
      <Header />
      <div className="appBody">
        <Sidebar />
        <Feed />
      </div>
    </div>
  );
}

export default App;
