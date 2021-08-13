import React from 'react'
import "./SidebarOption.css"
function SidebarOption({Icon,title,selected,number,onClick}) {
    return (
        <div onClick={onClick} className={`sidebarOption ${selected && `sidebarOption--active`}`}>
            {Icon && <Icon />}
            <h3>
                {title}
            </h3>
            <p>  
            {number}
            </p>
          
        
        </div>
    )
}

export default SidebarOption
