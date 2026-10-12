import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { beaconAuditTrailSchema, type BeaconAuditTrail } from "./beacon-audit-trail.js";
import { beaconReportTypeSchema, type BeaconReportType } from "./beacon-report-type.js";
import { fraudAmountSchema, type FraudAmount } from "./fraud-amount.js";

/**
 * A Beacon Report describes the type of fraud committed by a user as well as the date the fraud was
 * committed and the total amount of money lost due to the fraud incident.
 *
 * This information is used to block similar fraud attempts on your platform as well as alert other
 * companies who screen a user with matching identity information. Other companies will not receive
 * any new identity information, just what matched, plus information such as industry, type of
 * fraud, and date of fraud.
 *
 * You can manage your fraud reports by adding, deleting, or editing reports as you get additional
 * information on fraudulent users.
 */
export type BeaconReportGetResponse = {
  /** ID of the associated Beacon Report. */
  id: string;
  /** ID of the associated Beacon User. */
  beaconUserId: string;
  /** An ISO8601 formatted timestamp. */
  createdAt: Date;
  /**
   * The type of Beacon Report.
   *
   * `first_party`: If this is the same individual as the one who submitted the KYC.
   *
   * `stolen`: If this is a different individual from the one who submitted the KYC.
   *
   * `synthetic`: If this is an individual using fabricated information.
   *
   * `account_takeover`: If this individual's account was compromised.
   *
   * `data_breach`: If this individual's data was compromised in a breach.
   *
   * `unknown`: If you aren't sure who committed the fraud.
   */
  type: BeaconReportType;
  /** A date in the format YYYY-MM-DD (RFC 3339 Section 5.6). */
  fraudDate: string | null;
  /** A date in the format YYYY-MM-DD (RFC 3339 Section 5.6). */
  eventDate: string;
  /**
   * The amount and currency of the fraud or attempted fraud. `fraud_amount` should be omitted to
   * indicate an unknown fraud amount.
   */
  fraudAmount: FraudAmount | null;
  /**
   * Information about the last change made to the parent object specifying what caused the change
   * as well as when it occurred.
   */
  auditTrail: BeaconAuditTrail;
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
};

export const beaconReportGetResponseSchema: Schema<BeaconReportGetResponse> =
  s.object<BeaconReportGetResponse>({
    id: s.string(),
    beaconUserId: s.string(),
    createdAt: s.dateTime(),
    type: beaconReportTypeSchema,
    fraudDate: s.nullable(s.dateOnly()),
    eventDate: s.dateOnly(),
    fraudAmount: s.nullable(s.lazy(() => fraudAmountSchema)),
    auditTrail: beaconAuditTrailSchema,
    requestId: s.string(),
    _keysMap: {
      beaconUserId: "beacon_user_id",
      createdAt: "created_at",
      fraudDate: "fraud_date",
      eventDate: "event_date",
      fraudAmount: "fraud_amount",
      auditTrail: "audit_trail",
      requestId: "request_id",
    },
  });
