import { useState } from "react";
import { 
  BarChart3, 
  Users, 
  Package, 
  Settings, 
  Calculator,
  FileSpreadsheet,
  TrendingUp,
  Bell,
  Target,
  DollarSign
} from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";

const navigation = [
  {
    title: "Verkaufserfassung",
    items: [
      { title: "Neue Verkäufe", url: "/sales", icon: FileSpreadsheet },
      { title: "Verkaufsübersicht", url: "/", icon: BarChart3 },
    ]
  },
  {
    title: "Provisionen",
    items: [
      { title: "Provisionsübersicht", url: "/commission", icon: DollarSign },
    ]
  },
  {
    title: "Verwaltung",
    items: [
      { title: "Produkte", url: "/products", icon: Package },
      { title: "Vertriebsmitarbeiter", url: "/reps", icon: Users },
      { title: "Einstellungen", url: "/settings", icon: Settings },
    ]
  }
];

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;
  const collapsed = state === "collapsed";

  const isActive = (path: string) => currentPath === path;
  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive 
      ? "bg-primary text-primary-foreground font-medium shadow-sm" 
      : "hover:bg-muted/50 text-muted-foreground hover:text-foreground";

  return (
    <Sidebar
      className={collapsed ? "w-14" : "w-64"}
      collapsible="icon"
    >
      <div className="p-4 border-b">
        {!collapsed && (
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <DollarSign className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-foreground">CommissionPro</h2>
            </div>
          </div>
        )}
        {collapsed && (
          <div className="flex justify-center">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <DollarSign className="w-5 h-5 text-white" />
            </div>
          </div>
        )}
      </div>

      <SidebarContent className="px-2">
        {navigation.map((section) => (
          <SidebarGroup key={section.title}>
            {!collapsed && (
              <SidebarGroupLabel className="text-xs font-medium text-muted-foreground uppercase tracking-wider px-2 py-2">
                {section.title}
              </SidebarGroupLabel>
            )}
            <SidebarGroupContent>
              <SidebarMenu>
                {section.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <NavLink 
                        to={item.url} 
                        end 
                        className={({ isActive }) => 
                          `flex items-center space-x-3 px-3 py-2 rounded-lg transition-all duration-200 ${getNavCls({ isActive })}`
                        }
                      >
                        <item.icon className="w-5 h-5 flex-shrink-0" />
                        {!collapsed && <span className="font-medium">{item.title}</span>}
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  );
}