import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Droplets, Mountain, TrendingUp } from 'lucide-react';

export default function DistrictCard({ district }) {
  const getRiskBadgeVariant = () => {
    switch (district.riskLevel) {
      case 'critical': return 'destructive';
      case 'high': return 'default';
      case 'medium': return 'secondary';
      default: return 'outline';
    }
  };

  const getRiskColor = () => {
    switch (district.riskLevel) {
      case 'critical': return 'text-risk-critical';
      case 'high': return 'text-risk-high';
      case 'medium': return 'text-risk-medium';
      default: return 'text-risk-low';
    }
  };

  const getBorderColor = () => {
    switch (district.riskLevel) {
      case 'critical': return 'border-l-4 border-l-red-600 bg-red-50/40 dark:bg-red-950/10';
      case 'high': return 'border-l-4 border-l-amber-500 bg-amber-50/40 dark:bg-amber-950/10';
      case 'medium': return 'border-l-4 border-l-amber-400 bg-amber-50/30 dark:bg-amber-950/10';
      default: return 'border-l-4 border-l-emerald-500 bg-emerald-50/30 dark:bg-emerald-950/10';
    }
  };

  const getRiskColorText = () => {
    switch (district.riskLevel) {
      case 'critical': return 'text-red-600';
      case 'high': return 'text-amber-500';
      case 'medium': return 'text-amber-400';
      default: return 'text-emerald-500';
    }
  };

  return (
    <Card 
      className={`hover-elevate cursor-pointer ${getBorderColor()}`}
      onClick={() => console.log('District clicked:', district.name)}
      data-testid={`card-district-${district.id}`}
    >
      <CardHeader className="flex flex-row items-center justify-between gap-2 space-y-0 pb-3">
        <h3 className="font-semibold text-base" data-testid="text-district-name">{district.name}</h3>
        <Badge variant="outline" className={`${getRiskColorText()} border-current`} data-testid="badge-risk-level">
          {district.riskLevel.toUpperCase()}
        </Badge>
      </CardHeader>
      <CardContent className="pb-4">
        <div className="grid grid-cols-3 gap-3">
          <div className="flex flex-col items-center gap-1">
            <div className="p-1.5 bg-sky-100 rounded-md">
              <Droplets className="w-4 h-4 text-sky-700" />
            </div>
            <span className="text-xs text-muted-foreground font-medium">Rainfall</span>
            <span className="text-sm font-bold text-foreground" data-testid="text-rainfall">
              {district.rainfall}mm
            </span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="p-1.5 bg-amber-100 rounded-md">
              <TrendingUp className="w-4 h-4 text-amber-700" />
            </div>
            <span className="text-xs text-muted-foreground font-medium">Soil</span>
            <span className="text-sm font-bold text-foreground" data-testid="text-soil">
              {district.soilMoisture}%
            </span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="p-1.5 bg-slate-100 rounded-md">
              <Mountain className="w-4 h-4 text-slate-700" />
            </div>
            <span className="text-xs text-muted-foreground font-medium">Slope</span>
            <span className="text-sm font-bold text-foreground" data-testid="text-slope">
              {district.slopeRisk}
            </span>
          </div>
        </div>
        <div className="mt-3 text-xs text-muted-foreground text-center" data-testid="text-updated">
          Updated {district.lastUpdated}
        </div>
      </CardContent>
    </Card>
  );
}
