import { BASE_URL } from "@/constants";
import { ISerialize, serialize } from "@/helpers/serialize";
import { IRequests, IUrl } from "@/types";

const _fetchGetRequest = async function (
  requestPath: string,
  params?: ISerialize,
  query?: string
): Promise<Record<string, number | string>> {
  const request = await fetch(
    `${this._baseUrl}/${requestPath}${query || ""}${serialize(params)}`
  );
  const result = await request.json();
  return result;
};

const get = function (
  requestName: string,
  query?: string,
  params?: ISerialize
): Promise<Record<string, number | string>> {
  const request = this.urls[requestName];

  if (request) {
    return _fetchGetRequest.call(this, request.path, params, query);
  }

  return Promise.resolve({ requestName: "not found" });
};

const init = function (apiConfig: IUrl, baseUrl?: string): void {
  if (baseUrl) this._baseUrl = baseUrl;
  this.urls = apiConfig;
};

const api: IRequests = {
  _baseUrl: BASE_URL,
  urls: {},
  init,
  get,
};

export default api;
