import logo from './logo.svg';
import './App.css';
import React,{Component} from 'react';
class App extends React.Component{
  render(){
    return(
    <div><First/>
    <Second/>
    </div>
    );
  }
}
class First extends React.Component{
  render(){
    return(
     <div>This is the First class</div>
  );
}
}
class Second extends React.Component{
  constructor(){
    super();
    this.content={
      data:[
        {id:1,name:"Viknesh"},
        {id:2,name:"Ashwini"}
      ]
    }
  }
  render(){
    return(
     <div>This is the Second class and the datas are below....
       <p>
         {this.content.data.map((i)=><List vals={i}/>)}
       </p>
     </div>
  );
}
}
class List extends React.Component{
  render(){
    return(
      <p>{this.props.vals.id+' - '+this.props.vals.name}</p>
    );
  }
}

export default App;
