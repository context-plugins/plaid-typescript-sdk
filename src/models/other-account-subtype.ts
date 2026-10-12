import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Valid account subtypes for other accounts. For a list containing descriptions of each subtype,
 * see [Account schemas](https://plaid.com/docs/api/accounts/#StandaloneAccountType-other).
 */
export const OtherAccountSubtype = {
  Other: "other",
  All: "all",
} as const;
export type OtherAccountSubtype =
  | (typeof OtherAccountSubtype)[keyof typeof OtherAccountSubtype]
  | (string & {});

export const otherAccountSubtypeSchema: EnumSchema<OtherAccountSubtype> =
  s.enumOf<OtherAccountSubtype>(OtherAccountSubtype);
