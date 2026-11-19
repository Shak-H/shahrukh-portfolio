import type { ComponentPropsWithRef } from "react";

const baseClass =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-md border py-2 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300";

const variantClasses = {
  primary: "border-transparent bg-cyan-300 text-slate-950 hover:bg-cyan-200",
  secondary:
    "border-slate-600 text-slate-100 hover:border-cyan-300 hover:bg-slate-800 hover:text-cyan-300",
};

const sizeClasses = {
  default: "px-4",
  compact: "px-2",
};

type ButtonVariant = keyof typeof variantClasses;
type ButtonSize = keyof typeof sizeClasses;

export function buttonClassName(
  variant: ButtonVariant = "primary",
  size: ButtonSize = "default",
) {
  return `${baseClass} ${variantClasses[variant]} ${sizeClasses[size]}`;
}

type ButtonProps = ComponentPropsWithRef<"button"> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

export default function Button({
  variant = "primary",
  size = "default",
  type = "button",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      type={type}
      className={`${buttonClassName(variant, size)} cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
    />
  );
}
