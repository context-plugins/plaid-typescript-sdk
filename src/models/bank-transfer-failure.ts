import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BankTransferFailure = {
  achReturnCode?: string | null;
  description?: string;
};

export const bankTransferFailureSchema: Schema<BankTransferFailure> = s.object<BankTransferFailure>({
  achReturnCode: s.optionalNullable(s.string()),
  description: s.optional(s.string()),
  _keysMap: {
    achReturnCode: "ach_return_code",
  },
});
