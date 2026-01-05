import Header from "@/components/layout/Header";
import { Card } from "@/components/ui/card";
import { BarChart3 } from "lucide-react";

export default function Analytics() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Analytics</h1>
          <p className="mt-2 text-muted-foreground">
            Deep insights into your supply chain performance
          </p>
        </div>

        <Card className="mt-8 p-12 text-center">
          <BarChart3 className="mx-auto h-12 w-12 text-muted-foreground" />
          <p className="mt-4 text-muted-foreground">
            Analytics page coming soon with comprehensive dashboards, reports,
            and predictive insights.
          </p>
        </Card>
      </main>
    </div>
  );
}
