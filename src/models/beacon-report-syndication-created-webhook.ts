import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  webhookEnvironmentValuesSchema,
  type WebhookEnvironmentValues,
} from "./webhook-environment-values.js";

/** Fired when a report created on the Beacon Network matches with one of your Beacon Users. */
export type BeaconReportSyndicationCreatedWebhook = {
  /** `BEACON` */
  webhookType: string;
  /** `REPORT_SYNDICATION_CREATED` */
  webhookCode: string;
  /** The ID of the associated Beacon Report Syndication. */
  beaconReportSyndicationId: string;
  /** The Plaid environment the webhook was sent from */
  environment: WebhookEnvironmentValues;
};

export const beaconReportSyndicationCreatedWebhookSchema: Schema<BeaconReportSyndicationCreatedWebhook> =
  s.object<BeaconReportSyndicationCreatedWebhook>({
    webhookType: s.string(),
    webhookCode: s.string(),
    beaconReportSyndicationId: s.string(),
    environment: webhookEnvironmentValuesSchema,
    _keysMap: {
      webhookType: "webhook_type",
      webhookCode: "webhook_code",
      beaconReportSyndicationId: "beacon_report_syndication_id",
    },
  });
