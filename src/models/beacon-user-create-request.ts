import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { beaconUserRequestDataSchema, type BeaconUserRequestData } from "./beacon-user-request-data.js";

/**
 * Request input for creating a Beacon User.
 *
 * The primary use for this endpoint is to add a new end user to Beacon for fraud and duplicate
 * scanning.
 *
 * Some fields are optional, but it is recommended to provide as much information as possible to
 * improve the accuracy of the fraud and duplicate scanning.
 */
export type BeaconUserCreateRequest = {
  /** ID of the associated Beacon Program. */
  programId: string;
  /**
   * A unique ID that identifies the end user in your system. Either a `user_id` or the
   * `client_user_id` must be provided. This ID can also be used to associate user-specific data
   * from other Plaid products. Financial Account Matching requires this field and the
   * `/link/token/create` `client_user_id` to be consistent. Personally identifiable information,
   * such as an email address or phone number, should not be used in the `client_user_id`.
   */
  clientUserId: string;
  /**
   * A Beacon User's data which is used to check against duplicate records and the Beacon Fraud
   * Network.
   *
   * In order to create a Beacon User, in addition to the `name`, _either_ the `date_of_birth` _or_
   * the `depository_accounts` field must be provided.
   */
  user: BeaconUserRequestData;
  /**
   * Send this array of access tokens to link accounts to the Beacon User and have them evaluated
   * for Account Insights. A maximum of 50 accounts total can be added to a single Beacon User.
   */
  accessTokens?: string[] | null;
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

export const beaconUserCreateRequestSchema: Schema<BeaconUserCreateRequest> =
  s.object<BeaconUserCreateRequest>({
    programId: s.string(),
    clientUserId: s.string(),
    user: beaconUserRequestDataSchema,
    accessTokens: s.optionalNullable(s.array(s.string())),
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    _keysMap: {
      programId: "program_id",
      clientUserId: "client_user_id",
      accessTokens: "access_tokens",
      clientId: "client_id",
    },
  });
