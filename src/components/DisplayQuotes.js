import React from 'react';
import quotes from "./Quotes";

function Quote(props){
    console.log(props.id)
    return (
        <div class="quote-section">
            <p className = "quote">{quotes[props.id].quote} {quotes[props.id].emoji}</p>
            <footer class="blockquote-footer person-name"><cite title="Source Title">{quotes[props.id].name}</cite></footer>
        </div>
        )
}

export default Quote;