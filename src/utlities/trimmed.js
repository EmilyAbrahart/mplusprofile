// removes leading and trailing spaces

export const trimmed = (str) => {
    return str.replace(/^[ \t]+|[ \t]+$/,"");
};