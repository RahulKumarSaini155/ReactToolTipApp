import React, { useState } from 'react';
import ToolTip from './ToolTip';

const Button = (props) => {
  const [visible, setVisible] = useState(false);
  const { position } = props;
  // const position = "right";

  console.log('Rerender btn', position);
  
  return (
    <div className='btn-container'>
        <button 
        onMouseEnter={()=> setVisible(true)}
        onMouseLeave={()=> setVisible(false)}
        >
          Hover Over Me!
        </button>

        {visible && <ToolTip position={position} />}
    </div>
  )
}

export default Button;