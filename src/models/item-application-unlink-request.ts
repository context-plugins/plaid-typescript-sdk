import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** ItemApplicationUnlinkRequest defines the request schema for `/item/application/unlink` */
export type ItemApplicationUnlinkRequest = {
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
   * This field will map to the application ID that is returned from `/item/application/list`, or
   * provided to the institution in an oauth redirect.
   */
  applicationId: string;
};

export const itemApplicationUnlinkRequestSchema: Schema<ItemApplicationUnlinkRequest> =
  s.object<ItemApplicationUnlinkRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    accessToken: s.string(),
    applicationId: s.string(),
    _keysMap: {
      clientId: "client_id",
      accessToken: "access_token",
      applicationId: "application_id",
    },
  });
