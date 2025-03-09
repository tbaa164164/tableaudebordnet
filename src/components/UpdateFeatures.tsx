
import { updateFeatures } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Sparkles, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

export function UpdateFeatures() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <Card className="shadow-card hover:shadow-hover transition-shadow duration-300">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-blue-500" />
          Nouveautés & Mises à jour
        </CardTitle>
      </CardHeader>
      <CardContent>
        <motion.ul 
          className="space-y-3"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {updateFeatures.map(feature => (
            <motion.li 
              key={feature.id}
              variants={item}
              className="border-b border-dashed border-slate-100 pb-3 last:border-0 last:pb-0"
            >
              <div className="flex justify-between items-start">
                <h3 className="font-medium text-sm group">
                  <a 
                    href={feature.link} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="hover:text-dotnet-purple transition-colors flex items-center gap-1"
                  >
                    {feature.title}
                    <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </h3>
                {feature.isNew && (
                  <span className="inline-flex items-center rounded-full bg-dotnet-teal/10 px-2 py-0.5 text-xs font-medium text-dotnet-teal">
                    Nouveau
                  </span>
                )}
              </div>
              <p className="text-sm text-muted-foreground mt-1">{feature.description}</p>
              <div className="flex justify-between items-center mt-1">
                <span className="text-xs text-slate-400">{feature.date}</span>
                <span className="text-xs font-medium px-2 py-0.5 bg-slate-100 rounded-full">
                  {feature.technology}
                </span>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </CardContent>
    </Card>
  );
}
