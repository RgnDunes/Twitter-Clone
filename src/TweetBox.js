import React, { useState, useEffect } from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";
import db from "./firebase";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");
  const [displayName, setDisplayName] = useState("Unknown");
  const [userName, setUserName] = useState("Unknown");
  const [verified, setVerified] = useState(false);
  const [avatar, setAvatar] = useState("");

  useEffect(() => {
    const _displayName = prompt("Enter your name : ");
    const _userName = prompt("Enter your twitter username : ");
    const _verified =
      prompt("Are you verified user ? (T/F) : ") == "T" ? true : false;
    const _avatar = prompt("Enter url of your image : ");
    if (_displayName) setDisplayName(_displayName);
    if (_userName) setUserName(_userName);
    if (_verified) setVerified(_verified);
    if (_avatar) setAvatar(_avatar);
    // console.log(_displayName, _userName, _verified, _avatar);
  }, []);

  const sendTweet = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      displayName: displayName,
      userName: userName,
      verified: verified,
      text: tweetMessage,
      image: tweetImage,
      avatar: avatar,
    });
    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="" alt="" />
          <input
            value={tweetMessage}
            onChange={(e) => setTweetMessage(e.target.value)}
            placeholder="What's happening ?"
            type="text"
          />
        </div>
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className="tweetBox__imageInput"
          placeholder="Optional : Enter image URL"
          type="text"
        />
        <Button
          type="submit"
          onClick={sendTweet}
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
