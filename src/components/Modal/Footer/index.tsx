import { FC } from "react";
import { Button } from "@mui/material";

interface IFooter {
  onClose: () => void;
}
const Footer: FC<IFooter> = ({ onClose }) => {
  return (
    <Button
      variant="outlined"
      onClick={() => onClose()}
      sx={{ height: "30px" }}
    >
      Close
    </Button>
  );
};

export default Footer;
