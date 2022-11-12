import React from 'react';

const AddPlayerModal = () => {
    return (
        <div className='bg-inherit opacity-80 fixed inset-0 z-50'>
            <div className="flex h-screen justify-center items-center">
                <div className="flex-col justify-center bg-inherit py-12 px-24 border-4 border-blue-500 rounded-xl text-white text-2xl">
                    <h1 className="text-3xl text-center">Add Player</h1>
                    <div className="flex justify-center">
                        <input className="bg-inherit border-2 border-blue-500 rounded-lg p-2 m-2 hover:scale-105 transition-all" type="text" placeholder="Player Name"></input>

                        <button className="bg-inherit border-2 border-blue-500 rounded-lg p-2 m-2 hover:scale-105 hover:bg-lime-500 duration-300 transition-all">
                            Add
                        </button>
                        <button className='bg-inherit border-2 border-blue-500 rounded-lg p-2 m-2 hover:scale-105 hover:bg-red-700 duration-300 transition-all'>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddPlayerModal;
