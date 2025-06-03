const fetch = require('node-fetch');

exports.handler = async function (event, context) {
  const query = event.queryStringParameters.q || "news";
  const API_KEY = "0ea2bdb2e0714ed0a010339f866ae4b0";
  const url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(query)}&apiKey=${API_KEY}&pageSize=100&language=en&sortBy=publishedAt`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: error.message }),
    };
  }
};
