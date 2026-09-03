import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  craBankIncomeAccountMetadataSchema,
  type CraBankIncomeAccountMetadata,
} from "./cra-bank-income-account-metadata.js";
import {
  depositoryAccountSubtypeSchema,
  type DepositoryAccountSubtype,
} from "./depository-account-subtype.js";
import { ownerSchema, type Owner } from "./owner.js";

export type CraBankIncomeAccount = {
  accountId?: string;
  mask: string | null;
  metadata: CraBankIncomeAccountMetadata;
  name: string;
  officialName: string | null;
  subtype: DepositoryAccountSubtype;
  type: "depository";
  owners: Owner[];
};

export const craBankIncomeAccountSchema: Schema<CraBankIncomeAccount> = s.object<CraBankIncomeAccount>({
  accountId: s.optional(s.string()),
  mask: s.nullable(s.string()),
  metadata: craBankIncomeAccountMetadataSchema,
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
