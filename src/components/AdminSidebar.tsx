import Link from "next/link";
import { LayoutDashboard, ShoppingCart, Users, FolderOpen, DollarSign, List, Settings, ImageIcon } from "lucide-react";

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

export default function AdminSidebar({ activeTab, setActiveTab }) {
  return (
    <aside className="w-[230px] bg-[#251e14] text-[#FFD180] border-r border-walnut/30 flex flex-col min-h-screen shadow-2xl">
      <div className="p-6 border-b border-walnut/30 flex gap-3 items-center">
        <div className="w-10 h-10 rounded-lg bg-golden-teak flex items-center justify-center">
          <LayoutDashboard className="w-6 h-6 text-[#704214]" />
        </div>
        <div>
          <h2 className="font-bold text-lg text-golden-teak">Venkateshwara CNC</h2>
          <span className="text-xs text-gold-leaf/60">Admin Portal</span>
        </div>
      </div>
      <nav className="flex-1 py-8 px-3">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.id} className="relative">
              {activeTab === item.id && (
                <span className="absolute left-0 top-0 h-full w-2 bg-gradient-to-b from-golden-teak to-walnut rounded-r-md"/>
              )}
              <button
                className={`group w-full flex items-center gap-4 pl-6 pr-4 py-3 rounded-lg transition-all font-semibold text-left outline-none
                  ${activeTab === item.id
                    ? "bg-gradient-to-r from-golden-teak to-walnut text-[#3a2208] shadow-lg border-l-4 border-golden-teak"
                    : "text-gold-leaf hover:bg-gold-leaf/10 hover:text-gold-leaf"}
                  focus-visible:ring-2 focus-visible:ring-golden-teak focus-visible:ring-offset-2 focus-visible:bg-gold-leaf/5
                `}
                aria-current={activeTab === item.id ? "page" : undefined}
                onClick={() => setActiveTab(item.id)}
                tabIndex={0}
              >
                <item.icon className={`w-6 h-6 ${activeTab === item.id ? 'text-[#5c3303]' : 'text-gold-leaf group-hover:text-[#FFD180]'}`} />
                <span className="text-base">{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
