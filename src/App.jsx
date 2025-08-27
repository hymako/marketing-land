import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Check, ArrowRight, Sparkles, BarChart3, Megaphone, Calendar, Mail, Phone, Linkedin } from 'lucide-react'

const BRAND = {
  name: 'Cayetano Marketing',
  tagline: 'Estrategia, tracción y ventas',
  email: 'hola@tu-dominio.com',
  phone: '+34 600 000 000',
  linkedin: '#',
}

export default function LandingServicios() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <TrustMarks />
      <Servicios />
      <Proceso />
      <Testimonios />
      <Precios />
      <FAQ />
      <Contacto />
      <Footer />
    </div>
  )
}

function Header(){
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="font-bold tracking-wide">{BRAND.name}</div>
        <nav className="hidden md:flex gap-6 text-sm">
          <a href="#servicios" className="hover:opacity-70">Servicios</a>
          <a href="#proceso" className="hover:opacity-70">Proceso</a>
          <a href="#testimonios" className="hover:opacity-70">Testimonios</a>
          <a href="#precios" className="hover:opacity-70">Precios</a>
          <a href="#contacto" className="hover:opacity-70">Contacto</a>
        </nav>
        <Button className="rounded-2xl" onClick={()=> document.getElementById('contacto')?.scrollIntoView({behavior:'smooth'})}>Agenda una llamada</Button>
      </div>
    </header>
  )
}

function Hero(){
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h1 initial={{opacity:0, y:16}} animate={{opacity:1, y:0}} transition={{duration:0.5}} className="text-4xl md:text-5xl font-extrabold leading-tight">
            {BRAND.tagline}
          </motion.h1>
          <p className="text-neutral-600 mt-4 max-w-xl">Auditoría, plan y ejecución para que tu negocio pase de las intuiciones a un sistema de captación predecible.</p>
          <div className="flex gap-3 mt-6">
            <Button size="lg" className="rounded-2xl" onClick={()=> document.getElementById('contacto')?.scrollIntoView({behavior:'smooth'})}>
              Reserva 15' sin coste <ArrowRight className="w-5 h-5 ml-2"/>
            </Button>
            <Button size="lg" variant="outline" className="rounded-2xl" onClick={()=> document.getElementById('servicios')?.scrollIntoView({behavior:'smooth'})}>Ver servicios</Button>
          </div>
          <ul className="mt-6 text-sm text-neutral-600 space-y-2">
            <li className="flex items-center gap-2"><Check className="w-4 h-4"/> Sin permanencias</li>
            <li className="flex items-center gap-2"><Check className="w-4 h-4"/> Entregables claros y medibles</li>
            <li className="flex items-center gap-2"><Check className="w-4 h-4"/> Experiencia en pymes y B2B</li>
          </ul>
        </div>
        <motion.div initial={{opacity:0, scale:0.98}} animate={{opacity:1, scale:1}} transition={{duration:0.5}} className="relative">
          <div className="aspect-video rounded-3xl bg-neutral-100 border" />
          <div className="absolute -bottom-6 -left-6 bg-white border rounded-2xl p-4 shadow">
            <div className="font-semibold">Caso real</div>
            <div className="text-sm text-neutral-600">+214% leads en 90 días</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function TrustMarks(){
  return (
    <section className="py-10 border-y bg-neutral-50">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 items-center opacity-70 text-sm text-center">
        <div>Meta Ads</div>
        <div>Google Ads</div>
        <div>HubSpot</div>
        <div>GA4</div>
      </div>
    </section>
  )
}

function Servicios(){
  const items = [
    { icon: Sparkles, title:'Auditoría & Plan', desc:'Revisión integral de embudo, tracking, mensajes y canales.' },
    { icon: BarChart3, title:'Captación & Performance', desc:'Campañas en Google/Meta/LinkedIn optimizadas a CPA/ROAS.' },
    { icon: Megaphone, title:'Contenido & CRM', desc:'Email/SMS marketing, lead magnets y workflows de nutrición.' },
  ]
  return (
    <section id="servicios" className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-10">¿Qué hago por tu negocio?</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {items.map((it, i)=> (
          <motion.div key={it.title} initial={{opacity:0, y:12}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay:i*0.05}}>
            <Card className="shadow-sm hover:shadow-md transition">
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><it.icon className="w-5 h-5"/>{it.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-600">{it.desc}</p>
                <div className="mt-4"><Button variant="outline" className="rounded-xl" onClick={()=> document.getElementById('contacto')?.scrollIntoView({behavior:'smooth'})}>Quiero esto</Button></div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

function Proceso(){
  const steps = [
    { title:'1) Auditoría', desc:'Kickoff, diagnóstico y priorización.' },
    { title:'2) Plan 90 días', desc:'Backlog de acciones y objetivos.' },
    { title:'3) Ejecución', desc:'Sprints semanales y reporting.' },
  ]
  return (
    <section id="proceso" className="bg-neutral-50">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">Proceso simple y medible</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((s,i)=> (
            <motion.div key={s.title} initial={{opacity:0, y:12}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.05}} className="p-6 rounded-2xl border bg-white">
              <div className="text-xl font-semibold mb-2">{s.title}</div>
              <p className="text-neutral-600">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Testimonios(){
  const ts = [
    { name:'María G.', role:'CEO — Retail', quote:'En 3 meses pasamos de depender de referidos a tener un flujo constante de leads de calidad.' },
    { name:'J. Torres', role:'Director — SaaS', quote:'Ordenó nuestro funnel y mejoró el tracking. Ahora sabemos qué palancas mover.' },
  ]
  return (
    <section id="testimonios" className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-10">Lo que dicen los clientes</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {ts.map((t,i)=> (
          <motion.blockquote key={i} initial={{opacity:0, y:12}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay:i*0.05}} className="p-6 rounded-2xl border bg-white">
            <p className="text-lg">“{t.quote}”</p>
            <footer className="mt-4 text-sm text-neutral-600">{t.name} — {t.role}</footer>
          </motion.blockquote>
        ))}
      </div>
    </section>
  )
}

function Precios(){
  const plans = [
    { name:'Audit Sprint', price:'490€', features:['Auditoría 360°','Roadmap 90 días','1 sesión de entrega'] },
    { name:'Growth Mensual', price:'990€/mes', features:['Ejecución semanal','Ads/CRM/Contenido','Reporte mensual'] },
    { name:'Mentoring', price:'290€/mes', features:['1 call quincenal','Revisión de acciones','Soporte por email'] },
  ]
  return (
    <section id="precios" className="bg-neutral-50">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">Planes sencillos</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((p,i)=> (
            <motion.div key={p.name} initial={{opacity:0, y:12}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.05}}>
              <Card className="shadow-sm">
                <CardHeader>
                  <CardTitle>{p.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-extrabold mb-4">{p.price}</div>
                  <ul className="space-y-2 text-sm text-neutral-700">
                    {p.features.map(f=> (<li key={f} className="flex items-center gap-2"><Check className="w-4 h-4"/>{f}</li>))}
                  </ul>
                  <div className="mt-6"><Button className="rounded-xl w-full" onClick={()=> document.getElementById('contacto')?.scrollIntoView({behavior:'smooth'})}>Quiero este plan</Button></div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FAQ(){
  const faqs = [
    { q:'¿Hay permanencia?', a:'No. Trabajo por sprints mensuales y puedes pausar cuando quieras.' },
    { q:'¿Incluyes inversión en medios?', a:'No, la inversión en anuncios es aparte y la pagas directamente a la plataforma.' },
    { q:'¿Firmamos NDA?', a:'Sí, si lo necesitas. Trabajo con datos sensibles y respeto absoluto de confidencialidad.' },
  ]
  return (
    <section className="max-w-4xl mx-auto px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Preguntas frecuentes</h2>
      <div className="space-y-4">
        {faqs.map((f,i)=> (
          <details key={i} className="group border rounded-2xl p-4 bg-white">
            <summary className="cursor-pointer font-medium list-none flex items-center justify-between">{f.q}<span className="text-neutral-400">+</span></summary>
            <p className="text-neutral-600 mt-2">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  )
}

function Contacto(){
  // Si no tienes backend, puedes usar Formspree (sustituye `FORM_ID`): https://formspree.io
  const FORMSPREE_ID = '' // pon aquí tu id; si lo dejas vacío, hace preventDefault y muestra alert de demo

  const onSubmit = (e) => {
    if (!FORMSPREE_ID) {
      e.preventDefault()
      alert('¡Gracias! Demo enviada. Configura FORMSPREE_ID para envío real.')
    }
  }

  return (
    <section id="contacto" className="bg-neutral-50">
      <div className="max-w-6xl mx-auto px-4 py-16 grid lg:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">Agenda una llamada</h2>
          <p className="text-neutral-600 mt-2">Cuéntame tu situación y te propongo el mejor siguiente paso.</p>
          <ul className="mt-6 text-sm text-neutral-700 space-y-2">
            <li className="flex items-center gap-2"><Calendar className="w-4 h-4"/> Slots de 15–30 minutos</li>
            <li className="flex items-center gap-2"><Mail className="w-4 h-4"/> {BRAND.email}</li>
            <li className="flex items-center gap-2"><Phone className="w-4 h-4"/> {BRAND.phone}</li>
          </ul>
        </div>
        <form method="POST" action={FORMSPREE_ID ? `https://formspree.io/f/${FORMSPREE_ID}` : '#'} onSubmit={onSubmit} className="p-6 rounded-2xl border bg-white grid gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Nombre</label>
            <input required name="name" type="text" className="w-full rounded-xl border px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input required name="email" type="email" className="w-full rounded-xl border px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Mensaje</label>
            <textarea required name="message" rows="4" className="w-full rounded-xl border px-3 py-2" />
          </div>
          <Button type="submit" className="rounded-2xl">Enviar</Button>
          <p className="text-xs text-neutral-500">Al enviar aceptas nuestra <a href="#" className="underline">política de privacidad</a>.</p>
        </form>
      </div>
    </section>
  )
}

function Footer(){
  return (
    <footer className="border-t">
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-semibold">{BRAND.name}</div>
        <div className="flex items-center gap-3 text-sm">
          <a href="#" className="p-2 rounded-xl border hover:bg-neutral-50"><Linkedin className="w-4 h-4"/></a>
          <span className="text-neutral-500">© {new Date().getFullYear()} — Todos los derechos reservados</span>
        </div>
      </div>
    </footer>
  )
}
