const https = require('https'),
  msgComposer = require('./msg-composer');

module.exports =  function(token, chat, data) {
  var post_data = JSON.stringify({
    "chat_id": chat,
    "text": msgComposer(data),
    "parse_mode": "Markdown",
    "disable_web_page_preview": true
  });
  var post_options = {
      host: "api.telegram.org" ,
      port: 443,
      path: "/bot" + token + "/sendMessage",
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'Content-Length': Buffer.byteLength(post_data)
      }
  };
  https.request(post_options).end(post_data);
}

