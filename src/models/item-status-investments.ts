import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ItemStatusInvestments = {
  lastSuccessfulUpdate?: Date | null;
  lastFailedUpdate?: Date | null;
};

export const itemStatusInvestmentsSchema: Schema<ItemStatusInvestments> = s.object<ItemStatusInvestments>({
  lastSuccessfulUpdate: s.optionalNullable(s.dateTime()),
  lastFailedUpdate: s.optionalNullable(s.dateTime()),
  _keysMap: {
    lastSuccessfulUpdate: "last_successful_update",
    lastFailedUpdate: "last_failed_update",
  },
});
