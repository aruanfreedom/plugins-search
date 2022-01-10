export interface ISerialize {
  [key: string]: string | number | boolean;
}

export const serialize = (params?: ISerialize): string => {
  const str: string[] = [];
  if (!params || !Object.keys(params).length) return "";

  Object.keys(params).forEach((param) => {
    if (param in params) {
      str.push(
        encodeURIComponent(param) + "=" + encodeURIComponent(params[param])
      );
    }
  });

  const pathParams = `?${str.join("&")}`;
  return pathParams;
};
