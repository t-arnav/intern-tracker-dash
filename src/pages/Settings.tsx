import { useState } from "react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { 
  Bell, 
  Shield, 
  User, 
  Mail, 
  Smartphone,
  Globe,
  Eye,
  Save,
  Trash2,
  Key,
  Download
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const { toast } = useToast();

  const [profileSettings, setProfileSettings] = useState({
    profileVisibility: "public",
    showEmail: true,
    showPhone: false,
    allowMessaging: true,
    showOnlineStatus: true
  });

  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    pushNotifications: true,
    internshipAlerts: true,
    applicationUpdates: true,
    weeklyDigest: false,
    marketingEmails: false
  });

  const [securitySettings, setSecuritySettings] = useState({
    twoFactorEnabled: false,
    sessionTimeout: "24",
    loginAlerts: true
  });

  const handleSaveSettings = () => {
    toast({
      title: "Settings Saved",
      description: "Your preferences have been updated successfully.",
    });
  };

  return (
    <div className="min-h-screen bg-dashboard-bg">
      <Navbar />
      
      <div className="flex h-[calc(100vh-4rem)]">
        <Sidebar />
        
        <main className="flex-1 overflow-auto">
          <div className="p-6">
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold">Settings</h1>
                <Button onClick={handleSaveSettings} className="bg-gradient-primary hover:bg-primary-dark gap-2">
                  <Save className="h-4 w-4" />
                  Save All Changes
                </Button>
              </div>

              <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="profile">Profile</TabsTrigger>
                  <TabsTrigger value="notifications">Notifications</TabsTrigger>
                  <TabsTrigger value="security">Security</TabsTrigger>
                  <TabsTrigger value="data">Data & Privacy</TabsTrigger>
                </TabsList>

                <TabsContent value="profile" className="space-y-6">
                  <Card className="shadow-custom-md">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <User className="h-5 w-5 text-primary" />
                        Profile Visibility
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-3">
                        <Label htmlFor="visibility">Profile visibility</Label>
                        <Select 
                          value={profileSettings.profileVisibility} 
                          onValueChange={(value) => setProfileSettings(prev => ({...prev, profileVisibility: value}))}
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="public">Public - Visible to everyone</SelectItem>
                            <SelectItem value="connections">Connections only</SelectItem>
                            <SelectItem value="private">Private - Only you</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <Separator />

                      <div className="space-y-4">
                        <h4 className="font-medium">Contact Information Visibility</h4>
                        
                        <div className="flex items-center justify-between">
                          <div className="space-y-1">
                            <Label>Show email address</Label>
                            <p className="text-sm text-muted-foreground">Allow others to see your email</p>
                          </div>
                          <Switch
                            checked={profileSettings.showEmail}
                            onCheckedChange={(checked) => setProfileSettings(prev => ({...prev, showEmail: checked}))}
                          />
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="space-y-1">
                            <Label>Show phone number</Label>
                            <p className="text-sm text-muted-foreground">Allow others to see your phone</p>
                          </div>
                          <Switch
                            checked={profileSettings.showPhone}
                            onCheckedChange={(checked) => setProfileSettings(prev => ({...prev, showPhone: checked}))}
                          />
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="space-y-1">
                            <Label>Allow direct messaging</Label>
                            <p className="text-sm text-muted-foreground">Let recruiters message you directly</p>
                          </div>
                          <Switch
                            checked={profileSettings.allowMessaging}
                            onCheckedChange={(checked) => setProfileSettings(prev => ({...prev, allowMessaging: checked}))}
                          />
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="space-y-1">
                            <Label>Show online status</Label>
                            <p className="text-sm text-muted-foreground">Display when you're active</p>
                          </div>
                          <Switch
                            checked={profileSettings.showOnlineStatus}
                            onCheckedChange={(checked) => setProfileSettings(prev => ({...prev, showOnlineStatus: checked}))}
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="notifications" className="space-y-6">
                  <Card className="shadow-custom-md">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Bell className="h-5 w-5 text-primary" />
                        Notification Preferences
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-4">
                        <h4 className="font-medium">Delivery Methods</h4>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Mail className="h-4 w-4 text-muted-foreground" />
                            <div className="space-y-1">
                              <Label>Email notifications</Label>
                              <p className="text-sm text-muted-foreground">Receive notifications via email</p>
                            </div>
                          </div>
                          <Switch
                            checked={notificationSettings.emailNotifications}
                            onCheckedChange={(checked) => setNotificationSettings(prev => ({...prev, emailNotifications: checked}))}
                          />
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Smartphone className="h-4 w-4 text-muted-foreground" />
                            <div className="space-y-1">
                              <Label>Push notifications</Label>
                              <p className="text-sm text-muted-foreground">Receive browser push notifications</p>
                            </div>
                          </div>
                          <Switch
                            checked={notificationSettings.pushNotifications}
                            onCheckedChange={(checked) => setNotificationSettings(prev => ({...prev, pushNotifications: checked}))}
                          />
                        </div>
                      </div>

                      <Separator />

                      <div className="space-y-4">
                        <h4 className="font-medium">Notification Types</h4>
                        
                        <div className="flex items-center justify-between">
                          <div className="space-y-1">
                            <Label>New internship alerts</Label>
                            <p className="text-sm text-muted-foreground">Get notified about new opportunities</p>
                          </div>
                          <Switch
                            checked={notificationSettings.internshipAlerts}
                            onCheckedChange={(checked) => setNotificationSettings(prev => ({...prev, internshipAlerts: checked}))}
                          />
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="space-y-1">
                            <Label>Application updates</Label>
                            <p className="text-sm text-muted-foreground">Status changes on your applications</p>
                          </div>
                          <Switch
                            checked={notificationSettings.applicationUpdates}
                            onCheckedChange={(checked) => setNotificationSettings(prev => ({...prev, applicationUpdates: checked}))}
                          />
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="space-y-1">
                            <Label>Weekly digest</Label>
                            <p className="text-sm text-muted-foreground">Summary of your activity and new opportunities</p>
                          </div>
                          <Switch
                            checked={notificationSettings.weeklyDigest}
                            onCheckedChange={(checked) => setNotificationSettings(prev => ({...prev, weeklyDigest: checked}))}
                          />
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="space-y-1">
                            <Label>Marketing emails</Label>
                            <p className="text-sm text-muted-foreground">Tips, success stories, and product updates</p>
                          </div>
                          <Switch
                            checked={notificationSettings.marketingEmails}
                            onCheckedChange={(checked) => setNotificationSettings(prev => ({...prev, marketingEmails: checked}))}
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="security" className="space-y-6">
                  <Card className="shadow-custom-md">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Shield className="h-5 w-5 text-primary" />
                        Account Security
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-4">
                        <h4 className="font-medium">Authentication</h4>
                        
                        <div className="flex items-center justify-between">
                          <div className="space-y-1">
                            <Label>Two-factor authentication</Label>
                            <p className="text-sm text-muted-foreground">Add an extra layer of security to your account</p>
                          </div>
                          <Switch
                            checked={securitySettings.twoFactorEnabled}
                            onCheckedChange={(checked) => setSecuritySettings(prev => ({...prev, twoFactorEnabled: checked}))}
                          />
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="space-y-1">
                            <Label>Login alerts</Label>
                            <p className="text-sm text-muted-foreground">Get notified of new sign-ins</p>
                          </div>
                          <Switch
                            checked={securitySettings.loginAlerts}
                            onCheckedChange={(checked) => setSecuritySettings(prev => ({...prev, loginAlerts: checked}))}
                          />
                        </div>
                      </div>

                      <Separator />

                      <div className="space-y-4">
                        <h4 className="font-medium">Session Management</h4>
                        
                        <div className="space-y-3">
                          <Label>Session timeout</Label>
                          <Select 
                            value={securitySettings.sessionTimeout} 
                            onValueChange={(value) => setSecuritySettings(prev => ({...prev, sessionTimeout: value}))}
                          >
                            <SelectTrigger className="w-48">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="1">1 hour</SelectItem>
                              <SelectItem value="8">8 hours</SelectItem>
                              <SelectItem value="24">24 hours</SelectItem>
                              <SelectItem value="168">1 week</SelectItem>
                              <SelectItem value="never">Never</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <Separator />

                      <div className="space-y-4">
                        <h4 className="font-medium">Password & Access</h4>
                        
                        <div className="flex gap-4">
                          <Button variant="outline" className="gap-2">
                            <Key className="h-4 w-4" />
                            Change Password
                          </Button>
                          <Button variant="outline" className="gap-2">
                            <Eye className="h-4 w-4" />
                            Active Sessions
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="data" className="space-y-6">
                  <Card className="shadow-custom-md">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Globe className="h-5 w-5 text-primary" />
                        Data & Privacy
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-4">
                        <h4 className="font-medium">Data Export</h4>
                        <p className="text-sm text-muted-foreground">
                          Download a copy of your data including profile information, applications, and activity.
                        </p>
                        <Button variant="outline" className="gap-2">
                          <Download className="h-4 w-4" />
                          Download My Data
                        </Button>
                      </div>

                      <Separator />

                      <div className="space-y-4">
                        <h4 className="font-medium">Account Management</h4>
                        <p className="text-sm text-muted-foreground">
                          These actions are permanent and cannot be undone.
                        </p>
                        <div className="space-y-3">
                          <Button variant="outline" className="gap-2">
                            Clear Activity History
                          </Button>
                          <Button variant="destructive" className="gap-2">
                            <Trash2 className="h-4 w-4" />
                            Delete Account
                          </Button>
                        </div>
                      </div>

                      <Separator />

                      <div className="space-y-4">
                        <h4 className="font-medium">Privacy Policy</h4>
                        <p className="text-sm text-muted-foreground">
                          Review how we collect, use, and protect your personal information.
                        </p>
                        <div className="flex gap-4">
                          <Button variant="link" className="p-0 h-auto">
                            Privacy Policy
                          </Button>
                          <Button variant="link" className="p-0 h-auto">
                            Terms of Service
                          </Button>
                          <Button variant="link" className="p-0 h-auto">
                            Cookie Policy
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Settings;