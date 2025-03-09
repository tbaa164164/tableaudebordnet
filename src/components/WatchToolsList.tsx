import { Wrench, Rss, Mail, Github, MessageSquare, BarChart } from 'lucide-react';
import { watchTools } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';

export function WatchToolsList() {
  const getIconComponent = (iconName: string) => {
    switch(iconName) {
      case 'rss':
        return <Rss className="h-4 w-4 text-orange-500" />;
      case 'mail':
        return <Mail className="h-4 w-4 text-blue-500" />;
      case 'github':
        return <Github className="h-4 w-4 text-slate-800" />;
      case 'message-square':
        return <MessageSquare className="h-4 w-4 text-red-500" />;
      case 'bar-chart':
        return <BarChart className="h-4 w-4 text-yellow-500" />;
      default:
        return <Wrench className="h-4 w-4 text-slate-500" />;
    }
  };

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
          <Wrench className="h-5 w-5 text-dotnet-blue" />
          Outils de Veille Utilisés
        </CardTitle>
      </CardHeader>
      <CardContent>
        <motion.ul 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {watchTools.map(tool => (
            <motion.li
              key={tool.id}
              variants={item}
              className="bg-slate-50 rounded-lg border border-slate-100 p-3 hover:bg-white hover:shadow-subtle transition-all duration-200"
            >
              <a 
                href={tool.url} 
                target="_blank" 
                rel="noreferrer"
                className="block h-full"
              >
                <div className="flex items-center gap-2">
                  {getIconComponent(tool.icon)}
                  <h3 className="font-medium text-sm">{tool.name}</h3>
                </div>
                <p className="text-xs text-muted-foreground mt-1 pl-6">
                  {tool.description}
                </p>
              </a>
            </motion.li>
          ))}
        </motion.ul>
      </CardContent>
    </Card>
  );
}
