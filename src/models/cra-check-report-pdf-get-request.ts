import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { craPdfAddOnsSchema, type CraPdfAddOns } from "./cra-pdf-add-ons.js";

/** CraCheckReportPDFGetRequest defines the request schema for `/cra/check_report/pdf/get`. */
export type CraCheckReportPdfGetRequest = {
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
  /**
   * A unique user identifier, created by `/user/create`. Integrations that began using
   * `/user/create` after December 10, 2025 use this field to identify a user instead of the
   * `user_token`. For more details, see [New User
   * APIs](https://plaid.com/docs/api/users/user-apis).
   */
  userId?: string;
  /** The third-party user token associated with the requested User data. */
  thirdPartyUserToken?: string;
  /** Use this field to include other reports in the PDF. */
  addOns?: CraPdfAddOns[];
  /**
   * The user token associated with the user for which data is being requested. This field is used
   * only by customers with pre-existing integrations that already use the `user_token` field. All
   * other customers should use the `user_id` instead. For more details, see [New User
   * APIs](https://plaid.com/docs/api/users/user-apis).
   */
  userToken?: string;
};

export const craCheckReportPdfGetRequestSchema: Schema<CraCheckReportPdfGetRequest> =
  s.object<CraCheckReportPdfGetRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    userId: s.optional(s.string()),
    thirdPartyUserToken: s.optional(s.string()),
    addOns: s.optional(s.array(s.lazy(() => craPdfAddOnsSchema))),
    userToken: s.optional(s.string()),
    _keysMap: {
      clientId: "client_id",
      userId: "user_id",
      thirdPartyUserToken: "third_party_user_token",
      addOns: "add_ons",
      userToken: "user_token",
    },
  });
