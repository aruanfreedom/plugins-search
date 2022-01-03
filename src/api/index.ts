import requests, { IUrl } from "@/api/requests";
import { createRequests } from "@/api/packagesApi";
import { RequestsTypes } from "@/constants";
import { ISerialize, serialize } from "@/helpers/serialize";

interface IApi {
  get: (requestName: string, params?: ISerialize, query?: string) => unknown;
}

const createGetRequest = async (
  requestName: string,
  params?: ISerialize,
  query?: string
) => {
  const request = await fetch(
    `${requestName}${query || ""}${serialize(params)}`
  );
  const result = await request.json();
  return result;
};

const requestType = (
  type: string,
  request: IUrl,
  params?: ISerialize,
  query?: string
) => {
  switch (type) {
    case RequestsTypes.GET: {
      return createGetRequest(request.path, params, query);
    }
    default:
      return Promise.resolve("nothing");
  }
};

const api: IApi = {
  get: (requestName, params?: ISerialize, query?: string): Promise<any> => {
    const request = requests.urls.find(
      (request: IUrl) => requestName === request.name
    );

    if (!request) return Promise.resolve("nothing");

    return requestType(RequestsTypes.GET, request, params, query);
  },
};

createRequests(requests);

export default api;
