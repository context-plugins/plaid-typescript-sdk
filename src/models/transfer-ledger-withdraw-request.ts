import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { transferNetworkSchema, type TransferNetwork } from "./transfer-network.js";

export type TransferLedgerWithdrawRequest = {
  clientId?: string;
  secret?: string;
  originatorClientId?: string | null;
  fundingAccountId?: string | null;
  ledgerId?: string | null;
  amount: string;
  description?: string | null;
  idempotencyKey: string;
  network: TransferNetwork;
};

export const transferLedgerWithdrawRequestSchema: Schema<TransferLedgerWithdrawRequest> =
  s.object<TransferLedgerWithdrawRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    originatorClientId: s.optionalNullable(s.string()),
    fundingAccountId: s.optionalNullable(s.string()),
    ledgerId: s.optionalNullable(s.string()),
    amount: s.string(),
    description: s.optionalNullable(s.string()),
    idempotencyKey: s.string(),
    network: transferNetworkSchema,
    _keysMap: {
      clientId: "client_id",
      originatorClientId: "originator_client_id",
      fundingAccountId: "funding_account_id",
      ledgerId: "ledger_id",
      idempotencyKey: "idempotency_key",
    },
  });
