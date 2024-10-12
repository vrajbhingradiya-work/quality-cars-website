"use client";
import CarModel from "@/model/Car";
import React, { useEffect, useState } from "react";

function ContactUsForm() {
  const [formData, setFormData] = useState({
    clientName: "",
    clientEmailId: "",
    clientNumber: "",
    carBrand: "",
    carModel: "",
    carVariant: "",
    carImages: [],
    clientMessage: "",
  });

  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  useEffect(() => {
    if (
      formData.clientName.length > 0 &&
      formData.clientEmailId.length > 0 &&
      formData.clientNumber.length > 0
    ) {
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
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          clientName: formData.clientName,
          clientEmailId: formData.clientEmailId,
          clientNumber: formData.clientNumber,
          carBrand: formData.carBrand,
          carModel: formData.carModel,
          carVariant: formData.carVariant,
          carImages: formData.carImages,
          clientMessage: formData.clientMessage,
        }), // Convert formData to JSON string
      });
      alert("Message successfully sent");
      setFormData({
        clientName: "",
        clientEmailId: "",
        clientNumber: "",
        carBrand: "",
        carModel: "",
        carVariant: "",
        carImages: [],
        clientMessage: "",
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
    <div>
      <form
        onSubmit={handleSubmit}
        className=" min-w-[300px]  max-w-[500px] p-8 flex flex-col justify-between gap-4 bg-white rounded-xl  "
      >
        <div className="flex items-center justify-start">
          <span className="text-3xl text-black font-medium">CONTACT US</span>
        </div>
        <div>
          <input
            value={formData.clientName}
            onChange={(e) =>
              setFormData({
                ...formData,
                clientName: e.target.value,
              })
            }
            className=" p-4  w-full rounded-lg  border-[#CCCCCC] border-[1px] placeholder-[#CCCCCC] text-black font-medium tracking-wider"
            placeholder="YOUR NAME"
            type="text"
          />
        </div>
        <div>
          <input
            value={formData.clientEmailId}
            onChange={(e) =>
              setFormData({
                ...formData,
                clientEmailId: e.target.value,
              })
            }
            className=" p-4  w-full rounded-lg  border-[#CCCCCC] border-[1px] placeholder-[#CCCCCC] text-black font-medium tracking-wider"
            placeholder="EMAIL"
            type="email"
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
            className=" p-4  w-full rounded-lg  border-[#CCCCCC] border-[1px] placeholder-[#CCCCCC] text-black font-medium tracking-wider"
            placeholder="MOBILE NUMBER"
            min={1000000000}
            type="number"
          />
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 w-full">
          <input
            value={formData.carBrand}
            onChange={(e) =>
              setFormData({
                ...formData,
                carBrand: e.target.value,
              })
            }
            className=" p-4  w-full rounded-lg  border-[#CCCCCC] border-[1px] placeholder-[#CCCCCC] text-black font-medium tracking-wider"
            placeholder="BRAND"
            type="text"
          />
          <input
            value={formData.carModel}
            onChange={(e) =>
              setFormData({
                ...formData,
                carModel: e.target.value,
              })
            }
            className=" p-4  w-full rounded-lg  border-[#CCCCCC] border-[1px] placeholder-[#CCCCCC] text-black font-medium tracking-wider"
            placeholder="MODEL"
            type="text"
          />
          <input
            value={formData.carVariant}
            onChange={(e) =>
              setFormData({
                ...formData,
                carVariant: e.target.value,
              })
            }
            className=" p-4  w-full rounded-lg  border-[#CCCCCC] border-[1px] placeholder-[#CCCCCC] text-black font-medium tracking-wider"
            placeholder="VARIANT"
            type="text"
          />
        </div>
        <div>
          <input
            // value={formData.carImages}
            // onChange={(e) =>
            //   setFormData({
            //     ...formData,
            //     carImages: e.target.value,
            //   })
            // }
            className=" px-4 py-10  w-full rounded-lg  border-[#CCCCCC] border-[1px] placeholder-[#CCCCCC] text-black font-medium tracking-wider"
            placeholder="upload!"
            type="file"
          />
        </div>
        <div>
          <input
            value={formData.clientMessage}
            onChange={(e) =>
              setFormData({
                ...formData,
                clientMessage: e.target.value,
              })
            }
            className=" p-4  w-full rounded-lg   border-[#CCCCCC] border-[1px] placeholder-[#CCCCCC] text-black font-medium tracking-wider "
            placeholder="MESSAGE"
            type="text"
          />
        </div>
        {/* <div>
          captcha integration
        </div> */}
        <div>
          <button
            type="submit"
            disabled={buttonDisabled}
            className="bg-black hover:bg-white hover:text-black border-black hover:border-[1px] w-full
            px-4 pl-6 py-4 flex justify-center items-center group transition ease-in-out duration-300 rounded-lg tracking-[.2em]"
          >
            {loading ? "PROCESSING..." : "SUBMIT"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactUsForm;
