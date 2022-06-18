// handles punctuation and spacing within server names to keep consistent with raider.io api
// str.replace(remove all punctuation).replace(replace spaces with dashes).lowercase

export const slugged = (str) => {
  return str
    .replace(/[!@#$%^&\*\(\)~`_\+=\[\]\{\};:"\.\,<>\/?'-]/g, "")
    .replace(/\s+/g, "-")
    .toLowerCase();
};
