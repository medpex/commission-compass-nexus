import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { 
  TrendingUp, 
  DollarSign, 
  Target, 
  Award,
  ArrowUpRight,
  ArrowDownRight,
  Calendar,
  FileText
} from "lucide-react";

export default function Dashboard() {
  const currentCommission = 8750;
  const monthlyGoal = 12000;
  const progressPercentage = (currentCommission / monthlyGoal) * 100;

  const stats = [
    {
      title: "This Month's Commission",
      value: `$${currentCommission.toLocaleString()}`,
      change: "+12.5%",
      trend: "up",
      icon: DollarSign,
      description: "vs last month"
    },
    {
      title: "Sales Volume",
      value: "$145,230",
      change: "+8.2%", 
      trend: "up",
      icon: TrendingUp,
      description: "total sales this month"
    },
    {
      title: "Goal Progress",
      value: `${Math.round(progressPercentage)}%`,
      change: "3 days ahead",
      trend: "up",
      icon: Target,
      description: "of monthly target"
    },
    {
      title: "Current Tier",
      value: "Gold",
      change: "Next: Platinum",
      trend: "neutral",
      icon: Award,
      description: "commission tier"
    }
  ];

  const recentTransactions = [
    { id: 1, client: "Acme Corp", product: "Enterprise License", amount: 25000, commission: 1250, date: "2024-01-15" },
    { id: 2, client: "TechStart Inc", product: "Professional Plan", amount: 12000, commission: 960, date: "2024-01-14" },
    { id: 3, client: "Global Systems", product: "Premium Support", amount: 8500, commission: 425, date: "2024-01-13" },
    { id: 4, client: "Innovation Labs", product: "Basic Plan", amount: 5000, commission: 300, date: "2024-01-12" },
  ];

  const tierProgress = [
    { tier: "Bronze", threshold: 5000, reached: true },
    { tier: "Silver", threshold: 8000, reached: true },
    { tier: "Gold", threshold: 10000, reached: false, current: true },
    { tier: "Platinum", threshold: 15000, reached: false },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Welcome back, John!</h1>
          <p className="text-muted-foreground">Here's your commission overview for January 2024</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" className="flex items-center space-x-2">
            <Calendar className="w-4 h-4" />
            <span>This Month</span>
          </Button>
          <Button className="flex items-center space-x-2">
            <FileText className="w-4 h-4" />
            <span>Download Report</span>
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.title} className="hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-5 w-5 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{stat.value}</div>
              <div className="flex items-center space-x-1 text-sm">
                {stat.trend === "up" ? (
                  <ArrowUpRight className="w-4 h-4 text-success" />
                ) : stat.trend === "down" ? (
                  <ArrowDownRight className="w-4 h-4 text-destructive" />
                ) : null}
                <span className={
                  stat.trend === "up" ? "text-success" : 
                  stat.trend === "down" ? "text-destructive" : 
                  "text-muted-foreground"
                }>
                  {stat.change}
                </span>
                <span className="text-muted-foreground">{stat.description}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Goal Progress */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Monthly Goal Progress</CardTitle>
            <CardDescription>Track your progress towards this month's commission goal</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Current: ${currentCommission.toLocaleString()}</span>
              <span className="text-sm text-muted-foreground">Goal: ${monthlyGoal.toLocaleString()}</span>
            </div>
            <Progress value={progressPercentage} className="h-3" />
            <div className="flex items-center justify-between text-sm">
              <span className="text-success font-medium">{Math.round(progressPercentage)}% complete</span>
              <span className="text-muted-foreground">
                ${(monthlyGoal - currentCommission).toLocaleString()} remaining
              </span>
            </div>
            
            {/* Tier Progress */}
            <div className="mt-6">
              <h4 className="text-sm font-medium mb-3">Commission Tiers</h4>
              <div className="space-y-2">
                {tierProgress.map((tier) => (
                  <div key={tier.tier} className="flex items-center justify-between p-2 rounded-lg bg-muted/30">
                    <div className="flex items-center space-x-2">
                      <div className={`w-3 h-3 rounded-full ${
                        tier.reached ? 'bg-success' : 
                        tier.current ? 'bg-warning' : 'bg-muted'
                      }`} />
                      <span className={`text-sm font-medium ${tier.current ? 'text-foreground' : 'text-muted-foreground'}`}>
                        {tier.tier}
                      </span>
                      {tier.current && <Badge variant="secondary" className="text-xs">Current</Badge>}
                    </div>
                    <span className="text-sm text-muted-foreground">${tier.threshold.toLocaleString()}</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common tasks and tools</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button className="w-full justify-start" variant="outline">
              <TrendingUp className="w-4 h-4 mr-2" />
              View Performance Report
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <FileText className="w-4 h-4 mr-2" />
              Upload Sales Data
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <Target className="w-4 h-4 mr-2" />
              What-If Calculator
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <Calendar className="w-4 h-4 mr-2" />
              Commission History
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Recent Transactions */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
          <CardDescription>Your latest commission-eligible sales</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentTransactions.map((transaction) => (
              <div key={transaction.id} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center space-x-3">
                    <div>
                      <p className="font-medium text-foreground">{transaction.client}</p>
                      <p className="text-sm text-muted-foreground">{transaction.product}</p>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium text-foreground">${transaction.amount.toLocaleString()}</p>
                  <p className="text-sm text-success">+${transaction.commission}</p>
                </div>
                <div className="text-right ml-4">
                  <p className="text-sm text-muted-foreground">{transaction.date}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <Button variant="outline" className="w-full">
              View All Transactions
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}