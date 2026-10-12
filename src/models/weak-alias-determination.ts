import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Names that are explicitly marked as low quality either by their `source` list, or by `plaid` by a
 * series of additional checks done by Plaid. Plaid does not ever surface a hit as a result of a
 * weak name alone. If a name has no quality issues, this value will be `none`.
 */
export const WeakAliasDetermination = {
  None: "none",
  Source: "source",
  Plaid: "plaid",
} as const;
export type WeakAliasDetermination =
  | (typeof WeakAliasDetermination)[keyof typeof WeakAliasDetermination]
  | (string & {});

export const weakAliasDeterminationSchema: EnumSchema<WeakAliasDetermination> =
  s.enumOf<WeakAliasDetermination>(WeakAliasDetermination);
