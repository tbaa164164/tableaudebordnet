import { lastUpdateDate, newNotificationsCount, savedArticlesCount } from '@/lib/data';
import { Bell, Bookmark } from 'lucide-react';
import { motion } from 'framer-motion';
export function Header() {
  return <motion.header className="py-4 px-6 bg-white/80 backdrop-blur-md border-b border-slate-100 sticky top-0 z-10" initial={{
    opacity: 0,
    y: -20
  }} animate={{
    opacity: 1,
    y: 0
  }} transition={{
    duration: 0.5
  }}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gradient">Tableau de Bord - Veille .NET</h1>
          <p className="text-sm text-muted-foreground">
            Dernière mise à jour : {lastUpdateDate}
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-sm">
            <Bell className="h-4 w-4 text-dotnet-purple" />
            <span>{newNotificationsCount} nouvelles notifications</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Bookmark className="h-4 w-4 text-dotnet-blue" />
            <span>{savedArticlesCount} articles sauvegardés</span>
          </div>
          <div className="ml-4 flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-r from-dotnet-purple to-dotnet-blue p-[2px]">
              <div className="h-full w-full rounded-full bg-white flex items-center justify-center">
                <span className="text-xs font-semibold text-dotnet-purple">TP</span>
              </div>
            </div>
            <span className="text-sm hidden sm:inline-block">TP à rendre
          </span>
          </div>
        </div>
      </div>
    </motion.header>;
}