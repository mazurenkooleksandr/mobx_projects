import { observer } from "mobx-react-lite";
import store from "./store";

const Header = observer(() => {
  const { countOfCompleted } = store.business;
  return <h1>Completed: {countOfCompleted}</h1>;
});

export default Header;
