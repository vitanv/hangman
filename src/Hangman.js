import React from 'react';

import './Hangman.css';

export class Hangman extends React.Component{
  constructor(props){
    super(props);
    
    this.state = {
      step:1,
    }
    this.colorPickerRef = React.createRef();
    this.Draw = this.Draw.bind(this);
    this.makeButtons = this.makeButtons.bind(this);
  }

 

  Draw = () =>{
    this.context = this.colorPickerRef.current.getContext('2d');
    let step = this.state.step;
    this.setState({
      step: step + 1,
    })
    switch(step){
      case 1:
        this.context.lineWidth = 12; 
        this.context.beginPath();
        this.context.moveTo(175, 225);
        this.context.lineTo(5, 225);
        this.context.moveTo(25, 225);
        this.context.lineTo(25, 5);
        this.context.lineTo(100, 5);
        this.context.lineTo(100, 25);
        this.context.stroke();
        break;
      case 2:
        this.context.lineWidth = 4;
        this.context.beginPath();
        this.context.arc(100, 50, 25, 0, Math.PI*2, true);
        this.context.closePath();
        this.context.stroke();
        break;
      case 3:
        this.context.beginPath();
        this.context.moveTo(100, 75);
        this.context.lineTo(100, 140);
        this.context.stroke();
        break;
      case 4:
        this.context.beginPath();
        this.context.moveTo(100, 85);
        this.context.lineTo(60, 100);
        this.context.stroke();
        break;
      case 5:
        this.context.beginPath();
        this.context.moveTo(100, 85);
        this.context.lineTo(140, 100);
        this.context.stroke();
        break;
      case 6:
        this.context.beginPath();
        this.context.moveTo(100, 140);
        this.context.lineTo(80, 190);
        this.context.stroke();
        break;
      case 7:
        this.context.beginPath();
        this.context.moveTo(82, 190);
        this.context.lineTo(70, 185);
        this.context.stroke();
        break;
      case 8:
        this.context.beginPath();
        this.context.moveTo(100, 140);
        this.context.lineTo(125, 190);
        this.context.stroke();
        break;
      case 9:
        this.context.beginPath();
        this.context.moveTo(122, 190);
        this.context.lineTo(135, 185);
        this.context.stroke();
        break;
      default:
        break;
    }  
  }

  makeButtons = () => {
    const buttons = [];
    for(let i = 0; i < 26; i++){
     let letter = String.fromCharCode(i + 65);
     buttons.push(<button className="btn btn-letter">{letter}</button>)
    }
    return buttons;
  }
  

  render(){
    return(
      <div className='container'>
         <canvas ref={this.colorPickerRef} height="300" />
         <button className='btn btn-primary' onClick={() => this.Draw()}>Wrong</button>
         
         <div className='keys'>{this.makeButtons()}</div>
      </div>
    )
  }

}

