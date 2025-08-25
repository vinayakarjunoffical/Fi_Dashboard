import AuditTable from "@/components/atoms/tables/AuditTable";
import ComponentCard from "@/components/common/ComponentCard";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import React from "react";

export const metadata = {
  title: "Next.js Basic Table | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Basic Table page for TailAdmin Tailwind CSS Admin Dashboard Template",
};



export default function BasicTables() {
  return (
    <div>
      <PageBreadcrumb title="Audit Logs" subtitle="Track all system activities and changes" />
      <div className="space-y-6">
        <ComponentCard title="Application data">
          <AuditTable />
        </ComponentCard>
      </div>
    </div>
  );
}
