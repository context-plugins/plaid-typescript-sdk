import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Webhook notifications are sent only when a subscribed issue is marked as resolved. The payload
 * contains details about the issue at the time of its resolution, focusing on the most essential
 * information.
 */
export type IssueResolvedWebhook = {
  /** `ISSUES` */
  webhookType: string;
  /** `ISSUE_RESOLVED` */
  webhookCode: string;
  /** The unique identifier of the connectivity issue. */
  issueId: string;
  /** A simple description of the error for the end user. */
  issueDescription: string;
  /** The time when the issue was marked as resolved. */
  issueResolvedAt: Date;
  /** The unique identifier of the financial institution involved. */
  institutionId: string;
  /** The name of the financial institution involved. */
  institutionName: string;
};

export const issueResolvedWebhookSchema: Schema<IssueResolvedWebhook> = s.object<IssueResolvedWebhook>({
  webhookType: s.string(),
  webhookCode: s.string(),
  issueId: s.string(),
  issueDescription: s.string(),
  issueResolvedAt: s.dateTime(),
  institutionId: s.string(),
  institutionName: s.string(),
  _keysMap: {
    webhookType: "webhook_type",
    webhookCode: "webhook_code",
    issueId: "issue_id",
    issueDescription: "issue_description",
    issueResolvedAt: "issue_resolved_at",
    institutionId: "institution_id",
    institutionName: "institution_name",
  },
});
