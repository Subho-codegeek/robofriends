import React from "react";
import Searchbox from "./Serachbox";
import Cardlist from "./Cardlist";
import './App.css';
import Scroll from "./Scroll";

class App extends React.Component{
    constructor(){
        super()
        this.state={
            robots:[],
            searchfield:''
        }
    }

    componentDidMount(){

        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(user => this.setState({ robots: user }));
                    
    }

    onsearch = (event) => {
        this.setState({ searchfield: event.target.value })
    }
    

    render(){
        const {robots , searchfield} = this.state;
        const filteredrobots = robots.filter((robot)=>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        });

        if(robots.length===0){
            return(<h1 className='tc'>LOADING</h1>)
        }
        else{
            return(
                <div className='tc'>
                    <h1 className='f1'>ROBOFRIENDS</h1>
                    <Searchbox searchchange={this.onsearch} />
                    <Scroll>
                        <Cardlist robots={filteredrobots} />
                    </Scroll>    
                </div>    
            );
    
        }
        
    }
    
}

export default App;