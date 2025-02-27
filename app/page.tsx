"use client";
import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import WaterWaveWrapper from "@/components/visualEffects/water-wave-wrapper";

export default function Home() {
  return (
    <WaterWaveWrapper 
    imageUrl=""
    dropRadius="3"
    perturbance="3"
    resolution="2048"
    >
     {()=><div className="w-full p-10">
      <div className="max-w-2xl mx-auto">
        <Card title="Ui Components">
          <Button>Basic Button</Button>
        </Card>
      </div>
            
      
      </div>} 
    </WaterWaveWrapper>
  );
}
