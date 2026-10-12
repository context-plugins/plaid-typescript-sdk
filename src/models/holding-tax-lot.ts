import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  holdingTaxLotPositionTypeSchema,
  type HoldingTaxLotPositionType,
} from "./holding-tax-lot-position-type.js";

/** A single acquisition lot within a holding. */
export type HoldingTaxLot = {
  /**
   * The financial institution's identifier for this lot. Null if the institution does not provide a
   * lot identifier.
   */
  institutionLotId: string | null;
  /**
   * The date and time this lot was acquired, in ISO 8601 format. Null if the institution does not
   * provide acquisition datetime data.
   */
  originalPurchaseDatetime: Date | null;
  /** The number of units of the security in this lot. */
  quantity: number | null;
  /** The price per unit of the security at the time this lot was acquired. */
  purchasePrice: number | null;
  /** The total cost basis of this lot, inclusive of any fees. */
  costBasis: number | null;
  /** The current market value of this lot. */
  currentValue: number | null;
  /**
   * Indicates whether a holding lot position is long or short. Possible values are `LONG` and
   * `SHORT`.
   */
  positionType: HoldingTaxLotPositionType | null;
};

export const holdingTaxLotSchema: Schema<HoldingTaxLot> = s.object<HoldingTaxLot>({
  institutionLotId: s.nullable(s.string()),
  originalPurchaseDatetime: s.nullable(s.dateTime()),
  quantity: s.nullable(s.float64()),
  purchasePrice: s.nullable(s.float64()),
  costBasis: s.nullable(s.float64()),
  currentValue: s.nullable(s.float64()),
  positionType: s.nullable(s.lazy(() => holdingTaxLotPositionTypeSchema)),
  _keysMap: {
    institutionLotId: "institution_lot_id",
    originalPurchaseDatetime: "original_purchase_datetime",
    purchasePrice: "purchase_price",
    costBasis: "cost_basis",
    currentValue: "current_value",
    positionType: "position_type",
  },
});
