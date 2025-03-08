import React, { useState } from "react";
import {
  Modal,
  Box,
  Button,
  TextField,
  Typography,
  Avatar,
} from "@mui/material";
import "./JobApplyModal.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import ProfileImage from "../../assets/dashboard/profileImage.svg";
const JobApplyModal = ({ open, onClose, jobTitle }) => {
  const [step, setStep] = useState(1);
  const [phone, setPhone] = useState("");
  const [fileName, setFileName] = useState("");

  const handleNextStep = () => {
    if (step === 1) {
      setStep(2);
    }
  };

  const handleBackStep = () => {
    if (step === 2) {
      setStep(1);
    }
  };

  const handleSubmit = () => {
    setStep(3);
  };

  const resetAndClose = () => {
    setStep(1);
    onClose();
  };
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };

  return (
    <Modal open={open} onClose={resetAndClose}>
      <Box
        className="job-apply-modal-main"
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          boxShadow: 24,
          p: 4,
          width: "40%",
          borderRadius: "8px",
        }}
      >
        {step === 1 && (
          <div className="job-apply-modal">
            <div className="job-apply-modal-header">
              Job Apply to <h1>{jobTitle}</h1>
            </div>
            <div className="job-apply-contact">
              <h1>Contact Info</h1>
              <div className="job-apply-profile-image">
                <Avatar
                  sx={{ width: "100px", height: "100px" }}
                  src={ProfileImage}
                  alt="image"
                />
                <div className="job-apply-profile-image-detail">
                  <h2>Faizi Rahaman</h2>
                  <p>Frontend Developer</p>
                </div>
              </div>
            </div>
            <div className="phone-input-container">
              <label className="phone-input-label">Phone Number</label>
              <PhoneInput
                country={"pk"}
                value={phone}
                onChange={(value) => setPhone(value)}
                inputStyle={{}}
                buttonStyle={{}}
                dropdownStyle={{}}
                containerClass="phone-input-wrapper"
                inputClass="phone-input-field"
                buttonClass="phone-input-button"
                dropdownClass="phone-input-dropdown"
              />
            </div>
            <TextField
              label="Email"
              fullWidth
              margin="normal"
              className="custom-input"
              size="small"
            />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                marginTop: 2,
              }}
            >
              <Button
                variant="contained"
                component="label"
                sx={{ backgroundColor: "#00CEF3", boxShadow: "none" }}
              >
                Upload Resume
                <input type="file" hidden onChange={handleFileChange} />
              </Button>
              {fileName && (
                <Typography variant="body2" className="modal-file-name-job">
                  {fileName}
                </Typography>
              )}
            </Box>
            <div style={{ textAlign: "right", marginTop: "20px" }}>
              <Button
                variant="contained"
                onClick={handleNextStep}
                sx={{ backgroundColor: "#00CEF3", boxShadow: "none" }}
              >
                Next
              </Button>
            </div>
          </div>
        )}
        {step === 2 && (
          <div>
            <div className="job-apply-modal-header">
              Job Apply to <h1>{jobTitle}</h1>
            </div>
            <div className="job-apply-modal-age">
              <label>What is your age?</label>
              <TextField
                className="custom-input"
                label="Age"
                fullWidth
                margin="normal"
              />
              <label>Your expected salary?</label>
              <TextField
                className="custom-input"
                label="Salary"
                fullWidth
                margin="normal"
              />
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "20px",
              }}
            >
              <Button
                variant="outlined"
                onClick={handleBackStep}
                sx={{ borderColor: "#00CEF3", color: "#00CEF3" }}
              >
                Back
              </Button>
              <Button
                variant="contained"
                onClick={handleSubmit}
                sx={{ backgroundColor: "#00CEF3" }}
              >
                Submit
              </Button>
            </div>
          </div>
        )}
        {step === 3 && (
          <div>
            <h2 className="successfully-message">
              Successfully submitted your application!
            </h2>
            <div style={{ textAlign: "center", marginTop: "20px" }}>
              <Button
                variant="contained"
                onClick={resetAndClose}
                sx={{ backgroundColor: "#00CEF3" }}
              >
                Close
              </Button>
            </div>
          </div>
        )}
      </Box>
    </Modal>
  );
};

export default JobApplyModal;
