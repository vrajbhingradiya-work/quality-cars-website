import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(request: any) {
  try {
    console.log(request.body);
    const {} = await request.json();

    var transport = nodemailer.createTransport({
      service: "Gmail", // Use your email service
      auth: {
        user: "junexus.edgerunners@gmail.com", // Replace with your email
        pass: "zxcw vinh mfyy jrej", // Replace with your email password
      },
    });

    const mailOptions = {
      from: "junexus.edgerunners@gmail.com",

      to: "lll.rg3.lll@gmail.com",
      subject: `Inquiry Raised by ${clientName}`,
      text: `
      Client Name : ${clientName} ,
      
      Client EmailId : ${clientEmailId} ,

      Client Number : ${clientNumber} ,

      Client Location: ${clientLocation},
    
      Client Message : ${clientMessage} `,
    };
    const mailresponse = await transport.sendMail(mailOptions, (error: any) => {
      if (error) {
        console.error("Email error:", error);
      }
    });
    console.log("email sent");
    return NextResponse.json({ message: mailresponse }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
