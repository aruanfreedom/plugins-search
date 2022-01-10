import { ISerialize } from "@/helpers/serialize";

export interface IPackage {
  type: string;
  name: string;
  hits: string;
}

export interface IPages {
  [key: string]: IPackage[];
}

export interface ITags {
  latest?: string;
  alpha?: string;
  beta?: string;
  canary?: string;
  rc?: string;
}

export interface IPackageInfo {
  versions?: never[];
  tags?: ITags;
}

export interface IUrlParams {
  method: string;
  path: string;
  name: string;
}

export interface IUrl {
  [key: string]: IUrlParams;
}

export interface IRequests {
  _baseUrl: string;
  urls: IUrl;
  init: (packagesURL: IUrl, baseUrl?: string) => void;
}

export interface IApi {
  get: (
    requestName: string,
    query?: string,
    params?: ISerialize
  ) => Promise<IPackageInfo>;
}
