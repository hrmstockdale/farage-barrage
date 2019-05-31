let gitHubToken = process.env.REACT_APP_GITHUB_ACCESS_TOKEN;

const checkResponse = response => {
  if (response.status !== 200) {
    console.log(`Error with the request! ${response.status}`);
    return { errorResponse: `Error with the request! ${response.status}`};
  }
  return response.json();
};

const getUserData = username => {
  return fetch(
    `https://api.github.com/users/${username}?access_token=${gitHubToken}`
  )
    .then(checkResponse)
    .catch(error => {
      throw new Error(`fetch getUserData failed ${error}`);
    });
};

export { getUserData };
