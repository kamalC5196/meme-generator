import React,{ useState } from 'react';
import { connect } from 'react-redux';
import { createMeme } from '../js/action';

function MemeItems(props){
    let [hover,sethover] = useState(false);
    
    function postMeme(){
        const { text0, text1 } = props;
        const memeObj = {
            template_id: props.meme.id,
            text0,
            text1
            }
        props.setFlag(0);
        props.createMeme(memeObj);
    }
    return(
        <div className="meme-item" onMouseEnter={()=>sethover(true)} onMouseLeave={()=>sethover(false)} onClick={()=>postMeme()}>
            <img src={props.meme.url} alt={props.meme.name} className={hover ? "darken-img":"meme-img"}/>
            <p className={hover ? "meme-txt":"no-txt"}>{props.meme.name}</p>
        </div>
    )
}


export default connect(null,{ createMeme })(MemeItems);