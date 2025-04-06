import "./styles.css";
import { React, useState, useEffect } from "react";
import { calcMortgage } from "./utils/calcMortgage";

export default function App() {
  const [principal, setPrincipal] = useState(0);
  const [term, setTerm] = useState(0);
  const [interest, setInterest] = useState(0);
  const [flag, setFlag] = useState(false);
  const [mortgage, setMortgage] = useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();
    setFlag(true);
    setMortgage(
      calcMortgage(
        parseFloat(principal),
        parseFloat(term),
        parseFloat(interest)
      )
    );
  };
  useEffect(() => {
    setFlag(false);
  }, [principal, term, interest]);
  return (
    <div className="App">
      <form sx={{ minWidth: "100%" }} onSubmit={handleSubmit}>
        <div sx={{ display: "flex", margin: "10px" }}>
          <div sx={{ display: "flex", flexDirection: "row" }}>
            <div>Principal Loan Amount : </div>
            <input
              type="number"
              min={1}
              required
              onChange={(e) => setPrincipal(parseFloat(e.target.value))}
            />
          </div>
          <div>
            <div>Interest Rate : </div>
            <input
              type="number"
              min={1}
              required
              onChange={(e) => setInterest(parseFloat(e.target.value / 1200))}
            />
          </div>
          <div>
            <div>Length Of Loan : </div>
            <input
              type="number"
              min={1}
              onChange={(e) => setTerm(parseFloat(e.target.value) * 12)}
              required
            />
          </div>
          <button type="submit">Calculate</button>
        </div>
      </form>

      {flag ? (
        <div>Your Monthly Mortgage is :{Math.ceil(mortgage)} </div>
      ) : (
        <div>Please hit Calculate once you enter all the values</div>
      )}
    </div>
  );
}
