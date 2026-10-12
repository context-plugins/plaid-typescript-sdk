import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** An object containing employer data. */
export type CreditEmployerVerification = {
  /** Name of employer. */
  name: string | null;
};

export const creditEmployerVerificationSchema: Schema<CreditEmployerVerification> =
  s.object<CreditEmployerVerification>({
    name: s.nullable(s.string()),
  });
