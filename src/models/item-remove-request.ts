import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { itemRemoveReasonCodeSchema, type ItemRemoveReasonCode } from "./item-remove-reason-code.js";

/** ItemRemoveRequest defines the request schema for `/item/remove` */
export type ItemRemoveRequest = {
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
  /** The access token associated with the Item for which data is being requested. */
  accessToken: string;
  /**
   * The reason for removing the Item
   *
   * `FRAUD_FIRST_PARTY`: The end user who owns the connected bank account committed fraud
   * `FRAUD_FALSE_IDENTITY`: The end user created the connection using false identity information or
   * stolen credentials `FRAUD_ABUSE`: The end user is abusing the client's service or platform
   * through their connected account `FRAUD_OTHER`: Other fraud-related reasons involving the end
   * user not covered by the specific fraud categories `CONNECTION_IS_NON_FUNCTIONAL`: The
   * connection to the end user's financial institution is broken and cannot be restored `OTHER`:
   * Any other reason for removing the connection not covered by the above categories
   */
  reasonCode?: ItemRemoveReasonCode | null;
  /**
   * Additional context or details about the reason for removing the Item. Personally identifiable
   * information, such as an email address or phone number, should not be included in the
   * `reason_note`.
   */
  reasonNote?: string | null;
};

export const itemRemoveRequestSchema: Schema<ItemRemoveRequest> = s.object<ItemRemoveRequest>({
  clientId: s.optional(s.string()),
  secret: s.optional(s.string()),
  accessToken: s.string(),
  reasonCode: s.optionalNullable(s.lazy(() => itemRemoveReasonCodeSchema)),
  reasonNote: s.optionalNullable(s.string()),
  _keysMap: {
    clientId: "client_id",
    accessToken: "access_token",
    reasonCode: "reason_code",
    reasonNote: "reason_note",
  },
});
