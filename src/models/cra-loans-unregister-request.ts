import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { craLoanUnregisterSchema, type CraLoanUnregister } from "./cra-loan-unregister.js";

/** CraLoansUnregisterRequest defines the request schema for `/cra/loans/unregister` */
export type CraLoansUnregisterRequest = {
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
  /** A list of loans to unregister. */
  loans: CraLoanUnregister[];
};

export const craLoansUnregisterRequestSchema: Schema<CraLoansUnregisterRequest> =
  s.object<CraLoansUnregisterRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    loans: s.array(s.lazy(() => craLoanUnregisterSchema)),
    _keysMap: {
      clientId: "client_id",
    },
  });
