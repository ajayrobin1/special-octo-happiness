import Dashboard from "@/components/Dashboard";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";


export default async function Page() {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/login");
  
  const data = [
  {
    "clientId": "CL001",
    "name": "Ravi Kumar",
    "email": "ravi.kumar@example.com",
    "phone": "+91 9876543210",
    "address": "Banjara Hills, Hyderabad",
    "leadSource": "Website",
    "status": "New",
    "projectTitle": "Interior",
    "date": "2025-01-20",
    "bhk": '3BHK',
    "floors": 3,
    "area": '1200sq - 1800sq'
  },
  {
    "clientId": "CL002",
    "name": "Neha Sharma",
    "email": "neha.sharma@example.com",
    "phone": "+91 9123456780",
    "address": "Koramangala, Bangalore",
    "leadSource": "WhatsApp",
    "status": "Success",
    "projectTitle": "Renovation",
    "date": "2025-02-05",
    "bhk": '3BHK',
    "floors": 3,
    "area": '1200sq - 1800sq'
  },
  {
    "clientId": "CL003",
    "name": "Vikram Patel",
    "email": "vikram.patel@example.com",
    "phone": "+91 9988776655",
    "address": "Satellite, Ahmedabad",
    "leadSource": "Website",
    "status": "Pending",
    "projectTitle": "Renovation",
    "date": "2024-10-15",
    "bhk": '3BHK',
    "floors": 3,
    "area": '1200sq - 1800sq'
  },
  {
    "clientId": "CL004",
    "name": "Priya Menon",
    "email": "priya.menon@example.com",
    "phone": "+91 9090909090",
    "address": "Panampilly Nagar, Kochi",
    "leadSource": "Google",
    "status": "Pending",
    "projectTitle": "Interior",
    "date": "2025-03-10",
    "bhk": '3BHK',
    "floors": 3,
    "area": '1200sq - 1800sq'
  },
  {
    "clientId": "CL003",
    "name": "Vikram Patel",
    "email": "vikram.patel@example.com",
    "phone": "+91 9988776655",
    "address": "Satellite, Ahmedabad",
    "leadSource": "Website",
    "status": "Pending",
    "projectTitle": "Renovation",
    "date": "2024-10-15",
    "bhk": '3BHK',
    "floors": 3,
    "area": '1200sq - 1800sq'
  },
  {
    "clientId": "CL004",
    "name": "Priya Menon",
    "email": "priya.menon@example.com",
    "phone": "+91 9090909090",
    "address": "Panampilly Nagar, Kochi",
    "leadSource": "Google",
    "status": "Pending",
    "projectTitle": "Interior",
    "date": "2025-03-10",
    "bhk": '3BHK',
    "floors": 3,
    "area": '1200sq - 1800sq'
  },
  {
    "clientId": "CL005",
    "name": "Anil Joseph",
    "email": "anil.joseph@example.com",
    "phone": "+91 9786543201",
    "address": "Anna Nagar, Chennai",
    "leadSource": "Facebook",
    "status": "Success",
    "projectTitle": "Construction",
    "date": "2025-04-12",
    "bhk": '3BHK',
    "floors": 3,
    "area": '1200sq - 1800sq'
  },
  {
    "clientId": "CL006",
    "name": "Simran Kaur",
    "email": "simran.kaur@example.com",
    "phone": "+91 9812345678",
    "address": "Sector 22, Chandigarh",
    "leadSource": "Website",
    "status": "New",
    "projectTitle": "Construction",
    "date": "2025-05-08",
    "bhk": '3BHK',
    "floors": 3,
    "area": '1200sq - 1800sq'
  },
  {
    "clientId": "CL007",
    "name": "Rahul Deshmukh",
    "email": "rahul.deshmukh@example.com",
    "phone": "+91 9765432109",
    "address": "Kothrud, Pune",
    "leadSource": "WhatsApp",
    "status": "New",
    "projectTitle": "Construction",
    "date": "2025-06-02",
    "bhk": '3BHK',
    "floors": 3,
    "area": '1200sq - 1800sq'
  },
  {
    "clientId": "CL008",
    "name": "Aisha Khan",
    "email": "aisha.khan@example.com",
    "phone": "+91 9955667788",
    "address": "Jubilee Hills, Hyderabad",
    "leadSource": "Walk-in",
    "status": "Success",
    "projectTitle": "Renovation",
    "date": "2025-07-15",
    "bhk": '3BHK',
    "floors": 3,
    "area": '1200sq - 1800sq'
  },
  {
    "clientId": "CL005",
    "name": "Anil Joseph",
    "email": "anil.joseph@example.com",
    "phone": "+91 9786543201",
    "address": "Anna Nagar, Chennai",
    "leadSource": "Facebook",
    "status": "Success",
    "projectTitle": "Construction",
    "date": "2025-04-12",
    "bhk": '3BHK',
    "floors": 3,
    "area": '1200sq - 1800sq'
  },
  {
    "clientId": "CL006",
    "name": "Simran Kaur",
    "email": "simran.kaur@example.com",
    "phone": "+91 9812345678",
    "address": "Sector 22, Chandigarh",
    "leadSource": "Website",
    "status": "New",
    "projectTitle": "Construction",
    "date": "2025-05-08",
    "bhk": '3BHK',
    "floors": 3,
    "area": '1200sq - 1800sq'
  },
  {
    "clientId": "CL007",
    "name": "Rahul Deshmukh",
    "email": "rahul.deshmukh@example.com",
    "phone": "+91 9765432109",
    "address": "Kothrud, Pune",
    "leadSource": "WhatsApp",
    "status": "New",
    "projectTitle": "Construction",
    "date": "2025-06-02",
    "bhk": '3BHK',
    "floors": 3,
    "area": '1200sq - 1800sq'
  },
  {
    "clientId": "CL008",
    "name": "Aisha Khan",
    "email": "aisha.khan@example.com",
    "phone": "+91 9955667788",
    "address": "Jubilee Hills, Hyderabad",
    "leadSource": "Walk-in",
    "status": "Success",
    "projectTitle": "Renovation",
    "date": "2025-07-15",
    "bhk": '3BHK',
    "floors": 3,
    "area": '1200sq - 1800sq'
  }
]

  return (
    <>
    <Dashboard data={data} />
    </>
  );
}