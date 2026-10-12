import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * CraCheckReportFreddieMacGetRequest defines the request schema for
 * `/cra/check_report/freddie_mac/get`
 */
export type CraCheckReportFreddieMacGetRequest = {
  /** The third-party user token associated with the requested User data. */
  thirdPartyUserToken: string;
  /**
   * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the
   * `PLAID-CLIENT-ID` header or as part of a request body.
   */
  clientId?: string;
  /**
   * Your Plaid API `secret`. The `secret` is required and may be provided either in the
   * `PLAID-SECRET` header or as part of a request body.
   */
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
