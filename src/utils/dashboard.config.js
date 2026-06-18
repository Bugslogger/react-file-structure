export const DASHBOARD_THEME = {
  cssVars: {
    "--dashboard-bg": "#f5f7fb",
    "--dashboard-surface": "#ffffff",
    "--dashboard-surface-soft": "#f8fafc",
    "--dashboard-border": "#e5e7eb",
    "--dashboard-text": "#111827",
    "--dashboard-muted": "#6b7280",
    "--dashboard-primary": "#111827",
    "--dashboard-accent": "#44a046",
    "--dashboard-accent-soft": "#e9f7ec",
    "--dashboard-danger": "#ef4444",
    "--dashboard-card-shadow": "0 1px 2px rgba(15, 23, 42, 0.05), 0 14px 30px rgba(15, 23, 42, 0.08)",
    "--dashboard-radius-xl": "18px",
    "--dashboard-radius-lg": "14px",
    "--dashboard-radius-md": "10px",
    "--dashboard-sidebar-width": "235px",
    "--dashboard-topbar-height": "72px",
    "--dashboard-content-max": "100%",
    "--dashboard-font-24": "24px",
    "--dashboard-font-16": "16px",
    "--dashboard-font-14": "14px",
    "--dashboard-font-12": "12px",
  },
};

export const DASHBOARD_FONT_SIZES = {
  xl: "var(--dashboard-font-24)",
  lg: "var(--dashboard-font-16)",
  md: "var(--dashboard-font-14)",
  sm: "var(--dashboard-font-12)",
};

export const DASHBOARD_SIDEBAR = {
  brand: "Creative Tim",
  sections: [
    {
      title: null,
      items: [
        { id: "dashboard", label: "Dashboard", icon: "dashboard", href: "/", active: true },
        { id: "tables", label: "Tables", icon: "table", href: "/tables" },
        { id: "billing", label: "Billing", icon: "billing", href: "/billing" },
        { id: "virtual-reality", label: "Virtual Reality", icon: "vr", href: "/virtual-reality" },
        { id: "rtl", label: "RTL", icon: "rtl", href: "/rtl" },
        { id: "notifications", label: "Notifications", icon: "notifications", href: "/notifications" },
      ],
    },
    {
      title: "ACCOUNT PAGES",
      items: [
        { id: "profile", label: "Profile", icon: "profile", href: "/profile" },
        { id: "sign-in", label: "Sign In", icon: "signin", href: "/login" },
        { id: "sign-up", label: "Sign Up", icon: "signup", href: "/signup" },
      ],
    },
  ],
};

export const DASHBOARD_TOPBAR = {
  searchPlaceholder: "Type here....",
  builderLabel: "Online Builder",
  starLabel: "Star",
  starCount: "11,926",
};

export const DASHBOARD_NOTIFICATIONS = [
  {
    id: "notif-message",
    title: "New message",
    subject: "from Laur",
    timestamp: "13 minutes ago",
    tone: "message",
    avatarType: "image",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80",
  },
  {
    id: "notif-album",
    title: "New album",
    subject: "by Travis Scott",
    timestamp: "1 day",
    tone: "music",
    avatarType: "icon",
    avatar: "music",
  },
  {
    id: "notif-payment",
    title: "Payment successfully",
    subject: "completed",
    timestamp: "2 days",
    tone: "payment",
    avatarType: "icon",
    avatar: "card",
  },
];

export const DASHBOARD_STATS = [
  {
    id: "money",
    title: "Today's Money",
    value: "$53k",
    delta: "+55%",
    deltaLabel: "than last week",
    deltaTone: "up",
    icon: "wallet",
  },
  {
    id: "users",
    title: "Today's Users",
    value: "2300",
    delta: "+3%",
    deltaLabel: "than last month",
    deltaTone: "up",
    icon: "users",
  },
  {
    id: "views",
    title: "Ads Views",
    value: "3,462",
    delta: "-2%",
    deltaLabel: "than yesterday",
    deltaTone: "down",
    icon: "analytics",
  },
  {
    id: "sales",
    title: "Sales",
    value: "$103,430",
    delta: "+5%",
    deltaLabel: "than yesterday",
    deltaTone: "up",
    icon: "credit-card",
  },
];

export const DASHBOARD_CHARTS = [
  {
    id: "website-views",
    title: "Website Views",
    subtitle: "Last Campaign Performance",
    type: "bar",
    footnote: "campaign sent 2 days ago",
    labels: ["M", "T", "W", "T", "F", "S", "S"],
    values: [50, 44, 22, 28, 50, 58, 72],
  },
  {
    id: "daily-sales",
    title: "Daily Sales",
    subtitle: "(+15%) increase in today sales.",
    type: "line",
    footnote: "updated 4 min ago",
    labels: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
    values: [120, 240, 150, 430, 250, 360, 270, 180, 100, 300, 310, 220],
  },
  {
    id: "completed-tasks",
    title: "Completed Tasks",
    subtitle: "Last Campaign Performance",
    type: "line",
    footnote: "just updated",
    labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    values: [40, 30, 300, 220, 500, 250, 400, 230, 500],
  },
];

export const DASHBOARD_PROJECTS = [
  {
    id: "project-1",
    company: "Spotify",
    members: ["SP", "JD", "MK"],
    budget: "$2,500",
    completion: 60,
    completionLabel: "60%",
  },
  {
    id: "project-2",
    company: "Slack",
    members: ["SN", "AR", "TK", "BT"],
    budget: "$3,000",
    completion: 75,
    completionLabel: "75%",
  },
  {
    id: "project-3",
    company: "Invision",
    members: ["IN", "LM"],
    budget: "$1,200",
    completion: 40,
    completionLabel: "40%",
  },
  {
    id: "project-4",
    company: "Atlassian",
    members: ["AT", "NS", "PR"],
    budget: "$4,500",
    completion: 90,
    completionLabel: "90%",
  },
];

export const DASHBOARD_ORDERS = [
  {
    id: "order-1",
    title: "$2400, Design changes",
    timestamp: "22 DEC 7:20 PM",
  },
  {
    id: "order-2",
    title: "New order #1832412",
    timestamp: "21 DEC 11 PM",
  },
  {
    id: "order-3",
    title: "Server payments for April",
    timestamp: "21 DEC 9:34 PM",
  },
  {
    id: "order-4",
    title: "New card added for order #4395133",
    timestamp: "20 DEC 2:20 AM",
  },
];
