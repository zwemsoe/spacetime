import React from 'react';
import quotes from "./Quotes";

function Quote(props){
    console.log(props.id)
    return (
        <div class="card text-white bg-dark quote-section">
            <div class="card-body">
            <blockquote class="blockquote mb-0">
                <p style={{fontSize: "0.8em"}}>{quotes[props.id].quote} {quotes[props.id].emoji}</p>
                <footer class="blockquote-footer"><cite title="Source Title">{quotes[props.id].name}</cite></footer>
            </blockquote>
        </div>
        </div>
        )
}

export default Quote;