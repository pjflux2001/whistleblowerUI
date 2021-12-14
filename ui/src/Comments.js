import React from "react";
import { Comment } from "semantic-ui-react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  commentBox: {
    display: "flex",
    flexDirection: "row",
    margin: "0 10px",
  },
  commentBody: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    margin: "0 5px",
    fontSize: "0.75em",
  },
}));

const Comments = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.commentBox}>
      <Comment.Avatar src="https://react.semantic-ui.com/images/avatar/small/matt.jpg" />
      <Comment.Content>
        <div className={classes.commentBody}>
          <Comment.Author as="a">Matt</Comment.Author>
          <Comment.Metadata>
            <div>Today at 5:42PM</div>
          </Comment.Metadata>
          <Comment.Text>How artistic!</Comment.Text>
        </div>
      </Comment.Content>
    </div>
  );
};
export default Comments;
