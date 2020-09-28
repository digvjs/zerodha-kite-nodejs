# Zerodha algo trading using Node JS

This is the boilerplate project for algotrading using node js. I have added the implementation of Zerodha as an example. This app will allow user to sign in using their zerodha account credentials.

## Tech stack

* Express Framework (Node JS)
* Zerodha kite NodeJS APIs (https://github.com/zerodhatech/kiteconnectjs)

## Pre-requisites

You will need below given software dependencies installed globally in your system. Here are the ones I have -

* Node v12.16.3
* NPM v6.14.4

## Setup Process

After cloning the repo, install project dependencies.

```bash
npm install
```

Create `.env` file from `.env.example`, and change highlighted credentials with your own values in `.env` file

```
cp .env.example .env

```
Zerodha Kite API key and secret you can obtain from https://developers.kite.trade
```
# .env file
...
...
API_URL=<Your_app_url> #Default: http://localhost:3000
KITE_API_KEY="your_zerodha_kite_api_key" 
KITE_API_SECRET="your_zerodha_kite_api_secret"
```

Run the application
```
# Run in production mode
npm start

# Run in development mode 
npm run dev
```

Visit http://localhost:3000 to see your app.
