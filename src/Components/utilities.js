import React from 'react'

const GENRES = ['GAMES', 'COMPUTER GRAPHICS', 'PROGRAMMING', 'WEBB'];
console.log(GENRES);

function displayGenres() {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
            {
                GENRES.map(i => (
                    < div style={{
                        height: 50,
                        display: 'flex',
                        alignItems: 'center',
                        border: '1px solid black'
                    }}>
                        {i}
                    </div >
                ))
            }
        </div >
    );
}

export {
    displayGenres
}