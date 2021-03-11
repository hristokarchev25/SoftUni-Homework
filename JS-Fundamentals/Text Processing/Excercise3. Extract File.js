function solve(text) {
    let lastIndex = text.lastIndexOf("\\");
    let fileInfo = text.substring(lastIndex + 1);
    let lastDot = fileInfo.lastIndexOf(".");

    let fileName = fileInfo.substring(0, lastDot)
    let fileExtension = fileInfo.substring(lastDot + 1);

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${fileExtension}`);
}
solve('C:\\Internal\\training-internal\\Template.pptx')