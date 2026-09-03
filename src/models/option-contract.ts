import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type OptionContract = {
  contractType: string;
  expirationDate: string;
  strikePrice: number;
  underlyingSecurityTicker: string;
};

export const optionContractSchema: Schema<OptionContract> = s.object<OptionContract>({
  contractType: s.string(),
  expirationDate: s.dateOnly(),
  strikePrice: s.number(),
  underlyingSecurityTicker: s.string(),
  _keysMap: {
    contractType: "contract_type",
    expirationDate: "expiration_date",
    strikePrice: "strike_price",
    underlyingSecurityTicker: "underlying_security_ticker",
  },
});
