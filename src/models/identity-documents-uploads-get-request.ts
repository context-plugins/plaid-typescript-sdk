import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  identityDocumentsUploadsGetRequestOptionsSchema,
  type IdentityDocumentsUploadsGetRequestOptions,
} from "./identity-documents-uploads-get-request-options.js";

/**
 * IdentityDocumentsUploadsGetRequest defines the request schema for
 * `/identity/documents/uploads/get`
 */
export type IdentityDocumentsUploadsGetRequest = {
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
  /** An optional object to filter `/identity/documents/uploads/get` results. */
  options?: IdentityDocumentsUploadsGetRequestOptions;
};

export const identityDocumentsUploadsGetRequestSchema: Schema<IdentityDocumentsUploadsGetRequest> =
  s.object<IdentityDocumentsUploadsGetRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    accessToken: s.string(),
    options: s.optional(s.lazy(() => identityDocumentsUploadsGetRequestOptionsSchema)),
    _keysMap: {
      clientId: "client_id",
      accessToken: "access_token",
    },
  });
