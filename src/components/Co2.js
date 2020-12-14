import React, { Component } from 'react'
import firebase from 'firebase'

export class Co2 extends Component {


    constructor(){
        super();
        this.state ={
          co2 : " ",
        };
      };
        componentDidMount() {
          
            const rootRef = firebase.database().ref().child('CO2');
            const tvocRef = rootRef.child('state');
    
          tvocRef.on('value', snap => {
    
              this.setState({
                co2 : snap.val()
    
              });
              
            });
    
    
        }


    render() {
        return (
            this.state.co2
            
        )
    }
}

export default Co2;

