//import components
import NavBar from "./core/NavBar";
import Body from "./core/Body";
//import for redux-state management
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducers";

const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <NavBar />
      <Body />
    </Provider>
  );
}

export default App;
