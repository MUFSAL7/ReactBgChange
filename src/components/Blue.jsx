import React from 'react'

function Blue() {
    let bgchange=(bluebg)=>{
        

        document.body.style.background=bluebg
    }
  return (
    <div className="card">
    <button className='button2' onClick={()=>{bgchange("blue")}}>blue</button>
        </div>
  )
}

export default Blue