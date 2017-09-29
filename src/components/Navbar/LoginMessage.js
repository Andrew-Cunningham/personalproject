import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getUser} from './../../ducks/getChores';


 class LoginMessage extends Component{
    render(){
        return null
        // if (this.props.user.email){
        // return(<a href={ process.env.REACT_APP_LOGIN}>
        //     <button>LOGIN/SIGNUP</button></a>
        // );
        // }else{
        //     return(
        //     <h1>{`Welcome, ${this.props.user.user_name}`}</h1> 
        //     );
        // }
    }
 }


                    /* {if (this.props.user.email===null){
                        <a href={ process.env.REACT_APP_LOGIN}>
                        <button>LOGIN/SIGNUP</button></a>}
                    else{
                        "Welcome, " ${this.props.user.user_name}
                    }} */
                

function mapStateToProps( state ) {
    const { user } = state;
    
    return user
}
    
    export default connect( mapStateToProps, { getUser } )( LoginMessage );