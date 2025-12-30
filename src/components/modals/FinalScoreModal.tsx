import getColors from "@/helpers";
import { geistRegular, geistSemiBold } from "@/styles/fonts";
import { FinalScoreProps, WritingType } from "@/types";
import { useSelector } from "react-redux";
import Modal from "react-responsive-modal";
import NavigatorButtons from "@/components/ui/NavigatorButtons";
import { RootState } from "@/store/store";

export default function FinalScoreModal({
  open,
  onCloseModal,
  writingTypes,
}: FinalScoreProps) {
  const { totalBand } = useSelector(
    (state: RootState) => state.ieltsCalculate.ieltsScoreCalculate
  );

  const getBandBg = (band: number) => {
    if (band <= 4) return "bg-(--bad-score)";
    if (band <= 6) return "bg-(--lightest-yellow)";
    return "bg-(--good-score)";
  };

  const colors = getColors(totalBand);
  return (
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
              className={colors.circleColor}
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
              className={colors.textColor}
            />
          </svg>
          <div
            className={`flex items-center justify-center w-[72%] h-[72%] ${colors.bgColor} rounded-full z-10 shadow-inner`}
          >
            <span
              className={`${geistSemiBold.className} text-7xl text-(--white)`}
            >
              {totalBand}
            </span>
          </div>
        </div>
      </div>
      <h3
        className={`${geistSemiBold.className} text-3xl mt-10 text-center text-(--black)`}
      >
        Your Estimated Band
      </h3>
      <div className="flex flex-wrap gap-2 my-6 px-2.5">
        {writingTypes.map((types: WritingType, index: number) => {
          return (
            <div key={index} className={`${getBandBg(types.band)} types-score`}>
              <span
                className={`${geistRegular.className} text-[14px] text-(--black)`}
              >
                {types.type}
              </span>
              <span className={`ml-1 text-[14px] font-bold text-(--black)`}>
                ({types.band.toFixed(1)})
              </span>
            </div>
          );
        })}
      </div>
      <NavigatorButtons />
    </Modal>
  );
}
