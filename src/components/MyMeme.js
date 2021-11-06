import { connect } from 'react-redux';

function MyMeme(props){
    //console.log(props.myMemes);
    return(
        <div className="my-memes">
            {
            //props.myMemes && props.myMemes.map((e,i)=>(
                props.myMemes.data && <img src={props.myMemes.data.url} alt="" className="my-meme-img"/>
            //))
            }
        </div>
    )
}

function MapStateToProps(state){
    return {
        myMemes:state.myMemes
    }
}

export default connect(MapStateToProps,null)(MyMeme);