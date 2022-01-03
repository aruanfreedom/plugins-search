import { RequestsTypes } from "@/constants";
import { IRequests } from "@/api/requests";

export const createRequests = (requests: IRequests) => {
  // Список всех пакетов
  requests.addUrl("allPackages", "stats/packages", RequestsTypes.GET);

  // Конкретный пакет
  requests.addUrl("package", "package/npm", RequestsTypes.GET);
};
