
export default async function getPageByTitle(context, args) {
    let { page_title } = args;

    const {
        collections: { Pages },
    } = context;

    let responsePage = await Pages.findOne({
        page_title
    });

    if (responsePage) {
        return {
            status: true,
            message: "Successfully",
            getPageTitle: {
                ...responsePage
            }
        };
    } else {
        return {
            status: false,
            message: "Not Found"
        };

    }

}
