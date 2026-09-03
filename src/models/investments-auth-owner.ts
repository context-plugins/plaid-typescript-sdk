import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type InvestmentsAuthOwner = {
  accountId?: string;
  names?: string[];
};

export const investmentsAuthOwnerSchema: Schema<InvestmentsAuthOwner> = s.object<InvestmentsAuthOwner>({
  accountId: s.optional(s.string()),
  names: s.optional(s.array(s.string())),
  _keysMap: {
    accountId: "account_id",
  },
});
