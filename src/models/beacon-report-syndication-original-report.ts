import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { beaconReportTypeSchema, type BeaconReportType } from "./beacon-report-type.js";

/**
 * A subset of information from a Beacon Report that has been syndicated to a matching Beacon User
 * in your program.
 *
 * The `id` field in the response is the ID of the original report that was syndicated. If the
 * original report was created by your organization, the field will be filled with the ID of the
 * report. Otherwise, the field will be `null` indicating that the original report was created by
 * another Beacon customer.
 */
export type BeaconReportSyndicationOriginalReport = {
  /** ID of the associated Beacon Report. */
  id: string | null;
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
};

export const beaconReportSyndicationOriginalReportSchema: Schema<BeaconReportSyndicationOriginalReport> =
  s.object<BeaconReportSyndicationOriginalReport>({
    id: s.nullable(s.string()),
    createdAt: s.dateTime(),
    type: beaconReportTypeSchema,
    fraudDate: s.nullable(s.dateOnly()),
    eventDate: s.dateOnly(),
    _keysMap: {
      createdAt: "created_at",
      fraudDate: "fraud_date",
      eventDate: "event_date",
    },
  });
