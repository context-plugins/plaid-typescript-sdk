import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** A map containing data to pass in for the Card Switch flow. */
export type LinkTokenCreateCardSwitch = {
  /** The BIN (Bank Identification Number) of the card to switch. */
  cardBin: string;
};

export const linkTokenCreateCardSwitchSchema: Schema<LinkTokenCreateCardSwitch> =
  s.object<LinkTokenCreateCardSwitch>({
    cardBin: s.string(),
    _keysMap: {
      cardBin: "card_bin",
    },
  });
