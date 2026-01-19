import { useState } from "react";
import ChatBox from "./chat_box";
import ChatIcon from "./chat_icon";

type ChatMode = "bot" | "admin" | "seller" | null;

export default function ChatFloating() {
    const [openMode, setOpenMode] = useState<ChatMode>(null);
    const userId = '6dS1xiSp9ROVydlECyI3';

    const getTargetId = (type: ChatMode) => {
        switch (type) {
            case "bot":
                return "bot";
            case "admin":
                return "admin";
            case "seller":
                return "seller";
            default:
                return "";
        }
    };

    return (
        <>
            <div className="fixed bottom-5 right-5 flex flex-col gap-3 z-50">
                <ChatIcon
                    onClick={() =>
                        setOpenMode(openMode === "bot" ? null : "bot")
                    }
                >
                    🤖
                </ChatIcon>

                <ChatIcon
                    className="bg-green-600"
                    onClick={() => {
                        console.log('hello');

                        setOpenMode(openMode === "admin" ? null : "admin")
                    }
                    }
                >
                    👨‍💼
                </ChatIcon>
            </div>

            {openMode && (
                <ChatBox
                    userId={userId}
                    targetId={getTargetId(openMode)}
                    type={openMode}
                    onClose={() => setOpenMode(null)}
                />
            )}
        </>
    );
}
