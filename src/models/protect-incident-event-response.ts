import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { protectIncidentAmountSchema, type ProtectIncidentAmount } from "./protect-incident-amount.js";

/** Details about the incident event. */
export type ProtectIncidentEventResponse = {
  /**
   * A globally unique identifier representing a Protect event that may be associated with this
   * incident.
   */
  protectEventId?: string | null;
  /** A unique identifier for a Link session that may be associated with this incident. */
  linkSessionId?: string | null;
  /**
   * A unique identifier for an Identity Verification session that may be associated with this
   * incident.
   */
  idvSessionId?: string | null;
  /**
   * The unique ID used to refer to a Signal transaction evaluation that may be associated with this
   * incident.
   */
  signalClientTransactionId?: string | null;
  /**
   * A unique ID representing the incident in your system. Personally identifiable information, such
   * as an email address or phone number, should not be used in this field.
   */
  internalReference?: string | null;
  /**
   * The timestamp when the incident occurred, in ISO 8601 format (e.g., '2020-07-24T03:26:02Z').
   */
  time?: Date | null;
  /** The monetary amount associated with the incident. */
  amount?: ProtectIncidentAmount | null;
  /** The `item_id` associated with the Item related to this incident. */
  itemId?: string | null;
};

export const protectIncidentEventResponseSchema: Schema<ProtectIncidentEventResponse> =
  s.object<ProtectIncidentEventResponse>({
    protectEventId: s.optionalNullable(s.string()),
    linkSessionId: s.optionalNullable(s.string()),
    idvSessionId: s.optionalNullable(s.string()),
    signalClientTransactionId: s.optionalNullable(s.string()),
    internalReference: s.optionalNullable(s.string()),
    time: s.optionalNullable(s.dateTime()),
    amount: s.optionalNullable(s.lazy(() => protectIncidentAmountSchema)),
    itemId: s.optionalNullable(s.string()),
    _keysMap: {
      protectEventId: "protect_event_id",
      linkSessionId: "link_session_id",
      idvSessionId: "idv_session_id",
      signalClientTransactionId: "signal_client_transaction_id",
      internalReference: "internal_reference",
      itemId: "item_id",
    },
  });
