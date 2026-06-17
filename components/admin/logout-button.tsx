"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";

export function LogoutButton() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleLogout() {
    setLoading(true);
    await fetch("/api/admin/logout", { method: "POST" });
    router.replace("/admin/login");
    router.refresh();
  }

  return (
    <Button
      variant="outline"
      size="sm"
      shape="rounded"
      onClick={handleLogout}
      disabled={loading}
    >
      <LogOut className="h-4 w-4" />
      Keluar
    </Button>
  );
}
