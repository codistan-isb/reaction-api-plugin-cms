
export default async function createPage(parent, { input }, context, info) {

    let newCreatePage = await context.mutations.createPage(context, input);
    return newCreatePage;
}
