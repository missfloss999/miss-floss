const testimonials = [
  {
    quote:
      "We used to miss nearly 30% of calls during morning rush. Since Miss Floss, every single call is answered. In 90 days, we booked 52 additional appointments we would have otherwise lost.",
    name: "Dr. Sarah Chen",
    title: "Owner, Smile Studio Dental",
    location: "Scarborough, ON",
    avatar: "SC",
    stars: 5,
  },
  {
    quote:
      "My front desk staff were drowning. Now they focus entirely on patients in the chair. Miss Floss handles all the booking calls. Team morale is up, no-shows are down — it's the best operational decision I've made.",
    name: "Dr. Michael Patel",
    title: "Principal Dentist, Bayview Family Dentistry",
    location: "Richmond Hill, ON",
    avatar: "MP",
    stars: 5,
  },
  {
    quote:
      "I was worried patients would find it impersonal. They don't — they can't even tell it's AI. Our Google reviews mention the 'great reception' more than ever. And we're capturing weekend bookings we used to lose completely.",
    name: "Dr. Priya Kapoor",
    title: "Founder, Midtown Dental Group",
    location: "Toronto, ON",
    avatar: "PK",
    stars: 5,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-teal-500">
          <path d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative bg-white min-h-screen flex flex-col justify-center py-10 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <p className="text-xs font-semibold tracking-widest text-teal-600 uppercase mb-4">
            Testimonials
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-3">
            Dental Clinics{" "}
            <span className="bg-gradient-to-r from-teal-600 to-teal-500 bg-clip-text text-transparent">
              Love Miss Floss.
            </span>
          </h2>
          <p className="text-xl text-slate-500 max-w-xl mx-auto leading-relaxed">
            Dental practice owners share what changed after switching to Miss Floss.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="relative rounded-2xl border border-slate-200 bg-white shadow-sm p-7 flex flex-col gap-6 hover:shadow-md hover:border-slate-300 transition-all duration-300"
            >
              <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7 text-teal-200 shrink-0">
                <path
                  d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"
                  fill="currentColor"
                />
              </svg>

              <p className="text-base text-slate-600 leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="flex items-center gap-3 pt-2 border-t border-slate-100">
                <div className="w-10 h-10 rounded-full bg-teal-50 border border-teal-200 flex items-center justify-center text-xs font-bold text-teal-700 shrink-0">
                  {t.avatar}
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <p className="text-sm font-semibold text-slate-900 truncate">{t.name}</p>
                    <Stars count={t.stars} />
                  </div>
                  <p className="text-sm text-slate-400 truncate">
                    {t.title} · {t.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-center gap-4">
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg key={i} viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-teal-500">
                <path d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" />
              </svg>
            ))}
          </div>
          <p className="text-base text-slate-500">
            <span className="text-slate-900 font-semibold">4.9 / 5</span> from dental
            clinic owners across Toronto &amp; the GTA
          </p>
        </div>
      </div>
    </section>
  );
}
