// Dependências
import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';

// Create React Component
const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail />
      <CommentDetail />
      <CommentDetail />      
    </div>
    
  )
}
// Render
ReactDOM.render(<App />, document.getElementById('root'));
