import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { serviceSchema, type Service } from "./service.js";

/** A collection of objects that describe requests and responses for services. */
export type Services = {
  /**
   * A collection of details related to a fulfillment service or product in terms of request,
   * process and result.
   */
  service: Service;
};

export const servicesSchema: Schema<Services> = s.object<Services>({
  service: serviceSchema,
  _keysMap: {
    service: "SERVICE",
  },
});
