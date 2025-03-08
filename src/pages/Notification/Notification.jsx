import React, { useEffect, useState } from "react";
import { Box, Typography, Avatar, IconButton } from "@mui/material";
import "./Notificatio.css";
import ClockIcon from '../../assets/notifications/clock.svg';
import DeleteIcon from '../../assets/notifications/delete.svg';

const Notification = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    fetch("/Apis/notifications.json")
      .then((res) => res.json())
      .then((data) => setNotifications(data))
      .catch((error) => console.error("Error fetching notifications:", error));
  }, []);

  const handleDelete = (index) => {
    setNotifications(notifications.filter((_, i) => i !== index));
  };

  return (
    <Box className="notifications-container">
      {notifications.map((notif, index) => (
        <Box key={index} className="notification-item">
          <Avatar src={notif.profileImage} alt={notif.user} className="profile-avatar" />
          <Box className="notification-content">
            <Typography className="user-name">{notif.user}</Typography>
            <Typography className="message">{notif.message}</Typography>
            <Typography className="timestamp"><img style={{marginRight:'10px'}} src={ClockIcon} /> {notif.timestamp}</Typography>
          </Box>
          <IconButton onClick={() => handleDelete(index)} color="error">
            <img src={DeleteIcon} />
          </IconButton>
        </Box>
      ))}
    </Box>
  );
};

export default Notification;
