import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  investmentsAuthGetRequestOptionsSchema,
  type InvestmentsAuthGetRequestOptions,
} from "./investments-auth-get-request-options.js";

export type InvestmentsAuthGetRequest = {
  clientId?: string;
  secret?: string;
  accessToken: string;
  options?: InvestmentsAuthGetRequestOptions;
};

export const investmentsAuthGetRequestSchema: Schema<InvestmentsAuthGetRequest> =
  s.object<InvestmentsAuthGetRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    accessToken: s.string(),
    options: s.optional(s.lazy(() => investmentsAuthGetRequestOptionsSchema)),
    _keysMap: {
      clientId: "client_id",
      accessToken: "access_token",
    },
  });
