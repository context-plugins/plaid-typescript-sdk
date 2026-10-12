import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { reportTypeSchema, type ReportType } from "./report-type.js";

/** CreditRelayPDFGetRequest defines the request schema for `/credit/relay/pdf/get` */
export type CreditRelayPdfGetRequest = {
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
  /** The `relay_token` granting access to the report you would like to get. */
  relayToken: string;
  /** The report type. It can be `asset`. Income report types are not yet supported. */
  reportType: ReportType;
};

export const creditRelayPdfGetRequestSchema: Schema<CreditRelayPdfGetRequest> =
  s.object<CreditRelayPdfGetRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    relayToken: s.string(),
    reportType: reportTypeSchema,
    _keysMap: {
      clientId: "client_id",
      relayToken: "relay_token",
      reportType: "report_type",
    },
  });
