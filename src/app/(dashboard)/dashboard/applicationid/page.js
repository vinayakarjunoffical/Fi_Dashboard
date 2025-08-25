import DataTE from "@/components/atoms/tables/DataTE";
import ComponentCard from "@/components/common/ComponentCard";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import React from "react";

export const metadata = {
  title: "Next.js Basic Table | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Basic Table page for TailAdmin Tailwind CSS Admin Dashboard Template",
};

const applications = [
  {
    id: 1,
    applicationId: "APPX7A9D2",
    userName: "Rohit Kumar",
    address: "123 MG Road, Bangalore",
    mobileNo: "+91 9876543210",
    status: "Submitted",
    email: "rohit.kumar@example.com",
    applicationDate: "2025-08-01",
  },
  {
    id: 2,
    applicationId: "APPU3K4F8",
    userName: "Sneha Sharma",
    address: "45 Park Street, Kolkata",
    mobileNo: "+91 9123456789",
    status: "Submitted",
    email: "sneha.sharma@example.com",
    applicationDate: "2025-08-02",
  },
  {
    id: 3,
    applicationId: "APPB9M6Q1",
    userName: "Arjun Mehta",
    address: "22 Residency Road, Mumbai",
    mobileNo: "+91 9988776655",
    status: "Submitted",
    email: "arjun.mehta@example.com",
    applicationDate: "2025-08-03",
  },
  {
    id: 4,
    applicationId: "APPH2T5L7",
    userName: "Priya Nair",
    address: "89 Anna Salai, Chennai",
    mobileNo: "+91 9090909090",
    status: "Submitted",
    email: "priya.nair@example.com",
    applicationDate: "2025-08-04",
  },
  {
    id: 5,
    applicationId: "APPZ4R8P3",
    userName: "Karan Singh",
    address: "77 Sector 21, Chandigarh",
    mobileNo: "+91 9812345678",
    status: "Submitted",
    email: "karan.singh@example.com",
    applicationDate: "2025-08-05",
  },
  {
    id: 6,
    applicationId: "APPY6W2E9",
    userName: "Neha Gupta",
    address: "14 Ring Road, Delhi",
    mobileNo: "+91 9871203456",
    status: "Submitted",
    email: "neha.gupta@example.com",
    applicationDate: "2025-08-06",
  },
  {
    id: 7,
    applicationId: "APPQ8D1R4",
    userName: "Vikram Joshi",
    address: "56 Civil Lines, Lucknow",
    mobileNo: "+91 9823456780",
    status: "Submitted",
    email: "vikram.joshi@example.com",
    applicationDate: "2025-08-07",
  },
  {
    id: 8,
    applicationId: "APPJ5K2M9",
    userName: "Ananya Desai",
    address: "33 Law Garden, Ahmedabad",
    mobileNo: "+91 9712345678",
    status: "Submitted",
    email: "ananya.desai@example.com",
    applicationDate: "2025-08-08",
  },
  {
    id: 9,
    applicationId: "APPT7V3X6",
    userName: "Ramesh Patel",
    address: "11 C G Road, Ahmedabad",
    mobileNo: "+91 9654321890",
    status: "Submitted",
    email: "ramesh.patel@example.com",
    applicationDate: "2025-08-09",
  },
  {
    id: 10,
    applicationId: "APPL9B7C2",
    userName: "Meera Iyer",
    address: "101 Besant Nagar, Chennai",
    mobileNo: "+91 9876123450",
    status: "Submitted",
    email: "meera.iyer@example.com",
    applicationDate: "2025-08-10",
  },
  {
    id: 11,
    applicationId: "APPD2X6N8",
    userName: "Aditya Verma",
    address: "66 Sector 18, Noida",
    mobileNo: "+91 9876540011",
    status: "Submitted",
    email: "aditya.verma@example.com",
    applicationDate: "2025-08-11",
  },
  {
    id: 12,
    applicationId: "APPM3Q7W1",
    userName: "Divya Kapoor",
    address: "7 Rajouri Garden, Delhi",
    mobileNo: "+91 9911223344",
    status: "Submitted",
    email: "divya.kapoor@example.com",
    applicationDate: "2025-08-12",
  },
  {
    id: 13,
    applicationId: "APPR4S8J5",
    userName: "Sanjay Reddy",
    address: "55 Jubilee Hills, Hyderabad",
    mobileNo: "+91 9811002233",
    status: "Submitted",
    email: "sanjay.reddy@example.com",
    applicationDate: "2025-08-13",
  },
  {
    id: 14,
    applicationId: "APPK8N5Z3",
    userName: "Pooja Bansal",
    address: "12 Alkapuri, Vadodara",
    mobileNo: "+91 9822003344",
    status: "Submitted",
    email: "pooja.bansal@example.com",
    applicationDate: "2025-08-14",
  },
  {
    id: 15,
    applicationId: "APPU1H6T9",
    userName: "Nikhil Jain",
    address: "9 Malviya Nagar, Jaipur",
    mobileNo: "+91 9833004455",
    status: "Submitted",
    email: "nikhil.jain@example.com",
    applicationDate: "2025-08-15",
  },
  {
    id: 16,
    applicationId: "APPC3L9D8",
    userName: "Shreya Mukherjee",
    address: "18 Ballygunge, Kolkata",
    mobileNo: "+91 9844005566",
    status: "Submitted",
    email: "shreya.mukherjee@example.com",
    applicationDate: "2025-08-16",
  },
  {
    id: 17,
    applicationId: "APPE6G4F7",
    userName: "Rajat Malhotra",
    address: "101 Connaught Place, Delhi",
    mobileNo: "+91 9855006677",
    status: "Submitted",
    email: "rajat.malhotra@example.com",
    applicationDate: "2025-08-17",
  },
  {
    id: 18,
    applicationId: "APPZ9X1M2",
    userName: "Aarti Chawla",
    address: "76 Patel Nagar, Delhi",
    mobileNo: "+91 9866007788",
    status: "Submitted",
    email: "aarti.chawla@example.com",
    applicationDate: "2025-08-18",
  },
  {
    id: 19,
    applicationId: "APPA7R5C9",
    userName: "Suresh Pillai",
    address: "4 Fort Kochi, Kochi",
    mobileNo: "+91 9877008899",
    status: "Submitted",
    email: "suresh.pillai@example.com",
    applicationDate: "2025-08-19",
  },
  {
    id: 20,
    applicationId: "APPV4M7J1",
    userName: "Ishita Roy",
    address: "25 Salt Lake, Kolkata",
    mobileNo: "+91 9888009900",
    status: "Submitted",
    email: "ishita.roy@example.com",
    applicationDate: "2025-08-20",
  },
  {
    id: 21,
    applicationId: "APPL6D2K4",
    userName: "Deepak Yadav",
    address: "9 Gomti Nagar, Lucknow",
    mobileNo: "+91 9899001122",
    status: "Submitted",
    email: "deepak.yadav@example.com",
    applicationDate: "2025-08-21",
  },
  {
    id: 22,
    applicationId: "APPG5S9F8",
    userName: "Ritika Saxena",
    address: "34 Koregaon Park, Pune",
    mobileNo: "+91 9900112233",
    status: "Submitted",
    email: "ritika.saxena@example.com",
    applicationDate: "2025-08-22",
  },
  {
    id: 23,
    applicationId: "APPU9B3W6",
    userName: "Manoj Dubey",
    address: "88 Charbagh, Lucknow",
    mobileNo: "+91 9911223345",
    status: "Submitted",
    email: "manoj.dubey@example.com",
    applicationDate: "2025-08-23",
  },
  {
    id: 24,
    applicationId: "APPQ7H2L5",
    userName: "Kavya Menon",
    address: "11 Marine Drive, Kochi",
    mobileNo: "+91 9922334455",
    status: "Submitted",
    email: "kavya.menon@example.com",
    applicationDate: "2025-08-24",
  },
  {
    id: 25,
    applicationId: "APPX3N5D7",
    userName: "Aman Khanna",
    address: "3 Rajpur Road, Dehradun",
    mobileNo: "+91 9933445566",
    status: "Submitted",
    email: "aman.khanna@example.com",
    applicationDate: "2025-08-25",
  },
  {
    id: 26,
    applicationId: "APPM2V9J8",
    userName: "Tanvi Chatterjee",
    address: "6 Gariahat, Kolkata",
    mobileNo: "+91 9944556677",
    status: "Submitted",
    email: "tanvi.chatterjee@example.com",
    applicationDate: "2025-08-26",
  },
  {
    id: 27,
    applicationId: "APPD8K4S2",
    userName: "Rahul Bhatia",
    address: "88 Lajpat Nagar, Delhi",
    mobileNo: "+91 9955667788",
    status: "Submitted",
    email: "rahul.bhatia@example.com",
    applicationDate: "2025-08-27",
  },
  {
    id: 28,
    applicationId: "APPR5C8L9",
    userName: "Simran Gill",
    address: "21 Sector 17, Chandigarh",
    mobileNo: "+91 9966778899",
    status: "Submitted",
    email: "simran.gill@example.com",
    applicationDate: "2025-08-28",
  },
  {
    id: 29,
    applicationId: "APPF9M1T6",
    userName: "Anil Sharma",
    address: "8 Residency Road, Jaipur",
    mobileNo: "+91 9977889900",
    status: "Submitted",
    email: "anil.sharma@example.com",
    applicationDate: "2025-08-29",
  },
  {
    id: 30,
    applicationId: "APPT6J2Q4",
    userName: "Swati Mishra",
    address: "19 Indiranagar, Bangalore",
    mobileNo: "+91 9988990011",
    status: "Submitted",
    email: "swati.mishra@example.com",
    applicationDate: "2025-08-30",
  },
  {
    id: 31,
    applicationId: "APPL1V7X3",
    userName: "Harsh Vardhan",
    address: "5 Rajaji Nagar, Bangalore",
    mobileNo: "+91 9999001122",
    status: "Submitted",
    email: "harsh.vardhan@example.com",
    applicationDate: "2025-08-31",
  },
];

// Table columns
const columns = [
  {
    accessorKey: "applicationId",
    header: "Application ID",
  },
  {
    accessorKey: "userName",
    header: "User Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "mobileNo",
    header: "Mobile",
  },
  {
    accessorKey: "address",
    header: "Address",
  },
  {
    accessorKey: "applicationDate",
    header: "Date",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status");
      return (
        <Badge variant={status === "Submitted" ? "secondary" : "default"}>
          {status}
        </Badge>
      );
    },
  },
];

export default function Page() {
  return (
    <div>
      <PageBreadcrumb title="Application Data"  />
      <div className="space-y-6">
        <ComponentCard title="Application data">
          <DataTE
            columns={[
              { key: "applicationId", label: "Application ID", sortable: true },
              { key: "userName", label: "User Name", sortable: true },
              { key: "address", label: "Address" },
              { key: "mobileNo", label: "Mobile No" },
              { key: "status", label: "Status", sortable: true },
              { key: "email", label: "Email" },
              {
                key: "applicationDate",
                label: "Application Date",
                sortable: true,
              },
            ]}
            data={applications}
             itemsPerPage={10}
      enableSearch
      enableSelection
            actionBasePath="/dashboard/applicationid"  
             actionParams={["id"]}
          />
        </ComponentCard>
      </div>
    </div>
  );
}
