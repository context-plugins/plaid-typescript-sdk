import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { paymentProfileStatusSchema, type PaymentProfileStatus } from "./payment-profile-status.js";

/** PaymentProfileGetResponse defines the response schema for `/payment_profile/get` */
export type PaymentProfileGetResponse = {
  /**
   * Timestamp in [ISO 8601](https://wikipedia.org/wiki/ISO_8601) format (`YYYY-MM-DDTHH:mm:ssZ`)
   * indicating the last time the given Payment Profile was updated at
   */
  updatedAt: Date;
  /**
   * Timestamp in [ISO 8601](https://wikipedia.org/wiki/ISO_8601) format (`YYYY-MM-DDTHH:mm:ssZ`)
   * indicating the time the given Payment Profile was created at
   */
  createdAt: Date;
  /**
   * Timestamp in [ISO 8601](https://wikipedia.org/wiki/ISO_8601) format (`YYYY-MM-DDTHH:mm:ssZ`)
   * indicating the time the given Payment Profile was deleted at. Always `null` if the Payment
   * Profile has not been deleted
   */
  deletedAt: Date | null;
  /**
   * The status of the given Payment Profile.
   *
   * `READY`: This Payment Profile is ready to be used to create transfers using
   * `/transfer/authorization/create` and `/transfer/create`.
   *
   * `PENDING`: This Payment Profile is not ready to be used. You'll need to call
   * `/link/token/create` and provide the `payment_profile_token` in the
   * `transfer.payment_profile_token` field to initiate the account linking experience.
   *
   * `REMOVED`: This Payment Profile has been removed.
   */
  status: PaymentProfileStatus;
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
};

export const paymentProfileGetResponseSchema: Schema<PaymentProfileGetResponse> =
  s.object<PaymentProfileGetResponse>({
    updatedAt: s.dateTime(),
    createdAt: s.dateTime(),
    deletedAt: s.nullable(s.dateTime()),
    status: paymentProfileStatusSchema,
    requestId: s.string(),
    _keysMap: {
      updatedAt: "updated_at",
      createdAt: "created_at",
      deletedAt: "deleted_at",
      requestId: "request_id",
    },
  });
