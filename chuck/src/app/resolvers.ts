const client = require('./client')

module.exports = {
  Query: {
    categories: () => {
      try {
        return client.getCategories()
      } catch (error) {
        throw error
      }
    },
    joke : (_: any, args: any) => {
      try {
        const { category } = args
        return client.getJokeByCategory(category)
      } catch (error) {
        throw error
      }
    },
  },
}
