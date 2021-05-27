export interface PerformanceApiResponse {
  performances: {
    performance: EventPerformanceDto;
  }[];
  lapTimes: {
    id: number;
    distance: number;
    humanDistance: string;
    time: number;
    humanTime: string;
    riegel: string;
  }[];
}

export interface EventPerformanceDto {
  eventCategory: string;
  eventSlug: string;
  points: number | null;
  humanTime: string;
  gender: string;
}

export interface RecordsDto {
  id: string;
  time: string;
  athleteName: string;
  halfSplit: string;
  distance: string;
  description: string;
}
