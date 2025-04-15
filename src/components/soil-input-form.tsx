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
  nitrogen: number | "";
  phosphorus: number | "";
  potassium: number | "";
  soilType: string;
  phLevel: string;
  organicMatter: string;
  temperature: number | "";
  rainfall: number | "";
  humidity: number | "";
  sunlight: string;
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
  const [soilType, setSoilType] = React.useState<string>("");
  const [phLevel, setPhLevel] = React.useState<string>("");
  const [organicMatter, setOrganicMatter] = React.useState<string>("");
  const [temperature, setTemperature] = React.useState<number | "">("");
  const [rainfall, setRainfall] = React.useState<number | "">("");
  const [humidity, setHumidity] = React.useState<number | "">("");
  const [sunlight, setSunlight] = React.useState<string>("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (
      nitrogen === "" ||
      phosphorus === "" ||
      potassium === "" ||
      soilType === "" ||
      phLevel === "" ||
      organicMatter === "" ||
      temperature === "" ||
      rainfall === "" ||
      humidity === "" ||
      sunlight === ""
    ) {
      alert("Please fill in all the fields.");
      return;
    }

    const data: SoilData = {
      nitrogen: Number(nitrogen),
      phosphorus: Number(phosphorus),
      potassium: Number(potassium),
      soilType: soilType,
      phLevel: phLevel,
      organicMatter: organicMatter,
      temperature: Number(temperature),
      rainfall: Number(rainfall),
      humidity: Number(humidity),
      sunlight: sunlight,
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
                onChange={(e) =>
                  setNitrogen(e.target.value === "" ? "" : Number(e.target.value))
                }
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
                onChange={(e) =>
                  setPhosphorus(
                    e.target.value === "" ? "" : Number(e.target.value)
                  )
                }
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
                onChange={(e) =>
                  setPotassium(
                    e.target.value === "" ? "" : Number(e.target.value)
                  )
                }
                required
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="soilType">
                Soil Type
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <HelpCircle className="ml-2 h-4 w-4 inline-block align-top cursor-pointer" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Enter the type of soil (e.g., Loamy, Sandy, Clay).</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Label>
              <Input
                type="text"
                id="soilType"
                placeholder="e.g., Loamy"
                value={soilType}
                onChange={(e) => setSoilType(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="phLevel">
                pH Level
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <HelpCircle className="ml-2 h-4 w-4 inline-block align-top cursor-pointer" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Enter the pH level of the soil (e.g., 6.0-7.5).</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Label>
              <Input
                type="text"
                id="phLevel"
                placeholder="e.g., 6.5"
                value={phLevel}
                onChange={(e) => setPhLevel(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="organicMatter">
                Organic Matter
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <HelpCircle className="ml-2 h-4 w-4 inline-block align-top cursor-pointer" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Enter the organic matter content (e.g., ≥ 2%).</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Label>
              <Input
                type="text"
                id="organicMatter"
                placeholder="e.g., 2%"
                value={organicMatter}
                onChange={(e) => setOrganicMatter(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="temperature">
                Temperature
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <HelpCircle className="ml-2 h-4 w-4 inline-block align-top cursor-pointer" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Enter the average temperature (e.g., 20-25°C).</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Label>
              <Input
                type="number"
                id="temperature"
                placeholder="e.g., 22°C"
                value={temperature}
                onChange={(e) =>
                  setTemperature(
                    e.target.value === "" ? "" : Number(e.target.value)
                  )
                }
                required
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="rainfall">
                Rainfall
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <HelpCircle className="ml-2 h-4 w-4 inline-block align-top cursor-pointer" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Enter the average rainfall (e.g., 3-4 cm/week).</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Label>
              <Input
                type="number"
                id="rainfall"
                placeholder="e.g., 3.5 cm/week"
                value={rainfall}
                onChange={(e) =>
                  setRainfall(e.target.value === "" ? "" : Number(e.target.value))
                }
                required
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="humidity">
                Humidity
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <HelpCircle className="ml-2 h-4 w-4 inline-block align-top cursor-pointer" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Enter the average humidity (e.g., 50-70%).</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Label>
              <Input
                type="number"
                id="humidity"
                placeholder="e.g., 60%"
                value={humidity}
                onChange={(e) =>
                  setHumidity(e.target.value === "" ? "" : Number(e.target.value))
                }
                required
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="sunlight">
                Sunlight
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <HelpCircle className="ml-2 h-4 w-4 inline-block align-top cursor-pointer" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Enter the amount of sunlight (e.g., ≥ 6 hours/day).</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Label>
              <Input
                type="text"
                id="sunlight"
                placeholder="e.g., 8 hours/day"
                value={sunlight}
                onChange={(e) => setSunlight(e.target.value)}
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

