import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { beaconReportCreateTypeSchema, type BeaconReportCreateType } from "./beacon-report-create-type.js";
import { fraudAmountSchema, type FraudAmount } from "./fraud-amount.js";

/** Request input for creating a Beacon Report */
export type BeaconReportCreateRequest = {
  /** ID of the associated Beacon User. */
  beaconUserId: string;
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
   * `unknown`: If you aren't sure who committed the fraud.
   */
  type: BeaconReportCreateType;
  /** A date in the format YYYY-MM-DD (RFC 3339 Section 5.6). */
  fraudDate: string;
  /**
   * The amount and currency of the fraud or attempted fraud. `fraud_amount` should be omitted to
   * indicate an unknown fraud amount.
   */
  fraudAmount?: FraudAmount | null;
  /**
   * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the
   * `PLAID-CLIENT-ID` header or as part of a request body.
   */
  clientId?: string;
  /**
   * Your Plaid API `secret`. The `secret` is required and may be provided either in the
   * `PLAID-SECRET` header or as part of a request body.
   */
  secret?: string;
};

export const beaconReportCreateRequestSchema: Schema<BeaconReportCreateRequest> =
  s.object<BeaconReportCreateRequest>({
    beaconUserId: s.string(),
    type: beaconReportCreateTypeSchema,
    fraudDate: s.dateOnly(),
    fraudAmount: s.optionalNullable(s.lazy(() => fraudAmountSchema)),
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    _keysMap: {
      beaconUserId: "beacon_user_id",
      fraudDate: "fraud_date",
      fraudAmount: "fraud_amount",
      clientId: "client_id",
    },
  });
