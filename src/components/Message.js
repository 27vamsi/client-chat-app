import React from 'react';

const Message = ({ content, sender, timestamp }) => {
    return (
        <div>
            <p><strong>{sender}</strong>: {content} <span>({new Date(timestamp * 1000).toLocaleString()})</span></p>
        </div>
    );
};

export default Message;
