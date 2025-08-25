"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";   // ✅ Import router
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { CheckCircle } from "lucide-react";
import { toast } from "sonner";
import { ImageUpload } from "../atoms/ImageUpload";

const documentList = {
  customer: [
    {
      category: "Identity Proof",
      documents: ["Aadhaar Card", "PAN Card", "Passport", "Voter ID", "Driving License"],
    },
    {
      category: "Address Proof",
      documents: [ "Utility Bill", "Rent Agreement"],
    },
  ],
  retailer: [
    {
      category: "Business Proof",
      documents: [
        "GST Certificate",
        "Shop Act License",
        "Udyam Registration",
        "Business Registration Certificate",
      ],
    },
    {
      category: "Address Proof",
      documents: [
        "Shop Act License",
        "Electricity Bill",
        "Rental Agreement",
        "Property Tax Receipt",
      ],
    },
    {
      category: "Other Supporting",
      documents: ["Owner Photo", "Cancelled Cheque", "Shop / Office Photographs"],
    },
  ],
};

const UploaddocFI = ({ userId, userType, retailer }) => {
  const [uploadedDocs, setUploadedDocs] = useState({});
  const [selectedDoc, setSelectedDoc] = useState("");
  const router = useRouter();  // ✅ Router hook

  const requiredDocs = documentList[userType?.toLowerCase()]?.flatMap((cat) => cat.documents) || [];
  const remainingDocs = requiredDocs.filter((doc) => !uploadedDocs[doc]);

  // ✅ Handle upload callback
  const handleUpload = (docName) => {
    setUploadedDocs((prev) => {
      const updated = { ...prev, [docName]: true };

      // ✅ check if all docs uploaded
      const allUploaded = requiredDocs.every((doc) => updated[doc]);
      if (allUploaded) {
        toast.success(`${retailer?.personalDetails?.fullName}'s KYC has been approved ✅`);

        // ✅ Redirect after 1 second delay (so toast shows briefly)
        setTimeout(() => {
          router.push("/dashboard");  
        }, 1000);
      }

      return updated;
    });

    setSelectedDoc("");
  };

  if (!userType || !documentList[userType.toLowerCase()]) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Invalid or missing user type</CardTitle>
        </CardHeader>
        <CardContent>
          <p>No document list available. Please check the URL.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Left Side */}
      <div>
        <Card>
          <CardHeader>
            <CardTitle>User ID: {userId}</CardTitle>
            <p className="text-sm text-gray-500">User Type: {userType}</p>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {/* ✅ Dropdown */}
              <div>
                <Label>Select Document</Label>
                <select
                  className="w-full border rounded-lg p-2 mt-2"
                  value={selectedDoc}
                  onChange={(e) => setSelectedDoc(e.target.value)}
                  disabled={remainingDocs.length === 0}
                >
                  <option value="">-- Select --</option>
                  {remainingDocs.map((doc, i) => (
                    <option key={i} value={doc}>
                      {doc}
                    </option>
                  ))}
                </select>
              </div>

              {/* ✅ File Upload */}
              {selectedDoc && (
                <div>
                  <ImageUpload
                    docName={selectedDoc}
                    onUpload={() => handleUpload(selectedDoc)}
                  />
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Right Side - Checklist */}
      <div>
        <Card>
          <CardHeader>
            <CardTitle>Document Checklist</CardTitle>
          </CardHeader>
          <CardContent>
            {documentList[userType.toLowerCase()].map((cat, idx) => (
              <div key={idx} className="mb-4">
                <h3 className="font-semibold">{cat.category}</h3>
                <ul className="mt-2 space-y-2">
                  {cat.documents.map((doc, i) => (
                    <li
                      key={i}
                      className="flex items-center justify-between border-b pb-2"
                    >
                      <span>{doc}</span>
                      <CheckCircle
                        className={`h-5 w-5 ${
                          uploadedDocs[doc] ? "text-green-600" : "text-gray-400"
                        }`}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default UploaddocFI;







//**********************************25-8-25***************** */


// "use client";

// import { useState } from "react";
// import { useSearchParams } from "next/navigation";
// import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
// import { Label } from "@/components/ui/label";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { CheckCircle } from "lucide-react";

// const UploaddocFI = () => {
//   const searchParams = useSearchParams();
//   const userId = searchParams.get("id");
//   const queryUserType = searchParams.get("userType");

//   console.log("id and user", userId,queryUserType )

//   // Normalize userType from URL (case-insensitive)
//   const userType = queryUserType
//     ? queryUserType.charAt(0).toUpperCase() + queryUserType.slice(1).toLowerCase()
//     : null;

//   const [uploadedDocs, setUploadedDocs] = useState({});
//   const [file, setFile] = useState(null);

//   // Document list config
//   const documentList = {
//     Customer: [
//       {
//         category: "Identity Proof",
//         documents: ["Aadhaar Card", "PAN Card", "Passport", "Voter ID", "Driving License"],
//       },
//       {
//         category: "Address Proof",
//         documents: ["Aadhaar Card", "Passport", "Voter ID", "Utility Bill", "Rent Agreement"],
//       },
//     ],
//     Retailer: [
//       {
//         category: "Business Proof",
//         documents: [
//           "GST Certificate",
//           "Shop Act License",
//           "Udyam Registration",
//           "Business Registration Certificate",
//         ],
//       },
//       {
//         category: "Address Proof",
//         documents: [
//           "Shop Act License",
//           "Electricity Bill",
//           "Rental Agreement",
//           "Property Tax Receipt",
//         ],
//       },
//       {
//         category: "Other Supporting",
//         documents: ["Owner Photo", "Cancelled Cheque", "Shop / Office Photographs"],
//       },
//     ],
//   };

//   // Handle file submit
//   const handleSubmit = (docName) => {
//     setUploadedDocs((prev) => ({
//       ...prev,
//       [docName]: true,
//     }));
//     setFile(null);
//   };

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
//       {/* Left Side */}
//       <div>
//         <Card>
//           <CardHeader>
//             <CardTitle>
//               Documents for {userType || "Unknown"}{" "}
//               {userId && <span className="text-sm text-gray-500">(User ID: {userId})</span>}
//             </CardTitle>
//           </CardHeader>
//           <CardContent>
//             {userType && documentList[userType] ? (
//               <div className="mt-6 space-y-6">
//                 {documentList[userType].map((cat, idx) => (
//                   <div key={idx}>
//                     <h3 className="font-semibold mb-2">{cat.category}</h3>
//                     {cat.documents.map((doc, i) => (
//                       <Card key={i} className="mb-4 p-4">
//                         <Label>{doc}</Label>
//                         <Input
//                           type="file"
//                           className="mt-2"
//                           onChange={(e) => setFile(e.target.files[0])}
//                         />
//                         <Button
//                           className="mt-3 w-full"
//                           disabled={!file}
//                           onClick={() => handleSubmit(doc)}
//                         >
//                           Submit {doc}
//                         </Button>
//                       </Card>
//                     ))}
//                   </div>
//                 ))}
//               </div>
//             ) : (
//               <p className="text-red-500">Invalid or missing user type.</p>
//             )}
//           </CardContent>
//         </Card>
//       </div>

//       {/* Right Side */}
//       <div>
//         <Card>
//           <CardHeader>
//             <CardTitle>Document Checklist</CardTitle>
//           </CardHeader>
//           <CardContent>
//             {userType && documentList[userType] ? (
//               documentList[userType].map((cat, idx) => (
//                 <div key={idx} className="mb-4">
//                   <h3 className="font-semibold">{cat.category}</h3>
//                   <ul className="mt-2 space-y-2">
//                     {cat.documents.map((doc, i) => (
//                       <li key={i} className="flex items-center justify-between border-b pb-2">
//                         <span>{doc}</span>
//                         <CheckCircle
//                           className={`h-5 w-5 ${
//                             uploadedDocs[doc] ? "text-green-600" : "text-gray-400"
//                           }`}
//                         />
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               ))
//             ) : (
//               <p className="text-red-500">Invalid or missing user type.</p>
//             )}
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// };

// export default UploaddocFI;
