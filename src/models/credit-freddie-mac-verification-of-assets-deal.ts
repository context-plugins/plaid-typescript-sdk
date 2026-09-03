import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { creditFreddieMacLoansSchema, type CreditFreddieMacLoans } from "./credit-freddie-mac-loans.js";
import { creditFreddieMacPartiesSchema, type CreditFreddieMacParties } from "./credit-freddie-mac-parties.js";
import {
  creditFreddieMacServicesSchema,
  type CreditFreddieMacServices,
} from "./credit-freddie-mac-services.js";

export type CreditFreddieMacVerificationOfAssetsDeal = {
  loans: CreditFreddieMacLoans;
  parties: CreditFreddieMacParties;
  services: CreditFreddieMacServices;
};

export const creditFreddieMacVerificationOfAssetsDealSchema: Schema<CreditFreddieMacVerificationOfAssetsDeal> =
  s.object<CreditFreddieMacVerificationOfAssetsDeal>({
    loans: creditFreddieMacLoansSchema,
    parties: creditFreddieMacPartiesSchema,
    services: creditFreddieMacServicesSchema,
    _keysMap: {
      loans: "LOANS",
      parties: "PARTIES",
      services: "SERVICES",
    },
  });
