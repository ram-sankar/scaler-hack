export interface ExploreEntity {
  id: number;
  title: string;
  day: number;
  cost: number;
  night: number;
  image: any;
  views: number;
  likes: number;
  ownerImage: any;
  ownerName: string;
}

export interface InclusionEntity {
  name: string;
  iconType: string;
  iconName: string;
}

export interface ItineraryEntity {
  day: number;
  heading: string;
  places: PlacesEntity[];
}

export interface PlacesEntity {
  title: string;
}

export interface userPreferenceEntity {
  isLiked: boolean;
  isBookMarked: boolean;
}