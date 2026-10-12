import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { consumerReportCategorySchema, type ConsumerReportCategory } from "./consumer-report-category.js";

/** The information about a previously submitted valid dispute statement by the consumer */
export type ConsumerDispute = {
  /**
   * (Deprecated) A unique identifier (UUID) of the consumer dispute that can be used for
   * troubleshooting
   *
   * @deprecated
   */
  consumerDisputeId: string;
  /** Date of the disputed field (e.g. transaction date), in an ISO 8601 format (YYYY-MM-DD) */
  disputeFieldCreateDate: string;
  /** Type of data being disputed by the consumer */
  category: ConsumerReportCategory;
  /** Text content of dispute */
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
