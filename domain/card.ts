import { TagType } from "./tag";

export type CardData = {
    id: number,
    title: String,
    state: String,
    description?: String,
    tags?: TagType[],
    tasks?: {title: String, is_complete: boolean}[],
    members?: {name: String, avatar_url: String}[] 
}