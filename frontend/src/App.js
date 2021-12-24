import FormCard from "./core/FormCard";
import NavBar from "./core/NavBar";
import workerReducer from "./reducers/workerReducer";
import { Provider } from "react-redux";
import { createStore } from "redux";
import Body from "./core/Body";

const store = createStore(workerReducer);

function App() {
  return (
    <Provider store={store}>
      <NavBar />
      <Body />
    </Provider>
  );
}

export default App;
