
module.exports = makeTwitterFeed = function(el) {

    'use strict';
    var environment = require('./Environment')();
    var twitterEndPoint = (environment.env !== environment.prod) ? '' : '';
    var showEachTweetFor = 3000;
    var showTweet = function(tweets) {
        if (tweets.length > 0) {
            var tweet = tweets.pop();
            el.find('.twitter-name').html(tweet.user.name);
            el.find('.twitter-handle').html('@' + tweet.user.screen_name);
            el.find('.tweet-text').html(tweet.text);
            el.find('.tweet').animate({ opacity: 1 }, 500).delay(showEachTweetFor).animate({ opacity: 0 }, 500, function() { showTweet(tweets); });
        } else {
            getFeed();
        }
    };
    var gotTweets = function(data) {
        console.log(data);
        if (typeof(data) === 'string') {
            data = $.parseJSON(data);
        }
        
        showTweet(data.results.slice(0,30));
    };
    var getFeed = function() {
        $.get(twitterEndPoint, gotTweets);
    };
    showTweet([]);

};
