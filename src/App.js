import React,{Component} from 'react';
import  './style.css'
import {connect} from 'react-redux'

class App extends  Component{
  render(){
    return (
    <div className="container">
      <h1>redux empty project</h1> 
    </div>
  );
  }
}


const mapStateToProps = store => {
  return {}
}
const mapDispatchToProps = dispatcn => {
  return {}
}


export default connect(mapStateToProps,mapDispatchToProps)(App);
