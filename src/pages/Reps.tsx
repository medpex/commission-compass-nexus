import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, Search, Mail, Phone, Edit, Users, Award, TrendingUp } from "lucide-react";

export default function Reps() {
  const vertriebsmitarbeiter = [
    {
      id: "VM001",
      name: "Anna Schmidt",
      email: "anna.schmidt@company.de",
      telefon: "+49 123 456789",
      team: "Nord",
      position: "Senior Sales Rep",
      startdatum: "2022-03-15",
      umsatz: "€168.500",
      ziel: "€160.000",
      zielerreichung: 105,
      provision: "€5.055",
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
      umsatz: "€134.000",
      ziel: "€150.000",
      zielerreichung: 89,
      provision: "€4.020",
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
      umsatz: "€141.750",
      ziel: "€145.000",
      zielerreichung: 98,
      provision: "€4.252",
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
      umsatz: "€128.600",
      ziel: "€140.000",
      zielerreichung: 92,
      provision: "€3.858",
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
      umsatz: "€162.250",
      ziel: "€155.000",
      zielerreichung: 105,
      provision: "€4.867",
      status: "Aktiv"
    }
  ];

  const teamStatistiken = [
    { team: "Nord", mitarbeiter: 2, umsatz: "€330.750", durchschnitt: "€165.375", zielerreichung: 105 },
    { team: "Süd", mitarbeiter: 1, umsatz: "€134.000", durchschnitt: "€134.000", zielerreichung: 89 },
    { team: "West", mitarbeiter: 1, umsatz: "€141.750", durchschnitt: "€141.750", zielerreichung: 98 },
    { team: "Ost", mitarbeiter: 1, umsatz: "€128.600", durchschnitt: "€128.600", zielerreichung: 92 },
  ];

  const topPerformer = [
    { name: "Anna Schmidt", umsatz: "€168.500", position: 1 },
    { name: "Sarah Klein", umsatz: "€162.250", position: 2 },
    { name: "Lisa Weber", umsatz: "€141.750", position: 3 },
    { name: "Max Mustermann", umsatz: "€134.000", position: 4 },
    { name: "Tom Fischer", umsatz: "€128.600", position: 5 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Vertriebsmitarbeiter</h1>
          <p className="text-muted-foreground">Verwaltung und Übersicht des Vertriebsteams</p>
        </div>
        <Button>
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
                      <Button variant="outline" size="sm">
                        <Edit className="w-4 h-4" />
                      </Button>
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
                          <span className="font-bold">{mitarbeiter.umsatz}</span>
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
                          <span className="font-bold text-primary">{mitarbeiter.provision}</span>
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
            {teamStatistiken.map((team, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    Team {team.team}
                  </CardTitle>
                  <CardDescription>{team.mitarbeiter} Mitarbeiter</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Gesamtumsatz:</span>
                    <span className="font-bold">{team.umsatz}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Durchschnitt:</span>
                    <span className="font-medium">{team.durchschnitt}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Zielerreichung:</span>
                    <Badge variant={team.zielerreichung >= 100 ? "default" : "secondary"}>
                      {team.zielerreichung}%
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
                      <p className="font-bold">{performer.umsatz}</p>
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