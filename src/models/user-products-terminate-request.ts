import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  productsTerminateReasonCodeSchema,
  type ProductsTerminateReasonCode,
} from "./products-terminate-reason-code.js";

/** UserProductsTerminateRequest defines the request schema for `/user/products/terminate` */
export type UserProductsTerminateRequest = {
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
  userId: string;
  /**
   * The reason for terminating products.
   *
   * `FRAUD_FIRST_PARTY`: The end user who owns the connected bank account committed fraud using
   * their real identity `FRAUD_FALSE_IDENTITY`: The connection was created using a false or stolen
   * identity `FRAUD_ABUSE`: The end user is abusing the client's service or platform (for example,
   * automation or excessive retries) through their connected account `FRAUD_OTHER`: Fraud-related,
   * but not covered by the specific fraud categories above; `reason_note` should clarify
   * `FRAUD_TRANSACTION`: Fraud occurred at the transaction level, such as an unauthorized
   * transaction, card testing, chargeback, ACH return, or dispute `CONSUMER_LOAN_PAID_OFF`: The end
   * user paid off their loan and no longer needs the product `CONSUMER_ACCOUNT_CLOSED`: The end
   * user closed their account with the client and no longer needs the product
   * `CONSUMER_CHARGE_OFF`: The end user's account has been charged off
   * `CONSUMER_PAYMENT_METHOD_SWITCHED`: The end user switched to a different payment method and no
   * longer needs the product `USER_OFFBOARDING`: The user is offboarding from the client's service
   * or platform `DUPLICATE_ITEM`: This Item is a duplicate of another active Item for the same user
   * `BILLING_TERMINATION`: The client's billing or subscription relationship with the end user has
   * ended `OTHER`: None of the above; `reason_note` should clarify
   */
  reasonCode: ProductsTerminateReasonCode;
  /**
   * Additional context or details about the reason for terminating user-based products. Personally
   * identifiable information, such as an email address or phone number, should not be included in
   * the `reason_note`.
   */
  reasonNote?: string | null;
};

export const userProductsTerminateRequestSchema: Schema<UserProductsTerminateRequest> =
  s.object<UserProductsTerminateRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    userId: s.string(),
    reasonCode: productsTerminateReasonCodeSchema,
    reasonNote: s.optionalNullable(s.string()),
    _keysMap: {
      clientId: "client_id",
      userId: "user_id",
      reasonCode: "reason_code",
      reasonNote: "reason_note",
    },
  });
