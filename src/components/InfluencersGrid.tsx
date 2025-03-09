
import { influencers } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Twitter, Github } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from 'framer-motion';

export function InfluencersGrid() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  const filterInfluencers = (category: string) => {
    return influencers.filter(influencer => influencer.category === category);
  };

  const InfluencerCard = ({ influencer }) => (
    <motion.div
      variants={item}
      className="bg-white rounded-lg border border-slate-100 p-3 shadow-subtle hover:shadow-hover hover:-translate-y-1 transition-all duration-200"
    >
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full overflow-hidden">
          <img 
            src={influencer.avatar} 
            alt={influencer.name}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-medium text-sm truncate">{influencer.name}</h3>
          <p className="text-xs text-muted-foreground truncate">{influencer.role}</p>
        </div>
      </div>
      <div className="flex gap-2 mt-3">
        <a 
          href={`https://twitter.com/${influencer.twitter}`} 
          target="_blank" 
          rel="noreferrer"
          className="inline-flex items-center gap-1 text-xs text-blue-500 hover:text-blue-600 transition-colors"
        >
          <Twitter className="h-3 w-3" />
          {influencer.twitter}
        </a>
        {influencer.github && (
          <a 
            href={`https://github.com/${influencer.github}`} 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-xs text-slate-700 hover:text-slate-900 transition-colors"
          >
            <Github className="h-3 w-3" />
            {influencer.github}
          </a>
        )}
      </div>
    </motion.div>
  );

  return (
    <Card className="shadow-card hover:shadow-hover transition-shadow duration-300">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg flex items-center gap-2">
          <Users className="h-5 w-5 text-blue-500" />
          Experts et Influenceurs .NET
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="microsoft" className="w-full">
          <TabsList className="grid grid-cols-3 mb-4">
            <TabsTrigger value="microsoft">Équipe Microsoft</TabsTrigger>
            <TabsTrigger value="community">Experts Community</TabsTrigger>
            <TabsTrigger value="content">Créateurs de Contenu</TabsTrigger>
          </TabsList>

          <TabsContent value="microsoft">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-3"
              variants={container}
              initial="hidden"
              animate="show"
              key="microsoft"
            >
              {filterInfluencers('microsoft').map(influencer => (
                <InfluencerCard key={influencer.id} influencer={influencer} />
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="community">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-3"
              variants={container}
              initial="hidden"
              animate="show"
              key="community"
            >
              {filterInfluencers('community').map(influencer => (
                <InfluencerCard key={influencer.id} influencer={influencer} />
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="content">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-3"
              variants={container}
              initial="hidden"
              animate="show"
              key="content"
            >
              {filterInfluencers('content').map(influencer => (
                <InfluencerCard key={influencer.id} influencer={influencer} />
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
