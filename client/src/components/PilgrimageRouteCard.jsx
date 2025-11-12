import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Cloud, Thermometer, Wind } from 'lucide-react';

export default function PilgrimageRouteCard({ route }) {
  const getStatusConfig = () => {
    switch (route.status) {
      case 'safe': return { text: 'SAFE', color: 'text-emerald-600 border-emerald-600' };
      case 'caution': return { text: 'CAUTION', color: 'text-amber-500 border-amber-500' };
      case 'unsafe': return { text: 'UNSAFE', color: 'text-red-600 border-red-600' };
      default: return { text: 'UNKNOWN', color: 'text-muted-foreground border-border' };
    }
  };

  const statusConfig = getStatusConfig();

  return (
    <Card className="min-w-[260px] hover-elevate" data-testid={`card-route-${route.id}`}>
      <CardHeader className="flex flex-row items-start justify-between gap-2 space-y-0 pb-3">
        <div className="flex items-start gap-2 flex-1 min-w-0">
          <MapPin className="w-5 h-5 mt-0.5 text-blue-600 flex-shrink-0" />
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-base leading-tight" data-testid="text-route-name">{route.name}</h3>
            <p className="text-xs text-muted-foreground mt-0.5" data-testid="text-distance">
              {route.distance} km from base
            </p>
          </div>
        </div>
        <Badge variant="outline" className={`${statusConfig.color} flex-shrink-0`} data-testid="badge-status">
          {statusConfig.text}
        </Badge>
      </CardHeader>
      <CardContent className="space-y-2.5 pb-3">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-1.5">
            <Cloud className="w-4 h-4 text-muted-foreground" />
            <span className="text-muted-foreground text-xs">Weather</span>
          </div>
          <span className="font-medium" data-testid="text-weather">{route.weather}</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-1.5">
            <Thermometer className="w-4 h-4 text-muted-foreground" />
            <span className="text-muted-foreground text-xs">Temp</span>
          </div>
          <span className="font-medium" data-testid="text-temperature">{route.temperature}°C</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-1.5">
            <Wind className="w-4 h-4 text-muted-foreground" />
            <span className="text-muted-foreground text-xs">Wind</span>
          </div>
          <span className="font-medium" data-testid="text-wind">{route.windSpeed} km/h</span>
        </div>
        <Button 
          variant="outline" 
          size="sm" 
          className="w-full mt-1"
          onClick={() => console.log('View route details:', route.id)}
          data-testid="button-view-route"
        >
          View Route Details
        </Button>
      </CardContent>
    </Card>
  );
}
