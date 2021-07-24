interface IContact {
    socialMedia: {
        media: 'Facebook' | "Instagram" | "Twitter";
        user: String;
    };
    telephone: String[];
}
interface ILocation {
    type: "Point";
    coordinates: Number[];
}
interface IRating {
    user: String;
    rate: Number;
}
interface IWorkDays {
    interval: String | String[];
    from: String;
    to: String;
}
export interface IPlace {
    name: String;
    category: String[];
    contact: IContact;
    description: String;
    gallery: String[];
    ubication: String;
    location: ILocation;
    rating: IRating[];
    schedule: IWorkDays[];
}

