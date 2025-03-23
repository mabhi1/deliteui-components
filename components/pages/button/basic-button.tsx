"use client";

import { Button } from "@/components/ui/button";
import PreviewContainer from "@/components/layout/preview-container";
import CodeContainer from "@/components/layout/code-container";
import { ClipboardCheck } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";

interface BasicButtonProps {
  previewOnly?: boolean;
}

const basicPreview = <Button Icon={ClipboardCheck}>Click me</Button>;
const loadingPreview = <Button loading>Please Wait</Button>;

const sourceCode = `import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { ForwardRefExoticComponent } from "react";
import { RefAttributes } from "react";
import { Loader2, LucideProps } from "lucide-react";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  loading?: boolean;
  asChild?: boolean;
  Icon?: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, Icon, asChild = false, loading = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    if (loading)
      return (
        <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} disabled>
          {Icon ? <Icon /> : <Loader2 className="animate-spin" />}
          {props.children || "Loading..."}
        </Comp>
      );
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props}>
        {Icon && <Icon />}
        {props.children}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
`;

const componentCode = `import { Button } from "@/components/ui/button";

<Button Icon={ClipboardCheck}>Click me</Button>

// loading button
<Button loading>Please Wait</Button>
`;

function BasicButton({ previewOnly = false }: BasicButtonProps) {
  const [showLoadingPreview, setShowLoadingPreview] = useState(false);

  return (
    <div className="space-y-8">
      {!showLoadingPreview ? (
        <PreviewContainer
          title={previewOnly ? "Basic button" : undefined}
          href="/components/button/basic-button"
          desktopPreview={basicPreview}
          mobilePreview={basicPreview}
          tabletPreview={basicPreview}
        />
      ) : (
        <PreviewContainer
          title={previewOnly ? "Basic button" : undefined}
          href="/components/button/basic-button"
          desktopPreview={loadingPreview}
          mobilePreview={loadingPreview}
          tabletPreview={loadingPreview}
        />
      )}
      <div className="flex items-center space-x-2">
        <Checkbox id="preview" onCheckedChange={() => setShowLoadingPreview((loadingPreview) => !loadingPreview)} />
        <label
          htmlFor="preview"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Show loading preview
        </label>
      </div>
      {!previewOnly && (
        <CodeContainer
          source={[{ code: sourceCode, path: "/components/ui/button.tsx", filename: "button.tsx" }]}
          component={{ code: componentCode, filename: "page.tsx" }}
        />
      )}
    </div>
  );
}
export default BasicButton;
