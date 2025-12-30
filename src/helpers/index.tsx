export default function getColors(totalBands: string) {
  if (Math.round(Number(totalBands)) <= 4) {
    return {
      bgColor: "bg-(--flaming-red)",
      textColor: "text-(--flaming-red)",
      circleColor: "text-(--lightest-red)",
    };
  } else if (Math.round(Number(totalBands)) <= 6) {
    return {
      bgColor: "bg-(--dim-yellow)",
      textColor: "text-(--dim-yellow)",
      circleColor: "text-(--lightest-yellow)",
    };
  } else {
    return {
      bgColor: "bg-(--forest-green)",
      textColor: "text-(--forest-green)",
      circleColor: "text-(--lightest-green)",
    };
  }
}
