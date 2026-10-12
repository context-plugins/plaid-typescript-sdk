import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** ApplicationGetRequest defines the schema for `/application/get` */
export type ApplicationGetRequest = {
  /**
   * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the
   * `PLAID-CLIENT-ID` header or as part of a request body.
   */
  clientId: string;
  /**
   * Your Plaid API `secret`. The `secret` is required and may be provided either in the
   * `PLAID-SECRET` header or as part of a request body.
   */
  secret: string;
  /**
   * This field will map to the application ID that is returned from `/item/application/list`, or
   * provided to the institution in an oauth redirect.
   */
  applicationId: string;
};

export const applicationGetRequestSchema: Schema<ApplicationGetRequest> = s.object<ApplicationGetRequest>({
  clientId: s.string(),
  secret: s.string(),
  applicationId: s.string(),
  _keysMap: {
    clientId: "client_id",
    applicationId: "application_id",
  },
});
