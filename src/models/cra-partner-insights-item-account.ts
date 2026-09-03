import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  craPartnerInsightsItemAccountMetadataSchema,
  type CraPartnerInsightsItemAccountMetadata,
} from "./cra-partner-insights-item-account-metadata.js";
import {
  depositoryAccountSubtypeSchema,
  type DepositoryAccountSubtype,
} from "./depository-account-subtype.js";
import { ownerSchema, type Owner } from "./owner.js";

export type CraPartnerInsightsItemAccount = {
  accountId?: string;
  mask: string | null;
  metadata: CraPartnerInsightsItemAccountMetadata;
  name: string;
  officialName: string | null;
  subtype: DepositoryAccountSubtype;
  type: "depository";
  owners: Owner[];
};

export const craPartnerInsightsItemAccountSchema: Schema<CraPartnerInsightsItemAccount> =
  s.object<CraPartnerInsightsItemAccount>({
    accountId: s.optional(s.string()),
    mask: s.nullable(s.string()),
    metadata: craPartnerInsightsItemAccountMetadataSchema,
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
