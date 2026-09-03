import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { creditFreddieMacServiceSchema, type CreditFreddieMacService } from "./credit-freddie-mac-service.js";

export type CreditFreddieMacServices = {
  service: CreditFreddieMacService;
};

export const creditFreddieMacServicesSchema: Schema<CreditFreddieMacServices> =
  s.object<CreditFreddieMacServices>({
    service: creditFreddieMacServiceSchema,
    _keysMap: {
      service: "SERVICE",
    },
  });
