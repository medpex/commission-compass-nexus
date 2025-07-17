import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Plus, Search, Mail, Phone, Edit, Users, Award, TrendingUp, Trash2 } from "lucide-react";

interface Mitarbeiter {
  id: string;
  name: string;
  email: string;
  telefon: string;
  team: string;
  position: string;
  startdatum: string;
  umsatz: number;
  ziel: number;
  zielerreichung: number;
  provision: number;
  status: string;
}

export default function Reps() {
  const [vertriebsmitarbeiter, setVertriebsmitarbeiter] = useState<Mitarbeiter[]>([
    {
      id: "VM001",
      name: "Anna Schmidt",
      email: "anna.schmidt@company.de",
      telefon: "+49 123 456789",
      team: "Nord",
      position: "Senior Sales Rep",
      startdatum: "2022-03-15",
      umsatz: 168500,
      ziel: 160000,
      zielerreichung: 105,
      provision: 5055,
      status: "Aktiv"
    },
    {
      id: "VM002", 
      name: "Max Mustermann",
      email: "max.mustermann@company.de",
      telefon: "+49 123 456790",
      team: "Süd",
      position: "Sales Representative",
      startdatum: "2023-01-10",
      umsatz: 134000,
      ziel: 150000,
      zielerreichung: 89,
      provision: 4020,
      status: "Aktiv"
    },
    {
      id: "VM003",
      name: "Lisa Weber",
      email: "lisa.weber@company.de", 
      telefon: "+49 123 456791",
      team: "West",
      position: "Sales Representative",
      startdatum: "2022-08-20",
      umsatz: 141750,
      ziel: 145000,
      zielerreichung: 98,
      provision: 4252,
      status: "Aktiv"
    },
    {
      id: "VM004",
      name: "Tom Fischer",
      email: "tom.fischer@company.de",
      telefon: "+49 123 456792",
      team: "Ost",
      position: "Junior Sales Rep",
      startdatum: "2023-06-01",
      umsatz: 128600,
      ziel: 140000,
      zielerreichung: 92,
      provision: 3858,
      status: "Aktiv"
    },
    {
      id: "VM005",
      name: "Sarah Klein",
      email: "sarah.klein@company.de",
      telefon: "+49 123 456793", 
      team: "Nord",
      position: "Senior Sales Rep",
      startdatum: "2021-11-12",
      umsatz: 162250,
      ziel: 155000,
      zielerreichung: 105,
      provision: 4867,
      status: "Aktiv"
    }
  ]);

  const [editingMitarbeiter, setEditingMitarbeiter] = useState<Mitarbeiter | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    telefon: "",
    team: "",
    position: "",
    startdatum: "",
    status: "Aktiv"
  });

  const teams = ["Nord", "Süd", "West", "Ost"];
  const positionen = ["Junior Sales Rep", "Sales Representative", "Senior Sales Rep", "Team Lead"];

  const handleAddMitarbeiter = () => {
    setEditingMitarbeiter(null);
    setFormData({
      name: "",
      email: "",
      telefon: "",
      team: "",
      position: "",
      startdatum: "",
      status: "Aktiv"
    });
    setIsDialogOpen(true);
  };

  const handleEditMitarbeiter = (mitarbeiter: Mitarbeiter) => {
    setEditingMitarbeiter(mitarbeiter);
    setFormData({
      name: mitarbeiter.name,
      email: mitarbeiter.email,
      telefon: mitarbeiter.telefon,
      team: mitarbeiter.team,
      position: mitarbeiter.position,
      startdatum: mitarbeiter.startdatum,
      status: mitarbeiter.status
    });
    setIsDialogOpen(true);
  };

  const handleSaveMitarbeiter = () => {
    if (editingMitarbeiter) {
      // Bearbeiten
      setVertriebsmitarbeiter(prev => prev.map(m => 
        m.id === editingMitarbeiter.id 
          ? {
              ...m,
              name: formData.name,
              email: formData.email,
              telefon: formData.telefon,
              team: formData.team,
              position: formData.position,
              startdatum: formData.startdatum,
              status: formData.status
            }
          : m
      ));
    } else {
      // Neu hinzufügen
      const newMitarbeiter: Mitarbeiter = {
        id: `VM${String(vertriebsmitarbeiter.length + 1).padStart(3, '0')}`,
        name: formData.name,
        email: formData.email,
        telefon: formData.telefon,
        team: formData.team,
        position: formData.position,
        startdatum: formData.startdatum,
        umsatz: 0,
        ziel: 100000,
        zielerreichung: 0,
        provision: 0,
        status: formData.status
      };
      setVertriebsmitarbeiter(prev => [...prev, newMitarbeiter]);
    }
    setIsDialogOpen(false);
  };

  const handleDeleteMitarbeiter = (mitarbeiterId: string) => {
    setVertriebsmitarbeiter(prev => prev.filter(m => m.id !== mitarbeiterId));
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 0
    }).format(amount);
  };

  const getTeamStatistiken = () => {
    const stats: Record<string, { mitarbeiter: number; umsatz: number; durchschnitt: number; zielerreichung: number }> = {};
    teams.forEach(team => {
      const teamMembers = vertriebsmitarbeiter.filter(m => m.team === team);
      const gesamtUmsatz = teamMembers.reduce((sum, m) => sum + m.umsatz, 0);
      const durchschnittZielerreichung = teamMembers.length > 0 
        ? teamMembers.reduce((sum, m) => sum + m.zielerreichung, 0) / teamMembers.length 
        : 0;
      
      stats[team] = {
        mitarbeiter: teamMembers.length,
        umsatz: gesamtUmsatz,
        durchschnitt: gesamtUmsatz / (teamMembers.length || 1),
        zielerreichung: Math.round(durchschnittZielerreichung)
      };
    });
    return stats;
  };

  const topPerformer = [...vertriebsmitarbeiter]
    .sort((a, b) => b.umsatz - a.umsatz)
    .slice(0, 5)
    .map((m, index) => ({
      name: m.name,
      umsatz: m.umsatz,
      position: index + 1
    }));

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Vertriebsmitarbeiter</h1>
          <p className="text-muted-foreground">Verwaltung und Übersicht des Vertriebsteams</p>
        </div>
        <Button onClick={handleAddMitarbeiter}>
          <Plus className="w-4 h-4 mr-2" />
          Neuer Mitarbeiter
        </Button>
      </div>

      <Tabs defaultValue="mitarbeiter" className="space-y-6">
        <TabsList>
          <TabsTrigger value="mitarbeiter">Mitarbeiter</TabsTrigger>
          <TabsTrigger value="teams">Teams</TabsTrigger>
          <TabsTrigger value="leistung">Leistungsranking</TabsTrigger>
        </TabsList>

        <TabsContent value="mitarbeiter" className="space-y-6">
          {/* Suche */}
          <Card>
            <CardHeader>
              <CardTitle>Mitarbeitersuche</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4">
                <div className="flex-1">
                  <Input placeholder="Name, E-Mail oder Team suchen..." />
                </div>
                <Button variant="outline">
                  <Search className="w-4 h-4 mr-2" />
                  Suchen
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Mitarbeiterliste */}
          <div className="grid gap-6">
            {vertriebsmitarbeiter.map((mitarbeiter) => (
              <Card key={mitarbeiter.id}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <Avatar className="w-12 h-12">
                        <AvatarImage src="" />
                        <AvatarFallback>
                          {mitarbeiter.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle>{mitarbeiter.name}</CardTitle>
                        <CardDescription>
                          {mitarbeiter.position} • Team {mitarbeiter.team}
                        </CardDescription>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant={mitarbeiter.status === "Aktiv" ? "default" : "secondary"}>
                        {mitarbeiter.status}
                      </Badge>
                      <Button variant="outline" size="sm" onClick={() => handleEditMitarbeiter(mitarbeiter)}>
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
                            <AlertDialogTitle>Mitarbeiter entfernen</AlertDialogTitle>
                            <AlertDialogDescription>
                              Sind Sie sicher, dass Sie {mitarbeiter.name} aus dem System entfernen möchten? Diese Aktion kann nicht rückgängig gemacht werden.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Abbrechen</AlertDialogCancel>
                            <AlertDialogAction onClick={() => handleDeleteMitarbeiter(mitarbeiter.id)}>
                              Entfernen
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-medium">Kontaktdaten</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                          <Mail className="w-4 h-4 text-muted-foreground" />
                          {mitarbeiter.email}
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone className="w-4 h-4 text-muted-foreground" />
                          {mitarbeiter.telefon}
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-medium">Leistung Mai 2024</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Umsatz:</span>
                          <span className="font-bold">{formatCurrency(mitarbeiter.umsatz)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Zielerreichung:</span>
                          <Badge variant={mitarbeiter.zielerreichung >= 100 ? "default" : "secondary"}>
                            {mitarbeiter.zielerreichung}%
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-medium">Provision</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Mai 2024:</span>
                          <span className="font-bold text-primary">{formatCurrency(mitarbeiter.provision)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Seit:</span>
                          <span className="text-sm">{mitarbeiter.startdatum}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="teams" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(getTeamStatistiken()).map(([team, stats]) => (
              <Card key={team}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    Team {team}
                  </CardTitle>
                  <CardDescription>{stats.mitarbeiter} Mitarbeiter</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Gesamtumsatz:</span>
                    <span className="font-bold">{formatCurrency(stats.umsatz)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Durchschnitt:</span>
                    <span className="font-medium">{formatCurrency(stats.durchschnitt)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Zielerreichung:</span>
                    <Badge variant={stats.zielerreichung >= 100 ? "default" : "secondary"}>
                      {stats.zielerreichung}%
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="leistung" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="w-5 h-5" />
                Leistungsranking Mai 2024
              </CardTitle>
              <CardDescription>Ranking nach Umsatzleistung</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topPerformer.map((performer, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-muted">
                        {performer.position <= 3 ? (
                          <Award className="w-4 h-4 text-primary" />
                        ) : (
                          <span className="text-sm font-medium">#{performer.position}</span>
                        )}
                      </div>
                      <div>
                        <p className="font-medium">{performer.name}</p>
                        <p className="text-sm text-muted-foreground">Position #{performer.position}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold">{formatCurrency(performer.umsatz)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Dialog für Mitarbeiter hinzufügen/bearbeiten */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>
              {editingMitarbeiter ? "Mitarbeiter bearbeiten" : "Neuen Mitarbeiter hinzufügen"}
            </DialogTitle>
            <DialogDescription>
              {editingMitarbeiter ? "Bearbeiten Sie die Mitarbeiterdaten." : "Fügen Sie einen neuen Mitarbeiter zum Team hinzu."}
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                placeholder="z.B. Anna Schmidt"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">E-Mail</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                placeholder="anna.schmidt@company.de"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="telefon">Telefon</Label>
              <Input
                id="telefon"
                value={formData.telefon}
                onChange={(e) => setFormData(prev => ({ ...prev, telefon: e.target.value }))}
                placeholder="+49 123 456789"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="team">Team</Label>
              <Select value={formData.team} onValueChange={(value) => setFormData(prev => ({ ...prev, team: value }))}>
                <SelectTrigger>
                  <SelectValue placeholder="Team wählen" />
                </SelectTrigger>
                <SelectContent>
                  {teams.map(team => (
                    <SelectItem key={team} value={team}>{team}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="position">Position</Label>
              <Select value={formData.position} onValueChange={(value) => setFormData(prev => ({ ...prev, position: value }))}>
                <SelectTrigger>
                  <SelectValue placeholder="Position wählen" />
                </SelectTrigger>
                <SelectContent>
                  {positionen.map(pos => (
                    <SelectItem key={pos} value={pos}>{pos}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="startdatum">Startdatum</Label>
              <Input
                id="startdatum"
                type="date"
                value={formData.startdatum}
                onChange={(e) => setFormData(prev => ({ ...prev, startdatum: e.target.value }))}
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
                  <SelectItem value="Inaktiv">Inaktiv</SelectItem>
                  <SelectItem value="Urlaub">Urlaub</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
              Abbrechen
            </Button>
            <Button onClick={handleSaveMitarbeiter}>
              {editingMitarbeiter ? "Speichern" : "Hinzufügen"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}