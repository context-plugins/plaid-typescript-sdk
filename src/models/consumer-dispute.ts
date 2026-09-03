import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { consumerReportCategorySchema, type ConsumerReportCategory } from "./consumer-report-category.js";

export type ConsumerDispute = {
  consumerDisputeId: string;
  disputeFieldCreateDate: string;
  category: ConsumerReportCategory;
  statement: string;
};

export const consumerDisputeSchema: Schema<ConsumerDispute> = s.object<ConsumerDispute>({
  consumerDisputeId: s.string(),
  disputeFieldCreateDate: s.dateOnly(),
  category: consumerReportCategorySchema,
  statement: s.string(),
  _keysMap: {
    consumerDisputeId: "consumer_dispute_id",
    disputeFieldCreateDate: "dispute_field_create_date",
  },
});
