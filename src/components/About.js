import React from "react";

function About({image="https://via.placeholder.com/215", bio}){
    return (
        <aside>
            <img src={image} alt="blog logo" />
            <p>{bio}</p>
        </aside>
    );
}
export default About;