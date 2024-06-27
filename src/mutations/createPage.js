import Random from "@reactioncommerce/random";
import ReactionError from "@reactioncommerce/reaction-error";
// import { decodeProductOpaqueId, decodeShopOpaqueId } from "../xforms/id.js";

export default async function createPage(context, input) {
    const { collections, userId } = context;
    if (!userId) {
        throw new ReactionError("access-denied", "Please login first");
    }
    const { Pages } = collections;
    const { page_title, content } = input;

    const newPage = {
        _id: Random.id(),
        page_title,
        content,
        createdAt: new Date(),
        updatedAt: new Date(),
    };


    let newPageResponse = await Pages.insertOne(newPage);
    if (newPageResponse?.ops.length > 0) {
        return newPageResponse?.ops[0];
    }

}




// export default async function createRFQProduct(context, input) {
//     console.log("input ", input);
//     const { collections, userId } = context;
//     if (!userId) {
//         throw new ReactionError("access-denied", "Please login first");
//     }

//     const { RFQProduct } = collections;
//     const { status, variantId, prodId, customization, modelNumber, shopId, price } = input;
//     const decodeProdId = decodeProductOpaqueId(prodId);
//     const decodeShopId = decodeShopOpaqueId(shopId);

//     const newRFQ = {
//         _id: Random.id(),
//         userId,
//         // prodId,
//         prodId: decodeProdId,
//         shopId: decodeShopId,
//         price,
//         variantId,
//         customization,
//         status,
//         modelNumber,
//         createdAt: new Date(),
//         updatedAt: new Date(),
//     };
//     //   console.log("newFaq", newFaq);
//     let newFaqResponse = await RFQProduct.insertOne(newRFQ);
//     if (newFaqResponse?.ops.length > 0) {
//         return newFaqResponse?.ops[0];
//     }
// }

