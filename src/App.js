import PlayersList from "./PlayersList";
import { useState } from 'react'
import './App.css'
import PlayerTemplate from "./PlayerTemplate";

function App() {
  const [players, setPlayers] = useState([{ name: "Alex Rosales", one: 0, two:0, three:0, four:0, five:0, six:0, seven:0, eight:0, nine:0, ten:0, score: 160}
                                          , {name: "Alex Dany", one: 0, two:0, three:0, four:0, five:0, six:0, seven:0, eight:0, nine:0, ten:0, score: 160 }]);
  return (
    <div className="scoreboard">
      <table>
        <tr>
          <th>Name</th>
          <th>1</th>
          <th>2</th>
          <th>3</th>
          <th>4</th>  
          <th>5</th>
          <th>6</th>
          <th>7</th>
          <th>8</th>
          <th>9</th>
          <th>10</th>
          <th>Score</th>
        </tr>
        <tbody>
          {players.map((player,key) => {
            return <PlayerTemplate player={player} key={key}/>
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
