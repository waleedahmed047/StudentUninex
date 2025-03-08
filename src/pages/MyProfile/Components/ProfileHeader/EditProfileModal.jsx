import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Avatar,
  IconButton,
} from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";

const EditProfileModal = ({ open, onClose, profilePic, setProfilePic }) => {
  const handleProfilePicChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setProfilePic(URL.createObjectURL(file));
    }
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Edit Profile</DialogTitle>
      <DialogContent>
        <Avatar
          src={profilePic}
          sx={{ width: 100, height: 100, margin: "0 auto" }}
        />
        <IconButton component="label" sx={{ display: "block", margin: "10px auto", width:'fit-content' }}>
          <PhotoCamera /> Upload Picture
          <input type="file" hidden onChange={handleProfilePicChange} />
        </IconButton>
        <TextField
          fullWidth
          label="Name"
          defaultValue="Faizi Rahman"
          sx={{ marginBottom: 2 }}
        />
        <TextField
          fullWidth
          label="Status"
          defaultValue="Student"
          sx={{ marginBottom: 2 }}
        />
        <TextField
          fullWidth
          label="Study"
          defaultValue="B.Sc in CSE"
          sx={{ marginBottom: 2 }}
        />
        <TextField
          fullWidth
          label="Institute"
          defaultValue="Dhaka University"
          sx={{ marginBottom: 2 }}
        />
        <TextField
          fullWidth
          label="Gender"
          defaultValue="Male"
          sx={{ marginBottom: 2 }}
        />
        <TextField
          fullWidth
          label="Country"
          defaultValue="Bangladesh"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Cancel
        </Button>
        <Button variant="contained" onClick={onClose}>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditProfileModal;
