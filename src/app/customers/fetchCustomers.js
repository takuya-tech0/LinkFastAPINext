export default async function fetchCustomers() {
  const res = await fetch(process.env.API_ENDPOINT + "/allcustomers", {
    cache: "no-cache",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch customers");
  }
  return res.json();
}

// export default async function fetchCustomers() {
//   // 内部APIエンドポイントにリクエスト
//   const res = await fetch("/api/customers", {
//     cache: "no-cache",
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });

//   if (!res.ok) {
//     const errorData = await res.json();
//     throw new Error(errorData.error || 'Failed to fetch customers');
//   }

//   return res.json();
// }