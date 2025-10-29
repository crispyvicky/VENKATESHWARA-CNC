"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import Navigation from "@/components/Navigation";
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
  const { data: session, status } = useSession();
  const [uploading, setUploading] = useState(false);
  const [media, setMedia] = useState<Array<any>>([]);
  const [file, setFile] = useState<File | null>(null);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [editId, setEditId] = useState<string | null>(null);
  const [editTitle, setEditTitle] = useState("");
  const [editCategory, setEditCategory] = useState("");
  const [statsData, setStatsData] = useState<{ totalJobs: number; totalAmount: number; totalAdvance: number; totalPaid: number; totalBalance: number }|null>(null);
  const [customers, setCustomers] = useState<any[]>([]);
  const [newCustomer, setNewCustomer] = useState({ name: "", phone: "", email: "" });

  useEffect(() => {
    if (activeMenu === "gallery") {
      fetch("/api/media/list").then(r => r.json()).then(setMedia).catch(() => {});
    }
  }, [activeMenu]);

  useEffect(() => {
    if (activeMenu === "dashboard") {
      fetch("/api/admin/stats").then(r=> r.ok ? r.json() : null).then(setStatsData).catch(()=>{});
    }
    if (activeMenu === "clients") {
      fetch("/api/customers").then(r=> r.json()).then(setCustomers).catch(()=>{});
    }
  }, [activeMenu]);

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
                  <p className="text-sm font-medium text-[#F5F5F5]">{session?.user?.email || "Admin"}</p>
                  <p className="text-xs text-[#A0A0A0]">{session ? "Signed in" : "Signed out"}</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#D4A574] flex items-center justify-center">
                  <User size={20} className="text-[#1A1A1A]" />
                </div>
              </div>
              {session ? (
                <Button variant="outline" onClick={() => signOut()} className="ml-2">Sign out</Button>
              ) : (
                <a href="/auth/signin"><Button variant="golden" className="ml-2">Sign in</Button></a>
              )}
            </div>
          </div>

          {/* Dashboard Content */}
          <div className="p-8 space-y-8">
            {/* Auth gate */}
            {!session && (
              <div className="p-8">
                <h2 className="text-2xl text-[#F5F5F5] mb-2">Authentication required</h2>
                <p className="text-[#A0A0A0] mb-4">Please sign in to access the admin dashboard.</p>
                <a href="/auth/signin"><Button variant="golden">Go to Sign In</Button></a>
              </div>
            )}

            {/* Page Title */}
            <div>
              <h1 className="text-3xl font-display font-bold text-[#F5F5F5] mb-2">Dashboard</h1>
              <p className="text-[#A0A0A0]">Welcome back! Here's what's happening with your business.</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-[#2D2D2D] rounded-xl p-6 border border-[rgba(212,165,116,0.15)]">
                <p className="text-sm font-semibold text-[#A0A0A0] mb-3">Total Jobs</p>
                <h3 className="text-[32px] font-bold text-[#F5F5F5]">{statsData?.totalJobs ?? "-"}</h3>
              </div>
              <div className="bg-[#2D2D2D] rounded-xl p-6 border border-[rgba(212,165,116,0.15)]">
                <p className="text-sm font-semibold text-[#A0A0A0] mb-3">Total Amount</p>
                <h3 className="text-[32px] font-bold text-[#F5F5F5]">₹{statsData?.totalAmount ?? "-"}</h3>
              </div>
              <div className="bg-[#2D2D2D] rounded-xl p-6 border border-[rgba(212,165,116,0.15)]">
                <p className="text-sm font-semibold text-[#A0A0A0] mb-3">Advance</p>
                <h3 className="text-[32px] font-bold text-[#F5F5F5]">₹{statsData?.totalAdvance ?? "-"}</h3>
              </div>
              <div className="bg-[#2D2D2D] rounded-xl p-6 border border-[rgba(212,165,116,0.15)]">
                <p className="text-sm font-semibold text-[#A0A0A0] mb-3">Outstanding Balance</p>
                <h3 className="text-[32px] font-bold text-[#F5F5F5]">₹{statsData?.totalBalance ?? "-"}</h3>
              </div>
            </div>

            {/* Conditional sections */}
            {activeMenu === "gallery" ? (
              <div className="space-y-8">
                <div className="bg-[#2D2D2D] rounded-xl border border-[rgba(212,165,116,0.15)] p-6">
                  <h2 className="text-xl font-display font-semibold text-[#F5F5F5] mb-4">Upload Recent Work</h2>
                  <div className="grid gap-4 md:grid-cols-2">
                    <input type="file" accept="image/*" onChange={(e) => setFile(e.target.files?.[0] || null)} className="text-[#F5F5F5]" />
                    <Input placeholder="Title (optional)" value={title} onChange={(e) => setTitle(e.target.value)} />
                    <Input placeholder="Category (doors, wall-art, etc)" value={category} onChange={(e) => setCategory(e.target.value)} />
                    <div>
                      <Button
                        variant="golden"
                        onClick={async () => {
                          if (!file) return;
                          setUploading(true);
                          try {
                            const fd = new FormData();
                            fd.append("file", file);
                            if (title) fd.append("title", title);
                            if (category) fd.append("category", category);
                            const res = await fetch("/api/media/upload", { method: "POST", body: fd });
                            if (!res.ok) throw new Error("Upload failed");
                            setFile(null); setTitle(""); setCategory("");
                            const list = await fetch("/api/media/list").then(r=>r.json());
                            setMedia(list);
                          } catch (_) {
                            // noop; UI could show toast
                          } finally {
                            setUploading(false);
                          }
                        }}
                        disabled={!file || uploading}
                      >{uploading ? "Uploading..." : "Upload"}</Button>
                    </div>
                  </div>
                </div>
                <div className="bg-[#2D2D2D] rounded-xl border border-[rgba(212,165,116,0.15)] p-6">
                  <h3 className="text-lg font-semibold text-[#F5F5F5] mb-4">Recent Uploads</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {media.map((m) => (
                      <div key={m._id || m.publicId} className="rounded-lg overflow-hidden border border-[rgba(212,165,116,0.15)]">
                        <Image src={m.url} alt={m.title || m.publicId} width={900} height={600} className="w-full h-auto object-cover" />
                        <div className="p-3 flex items-center justify-between gap-2 bg-[#1f1f1f]">
                          <div className="text-sm text-[#F5F5F5] truncate">{m.title || m.category || m.publicId}</div>
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline" onClick={()=> { setEditId(m._id); setEditTitle(m.title || ""); setEditCategory(m.category || ""); }}>Edit</Button>
                            <Button size="sm" variant="outline" onClick={async ()=>{
                              if (!confirm('Delete this image?')) return;
                              await fetch(`/api/media/${m._id}`, { method:'DELETE' });
                              setMedia(media.filter(x => (x._id||x.publicId) !== (m._id||m.publicId)));
                            }}>Delete</Button>
                          </div>
                        </div>
                      </div>
                    ))}
                    {media.length === 0 && <p className="text-[#A0A0A0]">No uploads yet.</p>}
                  </div>
                  {editId && (
                    <div className="mt-4 p-4 border border-[rgba(212,165,116,0.15)] rounded-lg bg-[#1f1f1f]">
                      <h4 className="text-[#F5F5F5] mb-2">Edit Media</h4>
                      <div className="grid gap-3 md:grid-cols-3">
                        <Input placeholder="Title" value={editTitle} onChange={(e)=> setEditTitle(e.target.value)} />
                        <Input placeholder="Category" value={editCategory} onChange={(e)=> setEditCategory(e.target.value)} />
                        <div>
                          <Button variant="golden" size="sm" onClick={async ()=>{
                            const res = await fetch(`/api/media/${editId}`, { method:'PATCH', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ title: editTitle, category: editCategory }) });
                            if (res.ok) {
                              const updated = await res.json();
                              setMedia(media.map(x => (x._id === updated._id ? updated : x)));
                              setEditId(null);
                            }
                          }}>Save</Button>
                          <Button variant="outline" size="sm" className="ml-2" onClick={()=> setEditId(null)}>Cancel</Button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ) : activeMenu === "clients" ? (
              <div className="space-y-8">
                <div className="bg-[#2D2D2D] rounded-xl border border-[rgba(212,165,116,0.15)] p-6">
                  <h2 className="text-xl font-display font-semibold text-[#F5F5F5] mb-4">Add Customer</h2>
                  <div className="grid gap-4 md:grid-cols-3">
                    <Input placeholder="Name" value={newCustomer.name} onChange={(e)=> setNewCustomer({ ...newCustomer, name: e.target.value })} />
                    <Input placeholder="Phone" value={newCustomer.phone} onChange={(e)=> setNewCustomer({ ...newCustomer, phone: e.target.value })} />
                    <Input placeholder="Email" value={newCustomer.email} onChange={(e)=> setNewCustomer({ ...newCustomer, email: e.target.value })} />
                    <div>
                      <Button variant="golden" onClick={async ()=>{
                        if (!newCustomer.name) return;
                        const res = await fetch('/api/customers', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(newCustomer)});
                        if (res.ok) {
                          setNewCustomer({ name:'', phone:'', email:''});
                          const list = await fetch('/api/customers').then(r=>r.json());
                          setCustomers(list);
                        }
                      }}>Save</Button>
                      <Button variant="outline" className="ml-2" onClick={()=> setNewCustomer({ name:'', phone:'', email:''})}>Reset</Button>
                    </div>
                  </div>
                </div>

                <div className="bg-[#2D2D2D] rounded-xl border border-[rgba(212,165,116,0.15)] overflow-hidden">
                  <div className="px-6 py-4 flex items-center justify-between border-b border-[rgba(212,165,116,0.15)]">
                    <h2 className="text-xl font-display font-semibold text-[#F5F5F5]">Customers</h2>
                    <a href="/api/export/customers" className="text-sm text-[#D4A574] underline">Export CSV</a>
                  </div>
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-[rgba(212,165,116,0.1)] border-b border-[rgba(212,165,116,0.15)] hover:bg-[rgba(212,165,116,0.1)]">
                        <TableHead className="text-[#D4A574] font-semibold">Name</TableHead>
                        <TableHead className="text-[#D4A574] font-semibold">Phone</TableHead>
                        <TableHead className="text-[#D4A574] font-semibold">Email</TableHead>
                        <TableHead className="text-[#D4A574] font-semibold text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {customers.map((c)=> (
                        <TableRow key={c._id} className="border-b border-[rgba(255,255,255,0.05)]">
                          <TableCell className="text-[#F5F5F5]">{c.name}</TableCell>
                          <TableCell className="text-[#A0A0A0]">{c.phone || '-'}</TableCell>
                          <TableCell className="text-[#A0A0A0]">{c.email || '-'}</TableCell>
                          <TableCell className="text-right">
                            <Button variant="outline" size="sm" onClick={async ()=>{
                              await fetch(`/api/customers/${c._id}`, { method:'DELETE' });
                              setCustomers(customers.filter(x=> x._id !== c._id));
                            }}>Delete</Button>
                          </TableCell>
                        </TableRow>
                      ))}
                      {customers.length === 0 && (
                        <TableRow>
                          <TableCell colSpan={4} className="text-center text-[#A0A0A0]">No customers yet.</TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </div>
              </div>
            ) : (
              <></>
            )}

            {/* Recent Orders Table (sample placeholder UI) */}
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
    </div>
  );
};

export default Admin;
