const dotenv = require('dotenv');
dotenv.config(); // Load environment variables from .env

module.exports = {
    zohoTokes:{
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET,
        refresh_token: process.env.REFRESH_TOKEN
    }
}
