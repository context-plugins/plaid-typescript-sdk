import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { individualWatchlistCodeSchema, type IndividualWatchlistCode } from "./individual-watchlist-code.js";
import { screeningHitAnalysisSchema, type ScreeningHitAnalysis } from "./screening-hit-analysis.js";
import { screeningHitDataSchema, type ScreeningHitData } from "./screening-hit-data.js";
import {
  watchlistScreeningHitStatusSchema,
  type WatchlistScreeningHitStatus,
} from "./watchlist-screening-hit-status.js";

/** Data from a government watchlist or PEP list that has been attached to the screening. */
export type WatchlistScreeningHit = {
  /** ID of the associated screening hit. */
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
   * Shorthand identifier for a specific screening list for individuals. `AU_CON`: Australia
   * Department of Foreign Affairs and Trade Consolidated List `CA_CON`: Government of Canada
   * Consolidated List of Sanctions `EU_CON`: European External Action Service Consolidated List
   * `IZ_CIA`: CIA List of Chiefs of State and Cabinet Members `IZ_IPL`: Interpol Red Notices for
   * Wanted Persons List `IZ_PEP`: Politically Exposed Persons List `IZ_UNC`: United Nations
   * Consolidated Sanctions `IZ_WBK`: World Bank Listing of Ineligible Firms and Individuals
   * `UK_HMC`: Foreign, Commonwealth & Development Office UK Sanctions List `US_DPL`: Bureau of
   * Industry and Security Denied Persons List `US_DTC`: US Department of State AECA Debarred
   * `US_FBI`: US Department of Justice FBI Wanted List `US_FSE`: US OFAC Foreign Sanctions Evaders
   * `US_ISN`: US Department of State Nonproliferation Sanctions `US_MBS`: US Non-SDN Menu-Based
   * Sanctions `US_PLC`: US OFAC Palestinian Legislative Council `US_SAM`: US System for Award
   * Management Exclusion List `US_SDN`: US OFAC Specially Designated Nationals List `US_SSI`: US
   * OFAC Sectoral Sanctions Identifications `SG_SOF`: Government of Singapore Terrorists and
   * Terrorist Entities `TR_TWL`: Government of Turkey Terrorist Wanted List `TR_DFD`: Government of
   * Turkey Domestic Freezing Decisions `TR_FOR`: Government of Turkey Foreign Freezing Requests
   * `TR_WMD`: Government of Turkey Weapons of Mass Destruction `TR_CMB`: Government of Turkey
   * Capital Markets Board
   */
  listCode: IndividualWatchlistCode;
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
  /** Analysis information describing why a screening hit matched the provided user information */
  analysis?: ScreeningHitAnalysis;
  /** Information associated with the watchlist hit */
  data?: ScreeningHitData;
};

export const watchlistScreeningHitSchema: Schema<WatchlistScreeningHit> = s.object<WatchlistScreeningHit>({
  id: s.string(),
  reviewStatus: watchlistScreeningHitStatusSchema,
  firstActive: s.dateTime(),
  inactiveSince: s.nullable(s.dateTime()),
  historicalSince: s.nullable(s.dateTime()),
  listCode: individualWatchlistCodeSchema,
  plaidUid: s.string(),
  sourceUid: s.nullable(s.string()),
  subPrograms: s.array(s.string()),
  analysis: s.optional(s.lazy(() => screeningHitAnalysisSchema)),
  data: s.optional(s.lazy(() => screeningHitDataSchema)),
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
