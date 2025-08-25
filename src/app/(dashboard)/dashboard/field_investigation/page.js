import ComponentCard from "@/components/common/ComponentCard";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import React from "react";
import { applications } from "@/utils/applications";
import FeildInv from "@/components/organism/FeildInv";


export const metadata = {
  title: "Next.js Basic Table | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Basic Table page for TailAdmin Tailwind CSS Admin Dashboard Template",
};



export default function Page() {
  return (
    <div className="">
      <PageBreadcrumb title="Field Investigation" subtitle="Track all system activities and changes" />
      <div className="space-y-6">
        <ComponentCard title="Field Investigation" >
        <FeildInv data={applications} />
        </ComponentCard>
      </div>
    </div>
  );
}
