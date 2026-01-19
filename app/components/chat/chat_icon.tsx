import type { ReactNode } from "react";

interface ChatIconProps {
    children: ReactNode;
    onClick: () => void;
    className?: string;
}

export default function ChatIcon({
    children,
    onClick,
    className = "",
}: ChatIconProps) {
    return (
        <button
            onClick={onClick}
            className={`
        w-14 h-14 rounded-full
        flex items-center justify-center
        text-2xl text-white
        bg-blue-600 hover:scale-105
        transition
        ${className}
      `}
        >
            {children}
        </button>
    );
}
