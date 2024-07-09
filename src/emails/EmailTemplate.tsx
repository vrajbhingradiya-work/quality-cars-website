import * as React from "react";

export default function EmailTemplate({
  clientName,
  clientNumber,
  clientEmailId,
  clientMessage,
}: any) {
  return (
    <div>
      <h1>Inquiry Raised By, {clientName}!</h1>
      <p>Client Number: {clientNumber}</p>
      <p>Client EmailId: {clientEmailId}</p>
      <p>Client Message: {clientMessage}</p>
    </div>
  );
}
