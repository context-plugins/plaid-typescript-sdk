import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The object containing employer data. */
export type CraBankIncomeEmployer = {
  /** The name of the employer. */
  name: string | null;
};

export const craBankIncomeEmployerSchema: Schema<CraBankIncomeEmployer> = s.object<CraBankIncomeEmployer>({
  name: s.nullable(s.string()),
});
