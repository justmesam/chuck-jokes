const axios = require("axios")

class Client {
  readonly BASEUrl: string = "https://api.chucknorris.io/"

  constructor() {
  }

  async getCategories() {
    const categories = await axios.get(`${this.BASEUrl}jokes/categories`)
    const { data } = categories
    return data.map((category) => ({
      category
    }))
  }

  async getJokeByCategory(category: string) {
    const joke = await axios.get(`${this.BASEUrl}jokes/random?category=${category}`)
    const { data } = joke
    return {
      iconUrl: data.icon_url,
      id: data.id,
      url: data.url,
      value: data.value
    }
  }
}

module.exports = new  Client()
