import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import UploadForm from "./UploadForm";

function Uploader(props) {
    const [openModal, setOpenModal] = useState(false);
  const closeModal = ()=>{
    setOpenModal(false);
  }
  const refresh = ()=>{
    props.refresh();
  }
  return (
    <div className="App">
         <Button onClick={() => setOpenModal(true)}>Upload</Button>
 
    <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Terms of Service</Modal.Header>
        <Modal.Body>
          <UploadForm closeModal={closeModal} refresh={refresh}></UploadForm>
        </Modal.Body>
        <Modal.Footer>
          {/* <Button onClick={() => setOpenModal(false)}>I accept</Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Decline
          </Button> */}
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Uploader;




 
