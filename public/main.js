
import {graphql} from 'https://cdn.pika.dev/@octokit/graphql'


/* STEP 2: PREPARE FOR REQUEST */
// We'll need three things for our request:
// - the GraphQL query that we want called
// - our GitHub Access Token
// - the Authorization Header, with our token

// If you'd like to mess around with the GitHub API,
// visit the GraphiQL playground here:
// https://developer.github.com/v4/explorer/
const query = `
query {
    user {
      name
       repositories(last:20) {
         nodes {
           name
         }
       }
     }
  }
`

// Get your github access token at:
// https://github.com/settings/tokens
const token = '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'
const auth = {
    headers: {
        authorization: 'token ' + token
    }
}


/* STEP 3: CREATE THE FUNCTION */
// Create an async function to make the request.
async function makeRequest(query, auth) {
    return await graphql(query, auth)
}
// You can use ES6 syntax to make it semantic and in one-line!
const niceRequest = async (q, a) => await graphql(q, a)


/* STEP 4: USE THE FUNCTION */
// This will resolve the promise and print it to console.
// You can expand the objects and subobjects to see data.
console.log(niceRequest(query, auth))
// Congratulations! You ran a VanillaJS GraphQL query!
