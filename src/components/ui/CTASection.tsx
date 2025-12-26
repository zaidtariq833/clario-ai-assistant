import { Box, Typography } from "@mui/material";

export default function CTASection() {
  return (
    <Box component="section" className="">
      <Typography
        variant="h2"
        className="max-w-190.25 !mx-auto text-center text-[64px]"
      >
        Ready to Improve Your IELTS Writing?
      </Typography>
      <Typography
        variant="body1"
        className="text-[#535457] text-center mt-4 text-[24px]"
      >
        Start practicing with AI - free, fast and effective.
      </Typography>
      <button className="flex justify-center mt-14 mx-auto bg-[#000000] py-4 px-7 text-[#ffffff] rounded-[48px]">
        Start Writing for free
      </button>
    </Box>
  );
}
