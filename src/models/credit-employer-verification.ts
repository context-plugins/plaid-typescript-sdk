import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CreditEmployerVerification = {
  name: string | null;
};

export const creditEmployerVerificationSchema: Schema<CreditEmployerVerification> =
  s.object<CreditEmployerVerification>({
    name: s.nullable(s.string()),
  });
