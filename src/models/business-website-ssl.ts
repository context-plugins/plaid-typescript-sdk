import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  businessCheckBooleanStatusSchema,
  type BusinessCheckBooleanStatus,
} from "./business-check-boolean-status.js";

export type BusinessWebsiteSsl = {
  isValid: BusinessCheckBooleanStatus;
};

export const businessWebsiteSslSchema: Schema<BusinessWebsiteSsl> = s.object<BusinessWebsiteSsl>({
  isValid: businessCheckBooleanStatusSchema,
  _keysMap: {
    isValid: "is_valid",
  },
});
