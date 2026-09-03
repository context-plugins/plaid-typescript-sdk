import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { craLoanUpdateSchema, type CraLoanUpdate } from "./cra-loan-update.js";

export type CraLoansUpdateRequest = {
  clientId?: string;
  secret?: string;
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
