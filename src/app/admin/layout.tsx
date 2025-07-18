"use client";

import AdminLayout from "@/components/auth/adminLayout/AdminLayout";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function AdminLayoutPage({children,}: {children: React.ReactNode;}) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [authorized, setAuthorized] = useState(false);

  useEffect(()=> {
    const checkAuth = async()=> { 
      try {
        const res = await axios.get(``)
      } catch (error) {
        console.log(error);
      } finally{
setLoading(false);
      }
    }
  }, [])


  return <AdminLayout>{children}</AdminLayout>;
}
