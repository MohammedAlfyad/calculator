import { Container } from "@mui/material";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem("currentMode") ?? "dark"
  );

  useEffect(() => {
    document.body.classList.toggle("light", theme === "light");
    document.body.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    localStorage.setItem("currentMode", newTheme);
    setTheme(newTheme);
  };

  const [result, setResult] = useState("");

  const resetResult = () => setResult("");
  const resetInput = () => setResult(result.slice(0, -1));
  const handleClick = (e) => setResult(result.concat(e.target.id));

  const sum = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <Container>
      <div className="calc">
        <div className="head">
          <h2>Calc</h2>
          <button onClick={toggleTheme} className="mode flex">
            <span
              className={theme === "dark" ? "icon-moon-o" : "icon-sun"}
            ></span>
          </button>
        </div>
        <div className="math">
          <div className="sum">{result !== "" ? result : 0}</div>
        </div>
        <div className="num">
          <div className="cont">
            <div>
              <button
                className="btn"
                style={{ color: "blue" }}
                onClick={resetResult}
              >
                AC
              </button>
              <button
                className="btn"
                style={{ color: "blue" }}
                onClick={resetInput}
              >
                C
              </button>
              <button
                id="%"
                className="btn"
                style={{ color: "blue" }}
                onClick={handleClick}
              >
                %
              </button>
              <button
                id="/"
                className="btn"
                style={{ color: "red" }}
                onClick={handleClick}
              >
                ÷
              </button>
            </div>
            <div>
              <button id="7" className="btn" onClick={handleClick}>
                7
              </button>
              <button id="8" className="btn" onClick={handleClick}>
                8
              </button>
              <button id="9" className="btn" onClick={handleClick}>
                9
              </button>
              <button
                id="-"
                className="btn"
                style={{ color: "red" }}
                onClick={handleClick}
              >
                -
              </button>
            </div>
            <div>
              <button id="4" className="btn" onClick={handleClick}>
                4
              </button>
              <button id="5" className="btn" onClick={handleClick}>
                5
              </button>
              <button id="6" className="btn" onClick={handleClick}>
                6
              </button>
              <button
                id="*"
                className="btn"
                style={{ color: "red" }}
                onClick={handleClick}
              >
                ×
              </button>
            </div>
            <div>
              <button id="1" className="btn" onClick={handleClick}>
                1
              </button>
              <button id="2" className="btn" onClick={handleClick}>
                2
              </button>
              <button id="3" className="btn" onClick={handleClick}>
                3
              </button>
              <button
                id="+"
                className="btn"
                style={{ color: "red" }}
                onClick={handleClick}
              >
                +
              </button>
            </div>
            <div>
              <button id="0" className="btn zero" onClick={handleClick}>
                0
              </button>
              <button id="." className="btn" onClick={handleClick}>
                .
              </button>
              <button
                id="="
                className="btn"
                style={{ color: "white", backgroundColor: "darkcyan" }}
                onClick={sum}
              >
                =
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default App;
