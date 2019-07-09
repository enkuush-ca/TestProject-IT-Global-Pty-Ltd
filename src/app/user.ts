export class User {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    address: Address;
    website: string;
    company: Company;

}

export class Address {
    street: number;
    suite: string;
    city: string;
    email: string;
    zipcode: string;
    geo: Geo;
}

export class Company {
    name: number;
    catchPhrase: string;
    bs: string;
}

export class Geo {
    lat: number;
    lng: string;
}

