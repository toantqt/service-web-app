import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Box,
  IconButton,
  Typography,
} from "@material-ui/core";
import { Close } from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import "./modal.css";
const ModalSuccessComponent = (props) => {
  const history = useHistory();
  const handleClick = () => {
    history.push("/contact");
  };
  return (
    <Dialog open={props?.open} onClose={props?.handleClose} maxWidth="sm">
      <Box position="absolute" top={0} right={0}>
        <IconButton onClick={props?.handleClose} style={{ color: "white" }}>
          <Close />
        </IconButton>
      </Box>
      <DialogContent
        style={{
          textAlign: "center",
          height: "200px",
        }}
        className="mt-3"
      >
        <DialogTitle style={{ color: "white" }}>
          {" "}
          Cảm ơn bạn đã quan tâm đến Học viện Design24 <br /> Bạn có nhu cầu tư
          vấn?
        </DialogTitle>
        <div className="modal-btn">
          <a className="btn-yes" onClick={handleClick}>
            {" "}
            Có
          </a>
          <a className="ml-3 btn-no" onClick={props?.handleClose}>
            {" "}
            Không
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ModalSuccessComponent;
