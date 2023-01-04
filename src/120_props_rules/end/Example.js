import Bye from "./components/Bye"
import Hello from "./components/Hello"

const Example = () => {
  // POINT propsの流れは一方通行
  const myName = 'Tom';

  return (
    <>
      <Hello name={myName} />
      <Bye name={myName} />
    </>
  );
};

export default Example;
