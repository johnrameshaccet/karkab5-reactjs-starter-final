
import React, { useContext,useState } from 'react';  
import FeedContext from './FeedContext';

function Feed(props){
    const feed = useContext(FeedContext);
    const [input,setInput] = useState('');
    // let listItem1 = '';

    // for(let i =0; i<feed.feedList.length;i++){
    //     listItem1 += feed.feedList[i].id;
    // }

    const listItems = feed.feedList.map((feed) =>
    <div class="media">
                           <p class="pull-right"><small>5 days ago</small></p>
                            <a class="media-left" href="#">
                              <img src={feed.image} width="50"/>
                            </a>
                            <div class="media-body">
                                
                              <h4 class="media-heading user_name">{feed.user}</h4>
                              {feed.msg}
                              
                              <p><small><a href="">Like</a> - <a href="">Share</a></small></p>
                            </div>
                          </div>
    );

    function addFeed(){
        let newPostObj = {
            id:3,
            msg:input,
            user:4,
            image:'https://picsum.photos/200'
        };
        let newFeed = [...feed.feedList,newPostObj];
        feed.setFeedList(newFeed);

        setInput('');
    }


    return (
        <div class="container">
            <div class="row">

                <input value={input} onChange={(e)=>setInput(e.target.value)}></input>
                <button onClick={()=>addFeed()}>Insert</button>
                <div class="col-md-8">
                  <div class="page-header">
                    <h1> Feed </h1>
                  </div> 
                   <div class="comments-list">
                       {listItems}
                   </div>
                    
                    
                    
                </div>
            </div>
        </div>
    );
}

export default Feed;