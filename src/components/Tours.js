import React from 'react';
import Card from './Card';

function Tours({tours ,removeTour}) {
    return (
        <div className='container'>
            <div>
                <h1 className='title'>Plan With Satya</h1>
            </div>
            <div className='cards'>
                {
                    tours.map((tours) => {
                        return <Card {...tours} removeTour={removeTour}></Card> // cloning by spread operator
                    })
                }
            </div>
        </div>
    )
}

export default Tours;