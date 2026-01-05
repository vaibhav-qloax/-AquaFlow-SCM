
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Plus } from "lucide-react";
import { Link } from "react-router-dom";

export default function Orders() {
  return (
    <div className="min-h-screen bg-background">
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Orders</h1>
            <p className="mt-2 text-muted-foreground">
              Manage and track all customer orders
            </p>
          </div>
          <Link to="/orders/new">
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              New Order
            </Button>
          </Link>
        </div>

        <Card className="mt-8 p-12 text-center">
          <p className="text-muted-foreground">
            Orders page coming soon with full order management, filtering, and
            tracking capabilities.
          </p>
        </Card>
      </main>
    </div>
  );
}
