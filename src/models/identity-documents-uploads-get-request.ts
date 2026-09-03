import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  identityDocumentsUploadsGetRequestOptionsSchema,
  type IdentityDocumentsUploadsGetRequestOptions,
} from "./identity-documents-uploads-get-request-options.js";

export type IdentityDocumentsUploadsGetRequest = {
  clientId?: string;
  secret?: string;
  accessToken: string;
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
