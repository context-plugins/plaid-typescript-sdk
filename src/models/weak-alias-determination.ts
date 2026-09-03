import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

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
