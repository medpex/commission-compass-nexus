import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Download, DollarSign, TrendingUp, Target, Clock } from "lucide-react";

export default function Commission() {
  const commissionData = [
    { monat: "Januar 2024", basis: "€125.000", provision: "€3.750", status: "Ausgezahlt" },
    { monat: "Februar 2024", basis: "€98.000", provision: "€2.940", status: "Ausgezahlt" },
    { monat: "März 2024", basis: "€142.000", provision: "€4.260", status: "Ausgezahlt" },
    { monat: "April 2024", basis: "€156.000", provision: "€4.680", status: "Berechnet" },
    { monat: "Mai 2024", basis: "€134.000", provision: "€4.020", status: "Vorläufig" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Meine Provision</h1>
          <p className="text-muted-foreground">Detaillierte Übersicht Ihrer Provisionsabrechnung</p>
        </div>
        <Button>
          <Download className="w-4 h-4 mr-2" />
          Export
        </Button>
      </div>

      {/* Übersichtskarten */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Gesamtprovision YTD</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">€19.650</div>
            <p className="text-xs text-muted-foreground">+12% vs. Vorjahr</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Aktueller Monat</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">€4.020</div>
            <p className="text-xs text-muted-foreground">Mai 2024 (vorläufig)</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Durchschnitt/Monat</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">€3.930</div>
            <p className="text-xs text-muted-foreground">Letzten 5 Monate</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Nächste Auszahlung</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">€4.680</div>
            <p className="text-xs text-muted-foreground">15. Mai 2024</p>
          </CardContent>
        </Card>
      </div>

      {/* Jahres-Ziel Progress */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-5 h-5" />
            Jahres-Provisionsziel 2024
          </CardTitle>
          <CardDescription>Fortschritt zu Ihrem Jahresziel von €50.000</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span>€19.650 von €50.000</span>
              <span>39.3%</span>
            </div>
            <Progress value={39.3} className="h-3" />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Benötigt: €30.350</span>
              <span>Verbleibende Zeit: 7 Monate</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Provisionshistorie */}
      <Card>
        <CardHeader>
          <CardTitle>Provisionshistorie</CardTitle>
          <CardDescription>Übersicht der letzten Provisionsabrechnungen</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {commissionData.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="space-y-1">
                  <p className="font-medium">{item.monat}</p>
                  <p className="text-sm text-muted-foreground">Verkaufsbasis: {item.basis}</p>
                </div>
                <div className="text-right space-y-1">
                  <p className="font-bold text-lg">{item.provision}</p>
                  <Badge variant={
                    item.status === "Ausgezahlt" ? "default" :
                    item.status === "Berechnet" ? "secondary" : "outline"
                  }>
                    {item.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}