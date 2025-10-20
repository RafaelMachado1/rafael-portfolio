// src/components/icons/HardhatIcon.tsx
interface IconProps { className?: string; }
export function HardhatIcon({ className }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className={className} fill="currentColor">
      <path d="M128 0L36.36 55.77v144.46L128 256l91.64-55.77V55.77L128 0zm71.65 187.89l-71.64 43.68-71.64-43.68V68.11l71.64-43.68 71.64 43.68v119.78z"/>
      <path d="M128 72.07l-43.23 25.13v50.26l43.23 25.13 43.23-25.13v-50.26L128 72.07zm31.25 66.4l-31.25 18.15-31.25-18.15v-36.3l31.25-18.15 31.25 18.15v36.3z"/>
    </svg>
  );
}