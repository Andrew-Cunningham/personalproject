import React, {Component} from 'react';
import './Home.css';
import axios from 'axios';
import {connect} from 'react-redux';
import {getChores} from './../../ducks/getChores';




class Home extends Component{
    constructor(props){
        super(props);
            
            
            this.state={value:''};
            this.handleChange=this.handleChange.bind(this);
            this.handleSubmit=this.handleSubmit.bind(this)
            }

    handleChange(event){
        this.setState({value: event.target.value});
    }

    handleSubmit(event){
        event.preventDefault() ;
        axios.post('/chore/name',
        {
            choreName:this.state.value
            
        }
        ).then((response)=>{
        alert('A chore was submitted: ' + this.state.value);
        this.setState({value:""});})
        this.props.getChores()
        }
    
     
    componentDidMount(){
            this.props.getChores();
    }
    completeChore(id){
        
        axios.put('/chores/progress/' + id).then((response)=>{
            this.props.getChores()
        })

        
        }    
        
    

      render(){

        axios.get('/user/all').then(function(response){
            console.log('your user info is: ',response.data); // ex.: { user: 'Your User'}
            console.log(response.status); // ex.: 200
          });
        
        const chores=this.props.chores.map((chore) => {
            console.log(chore)

        if(chore.progress===0){return(
            <button onDoubleClick={()=>{this.completeChore(chore.id)}} className='choreButton'>
                {console.log(chore)}
                {chore.name}
            </button> 
            )
            }
           } )
        const CompChores=this.props.chores.map((CompChores)=>{
            console.log(CompChores)

        if(CompChores.progress!==0){return(
            <button className='compChoreButton'>
                {CompChores.name}
            </button>
        )}
        })
        
         
        
        return(
            <div className='App2'>
                
                <div className='HomeSidebar1'><div></div></div>
                <div className='HomeSidebar2'><div></div></div>
                <div className='HomeChoreHeader'>
                    <div className='HomeChoreHeaderinner'>
                    </div>
                    <div className="CompletedChores">
                        
                        <p>Completed Chores: {CompChores}</p>
                    </div>
                    <div className="CurrentChores">
                    <p>Double Click A Chore To Complete It</p>
                    <p>Unfinished Chores: {chores}</p>
                    </div>
                    <div className="AddChores">
                        <form onSubmit={this.handleSubmit}>
                            <label>
                                <input className="addChoresBox" type="text" value={this.state.value} onChange={this.handleChange} />
                            </label>
                                <input className="addChoresButton" type="submit" value="Add Chore" />
                        </form>
                    </div>
                </div>
            </div>
        )
        
    }
}
function mapStateToProps( state ) {
    return{
        chores: state.chores
    }
}


export default connect(mapStateToProps, { getChores })(Home)