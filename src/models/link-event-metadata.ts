import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Metadata about an event that occurred while the user was going through Link */
export type LinkEventMetadata = {
  /** The error code that the user encountered. Emitted by `ERROR`, `EXIT`. */
  errorCode?: string;
  /** The error message that the user encountered. Emitted by: `ERROR`, `EXIT`. */
  errorMessage?: string;
  /** The error type that the user encountered. Emitted by: `ERROR`, `EXIT`. */
  errorType?: string;
  /**
   * The status key indicates the point at which the user exited the Link flow. Emitted by: `EXIT`.
   */
  exitStatus?: string;
  /** The ID of the selected institution. Emitted by: all events. */
  institutionId?: string;
  /** The name of the selected institution. Emitted by: all events. */
  institutionName?: string;
  /** The query used to search for institutions. Emitted by: `SEARCH_INSTITUTION`. */
  institutionSearchQuery?: string;
  /**
   * The request ID for the last request made by Link. This can be shared with Plaid support to
   * expedite investigation. Emitted by: all events.
   */
  requestId?: string;
  /**
   * If set, the user has encountered one of the following MFA types: code, device, questions,
   * selections. Emitted by: `SUBMIT_MFA` and `TRANSITION_VIEW` when `view_name` is `MFA`.
   */
  mfaType?: string;
  /** The name of the view that is being transitioned to. Emitted by: `TRANSITION_VIEW`. */
  viewName?: string;
  /**
   * Either the verification method for a matched institution selected by the user or the Auth Type
   * Select flow type selected by the user. If selection is used to describe selected verification
   * method, then possible values are `phoneotp` or `password`; if selection is used to describe the
   * selected Auth Type Select flow, then possible values are `flow_type_manual` or
   * `flow_type_instant`. Emitted by: `MATCHED_SELECT_VERIFY_METHOD` and `SELECT_AUTH_TYPE`.
   */
  selection?: string;
  /** The name of the selected brand. */
  brandName?: string;
  /**
   * The reason this institution was matched. This will be either `returning_user` or
   * `routing_number` if emitted by `MATCHED_SELECT_INSTITUTION`. Otherwise, this will be
   * `SAVED_INSTITUTION` or `AUTO_SELECT_SAVED_INSTITUTION` if emitted by `SELECT_INSTITUTION`.
   */
  matchReason?: string;
  /**
   * The routing number submitted by the user at the micro-deposits routing number pane. Emitted by
   * `SUBMIT_ROUTING_NUMBER`.
   */
  routingNumber?: string;
  /**
   * The account number mask extracted from the user-provided account number. If the user-inputted
   * account number is four digits long, `account_number_mask` is empty. Emitted by
   * `SUBMIT_ACCOUNT_NUMBER`.
   */
  accountNumberMask?: string;
};

export const linkEventMetadataSchema: Schema<LinkEventMetadata> = s.object<LinkEventMetadata>({
  errorCode: s.optional(s.string()),
  errorMessage: s.optional(s.string()),
  errorType: s.optional(s.string()),
  exitStatus: s.optional(s.string()),
  institutionId: s.optional(s.string()),
  institutionName: s.optional(s.string()),
  institutionSearchQuery: s.optional(s.string()),
  requestId: s.optional(s.string()),
  mfaType: s.optional(s.string()),
  viewName: s.optional(s.string()),
  selection: s.optional(s.string()),
  brandName: s.optional(s.string()),
  matchReason: s.optional(s.string()),
  routingNumber: s.optional(s.string()),
  accountNumberMask: s.optional(s.string()),
  _keysMap: {
    errorCode: "error_code",
    errorMessage: "error_message",
    errorType: "error_type",
    exitStatus: "exit_status",
    institutionId: "institution_id",
    institutionName: "institution_name",
    institutionSearchQuery: "institution_search_query",
    requestId: "request_id",
    mfaType: "mfa_type",
    viewName: "view_name",
    brandName: "brand_name",
    matchReason: "match_reason",
    routingNumber: "routing_number",
    accountNumberMask: "account_number_mask",
  },
});
