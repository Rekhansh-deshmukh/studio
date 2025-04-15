"use client";

import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { recommendCrops } from "@/ai/flows/recommend-crops";
import {
  Crop,
  CropRecommendation,
  SoilInputForm,
  SoilData,
} from "@/components/soil-input-form";
import { toast } from "@/hooks/use-toast";
import { Toaster } from "@/components/ui/toaster";
import { HelpCircle } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Chatbot from "@/components/chatbot";

export default function Home() {
  const [recommendations, setRecommendations] = useState<
    CropRecommendation[] | null
  >(null);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data: SoilData) => {
    setIsLoading(true);
    try {
      const crops = await recommendCrops(data);
      if (!crops?.crops) {
        throw new Error("No crops recommended.");
      }

      const cropRecommendations = crops.crops.map((crop) => ({
        name: crop.name,
        suitability: crop.suitability,
        yieldEstimate: crop.yieldEstimate,
        waterNeeds: crop.waterNeeds,
        timeToHarvest: crop.timeToHarvest,
      }));

      setRecommendations(cropRecommendations);
    } catch (error: any) {
      toast({
        title: "Error!",
        description:
          error?.message || "Failed to get crop recommendations, try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    
      <Toaster />
      
        
          <h1>Kheti Buddy Advisor</h1>
        
        <SoilInputForm onSubmit={onSubmit} isLoading={isLoading} />

        {recommendations && recommendations.length > 0 ? (
          
            <h2>
              Recommended Crops
            </h2>
            
              {recommendations.map((recommendation, index) => (
                <Crop key={index} crop={recommendation} />
              ))}
            
          
        ) : recommendations !== null ? (
          
            <p className="text-muted-foreground">
              No crops recommended for the given soil conditions.
            </p>
          
        ) : null}

      
      <Chatbot />
    
  );
}

