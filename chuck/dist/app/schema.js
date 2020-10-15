const { gql } = require("apollo-server");
module.exports = gql `
  type Category {
    category: String
  }

  type Joke {
    iconUrl: String,
    id: String,
    url: String,
    value: String
  }

  type Query {
    categories: [Category]
    joke(category: String): Joke
  }
`;
//# sourceMappingURL=schema.js.map