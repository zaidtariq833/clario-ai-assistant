"use client";
import { useSelector } from "react-redux";
import EmptyEssay from "@/components/modals/EmptyEssay";
import FinalScoreModal from "@/components/modals/FinalScoreModal";
import { BandCalculatorProps } from "@/types";
import { RootState } from "@/store/store";

export default function BandModal({
  onCloseModal,
  open,
  writingTypes,
}: BandCalculatorProps) {
  const { words } = useSelector(
    (state: RootState) => state.ieltsCalculate.ieltsScoreCalculate
  );

  return (
    <>
      {words === 0 ? (
        <EmptyEssay open={open} onCloseModal={onCloseModal} />
      ) : (
        <FinalScoreModal
          open={open}
          onCloseModal={onCloseModal}
          writingTypes={writingTypes}
        />
      )}
    </>
  );
}
