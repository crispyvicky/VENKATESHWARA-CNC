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
import AdminSidebar from "@/components/AdminSidebar";
import { Calendar } from "@/components/ui/calendar";
import { useRef } from "react";
import { toast } from "sonner";
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
  const getJobs = () => fetch("/api/jobs").then(r=>r.json()).then(setJobs);
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
        <h2 className="text-2xl font-bold text-walnut">Orders & Quotes</h2>
        <div className="flex gap-2"><Input placeholder="Search client" value={search} onChange={e=>setSearch(e.target.value)} />
        <select value={filterStatus} onChange={e=>setFilterStatus(e.target.value)} className="rounded border h-10 px-3 ml-2"><option value="">Status</option><option value="pending">Pending</option><option value="in_progress">In Progress</option><option value="completed">Completed</option></select></div>
      </div>
      <div className="overflow-x-auto rounded-lg border bg-card">
        <table className="min-w-full text-left divide-y divide-walnut/30 even:bg-walnut/10 odd:bg-walnut/5">
          <thead>
            <tr className="bg-walnut/80 text-golden-teak">
              <th className="py-2 px-3">Service</th>
              <th className="py-2 px-3">Client</th>
              <th className="py-2 px-3">Dates</th>
              <th className="py-2 px-3">Total</th>
              <th className="py-2 px-3">Paid</th>
              <th className="py-2 px-3">Balance</th>
              <th className="py-2 px-3">Status</th>
              <th className="py-2 px-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(j=>(<tr key={j._id} className="border-t hover:bg-golden-teak/10"><td className="px-3 py-2">{j.description}</td><td className="px-3 py-2">{j.customer?.name}</td><td className="px-3 py-2">{j.createdAt ? new Date(j.createdAt).toLocaleDateString() : "-"}<br/>{j.deliveryDate ? "→ " + new Date(j.deliveryDate).toLocaleDateString() : ""}</td><td className="px-3 py-2">₹{j.total}</td><td className="px-3 py-2">₹{j.paid}</td><td className="px-3 py-2">₹{j.balance}</td><td className="px-3 py-2"><span className={`inline-block px-2 py-1 rounded text-xs font-bold ${j.status==='completed' ? 'bg-green-200 text-green-900' : j.status==='pending' ? 'bg-yellow-100 text-yellow-900' : 'bg-blue-100 text-blue-900'}`}>{j.status}</span></td><td className="px-3 py-2 flex flex-wrap gap-2 items-center justify-center"><Button size='sm' variant='outline' onClick={()=>{setPayJob(j);setPayModal(true);}}>Add Payment</Button>{j.status==='completed'?<Button size="sm" variant="golden" onClick={()=>generateOrOpenInvoice(j)}>Invoice</Button>:null}</td></tr>))}
            {filtered.length===0&&<tr><td colSpan={8} className="text-muted-foreground p-6 text-center">No jobs found.</td></tr>}
          </tbody>
        </table>
      </div>
      <AddPaymentModal open={payModal} onClose={()=>setPayModal(false)} job={payJob} onSaved={() => afterPayment(payJob)} />
    </div>
  );
}
function ProjectDetailsModal({ open, onClose, job }: { open: boolean; onClose: () => void; job: any; }) {
  if (!open || !job) return null;
  return (
    <div className="fixed z-50 inset-0 flex items-center justify-center bg-black/50">
      <div className="bg-walnut/90 text-gold-leaf shadow-2xl rounded-2xl border border-walnut/40">
        <button onClick={onClose} className="absolute top-2 right-3 text-2xl">×</button>
        <h3 className="text-xl font-bold mb-3 text-walnut">Job Details: {job.description}</h3>
        <div className="mb-1"><span className='font-bold text-walnut'>Client:</span> {job.customer?.name} ({job.customer?.phone || "No phone"})</div>
        <div className="mb-1 text-sm">Created: {job.createdAt ? new Date(job.createdAt).toLocaleDateString() : "-"} | Delivery: {job.deliveryDate ? new Date(job.deliveryDate).toLocaleDateString() : "-"}</div>
        <div className='mb-1'>Service: <b>{job.description}</b></div>
        <div className='mb-1'>Rate: ₹{job.rate}, Qty: {job.quantity}, Discount: ₹{job.discount}, Advance: ₹{job.advance}</div>
        <div className='mb-2'>Paid: ₹{job.paid}, Balance: ₹{job.balance}, <span className='font-bold'>Status:</span> {job.status}</div>
        <div>
          {job.status==='completed' && <Button variant='golden' className='mt-4' onClick={()=>generateOrOpenInvoice(job)}>Generate/View Invoice</Button>}
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
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-walnut">All Projects / Jobs</h2>
        <Button variant="outline" onClick={exportCsv}>Export CSV</Button>
      </div>
      <div className="max-w-xs mb-4"><Input placeholder="Search client/job" value={search} onChange={e=>setSearch(e.target.value)} /></div>
      <div className="overflow-x-auto rounded-lg border bg-card">
        <table className="min-w-full text-left divide-y divide-walnut/30 even:bg-walnut/10 odd:bg-walnut/5">
          <thead>
            <tr className="bg-walnut/80 text-golden-teak">
              <th className="py-2 px-3">Job</th>
              <th className="py-2 px-3">Client</th>
              <th className="py-2 px-3">Created</th>
              <th className="py-2 px-3">Total</th>
              <th className="py-2 px-3">Paid</th>
              <th className="py-2 px-3">Balance</th>
              <th className="py-2 px-3">Status</th>
              <th className="py-2 px-3 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(j=>(<tr key={j._id} className="border-t hover:bg-golden-teak/10"><td className="px-3 py-2">{j.description}</td><td className="px-3 py-2">{j.customer?.name}</td><td className="px-3 py-2">{j.createdAt ? new Date(j.createdAt).toLocaleDateString() : "-"}</td><td className="px-3 py-2">₹{j.total}</td><td className="px-3 py-2">₹{j.paid}</td><td className="px-3 py-2">₹{j.balance}</td><td className="px-3 py-2"><span className={`inline-block px-2 py-1 rounded text-xs font-bold ${j.status==='completed' ? 'bg-green-200 text-green-900' : j.status==='pending' ? 'bg-yellow-100 text-yellow-900' : 'bg-blue-100 text-blue-900'}`}>{j.status}</span></td><td className="px-3 py-2 text-center"><Button size='sm' variant='outline' onClick={()=>setModalJob(j)}>View</Button></td></tr>))}{filtered.length===0&&<tr><td colSpan={8} className="text-center text-muted-foreground py-8">No jobs found.</td></tr>}</tbody>
        </table>
      </div>
      <ProjectDetailsModal open={!!modalJob} onClose={()=>setModalJob(null)} job={modalJob} />
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
    <div className='p-8'>
      <div className='flex items-center justify-between mb-6'><h2 className='text-2xl font-bold text-walnut'>Service Master List</h2><div className='flex gap-2'><Input placeholder='Add new service' value={adding} onChange={e=>setAdding(e.target.value)} /><Button variant='golden' onClick={addService}>Add</Button></div></div>
      <div className='overflow-x-auto rounded-lg border bg-card max-w-lg'><table className='min-w-full text-left'><thead><tr className='bg-walnut/80 text-golden-teak'><th className='py-2 px-3'>Service</th><th></th></tr></thead><tbody>{services.map((s,i)=>(<tr key={s+i} className='border-t hover:bg-golden-teak/10'><td className='px-3 py-2'>{editIdx===i?<Input value={editVal} onChange={e=>setEditVal(e.target.value)} />:s}</td><td className='px-3 py-2 text-right'>{editIdx===i?<Button size='sm' variant='golden' onClick={()=>saveEdit(i)}>Save</Button>:<Button size='sm' variant='outline' onClick={()=>{setEditIdx(i);setEditVal(s);}}>Edit</Button>}<Button size='sm' variant='outline' className='ml-2' onClick={()=>deleteService(i)}>Delete</Button></td></tr>))}{services.length===0&&<tr><td colSpan={2} className='text-center text-muted-foreground py-8'>No services</td></tr>}</tbody></table></div>
    </div>
  );
}
function PaymentsTab() {
  const [payments, setPayments] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  useEffect(()=>{fetch('/api/payments').then(r=>r.json()).then(p=>setPayments(p));},[]);
  const filtered = payments.filter(p=>(!search || p.customer?.name.toLowerCase().includes(search.toLowerCase())));
  return (
    <div className="p-8"><h2 className="text-2xl font-bold text-walnut mb-6">All Payments</h2><div className='max-w-xs mb-4'><Input placeholder="Search client/job" value={search} onChange={e=>setSearch(e.target.value)} /></div><div className="overflow-x-auto rounded-lg border bg-card">
        <table className="min-w-full text-left divide-y divide-walnut/30 even:bg-walnut/10 odd:bg-walnut/5">
          <thead>
            <tr className="bg-walnut/80 text-golden-teak">
              <th className="py-2 px-3">Client</th>
              <th className="py-2 px-3">Job/service</th>
              <th className="py-2 px-3">Amount</th>
              <th className="py-2 px-3">Date</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(p=>(<tr key={p._id} className='border-t hover:bg-golden-teak/10'><td className="px-3 py-2">{p.customer?.name}</td><td className="px-3 py-2">{p.job&&p.job.description}</td><td className="px-3 py-2">₹{p.amount}</td><td className="px-3 py-2">{p.createdAt ? new Date(p.createdAt).toLocaleDateString() : "-"}</td><td className="px-3 py-2 text-right"></td></tr>))}{filtered.length===0&&<tr><td colSpan={5} className='text-center text-muted-foreground py-8'>No payments</td></tr>}</tbody>
        </table>
      </div></div>);
}
function SettingsTab() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {
    fetch('/api/settings').then(r=>r.json()).then(data=>setEmail(data.email))
  }, []);
  const saveSettings = (e: React.FormEvent) => { e.preventDefault(); toast("Updating ENV settings via web is restricted. Please update .env.local manually for changes to take effect."); };
              return (
    <div className="p-8 max-w-lg mx-auto">
      <h2 className="text-2xl font-bold text-walnut mb-4">Admin Settings</h2>
      <form className='space-y-6' onSubmit={saveSettings}>
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
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-walnut">Gallery Manager</h2>
        <Button variant="golden" onClick={() => fileInputRef.current?.click() }>Upload New Image</Button>
        <input ref={fileInputRef} type="file" accept="image/*" onChange={e => { const f = e.target.files?.[0]; setFile(f||null); }} style={{ display: 'none' }} />
      </div>
      <div className="flex flex-wrap gap-4 mb-4">
        <Input placeholder="Search images" value={title} onChange={e => setTitle(e.target.value)} />
        <select value={category} onChange={e => setCategory(e.target.value)} className="rounded border h-10 px-3">
          <option value="">All Categories</option>
          <option value="woodwork">Woodwork</option>
          <option value="carving">Carving</option>
          <option value="engraving">Engraving</option>
          <option value="custom">Custom</option>
          <option value="temple">Temple</option>
          <option value="decorative">Decorative</option>
          <option value="wall_art">Wall Art</option>
          <option value="furniture">Furniture</option>
        </select>
                </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {images
          .filter(img => img.title.toLowerCase().includes(title.toLowerCase()) && (category === "" || img.category === category))
          .map((image) => (
            <div key={image._id} className="bg-card shadow border p-4 rounded-lg flex flex-col items-center">
              <Image src={image.url} alt={image.title} width={200} height={150} className="w-full h-auto object-cover rounded-md mb-2" />
              <div className="flex justify-between w-full mb-2">
                <span className="text-sm text-walnut">{image.title}</span>
                <span className="text-sm text-walnut">{image.category}</span>
                </div>
              <div className="flex gap-2 w-full">
                <Button size="sm" variant="outline" onClick={() => handleEdit(image)}>Edit</Button>
                <Button size="sm" variant="outline" onClick={() => handleDelete(image._id)}>Delete</Button>
              </div>
            </div>
          ))}
      </div>
      {file && (
        <div className="mt-6 p-4 bg-walnut/90 text-gold-leaf shadow-2xl rounded-2xl border border-walnut/40">
          <h3 className="text-xl font-bold mb-3 text-walnut">Upload New Image</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-walnut mb-1">Title</label>
              <Input value={title} onChange={e => setTitle(e.target.value)} />
          </div>
            <div>
              <label className="block text-sm text-walnut mb-1">Category</label>
              <select value={category} onChange={e => setCategory(e.target.value)} className="w-full h-12 px-4 rounded border">
                <option value="woodwork">Woodwork</option>
                <option value="carving">Carving</option>
                <option value="engraving">Engraving</option>
                <option value="custom">Custom</option>
                <option value="temple">Temple</option>
                <option value="decorative">Decorative</option>
                <option value="wall_art">Wall Art</option>
                <option value="furniture">Furniture</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-walnut mb-1">Selected Image</label>
              <div className="text-sm text-walnut mb-2">{file ? file.name : "None selected"}</div>
              <Button type="button" variant="outline" onClick={() => fileInputRef.current?.click() }>Choose File</Button>
                    </div>
            <Button variant="golden" onClick={handleUpload} disabled={uploading}>
              {uploading ? "Uploading..." : "Upload Image"}
            </Button>
                  </div>
                </div>
      )}
      {editId && (
        <div className="mt-6 p-4 bg-walnut/90 text-gold-leaf shadow-2xl rounded-2xl border border-walnut/40">
          <h3 className="text-xl font-bold mb-3 text-walnut">Edit Image</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-walnut mb-1">Title</label>
              <Input value={editTitle} onChange={e => setEditTitle(e.target.value)} />
            </div>
            <div>
              <label className="block text-sm text-walnut mb-1">Category</label>
              <select value={editCategory} onChange={e => setEditCategory(e.target.value)} className="w-full h-12 px-4 rounded border">
                <option value="woodwork">Woodwork</option>
                <option value="carving">Carving</option>
                <option value="engraving">Engraving</option>
                <option value="custom">Custom</option>
                <option value="temple">Temple</option>
                <option value="decorative">Decorative</option>
                <option value="wall_art">Wall Art</option>
                <option value="furniture">Furniture</option>
              </select>
            </div>
            <Button variant="golden" onClick={handleSaveEdit}>Save Changes</Button>
            <Button variant="outline" onClick={() => setEditId(null)}>Cancel</Button>
          </div>
        </div>
      )}
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
      <h2 className='text-2xl font-bold text-walnut mb-6'>Admin Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
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

export default function Admin() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const { data: session, status } = useSession();
  // Auth UX: If not signed in, show prompt or redirect (client-side only)
  if (typeof window !== 'undefined' && status === "unauthenticated") {
    signIn(undefined, { callbackUrl: "/admin" });
    return <div className="min-h-screen flex items-center justify-center bg-background">Redirecting to sign in…</div>;
  }
  if (!session) return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div>
        <div className="text-2xl mb-6">Sign in required</div>
        <Button variant="golden" onClick={()=>signIn(undefined, { callbackUrl: "/admin" })}>Sign in</Button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#181410] flex">
      <AdminSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      {/* TopBar restored */}
      <header className="fixed left-[230px] right-0 top-0 h-[70px] bg-[#231d16] border-b border-aged-oak/30 flex items-center px-8 z-20">
        <div className="flex-1 flex gap-3 items-center">
          <h1 className="text-xl font-display font-bold text-golden-teak">Venkateshwara CNC Admin</h1>
        </div>
        <div className="flex items-center gap-4">
          <button className="relative p-2 hover:bg-walnut/20 rounded-full transition-colors">
            <Bell size={22} className="text-[#A0A0A0]" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-[#D32F2F] rounded-full"></span>
              </button>
          <div className="flex items-center gap-3 pl-4 border-l border-[rgba(212,165,116,0.2)]">
            <div className="text-right">
              <p className="text-sm font-medium text-[#F5F5F5]">{session?.user?.email || "Admin"}</p>
              <p className="text-xs text-[#A0A0A0]">Signed in</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-[#D4A574] flex items-center justify-center">
              <User size={20} className="text-[#1A1A1A]" />
            </div>
          </div>
          <Button variant="outline" onClick={() => signOut()} className="ml-2">Sign out</Button>
        </div>
      </header>
      {/* Main Content with top offset */}
      <main className="flex-1 ml-[230px] mt-[70px]">
        {activeTab === "dashboard" && <DashboardTab />}
        {activeTab === "clients" && <ClientsTab />}
        {activeTab === "orders" && <OrdersTab />}
        {activeTab === "projects" && <ProjectsTab />}
        {activeTab === "payments" && <PaymentsTab />}
        {activeTab === "services" && <ServicesTab />}
        {activeTab === "settings" && <SettingsTab />}
        {activeTab === "gallery" && <GalleryTab />}
        </main>
    </div>
  );
}

export async function getServerSideProps() {
  return { props: {} };
}
