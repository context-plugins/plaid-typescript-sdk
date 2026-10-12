import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** An object containing employer data. */
export type EmployerVerification = {
  /** Name of employer. */
  name?: string | null;
};

export const employerVerificationSchema: Schema<EmployerVerification> = s.object<EmployerVerification>({
  name: s.optionalNullable(s.string()),
});
