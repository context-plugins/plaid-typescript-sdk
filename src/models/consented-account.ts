import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountSubtypeSchema, type AccountSubtype } from "./account-subtype.js";
import { accountTypeSchema, type AccountType } from "./account-type.js";

export type ConsentedAccount = {
  accountId?: string;
  mask?: string;
  name?: string;
  officialName?: string;
  type?: AccountType;
  subtype?: AccountSubtype | null;
};

export const consentedAccountSchema: Schema<ConsentedAccount> = s.object<ConsentedAccount>({
  accountId: s.optional(s.string()),
  mask: s.optional(s.string()),
  name: s.optional(s.string()),
  officialName: s.optional(s.string()),
  type: s.optional(s.lazy(() => accountTypeSchema)),
  subtype: s.optionalNullable(s.lazy(() => accountSubtypeSchema)),
  _keysMap: {
    accountId: "account_id",
    officialName: "official_name",
  },
});
