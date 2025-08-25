import ComponentCard from "@/components/common/ComponentCard";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import DocProfileCar from "@/components/molecules/DocProfileCar";
import React from "react";

export const metadata = {
  title: "Next.js details | Fintree",
  description:
    "This is Next.js Basic Table page for TailAdmin Tailwind CSS Admin Dashboard Template",
};



export default function Page() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Application" />
      <div className="space-y-6">
        <ComponentCard title="Application data">
          <DocProfileCar />
        </ComponentCard>
      </div>
    </div>
  );
}
