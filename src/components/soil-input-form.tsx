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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ScrollArea } from "@/components/ui/scroll-area";

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
  method: string;
  frequency: string;
  amount: string;
  fertilizerType: string;
  fertilizerAmount: string;
  fertilizerFrequency: string;
  application: string;
  variety: string;
  growthStage: string;
  healthStatus: string;
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
  const [method, setMethod] = React.useState<string>("");
  const [frequency, setFrequency] = React.useState<string>("");
  const [amount, setAmount] = React.useState<string>("");
  const [fertilizerType, setFertilizerType] = React.useState<string>("");
  const [fertilizerAmount, setFertilizerAmount] = React.useState<string>("");
  const [fertilizerFrequency, setFertilizerFrequency] = React.useState<string>("");
  const [application, setApplication] = React.useState<string>("");
  const [variety, setVariety] = React.useState<string>("");
  const [growthStage, setGrowthStage] = React.useState<string>("");
  const [healthStatus, setHealthStatus] = React.useState<string>("");

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
      sunlight === "" ||
      method === "" ||
      frequency === "" ||
      amount === "" ||
      fertilizerType === "" ||
      fertilizerAmount === "" ||
      fertilizerFrequency === "" ||
      application === "" ||
      variety === "" ||
      growthStage === "" ||
      healthStatus === ""
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
      method: method,
      frequency: frequency,
      amount: amount,
      fertilizerType: fertilizerType,
      fertilizerAmount: fertilizerAmount,
      fertilizerFrequency: fertilizerFrequency,
      application: application,
      variety: variety,
      growthStage: growthStage,
      healthStatus: healthStatus,
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
        <ScrollArea className="h-[500px] w-full rounded-md border p-4">
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
              <Label htmlFor="soilType">Soil Type</Label>
              <Select onValueChange={setSoilType} defaultValue={soilType}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select soil type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Loamy">Loamy</SelectItem>
                  <SelectItem value="Sandy">Sandy</SelectItem>
                  <SelectItem value="Clay">Clay</SelectItem>
                  <SelectItem value="Silty">Silty</SelectItem>
                  <SelectItem value="Peaty">Peaty</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="phLevel">pH Level</Label>
              <Select onValueChange={setPhLevel} defaultValue={phLevel}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select pH level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Acidic">Acidic</SelectItem>
                  <SelectItem value="Neutral">Neutral</SelectItem>
                  <SelectItem value="Alkaline">Alkaline</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="organicMatter">Organic Matter</Label>
              <Select onValueChange={setOrganicMatter} defaultValue={organicMatter}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select organic matter content" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Low">Low</SelectItem>
                  <SelectItem value="Medium">Medium</SelectItem>
                  <SelectItem value="High">High</SelectItem>
                </SelectContent>
              </Select>
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
              <Label htmlFor="sunlight">Sunlight</Label>
              <Select onValueChange={setSunlight} defaultValue={sunlight}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select sunlight amount" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Low">Low</SelectItem>
                  <SelectItem value="Medium">Medium</SelectItem>
                  <SelectItem value="High">High</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="method">Method</Label>
              <Select onValueChange={setMethod} defaultValue={method}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select method" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Drip">Drip</SelectItem>
                  <SelectItem value="Flood">Flood</SelectItem>
                  <SelectItem value="Sprinkler">Sprinkler</SelectItem>
                </SelectContent>
              </Select>
            </div>
             <div className="flex flex-col space-y-1.5">
              <Label htmlFor="frequency">Frequency</Label>
              <Select onValueChange={setFrequency} defaultValue={frequency}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select frequency" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Daily">Daily</SelectItem>
                  <SelectItem value="2-3 times/week">2-3 times/week</SelectItem>
                  <SelectItem value="Weekly">Weekly</SelectItem>
                </SelectContent>
              </Select>
            </div>
             <div className="flex flex-col space-y-1.5">
              <Label htmlFor="amount">Amount</Label>
              <Select onValueChange={setAmount} defaultValue={amount}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select amount" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Low">Low</SelectItem>
                  <SelectItem value="Medium">Medium</SelectItem>
                  <SelectItem value="High">High</SelectItem>
                </SelectContent>
              </Select>
            </div>
             <div className="flex flex-col space-y-1.5">
              <Label htmlFor="fertilizerType">Fertilizer Type</Label>
              <Select onValueChange={setFertilizerType} defaultValue={fertilizerType}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select fertilizer type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Urea">Urea</SelectItem>
                  <SelectItem value="NPK">NPK</SelectItem>
                  <SelectItem value="Organic">Organic</SelectItem>
                </SelectContent>
              </Select>
            </div>
             <div className="flex flex-col space-y-1.5">
              <Label htmlFor="fertilizerAmount">Fertilizer Amount</Label>
              <Select onValueChange={setFertilizerAmount} defaultValue={fertilizerAmount}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select fertilizer amount" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Low">Low</SelectItem>
                  <SelectItem value="Medium">Medium</SelectItem>
                  <SelectItem value="High">High</SelectItem>
                </SelectContent>
              </Select>
            </div>
             <div className="flex flex-col space-y-1.5">
              <Label htmlFor="fertilizerFrequency">Fertilizer Frequency</Label>
              <Select onValueChange={setFertilizerFrequency} defaultValue={fertilizerFrequency}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select fertilizer frequency" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Weekly">Weekly</SelectItem>
                  <SelectItem value="Monthly">Monthly</SelectItem>
                  <SelectItem value="Bi-monthly">Bi-monthly</SelectItem>
                </SelectContent>
              </Select>
            </div>
             <div className="flex flex-col space-y-1.5">
              <Label htmlFor="application">Application</Label>
              <Select onValueChange={setApplication} defaultValue={application}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select application method" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Foliar">Foliar</SelectItem>
                  <SelectItem value="Soil">Soil</SelectItem>
                  <SelectItem value="Fertigation">Fertigation</SelectItem>
                </SelectContent>
              </Select>
            </div>
             <div className="flex flex-col space-y-1.5">
              <Label htmlFor="variety">Variety</Label>
              <Select onValueChange={setVariety} defaultValue={variety}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select variety" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="High Yield">High Yield</SelectItem>
                  <SelectItem value="Disease Resistant">Disease Resistant</SelectItem>
                  <SelectItem value="Drought Tolerant">Drought Tolerant</SelectItem>
                </SelectContent>
              </Select>
            </div>
             <div className="flex flex-col space-y-1.5">
              <Label htmlFor="growthStage">Growth Stage</Label>
              <Select onValueChange={setGrowthStage} defaultValue={growthStage}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select growth stage" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Seedling">Seedling</SelectItem>
                  <SelectItem value="Vegetative">Vegetative</SelectItem>
                  <SelectItem value="Flowering">Flowering</SelectItem>
                  <SelectItem value="Harvest">Harvest</SelectItem>
                </SelectContent>
              </Select>
            </div>
             <div className="flex flex-col space-y-1.5">
              <Label htmlFor="healthStatus">Health Status</Label>
              <Select onValueChange={setHealthStatus} defaultValue={healthStatus}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select health status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Healthy">Healthy</SelectItem>
                  <SelectItem value="Unhealthy">Unhealthy</SelectItem>
                  <SelectItem value="Diseased">Diseased</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          </ScrollArea>
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

