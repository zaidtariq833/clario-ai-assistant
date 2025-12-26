"use client";

import { FAQ } from "@/types";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

type Props = {
  faq: FAQ;
};

export default function Accordions({ faq }: Props) {
  const [expanded, setExpanded] = useState(false);
  console.log(expanded, "expanded");
  return (
    <Accordion
      onChange={() => setExpanded(!expanded)}
      expanded={expanded}
      className="!bg-[#f5f6fc]"
      elevation={0}
    >
      <AccordionSummary
        expandIcon={expanded ? <CloseIcon /> : <AddIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <Typography variant="body1" className="text-[16px]">
          {faq.question}
        </Typography>
      </AccordionSummary>

      <AccordionDetails>
        <Typography variant="body1" className="text-[#4e4e4e] mt-4">
          {faq.answer}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}
