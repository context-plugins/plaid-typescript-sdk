import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type IdentityDocumentsUploadsGetRequestOptions = {
  accountIds?: string[];
};

export const identityDocumentsUploadsGetRequestOptionsSchema: Schema<IdentityDocumentsUploadsGetRequestOptions> =
  s.object<IdentityDocumentsUploadsGetRequestOptions>({
    accountIds: s.optional(s.array(s.string())),
    _keysMap: {
      accountIds: "account_ids",
    },
  });
