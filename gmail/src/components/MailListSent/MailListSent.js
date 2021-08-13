import { IconButton } from '@material-ui/core';
import { Checkbox } from '@material-ui/core';
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown"
import RedoIcon from "@material-ui/icons/Redo"
import MoreVertIcon from "@material-ui/icons/MoreVert"
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft"
import KeyBoardHideIcon from "@material-ui/icons/KeyboardHide"
import SettingsIcon from "@material-ui/icons/Settings"
import ChevronRightIcon from "@material-ui/icons/ChevronRight"
import InboxIcon from "@material-ui/icons/Inbox"
import PeopleIcon from "@material-ui/icons/People"
import LocalOfferIcon from "@material-ui/icons/LocalOffer"
import React, { useEffect, useState } from 'react'
 
import Section from '../Section/Section';
import EmailRow from '../EmailRow/EmailRow';
import { db } from '../../firebase';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
function MailListSent() {
    const dispatch = useDispatch();
    const user= useSelector(selectUser);
    const [emails,setEmails] = useState([]);
  
    useEffect(()=>{
        db.collection("sent").doc(user.email).collection("sentEmails").orderBy("timestamp","desc").onSnapshot((snapshot)=>
        setEmails(snapshot.docs.map((doc)=>(
            {
                id:doc.id,
                data:doc.data(),
            }
        )))
        );
    }, []);
    console.log(user.email)
    console.log(emails)
    return (
    <div className="emailList">
        <div className="emailList__settings">
            <div className="emailList__settingsLeft">
                <Checkbox />

                <IconButton>
                    <ArrowDropDownIcon />
                    </IconButton>
                    <IconButton>
                    <RedoIcon />
                    </IconButton>
                    <IconButton>
                    <MoreVertIcon />
                    </IconButton>
            </div>
            <div className="emailList__settingsright">
                <IconButton>
                    <ChevronLeftIcon />
                    </IconButton>
                    <IconButton>
                    <ChevronRightIcon />
                    </IconButton>
                    <IconButton>
                    <KeyBoardHideIcon />
                    </IconButton>
                    <IconButton>
                    <SettingsIcon />
                    </IconButton>
            </div>
        </div>
        <div className="emailList__sections">
            <Section Icon={InboxIcon} title='Primary' color="red" selected />
            <Section Icon={PeopleIcon} title='Social' color="#1A73E8"  />
            <Section Icon={LocalOfferIcon} title='Promotions' color="green"  />
        </div>
        <div className="emailList__list">
            {emails.map(({id,data:{to,from,subject,message,timestamp}})=>(
                 <EmailRow 
                 key={id}
                 id={id}
                 title={to} 
                 subject={subject}
                 description={message}
                 time={new Date(timestamp?.seconds * 1000).toUTCString()}
                 />
            ))}
        </div>
     </div>
     )
}

export default MailListSent
