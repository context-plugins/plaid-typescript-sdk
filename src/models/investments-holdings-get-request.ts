import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  investmentHoldingsGetRequestOptionsSchema,
  type InvestmentHoldingsGetRequestOptions,
} from "./investment-holdings-get-request-options.js";

export type InvestmentsHoldingsGetRequest = {
  clientId?: string;
  secret?: string;
  accessToken: string;
  options?: InvestmentHoldingsGetRequestOptions;
};

export const investmentsHoldingsGetRequestSchema: Schema<InvestmentsHoldingsGetRequest> =
  s.object<InvestmentsHoldingsGetRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    accessToken: s.string(),
    options: s.optional(s.lazy(() => investmentHoldingsGetRequestOptionsSchema)),
    _keysMap: {
      clientId: "client_id",
      accessToken: "access_token",
    },
  });
