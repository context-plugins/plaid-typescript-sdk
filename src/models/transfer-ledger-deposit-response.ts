import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { transferSweepSchema, type TransferSweep } from "./transfer-sweep.js";

/** Defines the response schema for `/transfer/ledger/deposit` */
export type TransferLedgerDepositResponse = {
  /**
   * Describes a sweep of funds to / from the sweep account.
   *
   * A sweep is associated with many sweep events (events of type `swept` or `return_swept`) which
   * can be retrieved by invoking the `/transfer/event/list` endpoint with the corresponding
   * `sweep_id`.
   *
   * `swept` events occur when the transfer amount is credited or debited from your sweep account,
   * depending on the `type` of the transfer. `return_swept` events occur when a transfer is
   * returned and Plaid undoes the credit or debit.
   *
   * The total sum of the `swept` and `return_swept` events is equal to the `amount` of the sweep
   * Plaid creates and matches the amount of the entry on your sweep account ledger.
   */
  sweep: TransferSweep;
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
};

export const transferLedgerDepositResponseSchema: Schema<TransferLedgerDepositResponse> =
  s.object<TransferLedgerDepositResponse>({
    sweep: transferSweepSchema,
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
