import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { craLoanApplicationSchema, type CraLoanApplication } from "./cra-loan-application.js";

export type CraLoansApplicationsRegisterRequest = {
  clientId?: string;
  secret?: string;
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
