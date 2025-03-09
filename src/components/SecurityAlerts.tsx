
import { securityAlerts } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertOctagon, AlertTriangle, Info } from 'lucide-react';
import { motion } from 'framer-motion';

export function SecurityAlerts() {
  const getSeverityIcon = (severity: string) => {
    switch(severity) {
      case 'critical':
        return <AlertOctagon className="h-4 w-4 text-red-600" />;
      case 'warning':
        return <AlertTriangle className="h-4 w-4 text-amber-600" />;
      case 'info':
        return <Info className="h-4 w-4 text-blue-600" />;
      default:
        return null;
    }
  };

  const getSeverityClass = (severity: string) => {
    switch(severity) {
      case 'critical':
        return 'alert-badge-critical';
      case 'warning':
        return 'alert-badge-warning';
      case 'info':
        return 'alert-badge-info';
      default:
        return '';
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
          <AlertOctagon className="h-5 w-5 text-red-500" />
          Alertes de sécurité .NET
        </CardTitle>
      </CardHeader>
      <CardContent>
        <motion.ul 
          className="space-y-3"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {securityAlerts.map(alert => (
            <motion.li 
              key={alert.id}
              variants={item}
              className="border-b border-dashed border-slate-100 pb-3 last:border-0 last:pb-0"
            >
              <div className="flex justify-between items-start">
                <h3 className="font-medium text-sm">
                  <a 
                    href={alert.link} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="hover:text-dotnet-purple transition-colors"
                  >
                    {alert.title}
                  </a>
                </h3>
                <span className={`alert-badge ${getSeverityClass(alert.severity)}`}>
                  {getSeverityIcon(alert.severity)}
                  {alert.severity === 'critical' ? 'Critique' : 
                   alert.severity === 'warning' ? 'Attention' : 'Info'}
                </span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">{alert.description}</p>
              <p className="text-xs text-slate-400 mt-1">{alert.date}</p>
            </motion.li>
          ))}
        </motion.ul>
      </CardContent>
    </Card>
  );
}
