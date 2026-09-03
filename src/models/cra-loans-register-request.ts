import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { craLoanRegisterSchema, type CraLoanRegister } from "./cra-loan-register.js";

export type CraLoansRegisterRequest = {
  clientId?: string;
  secret?: string;
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
