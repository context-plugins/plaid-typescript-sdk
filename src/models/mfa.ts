import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Mfa = {
  type: string;
  questionRounds: number;
  questionsPerRound: number;
  selectionRounds: number;
  selectionsPerQuestion: number;
};

export const mfaSchema: Schema<Mfa> = s.object<Mfa>({
  type: s.string(),
  questionRounds: s.number(),
  questionsPerRound: s.number(),
  selectionRounds: s.number(),
  selectionsPerQuestion: s.number(),
  _keysMap: {
    questionRounds: "question_rounds",
    questionsPerRound: "questions_per_round",
    selectionRounds: "selection_rounds",
    selectionsPerQuestion: "selections_per_question",
  },
});
