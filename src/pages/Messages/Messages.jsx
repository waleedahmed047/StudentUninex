import React, { useState, useEffect } from "react";
import "./Messages.css";
import MessagesLogo from "../../assets/messages/messageLogo.svg";
import SendButton from "../../assets/messages/sendbutton.svg";
import AttachButton from "../../assets/messages/attachButton.svg";
import { Avatar, Divider, Typography } from "@mui/material";

const Messages = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMember, setSelectedMember] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [members, setMembers] = useState([]);

  useEffect(() => {
    fetch("/Apis/message.json")
      .then((response) => response.json())
      .then((data) => setMembers(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const filteredMembers = members.filter((member) =>
    member.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleMemberSelect = (member) => {
    setSelectedMember(member);
    setMessages([]); // Clear previous chat when a new member is selected
  };

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { text: newMessage, sender: "You" }]);
      setNewMessage("");
    }
  };

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      setMessages([...messages, { text: `File: ${file.name}`, sender: "You" }]);
    }
  };

  return (
    <div className="messages-main">
      <div className="messages-left">
        {selectedMember ? (
          <div className="chat-container">
            <div className="chat-header">
              <Avatar
                className="selected-student-profile"
                src={selectedMember.profile}
                alt={selectedMember.name}
              />
              <h3>{selectedMember.name}</h3>
            </div>
            <div className="chat-messages">
              {messages.length > 0 ? (
                messages.map((message, index) => (
                  <div
                    key={index}
                    className={`chat-message ${
                      message.sender === "You" ? "chat-sender" : "chat-receiver"
                    }`}
                  >
                    <p>{message.text}</p>
                  </div>
                ))
              ) : (
                <p className="no-messages">Start the conversation</p>
              )}
            </div>
            <div className="chat-input">
              <label className="file-attach-button">
                <img className="icon" src={AttachButton} alt="attach File" />
                <input
                  type="file"
                  onChange={handleFileSelect}
                  style={{ display: "none" }}
                />
              </label>
              <input
                type="text"
                placeholder="Type a message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
              />
              <button onClick={handleSendMessage}>
                <img src={SendButton} alt="sentButton" />
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="messageTo-header">
              <p className="messageTo-text">To:</p>
              <input
                className="messageTo-input"
                placeholder="Search members..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Divider flexItem className="divider" orientation="horizontal" />
            <div className="message-search-result">
              {searchTerm.trim() === "" ? (
                <div className="messages-logo">
                  <img src={MessagesLogo} alt="Messages Logo" />
                </div>
              ) : filteredMembers.length > 0 ? (
                <ul className="member-list">
                  {filteredMembers.map((member) => (
                    <li
                      key={member.id}
                      className="member-item"
                      onClick={() => handleMemberSelect(member)}
                    >
                      {member.name}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="no-results">No results found</p>
              )}
            </div>
          </div>
        )}
      </div>

      <div className="messages-right">
        <div className="messages-list-header">
          <h1>Messages</h1>
          <input placeholder="search...." />
        </div>
        <div className="messages-list-addedMember">
          <div className="message-list">
            <Typography className="all-members-students">All</Typography>
            {members.map((member, index) => (
              <div
                key={index}
                className="message-item"
                onClick={() => handleMemberSelect(member)}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "row",
                  }}
                >
                  <Avatar
                    src={member.profile}
                    alt={member.name}
                    className="profile-pic"
                  />
                  <h2>{member.name}</h2>
                </div>
                <p>{member.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
