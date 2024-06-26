import { FiPlus, FiX } from "react-icons/fi";
import { Container } from "./styles";

export function NoteItem({ $isnew, value, onClick, ...rest }) {
  return (
    <Container $isnew={$isnew}>
      <input type="text" value={value} readOnly={!$isnew} {...rest} />
      <button
        onClick={onClick}
        type="button"
        className={$isnew ? "button-add" : "button-delete"}>
        {$isnew ? <FiPlus /> : <FiX />}
      </button>
    </Container>
  );
}
