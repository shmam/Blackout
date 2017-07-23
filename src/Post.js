import React, { Component } from 'react';
import './App.css';

//const colors = ['#ffb3b3','#9fbedf','#b3b3cc','#9fdf9f','#ffcc80','#cccc99','#9cb9ff','#6a8e81','#8e5b5b','#c8c1a5','#c6b5a7','#adc0b4','	#9db1bd','#bda5bc',	'#a19cb5','#f7a889','#f9d0a4','#f0debc','#f2e9af','#a4b28f','#786a94','#6c6389'];

class Post extends Component{
    
    render(){


        var twittervar = this.props.value
        // eslint-disable-next-line
        twittervar = twittervar.replace(/[.,\/#!$\^&\*;:{}=\-_`~()]/g,"");
        twittervar = twittervar.split(" ")
        twittervar = twittervar.join("%20")
        
        console.log(twittervar)
        return(
            <div className="Post" >
               
                <p className="content">{this.props.value}</p>
                 <p className="username">{this.props.date}</p>
                <a className="twitter-share-button"  href={"https://twitter.com/intent/tweet?text=" + twittervar}> tweet. </a> 
           </div>
        );
    }
}

export default Post