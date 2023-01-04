const title = 'Expression';
const array = ['item1', 'item2', 'item3'];
const fn = (arg) => {
  return `${arg} Function`;
};
const upperCaseText = 'upperCaseText';

const Example = () => {
  return (
    <>
      <h3>Hello JSX</h3>
      {/* toUpperCaseメソッドで文字列をすべて大文字にします。 */}
      <h3>{upperCaseText.toUpperCase()}</h3>
      {/* +演算子で文字列を結合します。 */}
      <h3>{'Hello ' + title}</h3>
      {/* 配列がJSX内で渡されると自動的に要素が展開されて表示されます。 */}
      <h3>{array}</h3>
      {/* 関数の実行はreturnに続く値が返ってきます。 */}
      <h3>{fn('Hello')}</h3>
    </>
  );
};

export default Example;
