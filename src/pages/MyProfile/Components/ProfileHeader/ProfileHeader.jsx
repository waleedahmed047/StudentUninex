import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  Avatar,
  IconButton,
  Grid,
} from "@mui/material";
import EditProfileModal from "./EditProfileModal";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import "./ProfileHeader.css";

const ProfileHeader = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [coverImage, setCoverImage] = useState("https://images.pexels.com/photos/573299/pexels-photo-573299.jpeg?cs=srgb&dl=pexels-bertellifotografia-573299.jpg&fm=jpg");
  const [profilePic, setProfilePic] = useState("https://t3.ftcdn.net/jpg/03/28/77/18/360_F_328771873_4BLjs8Trc7aUmoeUmFmtLAjJaVGCnlmi.jpg");

  const handleCoverImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setCoverImage(URL.createObjectURL(file));
    }
  };

  const handleEditClick = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

  return (
    <Box className="profile-header">
      <Box
        className="cover-image"
        style={{
          backgroundImage: `url(${coverImage})`,
        }}
      >
        <IconButton component="label" className="edit-cover-icon">
          <PhotoCamera />
          <input type="file" hidden onChange={handleCoverImageChange} />
        </IconButton>
      </Box>

      <Grid container spacing={2} alignItems="center" className="profile-info">
        <Grid item>
          <Avatar src={profilePic} className="header-profile-picture" />
        </Grid>
        <Grid item xs>
          <Typography variant="h5" className="profile-name">
            Faizi Rahman
          </Typography>
          <Typography variant="body1" className="additional-info-data-title">
            Student
          </Typography>
        </Grid>
        <Grid item>
          <Button variant="contained" className="edit-profile-button" onClick={handleEditClick}>
            Edit Profile
          </Button>
        </Grid>
      </Grid>
      <div className="additional-info-main">
        <Grid container spacing={2} className="additional-info">
          <Grid item xs={3}>
            <Typography variant="subtitle2" className="additional-info-data-title">Study:</Typography>
            <Typography className="additional-info-data">B.Sc in CSE</Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="subtitle2" className="additional-info-data-title">Institute:</Typography>
            <Typography className="additional-info-data">Dhaka University</Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="subtitle2" className="additional-info-data-title">Gender:</Typography>
            <Typography className="additional-info-data">Male</Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="subtitle2" className="additional-info-data-title">Country:</Typography>
            <Typography className="additional-info-data">Bangladesh</Typography>
          </Grid>
        </Grid>
      </div>
      {isModalOpen && (
        <EditProfileModal
          open={isModalOpen}
          onClose={handleModalClose}
          profilePic={profilePic}
          setProfilePic={setProfilePic}
        />
      )}
    </Box>
  );
};

export default ProfileHeader;
