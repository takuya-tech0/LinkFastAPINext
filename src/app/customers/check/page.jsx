"use client";
import { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import OneCustomerInfoCard from "@/app/components/one_customer_info_card.jsx";

async function fetchCustomer(id) {
  const res = await fetch(
    process.env.NEXT_PUBLIC_API_ENDPOINT + `/customers?customer_id=${id}`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch customer");
  }
  return res.json();
}

export default function CheckPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CheckContent />
    </Suspense>
  );
}

function CheckContent() {
  const searchParams = useSearchParams();
  const id = searchParams.get("customer_id");
  const [customerInfo, setCustomerInfo] = useState(null);

  useEffect(() => {
    const getCustomer = async () => {
      if (id) {
        const data = await fetchCustomer(id);
        setCustomerInfo(data);
      }
    };
    getCustomer();
  }, [id]);

  if (!customerInfo) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="alert alert-success">更新しました</div>
      <div className="card bordered bg-white border-blue-200 border-2 max-w-sm m-4">
        <OneCustomerInfoCard {...customerInfo[0]} />
      </div>
      <Link href="/customers" className="btn btn-outline btn-accent">
        一覧に戻る
      </Link>
    </>
  );
}