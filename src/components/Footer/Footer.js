import React, {Component} from 'react';
import './Footer.css';
import axios from 'axios';

import StripeCheckout from 'react-stripe-checkout';



export default class Navbar extends Component{
    onToken = (token) => {
        axios.post('/charge',{stripeToken:token}).then(response => {
            alert(`We are in business, ${this.props.email}`);
          });
        };
    
    render(){
        return(
            <div className='App4'>
                <div className='LoginButton2'>   
                <a href={process.env.REACT_APP_AUTH_LOG_OUT}><button>Log out</button></a>
                </div> 
                <div className='Title2'>
                    <div>Donate $5
                    <StripeCheckout
                        token={this.onToken}
                        stripeKey="pk_test_s9iMkmMbYMZTE4mImP3OP3FM"
                    />

                    </div>
                </div>
           </div>
        )
    }
}