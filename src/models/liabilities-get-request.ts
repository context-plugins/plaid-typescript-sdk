import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  liabilitiesGetRequestOptionsSchema,
  type LiabilitiesGetRequestOptions,
} from "./liabilities-get-request-options.js";

export type LiabilitiesGetRequest = {
  clientId?: string;
  secret?: string;
  accessToken: string;
  options?: LiabilitiesGetRequestOptions;
};

export const liabilitiesGetRequestSchema: Schema<LiabilitiesGetRequest> = s.object<LiabilitiesGetRequest>({
  clientId: s.optional(s.string()),
  secret: s.optional(s.string()),
  accessToken: s.string(),
  options: s.optional(s.lazy(() => liabilitiesGetRequestOptionsSchema)),
  _keysMap: {
    clientId: "client_id",
    accessToken: "access_token",
  },
});
