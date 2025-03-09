
import { infoSources } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion';

export function SourceDistribution() {
  return (
    <Card className="shadow-card hover:shadow-hover transition-shadow duration-300">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg flex items-center gap-2">
          <FileText className="h-5 w-5 text-indigo-500" />
          Distribution des Sources
        </CardTitle>
      </CardHeader>
      <CardContent>
        <motion.div 
          className="h-[250px]"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={infoSources} margin={{ top: 10, right: 0, left: 0, bottom: 20 }}>
              <XAxis 
                dataKey="name" 
                tick={{ fontSize: 12 }} 
                axisLine={false} 
                tickLine={false}
              />
              <YAxis hide={true} />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'white',
                  border: 'none',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                  borderRadius: '0.5rem',
                  fontSize: '12px'
                }}
                cursor={{ fill: 'rgba(236, 72, 153, 0.05)' }}
              />
              <Bar
                dataKey="value"
                fill="#8884d8"
                barSize={40}
                radius={[4, 4, 0, 0]}
                isAnimationActive={true}
                animationDuration={1500}
              >
                {infoSources.map((entry, index) => (
                  <motion.rect 
                    key={`bar-${index}`} 
                    fill={entry.color}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </motion.div>
      </CardContent>
    </Card>
  );
}
