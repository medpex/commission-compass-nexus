import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Plus, Search, Edit, Package, DollarSign, Trash2, TrendingUp } from "lucide-react";

export default function Products() {
  const [produktkatalog, setProduktKatalog] = useState([
    {
      id: "PRD001",
      name: "Basic Paket",
      kategorie: "Einsteiger",
      preis: 4200,
      provision: 3,
      verkauft: 18,
      umsatz: 75600,
      status: "Aktiv"
    },
    {
      id: "PRD002", 
      name: "Standard Lösung",
      kategorie: "Standard",
      preis: 8500,
      provision: 3,
      verkauft: 12,
      umsatz: 102000,
      status: "Aktiv"
    },
    {
      id: "PRD003",
      name: "Premium Paket", 
      kategorie: "Premium",
      preis: 15750,
      provision: 3,
      verkauft: 15,
      umsatz: 236250,
      status: "Aktiv"
    },
    {
      id: "PRD004",
      name: "Enterprise Suite",
      kategorie: "Enterprise", 
      preis: 22000,
      provision: 3,
      verkauft: 8,
      umsatz: 176000,
      status: "Aktiv"
    },
    {
      id: "PRD005",
      name: "Legacy System",
      kategorie: "Auslaufend",
      preis: 12000, 
      provision: 2,
      verkauft: 2,
      umsatz: 24000,
      status: "Auslaufend"
    }
  ]);

  const [editingProduct, setEditingProduct] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    kategorie: "",
    preis: "",
    provision: "",
    status: "Aktiv"
  });

  const kategorien = ["Einsteiger", "Standard", "Premium", "Enterprise", "Auslaufend"];

  const handleAddProduct = () => {
    setEditingProduct(null);
    setFormData({
      name: "",
      kategorie: "",
      preis: "",
      provision: "",
      status: "Aktiv"
    });
    setIsDialogOpen(true);
  };

  const handleEditProduct = (product) => {
    setEditingProduct(product);
    setFormData({
      name: product.name,
      kategorie: product.kategorie,
      preis: product.preis.toString(),
      provision: product.provision.toString(),
      status: product.status
    });
    setIsDialogOpen(true);
  };

  const handleSaveProduct = () => {
    if (editingProduct) {
      // Bearbeiten
      setProduktKatalog(prev => prev.map(p => 
        p.id === editingProduct.id 
          ? {
              ...p,
              name: formData.name,
              kategorie: formData.kategorie,
              preis: parseFloat(formData.preis),
              provision: parseFloat(formData.provision),
              status: formData.status
            }
          : p
      ));
    } else {
      // Neu hinzufügen
      const newProduct = {
        id: `PRD${String(produktkatalog.length + 1).padStart(3, '0')}`,
        name: formData.name,
        kategorie: formData.kategorie,
        preis: parseFloat(formData.preis),
        provision: parseFloat(formData.provision),
        verkauft: 0,
        umsatz: 0,
        status: formData.status
      };
      setProduktKatalog(prev => [...prev, newProduct]);
    }
    setIsDialogOpen(false);
  };

  const handleDeleteProduct = (productId) => {
    setProduktKatalog(prev => prev.filter(p => p.id !== productId));
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 0
    }).format(amount);
  };

  const getKategorieStats = () => {
    const stats: Record<string, { anzahl: number; umsatz: number; provision: number }> = {};
    kategorien.forEach(kat => {
      const products = produktkatalog.filter(p => p.kategorie === kat);
      stats[kat] = {
        anzahl: products.length,
        umsatz: products.reduce((sum, p) => sum + p.umsatz, 0),
        provision: products.reduce((sum, p) => sum + (p.umsatz * p.provision / 100), 0)
      };
    });
    return stats;
  };

  const topProdukte = [...produktkatalog]
    .sort((a, b) => b.verkauft - a.verkauft)
    .slice(0, 4)
    .map(p => ({
      name: p.name,
      verkauft: p.verkauft,
      trend: "+12%" // Mock data
    }));

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Produktkatalog</h1>
          <p className="text-muted-foreground">Verwaltung des Produktportfolios und Provisionsstrukturen</p>
        </div>
        <Button onClick={handleAddProduct}>
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
                      <Button variant="outline" size="sm" onClick={() => handleEditProduct(produkt)}>
                        <Edit className="w-4 h-4" />
                      </Button>
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button variant="outline" size="sm">
                            <Trash2 className="w-4 h-4 text-destructive" />
                          </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Produkt löschen</AlertDialogTitle>
                            <AlertDialogDescription>
                              Sind Sie sicher, dass Sie "{produkt.name}" löschen möchten? Diese Aktion kann nicht rückgängig gemacht werden.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Abbrechen</AlertDialogCancel>
                            <AlertDialogAction onClick={() => handleDeleteProduct(produkt.id)}>
                              Löschen
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div>
                      <p className="text-sm text-muted-foreground">Verkaufspreis</p>
                      <p className="text-xl font-bold">{formatCurrency(produkt.preis)}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Provision</p>
                      <p className="text-xl font-bold text-primary">{produkt.provision}%</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Verkauft (YTD)</p>
                      <p className="text-xl font-bold">{produkt.verkauft}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Gesamtumsatz</p>
                      <p className="text-xl font-bold">{formatCurrency(produkt.umsatz)}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="kategorien" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(getKategorieStats()).map(([kategorie, stats]) => (
              <Card key={kategorie}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Package className="w-5 h-5" />
                    {kategorie}
                  </CardTitle>
                  <CardDescription>{stats.anzahl} Produkt(e)</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Gesamtumsatz:</span>
                    <span className="font-bold">{formatCurrency(stats.umsatz)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Provision:</span>
                    <span className="font-bold text-primary">{formatCurrency(stats.provision)}</span>
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
                  {Object.entries(getKategorieStats()).map(([kategorie, stats]) => (
                    <div key={kategorie} className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">{kategorie}</p>
                        <p className="text-sm text-muted-foreground">{formatCurrency(stats.umsatz)}</p>
                      </div>
                      <p className="font-bold text-primary">{formatCurrency(stats.provision)}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      {/* Dialog für Produkt hinzufügen/bearbeiten */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {editingProduct ? "Produkt bearbeiten" : "Neues Produkt hinzufügen"}
            </DialogTitle>
            <DialogDescription>
              {editingProduct ? "Bearbeiten Sie die Produktdetails." : "Fügen Sie ein neues Produkt zum Katalog hinzu."}
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Produktname</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                placeholder="z.B. Basic Paket"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="kategorie">Kategorie</Label>
              <Select value={formData.kategorie} onValueChange={(value) => setFormData(prev => ({ ...prev, kategorie: value }))}>
                <SelectTrigger>
                  <SelectValue placeholder="Kategorie wählen" />
                </SelectTrigger>
                <SelectContent>
                  {kategorien.map(kat => (
                    <SelectItem key={kat} value={kat}>{kat}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="preis">Verkaufspreis (€)</Label>
              <Input
                id="preis"
                type="number"
                value={formData.preis}
                onChange={(e) => setFormData(prev => ({ ...prev, preis: e.target.value }))}
                placeholder="4200"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="provision">Provision (%)</Label>
              <Input
                id="provision"
                type="number"
                value={formData.provision}
                onChange={(e) => setFormData(prev => ({ ...prev, provision: e.target.value }))}
                placeholder="3"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="status">Status</Label>
              <Select value={formData.status} onValueChange={(value) => setFormData(prev => ({ ...prev, status: value }))}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Aktiv">Aktiv</SelectItem>
                  <SelectItem value="Auslaufend">Auslaufend</SelectItem>
                  <SelectItem value="Inaktiv">Inaktiv</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
              Abbrechen
            </Button>
            <Button onClick={handleSaveProduct}>
              {editingProduct ? "Speichern" : "Hinzufügen"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}