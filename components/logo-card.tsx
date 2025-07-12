import { useState } from "react";

import { SelectLogo } from "@/db/schema";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

interface LogoCardProps {
  logo: SelectLogo;
  onDownload: (imageUrl: string) => void;
}

const LogoCard = ({ logo, onDownload }: LogoCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Card className="group rounded-2xl shadow-lg bg-white/90 dark:bg-gray-900/80 border-2 border-blue-100 dark:border-purple-900">
      <CardContent className="w-full rounded-2xl">
        <div className="w-full rounded-t-2xl overflow-hidden aspect-square relative">
          {!imageLoaded && (
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 via-purple-100 to-pink-100 animate-pulse" />
          )}
          <img
            src={logo.image_url}
            alt={`${logo.username}'s logo`}
            className={`w-full h-full object-contain group-hover:scale-105 transition-all duration-700 ease-in-out
              ${imageLoaded ? "opacity-100" : "opacity-0"}`}
            onLoad={() => setImageLoaded(true)}
          />
        </div>
        <div
          className={`rounded-b-xl border-t p-4 transition-opacity duration-300 ${
            imageLoaded ? "opacity-100" : "opacity-40"
          }`}
        >
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-bold text-blue-700 dark:text-purple-300">{logo.username}</h3>
            <div className="flex gap-2 text-xs text-muted-foreground">
              <span>{new Date(logo.createdAt).toLocaleDateString()}</span>
            </div>
          </div>
          <div className="flex gap-2 my-2">
            <div
              className="w-6 h-6 border rounded-[8px]"
              style={{ backgroundColor: logo.primary_color }}
              title="Primary Color"
            />
            <div
              className="w-6 h-6 border rounded-[8px]"
              style={{ backgroundColor: logo.background_color }}
              title="Background Color"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LogoCard;
