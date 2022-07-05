import React, { useState } from "react";
import ColorfulMessage from "./components/ColorfulMesasage";

const App = () => {
  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const [num, setNum] = useState(0);
  return (
    <>
      <h1 style={{ color: "#fecccc" }}>こんにちは！</h1>
      <ColorfulMessage color="pink">元気です！</ColorfulMessage>
      <ColorfulMessage color="blue">お元気ですか</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <p>{num}</p>
    </>
  );
};

// ほかファイルで使うことができるようにする
export default App;
