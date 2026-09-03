import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PayrollItemStatus = {
  processingStatus?: string | null;
};

export const payrollItemStatusSchema: Schema<PayrollItemStatus> = s.object<PayrollItemStatus>({
  processingStatus: s.optionalNullable(s.string()),
  _keysMap: {
    processingStatus: "processing_status",
  },
});
