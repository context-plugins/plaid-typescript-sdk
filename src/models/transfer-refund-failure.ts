import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TransferRefundFailure = {
  failureCode?: string | null;
  achReturnCode?: string | null;
  description?: string;
};

export const transferRefundFailureSchema: Schema<TransferRefundFailure> = s.object<TransferRefundFailure>({
  failureCode: s.optionalNullable(s.string()),
  achReturnCode: s.optionalNullable(s.string()),
  description: s.optional(s.string()),
  _keysMap: {
    failureCode: "failure_code",
    achReturnCode: "ach_return_code",
  },
});
