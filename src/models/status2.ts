import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The point at which the user exited the Link flow. One of the following values. */
export type Status2 = {
  /** User prompted to answer security questions */
  requiresQuestions?: Record<string, unknown>;
  /** User prompted to answer multiple choice question(s) */
  requiresSelections?: Record<string, unknown>;
  /** User prompted to provide a one-time passcode */
  requiresCode?: Record<string, unknown>;
  /** User prompted to select a device on which to receive a one-time passcode */
  chooseDevice?: Record<string, unknown>;
  /**
   * User prompted to provide credentials for the selected financial institution or has not yet
   * selected a financial institution
   */
  requiresCredentials?: Record<string, unknown>;
  /** User prompted to select one or more financial accounts to share */
  requiresAccountSelection?: Record<string, unknown>;
  /** User prompted to enter an OAuth flow */
  requiresOauth?: Record<string, unknown>;
  /**
   * User exited the Link flow after unsuccessfully (no results returned) searching for a financial
   * institution
   */
  institutionNotFound?: Record<string, unknown>;
  /**
   * User exited the Link flow after discovering their selected institution is no longer supported
   * by Plaid
   */
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
