import { observer } from "mobx-react-lite";
import { Counter } from "../counter";
import CounterStore from "../../store/counterStore";

import { useEffect } from "react";
import { useStores } from "../../rootStoreContext";

const firstCounter = new CounterStore();
const secondCounter = new CounterStore();

export const Wrapper = observer(() => {
  const {
    post: { getPostsAction, posts },
  } = useStores();

  useEffect(() => {
    getPostsAction();
  }, []);

  if (posts?.state === "pending") return <div>Loading</div>;
  if (posts?.state === "rejected") return <div>Error</div>;

  return (
    <>
      <Counter {...firstCounter} total={firstCounter.total} />
      <Counter {...secondCounter} total={secondCounter.total} />
      <div>{posts?.value[0].body}</div>
    </>
  );
});
