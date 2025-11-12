import { AlertTriangle, MapPin, Clock } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function AlertCard({ alert }) {
  const getBorderColor = () => {
    switch (alert.severity) {
      case 'critical': return 'border-l-4 border-l-red-600 bg-red-50/40 dark:bg-red-950/10';
      case 'high': return 'border-l-4 border-l-amber-500 bg-amber-50/40 dark:bg-amber-950/10';
      case 'medium': return 'border-l-4 border-l-amber-400 bg-amber-50/30 dark:bg-amber-950/10';
      default: return 'border-l-4 border-l-emerald-500 bg-emerald-50/30 dark:bg-emerald-950/10';
    }
  };

  const getSeverityColor = () => {
    switch (alert.severity) {
      case 'critical': return 'text-red-600';
      case 'high': return 'text-amber-500';
      case 'medium': return 'text-amber-400';
      default: return 'text-emerald-500';
    }
  };

  return (
    <Card className={`${getBorderColor()}`} data-testid={`card-alert-${alert.id}`}>
      <CardHeader className="flex flex-row items-start justify-between gap-2 space-y-0 pb-3">
        <div className="flex items-start gap-2 flex-1">
          <AlertTriangle className={`w-5 h-5 mt-0.5 flex-shrink-0 ${getSeverityColor()}`} />
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-base leading-tight" data-testid="text-alert-type">{alert.type}</h3>
            <Badge variant="outline" className={`mt-1.5 ${getSeverityColor()} border-current`} data-testid="badge-severity">
              {alert.severity.toUpperCase()}
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-2 pb-3">
        <div className="flex items-center gap-2 text-sm">
          <MapPin className="w-4 h-4 text-muted-foreground flex-shrink-0" />
          <span className="font-medium" data-testid="text-location">{alert.location}</span>
        </div>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Clock className="w-4 h-4 flex-shrink-0" />
          <span data-testid="text-time">{alert.time}</span>
        </div>
        <p className="text-sm leading-snug pt-1" data-testid="text-description">{alert.description}</p>
      </CardContent>
      <CardFooter className="pt-0">
        <Button 
          variant="outline" 
          size="sm" 
          className="w-full"
          onClick={() => console.log('View details for alert:', alert.id)}
          data-testid="button-view-details"
        >
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
}
