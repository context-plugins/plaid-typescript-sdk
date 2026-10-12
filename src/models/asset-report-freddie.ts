import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { loansSchema, type Loans } from "./loans.js";
import { partiesSchema, type Parties } from "./parties.js";
import { servicesSchema, type Services } from "./services.js";

/** An object representing an Asset Report with Freddie Mac schema. */
export type AssetReportFreddie = {
  /** A collection of loans that are part of a single deal. */
  loans: Loans;
  /**
   * A collection of objects that define specific parties to a deal. This includes the direct
   * participating parties, such as borrower and seller and the indirect parties such as the credit
   * report provider.
   */
  parties: Parties;
  /** A collection of objects that describe requests and responses for services. */
  services: Services;
};

export const assetReportFreddieSchema: Schema<AssetReportFreddie> = s.object<AssetReportFreddie>({
  loans: loansSchema,
  parties: partiesSchema,
  services: servicesSchema,
  _keysMap: {
    loans: "LOANS",
    parties: "PARTIES",
    services: "SERVICES",
  },
});
