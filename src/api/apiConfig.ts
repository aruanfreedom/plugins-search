import { RequestsTypes } from "@/constants";

export const apiConfig = {
  // Список всех пакетов
  allPackages: {
    path: "stats/packages",
    method: RequestsTypes.GET,
  },
  // Конкретный пакет
  package: {
    path: "package/npm",
    method: RequestsTypes.GET,
  },
};
