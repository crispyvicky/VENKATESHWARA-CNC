"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
// import Navigation from "@/components/Navigation";
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
import AdminSidebar from "@/components/AdminSidebar";
import { Calendar } from "@/components/ui/calendar";
import { useRef } from "react";
import { toast } from "sonner";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
function NewJobModal({ open, onClose, client, onSaved }: { open: boolean; onClose: () => void; client: any; onSaved: (job: any) => void }) {
  const defaultServices = ["CNC Cutting & Carving", "CNC Engraving", "Custom Wood Design", "Temple Door", "Portrait", "Decorative Jali & Grills", "Wall Art", "Furniture Crafting"];
  const [service, setService] = useState("");
  const [serviceSel, setServiceSel] = useState(defaultServices[0]);
  const [desc, setDesc] = useState("");
  const [rate, setRate] = useState("");
  const [qty, setQty] = useState("1");
  const [discount, setDiscount] = useState("0");
  const [advance, setAdvance] = useState("0");
  const [deliveryDate, setDeliveryDate] = useState<Date | undefined>(undefined);
  const [err, setErr] = useState("");
  const computeTotal = () => {
    let base = parseFloat(rate || "0") * parseFloat(qty || "1");
    return base - parseFloat(discount || "0");
  };
  const computeBalance = () => computeTotal() - parseFloat(advance || "0");
  const handleSave = async () => {
    if (!service && !serviceSel) return setErr("Service required");
    if (!rate || isNaN(Number(rate))) return setErr("Valid rate required");
    const payload = {
      customer: client._id,
      description: desc || (service || serviceSel),
      rate: parseFloat(rate),
      quantity: parseFloat(qty),
      discount: parseFloat(discount),
      advance: parseFloat(advance),
      total: computeTotal(),
      paid: parseFloat(advance),
      balance: computeBalance(),
      deliveryDate,
      status: "pending"
    };
    const r = await fetch("/api/jobs", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
    if (r.ok) {
      const result = await r.json();
      onSaved(result);
      toast.success("Job/Quote created!");
      onClose();
    } else setErr("Failed to create job.");
  };
  return open ? (
    <div className="fixed z-50 inset-0 flex items-center justify-center bg-black/40">
      <div className="bg-walnut/90 text-gold-leaf shadow-2xl rounded-2xl border border-walnut/40">
        <button onClick={onClose} className="absolute top-2 right-3 text-2xl">×</button>
        <h3 className="text-xl font-bold mb-3 text-walnut">Add Job / Quote for {client.name}</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm text-walnut mb-1">Service</label>
            <select className="w-full h-12 px-4 rounded border" value={serviceSel} onChange={e=>setServiceSel(e.target.value)}>
              {defaultServices.map(s=>(<option key={s} value={s}>{s}</option>))}
              <option value="__custom">Other (enter below)</option>
            </select>
            {serviceSel === "__custom" && (
              <Input className="mt-2" placeholder="Custom service" value={service} onChange={e=>setService(e.target.value)} />
            )}
          </div>
          <div><Input placeholder="Description (optional)" value={desc} onChange={e=>setDesc(e.target.value)} /></div>
          <div className="flex gap-2"><Input className="w-1/2" type="number" placeholder="Rate" value={rate} onChange={e=>setRate(e.target.value)} /><Input className="w-1/2" type="number" placeholder="Quantity" value={qty} onChange={e=>setQty(e.target.value)} /></div>
          <div className="flex gap-2"><Input className="w-1/2" type="number" placeholder="Advance" value={advance} onChange={e=>setAdvance(e.target.value)} /><Input className="w-1/2" type="number" placeholder="Discount" value={discount} onChange={e=>setDiscount(e.target.value)} /></div>
          <div>
            <label className="block text-sm mb-1 text-walnut">Expected Delivery Date (optional):</label>
            <Calendar selected={deliveryDate} onSelect={setDeliveryDate} />
          </div>
          <div className="text-sandalwood text-sm">Total: ₹{computeTotal()} | Balance: ₹{computeBalance()}</div>
          {err && <div className="text-red-600 text-sm">{err}</div>}
          <div className="flex gap-3 pt-4 justify-end">
            <Button variant="outline" onClick={onClose} type="button">Cancel</Button>
            <Button variant="golden" type="button" onClick={handleSave}>Add Job / Quote</Button>
          </div>
        </div>
      </div>
    </div>
  ) : null;
}

function ClientModal({ open, onClose, onSave, initial }: { open: boolean; onClose: () => void; onSave: (client: any) => void; initial?: any }) {
  const [name, setName] = useState(initial?.name || "");
  const [phone, setPhone] = useState(initial?.phone || "");
  const [email, setEmail] = useState(initial?.email || "");
  const [deliveryDate, setDeliveryDate] = useState<Date | undefined>(initial?.deliveryDate ? new Date(initial.deliveryDate) : undefined);
  const [err, setErr] = useState("");
  useEffect(() => { if (open) { setName(initial?.name||""); setPhone(initial?.phone||""); setEmail(initial?.email||""); setDeliveryDate(initial?.deliveryDate ? new Date(initial.deliveryDate) : undefined); setErr(""); } }, [open, initial]);
  return open ? (
    <div className="fixed z-50 inset-0 flex items-center justify-center bg-black/40">
      <div className="bg-walnut/90 text-gold-leaf shadow-2xl rounded-2xl border border-walnut/40">
        <button onClick={onClose} className="absolute top-2 right-3 text-2xl">×</button>
        <h3 className="text-xl font-bold mb-3 text-walnut">{initial ? "Edit Client" : "Add Client"}</h3>
        <div className="space-y-4">
          <div><Input placeholder="Full Name" value={name} onChange={e=>setName(e.target.value)} required /></div>
          <div><Input placeholder="Phone" value={phone} onChange={e=>setPhone(e.target.value)} /></div>
          <div><Input placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} /></div>
          <div>
            <label className="block text-sm mb-1 text-walnut">Expected Delivery Date (optional):</label>
            <Calendar selected={deliveryDate} onSelect={setDeliveryDate} />
          </div>
          {err && <div className="text-red-600 text-sm">{err}</div>}
          <div className="flex gap-3 pt-4 justify-end">
            <Button variant="outline" onClick={onClose} type="button">Cancel</Button>
            <Button variant="golden" type="button" onClick={()=>{
              if (!name) return setErr("Name required");
              onSave({ name, phone, email, deliveryDate });
            }}>{initial ? "Save Changes" : "Add Client"}</Button>
          </div>
        </div>
      </div>
    </div>
  ) : null;
}

function ClientsTab() {
  const [clients, setClients] = useState<any[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalInit, setModalInit] = useState<any|undefined>(undefined);
  const [search, setSearch] = useState("");
  const [jobModalOpen, setJobModalOpen] = useState(false);
  const [jobClient, setJobClient] = useState<any>(null);
  useEffect(()=>{
    fetch("/api/customers").then(r=>r.json()).then(data=>setClients(data));
  },[]);
  const filtered = search ? clients.filter(c => c.name?.toLowerCase().includes(search.toLowerCase()) || c.phone?.includes(search)) : clients;
  const openModal = (init?: any)=>{ setModalInit(init); setModalOpen(true); };
  const handleSave = async (client: any) => {
    setModalOpen(false);
    if (modalInit && modalInit._id) {
      // Edit
      const resp = await fetch(`/api/customers/${modalInit._id}`, { method:'PATCH', headers:{'Content-Type':'application/json'}, body:JSON.stringify(client) });
      if (resp.ok) {
        setClients(cs=>cs.map(c=>c._id===modalInit._id ? {...c,...client} : c));
      }
    } else {
      // Add
      const resp = await fetch("/api/customers", { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(client) });
      if (resp.ok) {
        const newClient = await resp.json();
        setClients(cs=>([newClient, ...cs]));
      }
    }
  };
  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-walnut">Manage Clients</h2>
        <Button variant="golden" onClick={()=>openModal()}>+ Add Client</Button>
      </div>
      <div className="mb-3 max-w-xs">
        <Input placeholder="Search by name or phone" value={search} onChange={e=>setSearch(e.target.value)} />
      </div>
      <div className="overflow-x-auto rounded-lg border bg-card">
        <table className="min-w-full text-left divide-y divide-walnut/30 even:bg-walnut/10 odd:bg-walnut/5">
          <thead>
            <tr className="bg-walnut/80 text-golden-teak">
              <th className="py-2 px-3">Name</th>
              <th className="py-2 px-3">Phone</th>
              <th className="py-2 px-3">Email</th>
              <th className="py-2 px-3">Created</th>
              <th className="py-2 px-3">Delivery</th>
              <th className="py-2 px-3 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(c=>(
              <tr key={c._id} className="border-t last:border-b hover:bg-golden-teak/10">
                <td className="px-3 py-2">{c.name}</td>
                <td className="px-3 py-2">{c.phone}</td>
                <td className="px-3 py-2">{c.email}</td>
                <td className="px-3 py-2">{c.createdAt ? new Date(c.createdAt).toLocaleDateString() : "-"}</td>
                <td className="px-3 py-2">{c.deliveryDate ? new Date(c.deliveryDate).toLocaleDateString() : <span className="text-muted-foreground">-</span>}</td>
                <td className="px-3 py-2 text-center">
                  <Button size="sm" variant="outline" onClick={()=>openModal(c)}>Edit</Button>
                  <Button size="sm" variant="golden" className="ml-2" onClick={()=>{ setJobClient(c); setJobModalOpen(true); }}>New Job / Quote</Button>
                </td>
              </tr>
            ))}
            {filtered.length === 0 && <tr><td colSpan={6} className="text-muted-foreground p-6 text-center">No clients found.</td></tr>}
          </tbody>
        </table>
      </div>
      <ClientModal open={modalOpen} onClose={()=>setModalOpen(false)} onSave={handleSave} initial={modalInit} />
      <NewJobModal open={jobModalOpen} onClose={()=>setJobModalOpen(false)} client={jobClient} onSaved={()=>{}} />
    </div>
  );
}

function AddPaymentModal({ open, onClose, job, onSaved }: { open: boolean; onClose: () => void; job: any; onSaved: () => void }) {
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [err, setErr] = useState("");
  const handleSave = async () => {
    if (!amount || isNaN(Number(amount))) return setErr("Valid payment required");
    const resp = await fetch("/api/payments", { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ customer: job.customer._id, job: job._id, amount: parseFloat(amount), date }) });
    if (resp.ok) {
      onSaved(); onClose(); toast.success("Payment recorded.");
    } else setErr("Failed to add payment.");
  };
  return open ? (
    <div className="fixed z-50 inset-0 flex items-center justify-center bg-black/50"><div className="bg-walnut/90 text-gold-leaf shadow-2xl rounded-2xl border border-walnut/40">
        <button onClick={onClose} className="absolute top-2 right-3 text-2xl">×</button>
        <h3 className='text-xl font-bold mb-3 text-walnut'>Record Payment</h3>
        <div className='space-y-4'>
            <Input placeholder="Amount" type='number' value={amount} onChange={e=>setAmount(e.target.value)} />
            <div>
                <label className='block text-sm mb-1 text-walnut'>Date:</label>
                <Calendar selected={date} onSelect={setDate} />
            </div>
            {err && <div className="text-red-600 text-sm">{err}</div>}
            <div className="flex gap-3 pt-4 justify-end">
                <Button variant="outline" onClick={onClose}>Cancel</Button>
                <Button variant="golden" onClick={handleSave}>Add Payment</Button>
            </div>
        </div>
    </div></div>
  ) : null;
}

function OrdersTab() {
  const [jobs, setJobs] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [payModal, setPayModal] = useState(false);
  const [payJob, setPayJob] = useState<any>(null);
  const getJobs = () => fetch("/api/jobs")
    .then(async (r) => {
      const text = await r.text();
      if (!text) return [];
      try {
        return JSON.parse(text);
      } catch {
        return [];
      }
    })
    .then(setJobs);
  useEffect(()=>{getJobs();},[]);

  const afterPayment = async (job: any) => {
    await getJobs();
    // Find the latest job state
    const updatedJob = jobs.find((j) => j._id === job._id);
    if (updatedJob && updatedJob.paid >= updatedJob.total && updatedJob.status !== 'completed') {
      // Automatically mark as completed
      await fetch(`/api/jobs/${updatedJob._id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: 'completed' }),
      });
      await getJobs(); // Refresh list again to pick up status change
      toast.success('Job marked as completed!');
    }
  };
  const filtered = jobs.filter(j=>(
    (!search || (j.customer?.name || '').toLowerCase().includes(search.toLowerCase())) &&
    (!filterStatus || j.status===filterStatus)
  ));
  const markCompleted = async (job:any) => {
    const resp = await fetch(`/api/jobs/${job._id}`, { method:'PATCH', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ status:'completed' })});
    if (resp.ok) { getJobs(); toast.success('Marked as completed.'); }
  };
  const generateOrOpenInvoice = async (job: any) => {
    try {
      // Try to find invoice by job ID (implementation depends on your /api/invoices search, here we demo POST for simplicity)
      let resp = await fetch(`/api/invoices?job=${job._id}`);
      let invoice: any = null;
      if (resp.ok) {
        const invs = await resp.json();
        if (Array.isArray(invs) && invs.length > 0) {
          invoice = invs[0];
        }
      }
      if (!invoice) {
        // Create new invoice
        resp = await fetch('/api/invoices', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            customer: job.customer._id,
            jobs: [job._id],
            subtotal: job.total,
            discount: job.discount || 0,
            total: job.total - (job.discount || 0),
            paid: job.paid,
            balance: job.balance,
            number: `INV-${new Date().getFullYear()}-${Math.floor(Math.random()*1e4)}`
          })
        });
        if (resp.ok) invoice = await resp.json();
        else throw new Error('Failed to create invoice.');
      }
      if (invoice && invoice._id) {
        window.open(`/api/invoices/${invoice._id}/pdf`, '_blank');
        toast.success('Invoice ready!');
      } else {
        toast.error('Something went wrong generating invoice.');
      }
    } catch {
      toast.error('Error generating invoice.');
    }
  };
  return (
    <div className="p-8">
      <div className="flex flex-wrap justify-between gap-2 mb-6">
        <h2 className="text-3xl font-extrabold text-golden-teak mb-2 border-b-4 border-golden-teak pb-2 w-full pl-1">Orders & Quotes</h2>
        <div className="flex gap-2"><Input placeholder="Search client" value={search} onChange={e=>setSearch(e.target.value)} />
        <select value={filterStatus} onChange={e=>setFilterStatus(e.target.value)} className="rounded border h-10 px-3 ml-2"><option value="">Status</option><option value="pending">Pending</option><option value="in_progress">In Progress</option><option value="completed">Completed</option></select></div>
      </div>
      <div className="overflow-x-auto rounded-2xl shadow-xl border-none bg-[#fff8e1] w-full mt-2 mb-6">
        <table className="min-w-full text-left ">
          <thead>
            <tr className="bg-[#fcdf9b] border-b-2 border-golden-teak text-[#442609] text-lg font-bold">
              <th className="py-4 px-4">Service</th>
              <th className="py-4 px-4">Client</th>
              <th className="py-4 px-4">Dates</th>
              <th className="py-4 px-4">Total</th>
              <th className="py-4 px-4">Paid</th>
              <th className="py-4 px-4">Balance</th>
              <th className="py-4 px-4">Status</th>
              <th className="py-4 px-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((j, i) => (
              <tr key={j._id} className={i%2===0 ? "bg-[#fff8e1] text-[#1a1204]" : "bg-[#f8e3b0] text-[#1a1204] border-t border-gold-leaf/30 hover:bg-gold-leaf/10 transition"}>
                <td className="px-4 py-3 font-medium">{j.description}</td>
                <td className="px-4 py-3">{j.customer?.name}</td>
                <td className="px-4 py-3">{j.createdAt ? new Date(j.createdAt).toLocaleDateString() : "-"}<br/>{j.deliveryDate ? "→ " + new Date(j.deliveryDate).toLocaleDateString() : ""}</td>
                <td className="px-4 py-3 font-bold">₹{j.total}</td>
                <td className="px-4 py-3">₹{j.paid}</td>
                <td className="px-4 py-3">₹{j.balance}</td>
                <td className="px-4 py-3">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${j.status==='completed' ? 'bg-green-200 text-green-900' : j.status==='pending' ? 'bg-yellow-100 text-yellow-900' : 'bg-blue-100 text-blue-900'}`}>{j.status}</span>
                </td>
                <td className="px-4 py-3 text-center">
                  <Button 
                    size='lg' 
                    variant='golden'
                    className="bg-gradient-to-r from-gold-leaf to-golden-teak text-[#312106] font-bold shadow-lg px-6 py-2 rounded-xl border-2 border-golden-teak hover:from-golden-teak hover:to-gold-leaf transition"
                    onClick={()=>{setPayJob(j);setPayModal(true);}}
                  >
                    Add Payment
                  </Button>
                  {j.status==='completed'?<Button size="lg" variant="golden" className="ml-3 px-4 py-2 font-bold shadow border-golden-teak" onClick={()=>generateOrOpenInvoice(j)}>Invoice</Button>:null}
                </td>
              </tr>
            ))}
            {filtered.length===0&&<tr><td colSpan={8} className="text-muted-foreground p-6 text-center">No jobs found.</td></tr>}
          </tbody>
        </table>
      </div>
      <AddPaymentModal open={payModal} onClose={()=>setPayModal(false)} job={payJob} onSaved={() => afterPayment(payJob)} />
    </div>
  );
}
function ProjectDetailsModal({ open, onClose, job, generateOrOpenInvoice }: { open: boolean; onClose: () => void; job: any; generateOrOpenInvoice: (job: any) => void; }) {
  if (!open || !job) return null;
  return (
    <div className="fixed z-50 inset-0 flex items-center justify-center bg-black/40">
      <div className="relative bg-[#fff8e1] text-[#312106] shadow-2xl rounded-2xl border-2 border-golden-teak px-10 py-8 min-w-[360px] max-w-full w-[90vw] md:w-[520px] animate-fadeIn">
        <button aria-label="Close" onClick={onClose} className="absolute top-5 right-5 text-3xl text-golden-teak hover:text-red-500 transition-colors bg-transparent p-1.5 rounded-full focus:outline-none focus:ring-2 focus:ring-gold-leaf/40">×</button>
        <h3 className="text-2xl font-bold mb-4 text-golden-teak border-b-2 border-golden-teak pb-2">Job Details</h3>
        <div className="mb-1"><span className='font-bold text-walnut'>Client:</span> {job.customer?.name} ({job.customer?.phone || "No phone"})</div>
        <div className="mb-1 text-base">Created: {job.createdAt ? new Date(job.createdAt).toLocaleDateString() : "-"} &nbsp;|&nbsp; Delivery: {job.deliveryDate ? new Date(job.deliveryDate).toLocaleDateString() : "-"}</div>
        <div className="mb-1"><span className='font-bold'>Service:</span> {job.description}</div>
        <div className='mb-1'>Rate: <b>₹{job.rate}</b>, Qty: <b>{job.quantity}</b>, Discount: <b>₹{job.discount}</b>, Advance: <b>₹{job.advance}</b></div>
        <div className='mb-2'>Paid: <b>₹{job.paid}</b>, Balance: <b>₹{job.balance}</b>, &nbsp; <span className='font-bold'>Status:</span> <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ml-1 ${job.status==='completed' ? 'bg-green-200 text-green-900' : job.status==='pending' ? 'bg-yellow-100 text-yellow-900' : 'bg-blue-100 text-blue-900'}`}>{job.status}</span></div>
        <div className='flex gap-3 pt-4'>
          {job.status==='completed' && (
            <Button variant='golden' className='flex-1' onClick={()=>generateOrOpenInvoice(job)}>
              Generate/View Invoice
            </Button>
          )}
          <Button variant='outline' onClick={onClose} className='flex-1'>Close</Button>
        </div>
      </div>
    </div>
  );
}

function ProjectsTab() {
  const [jobs, setJobs] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const [modalJob, setModalJob] = useState<any>(null);
  useEffect(()=>{ fetch("/api/jobs").then(r=>r.json()).then(setJobs); },[]);
  const filtered = jobs.filter(j => (!search || (j.customer?.name||"").toLowerCase().includes(search.toLowerCase())));
  const exportCsv = () => { window.open('/api/export/jobs','_blank'); };
  const generateOrOpenInvoice = async (job: any) => {
    try {
      let resp = await fetch(`/api/invoices?job=${job._id}`);
      let invoice: any = null;
      if (resp.ok) {
        const invs = await resp.json();
        if (Array.isArray(invs) && invs.length > 0) {
          invoice = invs[0];
        }
      }
      if (!invoice) {
        resp = await fetch('/api/invoices', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            customer: job.customer._id,
            jobs: [job._id],
            subtotal: job.total,
            discount: job.discount || 0,
            total: job.total - (job.discount || 0),
            paid: job.paid,
            balance: job.balance,
            number: `INV-${new Date().getFullYear()}-${Math.floor(Math.random()*1e4)}`
          })
        });
        if (resp.ok) invoice = await resp.json();
        else throw new Error('Failed to create invoice.');
      }
      if (invoice && invoice._id) {
        window.open(`/api/invoices/${invoice._id}/pdf`, '_blank');
        toast.success('Invoice ready!');
      } else {
        toast.error('Something went wrong generating invoice.');
      }
    } catch {
      toast.error('Error generating invoice.');
    }
  };
  return (
    <div className="p-8">
      <div className="flex flex-wrap justify-between gap-2 mb-6">
        <h2 className="text-3xl font-extrabold text-golden-teak mb-2 border-b-4 border-golden-teak pb-2 w-full pl-1">All Projects / Jobs</h2>
        <div className="flex gap-2">
          <Input placeholder="Search client/job" value={search} onChange={e=>setSearch(e.target.value)} />
          <Button variant="outline" onClick={exportCsv}>Export CSV</Button>
        </div>
      </div>
      <div className="overflow-x-auto rounded-2xl border-none bg-[#fff8e1] w-full mt-2 mb-6">
        <table className="min-w-full text-left ">
          <thead>
            <tr className="bg-[#fcdf9b] border-b-2 border-golden-teak text-[#442609] text-lg font-bold">
              <th className="py-4 px-4">Job</th>
              <th className="py-4 px-4">Client</th>
              <th className="py-4 px-4">Created</th>
              <th className="py-4 px-4">Total</th>
              <th className="py-4 px-4">Paid</th>
              <th className="py-4 px-4">Balance</th>
              <th className="py-4 px-4">Status</th>
              <th className="py-4 px-4 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(j=>(
              <tr key={j._id} className="even:bg-[#fff8e1] odd:bg-[#f8e3b0] text-[#1a1204] border-t border-gold-leaf/30 hover:bg-gold-leaf/10 transition">
                <td className="px-4 py-3 font-medium">{j.description}</td>
                <td className="px-4 py-3">{j.customer?.name}</td>
                <td className="px-4 py-3">{j.createdAt ? new Date(j.createdAt).toLocaleDateString() : "-"}</td>
                <td className="px-4 py-3">₹{j.total}</td>
                <td className="px-4 py-3">₹{j.paid}</td>
                <td className="px-4 py-3">₹{j.balance}</td>
                <td className="px-4 py-3"><span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${j.status==='completed' ? 'bg-green-200 text-green-900' : j.status==='pending' ? 'bg-yellow-100 text-yellow-900' : 'bg-blue-100 text-blue-900'}`}>{j.status}</span></td>
                <td className="px-4 py-3 text-center"><Button size='sm' variant='outline' onClick={()=>setModalJob(j)}>View</Button></td>
              </tr>
            ))}
            {filtered.length===0&&<tr><td colSpan={8} className="text-muted-foreground p-6 text-center">No jobs found.</td></tr>}
          </tbody>
        </table>
      </div>
      <ProjectDetailsModal open={!!modalJob} onClose={()=>setModalJob(null)} job={modalJob} generateOrOpenInvoice={generateOrOpenInvoice} />
    </div>
  );
}

function ServicesTab() {
  const [services, setServices] = useState<string[]>([]);
  const [adding, setAdding] = useState("");
  const [editIdx, setEditIdx] = useState(-1);
  const [editVal, setEditVal] = useState("");
  useEffect(()=>{ fetch('/api/services').then(r=>r.json()).then(s=>setServices(s)); },[]);
  const addService = async ()=>{ if (!adding) return; await fetch('/api/services',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({name:adding})}); setServices(s=>([adding,...s])); setAdding(""); };
  const saveEdit = async idx=>{ await fetch('/api/services',{method:'PATCH',headers:{'Content-Type':'application/json'},body:JSON.stringify({old:services[idx],name:editVal})}); setServices(s=>(s.map((e,i)=>i===idx?editVal:e))); setEditIdx(-1); setEditVal(""); };
  const deleteService = async i=>{ await fetch('/api/services',{method:'DELETE',headers:{'Content-Type':'application/json'},body:JSON.stringify({name:services[i]})}); setServices(s=>(s.filter((_,x)=>x!==i))); };
  return (
    <div className="p-8">
      <div className="flex flex-wrap justify-between gap-2 mb-6">
        <h2 className="text-3xl font-extrabold text-golden-teak mb-2 border-b-4 border-golden-teak pb-2 w-full pl-1">Service Master List</h2>
        <div className="flex gap-2">
          <Input placeholder='Add new service' value={adding} onChange={e=>setAdding(e.target.value)} />
          <Button variant='golden' onClick={addService}>Add</Button>
        </div>
      </div>
      <div className="overflow-x-auto rounded-2xl border-none bg-[#fff8e1] w-full mt-2 mb-6 max-w-lg">
        <table className="min-w-full text-left ">
          <thead>
            <tr className="bg-[#fcdf9b] border-b-2 border-golden-teak text-[#442609] text-lg font-bold">
              <th className="py-4 px-4">Service</th>
              <th className="py-4 px-4"></th>
            </tr>
          </thead>
          <tbody>
            {services.map((s,i)=>(
              <tr key={s+i} className="even:bg-[#fff8e1] odd:bg-[#f8e3b0] text-[#1a1204] border-t border-gold-leaf/30 hover:bg-gold-leaf/10 transition">
                <td className="px-4 py-3">{editIdx===i?<Input value={editVal} onChange={e=>setEditVal(e.target.value)} />:s}</td>
                <td className="px-4 py-3 text-right">{editIdx===i?<Button size='sm' variant='golden' onClick={()=>saveEdit(i)}>Save</Button>:<Button size='sm' variant='outline' onClick={()=>{setEditIdx(i);setEditVal(s);}}>Edit</Button>}<Button size='sm' variant='outline' className='ml-2' onClick={()=>deleteService(i)}>Delete</Button></td>
              </tr>
            ))}
            {services.length===0&&<tr><td colSpan={2} className="text-muted-foreground p-6 text-center">No services</td></tr>}
          </tbody>
        </table>
      </div>
    </div>
  );
}
function PaymentsTab() {
  const [payments, setPayments] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  useEffect(()=>{fetch('/api/payments').then(r=>r.json()).then(p=>setPayments(p));},[]);
  const filtered = payments.filter(p=>(!search || p.customer?.name.toLowerCase().includes(search.toLowerCase())));
  return (
    <div className="p-8">
      <div className="flex flex-wrap justify-between gap-2 mb-6">
        <h2 className="text-3xl font-extrabold text-golden-teak mb-2 border-b-4 border-golden-teak pb-2 w-full pl-1">All Payments</h2>
        <div className="flex gap-2">
          <Input placeholder="Search client/job" value={search} onChange={e=>setSearch(e.target.value)} />
        </div>
      </div>
      <div className="overflow-x-auto rounded-2xl border-none bg-[#fff8e1] w-full mt-2 mb-6">
        <table className="min-w-full text-left ">
          <thead>
            <tr className="bg-[#fcdf9b] border-b-2 border-golden-teak text-[#442609] text-lg font-bold">
              <th className="py-4 px-4">Client</th>
              <th className="py-4 px-4">Job/service</th>
              <th className="py-4 px-4">Amount</th>
              <th className="py-4 px-4">Date</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(p=>(
              <tr key={p._id} className="even:bg-[#fff8e1] odd:bg-[#f8e3b0] text-[#1a1204] border-t border-gold-leaf/30 hover:bg-gold-leaf/10 transition">
                <td className="px-4 py-3 font-medium">{p.customer?.name}</td>
                <td className="px-4 py-3">{p.job&&p.job.description}</td>
                <td className="px-4 py-3">₹{p.amount}</td>
                <td className="px-4 py-3">{p.createdAt ? new Date(p.createdAt).toLocaleDateString() : "-"}</td>
              </tr>
            ))}
            {filtered.length===0&&<tr><td colSpan={4} className="text-muted-foreground p-6 text-center">No payments</td></tr>}
          </tbody>
        </table>
      </div>
    </div>
  );
}
function SettingsTab() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {
    fetch('/api/settings').then(r=>r.json()).then(data=>setEmail(data.email))
  }, []);
  const saveSettings = (e: React.FormEvent) => { e.preventDefault(); toast("Updating ENV settings via web is restricted. Please update .env.local manually for changes to take effect."); };
  return (
    <div className="p-8">
      <h2 className="text-3xl font-extrabold text-golden-teak mb-2 border-b-4 border-golden-teak pb-2 w-full pl-1">Admin Settings</h2>
      <form className='space-y-6 mt-6 max-w-xl' onSubmit={saveSettings}>
        <div><label className='block mb-1 text-walnut'>Admin Email</label><Input value={email} onChange={e => setEmail(e.target.value)} disabled /></div>
        <div><label className='block mb-1 text-walnut'>Password</label><Input value={password} onChange={e => setPassword(e.target.value)} type='password' placeholder='(set in .env)' disabled /></div>
        <div><label className='block mb-1 text-walnut'>Brand Logo (future)</label><input type='file' disabled className='border p-2 rounded w-full' /></div>
        <Button type='submit' variant='golden' className='w-full'>Update</Button>
      </form>
      <div className='text-sm text-muted-foreground mt-3'>To update admin credentials or branding, edit <b>.env.local</b> and restart your app for security. Signed-in only, always protected.</div>
    </div>
  );
}
function GalleryTab() {
  const [images, setImages] = useState<any[]>([]);
  const [uploading, setUploading] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [editId, setEditId] = useState<string | null>(null);
  const [editTitle, setEditTitle] = useState("");
  const [editCategory, setEditCategory] = useState("");

  useEffect(() => {
    fetch("/api/media/list").then(r => r.json()).then(setImages).catch(() => {});
  }, []);

  const handleUpload = async () => {
    if (!file) return;
    setUploading(true);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", title);
    formData.append("category", category);

    try {
      const response = await fetch("/api/media/upload", {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        const newImage = await response.json();
        setImages(prev => [...prev, newImage]);
        toast.success("Image uploaded!");
      } else {
        const error = await response.json();
        toast.error(error.message || "Failed to upload image.");
      }
    } catch (error) {
      toast.error("An unexpected error occurred.");
    } finally {
      setFile(null);
      setTitle("");
      setCategory("");
      setUploading(false);
    }
  };

  const handleEdit = (image: any) => {
    setEditId(image._id);
    setEditTitle(image.title);
    setEditCategory(image.category);
  };

  const handleSaveEdit = async () => {
    if (!editTitle || !editCategory) return;
    const response = await fetch(`/api/media/${editId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: editTitle, category: editCategory }),
    });
    if (response.ok) {
      setImages(prev => prev.map(img => img._id === editId ? { ...img, title: editTitle, category: editCategory } : img));
      toast.success("Image updated!");
      setEditId(null);
      setEditTitle("");
      setEditCategory("");
    } else {
      const error = await response.json();
      toast.error(error.message || "Failed to update image.");
    }
  };

  const handleDelete = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this image?")) {
      const response = await fetch(`/api/media/${id}`, { method: "DELETE" });
      if (response.ok) {
        setImages(prev => prev.filter(img => img._id !== id));
        toast.success("Image deleted!");
      } else {
        const error = await response.json();
        toast.error(error.message || "Failed to delete image.");
      }
    }
  };

  return (
    <div className="p-8">
      <div className="flex flex-wrap justify-between gap-2 mb-6">
        <h2 className="text-3xl font-extrabold text-golden-teak mb-2 border-b-4 border-golden-teak pb-2 w-full pl-1">Gallery Manager</h2>
        <div className="flex gap-2">
          <Input placeholder='Title' value={title} onChange={e=>setTitle(e.target.value)} />
          <Input placeholder='Category' value={category} onChange={e=>setCategory(e.target.value)} />
          <Button variant='outline' onClick={() => fileInputRef.current?.click()}>Choose File</Button>
          <input onChange={e=>setFile(e.target.files?.[0]??null)} ref={fileInputRef} type="file" className="hidden" />
          {file && <span className="text-sm text-muted-foreground ml-2">{file.name}</span>}
          <Button className="text-black" variant='golden' onClick={handleUpload} disabled={uploading || !file}>Upload</Button>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full bg-[#fff8e1] rounded-2xl p-6">
        {images.length === 0 && <div className="col-span-full text-muted-foreground p-6 text-center">No images</div>}
        {images.map(img => (
          <div key={img._id} className="rounded-lg overflow-hidden border border-gold-leaf/30 bg-[#f8e3b0] flex flex-col">
            <img src={img.url} alt={img.title} className="object-cover h-40 w-full" />
            <div className="p-2">
              <div className="font-bold text-walnut text-lg mb-1">{img.title}</div>
              <div className="text-sandalwood text-sm">{img.category}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function DashboardTab() {
  const [stats, setStats] = useState<any>({});
  useEffect(() => {
    fetch('/api/admin/stats').then(r => r.json()).then(setStats);
  }, []);
  return (
    <div className='p-8'>
      <h2 className="text-3xl font-extrabold text-golden-teak mb-2 border-b-4 border-golden-teak pb-2 w-full pl-1">Admin Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8 mt-6">
        <div className='bg-walnut/60 rounded-xl p-6 shadow flex flex-col items-center'>
          <div className='text-golden-teak text-3xl font-bold'>{stats.totalJobs ?? '-'}</div>
          <div className='text-sandalwood mt-2'>Jobs/Orders</div>
        </div>
        <div className='bg-walnut/60 rounded-xl p-6 shadow flex flex-col items-center'>
          <div className='text-golden-teak text-3xl font-bold'>{stats.totalAmount ? `₹${stats.totalAmount}` : '-'}</div>
          <div className='text-sandalwood mt-2'>Total Revenue</div>
        </div>
        <div className='bg-walnut/60 rounded-xl p-6 shadow flex flex-col items-center'>
          <div className='text-golden-teak text-3xl font-bold'>{stats.totalAdvance ? `₹${stats.totalAdvance}` : '-'}</div>
          <div className='text-sandalwood mt-2'>Advances</div>
        </div>
        <div className='bg-walnut/60 rounded-xl p-6 shadow flex flex-col items-center'>
          <div className='text-golden-teak text-3xl font-bold'>{stats.totalBalance ? `₹${stats.totalBalance}` : '-'}</div>
          <div className='text-sandalwood mt-2'>Outstanding</div>
        </div>
      </div>
      <div className='flex gap-4 flex-wrap mb-4'>
        <Button variant='golden' onClick={()=>document.querySelector('[aria-label="Clients"]')?.scrollIntoView()}>Manage Clients</Button>
        <Button variant='golden' onClick={()=>document.querySelector('[aria-label="Orders & Quotes"]')?.scrollIntoView()}>Orders & Quotes</Button>
        <Button variant='golden' onClick={()=>document.querySelector('[aria-label="Projects"]')?.scrollIntoView()}>Projects</Button>
        <Button variant='golden' onClick={()=>document.querySelector('[aria-label="Gallery Manager"]')?.scrollIntoView()}>Gallery</Button>
      </div>
      <div className='text-sandalwood'>Jump to any section above, or use the sidebar for advanced management and search.</div>
    </div>
  );
}

function Admin() {
  const { data: session } = useSession();
  const [activeTab, setActiveTab] = useState("dashboard");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(null);
  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false
    });
    if (!res || res.error) setLoginError("Invalid email or password");
    else setLoginError(null);
  };
  if (!session) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-walnut">
        <div className="bg-walnut/90 text-gold-leaf shadow-2xl rounded-2xl border border-walnut/40 p-8">
          <h2 className="text-2xl font-bold mb-4 text-walnut">Admin Login</h2>
          <p className="text-walnut mb-4">Sign in with your admin email and password.</p>
          <form className="space-y-4" onSubmit={handleLogin}>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Email"
              className="border rounded p-2 w-full text-walnut"
              required
            />
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Password"
              className="border rounded p-2 w-full text-walnut"
              required
            />
            {loginError && <div className="text-red-600 text-sm">{loginError}</div>}
            <Button type="submit" className="w-full">Sign in</Button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="flex">
      <AdminSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="flex-1 p-8">
        <h1 className="text-4xl font-bold text-walnut mb-6">Admin Panel</h1>
        {/* <Navigation /> */}
        <div className="mt-6">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="dashboard" aria-label="Dashboard">
                <LayoutDashboard className="mr-2 h-4 w-4" />
                Dashboard
              </TabsTrigger>
              <TabsTrigger value="clients" aria-label="Clients">
                <Users className="mr-2 h-4 w-4" />
                Clients
              </TabsTrigger>
              <TabsTrigger value="orders" aria-label="Orders & Quotes">
                <Package className="mr-2 h-4 w-4" />
                Orders & Quotes
              </TabsTrigger>
              <TabsTrigger value="projects" aria-label="Projects">
                <FolderOpen className="mr-2 h-4 w-4" />
                Projects
              </TabsTrigger>
              <TabsTrigger value="services" aria-label="Service Master List">
                <Settings className="mr-2 h-4 w-4" />
                Services
              </TabsTrigger>
              <TabsTrigger value="payments" aria-label="All Payments">
                <ShoppingCart className="mr-2 h-4 w-4" />
                Payments
              </TabsTrigger>
              <TabsTrigger value="settings" aria-label="Admin Settings">
                <User className="mr-2 h-4 w-4" />
                Settings
              </TabsTrigger>
              <TabsTrigger value="gallery" aria-label="Gallery Manager">
                <ImageIcon className="mr-2 h-4 w-4" />
                Gallery
              </TabsTrigger>
            </TabsList>
            <TabsContent value="dashboard">
              <DashboardTab />
            </TabsContent>
            <TabsContent value="clients">
              <ClientsTab />
            </TabsContent>
            <TabsContent value="orders">
              <OrdersTab />
            </TabsContent>
            <TabsContent value="projects">
              <ProjectsTab />
            </TabsContent>
            <TabsContent value="services">
              <ServicesTab />
            </TabsContent>
            <TabsContent value="payments">
              <PaymentsTab />
            </TabsContent>
            <TabsContent value="settings">
              <SettingsTab />
            </TabsContent>
            <TabsContent value="gallery">
              <GalleryTab />
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
}

export default Admin;

// Force SSR for this page to avoid static prerender/export errors with useSession
export async function getServerSideProps() {
  return { props: {} };
}