import React from 'react'
import Black from './Black'
import Blue from './Blue'
import Red from './Red'
import Reset from './Reset'
Reset
Red
Blue
Black
Black

function BgChange() {

    let bgchange=(bgcolor)=>{
        document.body.style.background=bgcolor
    }
    
  return (
    <>
    <button className='main' onClick={()=>{bgchange("white")}}>Default</button>
    <Black />
    <Blue />
    <Red />
    <Reset />
    </>
  )
}

export default BgChange