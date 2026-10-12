import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { craLoanApplicationSchema, type CraLoanApplication } from "./cra-loan-application.js";

/**
 * CraLoansApplicationsRegisterRequest defines the request schema for
 * `/cra/loans/applications/register`.
 */
export type CraLoansApplicationsRegisterRequest = {
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
  /** A list of loan applications to register. */
  applications: CraLoanApplication[];
};

export const craLoansApplicationsRegisterRequestSchema: Schema<CraLoansApplicationsRegisterRequest> =
  s.object<CraLoansApplicationsRegisterRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    applications: s.array(s.lazy(() => craLoanApplicationSchema)),
    _keysMap: {
      clientId: "client_id",
    },
  });
