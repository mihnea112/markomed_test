import { useEffect } from "react";
import { Mail, MapPin, Phone, Clock } from "lucide-react";

export default function Contact() {
  useEffect(() => {
    document.title = "Contact | MARKO MED";

    const desc =
      "Contact MARKO MED (MARKOMED) – distribuitor exclusiv în România pentru furnizori medicali internaționali.";

    let meta = document.querySelector(
      'meta[name="description"]',
    ) as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content = desc;
  }, []);
  return (
    <>
      <main className="min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/bg.png')" }}
          />
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <p className="text-primary font-semibold tracking-widest mb-3">
                CONTACT
              </p>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Ia legătura cu MARKO MED
              </h1>
              <p className="text-lg text-white/85">
                Suntem aici pentru informații despre produse, colaborări și
                cereri de ofertă.
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-12 gap-10 items-start">
              {/* Left: contact info */}
              <div className="lg:col-span-5">
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8">
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">
                    Date de contact
                  </h2>
                  <p className="text-slate-600 mb-8">
                    Pentru solicitări rapide, folosește datele de mai jos sau
                    trimite-ne un mesaj prin formular.
                  </p>

                  <div className="space-y-5">
                    <div className="flex items-start gap-4">
                      <div className="h-10 w-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-slate-500">Adresă</p>
                        <p className="font-medium text-slate-900">
                          Strada I. Văcărescu, Nr. 19, ap. 4,
                          <br />
                          300182 Timișoara, România
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="h-10 w-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-slate-500">Telefon</p>
                        <a
                          href="tel:+40729991663"
                          className="font-medium text-slate-900 hover:text-primary transition-colors"
                        >
                          0729 991 663
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="h-10 w-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-slate-500">Email</p>
                        <a
                          href="mailto:office@markomed.ro"
                          className="font-medium text-slate-900 hover:text-primary transition-colors"
                        >
                          office@markomed.ro
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="h-10 w-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-slate-500">Program</p>
                        <p className="font-medium text-slate-900">
                          Luni–Vineri: 09:00–17:00
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Optional: quick CTA */}
                  <div className="mt-10 p-5 rounded-xl bg-white border border-slate-200">
                    <p className="text-slate-700">
                      Pentru echipamente laser (Biolitec / LEONARDO), trimite un
                      mesaj cu specialitatea și tipul procedurilor – revenim cu
                      o recomandare și ofertă.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right: form + map */}
              <div className="lg:col-span-7">
                <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">
                    Trimite un mesaj
                  </h2>
                  <p className="text-slate-600 mb-8">
                    Completează formularul și îți răspundem cât mai curând
                    posibil.
                  </p>

                  <form className="space-y-5">
                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Nume
                        </label>
                        <input
                          type="text"
                          name="name"
                          placeholder="Numele tău"
                          className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/40"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          placeholder="email@exemplu.ro"
                          className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/40"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Telefon (opțional)
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="07xx xxx xxx"
                        className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/40"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Subiect
                      </label>
                      <input
                        type="text"
                        name="subject"
                        placeholder="Cerere ofertă / Informații produs / Eveniment"
                        className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/40"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Mesaj
                      </label>
                      <textarea
                        name="message"
                        rows={6}
                        placeholder="Scrie mesajul tău aici..."
                        className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/40"
                      />
                    </div>

                    <div className="flex items-center justify-between gap-4 flex-wrap">
                      <p className="text-xs text-slate-500">
                        Prin trimiterea mesajului, ești de acord să fim
                        contactați pentru a răspunde solicitării.
                      </p>
                      <button
                        type="submit"
                        className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-white font-semibold shadow-sm hover:opacity-95 transition-opacity"
                      >
                        Trimite mesajul
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
