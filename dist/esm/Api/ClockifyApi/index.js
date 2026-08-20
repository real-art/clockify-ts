"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const qs_1 = require("qs");
const axios_1 = __importDefault(require("axios"));
const ClockifyError_1 = __importDefault(require("../../ClockifyError"));
const paramsSerializer = (params) => (0, qs_1.stringify)(params, {
    arrayFormat: "repeat",
    serializeDate: (d) => d.toISOString(),
});
class ClockifyAPI {
    constructor(apiKey) {
        this._apiKey = apiKey;
        this._api = this.clockifyApiInstance(apiKey);
    }
    resourceSubPath() {
        return "";
    }
    clockifyApiInstance(apiKey) {
        return axios_1.default.create({
            baseURL: "https://api.clockify.me/api/v1",
            headers: {
                'content-type': 'application/json',
                'X-Api-Key': apiKey,
            },
        });
    }
    axiosGet(query = {}) {
        return this._api.get(this.resourceSubPath(), { params: query, paramsSerializer })
            .then(res => res.data)
            .catch(err => { throw new ClockifyError_1.default(err); });
    }
    axiosPost(data = {}, query = {}) {
        return this._api.post(this.resourceSubPath(), data, { params: query, paramsSerializer })
            .then(res => res.data)
            .catch(err => { throw new ClockifyError_1.default(err); });
    }
    axiosPut(data = {}, query = {}) {
        return this._api.put(this.resourceSubPath(), data, { params: query, paramsSerializer })
            .then(res => res.data)
            .catch(err => { throw new ClockifyError_1.default(err); });
    }
    axiosPatch(data = {}, query = {}) {
        return this._api.patch(this.resourceSubPath(), data, { params: query, paramsSerializer })
            .then(res => res.data)
            .catch(err => { throw new ClockifyError_1.default(err); });
    }
    axiosDelete(query = {}) {
        return this._api.delete(this.resourceSubPath(), { params: query, paramsSerializer })
            .then(res => res.data)
            .catch(err => { throw new ClockifyError_1.default(err); });
    }
}
exports.default = ClockifyAPI;
//# sourceMappingURL=index.js.map