import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { serviceSchema, type Service } from "./service.js";

export type Services = {
  service: Service;
};

export const servicesSchema: Schema<Services> = s.object<Services>({
  service: serviceSchema,
  _keysMap: {
    service: "SERVICE",
  },
});
