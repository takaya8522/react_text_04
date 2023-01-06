import Child from "./components/Child";

const Example = () => {
  const hello = (arg) => `hello ${arg}`;
  return(
    <>
      <Child
        color='green'
        num={1} 
        fn={hello}
      />
       {/* <Child color="red"/> */}
    </>
  )
};

export default Example;
