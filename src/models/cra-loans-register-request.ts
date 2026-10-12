import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { craLoanRegisterSchema, type CraLoanRegister } from "./cra-loan-register.js";

/** CraLoansRegisterRequest defines the request schema for `/cra/loans/register` */
export type CraLoansRegisterRequest = {
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
  /** A list of loans to register. */
  loans: CraLoanRegister[];
};

export const craLoansRegisterRequestSchema: Schema<CraLoansRegisterRequest> =
  s.object<CraLoansRegisterRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    loans: s.array(s.lazy(() => craLoanRegisterSchema)),
    _keysMap: {
      clientId: "client_id",
    },
  });
