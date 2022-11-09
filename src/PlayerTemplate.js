import React from 'react';


const PlayerTemplate = ({ player }) => {
    return (
        <div className='flex flex-row row-auto space-x-6'>
            <span>{player.name}</span>
            <div className='flex-row row-auto'>
                <input className='bg-inherit w-3' type='text' value={player.f1[0]}/>
                <input className='bg-inherit w-3' type='text' value={player.f1[1]}/>
            </div>
            <div className='flex-row row-auto'>
                <input className='bg-inherit text-center w-3' type='text' value={player.f2[0]}></input>
                <input className='bg-inherit text-center w-3' type='text' value={player.f2[1]}></input>
            </div>
            <div className='flex-row row-auto'>
                <input className='bg-inherit text-center w-3' type='text' value={player.f3[0]}></input>
                <input className='bg-inherit text-center w-3' type='text' value={player.f3[1]}></input>
            </div>
            <div className='flex-row row-auto'>
                <input className='bg-inherit text-center w-3' type='text' value={player.f4[0]}></input>
                <input className='bg-inherit text-center w-3' type='text' value={player.f4[1]}></input>
            </div>
            <div className='flex-row row-auto'>
                <input className='bg-inherit text-center w-3' type='text' value={player.f5[0]}></input>
                <input className='bg-inherit text-center w-3' type='text' value={player.f5[1]}></input>
            </div>
            <div className='flex-row row-auto'>
                <input className='bg-inherit text-center w-3' type='text' value={player.f6[0]}></input>
                <input className='bg-inherit text-center w-3' type='text' value={player.f6[1]}></input>
            </div>
            <div className='flex-row row-auto'>
                <input className='bg-inherit text-center w-3' type='text' value={player.f7[0]}></input>
                <input className='bg-inherit text-center w-3' type='text' value={player.f7[1]}></input>
            </div>
            <div className='flex-row row-auto'>
                <input className='bg-inherit text-center w-3' type='text' value={player.f8[0]}></input>
                <input className='bg-inherit text-center w-3' type='text' value={player.f8[1]}></input>
            </div>
            <div className='flex-row row-auto'>
                <input className='bg-inherit text-center w-3' type='text' value={player.f9[0]}></input>
                <input className='bg-inherit text-center w-3' type='text' value={player.f9[1]}></input>
            </div>
            <div className='flex-row row-auto'>
                <input className='bg-inherit text-center w-3' type='text' value={player.f10[0]}></input>
                <input className='bg-inherit text-center w-3' type='text' value={player.f10[1]}></input>
                <input className='bg-inherit text-center w-3' type='text' value={player.f10[2]}></input>
            </div>
            <span className='mr-6'>{player.score}</span>
            <span>300</span>
        </div>
    );
}

export default PlayerTemplate;
