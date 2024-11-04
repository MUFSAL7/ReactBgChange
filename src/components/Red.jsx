import React from 'react'

function Red() {
    let bgchange = (redbg) => {


        document.body.style.background = redbg
    }
    return (
        <div className="card">
            <button className='button3' onClick={() => { bgchange("red") }}>Red</button>
        </div>
    )
}

export default Red