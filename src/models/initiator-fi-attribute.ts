import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Initiator Fi Attribute */
export type InitiatorFiAttribute = {
  name?: string;
  value?: string;
};

export const initiatorFiAttributeSchema: Schema<InitiatorFiAttribute> = s.object<InitiatorFiAttribute>({
  name: s.optional(s.string()),
  value: s.optional(s.string()),
});
