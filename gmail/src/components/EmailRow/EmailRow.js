import { Checkbox, IconButton } from '@material-ui/core';
import  LabelImportantOutlinedIcon from '@material-ui/icons/LabelImportantOutlined';
import StarBorderOutlinedIcon  from '@material-ui/icons/StarBorderOutlined';
import StarIcon  from '@material-ui/icons/Star';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { selectMail } from '../../features/mailSlice';
import './EmailRow.css';
function EmailRow({id,title,subject,description,time}) {
    const history= useHistory();
    const dispatch = useDispatch();
    const openMail= () => {
        dispatch(selectMail(({id,title,subject,description,time})))
        history.push("/mail")
    }
    const [st,setSt]=useState(true)
    return (
        <div
        
        className="emailRow">
            <div className="emailRow__options">
            <Checkbox />
            <IconButton onClick={(e)=>setSt(!st)}>
             {st? (<StarBorderOutlinedIcon />) : (<StarIcon />)}   
            </IconButton>
            <IconButton>
                <LabelImportantOutlinedIcon />
            </IconButton>
            </div>
            <div onClick={openMail} className="emailRow__message">
            <h3 className="emailRow__title">
            {title}
            </h3>
           
                <h4>{subject}{' '}
                <span className="emailRow__description">
                    - {description}
                </span>
                </h4>
        
            <p className="emailRow__time">
                {time}
         </p>
         </div>
        </div>
    )
}

export default EmailRow
