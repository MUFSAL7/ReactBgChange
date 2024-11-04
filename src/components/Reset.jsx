import React from 'react'

function Reset() {
    let bgchange = (reset) => {


        document.body.style.background = reset
    }
    return (
        <div className="card">
            <button className='button4' onClick={() => { bgchange("white") }}><i class="fa-solid fa-arrows-rotate"></i></button>
        </div>
    )
}

export default Reset