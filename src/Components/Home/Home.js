import React from 'react'
import ItemCountContainer from '../../Containers/ItemCountContainer'

export default function Home({greeting, name}) {

    return (
        <div className="App">
            <header className="App-header">
                <p>{greeting} {name}</p>
                <ItemCountContainer min='0' max='10'/>
            </header>
        </div>
    )
}