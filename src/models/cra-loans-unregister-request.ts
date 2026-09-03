import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { craLoanUnregisterSchema, type CraLoanUnregister } from "./cra-loan-unregister.js";

export type CraLoansUnregisterRequest = {
  clientId?: string;
  secret?: string;
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
