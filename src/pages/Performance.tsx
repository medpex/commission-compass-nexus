import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart3, TrendingUp, Award, Users, Calendar, Target } from "lucide-react";

export default function Performance() {
  const leistungsKennzahlen = [
    { titel: "Verkäufe diese Woche", wert: "12", ziel: "15", prozent: 80 },
    { titel: "Abschlussrate", wert: "68%", ziel: "70%", prozent: 97 },
    { titel: "Durchschnittswert", wert: "€11.250", ziel: "€10.000", prozent: 112 },
    { titel: "Kundengespräche", wert: "28", ziel: "25", prozent: 112 },
  ];

  const monatsvergleich = [
    { monat: "Januar", verkaeufe: 45, umsatz: "€506.250", rang: 3 },
    { monat: "Februar", verkaeufe: 38, umsatz: "€427.500", rang: 5 },
    { monat: "März", verkaeufe: 52, umsatz: "€585.000", rang: 2 },
    { monat: "April", verkaeufe: 48, umsatz: "€540.000", rang: 2 },
    { monat: "Mai", verkaeufe: 41, umsatz: "€461.250", rang: 4 },
  ];

  const teamRanking = [
    { position: 1, name: "Anna Schmidt", verkaeufe: 58, umsatz: "€652.500" },
    { position: 2, name: "Max Mustermann", verkaeufe: 48, umsatz: "€540.000" },
    { position: 3, name: "Lisa Weber", verkaeufe: 46, umsatz: "€517.500" },
    { position: 4, name: "Sie", verkaeufe: 41, umsatz: "€461.250" },
    { position: 5, name: "Tom Fischer", verkaeufe: 39, umsatz: "€438.750" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Leistungsübersicht</h1>
        <p className="text-muted-foreground">Analyse Ihrer Verkaufsperformance und Zielerreichung</p>
      </div>

      <Tabs defaultValue="aktuell" className="space-y-6">
        <TabsList>
          <TabsTrigger value="aktuell">Aktuelle Woche</TabsTrigger>
          <TabsTrigger value="monat">Monatstrend</TabsTrigger>
          <TabsTrigger value="team">Team-Ranking</TabsTrigger>
        </TabsList>

        <TabsContent value="aktuell" className="space-y-6">
          {/* Wochenziele */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {leistungsKennzahlen.map((kennzahl, index) => (
              <Card key={index}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">{kennzahl.titel}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl font-bold">{kennzahl.wert}</span>
                    <Badge variant={kennzahl.prozent >= 100 ? "default" : "secondary"}>
                      {kennzahl.prozent}%
                    </Badge>
                  </div>
                  <div className="space-y-2">
                    <Progress value={kennzahl.prozent} className="h-2" />
                    <p className="text-xs text-muted-foreground">Ziel: {kennzahl.ziel}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Tagesfortschritt */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Wochenfortschritt
              </CardTitle>
              <CardDescription>Tägliche Verkaufsziele diese Woche</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag"].map((tag, index) => {
                  const verkauft = [3, 2, 4, 2, 1][index];
                  const ziel = 3;
                  const prozent = (verkauft / ziel) * 100;
                  
                  return (
                    <div key={tag} className="flex items-center justify-between">
                      <div className="w-20 text-sm font-medium">{tag}</div>
                      <div className="flex-1 mx-4">
                        <Progress value={prozent} className="h-2" />
                      </div>
                      <div className="text-sm">
                        {verkauft}/{ziel}
                        <span className="ml-2 text-muted-foreground">
                          ({Math.round(prozent)}%)
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="monat" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5" />
                Monatsvergleich
              </CardTitle>
              <CardDescription>Entwicklung der letzten 5 Monate</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {monatsvergleich.map((monat, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="space-y-1">
                      <p className="font-medium">{monat.monat}</p>
                      <p className="text-sm text-muted-foreground">{monat.verkaeufe} Verkäufe</p>
                    </div>
                    <div className="text-right space-y-1">
                      <p className="font-bold">{monat.umsatz}</p>
                      <Badge variant={monat.rang <= 3 ? "default" : "secondary"}>
                        Rang #{monat.rang}
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
                <Users className="w-5 h-5" />
                Team-Ranking Mai 2024
              </CardTitle>
              <CardDescription>Ihre Position im Verkaufsteam</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {teamRanking.map((mitarbeiter, index) => (
                  <div 
                    key={index} 
                    className={`flex items-center justify-between p-4 rounded-lg border ${
                      mitarbeiter.name === "Sie" ? "bg-muted/50 border-primary" : ""
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-muted">
                        {mitarbeiter.position <= 3 ? (
                          <Award className="w-4 h-4 text-primary" />
                        ) : (
                          <span className="text-sm font-medium">#{mitarbeiter.position}</span>
                        )}
                      </div>
                      <div>
                        <p className="font-medium">{mitarbeiter.name}</p>
                        <p className="text-sm text-muted-foreground">{mitarbeiter.verkaeufe} Verkäufe</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold">{mitarbeiter.umsatz}</p>
                    </div>
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