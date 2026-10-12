import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  userAccountIdentityEditCountsSchema,
  type UserAccountIdentityEditCounts,
} from "./user-account-identity-edit-counts.js";
import {
  userAccountIdentityOfficialDocumentSchema,
  type UserAccountIdentityOfficialDocument,
} from "./user-account-identity-official-document.js";

/** Statistics tracking the number of edits made to identity fields over various time periods. */
export type UserAccountIdentityEditHistory = {
  /** Edit counts over various time periods. */
  name?: UserAccountIdentityEditCounts;
  /** Edit counts over various time periods. */
  address?: UserAccountIdentityEditCounts;
  /** Edit counts over various time periods. */
  email?: UserAccountIdentityEditCounts;
  /** Edit counts over various time periods. */
  dateOfBirth?: UserAccountIdentityEditCounts;
  /** Official identity document edit statistics. */
  officialDocument?: UserAccountIdentityOfficialDocument | null;
};

export const userAccountIdentityEditHistorySchema: Schema<UserAccountIdentityEditHistory> =
  s.object<UserAccountIdentityEditHistory>({
    name: s.optional(s.lazy(() => userAccountIdentityEditCountsSchema)),
    address: s.optional(s.lazy(() => userAccountIdentityEditCountsSchema)),
    email: s.optional(s.lazy(() => userAccountIdentityEditCountsSchema)),
    dateOfBirth: s.optional(s.lazy(() => userAccountIdentityEditCountsSchema)),
    officialDocument: s.optionalNullable(s.lazy(() => userAccountIdentityOfficialDocumentSchema)),
    _keysMap: {
      dateOfBirth: "date_of_birth",
      officialDocument: "official_document",
    },
  });
