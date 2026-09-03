import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { transferAchNetworkSchema, type TransferAchNetwork } from "./transfer-ach-network.js";

export type TransferLedgerDepositRequest = {
  clientId?: string;
  secret?: string;
  originatorClientId?: string | null;
  fundingAccountId?: string | null;
  ledgerId?: string | null;
  amount: string;
  description?: string | null;
  idempotencyKey: string;
  network: TransferAchNetwork;
};

export const transferLedgerDepositRequestSchema: Schema<TransferLedgerDepositRequest> =
  s.object<TransferLedgerDepositRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    originatorClientId: s.optionalNullable(s.string()),
    fundingAccountId: s.optionalNullable(s.string()),
    ledgerId: s.optionalNullable(s.string()),
    amount: s.string(),
    description: s.optionalNullable(s.string()),
    idempotencyKey: s.string(),
    network: transferAchNetworkSchema,
    _keysMap: {
      clientId: "client_id",
      originatorClientId: "originator_client_id",
      fundingAccountId: "funding_account_id",
      ledgerId: "ledger_id",
      idempotencyKey: "idempotency_key",
    },
  });
