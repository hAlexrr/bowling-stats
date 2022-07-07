import React from 'react';

const PlayerTemplate = ({ player, key }) => {
    return (
        <tr key={key}>
            <td>{player.name}</td>
            <td>{player.one}</td>
            <td>{player.two}</td>
            <td>{player.three}</td>
            <td>{player.four}</td>
            <td>{player.five}</td>
            <td>{player.six}</td>
            <td>{player.seven}</td>
            <td>{player.eight}</td>
            <td>{player.nine}</td>
            <td>{player.ten}</td>
            <td>{player.score}</td>
        </tr>
    );
}

export default PlayerTemplate;
