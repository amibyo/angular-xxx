import { Component, OnInit } from "@angular/core";

declare interface RouteInfo {
  path: string;
  title: string;
  rtlTitle: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  {
    path: "/article",
    title: "Stock",
    rtlTitle: "لوحة القيادة",
    icon: "icon-app",
    class: ""
  },
  {
    path: "/maintenence",
    title: "Maintenance",
    rtlTitle: "الرموز",
    icon: "icon-settings",
    class: ""
  },
  {
    path: "/hello",
    title: "Inventaire",
    rtlTitle: "خرائط",
    icon: "icon-atom",
    class: "" },
  {
    path: "/notific",
    title: "Credit/Rapports",
    rtlTitle: "إخطارات",
    icon: "icon-coins",
    class: ""
  },

  {
    path: "/s",
    title: "Emplyees",
    rtlTitle: "ملف تعريفي للمستخدم",
    icon: "icon-badge",
    class: ""
  },
  {
    path: "/tab",
    title: "Fournissur",
    rtlTitle: "قائمة الجدول",
    icon: "icon-single-02",
    class: ""
  },
  {
    path: "/user",
    title: "A propos de King",
    rtlTitle: "طباعة",
    icon: "icon-bank",
    class: ""
  }
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() {}

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }
}
