import { geistSemiBold } from "@/styles/fonts";
import { EmptyEssayProps } from "@/types";
import Modal from "react-responsive-modal";

export default function EmptyEssay({ open, onCloseModal }: EmptyEssayProps) {
  return (
    <Modal
      open={open}
      classNames={{
        modal: "w-[31.25rem] h-[6.25rem]",
      }}
      onClose={onCloseModal}
      center
    >
      <h2 className={`${geistSemiBold.className} text-xl text-center mt-5`}>
        Please Write Essay to calculate Bands!
      </h2>
    </Modal>
  );
}
