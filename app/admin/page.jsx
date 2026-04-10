import { AdminDashboard } from "@/components/admin/admin-dashboard"

export default function AdminPage() {
  <h1 className="text-2xl font-bold">
    Super Admin Dashboard
  </h1>// In a real app, you'd check authentication here
  // For demo purposes, we'll show the dashboard directly

  return <AdminDashboard />
}
