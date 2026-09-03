import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  depositoryAccountSubtypeSchema,
  type DepositoryAccountSubtype,
} from "./depository-account-subtype.js";
import { ownerSchema, type Owner } from "./owner.js";

export type CreditBankIncomeAccount = {
  accountId: string;
  mask: string | null;
  name: string;
  officialName: string | null;
  subtype: DepositoryAccountSubtype;
  type: "depository";
  owners: Owner[];
};

export const creditBankIncomeAccountSchema: Schema<CreditBankIncomeAccount> =
  s.object<CreditBankIncomeAccount>({
    accountId: s.string(),
    mask: s.nullable(s.string()),
    name: s.string(),
    officialName: s.nullable(s.string()),
    subtype: depositoryAccountSubtypeSchema,
    type: s.literal("depository"),
    owners: s.array(s.lazy(() => ownerSchema)),
    _keysMap: {
      accountId: "account_id",
      officialName: "official_name",
    },
  });
