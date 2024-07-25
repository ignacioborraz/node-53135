import __dirname from "../../utils.js";

const options = {
  definition: {
    openapi: "3.1.0",
    info: {
      title: "ADOPT ME API",
      description: "Documentation of Adopt me API",
    },
  },
  apis: [__dirname + "/src/docs/*.yaml"],
};

export default options;
