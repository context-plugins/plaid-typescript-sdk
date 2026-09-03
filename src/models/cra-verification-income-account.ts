import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountSubtypeSchema, type AccountSubtype } from "./account-subtype.js";
import { accountTypeSchema, type AccountType } from "./account-type.js";
import {
  craBankIncomeAccountMetadataSchema,
  type CraBankIncomeAccountMetadata,
} from "./cra-bank-income-account-metadata.js";

export type CraVerificationIncomeAccount = {
  accountId: string;
  mask: string | null;
  metadata: CraBankIncomeAccountMetadata;
  name: string;
  officialName: string | null;
  subtype: AccountSubtype | null;
  type: AccountType;
};

export const craVerificationIncomeAccountSchema: Schema<CraVerificationIncomeAccount> =
  s.object<CraVerificationIncomeAccount>({
    accountId: s.string(),
    mask: s.nullable(s.string()),
    metadata: craBankIncomeAccountMetadataSchema,
    name: s.string(),
    officialName: s.nullable(s.string()),
    subtype: s.nullable(s.lazy(() => accountSubtypeSchema)),
    type: accountTypeSchema,
    _keysMap: {
      accountId: "account_id",
      officialName: "official_name",
    },
  });
