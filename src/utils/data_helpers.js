import token from "../token.js";

const checkResponse = response => {
  if (response.status !== 200) {
    console.log(`Error with the request! ${response.status}`);
    return;
  }
  return response.json();
};

const getUserData = username => {
  return fetch(`https://api.github.com/users/${username}?access_token=${token}`)
    .then(checkResponse)
    .catch(error => {
      throw new Error(`fetch getUserData failed ${error}`);
    });
};

export { getUserData};
