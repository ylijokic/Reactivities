import { Profile } from "./profile";

export interface Activity {
    id: string;
    title: string;
    date: Date | null;
    description: string;
    category: string;
    venue: string;
    city: string;
    hostUsername?: string;
    isCancelled?: boolean;
    isGoing?: boolean;
    isHost?: boolean;
    host?: Profile;
    attendees?: Profile[];
}