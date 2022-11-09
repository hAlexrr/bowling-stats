import PlayersList from "./PlayersList";
import { useState } from 'react'
import './App.css'
import PlayerTemplate from "./PlayerTemplate";

function App() {
  const [players, setPlayers] = useState([{ name: "Alex Rosales", f1: [0,0], f2:[0,0], f3:[0,0], f4:[0,0], f5:[0,0], f6:[0,0], f7:[0,0], f8:[0,0], f9:[0,0], f10:[0,0,0], score: 160}
                                        ,{  name: "Alex Dany", f1: [0,0], f2:[0,0], f3:[0,0], f4:[0,0], f5:[0,0], f6:[0,0], f7:[0,0], f8:[0,0], f9:[0,0], f10:[0,0,0], score: 160 }]);
  return (
    <div>
      <div className="scoreboard flex-col col-auto border-2 border-cyan-400">
        <div className="flex-row row-auto space-x-10 p-6">
            <span>Name</span>
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
            <span>6</span>
            <span>7</span>
            <span>8</span>
            <span>9</span>
            <span>10</span>
            <span>Score</span>
            <span>Max Score</span>
        </div>
        {players.map((player,key) => {
            return <PlayerTemplate player={player} key={key}/>
          })}
      </div>
    </div>
  );
}

export default App;
