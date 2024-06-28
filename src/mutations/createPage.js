import Random from "@reactioncommerce/random";
import ReactionError from "@reactioncommerce/reaction-error";
// import { decodeProductOpaqueId, decodeShopOpaqueId } from "../xforms/id.js";

export default async function createPage(context, input) {
    const { collections, userId } = context;
    if (!userId) {
        throw new ReactionError("access-denied", "Please login first");
    }
    const { Pages } = collections;
    const { page_title, title, description, content } = input;

    const newPage = {
        _id: Random.id(),
        page_title,
        title,
        description,
        content,
        createdAt: new Date(),
        updatedAt: new Date(),
    };


    let newPageResponse = await Pages.insertOne(newPage);
    if (newPageResponse?.ops.length > 0) {
        return newPageResponse?.ops[0];
    }

}



