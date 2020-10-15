const client = require('./client');
module.exports = {
    Query: {
        categories: () => {
            try {
                return client.getCategories();
            }
            catch (error) {
                throw error;
            }
        },
        joke: (_, args) => {
            try {
                console.log(">>>>>>>>   ", args);
                const { category } = args;
                return client.getJokeByCategory(category);
            }
            catch (error) {
                throw error;
            }
        },
    },
};
//# sourceMappingURL=resolvers.js.map