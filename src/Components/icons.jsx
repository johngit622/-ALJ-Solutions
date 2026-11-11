import {
  ArrowRight,
  Cpu,
  Cloud,
  Code2,
  Database,
  Monitor,
  Network,
  ShieldCheck,
  Headset,
} from "lucide-react";

const iconProps = { size: 20, strokeWidth: 1.8, "aria-hidden": true };

export const IconArrow = () => <ArrowRight {...iconProps} size={15} />;
export const IconChip = () => <Cpu {...iconProps} />;
export const IconCloud = () => <Cloud {...iconProps} />;
export const IconCode = () => <Code2 {...iconProps} />;
export const IconData = () => <Database {...iconProps} />;
export const IconDevice = () => <Monitor {...iconProps} />;
export const IconNetwork = () => <Network {...iconProps} />;
export const IconShield = () => <ShieldCheck {...iconProps} />;
export const IconSupport = () => <Headset {...iconProps} />;
