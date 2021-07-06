# Antimicrobial resistance register
Vue.JS frontend that consumes and API of surveillance data around antimicrobial resistance.

### Environment variables

The `.env` file in the application directory should contain:

```
client_id=
client_secret=
```

The variables are:

* `client_id` and `client_secret` are for accessing the [API](https://gitlab.com/langphil/amr-server)

These environment variables should also be configured on Heroku


### Installing & running
To clone and run the app, use the following commands;

```
$ git clone git@github.com:theodi/amr-frontend.git
$ cd amr-frontend
$ npm install
$ npm run dev
```

### Deployment
The AMR Frontend is deployed to Heroku. In order to deploy the project must be 'built' to the 'dist' directory.

```
# connect to heroku
$ heroku git:remote -a amr-frontend-staging
$ git remote rename heroku staging

$ npm run build
$ npm run deploystaging
$ npm run deploy
```

## Built With

* [Vue.JS](http://www.vuejs.org) - JavaScript Framework
* [Axios](https://github.com/axios/axios) - Promise based HTTP client
* [Node](https://nodejs.org/en/) - Server

## Contributing

Please read add any [issues](https://github.com/theodi/amr-frontend/issues) here, or make a [pull request](https://github.com/theodi/amr-frontend/pulls) here.

## Authors

* **Phil Lang** - Open Data Institute

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
