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
  const stats = [
    {
      title: "Provision diesen Monat",
      value: "8.750 €",
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
      title: "Offene Zahlungen",
      value: "2.150 €",
      change: "-3%",
      trend: "down",
      icon: Calendar,
      description: "Ausstehende Provisionen"
    },
    {
      title: "Transaktionen",
      value: "47",
      change: "+15%",
      trend: "up",
      icon: FileText,
      description: "Diesen Monat"
    }
  ];

  const recentTransactions = [
    { id: 1, client: "Acme GmbH", product: "Enterprise-Lizenz", amount: 25000, commission: 1250, date: "15.01.2024" },
    { id: 2, client: "TechStart AG", product: "Professional-Plan", amount: 12000, commission: 960, date: "14.01.2024" },
    { id: 3, client: "Global Systems", product: "Premium-Support", amount: 8500, commission: 425, date: "13.01.2024" },
    { id: 4, client: "Innovation Labs", product: "Basis-Plan", amount: 5000, commission: 300, date: "12.01.2024" },
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
        {/* Kommende Auszahlungen */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Kommende Auszahlungen</CardTitle>
            <CardDescription>Ihre nächsten Provisionszahlungen</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-success/10 border border-success/20 rounded-lg">
                <div>
                  <p className="font-medium text-foreground">Juni 2024</p>
                  <p className="text-sm text-muted-foreground">Fällig: 15.06.2024</p>
                </div>
                <span className="font-bold text-success">8.750 €</span>
              </div>
              <div className="flex justify-between items-center p-3 border rounded-lg">
                <div>
                  <p className="font-medium text-foreground">Juli 2024</p>
                  <p className="text-sm text-muted-foreground">Voraussichtlich: 15.07.2024</p>
                </div>
                <span className="font-bold text-muted-foreground">5.200 €</span>
              </div>
              <div className="flex justify-between items-center p-3 border rounded-lg">
                <div>
                  <p className="font-medium text-foreground">August 2024</p>
                  <p className="text-sm text-muted-foreground">Geschätzt: 15.08.2024</p>
                </div>
                <span className="font-bold text-muted-foreground">4.800 €</span>
              </div>
            </div>
            
            {/* Monatliche Entwicklung */}
            <div className="mt-6">
              <h4 className="text-sm font-medium mb-3">Monatliche Entwicklung</h4>
              <div className="space-y-2">
                {[
                  { monat: "Mai 2024", betrag: "8.750 €", status: "Aktuell" },
                  { monat: "April 2024", betrag: "7.200 €", status: "Ausgezahlt" },
                  { monat: "März 2024", betrag: "9.100 €", status: "Ausgezahlt" },
                  { monat: "Februar 2024", betrag: "6.850 €", status: "Ausgezahlt" },
                ].map((eintrag, index) => (
                  <div key={index} className="flex justify-between items-center p-2 rounded">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-medium">{eintrag.monat}</span>
                      <Badge variant={eintrag.status === "Aktuell" ? "default" : "outline"} className="text-xs">
                        {eintrag.status}
                      </Badge>
                    </div>
                    <span className="font-bold">{eintrag.betrag}</span>
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
              <DollarSign className="w-4 h-4 mr-2" />
              Provisionsrechner
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <FileText className="w-4 h-4 mr-2" />
              Verkaufsdaten hochladen
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <TrendingUp className="w-4 h-4 mr-2" />
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