export type FAQ = {
  question: string;
  answer: string;
};

export type Steps = {
  name: string;
  mainText: string;
  image: string;
  btnText: string;
};

export type AccordionType = {
  state: boolean;
  answer: string;
};

export type bandsCalculation = {
  isEssayCompleted: any;
  ieltsScoreCalculate: {
    words: number;
    cohesion: number;
    lexicalResource: number;
    taskResponse: number;
    grammarAccuracy: number;
    paragraphs: number;
    totalBand: string;
  };
};

export type WritingType = {
  band: number;
  type: string;
};
