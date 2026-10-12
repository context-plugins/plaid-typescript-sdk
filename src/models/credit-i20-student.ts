import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** An object representing the student named on a Form I-20. */
export type CreditI20Student = {
  /** Given name of the student. */
  givenName?: string | null;
  /** Surname or primary name of the student. */
  surnamePrimaryName?: string | null;
  /** Name of the student as it appears on their passport. */
  passportName?: string | null;
  /** Preferred name of the student. */
  preferredName?: string | null;
  /** Name of the school issuing the Form I-20. */
  schoolName?: string | null;
  /** Start date of the program in ISO 8601 format (YYYY-MM-DD). */
  programStartDate?: string | null;
  /** End date of the program in ISO 8601 format (YYYY-MM-DD). */
  programEndDate?: string | null;
};

export const creditI20StudentSchema: Schema<CreditI20Student> = s.object<CreditI20Student>({
  givenName: s.optionalNullable(s.string()),
  surnamePrimaryName: s.optionalNullable(s.string()),
  passportName: s.optionalNullable(s.string()),
  preferredName: s.optionalNullable(s.string()),
  schoolName: s.optionalNullable(s.string()),
  programStartDate: s.optionalNullable(s.dateOnly()),
  programEndDate: s.optionalNullable(s.dateOnly()),
  _keysMap: {
    givenName: "given_name",
    surnamePrimaryName: "surname_primary_name",
    passportName: "passport_name",
    preferredName: "preferred_name",
    schoolName: "school_name",
    programStartDate: "program_start_date",
    programEndDate: "program_end_date",
  },
});
