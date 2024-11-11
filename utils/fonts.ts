import localFont from "next/font/local";

const MazzardL_Light = localFont({ src: "../fonts/MazzardL-Light.ttf" });
const MazzardL_Medium = localFont({ src: "../fonts/MazzardL-Medium.ttf" });
const MazzardM_Light = localFont({ src: "../fonts/MazzardM-Light.ttf" });
const MazzardM_Medium = localFont({ src: "../fonts/MazzardM-Medium.ttf" });
const MazzardM_Regular = localFont({ src: "../fonts/MazzardM-Regular.ttf" });
const MazzardM_SemiBold = localFont({ src: "../fonts/MazzardM-SemiBold.ttf" });

const KlarheitMedium = localFont({
  src: "../fonts/ESKlarheitGrotesk-Md-TRIAL.otf",
});

const KlarheitLight = localFont({
  src: "../fonts/ESKlarheitGrotesk-Lt-TRIAL.otf",
});

const KlarheitExtraLight = localFont({
  src: "../fonts/ESKlarheitGrotesk-Xlt-TRIAL.otf",
});

export {
  MazzardL_Light,
  MazzardL_Medium,
  MazzardM_Light,
  MazzardM_Medium,
  KlarheitMedium,
  KlarheitLight,
  KlarheitExtraLight,
  MazzardM_Regular,
  MazzardM_SemiBold,
};
