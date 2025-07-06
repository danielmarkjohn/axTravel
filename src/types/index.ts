export interface StatItem {
    value: number;
    label: string;
    sublabel: string;
    suffix?: string;
    prefix?: string;
    color: string;
}

export interface MetaProps {
  title: string;
  description: string;
  keywords?: string;
}