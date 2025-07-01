class StackOverflowAPI {
  url = "https://api.stackexchange.com/2.3";

  search(query) {
    const encoded = encodeURIComponent(query);
    const fullUrl = `${this.url}/search/advanced?order=desc&sort=activity&q=${encoded}&site=stackoverflow&filter=withbody`;

    return fetch(fullUrl)
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

export default new StackOverflowAPI();
