import Child from "./components/Child";

const Example = () => {
    const hello = (arg) => `Hello ${arg}`;
    // const o = {
    //     color: "red",
    //     num: 123
    // }
    return (
        <>
            <Child 
                // POINT propsには全てのタイプの値を渡すことができます。
                // {...o}
                color="blue"
                fn={hello}
                bool
                obj={{ name: 'Tom', age: 18 }}
            />
            <Child color="red" />
        </>
    )
};

export default Example;
