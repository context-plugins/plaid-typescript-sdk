import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Details about the status of the payroll item. */
export type PayrollItemStatus = {
  /**
   * Denotes the processing status for the verification.
   *
   * `UNKNOWN`: The processing status could not be determined.
   *
   * `PROCESSING_COMPLETE`: The processing has completed and the user has approved for sharing. The
   * data is available to be retrieved.
   *
   * `PROCESSING`: The verification is still processing. The data is not available yet.
   *
   * `FAILED`: The processing failed to complete successfully.
   *
   * `APPROVAL_STATUS_PENDING`: The processing has completed but the user has not yet approved the
   * sharing of the data.
   */
  processingStatus?: string | null;
};

export const payrollItemStatusSchema: Schema<PayrollItemStatus> = s.object<PayrollItemStatus>({
  processingStatus: s.optionalNullable(s.string()),
  _keysMap: {
    processingStatus: "processing_status",
  },
});
