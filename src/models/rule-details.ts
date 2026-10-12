import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Rules are run in numerical order. The first rule with a logic match is triggered. These are the
 * details of that rule.
 */
export type RuleDetails = {
  /**
   * An optional message attached to the triggered rule, defined within the Dashboard, for your
   * internal use. Useful for debugging, such as "Account appears to be closed."
   */
  internalNote?: string;
  /**
   * A string key, defined within the Dashboard, used to trigger programmatic behavior for a certain
   * result. For instance, you could optionally choose to define a "3-day-hold" `custom_action_key`
   * for an ACCEPT result.
   */
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
