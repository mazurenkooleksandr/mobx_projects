import { makeAutoObservable } from "mobx";
import UIStore from "./UIStore";
import BusinessStore from "./BusinessStore";

class RootStore {
  ui = new UIStore();
  business = new BusinessStore();
  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }
}

const rootInstance = new RootStore();
export default rootInstance;
