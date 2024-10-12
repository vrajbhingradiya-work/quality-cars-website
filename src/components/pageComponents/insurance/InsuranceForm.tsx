"use client";
import React, { useEffect, useState } from "react";

function InsuranceForm() {
  const [formData, setFormData] = useState({
    clientName: "",

    clientNumber: "",
    // clientLocation: "",
  });

  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  useEffect(() => {
    if (formData.clientName.length > 0 && formData.clientNumber.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [formData]);
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      setLoading(true);
      setButtonDisabled(true);
      const response = await fetch("/api/send-insurance-inquiry-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          clientName: formData.clientName,

          clientNumber: formData.clientNumber,
          // clientLocation: formData.clientLocation,
        }), // Convert formData to JSON string
      });
      alert("Message successfully sent");
      setFormData({
        clientName: "",

        clientNumber: "",
        // clientLocation: "",
      });
      setButtonDisabled(false);
      setLoading(false);
    } catch (err: any) {
      console.error(err);
      alert("Error, please try resubmitting the form");
      setButtonDisabled(false);
    }
  };
  return (
    <div className="pt-16 w-full  flex justify-center items-center  ">
      <form
        onSubmit={handleSubmit}
        className=" w-full  md:w-[70%] xl:w-[600px]  md:max-w-[700px] p-8 md:p-8 grid grid-cols-1 gap-4  rounded-xl  "
      >
        <div className="flex items-center justify-start">
          <span className="text-2xl md:text-3xl text-white/50 w-full text-center font-medium">
            WANT TO KNOW <span className="text-red-500/80">MORE ?</span>
          </span>
        </div>
        <div>
          <input
            value={formData.clientName}
            required
            onChange={(e) =>
              setFormData({
                ...formData,
                clientName: e.target.value,
              })
            }
            className=" p-2 md:p-4  w-full rounded-lg  border-[#CCCCCC] border-[1px] placeholder-[#CCCCCC] text-black font-medium tracking-wider"
            placeholder="YOUR NAME*"
            type="text"
          />
        </div>

        <div>
          <input
            value={formData.clientNumber}
            onChange={(e) =>
              setFormData({
                ...formData,
                clientNumber: e.target.value,
              })
            }
            className=" p-2 md:p-4  w-full rounded-lg  border-[#CCCCCC] border-[1px] placeholder-[#CCCCCC] text-black font-medium tracking-wider"
            placeholder="MOBILE NUMBER"
            min={1000000000}
            type="number"
          />
        </div>
        {/* <div className="">
          <input
            value={formData.clientLocation}
            required
            onChange={(e) =>
              setFormData({
                ...formData,
                clientLocation: e.target.value,
              })
            }
            className=" p-2 md:p-4  w-full rounded-lg  border-[#CCCCCC] border-[1px] placeholder-[#CCCCCC] text-black font-medium tracking-wider"
            placeholder="LOCATION*"
            type="text"
          />
        </div> */}

        {/* <div>
          captcha integration
        </div> */}
        <div>
          <button
            type="submit"
            disabled={buttonDisabled}
            className="bg-black hover:bg-red-600/80  border-black hover:font-medium w-full
            px-4 pl-6 py-4 flex justify-center items-center group transition ease-in-out duration-300 rounded-lg tracking-[.2em]"
          >
            {loading ? "PROCESSING..." : "REQUEST A CALLBACK"}
          </button>
        </div>

        <div className="grid grid-cols-1 items-center justify-start py-16">
          <span className="t text-white/50 w-full text-center font-medium">
            FOR ASSISTANCE, PLEASE CALL
          </span>
          <span className="text-xl md:text-xl text-white/90 w-full text-center font-medium tracking-[0.2rem]">
            OUR INSURANCE MANAGER
          </span>
          <span className="text-lg md:text-lg text-red-500/80 w-full text-center font-medium tracking-[0.1rem] pt-2">
            99423-49898
          </span>
        </div>
      </form>
    </div>
  );
}

export default InsuranceForm;
