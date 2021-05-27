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
`;
const token = "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";
const options = {
  method: "post",
  mode: "no-cors",
  headers: {
    Authorization: "bearer " + token,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    query: `query { 
      viewer { 
        login
      }
    }`,
    variables: {},
  }),
};

const makeRequest = async () => {
  const res = await fetch("https://api.github.com/graphql", options);
  console.log(res);
};

makeRequest();
