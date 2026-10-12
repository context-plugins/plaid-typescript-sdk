import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { otherAccountSubtypeSchema, type OtherAccountSubtype } from "./other-account-subtype.js";

/** A filter to apply to `other`-type accounts */
export type OtherFilter = {
  /**
   * An array of account subtypes to display in Link. If not specified, all account subtypes will be
   * shown. For a full list of valid types and subtypes, see the [Account
   * schema](https://plaid.com/docs/api/accounts#account-type-schema).
   */
  accountSubtypes: OtherAccountSubtype[];
};

export const otherFilterSchema: Schema<OtherFilter> = s.object<OtherFilter>({
  accountSubtypes: s.array(s.lazy(() => otherAccountSubtypeSchema)),
  _keysMap: {
    accountSubtypes: "account_subtypes",
  },
});
