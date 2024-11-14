// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Chat {
    struct Message {
        address sender;
        address recipient;
        string content;
        uint256 timestamp;
    }

    Message[] private messages;

    // Event to emit when a message is sent
    event MessageSent(address indexed sender, address indexed recipient, string content, uint256 timestamp);

    // Function to send a message to a specific recipient
    function sendMessage(address _recipient, string memory _content) public {
        require(_recipient != msg.sender, "Cannot send message to yourself.");
        
        Message memory newMessage = Message({
            sender: msg.sender,
            recipient: _recipient,
            content: _content,
            timestamp: block.timestamp
        });

        messages.push(newMessage);

        emit MessageSent(msg.sender, _recipient, _content, block.timestamp);
    }

    // Function to retrieve messages for a specific user
    function getMessages(address _user) public view returns (Message[] memory) {
        uint256 messageCount = 0;

        // Count messages relevant to the user
        for (uint256 i = 0; i < messages.length; i++) {
            if (messages[i].recipient == _user || messages[i].sender == _user) {
                messageCount++;
            }
        }

        // Retrieve messages relevant to the user
        Message[] memory userMessages = new Message[](messageCount);
        uint256 index = 0;

        for (uint256 i = 0; i < messages.length; i++) {
            if (messages[i].recipient == _user || messages[i].sender == _user) {
                userMessages[index] = messages[i];
                index++;
            }
        }

        return userMessages;
    }
}
