import { Card } from "@/components/ui/card";
import { Bell } from "lucide-react";

export default function Notifications() {
  return (
    <div className="min-h-screen bg-background">
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Notifications</h1>
          <p className="mt-2 text-muted-foreground">
            Stay updated with system alerts and important messages
          </p>
        </div>

        <Card className="mt-8 p-12 text-center">
          <Bell className="mx-auto h-12 w-12 text-muted-foreground" />
          <p className="mt-4 text-muted-foreground">
            Notifications page coming soon with real-time alerts, system messages,
            and activity logs.
          </p>
        </Card>
      </main>
    </div>
  );
}
