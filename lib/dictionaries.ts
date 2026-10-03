import { locale } from "next/root-params";
import { notFound } from "next/navigation";
import pt from "@/messages/pt.json";
import en from "@/messages/en.json";

const dictionaries = { pt, en };

export async function getDictionary() {
 
const current = await locale();

if (current === "pt" || current === "en"){
    return dictionaries[current];
}
notFound();
}