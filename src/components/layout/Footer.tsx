import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { footerPages } from "../constants";

export default function Footer() {
  return (
    <footer>
      <Box
        component="div"
        className="flex items-center justify-between py-5.5 px-[48px]"
      >
        <Image
          src={"/assets/images/logo.png"}
          width={117}
          height={36}
          alt="logo"
        />
        <Box component="div" className="flex gap-2.5">
          {footerPages?.map((footer: string, index: number) => {
            return (
              <Typography className="text-[16px]" variant="body1" key={index}>
                {footer}
              </Typography>
            );
          })}
        </Box>
      </Box>
    </footer>
  );
}
