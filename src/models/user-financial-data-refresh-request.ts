import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** UserFinancialDataRefreshRequest defines the request schema for `/user/financial_data/refresh` */
export type UserFinancialDataRefreshRequest = {
  /** A Plaid-generated ID that identifies the end user. */
  userId: string;
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
};

export const userFinancialDataRefreshRequestSchema: Schema<UserFinancialDataRefreshRequest> =
  s.object<UserFinancialDataRefreshRequest>({
    userId: s.string(),
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    _keysMap: {
      userId: "user_id",
      clientId: "client_id",
    },
  });
