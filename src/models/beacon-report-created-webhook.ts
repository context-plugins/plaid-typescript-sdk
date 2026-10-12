import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  webhookEnvironmentValuesSchema,
  type WebhookEnvironmentValues,
} from "./webhook-environment-values.js";

/** Fired when one of your Beacon Users is first reported to the Beacon network. */
export type BeaconReportCreatedWebhook = {
  /** `BEACON` */
  webhookType: string;
  /** `REPORT_CREATED` */
  webhookCode: string;
  /** The ID of the associated Beacon Report. */
  beaconReportId: string;
  /** The Plaid environment the webhook was sent from */
  environment: WebhookEnvironmentValues;
};

export const beaconReportCreatedWebhookSchema: Schema<BeaconReportCreatedWebhook> =
  s.object<BeaconReportCreatedWebhook>({
    webhookType: s.string(),
    webhookCode: s.string(),
    beaconReportId: s.string(),
    environment: webhookEnvironmentValuesSchema,
    _keysMap: {
      webhookType: "webhook_type",
      webhookCode: "webhook_code",
      beaconReportId: "beacon_report_id",
    },
  });
