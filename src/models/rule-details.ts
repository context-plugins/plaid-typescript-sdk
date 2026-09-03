import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type RuleDetails = {
  internalNote?: string;
  customActionKey?: string;
};

export const ruleDetailsSchema: Schema<RuleDetails> = s.object<RuleDetails>({
  internalNote: s.optional(s.string()),
  customActionKey: s.optional(s.string()),
  _keysMap: {
    internalNote: "internal_note",
    customActionKey: "custom_action_key",
  },
});
