// Dependências
import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

// Create React Component
const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <h4>Warning!</h4>
        Are you sure you want to do this?
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Thales"
          timeAgo="Today at 4:45PM"
          content="What a post!"
          img={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="André"
          timeAgo="Today at 2:00AM"
          content="Awesome a post!"
          img={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Geovani"
          timeAgo="Yesterday at 5:00PM"
          content="Not a post!"
          img={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};
// Render
ReactDOM.render(<App />, document.getElementById('root'));
