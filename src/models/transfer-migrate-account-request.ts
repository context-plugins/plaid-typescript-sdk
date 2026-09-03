import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TransferMigrateAccountRequest = {
  clientId?: string;
  secret?: string;
  accountNumber: string;
  routingNumber: string;
  wireRoutingNumber?: string;
  accountType: string;
};

export const transferMigrateAccountRequestSchema: Schema<TransferMigrateAccountRequest> =
  s.object<TransferMigrateAccountRequest>({
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
