import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Object containing employer data. */
export type CreditBankEmployer = {
  /** Name of the employer. */
  name: string;
};

export const creditBankEmployerSchema: Schema<CreditBankEmployer> = s.object<CreditBankEmployer>({
  name: s.string(),
});
