import { createRequire } from "module";
import mutations from "./mutations/index.js";
import queries from "./queries/index.js";
import schemas from "./schemas/index.js";
import resolvers from "./resolvers/index.js";

const require = createRequire(import.meta.url);
const pkg = require("../package.json");

/**
 * @summary Import and call this function to add this plugin to your API.
 * @param {Object} app The ReactionAPI instance
 * @returns {undefined}
 */
export default async function register(app) {
  console.log("---------API_PLUGIN_CMS------------");
  await app.registerPlugin({
    label: pkg.label,
    name: pkg.name,
    version: pkg.version,
    collections: {
      Pages: {
        name: "Pages",
        updatedAt: { type: Date, default: Date.now },
        createdAt: { type: Date, default: Date.now }
      }
    },
    graphQL: {
      schemas,
      resolvers
    },
    mutations,
    queries,
  });
}
