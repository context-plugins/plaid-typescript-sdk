import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Defines the request schema for `/bank_transfer/migrate_account` */
export type BankTransferMigrateAccountRequest = {
  /**
   * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the
   * `PLAID-CLIENT-ID` header or as part of a request body.
   */
  clientId?: string;
  /**
   * Your Plaid API `secret`. The `secret` is required and may be provided either in the
   * `PLAID-SECRET` header or as part of a request body.
   */
  secret?: string;
  /** The user's account number. */
  accountNumber: string;
  /** The user's routing number. */
  routingNumber: string;
  /**
   * The user's wire transfer routing number. This is the ABA number; for some institutions, this
   * may differ from the ACH number used in `routing_number`.
   */
  wireRoutingNumber?: string;
  /** The type of the bank account (`checking` or `savings`). */
  accountType: string;
};

export const bankTransferMigrateAccountRequestSchema: Schema<BankTransferMigrateAccountRequest> =
  s.object<BankTransferMigrateAccountRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    accountNumber: s.string(),
    routingNumber: s.string(),
    wireRoutingNumber: s.optional(s.string()),
    accountType: s.string(),
    _keysMap: {
      clientId: "client_id",
      accountNumber: "account_number",
      routingNumber: "routing_number",
      wireRoutingNumber: "wire_routing_number",
      accountType: "account_type",
    },
  });
