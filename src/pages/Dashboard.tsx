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
      title: "Provision diesen Monat",
      value: `${currentCommission.toLocaleString()} €`,
      change: "+12,5%",
      trend: "up",
      icon: DollarSign,
      description: "vs. letzter Monat"
    },
    {
      title: "Verkaufsvolumen",
      value: "145.230 €",
      change: "+8,2%", 
      trend: "up",
      icon: TrendingUp,
      description: "Gesamtumsatz diesen Monat"
    },
    {
      title: "Zielfortschritt",
      value: `${Math.round(progressPercentage)}%`,
      change: "3 Tage voraus",
      trend: "up",
      icon: Target,
      description: "des Monatsziels"
    },
    {
      title: "Aktuelle Stufe",
      value: "Gold",
      change: "Nächste: Platin",
      trend: "neutral",
      icon: Award,
      description: "Provisionsstufe"
    }
  ];

  const recentTransactions = [
    { id: 1, client: "Acme GmbH", product: "Enterprise-Lizenz", amount: 25000, commission: 1250, date: "15.01.2024" },
    { id: 2, client: "TechStart AG", product: "Professional-Plan", amount: 12000, commission: 960, date: "14.01.2024" },
    { id: 3, client: "Global Systems", product: "Premium-Support", amount: 8500, commission: 425, date: "13.01.2024" },
    { id: 4, client: "Innovation Labs", product: "Basis-Plan", amount: 5000, commission: 300, date: "12.01.2024" },
  ];

  const tierProgress = [
    { tier: "Bronze", threshold: 5000, reached: true },
    { tier: "Silber", threshold: 8000, reached: true },
    { tier: "Gold", threshold: 10000, reached: false, current: true },
    { tier: "Platin", threshold: 15000, reached: false },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Willkommen zurück, Max!</h1>
          <p className="text-muted-foreground">Hier ist Ihre Provisionsübersicht für Januar 2024</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" className="flex items-center space-x-2">
            <Calendar className="w-4 h-4" />
            <span>Dieser Monat</span>
          </Button>
          <Button className="flex items-center space-x-2">
            <FileText className="w-4 h-4" />
            <span>Bericht herunterladen</span>
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
            <CardTitle>Monatlicher Zielfortschritt</CardTitle>
            <CardDescription>Verfolgen Sie Ihren Fortschritt zu Ihrem Provisionsziel für diesen Monat</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Aktuell: {currentCommission.toLocaleString()} €</span>
              <span className="text-sm text-muted-foreground">Ziel: {monthlyGoal.toLocaleString()} €</span>
            </div>
            <Progress value={progressPercentage} className="h-3" />
            <div className="flex items-center justify-between text-sm">
              <span className="text-success font-medium">{Math.round(progressPercentage)}% erreicht</span>
              <span className="text-muted-foreground">
                {(monthlyGoal - currentCommission).toLocaleString()} € verbleibend
              </span>
            </div>
            
            {/* Tier Progress */}
            <div className="mt-6">
              <h4 className="text-sm font-medium mb-3">Provisionsstufen</h4>
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
                      {tier.current && <Badge variant="secondary" className="text-xs">Aktuell</Badge>}
                    </div>
                    <span className="text-sm text-muted-foreground">{tier.threshold.toLocaleString()} €</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Schnellaktionen</CardTitle>
            <CardDescription>Häufige Aufgaben und Tools</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button className="w-full justify-start" variant="outline">
              <TrendingUp className="w-4 h-4 mr-2" />
              Leistungsbericht anzeigen
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <FileText className="w-4 h-4 mr-2" />
              Verkaufsdaten hochladen
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <Target className="w-4 h-4 mr-2" />
              Was-Wäre-Wenn-Rechner
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <Calendar className="w-4 h-4 mr-2" />
              Provisionsverlauf
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Recent Transactions */}
      <Card>
        <CardHeader>
          <CardTitle>Aktuelle Transaktionen</CardTitle>
          <CardDescription>Ihre neuesten provisionsberechtigten Verkäufe</CardDescription>
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
                  <p className="font-medium text-foreground">{transaction.amount.toLocaleString()} €</p>
                  <p className="text-sm text-success">+{transaction.commission} €</p>
                </div>
                <div className="text-right ml-4">
                  <p className="text-sm text-muted-foreground">{transaction.date}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <Button variant="outline" className="w-full">
              Alle Transaktionen anzeigen
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}