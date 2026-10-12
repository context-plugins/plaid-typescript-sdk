import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  entityScreeningHitAnalysisSchema,
  type EntityScreeningHitAnalysis,
} from "./entity-screening-hit-analysis.js";
import { entityScreeningHitDataSchema, type EntityScreeningHitData } from "./entity-screening-hit-data.js";
import { entityWatchlistCodeSchema, type EntityWatchlistCode } from "./entity-watchlist-code.js";
import {
  watchlistScreeningHitStatusSchema,
  type WatchlistScreeningHitStatus,
} from "./watchlist-screening-hit-status.js";

/** Data from a government watchlist that has been attached to the screening. */
export type EntityWatchlistScreeningHit = {
  /** ID of the associated entity screening hit. */
  id: string;
  /**
   * The current state of review. All watchlist screening hits begin in a `pending_review` state but
   * can be changed by creating a review. When a hit is in the `pending_review` state, it will
   * always show the latest version of the watchlist data Plaid has available and be compared
   * against the latest customer information saved in the watchlist screening. Once a hit has been
   * marked as `confirmed` or `dismissed` it will no longer be updated so that the state is as it
   * was when the review was first conducted.
   */
  reviewStatus: WatchlistScreeningHitStatus;
  /** An ISO8601 formatted timestamp. */
  firstActive: Date;
  /** An ISO8601 formatted timestamp. */
  inactiveSince: Date | null;
  /** An ISO8601 formatted timestamp. */
  historicalSince: Date | null;
  /**
   * Shorthand identifier for a specific screening list for entities. `AU_CON`: Australia Department
   * of Foreign Affairs and Trade Consolidated List `CA_CON`: Government of Canada Consolidated List
   * of Sanctions `EU_CON`: European External Action Service Consolidated List `IZ_SOE`: State Owned
   * Enterprise List `IZ_UNC`: United Nations Consolidated Sanctions `IZ_WBK`: World Bank Listing of
   * Ineligible Firms and Individuals `US_CAP`: US OFAC Correspondent Account or Payable-Through
   * Account Sanctions `US_FSE`: US OFAC Foreign Sanctions Evaders `US_MBS`: US Non-SDN Menu-Based
   * Sanctions `US_SDN`: US OFAC Specially Designated Nationals List `US_SSI`: US OFAC Sectoral
   * Sanctions Identifications `US_CMC`: US OFAC Non-SDN Chinese Military-Industrial Complex List
   * `US_UVL`: Bureau of Industry and Security Unverified List `US_SAM`: US System for Award
   * Management Exclusion List `US_TEL`: US Terrorist Exclusion List `UK_HMC`: Foreign, Commonwealth
   * & Development Office UK Sanctions List
   */
  listCode: EntityWatchlistCode;
  /**
   * A universal identifier for a watchlist individual that is stable across searches and updates.
   */
  plaidUid: string;
  /**
   * The identifier provided by the source sanction or watchlist. When one is not provided by the
   * source, this is `null`.
   */
  sourceUid: string | null;
  /**
   * Sub-program designations that may be attached to the watchlist entry by the issuing authority.
   * For OFAC SDN entries these are the program codes published in the SDN list (for example `SDGT`
   * for Specially Designated Global Terrorists, `SDNTK` for Specially Designated Narcotics
   * Trafficking Kingpins, `IRAN`, `RUSSIA-EO14024`). New codes are added by sanctioning authorities
   * without prior notice, so callers should treat unknown values as opaque strings rather than enum
   * members.
   */
  subPrograms: string[];
  /** Analysis information describing why a screening hit matched the provided entity information */
  analysis?: EntityScreeningHitAnalysis;
  /** Information associated with the entity watchlist hit */
  data?: EntityScreeningHitData;
};

export const entityWatchlistScreeningHitSchema: Schema<EntityWatchlistScreeningHit> =
  s.object<EntityWatchlistScreeningHit>({
    id: s.string(),
    reviewStatus: watchlistScreeningHitStatusSchema,
    firstActive: s.dateTime(),
    inactiveSince: s.nullable(s.dateTime()),
    historicalSince: s.nullable(s.dateTime()),
    listCode: entityWatchlistCodeSchema,
    plaidUid: s.string(),
    sourceUid: s.nullable(s.string()),
    subPrograms: s.array(s.string()),
    analysis: s.optional(s.lazy(() => entityScreeningHitAnalysisSchema)),
    data: s.optional(s.lazy(() => entityScreeningHitDataSchema)),
    _keysMap: {
      reviewStatus: "review_status",
      firstActive: "first_active",
      inactiveSince: "inactive_since",
      historicalSince: "historical_since",
      listCode: "list_code",
      plaidUid: "plaid_uid",
      sourceUid: "source_uid",
      subPrograms: "sub_programs",
    },
  });
