import "./App.css";
import { useSelector } from "react-redux";
import { Row } from "./components/Row";
import { Header } from "./components/Header";
import { Player1 } from "./components/Player1";
import { Player2 } from "./components/Player2";

function App() {
  const game = useSelector((state) => state.game);
  const elementArray = game.elementArray;

  return (
    <div className="App">
      <Header />

      <div className="container">
        <Player1 />

        <div className="checkers">
          {elementArray.map((row, r_i) => {
            return <Row key={r_i} row={row} r_i={r_i} />;
          })}
        </div>

        <Player2 />
      </div>
    </div>
  );
}

export default App;