import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type NumbersAch = {
  accountId: string;
  account: string;
  isTokenizedAccountNumber?: boolean;
  routing: string;
  wireRouting: string | null;
  canTransferIn?: boolean | null;
  canTransferOut?: boolean | null;
};

export const numbersAchSchema: Schema<NumbersAch> = s.object<NumbersAch>({
  accountId: s.string(),
  account: s.string(),
  isTokenizedAccountNumber: s.optional(s.boolean()),
  routing: s.string(),
  wireRouting: s.nullable(s.string()),
  canTransferIn: s.optionalNullable(s.boolean()),
  canTransferOut: s.optionalNullable(s.boolean()),
  _keysMap: {
    accountId: "account_id",
    isTokenizedAccountNumber: "is_tokenized_account_number",
    wireRouting: "wire_routing",
    canTransferIn: "can_transfer_in",
    canTransferOut: "can_transfer_out",
  },
});
