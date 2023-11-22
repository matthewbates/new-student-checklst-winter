// takes the title of each <li> element, splits it at each uppercase character, uppercases the first character of each title, and joins them
export const splitAndCapitalizeTitle = (title) => {
  const splitStr = title.split(/(?=[A-Z])/);
  const capitalizeStr = splitStr.map((str) => {
    return str.charAt(0).toLocaleUpperCase() + str.slice(1);
  });
  return capitalizeStr.join(" ");
};

export const TARGET = "_blank";
export const REL = "noopener noreferrer";
