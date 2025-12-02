"use client";

import { TrendingUp } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A linear line chart";

type ChartData = Array<{
  month: string;
  product_value: number;
}>;

type chartConfig = {
  product_value: {
    label: string;
    color: string;
  };
};

interface IChartLineLinear {
  title: string;
  description: string;
  emphasis?: string;
  chart_config: chartConfig;
  chart_data: ChartData;
  text_footer: string;
}

export function ChartLineLinear({
  title,
  description,
  emphasis,
  chart_config,
  chart_data,
  text_footer,
}: IChartLineLinear) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chart_config}>
          <LineChart
            accessibilityLayer
            data={chart_data}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              dataKey="product_value"
              type="linear"
              stroke={chart_config.product_value.color}
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        {emphasis && (
          <div className="flex gap-2 leading-none font-medium">
            {emphasis} <TrendingUp className="h-4 w-4" />
          </div>
        )}
        <div className="text-muted-foreground leading-none">{text_footer}</div>
      </CardFooter>
    </Card>
  );
}
