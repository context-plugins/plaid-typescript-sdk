import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  aamvaDetailedMatchResultSchema,
  type AamvaDetailedMatchResult,
} from "./aamva-detailed-match-result.js";
import { aamvaMatchResultSchema, type AamvaMatchResult } from "./aamva-match-result.js";

export type AamvaAnalysis = {
  isVerified: boolean;
  idNumber: AamvaMatchResult;
  idIssueDate: AamvaMatchResult;
  idExpirationDate: AamvaMatchResult;
  street: AamvaDetailedMatchResult;
  city: AamvaMatchResult;
  postalCode: AamvaDetailedMatchResult;
  dateOfBirth: AamvaMatchResult;
  gender: AamvaMatchResult;
  height: AamvaMatchResult;
  eyeColor: AamvaMatchResult;
  firstName: AamvaDetailedMatchResult;
  middleName: AamvaDetailedMatchResult;
  lastName: AamvaDetailedMatchResult;
};

export const aamvaAnalysisSchema: Schema<AamvaAnalysis> = s.object<AamvaAnalysis>({
  isVerified: s.boolean(),
  idNumber: aamvaMatchResultSchema,
  idIssueDate: aamvaMatchResultSchema,
  idExpirationDate: aamvaMatchResultSchema,
  street: aamvaDetailedMatchResultSchema,
  city: aamvaMatchResultSchema,
  postalCode: aamvaDetailedMatchResultSchema,
  dateOfBirth: aamvaMatchResultSchema,
  gender: aamvaMatchResultSchema,
  height: aamvaMatchResultSchema,
  eyeColor: aamvaMatchResultSchema,
  firstName: aamvaDetailedMatchResultSchema,
  middleName: aamvaDetailedMatchResultSchema,
  lastName: aamvaDetailedMatchResultSchema,
  _keysMap: {
    isVerified: "is_verified",
    idNumber: "id_number",
    idIssueDate: "id_issue_date",
    idExpirationDate: "id_expiration_date",
    postalCode: "postal_code",
    dateOfBirth: "date_of_birth",
    eyeColor: "eye_color",
    firstName: "first_name",
    middleName: "middle_name",
    lastName: "last_name",
  },
});
