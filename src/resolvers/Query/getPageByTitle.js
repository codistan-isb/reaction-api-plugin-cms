

export default async function getPageByTitle(parent, args, context, info) {


    let getPageByTitleResponse = await context.queries.getPageByTitle(context, args);
    return getPageByTitleResponse;
}
