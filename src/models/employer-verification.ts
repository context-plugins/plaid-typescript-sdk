import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type EmployerVerification = {
  name?: string | null;
};

export const employerVerificationSchema: Schema<EmployerVerification> = s.object<EmployerVerification>({
  name: s.optionalNullable(s.string()),
});
