import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ActionState = {
  Unknown: "UNKNOWN",
  Attempt: "ATTEMPT",
  Success: "SUCCESS",
  Failure: "FAILURE",
  Skipped: "SKIPPED",
} as const;
export type ActionState = (typeof ActionState)[keyof typeof ActionState] | (string & {});

export const actionStateSchema: EnumSchema<ActionState> = s.enumOf<ActionState>(ActionState);
