import {
  //   action,
  //   computed,
  //   makeObservable,
  //   observable,
  makeAutoObservable,
} from "mobx";

class CounterStore {
  count = 0;

  constructor() {
    // makeObservable(
    //   this,
    //   {
    //     count: observable,
    //     total: computed,
    //     increment: action,
    //     decrement: action,
    //   },
    // );
    makeAutoObservable(this, {});
  }

  get total() {
    return this.count * 2;
  }

  increment = (value: number) => {
    this.count += value;
  };

  decrement = (value: number) => {
    this.count -= value;
  };
}

export default CounterStore;
