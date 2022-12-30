import { Card, CardContent, Dialog, DialogContent, Modal, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import IMAGES from "../assets";

function CardComponent({ id }) {
    const [showModal, setShowModal] = useState(false)

    // open the image modal and display the image
    const handleCardClick = () => {
        setShowModal(true)
    }

    const handleClose = () => {
        setShowModal(false)
    }

    useEffect(() => {
        console.log(IMAGES)
    },[IMAGES])


  return (
    <>
    <Dialog
  open={showModal}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
  fullWidth={true}
        maxWidth={'lg'}
>
<DialogContent sx={{objectFit:'contain'}}>
<div className="image-container">
 <img src={IMAGES[id-1]} alt={`selected picture ${id}`}></img>
</div>
</DialogContent>
</Dialog>
      <Card className="image-selection-card" onClick={handleCardClick}>
        <CardContent>
          <Typography className="image-selection-text" variant="h2" sx={{}}>
            {id.toString().padStart("2", "0")}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}

export default CardComponent;
