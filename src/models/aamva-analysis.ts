import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  aamvaDetailedMatchResultSchema,
  type AamvaDetailedMatchResult,
} from "./aamva-detailed-match-result.js";
import { aamvaMatchResultSchema, type AamvaMatchResult } from "./aamva-match-result.js";

/**
 * Analyzed AAMVA data for the associated hit.
 *
 * Note: This field is only available for U.S. driver's licenses issued by participating states.
 */
export type AamvaAnalysis = {
  /** The overall outcome of checking the associated hit against the issuing state database. */
  isVerified: boolean;
  /**
   * The outcome of checking the particular field against state databases.
   *
   *
   * `match` - The field is an exact match with the state database.
   *
   * `no_match` - The field is not an exact match with the state database.
   *
   * `no_data` - The field was unable to be checked against state databases.
   */
  idNumber: AamvaMatchResult;
  /**
   * The outcome of checking the particular field against state databases.
   *
   *
   * `match` - The field is an exact match with the state database.
   *
   * `no_match` - The field is not an exact match with the state database.
   *
   * `no_data` - The field was unable to be checked against state databases.
   */
  idIssueDate: AamvaMatchResult;
  /**
   * The outcome of checking the particular field against state databases.
   *
   *
   * `match` - The field is an exact match with the state database.
   *
   * `no_match` - The field is not an exact match with the state database.
   *
   * `no_data` - The field was unable to be checked against state databases.
   */
  idExpirationDate: AamvaMatchResult;
  /**
   * The outcome of checking the associated hit against state databases.
   *
   *
   * `match` - The field is an exact match with the state database.
   *
   * `partial_match` - The field is a partial match with the state database.
   *
   * `no_match` - The field is not an exact match with the state database.
   *
   * `no_data` - The field was unable to be checked against state databases.
   */
  street: AamvaDetailedMatchResult;
  /**
   * The outcome of checking the particular field against state databases.
   *
   *
   * `match` - The field is an exact match with the state database.
   *
   * `no_match` - The field is not an exact match with the state database.
   *
   * `no_data` - The field was unable to be checked against state databases.
   */
  city: AamvaMatchResult;
  /**
   * The outcome of checking the associated hit against state databases.
   *
   *
   * `match` - The field is an exact match with the state database.
   *
   * `partial_match` - The field is a partial match with the state database.
   *
   * `no_match` - The field is not an exact match with the state database.
   *
   * `no_data` - The field was unable to be checked against state databases.
   */
  postalCode: AamvaDetailedMatchResult;
  /**
   * The outcome of checking the particular field against state databases.
   *
   *
   * `match` - The field is an exact match with the state database.
   *
   * `no_match` - The field is not an exact match with the state database.
   *
   * `no_data` - The field was unable to be checked against state databases.
   */
  dateOfBirth: AamvaMatchResult;
  /**
   * The outcome of checking the particular field against state databases.
   *
   *
   * `match` - The field is an exact match with the state database.
   *
   * `no_match` - The field is not an exact match with the state database.
   *
   * `no_data` - The field was unable to be checked against state databases.
   */
  gender: AamvaMatchResult;
  /**
   * The outcome of checking the particular field against state databases.
   *
   *
   * `match` - The field is an exact match with the state database.
   *
   * `no_match` - The field is not an exact match with the state database.
   *
   * `no_data` - The field was unable to be checked against state databases.
   */
  height: AamvaMatchResult;
  /**
   * The outcome of checking the particular field against state databases.
   *
   *
   * `match` - The field is an exact match with the state database.
   *
   * `no_match` - The field is not an exact match with the state database.
   *
   * `no_data` - The field was unable to be checked against state databases.
   */
  eyeColor: AamvaMatchResult;
  /**
   * The outcome of checking the associated hit against state databases.
   *
   *
   * `match` - The field is an exact match with the state database.
   *
   * `partial_match` - The field is a partial match with the state database.
   *
   * `no_match` - The field is not an exact match with the state database.
   *
   * `no_data` - The field was unable to be checked against state databases.
   */
  firstName: AamvaDetailedMatchResult;
  /**
   * The outcome of checking the associated hit against state databases.
   *
   *
   * `match` - The field is an exact match with the state database.
   *
   * `partial_match` - The field is a partial match with the state database.
   *
   * `no_match` - The field is not an exact match with the state database.
   *
   * `no_data` - The field was unable to be checked against state databases.
   */
  middleName: AamvaDetailedMatchResult;
  /**
   * The outcome of checking the associated hit against state databases.
   *
   *
   * `match` - The field is an exact match with the state database.
   *
   * `partial_match` - The field is a partial match with the state database.
   *
   * `no_match` - The field is not an exact match with the state database.
   *
   * `no_data` - The field was unable to be checked against state databases.
   */
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
