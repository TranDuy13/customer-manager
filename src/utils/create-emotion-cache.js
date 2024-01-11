import createCache from "@emotion/cache";

export const createEmotionCache = () => {
    return createCache({ key: "css" });
};

export function createFormData(data, formData = new FormData(), parentKey) {
    switch (true) {
        case data === undefined:
        case data === null:
            break;
        case typeof data === "object" && !Array.isArray(data) && !(data instanceof Date) && !(data instanceof File):
            Object.keys(data).forEach((key) => {
                formData = createFormData(data[key], formData, parentKey ? `${parentKey}` : key);
            });
            break;
        case Array.isArray(data) && !(data instanceof File):
            if (data.length > 0) {
                for (let i = 0; i < data.length; i++) {
                    if (data[i] instanceof File) {
                        formData.append(parentKey, data[i]);
                    } else formData = createFormData(data[i], formData, parentKey ? `${parentKey}[${i}]` : `${i}`);
                }
            } else {
                formData.append(`${parentKey}[${0}]`, "");
            }
            break;
        case Number(data) === data && data % 1 !== 0:
            formData.append(parentKey, data.toString().replace(".", ","));
            break;
        case data instanceof File:
            debugger
            formData.append('files', data);
            break;
        default:
            formData.append(parentKey, data);
            break;
    }
    return formData;
}
export function base64ToFile(base64String, filename) {
    // Split the base64 string to get MIME type and base64 data
    const parts = base64String.split(';base64,');
    const mimeType = parts[0].split(':')[1];
    const base64Data = parts[1];

    // Convert base64 to raw binary data held in a string
    const byteString = window.atob(base64Data);

    // Write the bytes of the string to an ArrayBuffer
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const uintArray = new Uint8Array(arrayBuffer);
    for (let i = 0; i < byteString.length; i++) {
        uintArray[i] = byteString.charCodeAt(i);
    }

    // Create a blob from the ArrayBuffer
    const blob = new Blob([uintArray], { type: mimeType });

    // Create a file from the blob
    const file = new File([blob], filename, { type: mimeType });

    return file;
}
