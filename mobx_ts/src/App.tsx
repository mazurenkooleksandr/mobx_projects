import "./App.css";

import { Wrapper } from "./components/wrapper";
import { RootStoreContext } from "./rootStoreContext";
import RootStore from "./store";

function App() {
  return (
    <RootStoreContext.Provider value={new RootStore()}>
      <div className="App">
        <Wrapper />
      </div>
    </RootStoreContext.Provider>
  );
}

export default App;
