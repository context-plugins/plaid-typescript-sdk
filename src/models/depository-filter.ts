import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  depositoryAccountSubtypeSchema,
  type DepositoryAccountSubtype,
} from "./depository-account-subtype.js";
import { limitedPurposeTypeSchema, type LimitedPurposeType } from "./limited-purpose-type.js";

export type DepositoryFilter = {
  accountSubtypes: DepositoryAccountSubtype[];
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
