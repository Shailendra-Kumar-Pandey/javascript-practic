const APIURL = "https://api.github.com/users/";
const main = document.querySelector('#main');
const searchBox = document.querySelector('#search');

const getUsers = async(username) =>{
    const response = await fetch(APIURL + username);
    const data = await response.json();
    // console.log(data);
    main.innerHTML = `
    <div class="card">
            <div>
                <img class="avatar" src=${data.avatar_url} alt="Florin Pop">
            </div>
            <div class="user-info">
                <h2>${data.name}</h2>
                <p>${data.bio}</p>

                <ul class="info">
                    <li>${data.followers}<strong>Followers</strong></li>
                    <li>${data.following}<strong>Following</strong></li>
                    <li>${data.public_repos}<strong>Repos</strong></li>
                </ul>

                <div id="repos">
                    
                </div>
            </div>
        </div>
    `
    getRepo(username);
}

// getUsers("shailendra-kumar-pandey");


    
const getRepo= async(username)=>{
    const repos = document.querySelector("#repos");
    const response = await fetch(APIURL + username + "/repos");
    const data = await response.json()
    // console.log(data);
    data.forEach((e) => {
        const elem = document.createElement('a');
        elem.classList.add("repo");
        elem.href = e.html_url;
        elem.innerText = e.name;
        elem.target ='_blank';
        repos.appendChild(elem);
    });
};


const formSubmit = () =>{
    if(searchBox.value != ''){
    getUsers(searchBox.value);
    searchBox.value = "";
    }
    return false;
}

searchBox.addEventListener("focusout", function (){
    formSubmit();
})

{/* <a class="repo" href="#" target="_blank">Repo 1</a>
<a class="repo" href="#" target="_blank">Repo 2</a>
<a class="repo" href="#" target="_blank">Repo 3</a> */}