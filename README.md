## Top 100 Crypto Updates from Coin Market Cap - React Front-End

Pawel Leja
101232470

The purpose of this app is to display data about any top 100 cryptocurrency on coinmarketcap.com. It calls data from a seperate express.js back-end which calls data from the coin market cap API. The data is then displayed on the front-end. 

Simply type in the ticker or the full-name of the currency. If it is a top-100 token, its information will be displayed in a chart.

## Dependendies/requirements
Top 100 Crypto Updates back-end
npm
React
React-Bootstrap
Axios

## Setup
THIS IS A TWO-PART APP!

The Back-End component of this app is required in order to connect to the coin market cap api. Instructions on setting up the back-end can be found on the Back-end readme.md. Find the Back-end at:
 https://github.com/pleja/projectBackend

note: an API key from Coin Market Cap is required. You can obtain one from here: https://pro.coinmarketcap.com/login/
The API key will be utilized in the Back-end component of this app.

1. Make sure the Back-End is installed and running first on port 3001.
2. install react, react-dom, react-scripts, react-bootstrap, and axios.

    npm install react
    npm install react-dom
    npm install react-scripts
    npm install react-bootstrap
    npm install axios
    npm init

3. in console, type "npm start" to run the app.
4. make sure the back-end is running.

## Features
Reports the following Top 100 Cryptocurrency features:
    Token Name
    Token Symbol
    Price in USD (to 2 decimals)
    market cap
    Circulating Amount
    Total Supply
    Latest Date (yyyy-mm-dd)
    Latest Time (hh:mm:ss)

background image obtained from: https://www.blockchains-expert.com/en/introduction-to-blockchain/