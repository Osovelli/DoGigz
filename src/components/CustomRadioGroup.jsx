import * as React from "react"
import { RadioGroup } from "@/components/ui/radio-group"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

const CustomRadioGroup = React.forwardRef(({ className, items, value, onValueChange, ...props }, ref) => {
  return (
    <RadioGroup
      ref={ref}
      className={cn("flex flex-col gap-4", className)}
      value={value}
      onValueChange={onValueChange}
      {...props}
    >
      {items.map((item) => (
        <div
          key={item.value}
          className={cn(
            "relative rounded-lg p-5 cursor-pointer transition-colors",
            value === item.value ? "bg-slate-600 border-none" : "bg-gray-100 border-none",
          )}
          onClick={() => onValueChange(item.value)}
        >
          {value === item.value && (
            <div className="absolute top-4 right-4 bg-[#22c55e] text-white text-xs rounded-full px-2 py-0.5 flex items-center gap-1">
              <Check size={12} />
              <span>Selected</span>
            </div>
          )}
          <div className="space-y-1">
            <p className={cn("font-medium text-lg", value === item.value ? "text-basic" : "text-gray-800")}>
              {item.title}
            </p>
            <p className={cn("text-sm", value === item.value ? "text-gray-300" : "text-gray-600")}>
              {item.description}
            </p>
          </div>
          <input
            type="radio"
            className="sr-only"
            checked={value === item.value}
            onChange={() => onValueChange(item.value)}
          />
        </div>
      ))}
    </RadioGroup>
  )
})

CustomRadioGroup.displayName = "CustomRadioGroup"

export default CustomRadioGroup
