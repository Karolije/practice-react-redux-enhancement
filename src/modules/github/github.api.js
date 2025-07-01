class GitHubAPI {
  url = "https://api.github.com";

  getRepos(userName) {
    return fetch(`${this.url}/users/${userName}/repos`)
      .then(this.handleErrors)
      .then((resp) => resp.json());
  }

  handleErrors(resp) {
    if (!resp.ok) {
      throw Error(resp.statusText);
    }

    return resp;
  }
}

export default GitHubAPI;
