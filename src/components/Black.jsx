import React from 'react'

function Black() {
    let bgchange=(blackbg)=>{
        

        document.body.style.background=blackbg
    }
    return (
        <div className="card">
    <button className='button1' onClick={()=>{bgchange("black")}}>Black</button>
        </div>
    )
}

export default Black