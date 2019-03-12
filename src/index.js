// Import React and ReactDOM Libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create React Component
const App = () => {
  return (
    <div>
      <label htmlFor="name">Enter name:</label>
      <input id="name" type="text"/>
      <button type="submit" style={{backgroundColor:'blue', color: 'white'}}>Submit</button>
    </div>
  )
}
// Render the React Component
ReactDOM.render(<App />, document.getElementById('root'));
