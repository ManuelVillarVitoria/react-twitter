import React from 'react';
import { getLatestTweets } from '../../api/tweets';

const TweetsPage = () => {
  const [tweets, setTweets] = React.useState([]);

  React.useEffect(() => {
    getLatestTweets().then(setTweets);
  }, []);

  const items = tweets.map(tweet => <li key={tweet.id}>{tweet.content}</li>);

  return (
    <div className="tweetsPage">
      <ul>{items}</ul>
    </div>
  );
};

export default TweetsPage;

