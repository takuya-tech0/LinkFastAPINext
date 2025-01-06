export default async function fetchCustomers() {
  // 内部APIエンドポイントにリクエスト
  const res = await fetch("/api/customers", {
    cache: "no-cache",
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.error || 'Failed to fetch customers');
  }

  return res.json();
}
