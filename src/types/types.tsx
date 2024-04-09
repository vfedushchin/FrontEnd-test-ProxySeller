export interface IAddress {
    street: string;
    city: string;
    zipcode: string;
}

export interface IUser {
    id: number;
    name: string;
    email: string;
    address: IAddress;
}

export interface IPost {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export interface IAlbum {
    userId: number;
    id: number;
    title: string;
}

