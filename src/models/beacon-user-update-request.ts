import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  beaconUserUpdateRequestDataSchema,
  type BeaconUserUpdateRequestData,
} from "./beacon-user-update-request-data.js";

/** Request input for updating the identity data of a Beacon User. */
export type BeaconUserUpdateRequest = {
  /** ID of the associated Beacon User. */
  beaconUserId: string;
  /**
   * A subset of a Beacon User's data which is used to patch the existing identity data associated
   * with a Beacon User. At least one field must be provided. If left unset or null, user data will
   * not be patched.
   */
  user?: BeaconUserUpdateRequestData | null;
  /**
   * Send this array of access tokens to add accounts to this user for evaluation. This will add
   * accounts to this Beacon User. If left null only existing accounts will be returned in response.
   * A maximum of 50 accounts total can be added to a Beacon User.
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

export const beaconUserUpdateRequestSchema: Schema<BeaconUserUpdateRequest> =
  s.object<BeaconUserUpdateRequest>({
    beaconUserId: s.string(),
    user: s.optionalNullable(s.lazy(() => beaconUserUpdateRequestDataSchema)),
    accessTokens: s.optionalNullable(s.array(s.string())),
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    _keysMap: {
      beaconUserId: "beacon_user_id",
      accessTokens: "access_tokens",
      clientId: "client_id",
    },
  });
