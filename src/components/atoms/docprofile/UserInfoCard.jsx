"use client";

import * as React from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

export default function UserInfoCard() {
  const gst_certificate = {
    "Legal Name": "ABC Traders Pvt Ltd",
    "Trade Name": "ABC Mart",
    "Address of Business": "123 Market Street, Mumbai, India",
    "PAN / Aadhaar of Proprietor": "ABCDE1234F",
    "Date of Incorporation / Registration of Business": "12-05-2018",
    "Constitution of Business": "Private Limited",
    "GSTIN / UIN Status": "Active",
    "Taxpayer Type": "Regular",
    "Aadhaar Authenticated?": "Yes (15-06-2020)",
    "e-KYC Verified": "Applicable",
  };

  // Using a dummy image placeholder
  const dummyImage = "https://via.placeholder.com/600x400?text=GST+Certificate";

  return (
    <Card className="p-5 lg:p-6">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-gray-800 dark:text-white/90">
          GST Certificate
        </CardTitle>
      </CardHeader>

      <CardContent>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-7 2xl:gap-x-32">
          {Object.entries(gst_certificate).map(([key, value]) => (
            <div key={key}>
              <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
                {key}
              </p>
              <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                {value}
              </p>
            </div>
          ))}

          {/* Button to open document popup */}
          <div className="flex items-center mt-2 lg:col-span-2">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">View Document</Button>
              </DialogTrigger>
              <DialogContent className="max-w-lg">
                <DialogHeader>
                  <DialogTitle>GST Certificate Document</DialogTitle>
                </DialogHeader>

                {/* Skeleton placeholder */}
                <Skeleton className="w-full h-80 rounded-lg" />
                
                {/* If you want to show actual dummy image after loading: */}
                {/* <img
                  src={dummyImage}
                  alt="GST Certificate"
                  className="w-full h-auto rounded-lg"
                /> */}
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
