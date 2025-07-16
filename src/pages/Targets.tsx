import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Target, Calendar, TrendingUp, Award, Edit, Plus } from "lucide-react";

export default function Targets() {
  const aktuelleZiele = [
    {
      titel: "Monatsumsatz Mai",
      ziel: "€150.000",
      erreicht: "€134.000",
      prozent: 89,
      verbleibend: 16,
      zeitraum: "bis 31.05.2024"
    },
    {
      titel: "Quartalsziel Q2",
      ziel: "€450.000", 
      erreicht: "€389.000",
      prozent: 86,
      verbleibend: 46,
      zeitraum: "bis 30.06.2024"
    },
    {
      titel: "Jahresziel 2024",
      ziel: "€1.800.000",
      erreicht: "€655.000", 
      prozent: 36,
      verbleibend: 249,
      zeitraum: "bis 31.12.2024"
    },
    {
      titel: "Neukundenziel",
      ziel: "25 Kunden",
      erreicht: "18 Kunden",
      prozent: 72,
      verbleibend: 16,
      zeitraum: "bis 31.05.2024"
    }
  ];

  const zielverlauf = [
    { monat: "Januar", ziel: "€140.000", erreicht: "€145.250", prozent: 104 },
    { monat: "Februar", ziel: "€140.000", erreicht: "€138.750", prozent: 99 },
    { monat: "März", ziel: "€150.000", erreicht: "€152.300", prozent: 101 },
    { monat: "April", ziel: "€150.000", erreicht: "€148.900", prozent: 99 },
    { monat: "Mai", ziel: "€150.000", erreicht: "€134.000", prozent: 89 },
  ];

  const teamZiele = [
    { name: "Anna Schmidt", ziel: "€160.000", erreicht: "€168.500", prozent: 105 },
    { name: "Max Mustermann", ziel: "€150.000", erreicht: "€134.000", prozent: 89 },
    { name: "Lisa Weber", ziel: "€145.000", erreicht: "€141.750", prozent: 98 },
    { name: "Tom Fischer", ziel: "€140.000", erreicht: "€128.600", prozent: 92 },
    { name: "Sarah Klein", ziel: "€155.000", erreicht: "€162.250", prozent: 105 },
  ];

  const belohnungen = [
    { ziel: "€150.000 Monatsumsatz", belohnung: "€500 Bonus", status: "In Reichweite" },
    { ziel: "€450.000 Quartalsumsatz", belohnung: "€2.000 Bonus", status: "In Reichweite" },
    { ziel: "Top 3 im Team", belohnung: "Wellness-Wochenende", status: "Möglich" },
    { ziel: "25 Neukunden", belohnung: "€1.000 Bonus", status: "In Reichweite" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Ziele & Vorgaben</h1>
          <p className="text-muted-foreground">Übersicht Ihrer Verkaufsziele und Zielerreichung</p>
        </div>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Neues Ziel
        </Button>
      </div>

      <Tabs defaultValue="aktuell" className="space-y-6">
        <TabsList>
          <TabsTrigger value="aktuell">Aktuelle Ziele</TabsTrigger>
          <TabsTrigger value="verlauf">Zielverlauf</TabsTrigger>
          <TabsTrigger value="team">Team-Vergleich</TabsTrigger>
          <TabsTrigger value="belohnungen">Belohnungen</TabsTrigger>
        </TabsList>

        <TabsContent value="aktuell" className="space-y-6">
          <div className="grid gap-6">
            {aktuelleZiele.map((ziel, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        <Target className="w-5 h-5" />
                        {ziel.titel}
                      </CardTitle>
                      <CardDescription>{ziel.zeitraum}</CardDescription>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant={ziel.prozent >= 100 ? "default" : ziel.prozent >= 80 ? "secondary" : "destructive"}>
                        {ziel.prozent}%
                      </Badge>
                      <Button variant="outline" size="sm">
                        <Edit className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center text-sm">
                    <span>Fortschritt: {ziel.erreicht} von {ziel.ziel}</span>
                    <span>{ziel.verbleibend} Tage verbleibend</span>
                  </div>
                  <Progress value={ziel.prozent} className="h-3" />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Erreicht</span>
                    <span>Ziel</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="verlauf" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Monatszielverlauf
              </CardTitle>
              <CardDescription>Zielerreichung der letzten 5 Monate</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {zielverlauf.map((monat, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="space-y-1">
                      <p className="font-medium">{monat.monat}</p>
                      <p className="text-sm text-muted-foreground">
                        Ziel: {monat.ziel}
                      </p>
                    </div>
                    <div className="text-right space-y-1">
                      <p className="font-bold">{monat.erreicht}</p>
                      <Badge variant={monat.prozent >= 100 ? "default" : "secondary"}>
                        {monat.prozent}%
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="team" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                Team-Zielvergleich Mai
              </CardTitle>
              <CardDescription>Zielerreichung aller Teammitglieder</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {teamZiele.map((mitarbeiter, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">{mitarbeiter.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {mitarbeiter.erreicht} von {mitarbeiter.ziel}
                        </p>
                      </div>
                      <Badge variant={mitarbeiter.prozent >= 100 ? "default" : "secondary"}>
                        {mitarbeiter.prozent}%
                      </Badge>
                    </div>
                    <Progress value={mitarbeiter.prozent} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="belohnungen" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="w-5 h-5" />
                Verfügbare Belohnungen
              </CardTitle>
              <CardDescription>Incentives bei Zielerreichung</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {belohnungen.map((belohnung, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="space-y-1">
                      <p className="font-medium">{belohnung.ziel}</p>
                      <p className="text-sm text-muted-foreground">{belohnung.belohnung}</p>
                    </div>
                    <Badge variant={
                      belohnung.status === "In Reichweite" ? "default" : "secondary"
                    }>
                      {belohnung.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}