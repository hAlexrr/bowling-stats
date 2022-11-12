import React from 'react'
import PlayerTemplate from './PlayerTemplate'

export default function PlayersList({ players }) {
  return (
    <div>
        {players.map((player,key) => {
          return <PlayerTemplate player={player} key={key}/>
        })}
    </div>
  )
}
