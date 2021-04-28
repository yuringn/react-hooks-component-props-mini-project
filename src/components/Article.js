import React from "react";

function minsRead(minutes){
    
    let emoji = "";
    if (minutes < 30){
        for (let i=0; i < minutes; i+=5) {
            // console.log(minutes, i)
            emoji += "☕️"
        }
    } else {
        for (let i=0; i < minutes; i+=10){
            emoji+= "🥱"
        }
    }
    return emoji;
}

function Article({title, date="January 1, 1970", preview, minutes}){
    // let emoji = "";
    // if (minutes < 30){
    //     for (let i=0; i < minutes; i+=5) {
    //         // console.log(minutes, i)
    //         emoji += "☕️"
    //     }
    // } else {
    //     for (let i=0; i < minutes; i+=10){
    //         emoji+= "🥱"
    //     }
    // }
    return(
        <article>
            <h3>{title}</h3>
            <small>{date +".   "} 

            {minsRead(minutes)}{minutes} min read
            
            </small>
            <p>{preview}</p>
        </article>

    );
}

export default Article;