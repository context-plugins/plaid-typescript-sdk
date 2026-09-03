import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { otherAccountSubtypeSchema, type OtherAccountSubtype } from "./other-account-subtype.js";

export type OtherFilter = {
  accountSubtypes: OtherAccountSubtype[];
};

export const otherFilterSchema: Schema<OtherFilter> = s.object<OtherFilter>({
  accountSubtypes: s.array(s.lazy(() => otherAccountSubtypeSchema)),
  _keysMap: {
    accountSubtypes: "account_subtypes",
  },
});
