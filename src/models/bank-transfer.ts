import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { achClassSchema, type AchClass } from "./ach-class.js";
import { bankTransferDirectionSchema, type BankTransferDirection } from "./bank-transfer-direction.js";
import { bankTransferFailureSchema, type BankTransferFailure } from "./bank-transfer-failure.js";
import { bankTransferNetworkSchema, type BankTransferNetwork } from "./bank-transfer-network.js";
import { bankTransferStatusSchema, type BankTransferStatus } from "./bank-transfer-status.js";
import { bankTransferTypeSchema, type BankTransferType } from "./bank-transfer-type.js";
import { bankTransferUserSchema, type BankTransferUser } from "./bank-transfer-user.js";

export type BankTransfer = {
  id: string;
  achClass: AchClass;
  accountId: string;
  type: BankTransferType;
  user: BankTransferUser;
  amount: string;
  isoCurrencyCode: string;
  description: string;
  created: Date;
  status: BankTransferStatus;
  network: BankTransferNetwork;
  cancellable: boolean;
  failureReason: BankTransferFailure | null;
  customTag: string | null;
  metadata: Record<string, string> | null;
  originationAccountId: string;
  direction: BankTransferDirection | null;
};

export const bankTransferSchema: Schema<BankTransfer> = s.object<BankTransfer>({
  id: s.string(),
  achClass: achClassSchema,
  accountId: s.string(),
  type: bankTransferTypeSchema,
  user: bankTransferUserSchema,
  amount: s.string(),
  isoCurrencyCode: s.string(),
  description: s.string(),
  created: s.dateTime(),
  status: bankTransferStatusSchema,
  network: bankTransferNetworkSchema,
  cancellable: s.boolean(),
  failureReason: s.nullable(s.lazy(() => bankTransferFailureSchema)),
  customTag: s.nullable(s.string()),
  metadata: s.nullable(s.record(s.string(), s.string())),
  originationAccountId: s.string(),
  direction: s.nullable(s.lazy(() => bankTransferDirectionSchema)),
  _keysMap: {
    achClass: "ach_class",
    accountId: "account_id",
    isoCurrencyCode: "iso_currency_code",
    failureReason: "failure_reason",
    customTag: "custom_tag",
    originationAccountId: "origination_account_id",
  },
});
