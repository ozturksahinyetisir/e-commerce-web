import { CardProductProps } from "../Detail/DetailClient";

interface CounterProps {
    cardProduct : CardProductProps;
    increateFunc: () => void;
    decreaseFunc: () => void;
}

const Counter: React.FC<CounterProps> = ({ cardProduct, increateFunc, decreaseFunc }) => {
    return (
      <div className="flex items-center gap-4 text-black font-semibold mt-10">
        <button
          onClick={decreaseFunc}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 shadow transition-all"
        >
          -
        </button>
        <div className="w-12 text-center text-lg font-bold">{cardProduct?.quantity}</div>
        <button
          onClick={increateFunc}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-200 text-white hover:bg-blue-500 shadow transition-all"
        >
          +
        </button>
      </div>
    );
  };
  
  export default Counter;
  