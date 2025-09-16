import { useState } from "react";
import "./App.css";

export default function App() {
  const [amount, setAmount] = useState(0);
  const [myTip, setMyTip] = useState("");
  const [friendTip, setFriendTip] = useState("");

  function onReSet() {
    setAmount(0);
    setMyTip("");
    setFriendTip("");
  }

  return (
    <div className="App">
      <Logo />
      <Amount amount={amount} onSet={setAmount} />
      <TipAmount tipAmount={myTip} setTipAmount={setMyTip}>
        How you like service?
      </TipAmount>
      <TipAmount tipAmount={friendTip} setTipAmount={setFriendTip}>
        How your friend like service
      </TipAmount>
      <TotalAmount amount={amount} myTip={myTip} friendTip={friendTip} />
      <Button onReSet={onReSet}>Reset</Button>
    </div>
  );
}

function Logo() {
  return <h1 className="logo">Calculate Tip</h1>;
}

function Amount({ amount, onSet }) {
  return (
    <div className="amount">
      <span>How much is Your Bill </span>
      <input value={amount} onChange={(e) => onSet(Number(e.target.value))} />
    </div>
  );
}

function TipAmount({ tipAmount, setTipAmount, children }) {
  return (
    <div className="tip">
      <span>{children}</span>
      <select
        value={tipAmount}
        onChange={(e) => setTipAmount(Number(e.target.value))}
      >
        <option value="0">Dissacrified !</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was Good (10%)</option>
        <option value="20">Absolutly Good (20%)</option>
      </select>
    </div>
  );
}

function TotalAmount({ amount, myTip, friendTip }) {
  const tip = Math.round((amount * (myTip + friendTip)) / 200);
  if (amount <= 0) return;
  return (
    <h3 className="output">
      You Need to Pay {amount + tip} ({amount} + {tip} tip)
    </h3>
  );
}

function Button({ onReSet, children }) {
  return (
    <button className="button" onClick={onReSet}>
      {children}
    </button>
  );
}
