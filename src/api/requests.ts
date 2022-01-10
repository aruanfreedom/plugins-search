import { BASE_URL } from "@/constants";
import { IRequests } from "@/types";

const requests: IRequests = {
  _baseUrl: BASE_URL,
  urls: {},
  init(packagesURL, baseUrl) {
    if (baseUrl) this._baseUrl = baseUrl;
    this.urls = packagesURL;
  },
};

export default requests;
