import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AccountProductAccessNullable = {
  accountData?: boolean | null;
  statements?: boolean | null;
  taxDocuments?: boolean | null;
};

export const accountProductAccessNullableSchema: Schema<AccountProductAccessNullable> =
  s.object<AccountProductAccessNullable>({
    accountData: s.optionalNullable(s.boolean()),
    statements: s.optionalNullable(s.boolean()),
    taxDocuments: s.optionalNullable(s.boolean()),
    _keysMap: {
      accountData: "account_data",
      taxDocuments: "tax_documents",
    },
  });
