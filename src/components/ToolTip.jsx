import React, { useState } from 'react'

const ToolTip = (props) => {
    const { position } = props;
  return (
    <div className={`tooltip-container ${position}`}>
        Thanks for hovering! I'm Tool Tip
    </div>
  )
}

export default ToolTip;