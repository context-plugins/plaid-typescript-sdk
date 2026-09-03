import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  userAccountIdentityEditCountsSchema,
  type UserAccountIdentityEditCounts,
} from "./user-account-identity-edit-counts.js";

export type UserAccountIdentityOfficialDocument = {
  ssn?: UserAccountIdentityEditCounts;
};

export const userAccountIdentityOfficialDocumentSchema: Schema<UserAccountIdentityOfficialDocument> =
  s.object<UserAccountIdentityOfficialDocument>({
    ssn: s.optional(s.lazy(() => userAccountIdentityEditCountsSchema)),
  });
