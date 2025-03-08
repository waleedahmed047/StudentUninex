import React, { useState, useEffect } from "react";
import "./TicketDetail.css";
import { useParams, useNavigate } from "react-router-dom";
import { Avatar, Typography } from "@mui/material";
import EditIcon from '../../assets/support/edit.svg';
import DocumentIcon from '../../assets/support/document.svg'
const TicketDetails = () => {
    const [isReplying, setIsReplying] = useState(false);
    const [replyText, setReplyText] = useState("");
    const [comments, setComments] = useState([]);
    const [ticket, setTicket] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        fetch("/Apis/supportTickets.json")
            .then((response) => response.json())
            .then((data) => {
                console.log("Tickets Data:", data);
                const selectedTicket = data?.find((t) => t.ticketNo.toString() === id);
                setTicket(selectedTicket || {});
                console.log('selected Ticket:', selectedTicket);
            })
            .catch((error) => console.error("Error fetching ticket:", error));
    }, [id]); 

    useEffect(() => {
        fetch("/Apis/comments.json")
            .then((response) => response.json())
            .then((data) => {
                console.log("Comments Data:", data);
                setComments(data?.comments || []);
            })
            .catch((error) => console.error("Error fetching comments:", error));
    }, []);

    if (!ticket) {
        return <Typography>Loading ticket details...</Typography>;
    }

    return (
        <div className="ticket-container">
            <div className="ticket-left">
                <Typography className="tcket-header">
                    Ticket : {ticket?.ticketNo || "N/A"}
                </Typography>
                <p className="ticket-subtitle">{ticket?.description || "No description"}</p>

                {ticket.status === "Closed" && (
                    <div className="ticket-warning">
                        This ticket is closed. You may reply to reopen it.
                    </div>
                )}

                <button className="reply-button" onClick={() => setIsReplying(!isReplying)}>
                    <img src={EditIcon} alt="EditIcon" />
                    Reply
                </button>

                {isReplying && (
                    <div className="reply-box">
                        <textarea
                            placeholder="Write your reply..."
                            value={replyText}
                            onChange={(e) => setReplyText(e.target.value)}
                        />
                        <button className="send-button">Send</button>
                    </div>
                )}

                {/* Comments Section */}
                <div className="comments-section">
                    <h3>Comments</h3>
                    {comments.length === 0 ? (
                        <p>No comments available.</p>
                    ) : (
                        comments.map((comment, index) => (
                            <div className="comment" key={index}>
                                <div className="comment-inner-content" >
                                    <div className="comment-header">
                                        <Avatar src={comment.profile} />
                                        <div className="comment-header-inner" >
                                            <strong>{comment?.user || "Unknown"}</strong>{" "}
                                            <span className="comment-sub-title" style={{ fontSize: '12px' }}>({comment?.role || "N/A"})</span>
                                        </div>
                                        <span className="comment-sub-title" style={{ marginLeft: 'auto' }} > {comment?.timestamp || "N/A"}</span>
                                    </div>
                                    <p className="comment-content" >{comment?.message || "No message available"}</p>
                                    {comment.attachments?.length > 0 && (
                                        <div className="attachments">
                                            {comment.attachments.map((file, i) => (
                                                <div key={i} className="attachment">
                                                    <img src={DocumentIcon} /> {file}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>

            <div className="ticket-right">
                <div className="ticket-info">
                    <div className="ticket-name-header" >
                        <h3>Ticket Information</h3>
                    </div>
                    <p><strong>Requester:</strong> {ticket?.requester || "N/A"}</p>
                    <p>
                        <strong>Status:</strong>{" "}
                        <span className={`status-${ticket?.status?.toLowerCase() || "unknown"}`}>
                            {ticket?.status || "Unknown"}
                        </span>
                    </p>
                    <p><strong>Created On:</strong> {ticket?.createdOn || "N/A"}</p>
                    <p><strong>Latest Update:</strong> {ticket?.latestUpdate || "N/A"}</p>
                    <p><strong>Last Replier:</strong> {ticket?.lastReplier || "N/A"}</p>
                    <p><strong>Total Replies:</strong> {ticket?.totalReplies || 0}</p>
                </div>

                {/* File Shared */}
                <div className="file-shared">
                    <div className="ticket-name-header" >
                        <h3>File Shared</h3>
                    </div>
                    {ticket.files?.length > 0 ? (
                        ticket.files.map((file, index) => (
                            <p className="file-shared-doc" key={index}>
                                <img src={DocumentIcon} /> {file.name} - Shared by {file.sharedBy} on {file.date}
                            </p>
                        ))
                    ) : (
                        <p>No files shared.</p>
                    )}
                </div>

                {/* Action Buttons */}
                <div className="ticket-buttons">
                    <button className="reply-right-button">Reply</button>
                    <button className="close-button">Close</button>
                </div>
            </div>
        </div>
    );
};

export default TicketDetails;
