export interface IPackage {
  type: string;
  name: string;
  hits: string;
}

export interface IPages {
  [key: string]: IPackage[];
}
