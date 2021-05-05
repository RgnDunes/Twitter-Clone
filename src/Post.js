import React from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";
import RepeatIcon from "@material-ui/icons/Repeat";

function Post({ displayName, userName, verified, text, image, avatar }) {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar
          src="https://avatars.githubusercontent.com/u/61814592?v=4"
          alt=""
        />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              Dunes{" "}
              <span className="post__headerSpecial">
                <VerifiedUserIcon className="post__badge" />
                @rgndunes
              </span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p>Description goes here 01</p>
          </div>
        </div>
        <img
          src="https://avatars.githubusercontent.com/u/61814592?v=4"
          alt=""
        />
        <div className="post__footer">
          <ChatBubbleIcon fontSize="small" />
          <RepeatIcon fontSize="small" />
          <FavoriteBorderIcon fontSize="small" />
          <PublishIcon fontSize="small" />
        </div>
      </div>
    </div>
  );
}

export default Post;
