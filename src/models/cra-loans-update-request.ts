import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { craLoanUpdateSchema, type CraLoanUpdate } from "./cra-loan-update.js";

/** CraLoansUpdateRequest defines the request schema for `/cra/loans/update` */
export type CraLoansUpdateRequest = {
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
  /** A list of loans to update. */
  loans: CraLoanUpdate[];
};

export const craLoansUpdateRequestSchema: Schema<CraLoansUpdateRequest> = s.object<CraLoansUpdateRequest>({
  clientId: s.optional(s.string()),
  secret: s.optional(s.string()),
  loans: s.array(s.lazy(() => craLoanUpdateSchema)),
  _keysMap: {
    clientId: "client_id",
  },
});
