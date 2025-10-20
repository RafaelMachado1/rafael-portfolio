// src/components/icons/FoundryIcon.tsx
interface IconProps { className?: string; }
export function FoundryIcon({ className }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className={className} fill="currentColor">
      <path d="M128 0L36.36 55.77v144.46L128 256l91.64-55.77V55.77L128 0zm71.64 187.89l-71.64 43.68-71.64-43.68V68.11l71.64-43.68 71.64 43.68v119.78z"/>
      <path d="M103.85 106.32H84.1v65.4h19.75v-24.8H128v-15.8h-24.15v-24.8zM171.9 171.72h-19.75v-44.6h-24.15v-15.8h43.9v60.4z"/>
    </svg>
  );
}