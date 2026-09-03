import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CreditI20Student = {
  givenName?: string | null;
  surnamePrimaryName?: string | null;
  passportName?: string | null;
  preferredName?: string | null;
  schoolName?: string | null;
  programStartDate?: string | null;
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
