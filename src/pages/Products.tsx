import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, Search, Edit, Package, DollarSign, Percent, TrendingUp } from "lucide-react";

export default function Products() {
  const produktkatalog = [
    {
      id: "PRD001",
      name: "Basic Paket",
      kategorie: "Einsteiger",
      preis: "€4.200",
      provision: "3%",
      verkauft: 18,
      umsatz: "€75.600",
      status: "Aktiv"
    },
    {
      id: "PRD002", 
      name: "Standard Lösung",
      kategorie: "Standard",
      preis: "€8.500",
      provision: "3%",
      verkauft: 12,
      umsatz: "€102.000",
      status: "Aktiv"
    },
    {
      id: "PRD003",
      name: "Premium Paket", 
      kategorie: "Premium",
      preis: "€15.750",
      provision: "3%",
      verkauft: 15,
      umsatz: "€236.250",
      status: "Aktiv"
    },
    {
      id: "PRD004",
      name: "Enterprise Suite",
      kategorie: "Enterprise", 
      preis: "€22.000",
      provision: "3%",
      verkauft: 8,
      umsatz: "€176.000",
      status: "Aktiv"
    },
    {
      id: "PRD005",
      name: "Legacy System",
      kategorie: "Auslaufend",
      preis: "€12.000", 
      provision: "2%",
      verkauft: 2,
      umsatz: "€24.000",
      status: "Auslaufend"
    }
  ];

  const kategorien = [
    { name: "Einsteiger", anzahl: 1, umsatz: "€75.600", provision: "€2.268" },
    { name: "Standard", anzahl: 1, umsatz: "€102.000", provision: "€3.060" },
    { name: "Premium", anzahl: 1, umsatz: "€236.250", provision: "€7.087" },
    { name: "Enterprise", anzahl: 1, umsatz: "€176.000", provision: "€5.280" },
  ];

  const topProdukte = [
    { name: "Premium Paket", verkauft: 15, trend: "+12%" },
    { name: "Standard Lösung", verkauft: 12, trend: "+8%" },
    { name: "Basic Paket", verkauft: 18, trend: "+5%" },
    { name: "Enterprise Suite", verkauft: 8, trend: "+15%" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Produktkatalog</h1>
          <p className="text-muted-foreground">Verwaltung des Produktportfolios und Provisionsstrukturen</p>
        </div>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Neues Produkt
        </Button>
      </div>

      <Tabs defaultValue="katalog" className="space-y-6">
        <TabsList>
          <TabsTrigger value="katalog">Produktkatalog</TabsTrigger>
          <TabsTrigger value="kategorien">Kategorien</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
        </TabsList>

        <TabsContent value="katalog" className="space-y-6">
          {/* Suche und Filter */}
          <Card>
            <CardHeader>
              <CardTitle>Produktsuche</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4">
                <div className="flex-1">
                  <Input placeholder="Produktname oder ID suchen..." />
                </div>
                <Button variant="outline">
                  <Search className="w-4 h-4 mr-2" />
                  Suchen
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Produktliste */}
          <div className="grid gap-6">
            {produktkatalog.map((produkt) => (
              <Card key={produkt.id}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="flex items-center gap-3">
                        <Package className="w-5 h-5" />
                        {produkt.name}
                        <Badge variant="outline">{produkt.kategorie}</Badge>
                      </CardTitle>
                      <CardDescription>Produkt-ID: {produkt.id}</CardDescription>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant={produkt.status === "Aktiv" ? "default" : "secondary"}>
                        {produkt.status}
                      </Badge>
                      <Button variant="outline" size="sm">
                        <Edit className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div>
                      <p className="text-sm text-muted-foreground">Verkaufspreis</p>
                      <p className="text-xl font-bold">{produkt.preis}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Provision</p>
                      <p className="text-xl font-bold text-primary">{produkt.provision}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Verkauft (YTD)</p>
                      <p className="text-xl font-bold">{produkt.verkauft}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Gesamtumsatz</p>
                      <p className="text-xl font-bold">{produkt.umsatz}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="kategorien" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {kategorien.map((kategorie, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Package className="w-5 h-5" />
                    {kategorie.name}
                  </CardTitle>
                  <CardDescription>{kategorie.anzahl} Produkt(e)</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Gesamtumsatz:</span>
                    <span className="font-bold">{kategorie.umsatz}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Provision:</span>
                    <span className="font-bold text-primary">{kategorie.provision}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="performance" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Top Produkte */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  Top Performer
                </CardTitle>
                <CardDescription>Meist verkaufte Produkte diesen Monat</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topProdukte.map((produkt, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">{produkt.name}</p>
                        <p className="text-sm text-muted-foreground">{produkt.verkauft} Verkäufe</p>
                      </div>
                      <Badge variant="outline" className="text-green-600">
                        {produkt.trend}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Provision Overview */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="w-5 h-5" />
                  Provisionsübersicht
                </CardTitle>
                <CardDescription>Provisionen nach Produktkategorie</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {kategorien.map((kategorie, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">{kategorie.name}</p>
                        <p className="text-sm text-muted-foreground">{kategorie.umsatz}</p>
                      </div>
                      <p className="font-bold text-primary">{kategorie.provision}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}