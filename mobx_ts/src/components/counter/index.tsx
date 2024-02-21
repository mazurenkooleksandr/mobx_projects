type Props = {
  count: number;
  total: number;
  increment: (value: number) => void;
  decrement: (value: number) => void;
};

export const Counter = ({ increment, decrement, count, total }: Props) => (
  <>
    <button onClick={() => increment(1)}>+</button>
    <span>{count}</span>
    <button onClick={() => decrement(1)}>-</button>
    <span>{total}</span>
  </>
);
