import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { creditFreddieMacServiceSchema, type CreditFreddieMacService } from "./credit-freddie-mac-service.js";

/** A collection of objects that describe requests and responses for services. */
export type CreditFreddieMacServices = {
  /**
   * A collection of details related to a fulfillment service or product in terms of request,
   * process and result.
   */
  service: CreditFreddieMacService;
};

export const creditFreddieMacServicesSchema: Schema<CreditFreddieMacServices> =
  s.object<CreditFreddieMacServices>({
    service: creditFreddieMacServiceSchema,
    _keysMap: {
      service: "SERVICE",
    },
  });
