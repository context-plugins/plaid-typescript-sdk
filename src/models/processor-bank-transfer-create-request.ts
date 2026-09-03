import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { achClassSchema, type AchClass } from "./ach-class.js";
import { bankTransferNetworkSchema, type BankTransferNetwork } from "./bank-transfer-network.js";
import { bankTransferTypeSchema, type BankTransferType } from "./bank-transfer-type.js";
import { bankTransferUserSchema, type BankTransferUser } from "./bank-transfer-user.js";

export type ProcessorBankTransferCreateRequest = {
  clientId?: string;
  secret?: string;
  idempotencyKey: string;
  processorToken: string;
  type: BankTransferType;
  network: BankTransferNetwork;
  amount: string;
  isoCurrencyCode: string;
  description: string;
  achClass?: AchClass;
  user: BankTransferUser;
  customTag?: string | null;
  metadata?: Record<string, string> | null;
  originationAccountId?: string | null;
};

export const processorBankTransferCreateRequestSchema: Schema<ProcessorBankTransferCreateRequest> =
  s.object<ProcessorBankTransferCreateRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    idempotencyKey: s.string(),
    processorToken: s.string(),
    type: bankTransferTypeSchema,
    network: bankTransferNetworkSchema,
    amount: s.string(),
    isoCurrencyCode: s.string(),
    description: s.string(),
    achClass: s.optional(s.lazy(() => achClassSchema)),
    user: bankTransferUserSchema,
    customTag: s.optionalNullable(s.string()),
    metadata: s.optionalNullable(s.record(s.string(), s.string())),
    originationAccountId: s.optionalNullable(s.string()),
    _keysMap: {
      clientId: "client_id",
      idempotencyKey: "idempotency_key",
      processorToken: "processor_token",
      isoCurrencyCode: "iso_currency_code",
      achClass: "ach_class",
      customTag: "custom_tag",
      originationAccountId: "origination_account_id",
    },
  });
