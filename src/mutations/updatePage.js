import Random from "@reactioncommerce/random";
import ReactionError from "@reactioncommerce/reaction-error";

export default async function updatePageByTitle(context, input) {
    const { collections, userId } = context;
    if (!userId) {
        throw new ReactionError("access-denied", "Please login first");
    }
    const { Pages } = collections;
    const { page_title, content } = input;

    const updatedPage = await Pages.findOneAndUpdate(
        { page_title },
        { $set: { content, updatedAt: new Date() } },
        { returnOriginal: false }
    );

    if (!updatedPage.value) {
        throw new ReactionError("not-found", "Page not found");
    }

    return {
        status: true,
        message: "Page updated successfully",
        updatedPage: updatedPage.value
    };
}
