import React from "react";
import Routes from "./Routes/Routes";
import { Provider } from "react-redux";
import { store } from "./redux/Store";
import Comics from "./Components/Comics";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div>
        {/* <Routes /> */}
        <Comics />
      </div>
    </Provider>
  );
}

export default App;
