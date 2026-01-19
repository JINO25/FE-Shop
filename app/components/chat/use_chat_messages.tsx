import { useEffect, useState } from "react";
import {
    addDoc,
    collection,
    onSnapshot,
    query,
    where,
    serverTimestamp,
    setDoc,
    doc,
    getDoc,
    orderBy,
} from "firebase/firestore";
import { db } from "~/config/firebase";

export type ChatSender = "user" | "bot" | "admin";

export interface ChatMessage {
    id: string;
    text: string;
    sender: ChatSender;
    createdAt?: any;
}

interface ChatTarget {
    userId: string;
    targetId: string; // bot | adminId | sellerId
    type: "bot" | "admin" | "seller";
}

export default function useChatMessages({
    userId,
    targetId,
    type,
}: ChatTarget) {
    const [messages, setMessages] = useState<ChatMessage[]>();

    const participants = [userId, targetId].sort();
    const conversationId = participants.join("_");

    const conversationRef = doc(db, "conversations", conversationId);
    const messageRef = collection(conversationRef, "messages");

    const initConversation = async () => {
        const snap = await getDoc(conversationRef);
        if (!snap.exists()) {
            await setDoc(conversationRef, {
                conversationId,
                participants,
                type,
                createdAt: serverTimestamp(),
            });
        }
    };

    useEffect(() => {
        initConversation();

        const q = query(messageRef, orderBy("createdAt", "asc"));
        return onSnapshot(q, snap => {
            setMessages(
                snap.docs.map(d => ({
                    id: d.id,
                    ...(d.data() as Omit<ChatMessage, "id">),
                }))
            );
        });
    }, [conversationId]);

    const sendMessage = async (text: string, sender: ChatSender) => {

        await addDoc(messageRef, {
            text,
            sender,
            createdAt: serverTimestamp(),
        });

        if (type === "bot") {
            await botReply(text);
        }
    };

    const botReply = async (text: string) => {
        let conversationRef = doc(db, "conversations", conversationId);
        const messageRef = collection(conversationRef, "messages");

        let reply = "Shop đã nhận được tin nhắn 🤖";

        if (text.toLowerCase().includes("giá")) {
            reply = "Bạn muốn hỏi giá sản phẩm nào?";
        }

        await addDoc(messageRef, {
            userId,
            text: reply,
            sender: "bot",
            createdAt: serverTimestamp(),
        });
    };

    return { messages, sendMessage };
}
