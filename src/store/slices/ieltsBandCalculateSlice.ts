import { bandsCalculation } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: bandsCalculation = {
  isEssayCompleted: false,
  ieltsScoreCalculate: {
    words: 0,
    cohesion: 0,
    lexicalResource: 0,
    taskResponse: 0,
    grammarAccuracy: 0,
    paragraphs: 0,
    totalBand: "",
  },
};

const ieltsBandCalculateSlice = createSlice({
  name: "ieltsCalculate",
  initialState,
  reducers: {
    setIeltsScoreEstimate: (state, action) => {
      state.ieltsScoreCalculate = action.payload;
    },
    setEssayCompletion: (state, action) => {
      state.isEssayCompleted = action.payload;
    },
  },
});

export const { setIeltsScoreEstimate, setEssayCompletion } =
  ieltsBandCalculateSlice.actions;
export default ieltsBandCalculateSlice.reducer;
