
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import React from "react";

type DialogWrapperProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
};

const DialogWrapper = ({
  open,
  onOpenChange,
  title,
  description,
  children,
  className,
}: DialogWrapperProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className={className}>
        <DialogTitle>{title}</DialogTitle>
        {description && <DialogDescription>{description}</DialogDescription>}
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default DialogWrapper;
