# Tny (A tiny url generator)

This is going to be a tiny url generator for my website because it'll be nice to have one

## Plan
An api that assigns the tiny urls:
- Api will check if the tiny url is in use
- Add the api
- Automatically generate a 6 digit url
- Allow the user to pick their own url 

The redirects for the urls:
- When the url is hit then it will redirect to the large url
- If url doesn't exist it will send the person to the url generator and ask to assign a url

## Things I want
- I need to figure out what is better/cheaper DynamoDB or MongoDB (though I'd like to learn to use Dynamo)
- I would like to have this project working just of off lambdas instead of some continuously running server (probably start with the server tho and then convert)
- I need some kind of way to generate a schema
- I'd like to add a scrapper that checks the url and automatically adds information about the link (like title and stuff)
- I'd like some kind of way to prevent people from creating too many links at the same time in case it gets abused (like some throttling and debouncing)