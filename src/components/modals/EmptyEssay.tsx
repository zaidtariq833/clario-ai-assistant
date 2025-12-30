import { geistSemiBold } from "@/styles/fonts";
import { EmptyEssayProps } from "@/types";
import Modal from "react-responsive-modal";

export default function EmptyEssay({ open, onCloseModal }: EmptyEssayProps) {
  return (
    <Modal
      open={open}
      classNames={{
        modal: "w-[500px] h-[100px]",
      }}
      onClose={onCloseModal}
      center
    >
      <h2 className={`${geistSemiBold.className} text-[20px] text-center mt-5`}>
        Please Write Essay to calculate Bands!
      </h2>
    </Modal>
  );
}
