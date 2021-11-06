import React,{ useState } from 'react';
import { connect } from 'react-redux';
import { Form, FormGroup, FormControl } from "react-bootstrap";
import './App.css';
import './css/style.css';
import MemeItem from './components/MemeItems'
import MyMeme from './components/MyMeme'
import Logo from './img/memes.png'

function App(props) {
  let [ limit,setLimit ] = useState(10);
  let [ text0,set0 ] = useState(' ');
  let [ text1,set1 ] = useState(' ');
  let [ flag,setFlag ] = useState(1);
  return (
    <div className="App">
      <img src={Logo}></img>
      <br />
     <br />
     {
      (flag==1) && <>
      <Form inline>
        <FormGroup>
        {' '}
        TOP TEXT: <FormControl type="text" onChange={(e)=>{ set0(e.target.value)}}/>{' '} 
        BOTTOM TEXT: <FormControl type="text" onChange={(e)=>{ set1(e.target.value)}}/>
        </FormGroup>
        { ' ' }
      </Form><br />
        <div className="meme-show col-sm-12">
        <h1>Available Meme Templates</h1>
      {
        props.memes.memes && props.memes.memes.slice(0,limit).map((meme,i)=>(
                <>
                <MemeItem key={i} meme={meme} text0={text0} text1={text1} setFlag={setFlag}/>
                </>
        ))
      }
      <div onClick={()=>{
        setLimit(limit+10);              
    }}>Load 10 more memes....</div>
      </div>
    </>
    }
    <div className="col-sm-12">
      {
        flag==0 && <>
        <MyMeme /><br />
        <button className="btn btn-primary" onClick={(e)=>{setFlag(1)}}>Back</button>
        </>
      }
    </div>
    </div>
  );
}

function mapStateToProps(state){
    return state;
}

export default connect(mapStateToProps,null)(App);
