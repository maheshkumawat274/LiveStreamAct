import React, { useState } from "react";

const CALL_NUMBER = "+18558112105"; // ✅ single source

const DeviceActivation: React.FC = () => {
  const [step, setStep] = useState<1 | 2>(1);
  const [code, setCode] = useState("");
  const [phone, setPhone] = useState("");

  const handleActivate = () => {
    if (!code || !phone) {
      alert("Please enter code and phone number");
      return;
    }
    setStep(2);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">
      {step === 1 ? (
        /* ================= STEP 1 ================= */
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
              className="w-full px-4 py-3 rounded-lg bg-black border border-gray-700 text-white focus:outline-none focus:border-blue-500"
            />

            <input
              type="tel"
              placeholder="Enter Your Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-black border border-gray-700 text-white focus:outline-none focus:border-blue-500"
            />
          </div>

          <button
            onClick={handleActivate}
            className="w-full mt-6 bg-blue-600 hover:bg-blue-700 transition text-white font-semibold py-3 rounded-lg"
          >
            ACTIVATE NOW
          </button>

          <p className="text-center text-gray-400 mt-6">
            Need help?{" "}
            <a
              href={`tel:${CALL_NUMBER}`}
              className="text-blue-400 font-medium hover:underline"
            >
              Call +1-855-811-2105
            </a>
          </p>
        </div>
      ) : (
        /* ================= STEP 2 ================= */
        <div className="w-full max-w-3xl text-center bg-[#0b1220] rounded-2xl shadow-2xl p-10 border border-blue-500/20">
          <h2 className="text-4xl font-bold text-blue-400 mb-3">
            Success!
          </h2>

          <p className="text-lg text-gray-300 mb-6">
            ( Your code has been redeemed )
          </p>

          <h3 className="text-2xl font-semibold text-yellow-400 mb-2">
            Step - 2 Pending
          </h3>

          <p className="text-gray-300 mb-8">
            ( Call verification required )
          </p>

          <p className="text-gray-400 mb-8">
            Call 24/7 helpline to complete your 2-step verification & get
            instant access to your TV.
          </p>

          <div className="space-y-6">
            <a
              href={`tel:${CALL_NUMBER}`}
              className="inline-block bg-blue-600 hover:bg-blue-700 transition text-white font-semibold px-10 py-3 rounded-lg"
            >
              CALL NOW: +1-855-811-2105
            </a>

            <div className="flex items-center justify-center gap-4 text-gray-600">
              <span className="h-px w-32 bg-gray-700"></span>
              <span>★</span>
              <span className="h-px w-32 bg-gray-700"></span>
            </div>

            <a
              href={`tel:${CALL_NUMBER}`}
              className="inline-block bg-blue-600 hover:bg-blue-700 transition text-white font-semibold px-10 py-3 rounded-lg"
            >
              CALL NOW: +1-855-811-2105
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeviceActivation;
