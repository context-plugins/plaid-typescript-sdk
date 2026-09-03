import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  holdingTaxLotPositionTypeSchema,
  type HoldingTaxLotPositionType,
} from "./holding-tax-lot-position-type.js";

export type HoldingTaxLot = {
  institutionLotId: string | null;
  originalPurchaseDatetime: Date | null;
  quantity: number | null;
  purchasePrice: number | null;
  costBasis: number | null;
  currentValue: number | null;
  positionType: HoldingTaxLotPositionType | null;
};

export const holdingTaxLotSchema: Schema<HoldingTaxLot> = s.object<HoldingTaxLot>({
  institutionLotId: s.nullable(s.string()),
  originalPurchaseDatetime: s.nullable(s.dateTime()),
  quantity: s.nullable(s.number()),
  purchasePrice: s.nullable(s.number()),
  costBasis: s.nullable(s.number()),
  currentValue: s.nullable(s.number()),
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
