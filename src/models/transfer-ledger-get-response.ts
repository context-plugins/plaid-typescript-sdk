import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { transferLedgerBalanceSchema, type TransferLedgerBalance } from "./transfer-ledger-balance.js";

/** Defines the response schema for `/transfer/ledger/get` */
export type TransferLedgerGetResponse = {
  /** The unique identifier of the Ledger that was returned. */
  ledgerId: string;
  /** Information about the balance of the ledger held with Plaid. */
  balance: TransferLedgerBalance;
  /** The name of the Ledger */
  name: string;
  /** Whether this Ledger is the client's default ledger. */
  isDefault: boolean;
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
};

export const transferLedgerGetResponseSchema: Schema<TransferLedgerGetResponse> =
  s.object<TransferLedgerGetResponse>({
    ledgerId: s.string(),
    balance: transferLedgerBalanceSchema,
    name: s.string(),
    isDefault: s.boolean(),
    requestId: s.string(),
    _keysMap: {
      ledgerId: "ledger_id",
      isDefault: "is_default",
      requestId: "request_id",
    },
  });
