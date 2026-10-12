import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Allow the application to access specific products on this account */
export type AccountProductAccess = {
  /**
   * Allow the application to access account data. Only used by certain partners. If relevant to the
   * partner and unset, defaults to `true`.
   *
   * @default true
   */
  accountData?: boolean | null;
  /**
   * Allow the application to access bank statements. Only used by certain partners. If relevant to
   * the partner and unset, defaults to `true`.
   *
   * @default true
   */
  statements?: boolean | null;
  /**
   * Allow the application to access tax documents. Only used by certain partners. If relevant to
   * the partner and unset, defaults to `true`.
   *
   * @default true
   */
  taxDocuments?: boolean | null;
};

export const accountProductAccessSchema: Schema<AccountProductAccess> = s.object<AccountProductAccess>({
  accountData: s.defaulted(s.nullable(s.boolean()), true),
  statements: s.defaulted(s.nullable(s.boolean()), true),
  taxDocuments: s.defaulted(s.nullable(s.boolean()), true),
  _keysMap: {
    accountData: "account_data",
    taxDocuments: "tax_documents",
  },
});
