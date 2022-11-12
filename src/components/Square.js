import React from 'react'
import './square.css' ;

function Square({val, selectsquare}) {
    return (
      <div className='box' onClick={selectsquare} >
          {val}
      </div>
    )
  }
  
  export default Square

   
    
