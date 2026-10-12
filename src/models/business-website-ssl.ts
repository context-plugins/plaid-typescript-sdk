import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  businessCheckBooleanStatusSchema,
  type BusinessCheckBooleanStatus,
} from "./business-check-boolean-status.js";

/** SSL status for the business website. */
export type BusinessWebsiteSsl = {
  /** Tri-state boolean status, where `no_data` indicates the check could not determine a value. */
  isValid: BusinessCheckBooleanStatus;
};

export const businessWebsiteSslSchema: Schema<BusinessWebsiteSsl> = s.object<BusinessWebsiteSsl>({
  isValid: businessCheckBooleanStatusSchema,
  _keysMap: {
    isValid: "is_valid",
  },
});
