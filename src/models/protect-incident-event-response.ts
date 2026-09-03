import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { protectIncidentAmountSchema, type ProtectIncidentAmount } from "./protect-incident-amount.js";

export type ProtectIncidentEventResponse = {
  protectEventId?: string | null;
  linkSessionId?: string | null;
  idvSessionId?: string | null;
  signalClientTransactionId?: string | null;
  internalReference?: string | null;
  time?: Date | null;
  amount?: ProtectIncidentAmount | null;
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
