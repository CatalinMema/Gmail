import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import MailList from './components/MailList/MailList';
import Mail from './components/Mail/Mail';
import SendMail from './components/SendMail/SendMail';
import { useDispatch, useSelector } from 'react-redux';
import { selectSendMessageIsOpen } from './features/mailSlice';
import { login, selectUser } from './features/userSlice';
import Login from './components/Login/Login';
import { useEffect } from 'react';
import { auth } from './firebase';
import MailListSent from './components/MailListSent/MailListSent';
function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  const user= useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(()=>{
    auth.onAuthStateChanged(user =>{
      if(user){
        dispatch(login({
          displayName: user.displayName,
                email: user.email,
                photoUrl: user.photoURL
        }))
      }
      else{

      }
    })
  },[])
  return (
    <Router>
      {!user ? (<Login />) : (

<div className="app">
<Header />

<div className="app__body">
 <Sidebar />
 <Switch>
   <Route path="/mail">
    <Mail />
   </Route>

   <Route exact path="/">
     <MailList />
   </Route>
   <Route exact path="/sent">
     <MailListSent />
   </Route>
 </Switch>

</div>
{sendMessageIsOpen &&   <SendMail />}
</div>
      )}
    
    </Router>
  );
}

export default App;
