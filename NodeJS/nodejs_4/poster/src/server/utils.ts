import { error } from "console";
import { PostType } from "./types";
import fs from "fs";
import path from "path";

export async function getAllPosts(): Promise<PostType[]> {
    return new Promise(async (resolve, reject) => {
        try {
            const posts: PostType[] = (await import("./data/posts.json")).default;

            resolve(posts);
        } catch (error) {
            reject(error);
        }
    });
}

export async function deletePost(id: number): Promise<boolean> {
    return new Promise(async (resolve, reject) => {
        try {
            fs.writeFile("./data/posts.json", JSON.stringify((await getAllPosts()).filter(post => post.id !== id)), (error) => {
                if (error) {
                    reject(error);
                }
                resolve(true);
            });
        } catch (error) {
            reject(error);
        }
    });
}

export async function addNewPost(post: PostType): Promise<boolean> {
    return new Promise(async (resolve, reject) => {
        try {
            const posts: PostType[] = await getAllPosts();
            posts.push(post);

            fs.writeFile("./data/posts.json", JSON.stringify(posts), (error) => {
                if (error) {
                    reject(error);
                }
                resolve(true);
            });
        } catch (error) {
            reject(error);
        }
    });
}
