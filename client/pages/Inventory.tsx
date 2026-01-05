
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Plus } from "lucide-react";
import { Link } from "react-router-dom";

export default function Inventory() {
  return (
    <div className="min-h-screen bg-background">
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Inventory</h1>
            <p className="mt-2 text-muted-foreground">
              Monitor stock levels across warehouses
            </p>
          </div>
          <Link to="/inventory/reorder">
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Reorder Stock
            </Button>
          </Link>
        </div>

        <Card className="mt-8 p-12 text-center">
          <p className="text-muted-foreground">
            Inventory page coming soon with stock tracking, warehouse
            management, and automated reordering.
          </p>
        </Card>
      </main>
    </div>
  );
}
