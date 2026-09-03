import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { loansSchema, type Loans } from "./loans.js";
import { partiesSchema, type Parties } from "./parties.js";
import { servicesSchema, type Services } from "./services.js";

export type AssetReportFreddie = {
  loans: Loans;
  parties: Parties;
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
