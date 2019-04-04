import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

import "./styles.css";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <h1>Warning!</h1>
        Are you sure you want to do that?
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Jake"
          timeAgo="Today at 4:45pm"
          comment="Seriously sick kicks man!"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Justin"
          timeAgo="Today at 2:00am"
          comment="Off the wall"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Jim"
          timeAgo="Yesterday at 1:00pm"
          comment="Jeepers! Where'd you get those sneakers?"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
