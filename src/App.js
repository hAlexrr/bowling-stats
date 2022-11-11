import PlayersList from "./PlayersList";
import { useState } from 'react'
import './App.css'
import PlayerTemplate from "./PlayerTemplate";

function App() {
  const [players, setPlayers] = useState([
                                           { name: "Alex Rosales", f1: [-1,-1], f2:[-1,-1], f3:[-1,-1], f4:[-1,-1], f5:[-1,-1], f6:[-1,-1], f7:[-1,-1], f8:[-1,-1], f9:[-1,-1], f10:[-1,-1], score: 0, maxScore: 300, frame: 1}
                                          ,{  name: "Alex Dany", f1: [-1,-1], f2:[-1,-1], f3:[-1,-1], f4:[-1,-1], f5:[-1,-1], f6:[-1,-1], f7:[-1,-1], f8:[-1,-1], f9:[-1,-1], f10:[-1,-1], score: 0, maxScore: 300, frame: 1}
                                        ]);
  const [scoreHistory, setScoreHistory] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
                                      
  const scoreChanges = (e) => {
    let value = e.target.value
    const id = e.target.id.split('||')

    if(value === '') {
      value = -1
    }

    for(let i = 0; i < players.length; i++) {
      if(players[i].name === id[2]) {
        players[i][id[0]][parseInt(id[1])] = value
        if(isNaN(value)) {
          players[i]['score'] = players[i]['score'] - scoreHistory[scoreHistory.length - 1]
        } else {
          players[i]['score'] = players[i]['score'] + parseInt(value)
          
        }
        setPlayers([...players])
        break
      }
    }

  }

  const makePlayerFrames = (player) => {
    var frames = []
    for (var i = 1; i <= 10; i++) {
      let frame = player["f" + i]
      if(i === 10) {
        frames.push(<td className='border-2 border-blue-500 p-4'>
                      <input id={'f'+i+'||0||'+player.name} className='bg-inherit text-center w-3' type='text' value={frame[0] !== -1 ? frame[0] : ''} onChange={scoreChanges}></input>
                      <input id={'f'+i+'||1||'+player.name} className='bg-inherit text-center w-3' type='text' value={frame[1] !== -1 ? frame[1] : ''} onChange={scoreChanges}></input>
                      <input id={'f'+i+'||2||'+player.name} className='bg-inherit text-center w-3' type='text' value={frame[2] !== -1 ? frame[2] : ''} onChange={scoreChanges}></input>
                    </td>)
        continue
      }
      frames.push(
                  <td className="border-2 border-blue-500 p-4">
                  <input id={'f'+i+'||0||'+player.name} className='bg-inherit text-center w-3' type='text' value={frame[0] !== -1 ? frame[0] : ''} onChange={scoreChanges}/>
                  <input id={'f'+i+'||1||'+player.name} className='bg-inherit text-center w-3' type='text' value={frame[1] !== -1 ? frame[1] : ''} onChange={scoreChanges}/>
                  </td>
                 )
    }
    return frames
  }

  const makePlayerRow = (player) => {
    return (
        <tr key={player.name}>
          <td className="border-2 border-blue-500 p-4">
            <span className='text-lg text-center'>{player.name}</span>
          </td>

          {makePlayerFrames(player)}

          <td className="border-2 border-blue-500 p-4"><span className='text-lg text-center'>{player.score}</span></td>
          <td className="border-2 border-blue-500 p-4"><span className="text-lg text-center">{player.score}</span></td>
        </tr> 
        );
  }
  return (
    <div className="w-screen h-screen bg-slate-700 text-white">
    <table className='border-collapse border-2 border-spacing-4 border-blue-500 text-center'>
      <thead>
        <tr>
          <th className="border-2 border-blue-500 p-4">Name</th>
          <th className="border-2 border-blue-500 p-4">1</th>
          <th className="border-2 border-blue-500 p-4">2</th>
          <th className="border-2 border-blue-500 p-4">3</th>
          <th className="border-2 border-blue-500 p-4">4</th>
          <th className="border-2 border-blue-500 p-4">5</th>
          <th className="border-2 border-blue-500 p-4">6</th>
          <th className="border-2 border-blue-500 p-4">7</th>
          <th className="border-2 border-blue-500 p-4">8</th>
          <th className="border-2 border-blue-500 p-4">9</th>
          <th className="border-2 border-blue-500 p-4">10</th>
          <th className="border-2 border-blue-500 p-4">Score</th>
          <th className="border-2 border-blue-500 p-4">Max Score</th>          
        </tr>
      </thead>
      <tbody>
        {players.map(player => makePlayerRow(player))}
      </tbody>
    </table>
    </div>
  );
}

export default App;
