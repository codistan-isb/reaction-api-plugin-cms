
export default async function updatePageByTitle(parent, { input }, context, info) {
    let newUpdatePage = await context.mutations.updatePageByTitle(context, input);

    return newUpdatePage;
}
