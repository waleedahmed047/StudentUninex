import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Modal,
  Box,
  TextField,
  Button,
} from "@mui/material";
import SearchImage from "../../assets/logo/Magnifer.svg";
import AttachImage from "../../assets/logo/attach.svg";
import "./Support.css";
import { Link } from "react-router-dom";

const Support = () => {
  const [tickets, setTickets] = useState([]);
  const [open, setOpen] = useState(false);
  const [newTicket, setNewTicket] = useState({
    ticketNo: "",
    title: "",
    description: "",
    attachment: null,
  });

  useEffect(() => {
    fetch("/Apis/supportTickets.json")
      .then((response) => response.json())
      .then((data) => setTickets(data))
      .catch((error) => console.error("Error fetching tickets:", error));
  }, []);

  const handleOpen = () => {
    const randomTicketNo = Math.floor(1000 + Math.random() * 9000).toString();
    setNewTicket({ ...newTicket, ticketNo: randomTicketNo });
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTicket({ ...newTicket, [name]: value });
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    setNewTicket({ ...newTicket, attachment: file });
  };

  const handleSubmit = () => {
    console.log("New Ticket Submitted:", newTicket);
    if (newTicket.attachment) {
      console.log("Uploaded File:", newTicket.attachment.name);
    }
    handleClose();
  };

  return (
    <div className="support-main">
      <div className="support-header">
        <div className="support-header-text-area">
          <h1>Support Ticket</h1>
          <p>Please feel free to open a ticket if you are facing any issue</p>
        </div>
        <div>
          <Button className="support-header-button-area" onClick={handleOpen}>
            New Ticket
          </Button>
        </div>
      </div>
      <div className="support-table-section">
        <div className="support-table-section-header">
          <div className="support-table-section-header-text">
            <h1>Latest Support History</h1>
            <p>Here is your most recent history</p>
          </div>
          <div className="support-table-section-header-search">
            <div className="support-table-searchbar">
              <img src={SearchImage} alt="search-image" />
              <input placeholder="Search" />
            </div>
          </div>
        </div>
        <div className="support-table-section-content">
          <TableContainer className="support-table">
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell style={{ fontWeight: "bold", color: "#00CEF3" }}>
                    Ticket No.
                  </TableCell>
                  <TableCell style={{ fontWeight: "bold", color: "#00CEF3" }}>
                    Subject
                  </TableCell>
                  <TableCell style={{ fontWeight: "bold", color: "#00CEF3" }}>
                    Description
                  </TableCell>
                  <TableCell style={{ fontWeight: "bold", color: "#00CEF3" }}>
                    Date
                  </TableCell>
                  <TableCell style={{ fontWeight: "bold", color: "#00CEF3" }}>
                    Status
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tickets.map((ticket) => (
                  <TableRow key={ticket.ticketNo}>
                    <TableCell
                      style={{
                        color: "#00CEF3",
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                    >
                      <Link to={`/ticket/${ticket.ticketNo}`}  style={{ color: "#00CEF3", textDecoration: "none" }} >
                      {ticket.ticketNo}
                      </Link>
                    </TableCell>
                    <TableCell className="ticket-table-text">
                      {ticket.subject}
                    </TableCell>
                    <TableCell className="ticket-table-text">
                      {ticket.description}
                    </TableCell>
                    <TableCell className="ticket-table-text">
                      {ticket.date}
                    </TableCell>
                    <TableCell
                      style={{
                        color: ticket.status === "Approved" ? "green" : "red",
                      }}
                    >
                      {ticket.status}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>

      {/* Modal for New Ticket */}
      <Modal open={open} onClose={handleClose}>
        <Box
          className="support-modal"
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 800,
            boxShadow: 24,
            p: 4,
            borderRadius: "8px",
          }}
        >
          <h2 className="support-title">New Support Ticket</h2>
          <p className="support-description">
            Fill up all the information here, then click submit button
          </p>
          <h3 className="support-description-title">
            Ticket No:{" "}
            <span style={{ color: "green" }}>{newTicket.ticketNo}</span>
          </h3>
          <TextField
            label="Title"
            name="title"
            variant="outlined"
            fullWidth
            className="custom-input"
            size="small"
            margin="normal"
            onChange={handleInputChange}
          />
          <TextField
            label="Description"
            name="description"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            margin="normal"
            className="custom-input"
            size="small"
            onChange={handleInputChange}
          />
          <div className="support-attachment-section">
            <Button
              component="label"
              variant="outlined"
              color="primary"
              className="support-attach-file"
            >
              <img className="icon" src={AttachImage} alt="attach" />
              Add Attachment
              <input type="file" hidden onChange={handleFileUpload} />
            </Button>
            {newTicket.attachment && (
              <p style={{ marginTop: "8px", color: "#555" }}>
                Attached: {newTicket.attachment.name}
              </p>
            )}
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleSubmit}
              className="support-submit-button"
            >
              Submit
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default Support;
