import { listing } from "@/types/DashBoardInterFace";

export async function updateList(listVal: listing) {
  const response = await fetch("/api/ListUpdateWhole", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ listVal }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || "Failed to update list");
  }

  return response.json();
}