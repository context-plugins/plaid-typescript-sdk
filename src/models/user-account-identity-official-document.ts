import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  userAccountIdentityEditCountsSchema,
  type UserAccountIdentityEditCounts,
} from "./user-account-identity-edit-counts.js";

/** Official identity document edit statistics. */
export type UserAccountIdentityOfficialDocument = {
  /** Edit counts over various time periods. */
  ssn?: UserAccountIdentityEditCounts;
};

export const userAccountIdentityOfficialDocumentSchema: Schema<UserAccountIdentityOfficialDocument> =
  s.object<UserAccountIdentityOfficialDocument>({
    ssn: s.optional(s.lazy(() => userAccountIdentityEditCountsSchema)),
  });
