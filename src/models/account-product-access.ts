import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AccountProductAccess = {
  accountData?: boolean | null;
  statements?: boolean | null;
  taxDocuments?: boolean | null;
};

export const accountProductAccessSchema: Schema<AccountProductAccess> = s.object<AccountProductAccess>({
  accountData: s.optionalNullable(s.boolean()),
  statements: s.optionalNullable(s.boolean()),
  taxDocuments: s.optionalNullable(s.boolean()),
  _keysMap: {
    accountData: "account_data",
    taxDocuments: "tax_documents",
  },
});
