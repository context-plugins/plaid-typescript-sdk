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
import { transferUserInRequestSchema, type TransferUserInRequest } from "./transfer-user-in-request.js";

export type TransferIntentCreateRequest = {
  clientId?: string;
  secret?: string;
  accountId?: string | null;
  fundingAccountId?: string | null;
  mode: TransferIntentCreateMode;
  network?: TransferIntentCreateNetwork;
  amount: string;
  description: string;
  achClass?: AchClass;
  originationAccountId?: string | null;
  user: TransferUserInRequest;
  metadata?: Record<string, string> | null;
  isoCurrencyCode?: string;
  requireGuarantee?: boolean | null;
};

export const transferIntentCreateRequestSchema: Schema<TransferIntentCreateRequest> =
  s.object<TransferIntentCreateRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    accountId: s.optionalNullable(s.string()),
    fundingAccountId: s.optionalNullable(s.string()),
    mode: transferIntentCreateModeSchema,
    network: s.optional(s.lazy(() => transferIntentCreateNetworkSchema)),
    amount: s.string(),
    description: s.string(),
    achClass: s.optional(s.lazy(() => achClassSchema)),
    originationAccountId: s.optionalNullable(s.string()),
    user: transferUserInRequestSchema,
    metadata: s.optionalNullable(s.record(s.string(), s.string())),
    isoCurrencyCode: s.optional(s.string()),
    requireGuarantee: s.optionalNullable(s.boolean()),
    _keysMap: {
      clientId: "client_id",
      accountId: "account_id",
      fundingAccountId: "funding_account_id",
      achClass: "ach_class",
      originationAccountId: "origination_account_id",
      isoCurrencyCode: "iso_currency_code",
      requireGuarantee: "require_guarantee",
    },
  });
