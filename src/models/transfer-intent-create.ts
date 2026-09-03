import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { achClassSchema, type AchClass } from "./ach-class.js";
import {
  transferIntentCreateModeSchema,
  type TransferIntentCreateMode,
} from "./transfer-intent-create-mode.js";
import {
  transferIntentCreateNetworkSchema,
  type TransferIntentCreateNetwork,
} from "./transfer-intent-create-network.js";
import { transferIntentStatusSchema, type TransferIntentStatus } from "./transfer-intent-status.js";
import { transferUserInResponseSchema, type TransferUserInResponse } from "./transfer-user-in-response.js";

export type TransferIntentCreate = {
  id: string;
  created: Date;
  status: TransferIntentStatus;
  accountId?: string | null;
  originationAccountId: string;
  fundingAccountId: string;
  amount: string;
  mode: TransferIntentCreateMode;
  network?: TransferIntentCreateNetwork;
  achClass?: AchClass;
  user: TransferUserInResponse;
  description: string;
  metadata?: Record<string, string> | null;
  isoCurrencyCode: string;
  requireGuarantee?: boolean | null;
};

export const transferIntentCreateSchema: Schema<TransferIntentCreate> = s.object<TransferIntentCreate>({
  id: s.string(),
  created: s.dateTime(),
  status: transferIntentStatusSchema,
  accountId: s.optionalNullable(s.string()),
  originationAccountId: s.string(),
  fundingAccountId: s.string(),
  amount: s.string(),
  mode: transferIntentCreateModeSchema,
  network: s.optional(s.lazy(() => transferIntentCreateNetworkSchema)),
  achClass: s.optional(s.lazy(() => achClassSchema)),
  user: transferUserInResponseSchema,
  description: s.string(),
  metadata: s.optionalNullable(s.record(s.string(), s.string())),
  isoCurrencyCode: s.string(),
  requireGuarantee: s.optionalNullable(s.boolean()),
  _keysMap: {
    accountId: "account_id",
    originationAccountId: "origination_account_id",
    fundingAccountId: "funding_account_id",
    achClass: "ach_class",
    isoCurrencyCode: "iso_currency_code",
    requireGuarantee: "require_guarantee",
  },
});
