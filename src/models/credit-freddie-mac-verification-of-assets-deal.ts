import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { creditFreddieMacLoansSchema, type CreditFreddieMacLoans } from "./credit-freddie-mac-loans.js";
import { creditFreddieMacPartiesSchema, type CreditFreddieMacParties } from "./credit-freddie-mac-parties.js";
import {
  creditFreddieMacServicesSchema,
  type CreditFreddieMacServices,
} from "./credit-freddie-mac-services.js";

/** An object representing an Asset Report with Freddie Mac schema. */
export type CreditFreddieMacVerificationOfAssetsDeal = {
  /** A collection of loans that are part of a single deal. */
  loans: CreditFreddieMacLoans;
  /**
   * A collection of objects that define specific parties to a deal. This includes the direct
   * participating parties, such as borrower and seller and the indirect parties such as the credit
   * report provider.
   */
  parties: CreditFreddieMacParties;
  /** A collection of objects that describe requests and responses for services. */
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
