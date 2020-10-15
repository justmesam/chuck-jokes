var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const axios = require("axios");
class Client {
    constructor() {
        this.BASEUrl = "https://api.chucknorris.io/";
    }
    getCategories() {
        return __awaiter(this, void 0, void 0, function* () {
            const categories = yield axios.get(`${this.BASEUrl}jokes/categories`);
            const { data } = categories;
            return data.map((category) => ({
                category
            }));
        });
    }
    getJokeByCategory(category) {
        return __awaiter(this, void 0, void 0, function* () {
            const joke = yield axios.get(`${this.BASEUrl}jokes/random?category=${category}`);
            const { data } = joke;
            return {
                iconUrl: data.icon_url,
                id: data.id,
                url: data.url,
                value: data.value
            };
        });
    }
}
module.exports = new Client();
//# sourceMappingURL=client.js.map