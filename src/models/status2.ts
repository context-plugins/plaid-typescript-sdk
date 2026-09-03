import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Status2 = {
  requiresQuestions?: Record<string, unknown>;
  requiresSelections?: Record<string, unknown>;
  requiresCode?: Record<string, unknown>;
  chooseDevice?: Record<string, unknown>;
  requiresCredentials?: Record<string, unknown>;
  requiresAccountSelection?: Record<string, unknown>;
  requiresOauth?: Record<string, unknown>;
  institutionNotFound?: Record<string, unknown>;
  institutionNotSupported?: Record<string, unknown>;
};

export const status2Schema: Schema<Status2> = s.object<Status2>({
  requiresQuestions: s.optional(s.record(s.string(), s.unknown())),
  requiresSelections: s.optional(s.record(s.string(), s.unknown())),
  requiresCode: s.optional(s.record(s.string(), s.unknown())),
  chooseDevice: s.optional(s.record(s.string(), s.unknown())),
  requiresCredentials: s.optional(s.record(s.string(), s.unknown())),
  requiresAccountSelection: s.optional(s.record(s.string(), s.unknown())),
  requiresOauth: s.optional(s.record(s.string(), s.unknown())),
  institutionNotFound: s.optional(s.record(s.string(), s.unknown())),
  institutionNotSupported: s.optional(s.record(s.string(), s.unknown())),
  _keysMap: {
    requiresQuestions: "requires_questions",
    requiresSelections: "requires_selections",
    requiresCode: "requires_code",
    chooseDevice: "choose_device",
    requiresCredentials: "requires_credentials",
    requiresAccountSelection: "requires_account_selection",
    requiresOauth: "requires_oauth",
    institutionNotFound: "institution_not_found",
    institutionNotSupported: "institution_not_supported",
  },
});
