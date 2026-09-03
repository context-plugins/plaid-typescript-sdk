import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type IssueResolvedWebhook = {
  webhookType: string;
  webhookCode: string;
  issueId: string;
  issueDescription: string;
  issueResolvedAt: Date;
  institutionId: string;
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
