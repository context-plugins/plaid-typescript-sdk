import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  depositoryAccountSubtypeSchema,
  type DepositoryAccountSubtype,
} from "./depository-account-subtype.js";
import { limitedPurposeTypeSchema, type LimitedPurposeType } from "./limited-purpose-type.js";

/** A filter to apply to `depository`-type accounts */
export type DepositoryFilter = {
  /**
   * An array of account subtypes to display in Link. If not specified, all account subtypes will be
   * shown. For a full list of valid types and subtypes, see the [Account
   * schema](https://plaid.com/docs/api/accounts#account-type-schema).
   */
  accountSubtypes: DepositoryAccountSubtype[];
  /**
   * An array of limited purpose types. Restricts which kinds of limited purpose checking accounts
   * may be connected in Link to prevent users from connecting them for unsupported use cases.
   * Required when 'limited purpose checking' is in the subtypes filter.
   */
  limitedPurposeTypes?: LimitedPurposeType[];
};

export const depositoryFilterSchema: Schema<DepositoryFilter> = s.object<DepositoryFilter>({
  accountSubtypes: s.array(s.lazy(() => depositoryAccountSubtypeSchema)),
  limitedPurposeTypes: s.optional(s.array(s.lazy(() => limitedPurposeTypeSchema))),
  _keysMap: {
    accountSubtypes: "account_subtypes",
    limitedPurposeTypes: "limited_purpose_types",
  },
});
