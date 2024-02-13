export interface APIResults {
    count: number;
    next: string;
    previous: null;
    starships: Starship[];
   
  }
  
  export interface Starship {
    name: string;
    model: string;
    manufacturer: string;
    cost_in_credits: string;
    length: string;
    max_atmosphering_speed: string;
    crew: string;
    passengers: string;
    cargo_capacity: string;
    consumables: string;
    hyperdrive_rating: string;
    MGLT: string;
    starship_class: string;
    created: Date;
    edited: Date;
    url: string;
  }
  
  
 
  