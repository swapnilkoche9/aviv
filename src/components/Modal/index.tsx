import { FC, ReactNode } from "react";
import {
  Box,
  styled,
  Modal as MuiModal,
  Fade,
  Typography,
  Backdrop,
} from "@mui/material/";

import useIsMobile from "../../hooks/useIsMobile";

interface IModal {
  open: boolean;
  title: string;
  body: ReactNode;
  footer: ReactNode;
  onClose: () => void;
}

const Container = styled(Box, {
  shouldForwardProp: (prop) => prop !== "isMobile",
})<{ isMobile?: boolean }>(({ isMobile }) => ({
  display: "flex",
  flexDirection: "column",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: isMobile ? "100%" : "400px",
  height: isMobile ? "100%" : "300px",
  backgroundColor: "lightgray",
  border: "2px solid #000",
  boxShadow: "24px",
  padding: 4,
}));

const Modal: FC<IModal> = ({ open, title, body, footer, onClose }) => {
  const isMobile = useIsMobile();

  const handleClose = () => onClose();

  return (
    <MuiModal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={open}>
        <Container isMobile={isMobile}>
          <Typography
            id="modal-title"
            data-testid="modal-title"
            variant="h6"
            component="h2"
            sx={{ display: "flex", justifyContent: "center", flex: 1 }}
          >
            {title}
          </Typography>
          <Box
            id="modal-description"
            sx={{
              mt: 2,
              height: "200px",
              display: "flex",
              overflowY: "scroll",
              flex: "5",
              padding: "10px",
            }}
          >
            {body}
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
              flex: 1,
            }}
          >
            {footer}
          </Box>
        </Container>
      </Fade>
    </MuiModal>
  );
};

export default Modal;
