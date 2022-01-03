import { BASE_URL } from "@/constants";

export interface IUrl {
  name: string;
  method: string;
  path: string;
}

export interface IRequests {
  baseURL: string;
  urls: IUrl[];
  addUrl: (name: string, path: string, method: string) => void;
}

const requests: IRequests = {
  baseURL: BASE_URL,
  urls: [],
  addUrl(name, path, method) {
    this.urls.push({
      name,
      method,
      path: `${this.baseURL}/${path}`,
    });
  },
};

export default requests;
