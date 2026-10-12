import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** List of unofficial currency codes */
export const UnofficialCurrencyCodeList = {
  Ada: "ADA",
  Bat: "BAT",
  Bch: "BCH",
  Bnb: "BNB",
  Btc: "BTC",
  Btg: "BTG",
  Bsv: "BSV",
  Cnh: "CNH",
  Dash: "DASH",
  Doge: "DOGE",
  Etc: "ETC",
  Eth: "ETH",
  Gbx: "GBX",
  Lsk: "LSK",
  Neo: "NEO",
  Omg: "OMG",
  Qtum: "QTUM",
  Usdt: "USDT",
  Xlm: "XLM",
  Xmr: "XMR",
  Xrp: "XRP",
  Zec: "ZEC",
  Zrx: "ZRX",
} as const;
export type UnofficialCurrencyCodeList =
  | (typeof UnofficialCurrencyCodeList)[keyof typeof UnofficialCurrencyCodeList]
  | (string & {});

export const unofficialCurrencyCodeListSchema: EnumSchema<UnofficialCurrencyCodeList> =
  s.enumOf<UnofficialCurrencyCodeList>(UnofficialCurrencyCodeList);
