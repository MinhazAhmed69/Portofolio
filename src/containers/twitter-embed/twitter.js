import React, {Suspense, useContext, useEffect} from "react";
import "./twitter.scss";
import Loading from "../loading/Loading";
import {TwitterTimelineEmbed} from "react-twitter-embed";
import {twitterDetails} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

const renderLoader = () => <Loading />;

export default function Twitter() {
  const {isDark} = useContext(StyleContext);

  useEffect(() => {
    // Timeout to check if Twitter has loaded
    const timeout = setTimeout(() => {
      const twitterElement = document.getElementById("twitter");
      if (twitterElement && !twitterElement.innerHTML.includes("iframe")) {
        twitterElement.innerHTML =
          "<div class='centerContent'><h2>Can't load? Check privacy protection settings.</h2></div>";
      }
    }, 10000);

    return () => clearTimeout(timeout); // Cleanup function to prevent memory leaks
  }, []);

  if (!twitterDetails.display) return null;
  if (!twitterDetails.userName) {
    console.error("Twitter username for twitter section is missing");
    return null;
  }

  return (
    <Suspense fallback={renderLoader()}>
      <div className="tw-main-div" id="twitter">
        <div className="centerContent">
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName={twitterDetails.userName}
            options={{height: 400, width: window.innerWidth < 768 ? 300 : 500}}
            placeholder={renderLoader()}
            borderColor="#fff"
            theme={isDark ? "dark" : "light"}
            noFooter
          />
        </div>
      </div>
    </Suspense>
  );
}
