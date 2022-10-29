import React from 'react';
import './Hangman.css';

export class Hangman extends React.Component{
  constructor(props){
    super(props);
    
    this.state = {}
    this.colorPickerRef = React.createRef();
  }

  componentDidMount() {
    this.context = this.colorPickerRef.current.getContext('2d');
    this.Draw();
    console.log("Component has been rendered");
  }

  Draw = () =>{
    this.context.lineWidth = 10; 
    this.context.beginPath();
    this.context.moveTo(175, 225);
    this.context.lineTo(5, 225);
    this.context.moveTo(40, 225);
    this.context.lineTo(25, 5);
    this.context.lineTo(100, 5);
    this.context.lineTo(100, 25);
    this.context.stroke();
    this.context.lineWidth = 5;
    this.context.beginPath();
    this.context.arc(100, 50, 25, 0, Math.PI*2, true);
    this.context.closePath();
    this.context.stroke();
    this.context.beginPath();
    this.context.moveTo(100, 75);
    this.context.lineTo(100, 140);
    this.context.stroke();
    this.context.beginPath();
    this.context.moveTo(100, 85);
    this.context.lineTo(60, 100);
    this.context.stroke();
    this.context.beginPath();
    this.context.moveTo(100, 85);
    this.context.lineTo(140, 100);
    this.context.stroke();
    this.context.beginPath();
    this.context.moveTo(100, 140);
    this.context.lineTo(80, 190);
    this.context.stroke();
    this.context.beginPath();
    this.context.moveTo(82, 190);
    this.context.lineTo(70, 185);
    this.context.stroke();
    this.context.beginPath();
    this.context.moveTo(100, 140);
    this.context.lineTo(125, 190);
    this.context.stroke();
    this.context.beginPath();
    this.context.moveTo(122, 190);
    this.context.lineTo(135, 185);
    this.context.stroke();
  }

  render(){
    return(
      <div className='container'>
         <canvas ref={this.colorPickerRef} height="300" />
      </div>
    )
  }

}
