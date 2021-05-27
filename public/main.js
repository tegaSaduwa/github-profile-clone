const input = document.querySelector("#search");
const repoList = document.querySelector("#repoList");
const title = document.querySelector("#title");
const username = document.querySelector("#username");
const repolen = document.querySelector(".repo-length");
const profileImg = document.querySelector(".profile-pic-img");

const action = () => {
  console.log(input.value);
};

const opt2 = {
  method: "get",
  credentials: "include",
  mode: "no-cors",

  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Credentials": true,
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Origin": "http://localhost:5555/",
  },
};

console.log(opt2);
const makemockRequest = async () => {
  repoList.innerHTML = "";
  const req = await axios.get(
    `http://localhost:5555/users?username=${input.value}`,
    opt2
  );
  console.log(req.data, `http://localhost:5555/users?username=${input.value}`);

  title.textContent = req.data[0].fullname;
  username.textContent = req.data[0].username;
  profileImg.src = req.data[0].img;
  repolen.textContent = req.data[0].repositories.length;

  req.data?.repositories?.foreach((repo) => {
    const li = document.createElement("li");
    li.className = "repo-list-item";
    li.innerHTML = `
  <span class="repo-item-wrapper"> <a href="#" class="repo-list-header"> ${repo.name}</a>
  <button class="repo-list-btn"> <i class="fa fa-star"></i> Star</button></span>
  <p><span class="language-circle"> </span>............</p>
  `;
 
  });
  repoList.appendChild(li);
  document.querySelector('.col-2-3').appendChild(repoList)
};

input.addEventListener("change", makemockRequest);

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
const options = {
  method: "post",
  mode: "no-cors",
  headers: {
    Authorization: "Bearer " + "",
    "Content-Type": "application/json",
    "Access-Control-Allow-Credentials": true,
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
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
console.log(options);
const makeRequest = async () => {
  const res = await axios.get("https://api.github.com/graphql", options);
  console.log(res.data);
};

makeRequest();
