import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Settings as SettingsIcon, User, Shield, Bell, Palette, Download, Upload } from "lucide-react";

export default function Settings() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Einstellungen</h1>
        <p className="text-muted-foreground">Verwalten Sie Ihre Kontoeinstellungen und Präferenzen</p>
      </div>

      <Tabs defaultValue="profil" className="space-y-6">
        <TabsList>
          <TabsTrigger value="profil">Profil</TabsTrigger>
          <TabsTrigger value="sicherheit">Sicherheit</TabsTrigger>
          <TabsTrigger value="benachrichtigungen">Benachrichtigungen</TabsTrigger>
          <TabsTrigger value="darstellung">Darstellung</TabsTrigger>
          <TabsTrigger value="daten">Daten</TabsTrigger>
        </TabsList>

        <TabsContent value="profil" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="w-5 h-5" />
                Persönliche Informationen
              </CardTitle>
              <CardDescription>Verwalten Sie Ihre persönlichen Daten und Kontaktinformationen</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center gap-6">
                <Avatar className="w-24 h-24">
                  <AvatarImage src="" />
                  <AvatarFallback className="text-lg">MM</AvatarFallback>
                </Avatar>
                <div>
                  <Button variant="outline">Foto ändern</Button>
                  <p className="text-sm text-muted-foreground mt-2">
                    JPG, PNG oder GIF. Maximale Größe: 2MB
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="vorname">Vorname</Label>
                  <Input id="vorname" defaultValue="Max" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="nachname">Nachname</Label>
                  <Input id="nachname" defaultValue="Mustermann" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">E-Mail-Adresse</Label>
                  <Input id="email" type="email" defaultValue="max.mustermann@company.de" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="telefon">Telefonnummer</Label>
                  <Input id="telefon" defaultValue="+49 123 456789" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="position">Position</Label>
                  <Input id="position" defaultValue="Vertriebsmitarbeiter" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="team">Team</Label>
                  <Select defaultValue="sued">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="nord">Nord</SelectItem>
                      <SelectItem value="sued">Süd</SelectItem>
                      <SelectItem value="ost">Ost</SelectItem>
                      <SelectItem value="west">West</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex gap-4">
                <Button>Änderungen speichern</Button>
                <Button variant="outline">Zurücksetzen</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="sicherheit" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                Passwort & Sicherheit
              </CardTitle>
              <CardDescription>Verwalten Sie Ihr Passwort und Sicherheitseinstellungen</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="current-password">Aktuelles Passwort</Label>
                  <Input id="current-password" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="new-password">Neues Passwort</Label>
                  <Input id="new-password" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Passwort bestätigen</Label>
                  <Input id="confirm-password" type="password" />
                </div>
              </div>
              
              <Button>Passwort ändern</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Zwei-Faktor-Authentifizierung</CardTitle>
              <CardDescription>Erhöhen Sie die Sicherheit Ihres Kontos</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">SMS-Verifizierung</p>
                  <p className="text-sm text-muted-foreground">Erhalten Sie Codes per SMS</p>
                </div>
                <Switch />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Authenticator App</p>
                  <p className="text-sm text-muted-foreground">Google Authenticator oder ähnliche Apps</p>
                </div>
                <Switch />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="benachrichtigungen" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="w-5 h-5" />
                Benachrichtigungseinstellungen
              </CardTitle>
              <CardDescription>Konfigurieren Sie, wie Sie benachrichtigt werden möchten</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">E-Mail-Benachrichtigungen</p>
                    <p className="text-sm text-muted-foreground">Wichtige Updates per E-Mail erhalten</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Push-Benachrichtigungen</p>
                    <p className="text-sm text-muted-foreground">Sofortige Benachrichtigungen im Browser</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Wöchentlicher Bericht</p>
                    <p className="text-sm text-muted-foreground">Zusammenfassung der Wochenleistung</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Ziel-Erinnerungen</p>
                    <p className="text-sm text-muted-foreground">Erinnerungen bei Zielverfehlung</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="darstellung" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Palette className="w-5 h-5" />
                Design & Darstellung
              </CardTitle>
              <CardDescription>Passen Sie das Aussehen der Anwendung an</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Farbschema</Label>
                  <Select defaultValue="system">
                    <SelectTrigger className="w-48">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">Hell</SelectItem>
                      <SelectItem value="dark">Dunkel</SelectItem>
                      <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label>Sprache</Label>
                  <Select defaultValue="de">
                    <SelectTrigger className="w-48">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="de">Deutsch</SelectItem>
                      <SelectItem value="en">English</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Währung</Label>
                  <Select defaultValue="eur">
                    <SelectTrigger className="w-48">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="eur">Euro (€)</SelectItem>
                      <SelectItem value="usd">US Dollar ($)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Kompakte Ansicht</p>
                    <p className="text-sm text-muted-foreground">Reduzierte Abstände für mehr Inhalt</p>
                  </div>
                  <Switch />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="daten" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Download className="w-5 h-5" />
                Datenexport & Import
              </CardTitle>
              <CardDescription>Verwalten Sie Ihre Daten und Backups</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Daten exportieren</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Laden Sie eine Kopie Ihrer Daten herunter
                  </p>
                  <div className="flex gap-2">
                    <Button variant="outline">
                      <Download className="w-4 h-4 mr-2" />
                      Verkaufsdaten
                    </Button>
                    <Button variant="outline">
                      <Download className="w-4 h-4 mr-2" />
                      Provisionen
                    </Button>
                    <Button variant="outline">
                      <Download className="w-4 h-4 mr-2" />
                      Alle Daten
                    </Button>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Daten importieren</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Importieren Sie Verkaufsdaten aus externen Quellen
                  </p>
                  <Button variant="outline">
                    <Upload className="w-4 h-4 mr-2" />
                    Datei hochladen
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-red-600">Gefährliche Aktionen</CardTitle>
              <CardDescription>Diese Aktionen können nicht rückgängig gemacht werden</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Konto löschen</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Löscht dauerhaft Ihr Konto und alle zugehörigen Daten
                </p>
                <Button variant="destructive">Konto löschen</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}