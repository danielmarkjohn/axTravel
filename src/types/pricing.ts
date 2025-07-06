export interface ServiceProps {
    service: {
        id: string | number;
        title: string;
        description: string;
        features: string[];
        icon: string;
        isConsultation?: boolean;
        tiers?: {
            standard: string[];
            business: string[];
            pro: string[];
        };
    };
}