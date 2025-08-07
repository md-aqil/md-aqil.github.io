import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { caseStudies } from '@/data/caseStudies';

const Work = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Work & Case Studies | UX Design Portfolio';
  }, []);

  return (
    <main>
      <section className="pt-28 pb-10 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Work & Case Studies</h1>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            A curated selection of product design projects, blending behavioral psychology with clean, modern interfaces that drive measurable results.
          </p>
        </div>
      </section>

      <section className="pb-20 px-4">
        <div className="max-w-6xl mx-auto space-y-20">
          {caseStudies.map((study, index) => (
            <article
              key={study.id}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-10 items-center`}
            >
              <div className="lg:w-1/2 relative">
                <div className="relative overflow-hidden rounded-3xl group">
                  <img
                    src={study.image}
                    alt={`Case study - ${study.title}`}
                    loading="lazy"
                    className="w-full h-[360px] object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>

              <div className="lg:w-1/2 space-y-5">
                <div className="flex flex-wrap gap-2">
                  {study.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full border border-primary/20">
                      {tag}
                    </span>
                  ))}
                </div>

                <h2 className="text-3xl font-bold">{study.title}</h2>
                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground">Client:</span> {study.client}
                </p>
                <p className="text-muted-foreground">{study.challenge}</p>

                <div className="flex flex-wrap gap-6">
                  {Object.entries(study.results).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-2xl font-bold text-primary">{value}</div>
                      <div className="text-xs text-muted-foreground capitalize">{key}</div>
                    </div>
                  ))}
                </div>

                <Button
                  variant="ghost"
                  className="group"
                  onClick={() => {
                    if (study.id === 'deerika-grocery') navigate('/deerika-case-study');
                    else navigate(`/case-study/${study.id}`);
                  }}
                >
                  View Full Case Study
                </Button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Work;
