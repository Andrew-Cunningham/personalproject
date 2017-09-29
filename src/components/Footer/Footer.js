import React, {Component} from 'react';
import './Footer.css';

export default class Navbar extends Component{
    render(){
        return(
            <div className='App4'>
                <div className='LoginButton2'>   
                <a href='http://localhost:3535/auth/logout'><button>Log out</button></a>
                </div> 
                <div className='Title2'>
                    <div>Footer</div>
                </div>
           </div>
        )
    }
}