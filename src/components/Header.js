import React from 'react'

export default function Header() {
    return(
        <header>
            <img src={require('../images/Troll.png')}
                className='image--header' alt=''/>
            <h2 className='header--title'>Meme Generator</h2>
        </header>

    )
}