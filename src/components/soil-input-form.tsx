"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { HelpCircle } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export interface SoilData {
  nitrogen: number;
  phosphorus: number;
  potassium: number;
}

interface SoilInputFormProps {
  onSubmit: (data: SoilData) => Promise<void>;
  isLoading: boolean;
}

export const SoilInputForm: React.FC<SoilInputFormProps> = ({
  onSubmit,
  isLoading,
}) => {
  const [nitrogen, setNitrogen] = React.useState<number | "">("");
  const [phosphorus, setPhosphorus] = React.useState<number | "">("");
  const [potassium, setPotassium] = React.useState<number | "">("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (nitrogen === "" || phosphorus === "" || potassium === "") {
      alert("Please fill in all the fields.");
      return;
    }

    const data: SoilData = {
      nitrogen: Number(nitrogen),
      phosphorus: Number(phosphorus),
      potassium: Number(potassium),
    };

    await onSubmit(data);
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Soil Data Input</CardTitle>
        <CardDescription>
          Enter the soil nutrition data to get crop recommendations.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="nitrogen">
                Nitrogen Level
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <HelpCircle className="ml-2 h-4 w-4 inline-block align-top cursor-pointer" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>
                        Enter the nitrogen level in the soil (e.g., in ppm).
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Label>
              <Input
                type="number"
                id="nitrogen"
                placeholder="e.g., 50 ppm"
                value={nitrogen}
                onChange={(e) => setNitrogen(e.target.value === "" ? "" : Number(e.target.value))}
                required
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="phosphorus">
                Phosphorus Level
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <HelpCircle className="ml-2 h-4 w-4 inline-block align-top cursor-pointer" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>
                        Enter the phosphorus level in the soil (e.g., in ppm).
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Label>
              <Input
                type="number"
                id="phosphorus"
                placeholder="e.g., 30 ppm"
                value={phosphorus}
                onChange={(e) => setPhosphorus(e.target.value === "" ? "" : Number(e.target.value))}
                required
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="potassium">
                Potassium Level
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <HelpCircle className="ml-2 h-4 w-4 inline-block align-top cursor-pointer" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>
                        Enter the potassium level in the soil (e.g., in ppm).
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Label>
              <Input
                type="number"
                id="potassium"
                placeholder="e.g., 80 ppm"
                value={potassium}
                onChange={(e) => setPotassium(e.target.value === "" ? "" : Number(e.target.value))}
                required
              />
            </div>
          </div>
          <Button disabled={isLoading} type="submit">
            {isLoading ? "Recommending..." : "Recommend Crops"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export interface CropRecommendation {
  name: string;
  suitability: string;
  yieldEstimate: string;
  waterNeeds: string;
  timeToHarvest: string;
}

interface CropProps {
  crop: CropRecommendation;
}

export const Crop: React.FC<CropProps> = ({ crop }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{crop.name}</CardTitle>
        <CardDescription>Recommended Crop</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <p>
          <span className="font-semibold">Suitability:</span> {crop.suitability}
        </p>
        <p>
          <span className="font-semibold">Yield Estimate:</span>{" "}
          {crop.yieldEstimate}
        </p>
        <p>
          <span className="font-semibold">Water Needs:</span> {crop.waterNeeds}
        </p>
        <p>
          <span className="font-semibold">Time to Harvest:</span>{" "}
          {crop.timeToHarvest}
        </p>
      </CardContent>
    </Card>
  );
};
