import { Box, Typography } from "@mui/material";
import { faqs } from "../constants";
import { FAQ } from "@/types";
import Accordions from "../layout/Accordion";

export default function FAQs() {
  return (
    <Box component="section" className="relative bottom-87.5 !h-[120px] pb-18">
      <Typography
        variant="h2"
        className="text-[56px] text-center bg-[linear-gradient(90deg,#000000_0%,rgba(102,102,102,0.59)_100%)] bg-clip-text text-transparent"
      >
        FAQs
      </Typography>
      <Box
        component="div"
        className="flex flex-col gap-3 max-w-174 mx-auto mt-10"
      >
        {faqs.map((faq: FAQ, index: number) => {
          return (
            <Box component="div" key={index} className="px-6 rounded-lg">
              <Accordions faq={faq} />
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
