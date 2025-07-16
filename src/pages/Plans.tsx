import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calculator, Plus, Edit, Percent, DollarSign, Target, TrendingUp } from "lucide-react";

export default function Plans() {
  const provisionsPlaene = [
    {
      id: "PLAN001",
      name: "Standard Provisionsplan",
      beschreibung: "Basis-Provisionsplan für neue Mitarbeiter",
      basisProzent: "3%",
      bonusStruktur: "Staffelbonus ab €100.000",
      mitarbeiter: 12,
      status: "Aktiv",
      gueltigAb: "2024-01-01"
    },
    {
      id: "PLAN002", 
      name: "Senior Provisionsplan",
      beschreibung: "Erhöhte Provision für erfahrene Mitarbeiter",
      basisProzent: "3.5%",
      bonusStruktur: "Staffelbonus ab €80.000",
      mitarbeiter: 8,
      status: "Aktiv",
      gueltigAb: "2024-01-01"
    },
    {
      id: "PLAN003",
      name: "Team Lead Provisionsplan",
      beschreibung: "Spezialplan für Teamleiter mit zusätzlichen Boni",
      basisProzent: "4%",
      bonusStruktur: "Team-Performance Bonus",
      mitarbeiter: 3,
      status: "Aktiv",
      gueltigAb: "2024-01-01"
    },
    {
      id: "PLAN004",
      name: "Legacy Plan 2023",
      beschreibung: "Auslaufender Plan aus dem Vorjahr",
      basisProzent: "2.5%",
      bonusStruktur: "Keine Boni",
      mitarbeiter: 2,
      status: "Auslaufend",
      gueltigAb: "2023-01-01"
    }
  ];

  const staffelStrukturen = [
    {
      plan: "Standard Provisionsplan",
      staffeln: [
        { von: "€0", bis: "€50.000", prozent: "3%" },
        { von: "€50.001", bis: "€100.000", prozent: "3.5%" },
        { von: "€100.001", bis: "€150.000", prozent: "4%" },
        { von: "€150.001", bis: "€200.000", prozent: "4.5%" },
        { von: "€200.001", bis: "∞", prozent: "5%" }
      ]
    },
    {
      plan: "Senior Provisionsplan", 
      staffeln: [
        { von: "€0", bis: "€40.000", prozent: "3.5%" },
        { von: "€40.001", bis: "€80.000", prozent: "4%" },
        { von: "€80.001", bis: "€120.000", prozent: "4.5%" },
        { von: "€120.001", bis: "€160.000", prozent: "5%" },
        { von: "€160.001", bis: "∞", prozent: "5.5%" }
      ]
    }
  ];

  const provisionsSimulation = [
    { umsatz: "€50.000", standard: "€1.500", senior: "€1.750", teamLead: "€2.000" },
    { umsatz: "€100.000", standard: "€3.250", senior: "€3.750", teamLead: "€4.200" },
    { umsatz: "€150.000", standard: "€5.250", senior: "€6.000", teamLead: "€6.800" },
    { umsatz: "€200.000", standard: "€7.500", senior: "€8.500", teamLead: "€9.600" },
  ];

  const planLeistung = [
    { plan: "Standard", durchschnittUmsatz: "€125.000", durchschnittProvision: "€3.875", mitarbeiter: 12 },
    { plan: "Senior", durchschnittUmsatz: "€145.000", durchschnittProvision: "€5.075", mitarbeiter: 8 },
    { plan: "Team Lead", durchschnittUmsatz: "€165.000", durchschnittProvision: "€6.950", mitarbeiter: 3 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Provisionspläne</h1>
          <p className="text-muted-foreground">Verwaltung der Provisionsstrukturen und Berechnungsregeln</p>
        </div>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Neuer Plan
        </Button>
      </div>

      <Tabs defaultValue="plaene" className="space-y-6">
        <TabsList>
          <TabsTrigger value="plaene">Provisionspläne</TabsTrigger>
          <TabsTrigger value="staffeln">Staffelstrukturen</TabsTrigger>
          <TabsTrigger value="simulation">Simulation</TabsTrigger>
          <TabsTrigger value="analyse">Analyse</TabsTrigger>
        </TabsList>

        <TabsContent value="plaene" className="space-y-6">
          <div className="grid gap-6">
            {provisionsPlaene.map((plan) => (
              <Card key={plan.id}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        <Calculator className="w-5 h-5" />
                        {plan.name}
                      </CardTitle>
                      <CardDescription>{plan.beschreibung}</CardDescription>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant={plan.status === "Aktiv" ? "default" : "secondary"}>
                        {plan.status}
                      </Badge>
                      <Button variant="outline" size="sm">
                        <Edit className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div>
                      <p className="text-sm text-muted-foreground">Basis-Provision</p>
                      <p className="text-xl font-bold text-primary">{plan.basisProzent}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Bonus-Struktur</p>
                      <p className="font-medium">{plan.bonusStruktur}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Zugewiesene Mitarbeiter</p>
                      <p className="text-xl font-bold">{plan.mitarbeiter}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Gültig ab</p>
                      <p className="font-medium">{plan.gueltigAb}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="staffeln" className="space-y-6">
          {staffelStrukturen.map((struktur, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Percent className="w-5 h-5" />
                  {struktur.plan}
                </CardTitle>
                <CardDescription>Staffelung der Provisionssätze nach Umsatzvolumen</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="grid grid-cols-3 gap-4 pb-3 border-b font-medium text-sm text-muted-foreground">
                    <div>Umsatz von</div>
                    <div>Umsatz bis</div>
                    <div>Provision</div>
                  </div>
                  {struktur.staffeln.map((staffel, staffelIndex) => (
                    <div key={staffelIndex} className="grid grid-cols-3 gap-4 py-2 border-b">
                      <div className="font-medium">{staffel.von}</div>
                      <div className="font-medium">{staffel.bis}</div>
                      <div className="font-bold text-primary">{staffel.prozent}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="simulation" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="w-5 h-5" />
                Provisions-Simulator
              </CardTitle>
              <CardDescription>Vergleich der Provisionsauszahlungen zwischen verschiedenen Plänen</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-4 gap-4 pb-3 border-b font-medium text-sm text-muted-foreground">
                  <div>Umsatz</div>
                  <div>Standard Plan</div>
                  <div>Senior Plan</div>
                  <div>Team Lead Plan</div>
                </div>
                {provisionsSimulation.map((sim, index) => (
                  <div key={index} className="grid grid-cols-4 gap-4 py-3 border-b">
                    <div className="font-bold">{sim.umsatz}</div>
                    <div className="font-medium text-primary">{sim.standard}</div>
                    <div className="font-medium text-primary">{sim.senior}</div>
                    <div className="font-medium text-primary">{sim.teamLead}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analyse" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {planLeistung.map((leistung, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5" />
                    {leistung.plan} Plan
                  </CardTitle>
                  <CardDescription>{leistung.mitarbeiter} Mitarbeiter</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Ø Umsatz:</span>
                    <span className="font-bold">{leistung.durchschnittUmsatz}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Ø Provision:</span>
                    <span className="font-bold text-primary">{leistung.durchschnittProvision}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Provision/Umsatz:</span>
                    <span className="font-medium">
                      {((parseFloat(leistung.durchschnittProvision.replace('€', '').replace('.', '')) / 
                         parseFloat(leistung.durchschnittUmsatz.replace('€', '').replace('.', ''))) * 100).toFixed(1)}%
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}