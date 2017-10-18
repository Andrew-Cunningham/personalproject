import React, {Component} from 'react';
import './Navbar.css';
import LoginMessage from './LoginMessage';

export default class Navbar extends Component{
    render(){
        return(
            <div className='App1'>                
                <div className='Title'>
                    <div>ChoreIt</div>
                </div>
                <div className='LoginButton'>  
                    {/* <a href="http://localhost:3535/auth"> */}
                    <a href={ process.env.REACT_APP_LOGIN}>
                        <button>LOGIN/SIGNUP</button>
                    </a> 
                    
                        
                    <LoginMessage></LoginMessage>
                    
                </div> 

           </div>
        )
    }
}