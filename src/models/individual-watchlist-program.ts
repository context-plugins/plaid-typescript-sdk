import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { individualWatchlistCodeSchema, type IndividualWatchlistCode } from "./individual-watchlist-code.js";
import { programNameSensitivitySchema, type ProgramNameSensitivity } from "./program-name-sensitivity.js";
import {
  watchlistScreeningAuditTrailSchema,
  type WatchlistScreeningAuditTrail,
} from "./watchlist-screening-audit-trail.js";

/**
 * A program that configures the active lists, search parameters, and other behavior for initial and
 * ongoing screening of individuals.
 */
export type IndividualWatchlistProgram = {
  /** ID of the associated program. */
  id: string;
  /** An ISO8601 formatted timestamp. */
  createdAt: Date;
  /** Indicator specifying whether the program is enabled and will perform daily rescans. */
  isRescanningEnabled: boolean;
  /** Watchlists enabled for the associated program */
  listsEnabled: IndividualWatchlistCode[];
  /**
   * A name for the program to define its purpose. For example, "High Risk Individuals", "US
   * Cardholders", or "Applicants".
   */
  name: string;
  /**
   * The valid name matching sensitivity configurations for a screening program. Note that while
   * certain matching techniques may be more prevalent on less strict settings, all matching
   * algorithms are enabled for every sensitivity.
   *
   * `coarse` - See more potential matches. This sensitivity will see more broad phonetic matches
   * across alphabets that make missing a potential hit very unlikely. This setting is noisier and
   * will require more manual review.
   *
   * `balanced` - A good default for most companies. This sensitivity is balanced to show high
   * quality hits with reduced noise.
   *
   * `strict` - Aggressive false positive reduction. This sensitivity will require names to be more
   * similar than `coarse` and `balanced` settings, relying less on phonetics, while still
   * accounting for character transpositions, missing tokens, and other common permutations.
   *
   * `exact` - Matches must be nearly exact. This sensitivity will only show hits with exact or
   * nearly exact name matches with only basic correction such as extraneous symbols and
   * capitalization. This setting is generally not recommended unless you have a very specific use
   * case.
   */
  nameSensitivity: ProgramNameSensitivity;
  /**
   * Information about the last change made to the parent object specifying what caused the change
   * as well as when it occurred.
   */
  auditTrail: WatchlistScreeningAuditTrail;
  /**
   * Archived programs are read-only and cannot screen new customers nor participate in ongoing
   * monitoring.
   */
  isArchived: boolean;
};

export const individualWatchlistProgramSchema: Schema<IndividualWatchlistProgram> =
  s.object<IndividualWatchlistProgram>({
    id: s.string(),
    createdAt: s.dateTime(),
    isRescanningEnabled: s.boolean(),
    listsEnabled: s.array(s.lazy(() => individualWatchlistCodeSchema)),
    name: s.string(),
    nameSensitivity: programNameSensitivitySchema,
    auditTrail: watchlistScreeningAuditTrailSchema,
    isArchived: s.boolean(),
    _keysMap: {
      createdAt: "created_at",
      isRescanningEnabled: "is_rescanning_enabled",
      listsEnabled: "lists_enabled",
      nameSensitivity: "name_sensitivity",
      auditTrail: "audit_trail",
      isArchived: "is_archived",
    },
  });
