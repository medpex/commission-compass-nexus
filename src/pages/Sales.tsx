import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Upload, Download, Search, Filter, Plus, FileSpreadsheet, Eye } from "lucide-react";

export default function Sales() {
  const verkaufsdaten = [
    { 
      id: "V001", 
      datum: "2024-05-15", 
      kunde: "ABC GmbH", 
      produkt: "Premium Paket", 
      wert: "€15.750", 
      provision: "€472.50", 
      status: "Abgeschlossen" 
    },
    { 
      id: "V002", 
      datum: "2024-05-14", 
      kunde: "XYZ AG", 
      produkt: "Standard Lösung", 
      wert: "€8.500", 
      provision: "€255.00", 
      status: "Abgeschlossen" 
    },
    { 
      id: "V003", 
      datum: "2024-05-13", 
      kunde: "Muster KG", 
      produkt: "Enterprise Suite", 
      wert: "€22.000", 
      provision: "€660.00", 
      status: "In Bearbeitung" 
    },
    { 
      id: "V004", 
      datum: "2024-05-12", 
      kunde: "Demo Corp", 
      produkt: "Basic Paket", 
      wert: "€4.200", 
      provision: "€126.00", 
      status: "Abgeschlossen" 
    },
    { 
      id: "V005", 
      datum: "2024-05-11", 
      kunde: "Test Industries", 
      produkt: "Premium Paket", 
      wert: "€18.900", 
      provision: "€567.00", 
      status: "Storniert" 
    },
  ];

  const produktstatistiken = [
    { produkt: "Premium Paket", verkauft: 15, umsatz: "€236.250", anteil: "42%" },
    { produkt: "Enterprise Suite", verkauft: 8, umsatz: "€176.000", anteil: "31%" },
    { produkt: "Standard Lösung", verkauft: 12, umsatz: "€102.000", anteil: "18%" },
    { produkt: "Basic Paket", verkauft: 18, umsatz: "€75.600", anteil: "13%" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Verkaufsdaten</h1>
          <p className="text-muted-foreground">Verwaltung und Analyse Ihrer Verkaufsabschlüsse</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Upload className="w-4 h-4 mr-2" />
            Import
          </Button>
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Neuer Verkauf
          </Button>
        </div>
      </div>

      <Tabs defaultValue="uebersicht" className="space-y-6">
        <TabsList>
          <TabsTrigger value="uebersicht">Übersicht</TabsTrigger>
          <TabsTrigger value="produktanalyse">Produktanalyse</TabsTrigger>
          <TabsTrigger value="import">Datenimport</TabsTrigger>
        </TabsList>

        <TabsContent value="uebersicht" className="space-y-6">
          {/* Filter und Suche */}
          <Card>
            <CardHeader>
              <CardTitle>Filter & Suche</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4">
                <div className="flex-1">
                  <Input placeholder="Kunde, Produkt oder ID suchen..." className="w-full" />
                </div>
                <Button variant="outline">
                  <Search className="w-4 h-4 mr-2" />
                  Suchen
                </Button>
                <Button variant="outline">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Verkaufstabelle */}
          <Card>
            <CardHeader>
              <CardTitle>Aktuelle Verkäufe</CardTitle>
              <CardDescription>Übersicht der letzten Verkaufsabschlüsse</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-7 gap-4 pb-3 border-b font-medium text-sm text-muted-foreground">
                  <div>ID</div>
                  <div>Datum</div>
                  <div>Kunde</div>
                  <div>Produkt</div>
                  <div>Wert</div>
                  <div>Provision</div>
                  <div>Status</div>
                </div>
                {verkaufsdaten.map((verkauf) => (
                  <div key={verkauf.id} className="grid grid-cols-7 gap-4 py-3 border-b items-center">
                    <div className="font-mono text-sm">{verkauf.id}</div>
                    <div className="text-sm">{verkauf.datum}</div>
                    <div className="font-medium">{verkauf.kunde}</div>
                    <div className="text-sm">{verkauf.produkt}</div>
                    <div className="font-bold">{verkauf.wert}</div>
                    <div className="text-primary font-medium">{verkauf.provision}</div>
                    <div>
                      <Badge variant={
                        verkauf.status === "Abgeschlossen" ? "default" :
                        verkauf.status === "In Bearbeitung" ? "secondary" : "destructive"
                      }>
                        {verkauf.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="produktanalyse" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileSpreadsheet className="w-5 h-5" />
                Produktperformance
              </CardTitle>
              <CardDescription>Analyse der Verkäufe nach Produktkategorien</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {produktstatistiken.map((produkt, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="space-y-1">
                      <p className="font-medium">{produkt.produkt}</p>
                      <p className="text-sm text-muted-foreground">{produkt.verkauft} Verkäufe</p>
                    </div>
                    <div className="text-right space-y-1">
                      <p className="font-bold">{produkt.umsatz}</p>
                      <Badge variant="outline">{produkt.anteil} Anteil</Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="import" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Datenimport</CardTitle>
              <CardDescription>Excel- oder CSV-Dateien mit Verkaufsdaten importieren</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center">
                <Upload className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                <h3 className="text-lg font-medium mb-2">Datei hochladen</h3>
                <p className="text-muted-foreground mb-4">
                  Ziehen Sie Ihre Datei hierher oder klicken Sie zum Auswählen
                </p>
                <Button>Datei auswählen</Button>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-medium">Unterstützte Formate:</h4>
                <ul className="text-sm text-muted-foreground space-y-1 pl-4">
                  <li>• Excel (.xlsx, .xls)</li>
                  <li>• CSV-Dateien</li>
                  <li>• Maximale Dateigröße: 10 MB</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="font-medium">Erforderliche Spalten:</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-mono bg-muted px-2 py-1 rounded">Datum</span>
                    <span className="font-mono bg-muted px-2 py-1 rounded ml-2">Kunde</span>
                  </div>
                  <div>
                    <span className="font-mono bg-muted px-2 py-1 rounded">Produkt</span>
                    <span className="font-mono bg-muted px-2 py-1 rounded ml-2">Wert</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}