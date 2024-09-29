// netlify/functions/verify-recaptcha.js
const fetch = require('node-fetch');

exports.handler = async (event, context) => {
  // Check for POST request
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method Not Allowed' }),
    };
  }

  const { token } = JSON.parse(event.body);
  const secretKey = process.env.RECAPTCHA_SITE_SECRET; // Add your secret key in Netlify environment variables

  if (!token) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'reCAPTCHA token is required' }),
    };
  }

  // Verify reCAPTCHA token with Google
  const verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`;

  try {
    const response = await fetch(verificationUrl, {
      method: 'POST',
    });

    const data = await response.json();

    if (data.success) {
      return {
        statusCode: 200,
        body: JSON.stringify({ success: true, message: 'reCAPTCHA verified successfully' }),
      };
    } else {
      return {
        statusCode: 400,
        body: JSON.stringify({ success: false, error: 'reCAPTCHA verification failed', errors: data }),
      };
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, error: 'Server error', details: error.toString() }),
    };
  }
};
