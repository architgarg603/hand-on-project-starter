const { removeBackgroundFromImageFile } = require("remove.bg");

const localFile = "./local/file/name.jpg";
const outputFile = `${__dirname}/out/img-removed-from-file.png`;

removeBackgroundFromImageFile({
  path: localFile,
  apiKey: "4PP2znowi679dTKpNstBgdf2",
  size: "regular",
  type: "auto",
  scale: "50%",
  outputFile,
})
  .then((outputFile) => {
    console.log(`File saved to ${outputFile}`);
  })
  .catch((errors) => {
    console.log(JSON.stringify(errors));
  });
