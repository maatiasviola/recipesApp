import { Dimensions } from "react-native";
import icons from "./icons";
const { width, height } = Dimensions.get("window");

export const COLORS = {
    darkGreen: "#229879",
    darkLime: "#1A8871",
    lightLime: "#BBD6C5",
    lime: "#2AD699", 
    dark80: 'rgba(13, 15, 35, 0.8)',
    error: 'rgba(246, 86, 93, 1)',
    light: 'rgba(255, 255, 255, 1)',
    support3: 'rgba(0, 210, 224, 1)',
    primary: "#42C6A5",
    primary2: "#FBB344",
    primary3: "#33354E",
    lightGreen: "#E7F9EF",
    lightGreen1: "#8EbCA0",
    gray10: "#E5E5E5",
    gray20: "#CCCCCC",
    gray30: "#A1A1A1",
    gray40: "#999999",
    gray50: "#7F7F7F",
    gray60: "#666666",
    gray70: "#4C4C4C",
    gray80: "#333333",
    gray85: "#242526",
    gray90: "#191919",
    white: "#fff",
    white2: '#F9F9F9',
    black: "#020202",
    blue: "#4096FE",
    gray: "#777777",
    gray2: '#F8F8F8',
    lightGray: "#F5F6FB",
    lightGray2: '#757575',
    additionalColor11: "#F0FFFB",

    transparentBlack1: 'rgba(2, 2, 2, 0.1)',
    transparentBlack3: 'rgba(2, 2, 2, 0.3)',
    transparentBlack5: 'rgba(2, 2, 2, 0.5)',
    transparentBlack7: 'rgba(2, 2, 2, 0.7)',
    transparentBlack9: 'rgba(2, 2, 2, 0.9)',

    transparentGray: 'rgba(77,77,77, 0.8)',
    transparentDarkGray: 'rgba(20,20,20, 0.9)',

    transparent: 'transparent',
};

export const SIZES = {
    // global sizes
    base: 8,
    font: 14,
    radius: 12,
    padding: 24,

    // font sizes
    largeTitle: 40,
    h1: 30,
    h2: 22,
    h3: 16,
    h4: 14,
    body1: 30,
    body2: 22,
    body3: 16,
    body4: 14,
    body5: 12,

    // app dimensions
    width,
    height
};
export const FONTS = {
    largeTitle: { fontFamily: "RobotoBlack", fontSize: SIZES.largeTitle },
    h1: { fontFamily: "RobotoBlack", fontSize: SIZES.h1, lineHeight: 36 },
    h2: { fontFamily: "RobotoBold", fontSize: SIZES.h2, lineHeight: 30 },
    h3: { fontFamily: "RobotoBold", fontSize: SIZES.h3, lineHeight: 22 },
    h4: { fontFamily: "RobotoBold", fontSize: SIZES.h4, lineHeight: 22 },
    body1: { fontFamily: "RobotoRegular", fontSize: SIZES.body1, lineHeight: 36 },
    body2: { fontFamily: "RobotoRegular", fontSize: SIZES.body2, lineHeight: 30 },
    body3: { fontFamily: "RobotoRegular", fontSize: SIZES.body3, lineHeight: 22 },
    body4: { fontFamily: "RobotoRegular", fontSize: SIZES.body4, lineHeight: 22 },
    body5: { fontFamily: "RobotoRegular", fontSize: SIZES.body5, lineHeight: 22 },
};

export const VARIANTS = {
    //red
    red: { 
        mainColor: "#FDEDED",
        secondaryColor: "#F16360", 
        symbol: "error",
        title: "Error",
        text: "The action was not carried out succesfully please try again.",
    },
    //blue
    blue: {
      mainColor: "#E5F6FD",
      secondaryColor: "#1AB1F5",
      symbol: "info",
      icon:icons.errorIcon,
      title: "Information",
      text: "Our newest module can be bought, or you can always just use our 30 day trial.",
    },
    //green
    green: {
      mainColor: "#EDFEEE",
      secondaryColor: "#5CB660",
      symbol: "check_circle",
      title: "Success",
      text: "Saving of your newest settings are successfuly carried out. ",
    },
    //yellow
    yellow: {
      mainColor: "#FFF4E5",
      secondaryColor: "#FFA117",
      symbol: "warning",
      icon:icons.warningIcon,
      title: "Warning",
      text: "Your trial is ending soon, please click here to renew it.",
    },
    //pink
    pink: {
      mainColor: "#FFC0CB",
      secondaryColor: "#FF69B4",
      symbol: "pets",
      title: "Check it out",
      text: "Fun and cute pictures of dogs are to be released daily from now on!",
    },
}

const appTheme = { COLORS, SIZES, FONTS,VARIANTS };

export default appTheme;