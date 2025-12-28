"use client";
import { setEssayCompletion } from "@/store/slices/ieltsBandCalculateSlice";
import { geistRegular, geistSemiBold } from "@/styles/fonts";
import { WritingType } from "@/types";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "react-responsive-modal";

export default function SubmitEssay() {
  const {
    totalBand,
    words,
    lexicalResource,
    taskResponse,
    grammarAccuracy,
    cohesion,
  } = useSelector((state: any) => state.ieltsCalculate.ieltsScoreCalculate);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const bgColor =
    Math.round(Number(totalBand)) <= 4
      ? "bg-(--flaming-red)"
      : Math.round(Number(totalBand)) <= 6
      ? "bg-(--dim-yellow)"
      : "bg-(--forest-green)";

  const textColor =
    Math.round(Number(totalBand)) <= 4
      ? "text-(--flaming-red)"
      : Math.round(Number(totalBand)) <= 6
      ? "text-(--dim-yellow)"
      : "text-(--forest-green)";

  const circleColor =
    Math.round(Number(totalBand)) <= 4
      ? "text-(--lightest-red)"
      : Math.round(Number(totalBand)) <= 6
      ? "text-(--lightest-yellow)"
      : "text-(--lightest-green)";

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

  const getBandBg = (band: number) => {
    if (band <= 4) return "bg-(--bad-score)";
    if (band <= 6) return "bg-(--lightest-yellow)";
    return "bg-(--good-score)";
  };
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
      {words === 0 ? (
        <Modal
          open={open}
          classNames={{
            modal: "w-[500px] h-[100px]",
          }}
          onClose={onCloseModal}
          center
        >
          <h2
            className={`${geistSemiBold.className} text-[20px] text-center mt-5`}
          >
            Please Write Essay to calculate Bands!
          </h2>
        </Modal>
      ) : (
        <Modal
          open={open}
          classNames={{
            modal: "w-[450px]",
          }}
          onClose={onCloseModal}
          center
        >
          <div className="flex mt-10 justify-center">
            <div className="relative flex items-center justify-center w-75 h-75">
              <svg className="absolute w-full h-full transform -rotate-90">
                <circle
                  cx="50%"
                  cy="50%"
                  r="44%"
                  stroke="currentColor"
                  stroke-width="12"
                  fill="transparent"
                  className={circleColor}
                />
                <circle
                  cx="50%"
                  cy="50%"
                  r="44%"
                  stroke="currentColor"
                  stroke-width="12"
                  stroke-dasharray="310 440"
                  // stroke-linecap="round"
                  fill="transparent"
                  className={textColor}
                />
              </svg>

              <div
                className={`flex items-center justify-center w-[72%] h-[72%] ${bgColor} rounded-full z-10 shadow-inner`}
              >
                <span
                  className={`${geistSemiBold.className} text-7xl text-(--white)`}
                >
                  {totalBand}
                </span>
              </div>
            </div>
          </div>

          <div></div>
          <h3
            className={`${geistSemiBold.className} text-3xl mt-10 text-center text-(--black)`}
          >
            Your Estimated Band
          </h3>
          <div className="flex flex-wrap gap-2 my-6 px-2.5">
            {writingTypes.map((types: WritingType, index: number) => {
              return (
                <div
                  key={index}
                  className={`${getBandBg(types.band)} 
          flex items-center px-4 py-1.5 
          rounded-full border border-gray-100/50 shadow-sm
          whitespace-nowrap transition-all`}
                >
                  <span
                    className={`${geistRegular.className} text-[14px] text-(--black)`}
                  >
                    {types.type}
                  </span>
                  <span
                    className={`ml-1 text-[14px] font-bold text-(--black)`}
                  >
                    ({types.band.toFixed(1)})
                  </span>
                </div>
              );
            })}
          </div>
          <div className="flex justify-center gap-5 mt-4">
            <button
              className={`${geistRegular.className} bg-(--white) w-[45%] border border-1 px-6 py-2 rounded-[10px] border-(--cloud-gray)`}
            >
              Go To Dashboard
            </button>
            <button
              className={`${geistRegular.className}} bg-(--violet) text-(--white) w-[45%] border border-1 px-6 py-2 rounded-[10px]`}
            >
              Detailed Report
            </button>
          </div>
        </Modal>
      )}
    </>
  );
}
