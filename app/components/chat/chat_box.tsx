import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
    MainContainer,
    ChatContainer,
    MessageList,
    Message,
    MessageInput,
    ConversationHeader,
} from "@chatscope/chat-ui-kit-react";

import useChatMessages from "./use_chat_messages";

type ChatType = "bot" | "admin" | "seller";

interface ChatBoxProps {
    userId: string;
    targetId: string; // "bot" | adminId | sellerId
    type: ChatType;
    onClose: () => void;
}

export default function ChatBox({
    userId,
    targetId,
    type,
    onClose,
}: ChatBoxProps) {
    const { messages, sendMessage } = useChatMessages({
        userId,
        targetId,
        type,
    });

    const titleMap: Record<typeof type, string> = {
        bot: "Chatbot hỗ trợ",
        admin: "Nhân viên tư vấn",
        seller: "Người bán",
    };

    return (
        <div
            className="
        fixed bottom-5 right-24
        w-[350px] h-[480px]
        bg-white rounded-xl shadow-xl z-50
      "
        >
            <MainContainer>
                <ChatContainer>
                    <ConversationHeader>
                        <ConversationHeader.Content userName={titleMap[type]} />
                        <ConversationHeader.Actions>
                            <button
                                onClick={onClose}
                                className="text-red-500 text-sm"
                            >
                                ✕
                            </button>
                        </ConversationHeader.Actions>
                    </ConversationHeader>

                    <MessageList>
                        {(messages || []).map((msg) => (
                            <Message
                                key={msg.id}
                                model={{
                                    message: msg.text,
                                    sentTime: "just now",
                                    sender: msg.sender,
                                    direction:
                                        msg.sender === "user" ? "outgoing" : "incoming",
                                    position: "single",
                                }}
                            />
                        ))}
                    </MessageList>

                    <MessageInput
                        placeholder="Nhập tin nhắn..."
                        onSend={(text) => sendMessage(text, "user")}
                    />
                </ChatContainer>
            </MainContainer>
        </div>
    );
}
