/* POINT コンポーネントのスタイリング
  (詳細は 07_styling_component で紹介)
*/

//  POINT CSS ファイルを import する
import "./Example.css";

const Example = () => {
  return (
    /* POINT クラス名は class ではなく className で指定する
    HTML のように見えますが、これは JSX と呼ばれる構文です。class 属性は className を使用しましょう。
    */
  
    /* POINT class と className
    React 16 以降では custom DOM attributes をサポートしているため class も使用可能です。（ただ、ウォーニングも出るため、非推奨！！）
    */
    <div className="component">
      <h3>Hello Component</h3>
    </div>
  );
};

export default Example;