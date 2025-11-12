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

  const getCardBg = () => {
    switch (district.riskLevel) {
      case 'critical': return 'bg-gradient-to-br from-red-50 to-white border-l-4 border-l-red-500';
      case 'high': return 'bg-gradient-to-br from-orange-50 to-white border-l-4 border-l-orange-500';
      case 'medium': return 'bg-gradient-to-br from-yellow-50 to-white border-l-4 border-l-yellow-500';
      default: return 'bg-gradient-to-br from-green-50 to-white border-l-4 border-l-green-500';
    }
  };

  return (
    <Card 
      className={`hover-elevate cursor-pointer ${getCardBg()} shadow-md hover:shadow-lg transition-shadow`}
      onClick={() => console.log('District clicked:', district.name)}
      data-testid={`card-district-${district.id}`}
    >
      <CardHeader className="flex flex-row items-center justify-between gap-2 space-y-0 pb-2">
        <h3 className="font-semibold text-base" data-testid="text-district-name">{district.name}</h3>
        <Badge variant={getRiskBadgeVariant()} data-testid="badge-risk-level">
          {district.riskLevel.toUpperCase()}
        </Badge>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 gap-4">
          <div className="flex flex-col items-center gap-1">
            <div className="p-2 bg-blue-100 rounded-full">
              <Droplets className="w-5 h-5 text-blue-600" />
            </div>
            <span className="text-xs text-gray-600 font-medium">Rainfall</span>
            <span className="text-sm font-bold text-blue-700" data-testid="text-rainfall">
              {district.rainfall}mm
            </span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="p-2 bg-amber-100 rounded-full">
              <TrendingUp className="w-5 h-5 text-amber-600" />
            </div>
            <span className="text-xs text-gray-600 font-medium">Soil</span>
            <span className="text-sm font-bold text-amber-700" data-testid="text-soil">
              {district.soilMoisture}%
            </span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="p-2 bg-gray-100 rounded-full">
              <Mountain className="w-5 h-5 text-gray-600" />
            </div>
            <span className="text-xs text-gray-600 font-medium">Slope</span>
            <span className="text-sm font-bold text-gray-700" data-testid="text-slope">
              {district.slopeRisk}
            </span>
          </div>
        </div>
        <div className="mt-4 text-xs text-muted-foreground text-center" data-testid="text-updated">
          Updated {district.lastUpdated}
        </div>
      </CardContent>
    </Card>
  );
}
