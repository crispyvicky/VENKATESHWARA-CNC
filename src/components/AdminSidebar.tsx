import { LayoutDashboard, ShoppingCart, Package, FolderOpen, Users, Settings, Image as ImageIcon, FileText, DollarSign, List } from "lucide-react";

const menuItems = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "orders", label: "Orders & Quotes", icon: ShoppingCart },
  { id: "clients", label: "Clients", icon: Users },
  { id: "projects", label: "Projects", icon: FolderOpen },
  { id: "payments", label: "Payments", icon: DollarSign },
  { id: "services", label: "Services", icon: List },
  { id: "settings", label: "Settings", icon: Settings },
  { id: "gallery", label: "Gallery Manager", icon: ImageIcon },
];

export default function AdminSidebar({ activeTab, setActiveTab }: { activeTab: string, setActiveTab: (id: string) => void }) {
  return (
    <aside className="fixed left-0 top-[90px] bottom-0 w-[230px] bg-walnut border-r border-golden-teak/20 flex flex-col text-ivory z-30">
      <nav className="flex flex-col gap-1 py-6">
        {menuItems.map(item => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`w-full flex items-center gap-3 px-6 py-3 text-[15px] font-medium rounded transition-all duration-300 border-l-4 ${
              activeTab === item.id
                ? "bg-golden-teak/20 text-gold-leaf border-golden-teak"
                : "text-ivory border-transparent hover:bg-golden-teak/10 hover:text-gold-leaf"
            }`}
          >
            <item.icon size={20} />
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
}
