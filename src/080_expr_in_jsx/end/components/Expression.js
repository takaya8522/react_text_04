/* POINT JSX には JavaScript 式を記述できる
JSX 内の 波括弧 {...} で囲んだ部分は JavaScript 式として実行時に評価されます。
 */
import "./Expression.css";

const Expression = () => {
  
  const title = "Expression";
  const arry = ["item1", "item2", "item3"];
  const hello = (arg) => `${arg} Function`;
  const jsx = <h3>Hello JSX</h3>;
  
  console.log(jsx);

  return (
    // POINT {...} は属性値にも使用できます。
    <div className={title.toLowerCase()}>
      {/* POINT 波括弧内は実行時に評価されます。 */}
      <h3>{"Hello " + title}</h3>
      {/* POINT 配列を子要素に指定すると配列の要素が値の列として展開されます。 */}
      <h3>{arry}</h3>
      {/* POINT 関数を呼び出して return した値を埋め込むこともできます。 */}
      <h3>{hello("Hello")}</h3>
      {/* POINT 波括弧内に JSX を記述することもできます。*/}
      {<h3>Hello JSX</h3>}
      {/* POINT 変数に代入したJSXも埋め込めます。 */}
      {jsx}
    </div>
  );
};

export default Expression;
