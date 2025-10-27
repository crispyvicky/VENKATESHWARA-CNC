import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { 
  LayoutDashboard, 
  Package, 
  FolderOpen, 
  Users, 
  Settings,
  Search,
  Bell,
  User,
  TrendingUp,
  TrendingDown,
  ShoppingCart,
  Image as ImageIcon
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Admin = () => {
  const [activeMenu, setActiveMenu] = useState("dashboard");

  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "orders", label: "Orders & Quotes", icon: ShoppingCart },
    { id: "products", label: "Products", icon: Package },
    { id: "gallery", label: "Gallery Manager", icon: ImageIcon },
    { id: "projects", label: "Projects", icon: FolderOpen },
    { id: "clients", label: "Clients", icon: Users },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  const stats = [
    { title: "Total Projects", value: "147", trend: "+12%", isUp: true },
    { title: "Active Clients", value: "89", trend: "+8%", isUp: true },
    { title: "Pending Quotes", value: "23", trend: "-3%", isUp: false },
    { title: "Revenue (Month)", value: "₹8.5L", trend: "+15%", isUp: true },
  ];

  const recentOrders = [
    { id: "#ORD-2024-147", client: "Rajesh Kumar", project: "Teak Door Panel", status: "In Progress", amount: "₹45,000" },
    { id: "#ORD-2024-146", client: "Priya Sharma", project: "Wall Art Custom", status: "Completed", amount: "₹32,000" },
    { id: "#ORD-2024-145", client: "Amit Patel", project: "Wooden Furniture", status: "Pending", amount: "₹78,000" },
    { id: "#ORD-2024-144", client: "Sneha Reddy", project: "CNC Engraving", status: "In Progress", amount: "₹25,000" },
  ];

  return (
    <div className="min-h-screen bg-[#1A1A1A]">
      <Navigation />
      
      {/* Admin Layout */}
      <div className="flex pt-[90px]">
        {/* Sidebar */}
        <aside className="fixed left-0 top-[90px] bottom-0 w-[240px] bg-[#242424] border-r border-[rgba(212,165,116,0.2)] overflow-y-auto">
          <nav className="py-6">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeMenu === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveMenu(item.id)}
                  className={`w-full flex items-center gap-3 px-6 py-3.5 text-[15px] font-medium transition-all duration-300 border-l-[3px] ${
                    isActive
                      ? "bg-[rgba(212,165,116,0.15)] text-[#D4A574] border-l-[#D4A574]"
                      : "text-[#A0A0A0] border-l-transparent hover:bg-[rgba(212,165,116,0.1)] hover:text-[#F5F5F5]"
                  }`}
                >
                  <Icon size={20} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 ml-[240px]">
          {/* Top Bar */}
          <div className="sticky top-[90px] z-40 h-[70px] bg-[#2D2D2D] border-b border-[rgba(212,165,116,0.2)] px-8 flex items-center justify-between">
            {/* Search Bar */}
            <div className="relative w-[400px]">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#A0A0A0]" size={20} />
              <Input
                type="text"
                placeholder="Search orders, clients, projects..."
                className="w-full h-[42px] pl-12 bg-[#1A1A1A] border border-[rgba(212,165,116,0.2)] rounded-full text-[#F5F5F5] placeholder:text-[#A0A0A0] focus:border-[#D4A574]"
              />
            </div>

            {/* Profile Section */}
            <div className="flex items-center gap-4">
              <button className="relative p-2 hover:bg-[rgba(212,165,116,0.1)] rounded-full transition-colors">
                <Bell size={22} className="text-[#A0A0A0]" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-[#D32F2F] rounded-full"></span>
              </button>
              <div className="flex items-center gap-3 pl-4 border-l border-[rgba(212,165,116,0.2)]">
                <div className="text-right">
                  <p className="text-sm font-medium text-[#F5F5F5]">Admin User</p>
                  <p className="text-xs text-[#A0A0A0]">Super Admin</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#D4A574] flex items-center justify-center">
                  <User size={20} className="text-[#1A1A1A]" />
                </div>
              </div>
            </div>
          </div>

          {/* Dashboard Content */}
          <div className="p-8 space-y-8">
            {/* Page Title */}
            <div>
              <h1 className="text-3xl font-display font-bold text-[#F5F5F5] mb-2">Dashboard</h1>
              <p className="text-[#A0A0A0]">Welcome back! Here's what's happening with your business.</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-[#2D2D2D] rounded-xl p-6 border border-[rgba(212,165,116,0.15)] hover:border-[rgba(212,165,116,0.3)] transition-all duration-300"
                >
                  <p className="text-sm font-semibold text-[#A0A0A0] mb-3">{stat.title}</p>
                  <div className="flex items-end justify-between">
                    <h3 className="text-[32px] font-bold text-[#F5F5F5]">{stat.value}</h3>
                    <div className={`flex items-center gap-1 text-sm font-medium ${stat.isUp ? "text-[#7CB342]" : "text-[#D32F2F]"}`}>
                      {stat.isUp ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
                      <span>{stat.trend}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Recent Orders Table */}
            <div className="bg-[#2D2D2D] rounded-xl border border-[rgba(212,165,116,0.15)] overflow-hidden">
              <div className="px-6 py-4 border-b border-[rgba(212,165,116,0.15)]">
                <h2 className="text-xl font-display font-semibold text-[#F5F5F5]">Recent Orders</h2>
              </div>
              <Table>
                <TableHeader>
                  <TableRow className="bg-[rgba(212,165,116,0.1)] border-b border-[rgba(212,165,116,0.15)] hover:bg-[rgba(212,165,116,0.1)]">
                    <TableHead className="text-[#D4A574] font-semibold">Order ID</TableHead>
                    <TableHead className="text-[#D4A574] font-semibold">Client</TableHead>
                    <TableHead className="text-[#D4A574] font-semibold">Project</TableHead>
                    <TableHead className="text-[#D4A574] font-semibold">Status</TableHead>
                    <TableHead className="text-[#D4A574] font-semibold text-right">Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentOrders.map((order) => (
                    <TableRow 
                      key={order.id} 
                      className="border-b border-[rgba(255,255,255,0.05)] hover:bg-[rgba(212,165,116,0.05)] transition-colors"
                    >
                      <TableCell className="font-medium text-[#F5F5F5]">{order.id}</TableCell>
                      <TableCell className="text-[#A0A0A0]">{order.client}</TableCell>
                      <TableCell className="text-[#A0A0A0]">{order.project}</TableCell>
                      <TableCell>
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                          order.status === "Completed" ? "bg-[#7CB342]/20 text-[#7CB342]" :
                          order.status === "In Progress" ? "bg-[#0288D1]/20 text-[#0288D1]" :
                          "bg-[#FFA000]/20 text-[#FFA000]"
                        }`}>
                          {order.status}
                        </span>
                      </TableCell>
                      <TableCell className="text-right font-semibold text-[#F5F5F5]">{order.amount}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <button className="bg-[#2D2D2D] rounded-xl p-6 border border-[rgba(212,165,116,0.15)] hover:border-[#D4A574] transition-all duration-300 text-left group">
                <Package className="text-[#D4A574] mb-4 group-hover:scale-110 transition-transform" size={32} />
                <h3 className="text-lg font-semibold text-[#F5F5F5] mb-2">Add New Product</h3>
                <p className="text-sm text-[#A0A0A0]">Create a new product listing in your catalog</p>
              </button>
              
              <button className="bg-[#2D2D2D] rounded-xl p-6 border border-[rgba(212,165,116,0.15)] hover:border-[#D4A574] transition-all duration-300 text-left group">
                <ImageIcon className="text-[#D4A574] mb-4 group-hover:scale-110 transition-transform" size={32} />
                <h3 className="text-lg font-semibold text-[#F5F5F5] mb-2">Upload to Gallery</h3>
                <p className="text-sm text-[#A0A0A0]">Add new images to your portfolio gallery</p>
              </button>
              
              <button className="bg-[#2D2D2D] rounded-xl p-6 border border-[rgba(212,165,116,0.15)] hover:border-[#D4A574] transition-all duration-300 text-left group">
                <Users className="text-[#D4A574] mb-4 group-hover:scale-110 transition-transform" size={32} />
                <h3 className="text-lg font-semibold text-[#F5F5F5] mb-2">Manage Clients</h3>
                <p className="text-sm text-[#A0A0A0]">View and manage your client database</p>
              </button>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default Admin;
