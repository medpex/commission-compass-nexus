import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bell, BellOff, Mail, Smartphone, Settings, CheckCircle, AlertTriangle, Target, DollarSign } from "lucide-react";

export default function Notifications() {
  const aktuelleBenachrichtigungen = [
    {
      id: "N001",
      typ: "Ziel erreicht",
      titel: "Quartalsziel zu 86% erreicht", 
      nachricht: "Sie haben bereits €389.000 von €450.000 des Q2-Ziels erreicht.",
      datum: "2024-05-15 14:30",
      status: "Ungelesen",
      prioritaet: "Hoch",
      icon: Target
    },
    {
      id: "N002",
      typ: "Provision",
      titel: "Provisionsabrechnung verfügbar",
      nachricht: "Ihre Provision für April 2024 (€4.680) ist zur Auszahlung bereit.",
      datum: "2024-05-01 09:00", 
      status: "Gelesen",
      prioritaet: "Normal",
      icon: DollarSign
    },
    {
      id: "N003",
      typ: "System",
      titel: "Neue Produktpreise verfügbar",
      nachricht: "Die Preisliste wurde für Q2 2024 aktualisiert. Bitte überprüfen Sie die neuen Konditionen.",
      datum: "2024-04-30 16:45",
      status: "Gelesen", 
      prioritaet: "Normal",
      icon: AlertTriangle
    },
    {
      id: "N004",
      typ: "Erfolg",
      titel: "Monatsziel Mai erreicht",
      nachricht: "Herzlichen Glückwunsch! Sie haben Ihr Mai-Ziel von €150.000 erreicht.",
      datum: "2024-04-28 12:15",
      status: "Gelesen",
      prioritaet: "Hoch", 
      icon: CheckCircle
    }
  ];

  const benachrichtigungsEinstellungen = [
    {
      kategorie: "Verkaufsziele",
      beschreibung: "Benachrichtigungen zu Zielerreichung und Fortschritt",
      einstellungen: [
        { name: "Täglicher Fortschritt", email: true, push: false, beschreibung: "Tägliche Updates zum Zielfortschritt" },
        { name: "Ziel erreicht", email: true, push: true, beschreibung: "Benachrichtigung bei Zielerreichung" },
        { name: "Ziel-Warnung", email: true, push: true, beschreibung: "Warnung bei Rückstand zum Ziel" }
      ]
    },
    {
      kategorie: "Provisionen",
      beschreibung: "Updates zu Provisionsabrechnungen und Auszahlungen",
      einstellungen: [
        { name: "Provisionsberechnung", email: true, push: false, beschreibung: "Monatliche Provisionsabrechnung verfügbar" },
        { name: "Auszahlung", email: true, push: true, beschreibung: "Provisionsauszahlung erfolgt" },
        { name: "Änderungen", email: true, push: false, beschreibung: "Änderungen an Provisionsplänen" }
      ]
    },
    {
      kategorie: "System",
      beschreibung: "Systemupdates und wichtige Ankündigungen",
      einstellungen: [
        { name: "Produktupdates", email: true, push: false, beschreibung: "Neue Produkte oder Preisänderungen" },
        { name: "Systemwartung", email: true, push: true, beschreibung: "Geplante Wartungsarbeiten" },
        { name: "Sicherheit", email: true, push: true, beschreibung: "Sicherheitsrelevante Mitteilungen" }
      ]
    }
  ];

  const benachrichtigungsVerlauf = [
    { datum: "2024-05", anzahl: 12, gelesen: 10, wichtig: 3 },
    { datum: "2024-04", anzahl: 15, gelesen: 15, wichtig: 4 },
    { datum: "2024-03", anzahl: 18, gelesen: 18, wichtig: 6 },
    { datum: "2024-02", anzahl: 14, gelesen: 14, wichtig: 2 },
    { datum: "2024-01", anzahl: 16, gelesen: 16, wichtig: 5 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Benachrichtigungen</h1>
          <p className="text-muted-foreground">Verwalten Sie Ihre Benachrichtigungen und Einstellungen</p>
        </div>
        <Button variant="outline">
          <BellOff className="w-4 h-4 mr-2" />
          Alle als gelesen markieren
        </Button>
      </div>

      <Tabs defaultValue="aktuell" className="space-y-6">
        <TabsList>
          <TabsTrigger value="aktuell">Aktuelle</TabsTrigger>
          <TabsTrigger value="einstellungen">Einstellungen</TabsTrigger>
          <TabsTrigger value="verlauf">Verlauf</TabsTrigger>
        </TabsList>

        <TabsContent value="aktuell" className="space-y-6">
          <div className="space-y-4">
            {aktuelleBenachrichtigungen.map((benachrichtigung) => (
              <Card key={benachrichtigung.id} className={benachrichtigung.status === "Ungelesen" ? "border-primary" : ""}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-muted">
                        <benachrichtigung.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <CardTitle className="text-base">{benachrichtigung.titel}</CardTitle>
                        <CardDescription className="flex items-center gap-2">
                          {benachrichtigung.typ} • {benachrichtigung.datum}
                        </CardDescription>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant={benachrichtigung.prioritaet === "Hoch" ? "default" : "secondary"}>
                        {benachrichtigung.prioritaet}
                      </Badge>
                      {benachrichtigung.status === "Ungelesen" && (
                        <div className="w-3 h-3 bg-primary rounded-full"></div>
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{benachrichtigung.nachricht}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="einstellungen" className="space-y-6">
          {benachrichtigungsEinstellungen.map((kategorie, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="w-5 h-5" />
                  {kategorie.kategorie}
                </CardTitle>
                <CardDescription>{kategorie.beschreibung}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {kategorie.einstellungen.map((einstellung, settingIndex) => (
                    <div key={settingIndex} className="space-y-3">
                      <div>
                        <h4 className="font-medium">{einstellung.name}</h4>
                        <p className="text-sm text-muted-foreground">{einstellung.beschreibung}</p>
                      </div>
                      <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2">
                          <Mail className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm">E-Mail</span>
                          <Switch checked={einstellung.email} />
                        </div>
                        <div className="flex items-center gap-2">
                          <Smartphone className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm">Push</span>
                          <Switch checked={einstellung.push} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="verlauf" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="w-5 h-5" />
                Benachrichtigungsverlauf
              </CardTitle>
              <CardDescription>Übersicht der Benachrichtigungen der letzten Monate</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-4 gap-4 pb-3 border-b font-medium text-sm text-muted-foreground">
                  <div>Monat</div>
                  <div>Gesamt</div>
                  <div>Gelesen</div>
                  <div>Wichtig</div>
                </div>
                {benachrichtigungsVerlauf.map((monat, index) => (
                  <div key={index} className="grid grid-cols-4 gap-4 py-3 border-b">
                    <div className="font-medium">{monat.datum}</div>
                    <div>{monat.anzahl}</div>
                    <div className="flex items-center gap-2">
                      {monat.gelesen}
                      {monat.gelesen === monat.anzahl && (
                        <CheckCircle className="w-4 h-4 text-green-600" />
                      )}
                    </div>
                    <div>
                      <Badge variant="outline">{monat.wichtig}</Badge>
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