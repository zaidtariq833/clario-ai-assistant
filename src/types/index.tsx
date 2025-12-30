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
  isEssayCompleted: boolean;
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

export type SubHeadingProps = {
  spanText: string;
  subHeading: string;
  subHeadingClass: string;
  desc?: string;
  fontFamily: string;
};

export type AccordionProps = {
  faq: FAQ;
  isOpen: boolean;
  onToggle: () => void;
};

export type BandCalculatorProps = {
  writingTypes: {
    band: number;
    type: string;
  }[];
  onCloseModal: () => void;
  open: boolean;
};

export type EmptyEssayProps = {
  open: boolean;
  onCloseModal: () => void;
};

export type FinalScoreProps = {
  open: boolean;
  onCloseModal: () => void;
  writingTypes: {
    band: number;
    type: string;
  }[];
};

export type ieltsScoreAndMistakesType = {
  mainText: string;
  paraText: string;
  image: string;
};

export type StepsType = {
  name: string;
  mainText: string;
  image: string;
  btnText: string;
};

export type TestimonialCardType = {
  card: number;
  heading: string;
  description: string;
  personImage: string;
  learnerName: string;
};
