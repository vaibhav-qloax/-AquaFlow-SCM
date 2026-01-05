import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import {
  Package,
  Truck,
  TrendingUp,
  Award,
  AlertCircle,
  CheckCircle,
  Clock,
  Zap,
  BarChart3,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Dashboard() {
  const metrics = [
    {
      label: "Total Orders",
      value: "2,847",
      change: "+12%",
      icon: Package,
      color: "bg-blue-100 text-blue-600",
    },
    {
      label: "In Transit",
      value: "342",
      change: "+5%",
      icon: Truck,
      color: "bg-green-100 text-green-600",
    },
    {
      label: "Inventory Level",
      value: "1.2M",
      change: "-3%",
      icon: BarChart3,
      color: "bg-orange-100 text-orange-600",
    },
    {
      label: "On-Time Rate",
      value: "97.2%",
      change: "+2%",
      icon: CheckCircle,
      color: "bg-emerald-100 text-emerald-600",
    },
  ];

  const recentOrders = [
    {
      id: "ORD-001842",
      customer: "Hydro Retail Mumbai",
      qty: "500 units",
      status: "shipped",
      eta: "2 hours",
    },
    {
      id: "ORD-001841",
      customer: "Fresh Water Distributors",
      qty: "1,200 units",
      status: "packed",
      eta: "In warehouse",
    },
    {
      id: "ORD-001840",
      customer: "Premium Beverages Ltd",
      qty: "750 units",
      status: "confirmed",
      eta: "Processing",
    },
    {
      id: "ORD-001839",
      customer: "Wellness Centers Network",
      qty: "300 units",
      status: "pending",
      eta: "Awaiting approval",
    },
  ];

  const alerts = [
    {
      type: "warning",
      title: "Low Stock Alert",
      description: "1.5L bottles below reorder point in Delhi warehouse",
      icon: AlertCircle,
    },
    {
      type: "info",
      title: "Supplier Delivery",
      description: "Raw materials arriving at facility tomorrow 10 AM",
      icon: Truck,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">
            Supply Chain Dashboard
          </h1>
          <p className="mt-2 text-muted-foreground">
            Real-time visibility into your water manufacturing operations
          </p>
        </div>

        {/* Quick Actions */}
        <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Link to="/orders/new">
            <Button className="w-full" size="lg">
              <Package className="mr-2 h-4 w-4" />
              New Order
            </Button>
          </Link>
          <Link to="/inventory/reorder">
            <Button variant="outline" className="w-full" size="lg">
              <Zap className="mr-2 h-4 w-4" />
              Reorder Stock
            </Button>
          </Link>
          <Link to="/logistics/track">
            <Button variant="outline" className="w-full" size="lg">
              <Truck className="mr-2 h-4 w-4" />
              Track Shipments
            </Button>
          </Link>
          <Link to="/analytics">
            <Button variant="outline" className="w-full" size="lg">
              <BarChart3 className="mr-2 h-4 w-4" />
              View Analytics
            </Button>
          </Link>
        </div>

        {/* Key Metrics */}
        <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric) => {
            const Icon = metric.icon;
            return (
              <Card key={metric.label} className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      {metric.label}
                    </p>
                    <p className="mt-2 text-2xl font-bold text-foreground">
                      {metric.value}
                    </p>
                    <p className="mt-2 text-xs font-medium text-accent">
                      {metric.change}
                    </p>
                  </div>
                  <div className={`rounded-lg p-2 ${metric.color}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Main Content Grid */}
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Recent Orders */}
          <div className="lg:col-span-2">
            <Card className="p-6">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-foreground">
                  Recent Orders
                </h2>
                <Link
                  to="/orders"
                  className="text-sm text-primary hover:underline"
                >
                  View all
                </Link>
              </div>

              <div className="mt-6 space-y-4">
                {recentOrders.map((order) => (
                  <div
                    key={order.id}
                    className="flex items-center justify-between border-b border-border pb-4 last:border-0"
                  >
                    <div className="flex-1">
                      <p className="font-medium text-foreground">{order.id}</p>
                      <p className="text-sm text-muted-foreground">
                        {order.customer}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-foreground">
                        {order.qty}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {order.eta}
                      </p>
                    </div>
                    <div className="ml-4">
                      <span
                        className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${
                          order.status === "shipped"
                            ? "bg-green-100 text-green-700"
                            : order.status === "packed"
                              ? "bg-blue-100 text-blue-700"
                              : order.status === "confirmed"
                                ? "bg-purple-100 text-purple-700"
                                : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {order.status.charAt(0).toUpperCase() +
                          order.status.slice(1)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <Button variant="outline" className="mt-6 w-full">
                View Full Order Pipeline
              </Button>
            </Card>
          </div>

          {/* Alerts & Quick Stats */}
          <div className="space-y-6">
            {/* Alerts */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-foreground">Alerts</h3>
              <div className="mt-4 space-y-3">
                {alerts.map((alert, idx) => {
                  const Icon = alert.icon;
                  return (
                    <div
                      key={idx}
                      className={`rounded-lg p-3 ${
                        alert.type === "warning"
                          ? "border border-warning/30 bg-warning/10"
                          : "border border-blue-300/30 bg-blue-50"
                      }`}
                    >
                      <div className="flex gap-3">
                        <Icon
                          className={`h-5 w-5 flex-shrink-0 ${
                            alert.type === "warning"
                              ? "text-warning"
                              : "text-blue-600"
                          }`}
                        />
                        <div className="flex-1 text-sm">
                          <p className="font-medium text-foreground">
                            {alert.title}
                          </p>
                          <p className="mt-1 text-muted-foreground">
                            {alert.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>

            {/* Quick Features */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-foreground">
                Key Features
              </h3>
              <div className="mt-4 space-y-2">
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-primary" />
                  <span className="text-sm text-foreground">
                    Real-time tracking
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-4 w-4 text-accent" />
                  <span className="text-sm text-foreground">
                    Gamification rewards
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-warning" />
                  <span className="text-sm text-foreground">
                    Automated alerts
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <BarChart3 className="h-4 w-4 text-primary" />
                  <span className="text-sm text-foreground">
                    Advanced analytics
                  </span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
