"use client";
import { setEssayCompletion } from "@/store/slices/ieltsBandCalculateSlice";
import { geistRegular } from "@/styles/fonts";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BandModal from "@/components/layout/BandCalculator";
import { RootState } from "@/store/store";

export default function SubmitEssay() {
  const { lexicalResource, taskResponse, grammarAccuracy, cohesion } =
    useSelector((state: RootState) => state.ieltsCalculate.ieltsScoreCalculate);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const writingTypes = [
    {
      band: taskResponse,
      type: "Task Response",
    },
    {
      band: cohesion,
      type: "Coherence & Cohesion",
    },
    {
      band: lexicalResource,
      type: "Lexical Resource",
    },
    {
      band: grammarAccuracy,
      type: "Grammar Range & Accuracy",
    },
  ];

  return (
    <>
      <button
        className={`${geistRegular.className} btn-submitessay`}
        onClick={() => {
          onOpenModal();
          dispatch(setEssayCompletion(true));
        }}
      >
        Submit & Get Report
      </button>
      <BandModal
        writingTypes={writingTypes}
        onCloseModal={onCloseModal}
        open={open}
      />
    </>
  );
}
