import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { reportTypeSchema, type ReportType } from "./report-type.js";

/** CreditRelayRefreshRequest defines the request schema for `/credit/relay/refresh` */
export type CreditRelayRefreshRequest = {
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
  /** The `relay_token` granting access to the report you would like to refresh. */
  relayToken: string;
  /** The report type. It can be `asset`. Income report types are not yet supported. */
  reportType: ReportType;
  /** The URL registered to receive webhooks when the report of a relay token has been refreshed. */
  webhook?: string | null;
};

export const creditRelayRefreshRequestSchema: Schema<CreditRelayRefreshRequest> =
  s.object<CreditRelayRefreshRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    relayToken: s.string(),
    reportType: reportTypeSchema,
    webhook: s.optionalNullable(s.string()),
    _keysMap: {
      clientId: "client_id",
      relayToken: "relay_token",
      reportType: "report_type",
    },
  });
