import { LoyaltyUser } from './enum'

export default interface Review {
    name: string;
    stars: number;
    loyaltyUser: LoyaltyUser;
    date: string;
}