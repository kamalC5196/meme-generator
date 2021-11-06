import { username, password } from './info'
export const RX_MEMES = 'RX_MEMES';
export const MY_MEMES = 'MY_MEMES';

function rxMemes(json) {
    //const { memes } = json.data;
    
    return {
        type:RX_MEMES,
        memes:json.data
    }
}

function fetchMemesJson(){
    return fetch('https://api.imgflip.com/get_memes')
    .then(data=>data.json())
}

export function fetchMemes(){
    return function(dispacth){
        return fetchMemesJson()
        .then(json=>dispacth(rxMemes(json)))
    }
}

function myMeme(meme){
    return {
        type:MY_MEMES,
        meme
    }
    
}

function postMemeJson(params){
    params["username"] = username;
    params["password"] = password;
    
    const bodyParms = Object.keys(params).map(key=>{
        return encodeURIComponent(key)+'='+encodeURIComponent(params[key])
    }).join('&');
    console.log('bp', bodyParms);
    
    return fetch('https://api.imgflip.com/caption_image',{
        method:"POST",
        headers:{
            'Content-Type':'application/x-www-form-urlencoded'
        },
        body:bodyParms
    }).then(res=>res.json())
    .then(data=>{
        return data;
    })

}

export function createMeme(new_meme_obj){
    return function(dispatch){
        return postMemeJson(new_meme_obj)
        .then(new_meme=>dispatch(myMeme(new_meme)))
    }
}