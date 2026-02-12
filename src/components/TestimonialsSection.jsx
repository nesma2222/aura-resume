import { Star } from "lucide-react";
function TestimonialsSection() {
  const reviews = [
    {
      name: "Anna Peterson",
      time: "about 14 hours ago",
      title: "Finally I’m getting feedback",
      content: "I applied to 20+ job postings with no luck. But! Once I made an ATS-friendly resume, I’ve started getting a lot more responses from recruiters.",
    },
    {
      name: "Mark Heighter",
      time: "about 14 hours ago",
      title: "Fastest resume builder, like ever",
      content: "AuraResume’s AI saved me tons of time, I’m sure of that. Now I have a professional resume, and it was so easy to make. Thanks!",
    },
    {
      name: "Byron Moreno",
      time: "about 16 hours ago",
      title: "A great resume builder",
      content: "I struggled to create a resume before and had no idea it needed to be optimized for hiring software. This tool fixed it, and now I finally have a job!",
    }
  ];

  return (
    <section className="bg-[#fdf2f0] py-24">
      <div className="max-w-7xl mx-auto px-12">
        <h2 className="text-5xl font-black text-center text-slate-800 mb-16">
          What our customers are <span className="text-peach-500">saying about us</span>
        </h2>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Trustpilot Score Left Side */}
          <div className="lg:w-1/4 space-y-4">
            <p className="text-2xl font-bold text-slate-800">4.5 out of 5</p>
            <div className="flex gap-1">
              {[1, 2, 3, 4].map(i => <Star key={i} fill="#10b981" className="text-green-500" size={24} />)}
              <Star fill="#cbd5e1" className="text-slate-300" size={24} />
            </div>
            <div className="flex items-center gap-2">
               <span className="text-green-500 font-bold text-xl">★ Trustpilot</span>
            </div>
            <p className="text-slate-400 text-xs">based on 3,112 reviews</p>
          </div>

          {/* Reviews Grid */}
          <div className="lg:w-3/4 grid md:grid-cols-3 gap-8">
            {reviews.map((rev, i) => (
              <div key={i} className="space-y-4">
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map(s => <Star key={s} fill="#10b981" className="text-green-500" size={16} />)}
                </div>
                <h4 className="font-bold text-lg text-slate-800 leading-tight">{rev.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{rev.content}</p>
                <div className="pt-2">
                  <p className="text-slate-400 text-xs font-semibold">{rev.name} • {rev.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Dots */}
        <div className="flex justify-center gap-2 mt-12">
          <div className="w-2.5 h-2.5 rounded-full bg-peach-500"></div>
          {[1, 2, 3, 4].map(i => <div key={i} className="w-2.5 h-2.5 rounded-full bg-peach-200"></div>)}
        </div>
      </div>
    </section>
  );
}
export default TestimonialsSection;

// Note: Ensure you import 'Star' from 'lucide-react' at the top
