import requests from "@/api/requests";
import { RequestsTypes } from "@/constants";
import { ISerialize, serialize } from "@/helpers/serialize";
import { IApi, IRequests, IUrl } from "@/types";

const api: IRequests & IApi = Object.create(requests);

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

api.get = function (
  requestName,
  query?: string,
  params?: ISerialize
): Promise<Record<string, number | string>> {
  const request = this.urls[requestName];

  if (request) {
    return _fetchGetRequest.call(this, request.path, params, query);
  }

  return Promise.resolve({ requestName: "not found" });
};

export default api;
