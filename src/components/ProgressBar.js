import React from 'react';


function ProgressBar(props){
    const { completed } = props;
    
    const containerStyles = {
      height: 20,
      width: '32%',
      backgroundColor: "#1b1e21",
      borderRadius: 30,
      margin: 50,
    }
  
    const fillerStyles = {
      height: '100%',
      width: `${completed}%`,
      backgroundColor: "#67b826",
      borderRadius: 'inherit',
      textAlign: 'right',
      opacity: 1
    }
  
    return (
      <div style={containerStyles} className = "progressBar">
        <div style={fillerStyles}>
        </div>
      </div>
    );
  };
  
  export default ProgressBar;