
import React, { Component } from 'react'
import firebase from 'firebase'


export class List extends Component {


  constructor(){
      super();
      this.state ={
        co2 : " ",
        tvoc : " ",
        TEMP : " ",
        RH : " ",
        AIRQ : " ",
        ENOSE: " "
      };
    };
      componentDidMount() {
        
        const rootRef_c = firebase.database().ref().child('test/CO2');
        const rootRef_t = firebase.database().ref().child('test/tvoc');
        const rootAirq = firebase.database().ref().child('AirQ');

        const rootRT = firebase.database().ref().child('test/T');
        const rootRH = firebase.database().ref().child('test/H');
        const eNOSE = firebase.database().ref().child('ENOSE');


        const coRef = rootRef_c.child('state');
        const tvocRef = rootRef_t.child('state');
        const tempr = rootRT.child("state");
        const rh = rootRH.child("state");
        const air_q = rootAirq.child("state");
        const enose = eNOSE.child("state");


        tvocRef.on('value', snap => {
  
            this.setState({
              tvoc : snap.val()
  
            });
            
          });


          coRef.on('value', snap => {
  
            this.setState({
              co2 : snap.val()
  
            });
            
          });

          tempr.on('value', snap => {
  
            this.setState({
              TEMP : (Math.round(Number(snap.val())*10)/10).toString()
  
            });
            
          });

          rh.on('value', snap => {
  
            this.setState({
              RH : (Math.round(Number(snap.val())*10)/10).toString()
  
            });
            
          });


          air_q.on('value', snap => {
  
            this.setState({
              AIRQ : snap.val()
  
            });
            
          });
          enose.on('value', snap => {
  
            this.setState({
              ENOSE : snap.val()
  
            });
            
          });
  
  
      }

      


  render() {
      return (
<div>
<article  className='person'>
        
        <img src="/image/CO2.png" alt="CO2" />
            <div>
           
              <h4>{this.state.co2}</h4>
              <p> ppm </p>
            </div>
            
          </article>
          

          <article  className='person'>
        
        <img src="/image/TVOC.png" alt="TVOC" />
            <div>
           
              <h4>{this.state.tvoc}</h4>
              <p> ppb </p>
            </div>
            
          </article>


          <article  className='person'>
        
        <img src="https://runningmagazine.ca/wp-content/uploads/2019/08/gettyimages-1002295536-170667a.jpg" alt="Temp" />
            <div>
           
              <h4>{this.state.TEMP}</h4>
              <p> °C</p>
            </div>
            
          </article>

          <article  className='person'>
        
        <img src="https://thumbs.dreamstime.com/b/moisture-percentage-icon-badge-style-one-weather-collection-can-be-used-ui-ux-white-background-127207708.jpg" alt="RH" />
            <div>
           
              <h4>{this.state.RH}</h4>
              <p> % RH </p>
            </div>
            
          </article>

          <article  className='person'>
        
        <img src="https://www.stratuscent.com/wp-content/uploads/2020/06/A-gateway-to-the-first-library-of-everyday-scents_B.jpg" alt="enose" />
            <div>
           
              <h4>{this.state.ENOSE}</h4>
              <p> Prediction </p>
            </div>
            
          </article>

          <button className = {this.state.AIRQ ==="BAD" ? "btn danger": this.state.AIRQ ==="WARNING" ? "btn warning" :  "btn success" }> Air Quality : {this.state.AIRQ} </button>
          

</div>
  
      )
  }
}

export default List;


