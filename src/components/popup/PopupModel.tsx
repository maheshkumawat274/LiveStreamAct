
import { usePopup } from "./usePopup";

const PopupModal = () => {
    const { isOpen, closePopup } = usePopup();

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-6">

            <div className="relative glass-card p-6 rounded-2xl w-80 fade-in shadow-2xl">

                {/* CLOSE BTN */}
                <button
                    onClick={closePopup}
                    className="absolute top-3 right-3 cursor-pointer text-white hover:text-gray-300 text-xl"
                >
                    ✕
                </button>

                <h3 className="text-xl font-bold text-white mb-4">Need Help?</h3>

                <p className="text-gray-400 mb-6 text-sm">
                    Our team is available 24/7 — choose how you want to contact us.
                </p>

                <div className="space-y-4">

                    {/* CALL SUPPORT */}
                    <a 
                        href="tel:+1234567890"
                        className="flex items-center glass-card p-4 rounded-xl hover-scale group"
                    >
                        <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition">
                            📞
                        </div>
                        <div>
                            <h4 className="text-white font-bold">Call Support</h4>
                            <p className="text-gray-400 text-sm">Talk to our team instantly</p>
                        </div>
                    </a>

                    {/* LIVE AGENT CHAT */}
                    <button
                        onClick={() => alert("Live agent chat coming soon!")}
                        className="flex items-center glass-card p-4 rounded-xl hover-scale group w-full"
                    >
                        <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition">
                            💬
                        </div>
                        <div className="text-left">
                            <h4 className="text-white font-bold">Live Agent Chat</h4>
                            <p className="text-gray-400 text-sm">Chat with our support agent</p>
                        </div>
                    </button>

                </div>

                <div className="mt-6 p-4 bg-purple-500/10 border border-purple-500/20 rounded-lg">
                    <p className="text-purple-300 text-sm text-center font-semibold">
                        ⚡ Fast Response: under 2 minutes
                    </p>
                </div>
            </div>

        </div>
    );
};

export default PopupModal;
