import React from "react";
import "./Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input type="text" placeholder="Search Twitter" />
      </div>
      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>
        <TwitterTweetEmbed tweetId="1265499999992979456" />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="RgnDunes"
          options={{ height: 400 }}
        />
        <TwitterShareButton
          url={"https://github.com/RgnDunes"}
          options={{ text: "Check out my Github", via: "RgnDunes" }}
        />
      </div>
    </div>
  );
}

export default Widgets;
