import { useState } from "react";
import {
    Dialog,
    DialogBackdrop,
    DialogPanel,
    DialogTitle,
} from "@headlessui/react";

type Review = {
    id: number;
    user: string;
    avatar: string;
    date: string;
    variant: string;
    size: string;
    rating: number;
    comment: string;
};

const ReviewItem = ({ review }: { review: Review }) => (
    <div className="flex gap-4 items-start border-b pb-4 mb-4">
        {/* Avatar */}
        <div className="flex flex-col items-center w-20">
            <img
                src={review.avatar}
                alt={review.user}
                className="w-14 h-14 object-cover rounded-full border"
            />
            <p className="mt-2 text-sm font-medium">{review.user}</p>
        </div>

        {/* Content */}
        <div className="flex-1">
            <div className="flex flex-wrap gap-2 text-sm text-gray-500 mb-2">
                <span>{review.date}</span>
                <span>| Phân loại: {review.variant}</span>
                <span>| Size: {review.size}</span>
            </div>
            <div className="space-y-1">
                <div className="flex items-center text-yellow-400">
                    {Array.from({ length: review.rating }).map((_, i) => (
                        <i key={`star-filled-${i}`} className="fa fa-star" />
                    ))}
                    {Array.from({ length: 5 - review.rating }).map((_, i) => (
                        <i key={`star-empty-${i}`} className="fa fa-star-o text-gray-300" />
                    ))}
                </div>
                <p className="text-gray-700">{review.comment}</p>
            </div>

        </div>
    </div>
);

export default function ReviewSection({ reviews }: { reviews: Review[] }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="product__details__tab__desc">
            <div className="flex items-center justify-between mb-4">
                <h6 className="text-lg font-semibold">Product Reviews</h6>
                {reviews.length > 2 && (
                    <button
                        onClick={() => setIsOpen(true)}
                        className="text-blue-500 text-sm hover:underline"
                    >
                        Xem thêm
                    </button>
                )}
            </div>

            {/* Hiển thị 2 review đầu */}
            {reviews.slice(0, 2).map((review) => (
                <ReviewItem key={review.id} review={review} />
            ))}

            <Dialog
                open={isOpen}
                onClose={() => setIsOpen(false)}
                className="relative z-50"
            >
                <DialogBackdrop className="fixed inset-0 bg-black/50" />

                <div className="fixed inset-0 flex items-center justify-center">
                    <DialogPanel className="bg-white rounded-2xl shadow-xl w-full max-w-2xl max-h-[80vh] overflow-y-auto p-6 relative">
                        <DialogTitle className="text-xl font-semibold mb-4">
                            Tất cả đánh giá
                        </DialogTitle>

                        {reviews.map((review) => (
                            <ReviewItem key={review.id} review={review} />
                        ))}

                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-3 right-3 text-gray-500 hover:text-black"
                        >
                            ✕
                        </button>
                    </DialogPanel>
                </div>
            </Dialog>
        </div>
    );
}
