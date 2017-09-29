import React, {Component} from 'react';
import './Login.css';
import ChoreIMG from './../../chores.jpg';




export default class Login extends Component{
    render(){
        return(
            <div className='App3'>
                
                <div className='LoginSidebar1'>
                    
                </div>
                <div className='LoginSidebar2'>
                    
                </div>
                <div className='LoginHeader'>
                    <br/>
                    <div>What is ChoreIt?</div>
                    <ul>
                        <li>ChoreIt is here to help you, by making it fast easy and efficient to assign chores </li>
                    </ul>
                    <div className="container">
                        <img src={ChoreIMG} className="IMGChore" />
                        <div className="middle">
                        <div className="text">Join ChoreIt!</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}