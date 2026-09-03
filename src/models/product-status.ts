import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { statusBreakdownSchema, type StatusBreakdown } from "./status-breakdown.js";
import { status4Schema, type Status4 } from "./status4.js";

export type ProductStatus = {
  status: Status4;
  lastStatusChange: Date;
  breakdown: StatusBreakdown;
};

export const productStatusSchema: Schema<ProductStatus> = s.object<ProductStatus>({
  status: status4Schema,
  lastStatusChange: s.dateTime(),
  breakdown: statusBreakdownSchema,
  _keysMap: {
    lastStatusChange: "last_status_change",
  },
});
