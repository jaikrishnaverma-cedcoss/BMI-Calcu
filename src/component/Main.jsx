import React, { Component } from 'react';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {box1:"",box2:"",result:0,res:"lets Start"}
    }
    formula="meter";
    unit=(event)=>
    {
        this.formula =event.target.value;  
    }
    box1Handler=(event)=>{
        this.setState({box1:parseInt(event.target.value)})
    }
    box2Handler=(event)=>{
        this.setState({box2: parseInt(event.target.value)})
    }
    Calculate=(event)=>{
        if(this.formula==="meter")
        {
            this.state.result=(this.state.box2)/(this.state.box1*this.state.box1)
            
        }
        if(this.formula==="cm")
        {
            this.state.result=(this.state.box2)/((this.state.box1/100)*(this.state.box1/100))
        }
        if(this.formula==="pound")
        {
            this.state.result=(this.state.box2*703)/(this.state.box1*this.state.box1)
        }
        if(this.state.result<18.5)
            this.state.res="Underweight";
        if(this.state.result>=18.5)
            this.state.res="Healthy Weight";
        if(this.state.result>25)
            this.state.res="Overweight";
        if(this.state.result>=30)
            this.state.res="Obesity";
        this.setState({result:parseInt(this.state.result)},()=>{
            this.setState({res:this.state.res})
        })
    }
    render() { 
        return ( 
            <>
                 <div className="calcu" style={{backgroundColor:"white",borderRadius:"5px",color:"black",padding:"10px"}}>
                    <select name="" onChange={this.unit} id="select" className="unit">
                        <option value="meter">kg/meters</option>
                        <option value="cm">kg/cm.</option>
                        <option value="pound">pounds/inches</option>
                    </select>
                    <div className="col">
                    <input type="number" onChange={this.box2Handler} placeholder="Weight." value={this.state.box2} className="box2" />
                    <input type="number" onChange={this.box1Handler} placeholder="Height." value={this.state.box1} className="box1" />
                     </div>
                    <p>{`BMI Value: ${this.state.result}`}</p>

                    <p>{`Result: ${this.state.res}`}</p>
                    <button className="btn btn-warning" onClick={this.Calculate}>Calculate</button>
                 </div>
            </>
         );
    }
}
 
export default Main;