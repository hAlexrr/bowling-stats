import { useState } from 'react'
import './App.css'
import AddPlayerModal from './components/modals/AddPlayerModal'

function App() {
  const [players, setPlayers] = useState([
                                           { name: "Alex Rosales", f1: [-1,-1,-1], f2:[-1,-1,-1], f3:[-1,-1,-1], f4:[-1,-1,-1], f5:[-1,-1,-1], f6:[-1,-1,-1], f7:[-1,-1,-1], f8:[-1,-1,-1], f9:[-1,-1,-1], f10:[-1,-1,-1,-1], score: 0, maxScore: 300, frame: 1}
                                          ,{  name: "Alex Dany", f1: [-1,-1,-1], f2:[-1,-1,-1], f3:[-1,-1,-1], f4:[-1,-1,-1], f5:[-1,-1,-1], f6:[-1,-1,-1], f7:[-1,-1,-1], f8:[-1,-1,-1], f9:[-1,-1,-1], f10:[-1,-1,-1,-1], score: 0, maxScore: 300, frame: 1}
                                        ]);
                                      
  const scoreChanges = (e) => {
    let value = e.target.value
    const id = e.target.id.split('||')
    const frame = id[0]
    const frameShot = parseInt(id[1])
    const player = id[2]

    if( (isNaN(value) && ((frameShot !== 0 && value.toLowerCase() === 'x'.toLowerCase()) || (frameShot < 1 && value.toLowerCase() === '/'.toLowerCase()))) || (isNaN(value) && value.toLowerCase() !== 'x' && value.toLowerCase() !== '/') )
      return;    
    else if((value.length > 1))
      return

    if(value === '') {
        value = -1
    } else if(value === '/') {
      value = -2
    } else if(value.toLowerCase() === 'x'.toLowerCase()) {
      value = -3
    }
    

    for(let i = 0; i < players.length; i++) {

      if(frameShot === 0 && value === -3) {
        players[i]['frame'] = players[i]['frame'] + 1
      } else if(frameShot >= 1 && value !== -1) {
        players[i]['frame'] = players[i]['frame'] + 1
      } else if( (frameShot === 1 && value === -1) || (players[i][frame][frameShot] === -3 && value === -1) ) {
        players[i]['frame'] = players[i]['frame'] - 1
      }

      if(players[i].name === player) {
        if(players[i][frame][frameShot] !== -1) {
          players[i]['score'] = players[i]['score'] - players[i][frame][frameShot]
        } else {
          players[i]['score'] = players[i]['score'] + parseInt(value)
        }

        players[i][frame][frameShot] = parseInt(value)
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
        frames.push(<td className='relative border-2 border-blue-500'>
                      <input 
                        id={'f'+i+'||0||'+player.name} 
                        className='bg-inherit text-center w-3 absolute left-0 top-0 text-lg' 
                        type='text' 
                        value={frame[0] === -1 ? '' :
                               frame[0] === -2 ? '/' :
                               frame[0] === -3 ? 'X' : frame[0]}
                        onChange={scoreChanges} 
                        disabled={i !== player.frame && frame[1] === -1 && frame[0] !== -3}
                        />
                      <input 
                        id={'f'+i+'||1||'+player.name} 
                        className='bg-inherit text-center w-3 absolute left-5 top-0 text-lg' 
                        type='text' 
                        value={frame[1] === -1 ? '' :
                               frame[1] === -2 ? '/' :
                               frame[1] === -3 ? 'X' : frame[1]}
                        onChange={scoreChanges} 
                        disabled={frame[0]===-1}/>
                      <input 
                        id={'f'+i+'||2||'+player.name} 
                        className='bg-inherit text-center w-3 absolute right-0 top-0 text-lg' 
                        type='text' 
                        value={frame[2] === -1 ? '' :
                               frame[2] === -2 ? '/' :
                               frame[2] === -3 ? 'X' : frame[2]}
                        onChange={scoreChanges} 
                        disabled={frame[1]===-1 && (frame[1] !== -2 || frame[1] !== -3)}/>

                      <span className='absolute bottom-0 left-0 h-7 w-full text-xl'>150</span>  
                    </td>)
        continue
      }
      frames.push(
                  <td className={"relative border-2 border-blue-500 p-4 transition-all duration-500 ".concat(i !== player.frame ? "bg-inherit" : 'bg-emerald-500')}>
                    <input 
                      id={'f'+i+'||0||'+player.name} 
                      className='bg-inherit text-center w-5 absolute left-0 top-0 text-2xl' 
                      type='text' 
                      value={ frame[0] === -1 ? '' :
                              frame[0] === -2 ? '/' :
                              frame[0] === -3 ? 'X' : frame[0]}
                      onChange={scoreChanges} 
                      disabled={i !== player.frame && frame[1] === -1 && frame[0] !== -3}
                      />
                    <input 
                      id={'f'+i+'||1||'+player.name} 
                      className='bg-inherit text-center w-5 absolute right-0 top-0 text-2xl' 
                      type='text' 
                      value={ frame[1] === -1 ? '' :
                              frame[1] === -2 ? '/' :
                              frame[1] === -3 ? 'X' : frame[1]}
                      onChange={scoreChanges} 
                      disabled={frame[0]===-1}
                    />
                    <span 
                      className='text-lg absolute bottom-1 left-0 h-6 w-full'
                    >
                      10
                    </span>
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
    <div className="App bg-slate-700 text-white">
      <header className='absolute left-1/2 transform -translate-x-1/2 text-white'>
        <h1 className="text-5xl">Bowling Scorecard</h1>
      </header>

      <div className="flex flex-row w-screen h-screen">

      {/* <AddPlayerModal/> */}
      <table className='border-collapse border-2 border-spacing-4 border-blue-500 text-center m-auto justify-center scale-150'>
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

        <span className='text-gray-400 absolute bottom-0 left-1/2 -translate-x-1/2 text-xs'>Created by: Alex Rosales</span>
    </div>
  );
}

export default App;
