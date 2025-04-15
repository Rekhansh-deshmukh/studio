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

const Disclaimer = () => (
  <Card className="w-full mt-4">
    <CardHeader>
      <CardTitle>Disclaimer</CardTitle>
      <CardDescription>
        The recommendations provided are based on the soil data you input and
        should be considered as suggestions only. Consult with local
        agricultural experts for specific advice tailored to your situation.
      </CardDescription>
    </CardHeader>
  </Card>
);

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
    <div className="flex flex-col items-center justify-start min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-background">
      <Toaster />
      <div className="w-full max-w-3xl">
        <h1 className="text-3xl font-semibold text-center mb-6">
          Kheti Buddy Advisor
        </h1>
        <SoilInputForm onSubmit={onSubmit} isLoading={isLoading} />

        {recommendations && recommendations.length > 0 ? (
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">
              Recommended Crops
            </h2>
            <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {recommendations.map((recommendation, index) => (
                <Crop key={index} crop={recommendation} />
              ))}
            </div>
          </div>
        ) : recommendations !== null ? (
          <div className="mt-8">
            <p className="text-muted-foreground">
              No crops recommended for the given soil conditions.
            </p>
          </div>
        ) : null}

      </div>
    </div>
  );
}

