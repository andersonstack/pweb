"use server";

import { HomeService } from "../home/HomeService";

export async function searchAction(formData: FormData) {
    const searchKey = formData.get("titleSearchKey") as string;
    const movies = await HomeService(1, searchKey);
    return movies;
}