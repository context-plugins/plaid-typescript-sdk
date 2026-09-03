import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CraCheckReportFreddieMacGetRequest = {
  thirdPartyUserToken: string;
  clientId?: string;
  secret?: string;
};

export const craCheckReportFreddieMacGetRequestSchema: Schema<CraCheckReportFreddieMacGetRequest> =
  s.object<CraCheckReportFreddieMacGetRequest>({
    thirdPartyUserToken: s.string(),
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    _keysMap: {
      thirdPartyUserToken: "third_party_user_token",
      clientId: "client_id",
    },
  });
