import { useState } from "react";
import { Button } from "@mui/material";

import Modal from "./components/Modal";
import Body from "./components/Modal/Body";
import Footer from "./components/Modal/Footer";

const App = () => {
  const [open, setOpen] = useState(false);

  const openModel = () => setOpen(true);
  const closeModel = () => setOpen(false);

  return (
    <>
      <Modal
        open={open}
        title="Modal Title"
        body={<Body />}
        footer={<Footer onClose={closeModel} />}
        onClose={closeModel}
      />
      <Button variant="contained" onClick={openModel}>
        Open Modal
      </Button>
    </>
  );
};

export default App;
