import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Modal,
  Box,
  Typography,
  Avatar,
} from "@mui/material";
import "./contract.css";
import Handshake from "../../assets/StudentProfile/handShake.svg";
const ContractsTable = () => {
  const [contracts, setContracts] = useState([]);
  const [selectedContract, setSelectedContract] = useState(null);
  const [open, setOpen] = useState(false);

  const fetchContracts = async () => {
    try {
      const response = await fetch("Apis/contracts.json");
      const data = await response.json();
      setContracts(data);
    } catch (error) {
      console.error("Error fetching contracts:", error);
    }
  };

  useEffect(() => {
    fetchContracts();
  }, []);

  const handleOpen = (contract) => {
    setSelectedContract(contract);
    setOpen(true);
  };

  const handleClose = () => {
    setSelectedContract(null);
    setOpen(false);
  };

  return (
    <div className="contract-main">
      <TableContainer className="contract-main-table">
        <Table>
          <TableHead className="contract-header">
            <TableRow>
              <TableCell>
                <h1 className="contract-table-header-row">Company</h1>
              </TableCell>
              <TableCell>
                <h1 className="contract-table-header-row">Contract Name</h1>
              </TableCell>
              <TableCell>
                <h1 className="contract-table-header-row">Contract Duration</h1>
              </TableCell>
              <TableCell>
                <h1 className="contract-table-header-row">Amount</h1>
              </TableCell>
              <TableCell>
                <h1 className="contract-table-header-row">Status</h1>
              </TableCell>
              <TableCell>
                <h1 className="contract-table-header-row">Action</h1>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {contracts.map((contract) => (
              <TableRow key={contract.id}>
                <TableCell>
                  <div className="company-cell">
                    <Avatar
                      src={contract.companyImage}
                      alt="profile"
                      className="contract-profile-image"
                    />
                    <h1 className="contract-profile-image-text">
                      {contract.companyName}
                    </h1>
                  </div>
                </TableCell>
                <TableCell>
                  <h1 className="contract-table-data">
                    {contract.contractName}
                  </h1>
                </TableCell>
                <TableCell>
                  <h1 className="contract-table-data">
                    {contract.contractDuration}
                  </h1>
                </TableCell>
                <TableCell>
                  <h1 className="contract-table-data">{contract.amount}</h1>
                </TableCell>
                <TableCell
                  style={{
                    color: contract.status === "Active" ? "green" : "red",
                  }}
                >
                  {contract.status}
                </TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    onClick={() => handleOpen(contract)}
                    className="contract-detail-button"
                  >
                    Details
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Modal open={open} onClose={handleClose}>
        <Box className="modal-box">
          {selectedContract && (
            <div className="selected-contract">
              <div className="selected-contract-companyName">
                <strong>Company</strong>
                <div className="selected-contract-title">
                  <Avatar
                    className="contract-profile-image"
                    src={selectedContract.companyImage}
                  />
                  {selectedContract.companyName}
                </div>
              </div>
              <div className="selected-contract-type-duration-amount">
                <div className="selected-contract-type">
                  <p>Contract Type</p>
                  <div className="selectedType">
                    <Avatar src={Handshake} alt="handshake" />
                    <p>{selectedContract.contractType}</p>
                  </div>
                </div>
                <div className="selected-contract-duration">
                  <p>Contract Duration</p>
                  <div className="selectedDuration">
                    <Avatar src={Handshake} alt="handshake" />
                    <p>{selectedContract.contractDuration}</p>
                  </div>
                </div>
                <div className="selected-contract-amount">
                  <p>Contract Amount</p>
                  <div className="selectedAmount">
                    <Avatar src={Handshake} alt="handshake" />
                    <p>{selectedContract.amount}</p>
                  </div>
                </div>
              </div>
              <div className="selected-contract-detail-modal">
                <Typography
                  variant="body1"
                  sx={{ mt: 2 }}
                  className="selected-contract-subTitle-title"
                >
                  <h1 className="selected-contract-subTitle">
                    Contract Title:
                  </h1>
                  <p className="contract-uili">
                    {selectedContract.contractTitle}
                  </p>
                </Typography>
                <Typography variant="body1">
                  <h1 className="selected-contract-subTitle">
                    Contract Description:
                  </h1>
                  <p className="contract-uili">Features:</p>
                  <ul>
                    {selectedContract.contractDescription.features.map(
                      (feature, index) => (
                        <li className="contract-uili" key={index}>
                          {feature}
                        </li>
                      )
                    )}
                  </ul>
                </Typography>
              </div>
              <div
                className="selected-contract-action-buttons"
                style={{ display: "flex", gap: "10px" }}
              >
                <Button
                  variant="outlined"
                  color="warning"
                  onClick={() => console.log("Rejected")}
                  size="small"
                  className="reject-button"
                >
                  Rejected
                </Button>
                <Button
                  variant="contained"
                  onClick={() => console.log("Approved")}
                  size="small"
                  className="approve-button"
                >
                  Approved
                </Button>
              </div>
            </div>
          )}
        </Box>
      </Modal>
    </div>
  );
};

export default ContractsTable;
