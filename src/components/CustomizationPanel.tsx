
import React from 'react';
import { useSequentialAnimation } from '../utils/animations';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { HelpCircle } from 'lucide-react';

interface CustomizationPanelProps {
  width: string;
  height: string;
  hideOutline: boolean;
  onWidthChange: (width: string) => void;
  onHeightChange: (height: string) => void;
  onHideOutlineChange: (hide: boolean) => void;
}

const CustomizationPanel: React.FC<CustomizationPanelProps> = ({ 
  width, 
  height, 
  hideOutline,
  onWidthChange,
  onHeightChange,
  onHideOutlineChange
}) => {
  const { getItemProps } = useSequentialAnimation(3, 200, 80);
  
  return (
    <div className="subtle-card p-6 space-y-6 bg-white/80 backdrop-blur-sm border border-gray-100 rounded-xl shadow-sm">
      <div className="space-y-1.5" {...getItemProps(0)}>
        <h3 className="text-lg font-medium">Customization</h3>
        <p className="text-sm text-gray-500">Adjust the appearance of your embedded Notion page</p>
      </div>
      
      <div className="space-y-4" {...getItemProps(1)}>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <div className="flex items-center">
              <Label htmlFor="width" className="text-sm">Width</Label>
              <Tooltip>
                <TooltipTrigger asChild>
                  <HelpCircle className="h-4 w-4 text-gray-400 ml-1.5 cursor-help" />
                </TooltipTrigger>
                <TooltipContent>
                  <p className="w-60">
                    Set width in pixels (e.g., 800px) or percentage (e.g., 100%)
                  </p>
                </TooltipContent>
              </Tooltip>
            </div>
            <Input
              id="width"
              type="text"
              value={width}
              onChange={(e) => onWidthChange(e.target.value)}
              placeholder="e.g., 100%, 800px"
              className="subtle-input"
            />
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center">
              <Label htmlFor="height" className="text-sm">Height</Label>
              <Tooltip>
                <TooltipTrigger asChild>
                  <HelpCircle className="h-4 w-4 text-gray-400 ml-1.5 cursor-help" />
                </TooltipTrigger>
                <TooltipContent>
                  <p className="w-60">
                    Set height in pixels (e.g., 500px) or viewport height (e.g., 80vh)
                  </p>
                </TooltipContent>
              </Tooltip>
            </div>
            <Input
              id="height"
              type="text"
              value={height}
              onChange={(e) => onHeightChange(e.target.value)}
              placeholder="e.g., 600px, 80vh"
              className="subtle-input"
            />
          </div>
        </div>
      </div>
      
      <div className="flex items-center justify-between" {...getItemProps(2)}>
        <div>
          <div className="flex items-center">
            <Label htmlFor="hideOutline" className="text-sm">Hide border</Label>
            <Tooltip>
              <TooltipTrigger asChild>
                <HelpCircle className="h-4 w-4 text-gray-400 ml-1.5 cursor-help" />
              </TooltipTrigger>
              <TooltipContent>
                <p className="w-60">
                  Remove the border around the embedded Notion page for a cleaner look
                </p>
              </TooltipContent>
            </Tooltip>
          </div>
          <p className="text-xs text-gray-500">Remove the border around the embedded page</p>
        </div>
        <Switch
          id="hideOutline"
          checked={hideOutline}
          onCheckedChange={onHideOutlineChange}
          className="data-[state=checked]:bg-primary"
        />
      </div>
    </div>
  );
};

export default CustomizationPanel;
