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

export type UserAccountIdentityEditHistory = {
  name?: UserAccountIdentityEditCounts;
  address?: UserAccountIdentityEditCounts;
  email?: UserAccountIdentityEditCounts;
  dateOfBirth?: UserAccountIdentityEditCounts;
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
