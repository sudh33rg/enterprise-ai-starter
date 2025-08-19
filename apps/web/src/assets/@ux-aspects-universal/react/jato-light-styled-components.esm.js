const jatoLight = {
  jatoBorderWeight1: props => {
    return `${resolveValue(props, props.theme.jatoMeasure1)}`;
  },
  jatoBorderWeight2: props => {
    return `${resolveValue(props, props.theme.jatoMeasure2)}`;
  },
  jatoBrandLogo: props => {
    return `${resolveValue(props, props.theme.jatoColorElectric1770)}`;
  },
  jatoBreakpointLrgMinWidth: props => {
    return `${resolveValue(props, props.theme.jatoMeasure1024)}`;
  },
  jatoBreakpointMedMaxWidth: props => {
    return `${resolveValue(props, props.theme.jatoMeasure1023)}`;
  },
  jatoBreakpointMedMinWidth: props => {
    return `${resolveValue(props, props.theme.jatoMeasure768)}`;
  },
  jatoBreakpointSmMaxWidth: props => {
    return `${resolveValue(props, props.theme.jatoMeasure767)}`;
  },
  jatoBreakpointSmMinWidth: props => {
    return `${resolveValue(props, props.theme.jatoMeasure320)}`;
  },
  jatoChipsMultivalueMaxWidth: props => {
    return `${resolveValue(props, props.theme.jatoMeasure320)}`;
  },
  jatoChipsSimpleMaxWidth: props => {
    return `${resolveValue(props, props.theme.jatoMeasure240)}`;
  },
  jatoCoachmarksBackgroundGradientStart: props => {
    return `${resolveValue(props, props.theme.jatoColorGreen2360)}`;
  },
  jatoCoachmarksBackgroundGradientStop: props => {
    return `${resolveValue(props, props.theme.jatoColorHunter0790)}`;
  },
  jatoCoachmarksSlidePaginationMarker: props => {
    return `${resolveValue(props, props.theme.jatoColorWhite10000A040)}`;
  },
  jatoCoachmarksSlidePaginationSelected: props => {
    return `${resolveValue(props, props.theme.jatoColorWhite10000)}`;
  },
  jatoCoachmarksTypography: props => {
    return `${resolveValue(props, props.theme.jatoColorWhite10000)}`;
  },
  jatoColorAmber0485: 'rgba(118, 32, 0, 1)',
  jatoColorAmber0870: 'rgba(156, 42, 0, 1)',
  jatoColorAmber1290: 'rgba(184, 55, 0, 1)',
  jatoColorAmber1750: 'rgba(207, 69, 0, 1)',
  jatoColorAmber2570: 'rgba(232, 97, 0, 1)',
  jatoColorAmber2985: 'rgba(241, 110, 0, 1)',
  jatoColorAmber4425: 'rgba(255, 153, 51, 1)',
  jatoColorAmber5490: 'rgba(255, 181, 84, 1)',
  jatoColorAmber6540: 'rgba(255, 204, 102, 1)',
  jatoColorAmber8295: 'rgba(255, 233, 184, 1)',
  jatoColorAmber9110: 'rgba(255, 244, 220, 1)',
  jatoColorAmber9540: 'rgba(255, 249, 242, 1)',
  jatoColorBlack0000: 'rgba(0, 0, 0, 1)',
  jatoColorBlack0000A004: 'rgba(0, 0, 0, 0.04)',
  jatoColorBlack0000A005: 'rgba(0, 0, 0, 0.05)',
  jatoColorBlack0000A006: 'rgba(0, 0, 0, 0.06)',
  jatoColorBlack0000A010: 'rgba(0, 0, 0, 0.1)',
  jatoColorBlack0000A012: 'rgba(0, 0, 0, 0.12)',
  jatoColorBlack0000A015: 'rgba(0, 0, 0, 0.15)',
  jatoColorBlack0000A020: 'rgba(0, 0, 0, 0.2)',
  jatoColorBlack0000A025: 'rgba(0, 0, 0, 0.25)',
  jatoColorBlack0000A030: 'rgba(0, 0, 0, 0.3)',
  jatoColorBlack0000A032: 'rgba(0, 0, 0, 0.32)',
  jatoColorBlack0000A040: 'rgba(0, 0, 0, 0.4)',
  jatoColorBlack0000A050: 'rgba(0, 0, 0, 0.5)',
  jatoColorBlack0000A060: 'rgba(0, 0, 0, 0.6)',
  jatoColorBlack0000A065: 'rgba(0, 0, 0, 0.65)',
  jatoColorBlack0000A070: 'rgba(0, 0, 0, 0.7)',
  jatoColorBlack0000A080: 'rgba(0, 0, 0, 0.8)',
  jatoColorBlack0000A090: 'rgba(0, 0, 0, 0.9)',
  jatoColorBlack0000A095: 'rgba(0, 0, 0, 0.95)',
  jatoColorBlue0100: 'rgba(0, 20, 75, 1)',
  jatoColorBlue0165: 'rgba(0, 27, 99, 1)',
  jatoColorBlue0330: 'rgba(0, 43, 130, 1)',
  jatoColorBlue0530: 'rgba(0, 57, 156, 1)',
  jatoColorBlue0750: 'rgba(0, 70, 176, 1)',
  jatoColorBlue1100: 'rgba(0, 87, 201, 1)',
  jatoColorBlue1695: 'rgba(0, 112, 224, 1)',
  jatoColorBlue2395: 'rgba(0, 134, 250, 1)',
  jatoColorBlue3365: 'rgba(48, 162, 255, 1)',
  jatoColorBlue4705: 'rgba(105, 190, 255, 1)',
  jatoColorBlue6305: 'rgba(158, 215, 255, 1)',
  jatoColorBlue7485: 'rgba(191, 230, 255, 1)',
  jatoColorBlue8425: 'rgba(217, 240, 255, 1)',
  jatoColorBlue9445: 'rgba(242, 250, 255, 1)',
  jatoColorCerulean0180: 'rgba(0, 40, 56, 1)',
  jatoColorCerulean0345: 'rgba(0, 57, 79, 1)',
  jatoColorCerulean0510: 'rgba(0, 69, 97, 1)',
  jatoColorCerulean0760: 'rgba(0, 84, 117, 1)',
  jatoColorCerulean1145: 'rgba(0, 102, 143, 1)',
  jatoColorCerulean1805: 'rgba(0, 126, 176, 1)',
  jatoColorCerulean2415: 'rgba(0, 144, 201, 1)',
  jatoColorCerulean3560: 'rgba(11, 172, 236, 1)',
  jatoColorCerulean4625: 'rgba(54, 194, 250, 1)',
  jatoColorCerulean6200: 'rgba(124, 219, 253, 1)',
  jatoColorCerulean7600: 'rgba(178, 235, 254, 1)',
  jatoColorCerulean8465: 'rgba(208, 243, 254, 1)',
  jatoColorCharcoal0125: 'rgba(30, 30, 30, 1)',
  jatoColorCharcoal0185: 'rgba(37, 37, 38, 1)',
  jatoColorCharcoal0315: 'rgba(49, 50, 51, 1)',
  jatoColorCharcoal0645: 'rgba(71, 72, 74, 1)',
  jatoColorCharcoal1185: 'rgba(95, 97, 99, 1)',
  jatoColorCharcoal1675: 'rgba(112, 114, 117, 1)',
  jatoColorCharcoal2410: 'rgba(133, 135, 138, 1)',
  jatoColorCharcoal3805: 'rgba(165, 166, 168, 1)',
  jatoColorCharcoal4620: 'rgba(180, 181, 184, 1)',
  jatoColorCharcoal5960: 'rgba(202, 203, 204, 1)',
  jatoColorCharcoal7365: 'rgba(222, 223, 224, 1)',
  jatoColorCharcoal8710: 'rgba(240, 240, 240, 1)',
  jatoColorCharcoal9200: 'rgba(245, 246, 247, 1)',
  jatoColorCharcoal9300: 'rgba(247, 247, 247, 1)',
  jatoColorCharcoal9555: 'rgba(250, 250, 250, 1)',
  jatoColorDiscovery0585: 'rgba(99, 60, 0, 1)',
  jatoColorDiscovery0995: 'rgba(125, 79, 0, 1)',
  jatoColorDiscovery1735: 'rgba(158, 105, 0, 1)',
  jatoColorDiscovery2405: 'rgba(173, 127, 0, 1)',
  jatoColorDiscovery4235: 'rgba(217, 167, 0, 1)',
  jatoColorDiscovery5710: 'rgba(245, 192, 0, 1)',
  jatoColorDiscovery6440: 'rgba(255, 204, 0, 1)',
  jatoColorDiscovery7825: 'rgba(255, 229, 102, 1)',
  jatoColorDiscovery8800: 'rgba(255, 243, 164, 1)',
  jatoColorDiscovery9275: 'rgba(255, 246, 0, 1)',
  jatoColorDiscovery9275A070: 'rgba(255, 246, 0, 0.7)',
  jatoColorElectric0165: 'rgba(0, 8, 125, 1)',
  jatoColorElectric0335: 'rgba(0, 31, 156, 1)',
  jatoColorElectric0530: 'rgba(0, 41, 191, 1)',
  jatoColorElectric0750: 'rgba(8, 54, 214, 1)',
  jatoColorElectric1115: 'rgba(0, 74, 240, 1)',
  jatoColorElectric1435: 'rgba(0, 89, 255, 1)',
  jatoColorElectric1770: 'rgba(26, 106, 255, 1)',
  jatoColorElectric2385: 'rgba(51, 130, 255, 1)',
  jatoColorElectric3335: 'rgba(87, 157, 255, 1)',
  jatoColorElectric4705: 'rgba(130, 186, 255, 1)',
  jatoColorElectric6365: 'rgba(173, 213, 255, 1)',
  jatoColorElectric7430: 'rgba(199, 227, 255, 1)',
  jatoColorElectric8645: 'rgba(227, 241, 255, 1)',
  jatoColorElectric9110: 'rgba(237, 246, 255, 1)',
  jatoColorElectric9340: 'rgba(243, 248, 255, 1)',
  jatoColorElectric9715: 'rgba(250, 252, 255, 1)',
  jatoColorFirebrick0030: 'rgba(32, 0, 0, 1)',
  jatoColorFirebrick0055: 'rgba(43, 0, 0, 1)',
  jatoColorFirebrick0080: 'rgba(55, 0, 0, 1)',
  jatoColorFirebrick0205: 'rgba(88, 0, 0, 1)',
  jatoColorFirebrick0385: 'rgba(118, 0, 0, 1)',
  jatoColorFirebrick0675: 'rgba(153, 0, 0, 1)',
  jatoColorFirebrick0995: 'rgba(181, 6, 0, 1)',
  jatoColorFirebrick1440: 'rgba(212, 18, 0, 1)',
  jatoColorFirebrick1725: 'rgba(230, 19, 0, 1)',
  jatoColorFirebrick2350: 'rgba(255, 49, 25, 1)',
  jatoColorFirebrick2900: 'rgba(255, 90, 71, 1)',
  jatoColorFirebrick4310: 'rgba(255, 145, 130, 1)',
  jatoColorFirebrick5905: 'rgba(255, 185, 176, 1)',
  jatoColorFirebrick8395: 'rgba(255, 231, 227, 1)',
  jatoColorFirebrick9170: 'rgba(255, 243, 241, 1)',
  jatoColorFirebrick9380: 'rgba(255, 246, 246, 1)',
  jatoColorGray0070: 'rgba(74, 74, 74, 1)',
  jatoColorGreen0180: 'rgba(17, 43, 0, 1)',
  jatoColorGreen0355: 'rgba(26, 61, 0, 1)',
  jatoColorGreen0520: 'rgba(32, 74, 0, 1)',
  jatoColorGreen0755: 'rgba(40, 89, 0, 1)',
  jatoColorGreen1115: 'rgba(50, 107, 0, 1)',
  jatoColorGreen1785: 'rgba(64, 133, 0, 1)',
  jatoColorGreen2360: 'rgba(82, 150, 14, 1)',
  jatoColorGreen3485: 'rgba(98, 179, 11, 1)',
  jatoColorGreen5220: 'rgba(133, 212, 42, 1)',
  jatoColorGreen6635: 'rgba(165, 232, 84, 1)',
  jatoColorGreen8010: 'rgba(203, 245, 147, 1)',
  jatoColorGreen8880: 'rgba(228, 250, 195, 1)',
  jatoColorGreen9725: 'rgba(247, 255, 235, 1)',
  jatoColorHunter0180: 'rgba(0, 43, 26, 1)',
  jatoColorHunter0345: 'rgba(0, 61, 36, 1)',
  jatoColorHunter0545: 'rgba(0, 77, 45, 1)',
  jatoColorHunter0790: 'rgba(0, 92, 54, 1)',
  jatoColorHunter1150: 'rgba(0, 110, 64, 1)',
  jatoColorHunter1635: 'rgba(0, 130, 68, 1)',
  jatoColorHunter2335: 'rgba(0, 153, 82, 1)',
  jatoColorHunter3310: 'rgba(21, 179, 89, 1)',
  jatoColorHunter4630: 'rgba(82, 204, 119, 1)',
  jatoColorHunter6300: 'rgba(133, 229, 143, 1)',
  jatoColorHunter7560: 'rgba(174, 242, 176, 1)',
  jatoColorHunter8675: 'rgba(213, 250, 202, 1)',
  jatoColorHunter9340: 'rgba(234, 253, 229, 1)',
  jatoColorHunter9770: 'rgba(249, 254, 247, 1)',
  jatoColorHunter9905: 'rgba(251, 255, 252, 1)',
  jatoColorNavy0180: 'rgba(0, 31, 97, 1)',
  jatoColorNavy0350: 'rgba(15, 46, 125, 1)',
  jatoColorNavy0500: 'rgba(24, 57, 140, 1)',
  jatoColorNavy0690: 'rgba(36, 69, 153, 1)',
  jatoColorNavy1170: 'rgba(60, 92, 176, 1)',
  jatoColorNavy1640: 'rgba(80, 110, 186, 1)',
  jatoColorNavy1755: 'rgba(86, 114, 186, 1)',
  jatoColorNavy2570: 'rgba(109, 137, 209, 1)',
  jatoColorNavy3855: 'rgba(140, 166, 230, 1)',
  jatoColorNavy5140: 'rgba(169, 189, 245, 1)',
  jatoColorNavy5140A015: 'rgba(169, 189, 245, 0.15)',
  jatoColorNavy6385: 'rgba(191, 209, 255, 1)',
  jatoColorNavy7145: 'rgba(207, 220, 252, 1)',
  jatoColorNavy7450: 'rgba(212, 224, 255, 1)',
  jatoColorNavy8530: 'rgba(232, 238, 252, 1)',
  jatoColorNavy9295: 'rgba(245, 247, 252, 1)',
  jatoColorPlum0185: 'rgba(53, 0, 110, 1)',
  jatoColorPlum0340: 'rgba(69, 0, 148, 1)',
  jatoColorPlum0525: 'rgba(84, 7, 179, 1)',
  jatoColorPlum0760: 'rgba(98, 28, 201, 1)',
  jatoColorPlum1210: 'rgba(118, 59, 220, 1)',
  jatoColorPlum1210A070: 'rgba(118, 59, 220, 0.7)',
  jatoColorPlum1760: 'rgba(135, 85, 235, 1)',
  jatoColorPlum2510: 'rgba(152, 114, 242, 1)',
  jatoColorPlum3460: 'rgba(171, 140, 255, 1)',
  jatoColorPlum4590: 'rgba(188, 168, 255, 1)',
  jatoColorPlum6280: 'rgba(211, 201, 255, 1)',
  jatoColorPlum7930: 'rgba(232, 227, 255, 1)',
  jatoColorPlum8630: 'rgba(240, 237, 255, 1)',
  jatoColorRaspberry0540: 'rgba(133, 0, 71, 1)',
  jatoColorRaspberry0705: 'rgba(148, 6, 86, 1)',
  jatoColorRaspberry1205: 'rgba(186, 15, 118, 1)',
  jatoColorRaspberry1665: 'rgba(212, 25, 143, 1)',
  jatoColorRaspberry2355: 'rgba(235, 56, 175, 1)',
  jatoColorRaspberry3280: 'rgba(255, 89, 205, 1)',
  jatoColorRaspberry4520: 'rgba(255, 140, 221, 1)',
  jatoColorRaspberry7215: 'rgba(255, 207, 240, 1)',
  jatoColorRaspberry8295: 'rgba(255, 227, 248, 1)',
  jatoColorSteel0020: 'rgba(5, 8, 18, 1)',
  jatoColorSteel0050: 'rgba(10, 15, 32, 1)',
  jatoColorSteel0050A000: 'rgba(10, 15, 32, 0)',
  jatoColorSteel0080: 'rgba(16, 22, 41, 1)',
  jatoColorSteel0110: 'rgba(20, 27, 46, 1)',
  jatoColorSteel0110A000: 'rgba(20, 27, 46, 0)',
  jatoColorSteel0165: 'rgba(29, 34, 56, 1)',
  jatoColorSteel0165A000: 'rgba(29, 34, 56, 0)',
  jatoColorSteel0230: 'rgba(36, 41, 63, 1)',
  jatoColorSteel0230A000: 'rgba(36, 41, 63, 0)',
  jatoColorSteel0275: 'rgba(34, 47, 65, 1)',
  jatoColorSteel0275A065: 'rgba(34, 47, 65, 0.65)',
  jatoColorSteel0295: 'rgba(42, 47, 69, 1)',
  jatoColorSteel0295A000: 'rgba(42, 47, 69, 0)',
  jatoColorSteel0405: 'rgba(51, 56, 76, 1)',
  jatoColorSteel0405A000: 'rgba(51, 56, 76, 0)',
  jatoColorSteel0570: 'rgba(62, 67, 87, 1)',
  jatoColorSteel0730: 'rgba(68, 77, 94, 1)',
  jatoColorSteel1120: 'rgba(86, 95, 107, 1)',
  jatoColorSteel1575: 'rgba(100, 112, 124, 1)',
  jatoColorSteel1750: 'rgba(108, 117, 130, 1)',
  jatoColorSteel2390: 'rgba(126, 135, 148, 1)',
  jatoColorSteel2390A015: 'rgba(126, 135, 148, 0.15)',
  jatoColorSteel3820: 'rgba(158, 167, 181, 1)',
  jatoColorSteel4630: 'rgba(173, 182, 196, 1)',
  jatoColorSteel6325: 'rgba(202, 209, 219, 1)',
  jatoColorSteel7335: 'rgba(218, 223, 230, 1)',
  jatoColorSteel7335A065: 'rgba(218, 223, 230, 0.65)',
  jatoColorSteel8595: 'rgba(235, 239, 245, 1)',
  jatoColorSteel8595A000: 'rgba(235, 239, 245, 0)',
  jatoColorSteel9165: 'rgba(243, 247, 251, 1)',
  jatoColorSteel9165A000: 'rgba(242, 246, 250, 0)',
  jatoColorTeal0180: 'rgba(0, 41, 51, 1)',
  jatoColorTeal0365: 'rgba(0, 60, 69, 1)',
  jatoColorTeal0545: 'rgba(0, 74, 79, 1)',
  jatoColorTeal0785: 'rgba(0, 89, 89, 1)',
  jatoColorTeal1140: 'rgba(0, 107, 100, 1)',
  jatoColorTeal1720: 'rgba(0, 130, 115, 1)',
  jatoColorTeal2440: 'rgba(0, 153, 131, 1)',
  jatoColorTeal3480: 'rgba(39, 179, 149, 1)',
  jatoColorTeal4860: 'rgba(58, 207, 175, 1)',
  jatoColorTeal6455: 'rgba(115, 230, 203, 1)',
  jatoColorTeal7425: 'rgba(153, 240, 220, 1)',
  jatoColorTeal8760: 'rgba(205, 250, 240, 1)',
  jatoColorWhite10000: 'rgba(255, 255, 255, 1)',
  jatoColorWhite10000A000: 'rgba(255, 255, 255, 0)',
  jatoColorWhite10000A005: 'rgba(255, 255, 255, 0.05)',
  jatoColorWhite10000A008: 'rgba(255, 255, 255, 0.08)',
  jatoColorWhite10000A010: 'rgba(255, 255, 255, 0.1)',
  jatoColorWhite10000A015: 'rgba(255, 255, 255, 0.15)',
  jatoColorWhite10000A020: 'rgba(255, 255, 255, 0.2)',
  jatoColorWhite10000A025: 'rgba(255, 255, 255, 0.25)',
  jatoColorWhite10000A030: 'rgba(255, 255, 255, 0.3)',
  jatoColorWhite10000A040: 'rgba(255, 255, 255, 0.4)',
  jatoColorWhite10000A050: 'rgba(255, 255, 255, 0.5)',
  jatoColorWhite10000A060: 'rgba(255, 255, 255, 0.6)',
  jatoColorWhite10000A065: 'rgba(255, 255, 255, 0.65)',
  jatoColorWhite10000A070: 'rgba(255, 255, 255, 0.7)',
  jatoColorWhite10000A080: 'rgba(255, 255, 255, 0.8)',
  jatoColorWhite10000A090: 'rgba(255, 255, 255, 0.9)',
  jatoColorWhite10000A095: 'rgba(255, 255, 255, 0.95)',
  jatoDividerColorSecondary: 'rgba(255, 255, 255, 1)',
  jatoElevationBlurLevel1: props => {
    return `${resolveValue(props, props.theme.jatoMeasure6)}`;
  },
  jatoElevationYAxisLevel1: props => {
    return `${resolveValue(props, props.theme.jatoMeasure2)}`;
  },
  jatoFontFamilyCodeblock: '"Fira Code Variable", "Fira Code", monospace',
  jatoFontFamilyDefault: '"Inter Variable", InterVariable, "Inter var", Inter, sans-serif',
  jatoFontSize3xl: '22px',
  jatoFontSize4xl: '28px',
  jatoFontSize5xl: '32px',
  jatoFontSizeLrg: '15px',
  jatoFontSizeReg: '13px',
  jatoFontSizeSm: '12px',
  jatoFontSizeXl: '16px',
  jatoFontSizeXs: '11px',
  jatoFontSizeXxl: '18px',
  jatoFontSizeXxs: '10px',
  jatoFontWeight350: '350',
  jatoFontWeight400: '400',
  jatoFontWeight500: '500',
  jatoFontWeight600: '600',
  jatoFontWeight700: '700',
  jatoFontWeightHeadingH1: '400',
  jatoFontWeightHeadingH4: '600',
  jatoFontWeightRetina: '450',
  jatoInputBorderContainerSuccessActive: props => {
    return `${resolveValue(props, props.theme.jatoColorHunter2335)}`;
  },
  jatoInputBorderFocusHover: props => {
    return `${resolveValue(props, props.theme.jatoColorElectric2385)}`;
  },
  jatoInputBorderFocusSuccessActive: props => {
    return `${resolveValue(props, props.theme.jatoColorHunter1635)}`;
  },
  jatoInputBorderFocusSuccessEnabled: props => {
    return `${resolveValue(props, props.theme.jatoColorHunter1635)}`;
  },
  jatoInputBorderFocusSuccessHover: props => {
    return `${resolveValue(props, props.theme.jatoColorHunter1150)}`;
  },
  jatoInputBorderFocusSuccessNeutral: props => {
    return `${resolveValue(props, props.theme.jatoColorHunter1150)}`;
  },
  jatoLineHeight3xl: '34px',
  jatoLineHeightLrg: '20px',
  jatoLineHeightReg: '18px',
  jatoLineHeightSm: '16px',
  jatoLineHeightXl: '22px',
  jatoLineHeightXs: '14px',
  jatoLineHeightXxl: '26px',
  jatoLoaderSpinnerTrackBackground: 'rgba(255, 255, 255, 1)',
  jatoMarginLrg: props => {
    return `${resolveValue(props, props.theme.jatoMeasure12)}`;
  },
  jatoMarginMed: props => {
    return `${resolveValue(props, props.theme.jatoMeasure8)}`;
  },
  jatoMarginMicro: props => {
    return `${resolveValue(props, props.theme.jatoMeasure1)}`;
  },
  jatoMarginNegativeLrg: props => {
    return `${resolveValue(props, props.theme.jatoMeasureNeg8)}`;
  },
  jatoMarginNegativeXl: props => {
    return `${resolveValue(props, props.theme.jatoMeasureNeg16)}`;
  },
  jatoMarginSm: props => {
    return `${resolveValue(props, props.theme.jatoMeasure6)}`;
  },
  jatoMarginXl: props => {
    return `${resolveValue(props, props.theme.jatoMeasure16)}`;
  },
  jatoMarginXs: props => {
    return `${resolveValue(props, props.theme.jatoMeasure4)}`;
  },
  jatoMarginXxl: props => {
    return `${resolveValue(props, props.theme.jatoMeasure24)}`;
  },
  jatoMarginXxs: props => {
    return `${resolveValue(props, props.theme.jatoMeasure2)}`;
  },
  jatoMeasure0: '0px',
  jatoMeasure1: '1px',
  jatoMeasure10: '10px',
  jatoMeasure100: '100px',
  jatoMeasure1023: '1023px',
  jatoMeasure1024: '1024px',
  jatoMeasure12: '12px',
  jatoMeasure128: '128px',
  jatoMeasure16: '16px',
  jatoMeasure176: '176px',
  jatoMeasure192: '192px',
  jatoMeasure2: '2px',
  jatoMeasure24: '24px',
  jatoMeasure240: '240px',
  jatoMeasure3: '3px',
  jatoMeasure32: '32px',
  jatoMeasure320: '320px',
  jatoMeasure4: '4px',
  jatoMeasure40: '40px',
  jatoMeasure48: '48px',
  jatoMeasure56: '56px',
  jatoMeasure6: '6px',
  jatoMeasure64: '64px',
  jatoMeasure648: '648px',
  jatoMeasure72: '72px',
  jatoMeasure767: '767px',
  jatoMeasure768: '768px',
  jatoMeasure8: '8px',
  jatoMeasure80: '80px',
  jatoMeasure88: '88px',
  jatoMeasure96: '96px',
  jatoMeasureNeg12: '-12px',
  jatoMeasureNeg16: '-16px',
  jatoMeasureNeg3: '-3px',
  jatoMeasureNeg6: '-6px',
  jatoMeasureNeg8: '-8px',
  jatoMenuDropdownMaxWidth: props => {
    return `${resolveValue(props, props.theme.jatoMeasure648)}`;
  },
  jatoMenuMinWidth: props => {
    return `${resolveValue(props, props.theme.jatoMeasure176)}`;
  },
  jatoMenuSubMenuMargin: props => {
    return `${resolveValue(props, props.theme.jatoMeasureNeg3)}`;
  },
  jatoMenuWidth: props => {
    return `${resolveValue(props, props.theme.jatoMeasure192)}`;
  },
  jatoMessagesInlineBorderGradientInformation: props => {
    return `${resolveValue(props, props.theme.jatoColorBlue1695)}`;
  },
  jatoPaddingContentLrg: props => {
    return `${resolveValue(props, props.theme.jatoMeasure64)}`;
  },
  jatoPaddingContentMed: props => {
    return `${resolveValue(props, props.theme.jatoMeasure48)}`;
  },
  jatoPaddingContentSm: props => {
    return `${resolveValue(props, props.theme.jatoMeasure32)}`;
  },
  jatoPaddingContentXl: props => {
    return `${resolveValue(props, props.theme.jatoMeasure80)}`;
  },
  jatoPaddingContentXs: props => {
    return `${resolveValue(props, props.theme.jatoMeasure24)}`;
  },
  jatoPaddingLrg: props => {
    return `${resolveValue(props, props.theme.jatoMeasure8)}`;
  },
  jatoPaddingMed: props => {
    return `${resolveValue(props, props.theme.jatoMeasure6)}`;
  },
  jatoPaddingMicro: props => {
    return `${resolveValue(props, props.theme.jatoMeasure1)}`;
  },
  jatoPaddingSm: props => {
    return `${resolveValue(props, props.theme.jatoMeasure4)}`;
  },
  jatoPaddingXl: props => {
    return `${resolveValue(props, props.theme.jatoMeasure12)}`;
  },
  jatoPaddingXs: props => {
    return `${resolveValue(props, props.theme.jatoMeasure3)}`;
  },
  jatoPaddingXxl: props => {
    return `${resolveValue(props, props.theme.jatoMeasure16)}`;
  },
  jatoPaddingXxs: props => {
    return `${resolveValue(props, props.theme.jatoMeasure2)}`;
  },
  jatoPageBackground: 'rgba(245, 245, 245, 1)',
  jatoRadiiFull: props => {
    return `${resolveValue(props, props.theme.jatoMeasure100)}`;
  },
  jatoRadiiLrg: props => {
    return `${resolveValue(props, props.theme.jatoMeasure8)}`;
  },
  jatoRadiiMed: props => {
    return `${resolveValue(props, props.theme.jatoMeasure6)}`;
  },
  jatoRadiiNone: props => {
    return `${resolveValue(props, props.theme.jatoMeasure0)}`;
  },
  jatoRadiiSm: props => {
    return `${resolveValue(props, props.theme.jatoMeasure4)}`;
  },
  jatoRadiiXl: props => {
    return `${resolveValue(props, props.theme.jatoMeasure12)}`;
  },
  jatoRadiiXs: props => {
    return `${resolveValue(props, props.theme.jatoMeasure2)}`;
  },
  jatoRadiiXxl: props => {
    return `${resolveValue(props, props.theme.jatoMeasure16)}`;
  },
  jatoRowsHeightLg: props => {
    return `${resolveValue(props, props.theme.jatoSizeHeight40)}`;
  },
  jatoRowsHeightMd: props => {
    return `${resolveValue(props, props.theme.jatoSizeHeight32)}`;
  },
  jatoRowsHeightSm: props => {
    return `${resolveValue(props, props.theme.jatoSizeHeight24)}`;
  },
  jatoSizeHeight16: props => {
    return `${resolveValue(props, props.theme.jatoMeasure16)}`;
  },
  jatoSizeHeight24: props => {
    return `${resolveValue(props, props.theme.jatoMeasure24)}`;
  },
  jatoSizeHeight32: props => {
    return `${resolveValue(props, props.theme.jatoMeasure32)}`;
  },
  jatoSizeHeight40: props => {
    return `${resolveValue(props, props.theme.jatoMeasure40)}`;
  },
  jatoSizeHeight48: props => {
    return `${resolveValue(props, props.theme.jatoMeasure48)}`;
  },
  jatoSizeWidth192: props => {
    return `${resolveValue(props, props.theme.jatoMeasure192)}`;
  },
  jatoTableSubTitleMarginBottom: props => {
    return `${resolveValue(props, props.theme.jatoMeasureNeg6)}`;
  },
  jatoTextStyleItalic: 'Italic',
  jatoTileBorder: 'rgba(0, 0, 0, 0.1)',
  jatoTilesBorderHover: 'rgba(26, 106, 255, 0.5)',
  jatoTrackingCondensed: '-0.36000001430511475px',
  jatoTrackingCondensedLt: '-0.18000000715255737px',
  jatoTrackingRegular: '0px',
  jatoPriorityHigh: props => {
    return `${resolveValue(props, props.theme.jatoStatusRating03)}`;
  },
  jatoPriorityLow: props => {
    return `${resolveValue(props, props.theme.jatoStatusRating045)}`;
  },
  jatoPriorityLowest: props => {
    return `${resolveValue(props, props.theme.jatoStatusRating09)}`;
  },
  jatoPriorityMedium: props => {
    return `${resolveValue(props, props.theme.jatoStatusRating04)}`;
  },
  jatoPriorityNone: props => {
    return `${resolveValue(props, props.theme.jatoStatusRating11)}`;
  },
  jatoPriorityUrgent: props => {
    return `${resolveValue(props, props.theme.jatoStatusRating01)}`;
  },
  jatoPriorityVeryHigh: props => {
    return `${resolveValue(props, props.theme.jatoStatusRating02)}`;
  },
  jatoPriorityVeryLow: props => {
    return `${resolveValue(props, props.theme.jatoStatusRating08)}`;
  },
  jatoSemanticBad: props => {
    return `${resolveValue(props, props.theme.jatoStatusRating02)}`;
  },
  jatoSemanticCritical: props => {
    return `${resolveValue(props, props.theme.jatoStatusRating01)}`;
  },
  jatoSemanticGood: props => {
    return `${resolveValue(props, props.theme.jatoStatusRating06)}`;
  },
  jatoSemanticNeutral00: props => {
    return `${resolveValue(props, props.theme.jatoStatusRating10)}`;
  },
  jatoSemanticNeutral01: props => {
    return `${resolveValue(props, props.theme.jatoStatusRating11)}`;
  },
  jatoSemanticNormal: props => {
    return `${resolveValue(props, props.theme.jatoStatusRating05)}`;
  },
  jatoSemanticWarning: props => {
    return `${resolveValue(props, props.theme.jatoStatusRating04)}`;
  },
  jatoSeverityImpactRatingCritical: props => {
    return `${resolveValue(props, props.theme.jatoStatusRating01)}`;
  },
  jatoSeverityImpactRatingHigh: props => {
    return `${resolveValue(props, props.theme.jatoStatusRating03)}`;
  },
  jatoSeverityImpactRatingLow: props => {
    return `${resolveValue(props, props.theme.jatoStatusRating045)}`;
  },
  jatoSeverityImpactRatingMinor: props => {
    return `${resolveValue(props, props.theme.jatoStatusRating04)}`;
  },
  jatoSeverityImpactRatingNone: props => {
    return `${resolveValue(props, props.theme.jatoStatusRating11)}`;
  },
  jatoSeverityImpactRatingVeryHigh: props => {
    return `${resolveValue(props, props.theme.jatoStatusRating02)}`;
  },
  jatoSeveritySystemStatusCritical: props => {
    return `${resolveValue(props, props.theme.jatoStatusRating01)}`;
  },
  jatoSeveritySystemStatusInformation: props => {
    return `${resolveValue(props, props.theme.jatoStatusRating05)}`;
  },
  jatoSeveritySystemStatusMajor: props => {
    return `${resolveValue(props, props.theme.jatoStatusRating03)}`;
  },
  jatoSeveritySystemStatusMinor: props => {
    return `${resolveValue(props, props.theme.jatoStatusRating04)}`;
  },
  jatoSeveritySystemStatusNone: props => {
    return `${resolveValue(props, props.theme.jatoStatusRating11)}`;
  },
  jatoSeveritySystemStatusNormal: props => {
    return `${resolveValue(props, props.theme.jatoStatusRating06)}`;
  },
  jatoSeveritySystemStatusUnknown: props => {
    return `${resolveValue(props, props.theme.jatoStatusRating07)}`;
  },
  colorGray95: '#1c1d1e',
  colorGray95Rgb: '28, 29, 30',
  colorGray95Contrast: '#fff',
  colorGray95ContrastRgb: '255, 255, 255',
  colorGray90: '#323435',
  colorGray90Rgb: '50, 52, 53',
  colorGray90Contrast: '#fff',
  colorGray90ContrastRgb: '255, 255, 255',
  colorGray80: '#4c4e50',
  colorGray80Rgb: '76, 78, 80',
  colorGray80Contrast: '#000',
  colorGray80ContrastRgb: '0, 0, 0',
  colorGray75: '#656668',
  colorGray75Rgb: '101, 102, 104',
  colorGray75Contrast: '#000',
  colorGray75ContrastRgb: '0, 0, 0',
  colorGray70: '#747577',
  colorGray70Rgb: '116, 117, 119',
  colorGray70Contrast: '#000',
  colorGray70ContrastRgb: '0, 0, 0',
  colorGray60: '#8a8d8f',
  colorGray60Rgb: '138, 141, 143',
  colorGray60Contrast: '#000',
  colorGray60ContrastRgb: '0, 0, 0',
  colorGray50: '#a3a5a8',
  colorGray50Rgb: '163, 165, 168',
  colorGray50Contrast: '#000',
  colorGray50ContrastRgb: '0, 0, 0',
  colorGray40: '#bdbec0',
  colorGray40Rgb: '189, 190, 192',
  colorGray40Contrast: '#000',
  colorGray40ContrastRgb: '0, 0, 0',
  colorGray30: '#cfd0d1',
  colorGray30Rgb: '207, 208, 209',
  colorGray30Contrast: '#000',
  colorGray30ContrastRgb: '0, 0, 0',
  colorGray25: '#dcdedf',
  colorGray25Rgb: '220, 222, 223',
  colorGray25Contrast: '#000',
  colorGray25ContrastRgb: '0, 0, 0',
  colorGray20: '#e8eaeb',
  colorGray20Rgb: '232, 234, 235',
  colorGray20Contrast: '#000',
  colorGray20ContrastRgb: '0, 0, 0',
  colorGray10: '#f1f2f3',
  colorGray10Rgb: '241, 242, 243',
  colorGray10Contrast: '#000',
  colorGray10ContrastRgb: '0, 0, 0',
  colorGray05: '#fafafa',
  colorGray05Rgb: '250, 250, 250',
  colorGray05Contrast: '#000',
  colorGray05ContrastRgb: '0, 0, 0',
  colorBlue: '#0073e7',
  colorBlueRgb: '0, 115, 231',
  colorBlueContrast: '#000',
  colorBlueContrastRgb: '0, 0, 0',
  colorWhite: '#ffffff',
  colorWhiteRgb: '255, 255, 255',
  colorWhiteContrast: '#000',
  colorWhiteContrastRgb: '0, 0, 0',
  colorBlack: '#000000',
  colorBlackRgb: '0, 0, 0',
  colorBlackContrast: '#fff',
  colorBlackContrastRgb: '255, 255, 255',
  colorStatusSuccess: '#009952',
  colorStatusSuccessRgb: '0, 153, 82',
  colorStatusSuccessContrast: '#000',
  colorStatusSuccessContrastRgb: '0, 0, 0',
  colorStatusWarning: '#e86100',
  colorStatusWarningRgb: '232, 97, 0',
  colorStatusWarningContrast: '#000',
  colorStatusWarningContrastRgb: '0, 0, 0',
  colorStatusError: '#e60054',
  colorStatusErrorRgb: '230, 0, 84',
  colorStatusErrorContrast: '#fff',
  colorStatusErrorContrastRgb: '255, 255, 255',
  colorStatusInfo: '#3382ff',
  colorStatusInfoRgb: '51, 130, 255',
  colorStatusInfoContrast: '#000',
  colorStatusInfoContrastRgb: '0, 0, 0',
  colorSeverityNormal: '#008535',
  colorSeverityNormalRgb: '0, 133, 53',
  colorSeverityNormalContrast: '#000',
  colorSeverityNormalContrastRgb: '0, 0, 0',
  colorSeverityMinor: props => {
    return `${resolveValue(props, props.theme.colorYellow)}`;
  },
  colorSeverityMinorRgb: props => {
    return `${resolveValue(props, props.theme.colorYellowRgb)}`;
  },
  colorSeverityMinorContrast: props => {
    return `${resolveValue(props, props.theme.colorYellowContrast)}`;
  },
  colorSeverityMinorContrastRgb: props => {
    return `${resolveValue(props, props.theme.colorYellowContrastRgb)}`;
  },
  colorSeverityMajor: '#f48b34',
  colorSeverityMajorRgb: '244, 139, 52',
  colorSeverityMajorContrast: '#000',
  colorSeverityMajorContrastRgb: '0, 0, 0',
  colorSeverityCritical: '#e30901',
  colorSeverityCriticalRgb: '227, 9, 1',
  colorSeverityCriticalContrast: '#fff',
  colorSeverityCriticalContrastRgb: '255, 255, 255',
  colorSeverityWarning: '#008efc',
  colorSeverityWarningRgb: '0, 142, 252',
  colorSeverityWarningContrast: '#000',
  colorSeverityWarningContrastRgb: '0, 0, 0',
  colorSeverityUnknown: '#8c26d6',
  colorSeverityUnknownRgb: '140, 38, 214',
  colorSeverityUnknownContrast: '#000',
  colorSeverityUnknownContrastRgb: '0, 0, 0',
  colorSeverityNone: '#35444d',
  colorSeverityNoneRgb: '53, 68, 77',
  colorSeverityNoneContrast: '#000',
  colorSeverityNoneContrastRgb: '0, 0, 0',
  colorPrimary: props => {
    return `${resolveValue(props, props.theme.colorBlue)}`;
  },
  colorPrimaryRgb: props => {
    return `${resolveValue(props, props.theme.colorBlueRgb)}`;
  },
  colorPrimaryContrast: props => {
    return `${resolveValue(props, props.theme.colorBlueContrast)}`;
  },
  colorPrimaryContrastRgb: props => {
    return `${resolveValue(props, props.theme.colorBlueContrastRgb)}`;
  },
  colorPrimaryHover: '#0066cc',
  colorPrimaryHoverRgb: '0, 102, 204',
  colorPrimaryHoverContrast: '#000',
  colorPrimaryHoverContrastRgb: '0, 0, 0',
  colorPrimaryActive: '#0053ac',
  colorPrimaryActiveRgb: '0, 83, 172',
  colorPrimaryActiveContrast: '#000',
  colorPrimaryActiveContrastRgb: '0, 0, 0',
  colorPrimaryFocus: props => {
    return `${resolveValue(props, props.theme.colorPrimaryHover)}`;
  },
  colorPrimaryFocusRgb: props => {
    return `${resolveValue(props, props.theme.colorPrimaryHoverRgb)}`;
  },
  colorPrimaryFocusContrast: props => {
    return `${resolveValue(props, props.theme.colorPrimaryHoverContrast)}`;
  },
  colorPrimaryFocusContrastRgb: props => {
    return `${resolveValue(props, props.theme.colorPrimaryHoverContrastRgb)}`;
  },
  colorPrimaryFlat: 'transparent',
  colorPrimaryFlatHover: props => {
    return `rgba(${resolveValue(props, props.theme.colorPrimaryRgb)}, 0.05)`;
  },
  colorPrimaryFlatActive: props => {
    return `rgba(${resolveValue(props, props.theme.colorPrimaryRgb)}, 0.1)`;
  },
  colorPrimaryFlatFocus: props => {
    return `${resolveValue(props, props.theme.colorPrimaryFlatHover)}`;
  },
  colorSecondary: 'transparent',
  colorSecondaryRgb: '0, 0, 0',
  colorSecondaryContrast: '#fff',
  colorSecondaryContrastRgb: '255, 255, 255',
  colorSecondaryHover: 'rgba(0, 0, 0, 0.05)',
  colorSecondaryHoverRgb: '0, 0, 0',
  colorSecondaryHoverContrast: '#fff',
  colorSecondaryHoverContrastRgb: '255, 255, 255',
  colorSecondaryActive: 'rgba(0, 0, 0, 0.1)',
  colorSecondaryActiveRgb: '0, 0, 0',
  colorSecondaryActiveContrast: '#fff',
  colorSecondaryActiveContrastRgb: '255, 255, 255',
  colorSecondaryFocus: props => {
    return `${resolveValue(props, props.theme.colorSecondaryHover)}`;
  },
  colorSecondaryFocusRgb: props => {
    return `${resolveValue(props, props.theme.colorSecondaryHoverRgb)}`;
  },
  colorSecondaryFocusContrast: props => {
    return `${resolveValue(props, props.theme.colorSecondaryHoverContrast)}`;
  },
  colorSecondaryFocusContrastRgb: props => {
    return `${resolveValue(props, props.theme.colorSecondaryHoverContrastRgb)}`;
  },
  colorSecondaryFlat: 'transparent',
  colorSecondaryFlatHover: props => {
    return `rgba(${resolveValue(props, props.theme.colorBlackRgb)}, 0.05)`;
  },
  colorSecondaryFlatActive: props => {
    return `rgba(${resolveValue(props, props.theme.colorBlackRgb)}, 0.1)`;
  },
  colorSecondaryFlatFocus: props => {
    return `${resolveValue(props, props.theme.colorSecondaryFlatHover)}`;
  },
  colorNegative: props => {
    return `${resolveValue(props, props.theme.colorStatusError)}`;
  },
  colorNegativeRgb: props => {
    return `${resolveValue(props, props.theme.colorStatusErrorRgb)}`;
  },
  colorNegativeContrast: props => {
    return `${resolveValue(props, props.theme.colorStatusErrorContrast)}`;
  },
  colorNegativeContrastRgb: props => {
    return `${resolveValue(props, props.theme.colorStatusErrorContrastRgb)}`;
  },
  colorNegativeHover: '#c20040',
  colorNegativeHoverRgb: '194, 0, 64',
  colorNegativeHoverContrast: '#fff',
  colorNegativeHoverContrastRgb: '255, 255, 255',
  colorNegativeActive: '#a30036',
  colorNegativeActiveRgb: '163, 0, 54',
  colorNegativeActiveContrast: '#fff',
  colorNegativeActiveContrastRgb: '255, 255, 255',
  colorNegativeFocus: props => {
    return `${resolveValue(props, props.theme.colorNegativeHover)}`;
  },
  colorNegativeFocusRgb: props => {
    return `${resolveValue(props, props.theme.colorNegativeHoverRgb)}`;
  },
  colorNegativeFocusContrast: props => {
    return `${resolveValue(props, props.theme.colorNegativeHoverContrast)}`;
  },
  colorNegativeFocusContrastRgb: props => {
    return `${resolveValue(props, props.theme.colorNegativeHoverContrastRgb)}`;
  },
  colorNegativeFlat: 'transparent',
  colorNegativeFlatHover: props => {
    return `rgba(${resolveValue(props, props.theme.colorNegativeRgb)}, 0.05)`;
  },
  colorNegativeFlatActive: props => {
    return `rgba(${resolveValue(props, props.theme.colorNegativeRgb)}, 0.1)`;
  },
  colorNegativeFlatFocus: props => {
    return `${resolveValue(props, props.theme.colorNegativeFlatHover)}`;
  },
  colorBubbleGum: '#ffa1ce',
  colorBubbleGumRgb: '255, 161, 206',
  colorBubbleGumContrast: '#000',
  colorBubbleGumContrastRgb: '0, 0, 0',
  colorSalmonPink: '#ffa0ad',
  colorSalmonPinkRgb: '255, 160, 173',
  colorSalmonPinkContrast: '#000',
  colorSalmonPinkContrastRgb: '0, 0, 0',
  colorSalmonRed: '#ff4b63',
  colorSalmonRedRgb: '255, 75, 99',
  colorSalmonRedContrast: '#000',
  colorSalmonRedContrastRgb: '0, 0, 0',
  colorRed: '#ff454f',
  colorRedRgb: '255, 69, 79',
  colorRedContrast: '#000',
  colorRedContrastRgb: '0, 0, 0',
  colorPlum: '#b21646',
  colorPlumRgb: '178, 22, 70',
  colorPlumContrast: '#000',
  colorPlumContrastRgb: '0, 0, 0',
  colorCherryRed: '#d7235a',
  colorCherryRedRgb: '215, 35, 90',
  colorCherryRedContrast: '#000',
  colorCherryRedContrastRgb: '0, 0, 0',
  colorNeonPink: '#ef187f',
  colorNeonPinkRgb: '239, 24, 127',
  colorNeonPinkContrast: '#000',
  colorNeonPinkContrastRgb: '0, 0, 0',
  colorHotPink: '#ff62ad',
  colorHotPinkRgb: '255, 98, 173',
  colorHotPinkContrast: '#000',
  colorHotPinkContrastRgb: '0, 0, 0',
  colorMagenta: '#eb23c2',
  colorMagentaRgb: '235, 35, 194',
  colorMagentaContrast: '#000',
  colorMagentaContrastRgb: '0, 0, 0',
  colorFuchsia: '#c6179d',
  colorFuchsiaRgb: '198, 23, 157',
  colorFuchsiaContrast: '#000',
  colorFuchsiaContrastRgb: '0, 0, 0',
  colorPurple: '#9b1e83',
  colorPurpleRgb: '155, 30, 131',
  colorPurpleContrast: '#000',
  colorPurpleContrastRgb: '0, 0, 0',
  colorTaffy: '#e967cb',
  colorTaffyRgb: '233, 103, 203',
  colorTaffyContrast: '#000',
  colorTaffyContrastRgb: '0, 0, 0',
  colorBarbiePink: '#e56da7',
  colorBarbiePinkRgb: '229, 109, 167',
  colorBarbiePinkContrast: '#000',
  colorBarbiePinkContrastRgb: '0, 0, 0',
  colorFlamingo: '#f37787',
  colorFlamingoRgb: '243, 119, 135',
  colorFlamingoContrast: '#000',
  colorFlamingoContrastRgb: '0, 0, 0',
  colorCarnationPink: '#fccad0',
  colorCarnationPinkRgb: '252, 202, 208',
  colorCarnationPinkContrast: '#000',
  colorCarnationPinkContrastRgb: '0, 0, 0',
  colorPaleEggplant: '#5216ac',
  colorPaleEggplantRgb: '82, 22, 172',
  colorPaleEggplantContrast: '#fff',
  colorPaleEggplantContrastRgb: '255, 255, 255',
  colorViolet: '#5540bf',
  colorVioletRgb: '85, 64, 191',
  colorVioletContrast: '#000',
  colorVioletContrastRgb: '0, 0, 0',
  colorIndigo: '#7425ad',
  colorIndigoRgb: '116, 37, 173',
  colorIndigoContrast: '#000',
  colorIndigoContrastRgb: '0, 0, 0',
  colorPalePurple: '#b53ddc',
  colorPalePurpleRgb: '181, 61, 220',
  colorPalePurpleContrast: '#000',
  colorPalePurpleContrastRgb: '0, 0, 0',
  colorMauve: '#d5adfd',
  colorMauveRgb: '213, 173, 253',
  colorMauveContrast: '#000',
  colorMauveContrastRgb: '0, 0, 0',
  colorIris: '#6055f1',
  colorIrisRgb: '96, 85, 241',
  colorIrisContrast: '#000',
  colorIrisContrastRgb: '0, 0, 0',
  colorDarkUltramarine: '#271782',
  colorDarkUltramarineRgb: '39, 23, 130',
  colorDarkUltramarineContrast: '#fff',
  colorDarkUltramarineContrastRgb: '255, 255, 255',
  colorDarkBlue: '#231ca5',
  colorDarkBlueRgb: '35, 28, 165',
  colorDarkBlueContrast: '#fff',
  colorDarkBlueContrastRgb: '255, 255, 255',
  colorUltramarine: '#3939c6',
  colorUltramarineRgb: '57, 57, 198',
  colorUltramarineContrast: '#000',
  colorUltramarineContrastRgb: '0, 0, 0',
  colorSteelblue: '#014272',
  colorSteelblueRgb: '1, 66, 114',
  colorSteelblueContrast: '#fff',
  colorSteelblueContrastRgb: '255, 255, 255',
  colorCerulean: '#1668c1',
  colorCeruleanRgb: '22, 104, 193',
  colorCeruleanContrast: '#000',
  colorCeruleanContrastRgb: '0, 0, 0',
  colorSkyblue: '#00abf3',
  colorSkyblueRgb: '0, 171, 243',
  colorSkyblueContrast: '#000',
  colorSkyblueContrastRgb: '0, 0, 0',
  colorAqua: '#29ceff',
  colorAquaRgb: '41, 206, 255',
  colorAquaContrast: '#000',
  colorAquaContrastRgb: '0, 0, 0',
  colorPaleAqua: '#43e4ff',
  colorPaleAquaRgb: '67, 228, 255',
  colorPaleAquaContrast: '#000',
  colorPaleAquaContrastRgb: '0, 0, 0',
  colorArcticBlue: '#0b8eac',
  colorArcticBlueRgb: '11, 142, 172',
  colorArcticBlueContrast: '#000',
  colorArcticBlueContrastRgb: '0, 0, 0',
  colorSapphire: '#0974a9',
  colorSapphireRgb: '9, 116, 169',
  colorSapphireContrast: '#000',
  colorSapphireContrastRgb: '0, 0, 0',
  colorPacificBlue: '#1fb8db',
  colorPacificBlueRgb: '31, 184, 219',
  colorPacificBlueContrast: '#000',
  colorPacificBlueContrastRgb: '0, 0, 0',
  colorLightBlue: '#9edbfa',
  colorLightBlueRgb: '158, 219, 250',
  colorLightBlueContrast: '#000',
  colorLightBlueContrastRgb: '0, 0, 0',
  colorLightCyan: '#b8f5f8',
  colorLightCyanRgb: '184, 245, 248',
  colorLightCyanContrast: '#000',
  colorLightCyanContrastRgb: '0, 0, 0',
  colorMint: '#84e0b6',
  colorMintRgb: '132, 224, 182',
  colorMintContrast: '#000',
  colorMintContrastRgb: '0, 0, 0',
  colorAquamarine: '#2fd6c3',
  colorAquamarineRgb: '47, 214, 195',
  colorAquamarineContrast: '#000',
  colorAquamarineContrastRgb: '0, 0, 0',
  colorPaleGreen: '#1ffbba',
  colorPaleGreenRgb: '31, 251, 186',
  colorPaleGreenContrast: '#000',
  colorPaleGreenContrastRgb: '0, 0, 0',
  colorEmerald: '#00a989',
  colorEmeraldRgb: '0, 169, 137',
  colorEmeraldContrast: '#000',
  colorEmeraldContrastRgb: '0, 0, 0',
  colorPaleEmerald: '#33c180',
  colorPaleEmeraldRgb: '51, 193, 128',
  colorPaleEmeraldContrast: '#000',
  colorPaleEmeraldContrastRgb: '0, 0, 0',
  colorLeafGreen: '#05854f',
  colorLeafGreenRgb: '5, 133, 79',
  colorLeafGreenContrast: '#000',
  colorLeafGreenContrastRgb: '0, 0, 0',
  colorSeaGreen: '#078374',
  colorSeaGreenRgb: '7, 131, 116',
  colorSeaGreenContrast: '#000',
  colorSeaGreenContrastRgb: '0, 0, 0',
  colorForestGreen: '#00645a',
  colorForestGreenRgb: '0, 100, 90',
  colorForestGreenContrast: '#000',
  colorForestGreenContrastRgb: '0, 0, 0',
  colorOlive: '#5bba36',
  colorOliveRgb: '91, 186, 54',
  colorOliveContrast: '#000',
  colorOliveContrastRgb: '0, 0, 0',
  colorLime: '#75da4d',
  colorLimeRgb: '117, 218, 77',
  colorLimeContrast: '#000',
  colorLimeContrastRgb: '0, 0, 0',
  colorAcidGreen: '#c9cc29',
  colorAcidGreenRgb: '201, 204, 41',
  colorAcidGreenContrast: '#000',
  colorAcidGreenContrastRgb: '0, 0, 0',
  colorYellowGreen: '#f0fe94',
  colorYellowGreenRgb: '240, 254, 148',
  colorYellowGreenContrast: '#000',
  colorYellowGreenContrastRgb: '0, 0, 0',
  colorCanaryYellow: '#fff200',
  colorCanaryYellowRgb: '255, 242, 0',
  colorCanaryYellowContrast: '#000',
  colorCanaryYellowContrastRgb: '0, 0, 0',
  colorPaleLemon: '#fde159',
  colorPaleLemonRgb: '253, 225, 89',
  colorPaleLemonContrast: '#000',
  colorPaleLemonContrastRgb: '0, 0, 0',
  colorYellow: '#fcdb1f',
  colorYellowRgb: '252, 219, 31',
  colorYellowContrast: '#000',
  colorYellowContrastRgb: '0, 0, 0',
  colorOrange: '#ffce00',
  colorOrangeRgb: '255, 206, 0',
  colorOrangeContrast: '#000',
  colorOrangeContrastRgb: '0, 0, 0',
  colorGoldenrod: '#ffb000',
  colorGoldenrodRgb: '255, 176, 0',
  colorGoldenrodContrast: '#000',
  colorGoldenrodContrastRgb: '0, 0, 0',
  colorAmber: '#ffc002',
  colorAmberRgb: '255, 192, 2',
  colorAmberContrast: '#000',
  colorAmberContrastRgb: '0, 0, 0',
  colorPaleAmber: '#ffb24d',
  colorPaleAmberRgb: '255, 178, 77',
  colorPaleAmberContrast: '#000',
  colorPaleAmberContrastRgb: '0, 0, 0',
  colorOrangeJuice: '#ff8000',
  colorOrangeJuiceRgb: '255, 128, 0',
  colorOrangeJuiceContrast: '#000',
  colorOrangeJuiceContrastRgb: '0, 0, 0',
  colorCopper: '#e57828',
  colorCopperRgb: '229, 120, 40',
  colorCopperContrast: '#000',
  colorCopperContrastRgb: '0, 0, 0',
  colorOchre: '#c16f00',
  colorOchreRgb: '193, 111, 0',
  colorOchreContrast: '#000',
  colorOchreContrastRgb: '0, 0, 0',
  colorGoldenBrown: '#8f6400',
  colorGoldenBrownRgb: '143, 100, 0',
  colorGoldenBrownContrast: '#000',
  colorGoldenBrownContrastRgb: '0, 0, 0',
  colorDarkOlive: '#766a23',
  colorDarkOliveRgb: '118, 106, 35',
  colorDarkOliveContrast: '#000',
  colorDarkOliveContrastRgb: '0, 0, 0',
  colorDarkGreen: '#576b1a',
  colorDarkGreenRgb: '87, 107, 26',
  colorDarkGreenContrast: '#000',
  colorDarkGreenContrastRgb: '0, 0, 0',
  colorAvocado: '#809900',
  colorAvocadoRgb: '128, 153, 0',
  colorAvocadoContrast: '#000',
  colorAvocadoContrastRgb: '0, 0, 0',
  colorOliveOil: '#a79425',
  colorOliveOilRgb: '167, 148, 37',
  colorOliveOilContrast: '#000',
  colorOliveOilContrastRgb: '0, 0, 0',
  colorCamel: '#b18953',
  colorCamelRgb: '177, 137, 83',
  colorCamelContrast: '#000',
  colorCamelContrastRgb: '0, 0, 0',
  colorKhaki: '#e9c699',
  colorKhakiRgb: '233, 198, 153',
  colorKhakiContrast: '#000',
  colorKhakiContrastRgb: '0, 0, 0',
  colorChampagne: '#fce7a6',
  colorChampagneRgb: '252, 231, 166',
  colorChampagneContrast: '#000',
  colorChampagneContrastRgb: '0, 0, 0',
  colorCitron: '#dbe599',
  colorCitronRgb: '219, 229, 153',
  colorCitronContrast: '#000',
  colorCitronContrastRgb: '0, 0, 0',
  colorWarmGray: '#787573',
  colorWarmGrayRgb: '120, 117, 115',
  colorWarmGrayContrast: '#000',
  colorWarmGrayContrastRgb: '0, 0, 0',
  colorCoolGray: '#737582',
  colorCoolGrayRgb: '115, 117, 130',
  colorCoolGrayContrast: '#000',
  colorCoolGrayContrastRgb: '0, 0, 0',
  applicationColor: props => {
    return `${resolveValue(props, props.theme.typographyColor)}`;
  },
  applicationColorRgb: props => {
    return `${resolveValue(props, props.theme.typographyColorRgb)}`;
  },
  applicationColorContrast: props => {
    return `${resolveValue(props, props.theme.typographyColorContrast)}`;
  },
  applicationColorContrastRgb: props => {
    return `${resolveValue(props, props.theme.typographyColorContrastRgb)}`;
  },
  applicationBackgroundColor: props => {
    return `${resolveValue(props, props.theme.elevationBackgroundColorBase)}`;
  },
  spacing2xs: '0.25rem',
  spacingXs: '0.5rem',
  spacingS: '0.75rem',
  spacingM: '1rem',
  spacingL: '1.25rem',
  spacingXl: '1.5rem',
  spacing2xl: '1.75rem',
  spacing3xl: '2rem',
  spacing4xl: '3rem',
  spacingXxs: '0.25rem',
  spacingXxl: '1.75rem',
  spacingXxl2: '2rem',
  typographyLinkOpacityHover: '1',
  typographyLinkBorderRadiusFocus: '2px',
  typographyLinkOutlineColorFocus: props => {
    return `${resolveValue(props, props.theme.colorPrimaryHover)}`;
  },
  typographyLinkOutlineOffsetFocus: '0',
  typographyLinkTextDecorationHover: 'underline',
  typographyFontFamily: 'Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif',
  typographyFontFamilyRoboto: '"Roboto", "Helvetica Neue", Helvetica, Arial, sans-serif',
  typographyFontFamilyZhHans: '"Noto Sans SC", SimSun, sans-serif',
  typographyFontFamilyJa: '"Noto Sans JP", Meiro, "Hiragino Kaku Gothic ProN", "ProN W3",\n    sans-serif',
  typographyFontFamilyKo: '"Noto Sans KR", "Malgun Gothic", Gulim, Arial, sans-serif',
  typographyFontSizeXsmall: '0.625rem',
  typographyFontSizeSmall: '0.75rem',
  typographyFontSize: '0.875rem',
  typographyFontSizeLarge: '1rem',
  typographyFontSizeXlarge: '1.125rem',
  typographyFontWeightThin: '200',
  typographyFontWeightLight: '300',
  typographyFontWeightRegular: '400',
  typographyFontWeightMedium: '500',
  typographyFontWeightSemibold: '600',
  typographyFontWeightBold: '700',
  typographyFontWeightBlack: '900',
  typographyColorHighEmphasis: props => {
    return `${resolveValue(props, props.theme.colorBlack)}`;
  },
  typographyColorHighEmphasisRgb: props => {
    return `${resolveValue(props, props.theme.colorBlackRgb)}`;
  },
  typographyColorHighEmphasisContrast: props => {
    return `${resolveValue(props, props.theme.colorBlackContrast)}`;
  },
  typographyColorHighEmphasisContrastRgb: props => {
    return `${resolveValue(props, props.theme.colorBlackContrastRgb)}`;
  },
  typographyColorBody: props => {
    return `${resolveValue(props, props.theme.jatoTypographyTextColorPrimary)}`;
  },
  typographyColorBodyRgb: props => {
    return `${resolveValue(props, props.theme.colorGray90Rgb)}`;
  },
  typographyColorBodyContrast: props => {
    return `${resolveValue(props, props.theme.colorGray90Contrast)}`;
  },
  typographyColorBodyContrastRgb: props => {
    return `${resolveValue(props, props.theme.colorGray90ContrastRgb)}`;
  },
  typographyColorSecondary: props => {
    return `${resolveValue(props, props.theme.jatoTypographyTextColorSecondary)}`;
  },
  typographyColorSecondaryRgb: props => {
    return `${resolveValue(props, props.theme.colorGray80Rgb)}`;
  },
  typographyColorSecondaryContrast: props => {
    return `${resolveValue(props, props.theme.colorGray80Contrast)}`;
  },
  typographyColorSecondaryContrastRgb: props => {
    return `${resolveValue(props, props.theme.colorGray80ContrastRgb)}`;
  },
  typographyColorTertiary: props => {
    return `${resolveValue(props, props.theme.jatoTypographyTextColorTertiary)}`;
  },
  typographyColorTertiaryRgb: props => {
    return `${resolveValue(props, props.theme.colorGray75Rgb)}`;
  },
  typographyColorTertiaryContrast: props => {
    return `${resolveValue(props, props.theme.colorGray75Contrast)}`;
  },
  typographyColorTertiaryContrastRgb: props => {
    return `${resolveValue(props, props.theme.colorGray75ContrastRgb)}`;
  },
  typographyColorLightest: props => {
    return `${resolveValue(props, props.theme.colorGray70)}`;
  },
  typographyColorLightestRgb: props => {
    return `${resolveValue(props, props.theme.colorGray70Rgb)}`;
  },
  typographyColorLightestContrast: props => {
    return `${resolveValue(props, props.theme.colorGray70Contrast)}`;
  },
  typographyColorLightestContrastRgb: props => {
    return `${resolveValue(props, props.theme.colorGray70ContrastRgb)}`;
  },
  typographyColorPlaceholder: 'rgba(0, 0, 0, 0.55)',
  typographyColorPlaceholderRgb: '0, 0, 0',
  typographyColorPlaceholderContrast: '#fff',
  typographyColorPlaceholderContrastRgb: '255, 255, 255',
  typographyColorDisabled: props => {
    return `${resolveValue(props, props.theme.jatoTypographyTextColorDisabled)}`;
  },
  typographyColorDisabledRgb: '0, 0, 0',
  typographyColorDisabledContrast: '#fff',
  typographyColorDisabledContrastRgb: '255, 255, 255',
  typographyColorLink: props => {
    return `${resolveValue(props, props.theme.colorPrimary)}`;
  },
  typographyColorLinkRgb: props => {
    return `${resolveValue(props, props.theme.colorPrimaryRgb)}`;
  },
  typographyColorLinkContrast: props => {
    return `${resolveValue(props, props.theme.colorPrimaryContrast)}`;
  },
  typographyColorLinkContrastRgb: props => {
    return `${resolveValue(props, props.theme.colorPrimaryContrastRgb)}`;
  },
  typographyColorLinkHover: props => {
    return `${resolveValue(props, props.theme.colorPrimaryHover)}`;
  },
  typographyColorLinkFocus: props => {
    return `${resolveValue(props, props.theme.colorPrimary)}`;
  },
  typographyColorLinkActive: props => {
    return `${resolveValue(props, props.theme.colorPrimaryActive)}`;
  },
  typographyColorLinkVisited: props => {
    return `${resolveValue(props, props.theme.typographyColorLink)}`;
  },
  typographyColor: props => {
    return `${resolveValue(props, props.theme.typographyColorBody)}`;
  },
  typographyColorRgb: props => {
    return `${resolveValue(props, props.theme.typographyColorBodyRgb)}`;
  },
  typographyColorContrast: props => {
    return `${resolveValue(props, props.theme.typographyColorBodyContrast)}`;
  },
  typographyColorContrastRgb: props => {
    return `${resolveValue(props, props.theme.typographyColorBodyContrastRgb)}`;
  },
  typographyHeading1FontSize: '2.5rem',
  typographyHeading1FontWeight: props => {
    return `${resolveValue(props, props.theme.typographyFontWeightMedium)}`;
  },
  typographyHeading1Color: props => {
    return `${resolveValue(props, props.theme.typographyColorHighEmphasis)}`;
  },
  typographyHeading1TextTransform: 'none',
  typographyHeading1LineHeight: '2.75rem',
  typographyHeading2FontSize: '1.875rem',
  typographyHeading2FontWeight: props => {
    return `${resolveValue(props, props.theme.typographyFontWeightMedium)}`;
  },
  typographyHeading2Color: props => {
    return `${resolveValue(props, props.theme.typographyColorHighEmphasis)}`;
  },
  typographyHeading2TextTransform: 'none',
  typographyHeading2LineHeight: '2.125rem',
  typographyHeading3FontSize: '1.5rem',
  typographyHeading3FontWeight: props => {
    return `${resolveValue(props, props.theme.typographyFontWeightMedium)}`;
  },
  typographyHeading3Color: props => {
    return `${resolveValue(props, props.theme.typographyColorHighEmphasis)}`;
  },
  typographyHeading3TextTransform: 'none',
  typographyHeading3LineHeight: '1.75rem',
  typographyHeading4FontSize: '1.25rem',
  typographyHeading4FontWeight: props => {
    return `${resolveValue(props, props.theme.typographyFontWeightMedium)}`;
  },
  typographyHeading4Color: props => {
    return `${resolveValue(props, props.theme.typographyColorHighEmphasis)}`;
  },
  typographyHeading4TextTransform: 'none',
  typographyHeading4LineHeight: '1.5rem',
  typographyHeading5FontSize: '1.125rem',
  typographyHeading5FontWeight: props => {
    return `${resolveValue(props, props.theme.typographyFontWeightMedium)}`;
  },
  typographyHeading5Color: props => {
    return `${resolveValue(props, props.theme.typographyColorHighEmphasis)}`;
  },
  typographyHeading5TextTransform: 'none',
  typographyHeading5LineHeight: '1.375rem',
  typographyHeading6FontSize: '1rem',
  typographyHeading6FontWeight: props => {
    return `${resolveValue(props, props.theme.typographyFontWeightMedium)}`;
  },
  typographyHeading6Color: props => {
    return `${resolveValue(props, props.theme.typographyColorHighEmphasis)}`;
  },
  typographyHeading6TextTransform: 'none',
  typographyHeading6LineHeight: '1.25rem',
  typographyBodyFontSize: props => {
    return `${resolveValue(props, props.theme.typographyFontSize)}`;
  },
  typographyBodyFontWeight: props => {
    return `${resolveValue(props, props.theme.typographyFontWeightRegular)}`;
  },
  typographyBodyColor: props => {
    return `${resolveValue(props, props.theme.typographyColorBody)}`;
  },
  typographyBodyTextTransform: 'none',
  typographyBodyLineHeight: '1.125rem',
  typographyBodyLargeFontSize: props => {
    return `${resolveValue(props, props.theme.typographyFontSizeLarge)}`;
  },
  typographyBodyLargeFontWeight: props => {
    return `${resolveValue(props, props.theme.typographyFontWeightRegular)}`;
  },
  typographyBodyLargeColor: props => {
    return `${resolveValue(props, props.theme.typographyColorBody)}`;
  },
  typographyBodyLargeTextTransform: 'none',
  typographyBodyLargeLineHeight: '1.25rem',
  typographyBodySmallFontSize: props => {
    return `${resolveValue(props, props.theme.typographyFontSizeSmall)}`;
  },
  typographyBodySmallFontWeight: props => {
    return `${resolveValue(props, props.theme.typographyFontWeightRegular)}`;
  },
  typographyBodySmallColor: props => {
    return `${resolveValue(props, props.theme.typographyColorBody)}`;
  },
  typographyBodySmallTextTransform: 'none',
  typographyBodySmallLineHeight: '1rem',
  typographyLinkFontSize: 'inherit',
  typographyLinkFontWeight: '700',
  typographyLinkColor: props => {
    return `${resolveValue(props, props.theme.jatoCtaLinksTextColorNeutral)}`;
  },
  typographyLinkTextTransform: 'none',
  typographyLinkLineHeight: '1.125rem',
  typographyLinkTextDecoration: 'none',
  typographyLinkColorHover: props => {
    return `${resolveValue(props, props.theme.jatoCtaLinksTextColorHover)}`;
  },
  typographyLinkColorActive: props => {
    return `${resolveValue(props, props.theme.jatoCtaLinksTextColorActive)}`;
  },
  typographyLinkColorVisited: props => {
    return `${resolveValue(props, props.theme.jatoCtaLinksTextColorVisitedNeutral)}`;
  },
  typographyLinkColorFocus: props => {
    return `${resolveValue(props, props.theme.typographyColorLinkFocus)}`;
  },
  typographyLabelFontSize: props => {
    return `${resolveValue(props, props.theme.typographyFontSizeSmall)}`;
  },
  typographyLabelFontWeight: props => {
    return `${resolveValue(props, props.theme.typographyFontWeightRegular)}`;
  },
  typographyLabelColor: props => {
    return `${resolveValue(props, props.theme.jatoTypographyFormsTextColorLabel)}`;
  },
  typographyLabelTextTransform: 'none',
  typographyLabelLineHeight: '1.125rem',
  focusOutlineColor: props => {
    return `${resolveValue(props, props.theme.jatoCtaFocusBorder)}`;
  },
  focusOutlineOffset: '2px',
  focusOutlineWidth: '2px',
  focusOutlineStyle: 'solid',
  focusIndicatorBoxShadow: props => {
    return `0 0 0 1px ${resolveValue(props, props.theme.elevationBackgroundColor)},
    0 0 0 3px ${resolveValue(props, props.theme.focusOutlineColor)}, 0 0 0 4px ${resolveValue(props, props.theme.elevationBackgroundColor)}`;
  },
  focusIndicatorOutline: props => {
    return `${resolveValue(props, props.theme.focusOutlineWidth)} ${resolveValue(props, props.theme.focusOutlineStyle)}
    ${resolveValue(props, props.theme.focusOutlineColor)}`;
  },
  overlayZIndex: '1000',
  elevationBackgroundColorBase: props => {
    return `${resolveValue(props, props.theme.jatoBackgroundElevationBase)}`;
  },
  elevationBoxShadowBase: 'none',
  elevationBorderColorBase: 'transparent',
  elevationBackgroundColor1: props => {
    return `${resolveValue(props, props.theme.jatoBackgroundElevationLevel1)}`;
  },
  elevationBoxShadowColor1: props => {
    return `${resolveValue(props, props.theme.jatoElevationShadowColorLevel1)}`;
  },
  elevationBoxShadow1: props => {
    return `0 2px 6px ${resolveValue(props, props.theme.elevationBoxShadowColor1)}`;
  },
  elevationBorderColor1: 'rgba(0, 0, 0, 0.1)',
  elevationBackgroundColor2: props => {
    return `${resolveValue(props, props.theme.jatoBackgroundElevationLevel2)}`;
  },
  elevationBoxShadowColor2: props => {
    return `${resolveValue(props, props.theme.jatoElevationShadowColorLevel2)}`;
  },
  elevationBoxShadow2: props => {
    return `0 2px 4px ${resolveValue(props, props.theme.elevationBoxShadowColor2)}`;
  },
  elevationBorderColor2: props => {
    return `${resolveValue(props, props.theme.elevationBorderColor1)}`;
  },
  elevationBackgroundColor3: props => {
    return `${resolveValue(props, props.theme.jatoBackgroundElevationLevel3)}`;
  },
  elevationBoxShadowColor3: props => {
    return `${resolveValue(props, props.theme.jatoElevationShadowColorLevel3)}`;
  },
  elevationBoxShadow3: props => {
    return `0 6px 10px ${resolveValue(props, props.theme.elevationBoxShadowColor3)}`;
  },
  elevationBorderColor3: props => {
    return `${resolveValue(props, props.theme.jatoBorderColorPrimary)}`;
  },
  elevationBackgroundColor4: props => {
    return `${resolveValue(props, props.theme.jatoBackgroundElevationLevel4)}`;
  },
  elevationBoxShadowColor4: props => {
    return `${resolveValue(props, props.theme.jatoElevationShadowColorLevel4)}`;
  },
  elevationBoxShadow4: props => {
    return `0 12px 24px ${resolveValue(props, props.theme.elevationBoxShadowColor4)}`;
  },
  elevationBorderColor4: props => {
    return `${resolveValue(props, props.theme.elevationBorderColor1)}`;
  },
  elevationBackgroundColor: props => {
    return `${resolveValue(props, props.theme.elevationBackgroundColor1)}`;
  },
  elevationBoxShadow: props => {
    return `${resolveValue(props, props.theme.elevationBoxShadow1)}`;
  },
  elevationBorderColor: props => {
    return `${resolveValue(props, props.theme.elevationBorderColor1)}`;
  },
  productIconPaddingInline: '4px',
  productIconFontWeight: props => {
    return `${resolveValue(props, props.theme.typographyFontWeightBlack)}`;
  },
  typographyFontFamilyInter: '"Inter Variable", InterVariable, "Inter var", Inter,\n    sans-serif',
  typographyLinkColorVisitedHover: props => {
    return `${resolveValue(props, props.theme.jatoCtaLinksTextColorVisitedHover)}`;
  },
  typographyLinkColorVisitedActive: props => {
    return `${resolveValue(props, props.theme.jatoCtaLinksTextColorVisitedActive)}`;
  },
  typographyLinkColorDisabled: props => {
    return `${resolveValue(props, props.theme.jatoCtaLinksTextColorDisabled)}`;
  },
  accordionBorderWidth: '1px',
  accordionBorderStyle: 'solid',
  accordionBorderColor: props => {
    return `${resolveValue(props, props.theme.colorGray25)}`;
  },
  accordionHeaderGap: '10px',
  accordionHeaderFontWeight: props => {
    return `${resolveValue(props, props.theme.typographyFontWeightMedium)}`;
  },
  accordionHeaderFontSize: props => {
    return `${resolveValue(props, props.theme.typographyFontSize)}`;
  },
  accordionHeaderColor: props => {
    return `${resolveValue(props, props.theme.typographyColorHighEmphasis)}`;
  },
  accordionHeaderBackgroundColor: 'transparent',
  accordionHeaderBackgroundColorHover: props => {
    return `${resolveValue(props, props.theme.colorPrimaryFlatHover)}`;
  },
  accordionHeaderPaddingInline: '16px',
  accordionHeaderPaddingBlock: '16px',
  accordionHeaderBorderTopWidth: props => {
    return `${resolveValue(props, props.theme.accordionBorderWidth)}`;
  },
  accordionHeaderBorderTopStyle: props => {
    return `${resolveValue(props, props.theme.accordionBorderStyle)}`;
  },
  accordionHeaderBorderTopColor: props => {
    return `${resolveValue(props, props.theme.accordionBorderColor)}`;
  },
  accordionHeaderFocusOutlineOffset: '-2px',
  accordionIconTransform: 'rotate(0deg)',
  accordionIconTransformExpanded: 'rotate(180deg)',
  accordionIconSize: '1rem',
  accordionIconHeight: '1rem',
  accordionIconFill: props => {
    return `${resolveValue(props, props.theme.colorGray90)}`;
  },
  accordionContentPaddingBlock: '8px 16px',
  accordionContentPaddingInline: '16px 16px',
  accordionContentPaddingInlineLeadingIcon: props => {
    return `calc(
      16px + ${resolveValue(props, props.theme.accordionIconSize)} + ${resolveValue(props, props.theme.accordionHeaderGap)}
    )
    16px`;
  },
  alertFontSize: props => {
    return `${resolveValue(props, props.theme.typographyFontSizeSmall)}`;
  },
  alertFontWeight: props => {
    return `${resolveValue(props, props.theme.typographyFontWeightRegular)}`;
  },
  alertMinHeight: '24px',
  alertLineHeight: '16px',
  alertHeight: '24px',
  alertBorderWidth: '0',
  alertBorderStyle: 'solid',
  alertBorderColor: 'transparent',
  alertPaddingInline: '8px 8px',
  alertPaddingBlock: '4px 4px',
  alertBackgroundColorInfo: props => {
    return `${resolveValue(props, props.theme.colorStatusInfo)}`;
  },
  alertColorInfo: props => {
    return `${resolveValue(props, props.theme.colorWhite)}`;
  },
  alertBackgroundColorError: props => {
    return `${resolveValue(props, props.theme.colorStatusError)}`;
  },
  alertColorError: props => {
    return `${resolveValue(props, props.theme.colorWhite)}`;
  },
  alertBackgroundColorSuccess: props => {
    return `${resolveValue(props, props.theme.colorStatusSuccess)}`;
  },
  alertColorSuccess: props => {
    return `${resolveValue(props, props.theme.typographyColorHighEmphasis)}`;
  },
  alertBackgroundColorWarning: props => {
    return `${resolveValue(props, props.theme.colorStatusWarning)}`;
  },
  alertColorWarning: props => {
    return `${resolveValue(props, props.theme.typographyColorHighEmphasis)}`;
  },
  alertBackgroundColorDark: props => {
    return `${resolveValue(props, props.theme.colorGray80)}`;
  },
  alertColorDark: props => {
    return `${resolveValue(props, props.theme.colorWhite)}`;
  },
  alertIconWidth: '16px',
  alertIconHeight: '16px',
  alertIconFontSize: props => {
    return `${resolveValue(props, props.theme.alertIconWidth)}`;
  },
  alertIconMarginInlineEnd: '8px',
  alertDismissBorder: 'none',
  alertDismissBorderRadius: '2px',
  alertDismissBackgroundColor: 'transparent',
  alertDismissCursor: 'pointer',
  alertDismissPaddingInline: '0px',
  alertDismissPaddingBlock: '0px',
  alertDismissMinWidth: 'unset',
  alertDismissMarginInlineStart: '8px',
  alertDismissOutlineOffsetFocus: '0',
  alertLinkFontWeight: props => {
    return `${resolveValue(props, props.theme.typographyFontWeightBold)}`;
  },
  appLayoutGridTemplateColumns: 'auto 1fr',
  appLayoutGridTemplateRows: 'auto auto 1fr',
  appLayoutHeight: '100vh',
  appLayoutAlertsGridColumn: '1 / 3',
  appLayoutMastheadGridColumn: '1 / 3',
  appLayoutSideMenuGridColumn: '1 / 2',
  appLayoutMainContentGridColumn: '2 / 3',
  appLayoutOverflowX: 'hidden',
  appLayoutOverflowY: 'auto',
  appContentLayoutHeight: '100%',
  avatarBorderRadius: '50%',
  avatarColor: props => {
    return `${resolveValue(props, props.theme.jatoAvatarTextColor)}`;
  },
  avatarBorderColorHover: props => {
    return `${resolveValue(props, props.theme.jatoAvatarBorderColorHover)}`;
  },
  avatarBorderColorActive: props => {
    return `${resolveValue(props, props.theme.jatoAvatarBorderColorActive)}`;
  },
  avatarBorderColorBordered: '#fff',
  avatarOutlineFocused: props => {
    return `${resolveValue(props, props.theme.focusOutlineWidth)} ${resolveValue(props, props.theme.focusOutlineStyle)}
    ${resolveValue(props, props.theme.focusOutlineColor)}`;
  },
  avatarOutlineOffsetFocused: props => {
    return `${resolveValue(props, props.theme.focusOutlineOffset)}`;
  },
  avatarSizeXs: '18px',
  avatarFontSizeXs: '11px',
  avatarLineHeightXs: '11px',
  avatarFontWeightXs: '500',
  avatarBorderWidthXs: '1.5px',
  avatarSizeSm: '24px',
  avatarFontSizeSm: '11px',
  avatarLineHeightSm: '15px',
  avatarFontWeightSm: '500',
  avatarBorderWidthSm: '1.5px',
  avatarSizeMd: '32px',
  avatarFontSizeMd: '13px',
  avatarLineHeightMd: '15.73px',
  avatarFontWeightMd: '450',
  avatarBorderWidthMd: '2px',
  avatarSizeLg: '48px',
  avatarFontSizeLg: '18px',
  avatarLineHeightLg: '21.78px',
  avatarFontWeightLg: '400',
  avatarBorderWidthLg: '2px',
  breadcrumbsDisplay: 'block',
  breadcrumbsMinHeight: 'none',
  breadcrumbColor: props => {
    return `${resolveValue(props, props.theme.jatoCtaLinksTextColorNeutral)}`;
  },
  breadcrumbFontWeight: '400',
  breadcrumbFontSize: '13px',
  breadcrumbGap: '0',
  breadcrumbTextDecoration: 'none',
  breadcrumbOutline: 'none',
  breadcrumbHeight: 'auto',
  breadcrumbWidth: 'auto',
  breadcrumbPaddingInline: 'unset',
  breadcrumbPaddingBlock: 'unset',
  breadcrumbBorderRadius: '1px',
  breadcrumbColorHover: props => {
    return `${resolveValue(props, props.theme.jatoCtaLinksTextColorHover)}`;
  },
  breadcrumbTextDecorationHover: 'underline',
  breadcrumbCursorHover: 'pointer',
  breadcrumbColorActive: props => {
    return `${resolveValue(props, props.theme.jatoCtaLinksTextColorActive)}`;
  },
  breadcrumbTextDecorationActive: 'none',
  breadcrumbCursorActive: 'pointer',
  breadcrumbColorCurrent: props => {
    return `${resolveValue(props, props.theme.jatoTypographyTextColorTertiary)}`;
  },
  breadcrumbFontWeightCurrent: '700',
  breadcrumbTextDecorationCurrent: 'none',
  breadcrumbCursorCurrent: 'default',
  breadcrumbOutlineOffsetFocus: '6px',
  breadcrumbOverflowButtonColor: props => {
    return `${resolveValue(props, props.theme.jatoCtaLinksTextColorNeutral)}`;
  },
  breadcrumbOverflowButtonColorHover: props => {
    return `${resolveValue(props, props.theme.jatoCtaLinksTextColorHover)}`;
  },
  breadcrumbOverflowButtonColorActive: props => {
    return `${resolveValue(props, props.theme.jatoCtaLinksTextColorActive)}`;
  },
  breadcrumbSeparatorWidth: '21px',
  breadcrumbSeparatorHeight: '24px',
  breadcrumbSeparatorFontSize: '16px',
  breadcrumbSeparatorColor: props => {
    return `${resolveValue(props, props.theme.jatoTypographyTextColorDisabled)}`;
  },
  breadcrumbSeparatorDisplay: 'inline-flex',
  breadcrumbFontSizeMasthead: '16px',
  breadcrumbColorMasthead: props => {
    return `${resolveValue(props, props.theme.colorWhite)}`;
  },
  breadcrumbColorMastheadHover: props => {
    return `${resolveValue(props, props.theme.colorWhite)}`;
  },
  breadcrumbColorMastheadCurrent: props => {
    return `${resolveValue(props, props.theme.colorWhite)}`;
  },
  breadcrumbSeparatorColorMasthead: props => {
    return `${resolveValue(props, props.theme.colorGray25)}`;
  },
  breadcrumbListColumnGap: '0',
  breadcrumbButtonColor: props => {
    return `${resolveValue(props, props.theme.jatoCtaLinksTextColorNeutral)}`;
  },
  breadcrumbButtonColorHover: props => {
    return `${resolveValue(props, props.theme.jatoCtaLinksTextColorHover)}`;
  },
  breadcrumbButtonColorActive: props => {
    return `${resolveValue(props, props.theme.jatoCtaLinksTextColorActive)}`;
  },
  breadcrumbButtonColorFocused: props => {
    return `${resolveValue(props, props.theme.jatoCtaLinksTextColorNeutral)}`;
  },
  breadcrumbCollapsedMenuItemsColor: props => {
    return `${resolveValue(props, props.theme.menuItemColor)}`;
  },
  breadcrumbCollapsedMenuItemsColorHover: props => {
    return `${resolveValue(props, props.theme.breadcrumbCollapsedMenuItemsColor)}`;
  },
  breadcrumbCollapsedMenuItemsColorActive: props => {
    return `${resolveValue(props, props.theme.breadcrumbCollapsedMenuItemsColor)}`;
  },
  buttonColumnGap: props => {
    return `${resolveValue(props, props.theme.jatoMarginSm)}`;
  },
  buttonFontSize: props => {
    return `${resolveValue(props, props.theme.typographyFontSize)}`;
  },
  buttonCursor: 'pointer',
  buttonHeight: props => {
    return `${resolveValue(props, props.theme.jatoSizeHeight32)}`;
  },
  buttonPaddingInline: props => {
    return `${resolveValue(props, props.theme.jatoPaddingXl)}`;
  },
  buttonPaddingBlock: '0rem',
  buttonFontWeight: props => {
    return `${resolveValue(props, props.theme.typographyFontWeightRegular)}`;
  },
  buttonTextTransform: 'none',
  buttonLineHeight: '20px',
  buttonBorderColor: props => {
    return `${resolveValue(props, props.theme.colorBlack)}`;
  },
  buttonBorderRadius: props => {
    return `${resolveValue(props, props.theme.jatoRadiiMed)}`;
  },
  buttonBorderWidth: '0.0625rem',
  buttonBorderStyle: 'solid',
  buttonMinWidth: 'unset',
  buttonBoxShadow: 'none',
  buttonTextAlign: 'center',
  buttonBoxSizing: 'border-box',
  buttonIconSize: '1rem',
  buttonCursorDisabled: 'default',
  buttonBoxShadowFocused: props => {
    return `${resolveValue(props, props.theme.focusIndicatorBoxShadow)}`;
  },
  buttonColorPrimary: props => {
    return `${resolveValue(props, props.theme.jatoCtaContentColorPrimary)}`;
  },
  buttonBackgroundColorPrimary: props => {
    return `${resolveValue(props, props.theme.jatoCtaBackgroundPrimaryNeutral)}`;
  },
  buttonBorderColorPrimary: 'transparent',
  buttonBorderWidthPrimary: '0.0625rem',
  buttonBorderStylePrimary: 'solid',
  buttonBoxShadowPrimaryHover: 'none',
  buttonBorderColorPrimaryHover: props => {
    return `${resolveValue(props, props.theme.buttonBorderColorPrimary)}`;
  },
  buttonColorPrimaryHover: props => {
    return `${resolveValue(props, props.theme.jatoCtaContentColorPrimary)}`;
  },
  buttonBackgroundColorPrimaryHover: props => {
    return `${resolveValue(props, props.theme.jatoCtaBackgroundPrimaryHover)}`;
  },
  buttonBoxShadowPrimaryActive: 'none',
  buttonBorderColorPrimaryActive: props => {
    return `${resolveValue(props, props.theme.jatoCtaBackgroundPrimaryActive)}`;
  },
  buttonColorPrimaryActive: props => {
    return `${resolveValue(props, props.theme.jatoCtaContentColorPrimary)}`;
  },
  buttonBackgroundColorPrimaryActive: props => {
    return `${resolveValue(props, props.theme.jatoCtaBackgroundPrimaryActive)}`;
  },
  buttonBoxShadowPrimaryFocused: props => {
    return `${resolveValue(props, props.theme.buttonBoxShadowFocused)}`;
  },
  buttonBorderColorPrimaryFocused: props => {
    return `${resolveValue(props, props.theme.buttonBorderColorPrimary)}`;
  },
  buttonColorPrimaryFocused: props => {
    return `${resolveValue(props, props.theme.buttonColorPrimary)}`;
  },
  buttonBackgroundColorPrimaryFocused: props => {
    return `${resolveValue(props, props.theme.jatoCtaBackgroundPrimaryNeutral)}`;
  },
  buttonColorPrimaryDisabled: props => {
    return `${resolveValue(props, props.theme.jatoCtaContentColorPrimaryDisabled)}`;
  },
  buttonBackgroundColorPrimaryDisabled: props => {
    return `${resolveValue(props, props.theme.jatoCtaBackgroundPrimaryDisabled)}`;
  },
  buttonBorderColorPrimaryDisabled: props => {
    return `${resolveValue(props, props.theme.buttonBorderColorPrimary)}`;
  },
  buttonColorSecondary: props => {
    return `${resolveValue(props, props.theme.jatoCtaContentColorSecondaryNeutral)}`;
  },
  buttonBackgroundColorSecondary: props => {
    return `${resolveValue(props, props.theme.jatoCtaBackgroundSecondaryNeutral)}`;
  },
  buttonBorderColorSecondary: props => {
    return `${resolveValue(props, props.theme.jatoCtaBorderColorSecondaryNeutral)}`;
  },
  buttonBorderWidthSecondary: '0.0625rem',
  buttonBorderStyleSecondary: 'solid',
  buttonBoxShadowSecondaryHover: 'none',
  buttonBorderColorSecondaryHover: props => {
    return `${resolveValue(props, props.theme.jatoCtaBorderColorSecondaryHover)}`;
  },
  buttonColorSecondaryHover: props => {
    return `${resolveValue(props, props.theme.jatoCtaBorderColorSecondaryHover)}`;
  },
  buttonBackgroundColorSecondaryHover: props => {
    return `${resolveValue(props, props.theme.jatoCtaBackgroundSecondaryHover)}`;
  },
  buttonBoxShadowSecondaryActive: 'none',
  buttonBorderColorSecondaryActive: props => {
    return `${resolveValue(props, props.theme.jatoCtaBorderColorSecondaryActive)}`;
  },
  buttonColorSecondaryActive: props => {
    return `${resolveValue(props, props.theme.jatoCtaBorderColorSecondaryActive)}`;
  },
  buttonBackgroundColorSecondaryActive: props => {
    return `${resolveValue(props, props.theme.jatoCtaBackgroundSecondaryActive)}`;
  },
  buttonBoxShadowSecondaryFocused: props => {
    return `${resolveValue(props, props.theme.buttonBoxShadowFocused)}`;
  },
  buttonBorderColorSecondaryFocused: props => {
    return `${resolveValue(props, props.theme.buttonBorderColorSecondary)}`;
  },
  buttonColorSecondaryFocused: props => {
    return `${resolveValue(props, props.theme.buttonColorSecondary)}`;
  },
  buttonBackgroundColorSecondaryFocused: props => {
    return `${resolveValue(props, props.theme.jatoCtaBackgroundSecondaryNeutral)}`;
  },
  buttonColorSecondaryDisabled: props => {
    return `${resolveValue(props, props.theme.jatoCtaContentColorSecondaryDisabled)}`;
  },
  buttonBackgroundColorSecondaryDisabled: props => {
    return `${resolveValue(props, props.theme.jatoCtaBackgroundSecondaryDisabled)}`;
  },
  buttonBorderColorSecondaryDisabled: props => {
    return `${resolveValue(props, props.theme.jatoCtaBorderColorSecondaryDisabled)}`;
  },
  buttonColorNegative: props => {
    return `${resolveValue(props, props.theme.colorWhite)}`;
  },
  buttonBackgroundColorNegative: props => {
    return `${resolveValue(props, props.theme.colorNegative)}`;
  },
  buttonBorderColorNegative: 'transparent',
  buttonBorderWidthNegative: '0.0625rem',
  buttonBorderStyleNegative: 'solid',
  buttonBoxShadowNegativeHover: 'none',
  buttonBorderColorNegativeHover: props => {
    return `${resolveValue(props, props.theme.buttonBorderColorNegative)}`;
  },
  buttonColorNegativeHover: props => {
    return `${resolveValue(props, props.theme.buttonColorNegative)}`;
  },
  buttonBackgroundColorNegativeHover: props => {
    return `${resolveValue(props, props.theme.colorNegativeHover)}`;
  },
  buttonBoxShadowNegativeActive: 'none',
  buttonBorderColorNegativeActive: props => {
    return `${resolveValue(props, props.theme.buttonBorderColorNegative)}`;
  },
  buttonColorNegativeActive: props => {
    return `${resolveValue(props, props.theme.buttonColorNegative)}`;
  },
  buttonBackgroundColorNegativeActive: props => {
    return `${resolveValue(props, props.theme.colorNegativeActive)}`;
  },
  buttonBoxShadowNegativeFocused: props => {
    return `${resolveValue(props, props.theme.buttonBoxShadowFocused)}`;
  },
  buttonBorderColorNegativeFocused: props => {
    return `${resolveValue(props, props.theme.buttonBorderColorNegative)}`;
  },
  buttonColorNegativeFocused: props => {
    return `${resolveValue(props, props.theme.buttonColorNegative)}`;
  },
  buttonBackgroundColorNegativeFocused: props => {
    return `${resolveValue(props, props.theme.colorNegativeFocus)}`;
  },
  buttonColorNegativeDisabled: props => {
    return `${resolveValue(props, props.theme.typographyColorDisabled)}`;
  },
  buttonBackgroundColorNegativeDisabled: props => {
    return `rgba(${resolveValue(props, props.theme.colorBlackRgb)}, 0.05)`;
  },
  buttonBorderColorNegativeDisabled: 'transparent',
  buttonHeightFlat: props => {
    return `${resolveValue(props, props.theme.buttonHeight)}`;
  },
  buttonFontSizeFlat: props => {
    return `${resolveValue(props, props.theme.buttonFontSize)}`;
  },
  buttonFontWeightFlat: props => {
    return `${resolveValue(props, props.theme.typographyFontWeightRegular)}`;
  },
  buttonTextTransformFlat: props => {
    return `${resolveValue(props, props.theme.buttonTextTransform)}`;
  },
  buttonLineHeightFlat: props => {
    return `${resolveValue(props, props.theme.buttonLineHeight)}`;
  },
  buttonPaddingInlineFlat: props => {
    return `${resolveValue(props, props.theme.buttonPaddingInline)}`;
  },
  buttonPaddingBlockFlat: '0',
  buttonBackgroundColorFlat: 'transparent',
  buttonBorderColorFlat: 'transparent',
  buttonBorderWidthFlat: props => {
    return `${resolveValue(props, props.theme.buttonBorderWidth)}`;
  },
  buttonBorderStyleFlat: props => {
    return `${resolveValue(props, props.theme.buttonBorderStyle)}`;
  },
  buttonBorderRadiusFlat: props => {
    return `${resolveValue(props, props.theme.buttonBorderRadius)}`;
  },
  buttonCursorFlat: props => {
    return `${resolveValue(props, props.theme.buttonCursor)}`;
  },
  buttonMinWidthFlat: props => {
    return `${resolveValue(props, props.theme.buttonMinWidth)}`;
  },
  buttonBackgroundColorFlatExpanded: props => {
    return `${resolveValue(props, props.theme.jatoCtaBackgroundTertiaryToggledNeutral)}`;
  },
  buttonBackgroundColorFlatExpandedHover: props => {
    return `${resolveValue(props, props.theme.jatoCtaBackgroundTertiaryToggledHover)}`;
  },
  buttonBackgroundColorFlatExpandedActive: props => {
    return `${resolveValue(props, props.theme.jatoCtaBackgroundTertiaryToggledActive)}`;
  },
  buttonColorFlatPrimary: props => {
    return `${resolveValue(props, props.theme.jatoCtaContentColorTertiary)}`;
  },
  buttonBackgroundColorFlatPrimary: props => {
    return `${resolveValue(props, props.theme.colorPrimaryFlat)}`;
  },
  buttonBorderColorFlatPrimary: 'transparent',
  buttonBorderWidthFlatPrimary: '0.0625rem',
  buttonBorderStyleFlatPrimary: 'solid',
  buttonBoxShadowFlatPrimaryHover: 'none',
  buttonBorderColorFlatPrimaryHover: props => {
    return `${resolveValue(props, props.theme.buttonBorderColorFlatPrimary)}`;
  },
  buttonColorFlatPrimaryHover: props => {
    return `${resolveValue(props, props.theme.buttonColorFlatPrimary)}`;
  },
  buttonBackgroundColorFlatPrimaryHover: props => {
    return `${resolveValue(props, props.theme.jatoCtaBackgroundTertiaryHover)}`;
  },
  buttonBoxShadowFlatPrimaryActive: 'none',
  buttonBorderColorFlatPrimaryActive: props => {
    return `${resolveValue(props, props.theme.buttonBorderColorFlatPrimary)}`;
  },
  buttonColorFlatPrimaryActive: props => {
    return `${resolveValue(props, props.theme.buttonColorFlatPrimary)}`;
  },
  buttonBackgroundColorFlatPrimaryActive: props => {
    return `${resolveValue(props, props.theme.jatoCtaBackgroundTertiaryActive)}`;
  },
  buttonColorFlatPrimaryDisabled: props => {
    return `${resolveValue(props, props.theme.jatoCtaContentColorTertiaryDisabled)}`;
  },
  buttonBackgroundColorFlatPrimaryDisabled: 'transparent',
  buttonBorderColorFlatPrimaryDisabled: 'transparent',
  buttonBoxShadowFlatPrimaryFocused: props => {
    return `${resolveValue(props, props.theme.buttonBoxShadowFocused)}`;
  },
  buttonBorderColorFlatPrimaryFocused: props => {
    return `${resolveValue(props, props.theme.buttonBorderColorFlatPrimary)}`;
  },
  buttonColorFlatPrimaryFocused: props => {
    return `${resolveValue(props, props.theme.buttonColorFlatPrimary)}`;
  },
  buttonBackgroundColorFlatPrimaryFocused: 'transparent',
  buttonColorFlatSecondary: props => {
    return `${resolveValue(props, props.theme.jatoCtaContentColorTertiary)}`;
  },
  buttonBackgroundColorFlatSecondary: 'transparent',
  buttonBorderColorFlatSecondary: 'transparent',
  buttonBorderWidthFlatSecondary: '0.0625rem',
  buttonBorderStyleFlatSecondary: 'solid',
  buttonFontWeightFlatSecondary: props => {
    return `${resolveValue(props, props.theme.typographyFontWeightRegular)}`;
  },
  buttonBoxShadowFlatSecondaryHover: 'none',
  buttonBorderColorFlatSecondaryHover: 'transparent',
  buttonColorFlatSecondaryHover: props => {
    return `${resolveValue(props, props.theme.buttonColorFlatSecondary)}`;
  },
  buttonBackgroundColorFlatSecondaryHover: props => {
    return `${resolveValue(props, props.theme.jatoCtaBackgroundTertiaryHover)}`;
  },
  buttonBoxShadowFlatSecondaryActive: 'none',
  buttonBorderColorFlatSecondaryActive: 'transparent',
  buttonColorFlatSecondaryActive: props => {
    return `${resolveValue(props, props.theme.buttonColorFlatSecondary)}`;
  },
  buttonBackgroundColorFlatSecondaryActive: props => {
    return `${resolveValue(props, props.theme.jatoCtaBackgroundTertiaryActive)}`;
  },
  buttonColorFlatSecondaryDisabled: props => {
    return `${resolveValue(props, props.theme.jatoCtaContentColorTertiaryDisabled)}`;
  },
  buttonBackgroundColorFlatSecondaryDisabled: 'transparent',
  buttonBorderColorFlatSecondaryDisabled: 'transparent',
  buttonBoxShadowFlatSecondaryFocused: props => {
    return `${resolveValue(props, props.theme.buttonBoxShadowFocused)}`;
  },
  buttonBorderColorFlatSecondaryFocused: props => {
    return `${resolveValue(props, props.theme.buttonBorderColorFlatSecondary)}`;
  },
  buttonColorFlatSecondaryFocused: props => {
    return `${resolveValue(props, props.theme.buttonColorFlatSecondary)}`;
  },
  buttonBackgroundColorFlatSecondaryFocused: 'transparent',
  buttonColorFlatNegative: props => {
    return `${resolveValue(props, props.theme.colorNegative)}`;
  },
  buttonBackgroundColorFlatNegative: props => {
    return `${resolveValue(props, props.theme.colorNegativeFlat)}`;
  },
  buttonBorderColorFlatNegative: props => {
    return `${resolveValue(props, props.theme.buttonBackgroundColorFlatNegative)}`;
  },
  buttonBorderWidthFlatNegative: '0.0625rem',
  buttonBorderStyleFlatNegative: 'solid',
  buttonBoxShadowFlatNegativeHover: 'none',
  buttonBorderColorFlatNegativeHover: props => {
    return `${resolveValue(props, props.theme.buttonBorderColorFlatNegative)}`;
  },
  buttonColorFlatNegativeHover: props => {
    return `${resolveValue(props, props.theme.buttonColorFlatNegative)}`;
  },
  buttonBackgroundColorFlatNegativeHover: props => {
    return `${resolveValue(props, props.theme.colorNegativeFlatHover)}`;
  },
  buttonBoxShadowFlatNegativeActive: 'none',
  buttonBorderColorFlatNegativeActive: props => {
    return `${resolveValue(props, props.theme.buttonBorderColorFlatNegative)}`;
  },
  buttonColorFlatNegativeActive: props => {
    return `${resolveValue(props, props.theme.buttonColorFlatNegative)}`;
  },
  buttonBackgroundColorFlatNegativeActive: props => {
    return `${resolveValue(props, props.theme.colorNegativeFlatActive)}`;
  },
  buttonColorFlatNegativeDisabled: props => {
    return `${resolveValue(props, props.theme.typographyColorDisabled)}`;
  },
  buttonBackgroundColorFlatNegativeDisabled: 'transparent',
  buttonBorderColorFlatNegativeDisabled: props => {
    return `${resolveValue(props, props.theme.buttonBackgroundColorFlatNegativeDisabled)}`;
  },
  buttonBoxShadowFlatNegativeFocused: props => {
    return `${resolveValue(props, props.theme.buttonBoxShadowFocused)}`;
  },
  buttonBorderColorFlatNegativeFocused: props => {
    return `${resolveValue(props, props.theme.buttonBorderColorFlatNegative)}`;
  },
  buttonColorFlatNegativeFocused: props => {
    return `${resolveValue(props, props.theme.buttonColorFlatNegative)}`;
  },
  buttonBackgroundColorFlatNegativeFocused: props => {
    return `${resolveValue(props, props.theme.colorNegativeFlatFocus)}`;
  },
  buttonColumnGapSmall: props => {
    return `${resolveValue(props, props.theme.buttonColumnGap)}`;
  },
  buttonHeightSmall: props => {
    return `${resolveValue(props, props.theme.jatoSizeHeight24)}`;
  },
  buttonMinWidthSmall: 'unset',
  buttonBorderRadiusSmall: props => {
    return `${resolveValue(props, props.theme.jatoRadiiSm)}`;
  },
  buttonPaddingInlineSmall: props => {
    return `${resolveValue(props, props.theme.jatoPaddingLrg)}`;
  },
  buttonPaddingBlockSmall: '0',
  buttonFontSizeSmall: props => {
    return `${resolveValue(props, props.theme.typographyFontSizeSmall)}`;
  },
  buttonPaddingInlineFlatSmall: props => {
    return `${resolveValue(props, props.theme.buttonPaddingInlineSmall)}`;
  },
  buttonPaddingBlockFlatSmall: '0',
  buttonColumnGapLarge: props => {
    return `${resolveValue(props, props.theme.buttonColumnGap)}`;
  },
  buttonHeightLarge: props => {
    return `${resolveValue(props, props.theme.jatoSizeHeight40)}`;
  },
  buttonMinWidthLarge: 'unset',
  buttonBorderRadiusLarge: props => {
    return `${resolveValue(props, props.theme.buttonBorderRadius)}`;
  },
  buttonPaddingInlineLarge: props => {
    return `${resolveValue(props, props.theme.jatoPaddingXxl)}`;
  },
  buttonPaddingBlockLarge: '0',
  buttonFontSizeLarge: '1rem',
  buttonPaddingInlineFlatLarge: props => {
    return `${resolveValue(props, props.theme.buttonPaddingInlineLarge)}`;
  },
  buttonPaddingBlockFlatLarge: '0',
  buttonBackgroundColorFlatToggled: props => {
    return `${resolveValue(props, props.theme.jatoCtaBackgroundTertiaryToggledNeutral)}`;
  },
  buttonBackgroundColorFlatToggledHover: props => {
    return `color-mix(
    in srgb,
    ${resolveValue(props, props.theme.jatoCtaBackgroundTertiaryToggledNeutral)} 90%,
    rgba(0, 0, 0, 255)
  )`;
  },
  buttonBackgroundColorFlatToggledActive: props => {
    return `color-mix(
    in srgb,
    ${resolveValue(props, props.theme.jatoCtaBackgroundTertiaryToggledNeutral)} 85%,
    rgba(0, 0, 0, 255)
  )`;
  },
  buttonBackgroundColorFlatToggledFocused: props => {
    return `${resolveValue(props, props.theme.jatoCtaBackgroundTertiaryToggledNeutral)}`;
  },
  cardGap: '12px',
  cardPaddingBlock: '16px',
  cardPaddingInline: '16px',
  cardBorderRadius: '12px',
  cardBackgroundColor: props => {
    return `${resolveValue(props, props.theme.jatoBackgroundElevationLevel2)}`;
  },
  cardBoxShadow: props => {
    return `0 0 0 1px ${resolveValue(props, props.theme.jatoBorderColorPrimary)},
    0 2px 4px ${resolveValue(props, props.theme.jatoElevationShadowColorLevel2)}`;
  },
  cardOutlineFocus: props => {
    return `2px solid ${resolveValue(props, props.theme.jatoCtaFocusBorder)}`;
  },
  cardOutlineOffsetFocus: '2px',
  cardBoxShadowBasicHover: props => {
    return `0 0 0 2px ${resolveValue(props, props.theme.jatoBorderColorPrimaryHover)},
    0 2px 4px ${resolveValue(props, props.theme.jatoElevationShadowColorLevel2)}`;
  },
  cardBoxShadowBasicActive: props => {
    return `0 0 0 2px ${resolveValue(props, props.theme.jatoBackgroundRowsActive)}`;
  },
  cardBoxShadowThumbnailActive: props => {
    return `0 0 0 2px ${resolveValue(props, props.theme.jatoColorElectric4705)}`;
  },
  cardBoxShadowPreviewActive: props => {
    return `0 0 0 2px ${resolveValue(props, props.theme.jatoBorderColorPrimaryActive)},
    0 2px 4px ${resolveValue(props, props.theme.jatoElevationShadowColorLevel2)}`;
  },
  cardImageWidth: props => {
    return `calc(100% + calc(${resolveValue(props, props.theme.cardPaddingInline)} * 2))`;
  },
  cardImageHeight: '274px',
  cardImageMarginInline: props => {
    return `calc(${resolveValue(props, props.theme.cardPaddingInline)} * -1)`;
  },
  cardImageMarginBlockStart: props => {
    return `calc(${resolveValue(props, props.theme.cardPaddingBlock)} * -1)`;
  },
  cardImageMarginBlockEnd: '4px',
  cardHeaderGap: '8px',
  cardTitleFontSize: '18px',
  cardTitleFontWeight: '600',
  cardTitleLineHeight: '24px',
  cardTitleColor: props => {
    return `${resolveValue(props, props.theme.jatoTypographyTextColorPrimary)}`;
  },
  cardTitleFontWeightThumbnail: '500',
  cardTitleFontSizeThumbnail: '24px',
  cardTitleLineHeightThumbnail: '29px',
  cardSubtitleFontSize: '11px',
  cardSubtitleFontWeight: '500',
  cardSubtitleLineHeight: '16px',
  cardSubtitleColor: props => {
    return `${resolveValue(props, props.theme.jatoTypographyTextColorTertiary)}`;
  },
  cardBodyGap: '12px',
  cardAvatarSize: '40px',
  cardThumbnailSize: '72px',
  cardChipListGap: '8px',
  cardContentFontSize: '13px',
  cardContentFontWeight: '400',
  cardContentLineHeight: '18px',
  cardContentColor: props => {
    return `${resolveValue(props, props.theme.jatoTypographyTextColorPrimary)}`;
  },
  cardContentFontSizeSmall: '12px',
  cardContentColorSmall: props => {
    return `${resolveValue(props, props.theme.jatoTypographyTextColorTertiary)}`;
  },
  cardFooterGapStacked: '4px',
  cardFooterLeadingGap: '8px',
  cardFooterTrailingGap: '12px',
  checkboxWidth: '14px',
  checkboxHeight: props => {
    return `${resolveValue(props, props.theme.checkboxWidth)}`;
  },
  checkboxBorderStyle: 'solid',
  checkboxBorderWidth: '1px',
  checkboxBorderColor: props => {
    return `${resolveValue(props, props.theme.jatoControlBorderPrimaryNeutral)}`;
  },
  checkboxBorderRadius: '3px',
  checkboxCursor: 'pointer',
  checkboxBackgroundColor: props => {
    return `${resolveValue(props, props.theme.jatoControlBackgroundPrimaryNeutral)}`;
  },
  checkboxMarginBlock: '2px',
  checkboxBackgroundColorHover: props => {
    return `${resolveValue(props, props.theme.jatoControlBackgroundPrimaryHover)}`;
  },
  checkboxBorderColorHover: props => {
    return `${resolveValue(props, props.theme.jatoControlBorderPrimaryHover)}`;
  },
  checkboxBackgroundColorFocused: 'transparent',
  checkboxBackgroundColorActive: props => {
    return `${resolveValue(props, props.theme.jatoControlBackgroundPrimaryActive)}`;
  },
  checkboxBorderColorActive: props => {
    return `${resolveValue(props, props.theme.jatoControlBorderPrimaryActive)}`;
  },
  checkboxBackgroundColorChecked: props => {
    return `${resolveValue(props, props.theme.jatoControlBorderPrimarySelectedNeutral)}`;
  },
  checkboxBorderColorChecked: props => {
    return `${resolveValue(props, props.theme.checkboxBackgroundColorChecked)}`;
  },
  checkboxBorderWidthChecked: '0',
  checkboxBackgroundColorCheckedHover: props => {
    return `${resolveValue(props, props.theme.jatoControlBorderPrimarySelectedHover)}`;
  },
  checkboxBackgroundColorCheckedActive: props => {
    return `${resolveValue(props, props.theme.jatoControlBorderPrimarySelectedActive)}`;
  },
  checkboxBackgroundColorIndeterminate: props => {
    return `${resolveValue(props, props.theme.checkboxBackgroundColorChecked)}`;
  },
  checkboxBorderColorIndeterminate: props => {
    return `${resolveValue(props, props.theme.checkboxBorderColorChecked)}`;
  },
  checkboxBorderWidthIndeterminate: '0',
  checkboxBackgroundColorIndeterminateHover: props => {
    return `${resolveValue(props, props.theme.checkboxBackgroundColorCheckedHover)}`;
  },
  checkboxBackgroundColorIndeterminateActive: props => {
    return `${resolveValue(props, props.theme.checkboxBackgroundColorCheckedActive)}`;
  },
  checkboxCursorReadonly: 'default',
  checkboxBackgroundColorReadonly: props => {
    return `${resolveValue(props, props.theme.jatoControlBorderReadOnlyNeutral)}`;
  },
  checkboxBorderColorReadonly: props => {
    return `${resolveValue(props, props.theme.jatoControlBorderReadOnlyNeutral)}`;
  },
  checkboxBackgroundColorReadonlyChecked: props => {
    return `${resolveValue(props, props.theme.checkboxBackgroundColorReadonly)}`;
  },
  checkboxBorderColorReadonlyChecked: props => {
    return `${resolveValue(props, props.theme.checkboxBorderColorReadonly)}`;
  },
  checkboxBackgroundColorDisabled: props => {
    return `${resolveValue(props, props.theme.jatoControlBackgroundPrimaryDisabled)}`;
  },
  checkboxBorderColorDisabled: props => {
    return `${resolveValue(props, props.theme.jatoControlBorderPrimaryDisabled)}`;
  },
  checkboxCursorDisabled: 'default',
  checkboxBackgroundColorCheckedDisabled: props => {
    return `${resolveValue(props, props.theme.jatoControlBackgroundPrimarySelectedDisabled)}`;
  },
  checkboxBorderColorCheckedDisabled: props => {
    return `${resolveValue(props, props.theme.jatoControlBorderPrimarySelectedDisabled)}`;
  },
  checkboxBackgroundColorIndeterminateDisabled: props => {
    return `${resolveValue(props, props.theme.checkboxBackgroundColorCheckedDisabled)}`;
  },
  checkboxBorderColorIndeterminateDisabled: props => {
    return `${resolveValue(props, props.theme.checkboxBackgroundColorCheckedDisabled)}`;
  },
  checkboxLabelColor: props => {
    return `${resolveValue(props, props.theme.jatoTypographyTextColorPrimary)}`;
  },
  checkboxLabelMarginBlockStart: '0',
  checkboxLabelMarginInlineEnd: '0',
  checkboxLabelMarginBlockEnd: '0',
  checkboxLabelMarginInlineStart: '9px',
  checkboxLabelMarginInline: props => {
    return `${resolveValue(props, props.theme.checkboxLabelMarginInlineStart)}
    ${resolveValue(props, props.theme.checkboxLabelMarginInlineEnd)}`;
  },
  checkboxLabelMarginBlock: props => {
    return `${resolveValue(props, props.theme.checkboxLabelMarginBlockStart)}
    ${resolveValue(props, props.theme.checkboxLabelMarginBlockEnd)}`;
  },
  checkboxLabelFontSize: '13px',
  checkboxLabelFontWeight: '400',
  checkboxLabelLineHeight: '18px',
  checkboxLabelFontWeightChecked: '600',
  checkboxLabelColorDisabled: props => {
    return `${resolveValue(props, props.theme.jatoTypographyTextColorDisabled)}`;
  },
  checkboxGroupGap: '0.125em',
  checkboxGroupGapCompact: '0',
  checkboxGroupGapSpacious: '0.5rem',
  checkboxGroupGapHorizontal: '0.75rem',
  checkboxGroupGapHorizontalCompact: '0.5rem',
  checkboxGroupGapHorizontalSpacious: '1.25rem',
  checkboxContainerHeight: '30px',
  checkboxContainerBorderRadius: props => {
    return `${resolveValue(props, props.theme.jatoRadiiMed)}`;
  },
  checkboxContainerBackgroundColor: 'transparent',
  checkboxContainerPaddingInline: '8px',
  checkboxContainerPaddingBlock: '7px',
  checkboxContainerAlignItems: 'flex-start',
  checkboxContainerBackgroundColorHover: 'transparent',
  checkboxContainerBackgroundColorActive: 'transparent',
  chipHeight: '24px',
  chipBorderRadius: '100px',
  chipBorderWidth: '1px',
  chipBorderStyle: 'solid',
  chipBorderColor: props => {
    return `${resolveValue(props, props.theme.jatoControlBorderPrimaryNeutralLight)}`;
  },
  chipPaddingInlineStart: '8px',
  chipPaddingInlineEnd: '8px',
  chipFontWeight: '400',
  chipColor: props => {
    return `${resolveValue(props, props.theme.jatoCtaContentColorTertiary)}`;
  },
  chipBackgroundColor: props => {
    return `${resolveValue(props, props.theme.jatoBackgroundElevationLevel2)}`;
  },
  chipFontSize: '12px',
  chipCursor: 'default',
  chipBoxShadow: 'none',
  chipTransition: 'background-color 0.1s ease-out, border-color 0.1s ease-out',
  chipContentContainerColumnGap: '6px',
  chipContentContainerLineHeight: '16px',
  chipFontSizeLarge: props => {
    return `${resolveValue(props, props.theme.typographyFontSize)}`;
  },
  chipPaddingInlineStartLarge: '12px',
  chipPaddingInlineEndLarge: '12px',
  chipHeightLarge: '32px',
  chipBoxShadowFocused: props => {
    return `${resolveValue(props, props.theme.focusIndicatorBoxShadow)}`;
  },
  chipCursorSelectable: 'pointer',
  chipBoxShadowSelectable: props => {
    return `${resolveValue(props, props.theme.elevationBoxShadow1)}`;
  },
  chipBackgroundColorSelectableHover: props => {
    return `${resolveValue(props, props.theme.jatoControlBackgroundPrimaryHover)}`;
  },
  chipBorderColorSelectableHover: props => {
    return `${resolveValue(props, props.theme.jatoControlBorderPrimaryHover)}`;
  },
  chipBoxShadowSelectableHover: props => {
    return `${resolveValue(props, props.theme.elevationBoxShadow2)}`;
  },
  chipBackgroundColorSelectableActive: props => {
    return `${resolveValue(props, props.theme.jatoControlBackgroundPrimaryActive)}`;
  },
  chipBorderColorSelectableActive: props => {
    return `${resolveValue(props, props.theme.jatoControlBorderPrimaryActive)}`;
  },
  chipBoxShadowSelectableActive: props => {
    return `${resolveValue(props, props.theme.elevationBoxShadow2)}`;
  },
  chipPaddingInlineEndRemovable: '0',
  chipPaddingInlineEndLargeRemovable: '0',
  chipBackgroundColorRemovableHover: props => {
    return `${resolveValue(props, props.theme.jatoControlBackgroundPrimaryHover)}`;
  },
  chipBorderColorRemovableHover: props => {
    return `${resolveValue(props, props.theme.jatoControlBorderPrimaryHover)}`;
  },
  chipBackgroundColorRemovableActive: props => {
    return `${resolveValue(props, props.theme.jatoControlBackgroundPrimaryActive)}`;
  },
  chipBorderColorRemovableActive: props => {
    return `${resolveValue(props, props.theme.jatoControlBorderPrimaryActive)}`;
  },
  chipFontWeightSelected: '600',
  chipColorSelected: props => {
    return `${resolveValue(props, props.theme.jatoCtaContentColorTertiary)}`;
  },
  chipBackgroundColorSelected: props => {
    return `${resolveValue(props, props.theme.jatoBackgroundRowsSelected)}`;
  },
  chipBorderColorSelected: 'transparent',
  chipBoxShadowSelected: props => {
    return `${resolveValue(props, props.theme.elevationBoxShadow1)}`;
  },
  chipBackgroundColorSelectedHover: props => {
    return `${resolveValue(props, props.theme.jatoBackgroundRowsSelected)}`;
  },
  chipBorderColorSelectedHover: props => {
    return `${resolveValue(props, props.theme.jatoControlBorderPrimarySelectedHover)}`;
  },
  chipBoxShadowSelectedHover: props => {
    return `${resolveValue(props, props.theme.elevationBoxShadow2)}`;
  },
  chipBackgroundColorSelectedActive: props => {
    return `${resolveValue(props, props.theme.jatoControlBackgroundPrimaryActive)}`;
  },
  chipBorderColorSelectedActive: props => {
    return `${resolveValue(props, props.theme.jatoControlBorderPrimaryActive)}`;
  },
  chipBoxShadowSelectedActive: props => {
    return `${resolveValue(props, props.theme.elevationBoxShadow2)}`;
  },
  chipBoxShadowSelectableFocused: props => {
    return `${resolveValue(props, props.theme.focusIndicatorBoxShadow)}`;
  },
  chipBoxShadowSelectedFocused: props => {
    return `${resolveValue(props, props.theme.chipBoxShadowSelected)},
    ${resolveValue(props, props.theme.chipBoxShadowFocused)}`;
  },
  chipBorderColorReadonly: props => {
    return `${resolveValue(props, props.theme.jatoControlBorderReadOnlyNeutral)}`;
  },
  chipBoxShadowReadonly: 'none',
  chipBackgroundColorDisabled: props => {
    return `${resolveValue(props, props.theme.jatoControlBackgroundPrimaryDisabled)}`;
  },
  chipBorderColorDisabled: props => {
    return `${resolveValue(props, props.theme.jatoControlBorderPrimaryDisabled)}`;
  },
  chipColorDisabled: props => {
    return `${resolveValue(props, props.theme.jatoCtaContentColorPrimaryDisabled)}`;
  },
  chipBoxShadowDisabled: 'none',
  chipBackgroundColorDragging: props => {
    return `${resolveValue(props, props.theme.jatoControlBackgroundPrimaryActive)}`;
  },
  chipBorderColorDragging: props => {
    return `${resolveValue(props, props.theme.jatoControlBorderPrimarySelectedActive)}`;
  },
  chipBorderWidthDragging: '1.5px',
  chipBoxShadowDragging: props => {
    return `${resolveValue(props, props.theme.elevationBoxShadow3)}`;
  },
  chipRemoveContainerWidth: '24px',
  chipRemoveContainerHeight: '100%',
  chipRemoveContainerPaddingInlineEnd: '2px',
  chipRemoveContainerWidthLarge: '30px',
  chipRemoveContainerPaddingInlineEndLarge: '6px',
  chipRemoveBorderRadius: '50%',
  chipRemoveSize: '18px',
  chipRemoveColor: props => {
    return `${resolveValue(props, props.theme.jatoCtaContentColorTertiary)}`;
  },
  chipRemoveBackgroundColor: 'transparent',
  chipRemoveBorderWidth: '0',
  chipRemoveBorderStyle: 'solid',
  chipRemoveBorderColor: 'transparent',
  chipRemoveBorder: props => {
    return `${resolveValue(props, props.theme.chipRemoveBorderWidth)}
    ${resolveValue(props, props.theme.chipRemoveBorderStyle)} ${resolveValue(props, props.theme.chipRemoveBorderColor)}`;
  },
  chipRemoveBackgroundColorHover: props => {
    return `${resolveValue(props, props.theme.jatoCtaBackgroundTertiaryHover)}`;
  },
  chipRemoveColorHover: props => {
    return `${resolveValue(props, props.theme.jatoCtaContentColorTertiary)}`;
  },
  chipRemoveBackgroundColorSelectedHover: props => {
    return `${resolveValue(props, props.theme.jatoCtaBackgroundTertiaryHover)}`;
  },
  chipRemoveColorSelectedHover: props => {
    return `${resolveValue(props, props.theme.jatoCtaContentColorTertiary)}`;
  },
  chipRemoveBackgroundColorActive: props => {
    return `${resolveValue(props, props.theme.jatoCtaBackgroundTertiaryActive)}`;
  },
  chipRemoveColorActive: props => {
    return `${resolveValue(props, props.theme.jatoCtaContentColorTertiary)}`;
  },
  chipRemoveBoxShadowFocused: props => {
    return `${resolveValue(props, props.theme.focusIndicatorBoxShadow)}`;
  },
  chipRemoveColorDisabled: props => {
    return `${resolveValue(props, props.theme.chipColorDisabled)}`;
  },
  chipRemoveIconSize: '16px',
  chipColorTagSize: '8px',
  chipColorTagBorderRadius: '50%',
  chipColorTagOpacity: '1',
  chipColorTagBoxShadow: props => {
    return `0 0 0 0.75px ${resolveValue(props, props.theme.jatoBorderColorDifference)}`;
  },
  chipColorTagOpacityDisabled: '0.75',
  chipColorTagSizeLarge: '10px',
  chipAvatarSize: '18px',
  chipAvatarBorderRadius: '50%',
  chipAvatarFontWeight: '600',
  chipAvatarFontSize: '8px',
  chipAvatarTextAlign: 'center',
  chipAvatarMarginStart: props => {
    return `calc(calc(${resolveValue(props, props.theme.chipAvatarSize)} * -0.5) + 3px)`;
  },
  chipAvatarBackgroundSize: 'cover',
  chipAvatarOpacity: '1',
  chipAvatarBoxShadow: props => {
    return `0 0 0 0.75px ${resolveValue(props, props.theme.jatoBorderColorDifference)}`;
  },
  chipAvatarSizeLarge: '26px',
  chipAvatarFontSizeLarge: '12px',
  chipAvatarMarginStartLarge: props => {
    return `calc(${resolveValue(props, props.theme.chipAvatarSize)} * -0.5)`;
  },
  chipAvatarBackgroundColorDisabled: props => {
    return `${resolveValue(props, props.theme.jatoColorSteel2390)}`;
  },
  chipAvatarOpacityDisabled: '0.75',
  chipAvatarImageBoxShadow: 'inset 0px 0px 0px 1px rgba(255, 255, 255, 0.75)',
  chipMultiSelectMaxHeight: '145px',
  chipMultiSelectBorderWidth: '1px',
  chipMultiSelectBorderStyle: 'solid',
  chipMultiSelectBorderColor: props => {
    return `${resolveValue(props, props.theme.textInputBorderColor)}`;
  },
  chipMultiSelectDisplay: 'flex',
  chipMultiSelectGap: '4px',
  chipMultiSelectPaddingInline: '3px',
  chipMultiSelectPaddingBlock: '3px',
  chipMultiSelectOverflow: 'hidden',
  chipMultiSelectAlignItems: 'center',
  chipMultiSelectPosition: 'relative',
  chipMultiSelectMinHeight: '32px',
  chipMultiSelectBoxSizing: 'border-box',
  chipMultiSelectBorderRadius: '2px',
  chipMultiSelectJustifyContent: 'flex-start',
  chipMultiSelectOverflowY: 'auto',
  chipMultiSelectPaddingInlineStart: '3px',
  chipMultiSelectFontSize: '14px',
  chipMultiSelectBoxShadow: props => {
    return `${resolveValue(props, props.theme.elevationBoxShadow4)}`;
  },
  chipMultiSelectFontFamily: props => {
    return `${resolveValue(props, props.theme.typographyFontFamily)}`;
  },
  chipMultiSelectMaxHeightLarge: '185px',
  chipMultiSelectArrowTopLarge: '19px',
  chipMultiSelectClearTopLarge: '8px',
  chipMultiSelectFlexWrap: 'wrap',
  chipMultiSelectPaddingInlineStartEmpty: '9px',
  chipMultiSelectBorderActive: props => {
    return `${resolveValue(props, props.theme.colorPrimaryRgb)}`;
  },
  chipMultiSelectFlexWrapActive: 'wrap',
  chipMultiSelectBorderColorError: props => {
    return `${resolveValue(props, props.theme.colorStatusError)}`;
  },
  chipMultiSelectBorderColorSuccess: props => {
    return `${resolveValue(props, props.theme.colorStatusSuccess)}`;
  },
  chipMultiSelectBackgroundColorDisabled: props => {
    return `rgba(${resolveValue(props, props.theme.colorBlackRgb)}, 0.02)`;
  },
  chipMultiSelectBorderColorDisabled: props => {
    return `${resolveValue(props, props.theme.textInputBorderColorDisabled)}`;
  },
  chipMultiSelectArrowColorDisabled: props => {
    return `${resolveValue(props, props.theme.typographyColorDisabled)}`;
  },
  chipMultiSelectBorderColorHover: props => {
    return `rgba(${resolveValue(props, props.theme.colorPrimaryRgb)}, 0.5)`;
  },
  chipMultiSelectBorderColorActive: props => {
    return `${resolveValue(props, props.theme.colorPrimary)}`;
  },
  chipMultiSelectContainerDisplay: 'flex',
  chipMultiSelectContainerGap: '0.25rem',
  chipMultiSelectContainerFlexWrap: 'wrap',
  chipMultiSelectContainerWidth: '100%',
  chipMultiSelectContainerPaddingInlineEnd: '32px',
  chipMultiSelectContainerBoxSizing: 'border-box',
  chipMultiSelectContainerCursor: 'pointer',
  chipMultiSelectInputBorder: 'none',
  chipMultiSelectInputBoxSizing: 'border-box',
  chipMultiSelectInputMinHeight: '24px',
  chipMultiSelectInputDisplay: 'flex',
  chipMultiSelectInputFlex: '1',
  chipMultiSelectInputMinWidth: '110px',
  chipMultiSelectInputOutline: 'none',
  chipMultiSelectInputColor: props => {
    return `${resolveValue(props, props.theme.typographyColor)}`;
  },
  chipMultiSelectInputFontSize: props => {
    return `${resolveValue(props, props.theme.chipMultiSelectFontSize)}`;
  },
  chipMultiSelectInputFontFamily: props => {
    return `${resolveValue(props, props.theme.chipMultiSelectFontFamily)}`;
  },
  chipMultiSelectArrowTop: '15px',
  chipMultiSelectArrowPosition: 'absolute',
  chipMultiSelectArrowInsetInlineEnd: '12px',
  chipMultiSelectArrowTransform: 'translateY(-50%)',
  chipMultiSelectArrowFontSize: '16px',
  chipMultiSelectArrowColor: props => {
    return `${resolveValue(props, props.theme.typographyColor)}`;
  },
  chipMultiSelectClearPosition: 'absolute',
  chipMultiSelectClearTop: '3px',
  chipMultiSelectClearInsetInlineEnd: '30px',
  chipMultiSelectClearTransform: 'none',
  chipMultiSelectCounterMarginInlineStart: 'auto',
  chipMultiSelectCounterDisplay: 'flex',
  chipMultiSelectCounterAlignItems: 'center',
  chipMultiSelectCounterBackgroundColor: '#dcdedf',
  chipMultiSelectCounterBackgroundColorSelectableHover: '#dcdedf',
  chipMultiSelectCounterColor: props => {
    return `${resolveValue(props, props.theme.typographyColor)}`;
  },
  chipMultiSelectCounterCursor: 'pointer',
  chipMultiSelectChipMaxWidth: '150px',
  chipMultiSelectChipOverflow: 'hidden',
  chipMultiSelectChipTextOverflow: 'ellipsis',
  chipMultiSelectChipWhiteSpace: 'nowrap',
  chipMultiSelectChipBackgroundColorDisabled: 'rgba(0, 0, 0, 0.02)',
  chipMultiSelectChipColor: props => {
    return `${resolveValue(props, props.theme.typographyColor)}`;
  },
  chipMultiSelectChipColorDisabled: props => {
    return `${resolveValue(props, props.theme.typographyColorDisabled)}`;
  },
  coachmarkContainerWidth: '348px',
  coachmarkContainerBorder: props => {
    return `1px solid ${resolveValue(props, props.theme.jatoCoachmarksBorder)}`;
  },
  coachmarkBorderColor: props => {
    return `${resolveValue(props, props.theme.jatoCoachmarksBorder)}`;
  },
  coachmarkBorderRadius: props => {
    return `${resolveValue(props, props.theme.jatoRadiiXl)}`;
  },
  coachmarkBackground: props => {
    return `linear-gradient(
    151.24deg,
    ${resolveValue(props, props.theme.jatoCoachmarksBackgroundGradientStart)} -26.12%,
    ${resolveValue(props, props.theme.jatoCoachmarksBackgroundGradientStop)} 84.46%
  )`;
  },
  coachmarkBoxShadow: props => {
    return `${resolveValue(props, props.theme.jatoElevationShadowLevel4)}`;
  },
  coachmarkColor: 'rgba(217, 217, 217, 1)',
  coachmarkLayoutPaddingInline: props => {
    return `${resolveValue(props, props.theme.jatoPaddingXxl)}`;
  },
  coachmarkLayoutPaddingBlock: props => {
    return `${resolveValue(props, props.theme.jatoPaddingXl)} ${resolveValue(props, props.theme.jatoPaddingXxl)}`;
  },
  coachmarkLayoutBackground: 'transparent',
  coachmarkDividerColor: props => {
    return `${resolveValue(props, props.theme.jatoBorderColorPrimary)}`;
  },
  coachmarkContentFontWeight: props => {
    return `${resolveValue(props, props.theme.jatoFontWeight400)}`;
  },
  coachmarkContentFontSize: props => {
    return `${resolveValue(props, props.theme.jatoFontSizeSm)}`;
  },
  coachmarkContentLineHeight: props => {
    return `${resolveValue(props, props.theme.jatoLineHeightReg)}`;
  },
  coachmarkContentLetterSpacing: props => {
    return `${resolveValue(props, props.theme.jatoTrackingRegular)}`;
  },
  coachmarkContentColor: props => {
    return `${resolveValue(props, props.theme.jatoCoachmarksTypography)}`;
  },
  coachmarkHeaderTitleFontWeight: props => {
    return `${resolveValue(props, props.theme.jatoFontWeight600)}`;
  },
  coachmarkHeaderTitleFontSize: props => {
    return `${resolveValue(props, props.theme.jatoFontSizeXxl)}`;
  },
  coachmarkHeaderTitleLineHeight: props => {
    return `${resolveValue(props, props.theme.jatoLineHeightXl)}`;
  },
  coachmarkHeaderTitleLetterSpacing: props => {
    return `${resolveValue(props, props.theme.jatoTrackingCondensed)}`;
  },
  coachmarkHeaderTitleColor: props => {
    return `${resolveValue(props, props.theme.jatoCoachmarksTypography)}`;
  },
  coachmarkFooterFontWeight: props => {
    return `${resolveValue(props, props.theme.jatoFontWeight700)}`;
  },
  coachmarkFooterFontSize: props => {
    return `${resolveValue(props, props.theme.coachmarkContentFontSize)}`;
  },
  coachmarkFooterLineHeight: props => {
    return `${resolveValue(props, props.theme.coachmarkContentLineHeight)}`;
  },
  coachmarkFooterLetterSpacing: props => {
    return `${resolveValue(props, props.theme.coachmarkContentLetterSpacing)}`;
  },
  coachmarkSlidePaginationMarkerBackgroundColor: props => {
    return `${resolveValue(props, props.theme.jatoCoachmarksSlidePaginationMarker)}`;
  },
  coachmarkSlidePaginationSelectedBackgroundColor: props => {
    return `${resolveValue(props, props.theme.jatoCoachmarksSlidePaginationSelected)}`;
  },
  coachmarkNextButtonColor: props => {
    return `${resolveValue(props, props.theme.jatoCtaContentColorPrimary)}`;
  },
  coachmarkNextButtonPaddingBlock: props => {
    return `${resolveValue(props, props.theme.jatoPaddingXl)}`;
  },
  coachmarkNextButtonPaddingInline: props => {
    return `${resolveValue(props, props.theme.jatoPaddingXl)}`;
  },
  coachmarkNextButtonBorderRadius: props => {
    return `${resolveValue(props, props.theme.jatoRadiiMed)}`;
  },
  coachmarkNextButtonHeight: props => {
    return `${resolveValue(props, props.theme.jatoSizeHeight32)}`;
  },
  datePickerPaddingInline: '0',
  datePickerPaddingBlock: '0',
  datePickerFontWeight: props => {
    return `${resolveValue(props, props.theme.typographyFontWeightRegular)}`;
  },
  datePickerHeaderFontWeight: props => {
    return `${resolveValue(props, props.theme.typographyFontWeightMedium)}`;
  },
  datePickerHeaderMarginBlockEnd: '12px',
  datePickerHeaderControlBorderRadius: '6px',
  datePickerHeaderControlIconSize: '1rem',
  datePickerHeaderControlIconTransformRtl: 'scaleX(-1)',
  datePickerSelectMonthMinWidth: '0',
  datePickerSelectYearMinWidth: '0',
  datePickerSelectSeparatorMinWidth: '6px',
  datePickerSelectOutlineFocus: props => {
    return `2px solid ${resolveValue(props, props.theme.focusOutlineColor)}`;
  },
  datePickerSelectOutlineOffsetFocus: '2px',
  datePickerCalendarHeaderColor: props => {
    return `${resolveValue(props, props.theme.jatoCtaContentColorTertiary)}`;
  },
  datePickerCalendarHeaderMarginBlockEnd: '2px',
  datePickerCalendarHeaderFontSize: '0.875rem',
  datePickerCalendarHeaderDayFontWeight: '400',
  datePickerGridGridTemplateColumns: 'repeat(7, 36px)',
  datePickerGridGap: '0',
  datePickerGridColumnGap: '2px',
  datePickerGridCellWidth: '36px',
  datePickerGridCellMinWidth: '0',
  datePickerGridCellHeight: props => {
    return `${resolveValue(props, props.theme.datePickerGridCellWidth)}`;
  },
  datePickerGridCellFontSize: '0.875rem',
  datePickerGridCellBackgroundColor: 'inherit',
  datePickerGridCellBorder: 'none',
  datePickerGridCellBorderRadius: '6px',
  datePickerGridCellPaddingInline: '0',
  datePickerGridCellPaddingBlock: '0',
  datePickerGridCellColor: props => {
    return `${resolveValue(props, props.theme.jatoCtaContentColorTertiary)}`;
  },
  datePickerGridCellBackgroundColorHover: props => {
    return `${resolveValue(props, props.theme.jatoCtaBackgroundTertiaryHover)}`;
  },
  datePickerGridCellBackgroundColorActive: props => {
    return `${resolveValue(props, props.theme.jatoCtaBackgroundTertiaryActive)}`;
  },
  datePickerGridCellBorderToday: props => {
    return `1px solid ${resolveValue(props, props.theme.jatoBorderColorPrimarySelected)}`;
  },
  datePickerGridCellColorToday: props => {
    return `${resolveValue(props, props.theme.jatoTypographyTextColorPrimary)}`;
  },
  datePickerGridCellFontWeightToday: '500',
  datePickerGridCellColorTodaySelected: props => {
    return `${resolveValue(props, props.theme.jatoCtaContentColorPrimary)}`;
  },
  datePickerGridCellColorSelected: props => {
    return `${resolveValue(props, props.theme.jatoCtaContentColorPrimary)}`;
  },
  datePickerGridCellFontWeightSelected: '600',
  datePickerGridCellBackgroundColorSelected: props => {
    return `${resolveValue(props, props.theme.jatoCtaBackgroundPrimaryNeutral)}`;
  },
  datePickerGridCellBoxShadowSelected: 'none',
  datePickerGridCellBoxShadowSelectionStart: 'none',
  datePickerGridCellBackgroundColorSelectionStart: props => {
    return `${resolveValue(props, props.theme.datePickerGridCellBackgroundColorSelected)}`;
  },
  datePickerGridCellBackgroundColorSelectionStartActive: props => {
    return `${resolveValue(props, props.theme.datePickerGridCellBackgroundColorSelected)}`;
  },
  datePickerGridCellBorderRadiusSelectionStart: props => {
    return `${resolveValue(props, props.theme.jatoRadiiMed)}`;
  },
  datePickerGridCellColorSelectionStart: props => {
    return `${resolveValue(props, props.theme.datePickerGridCellColorSelected)}`;
  },
  datePickerGridCellBackgroundColorUnderlayStart: props => {
    return `${resolveValue(props, props.theme.datePickerGridCellBackgroundColorSelectionBetween)}`;
  },
  datePickerGridCellBackgroundColorSelectionEnd: props => {
    return `${resolveValue(props, props.theme.datePickerGridCellBackgroundColorSelected)}`;
  },
  datePickerGridCellBackgroundColorSelectionEndActive: props => {
    return `${resolveValue(props, props.theme.datePickerGridCellBackgroundColorSelected)}`;
  },
  datePickerGridCellBoxShadowSelectionEnd: 'none',
  datePickerGridCellBorderRadiusSelectionEnd: props => {
    return `${resolveValue(props, props.theme.jatoRadiiMed)}`;
  },
  datePickerGridCellColorSelectionEnd: props => {
    return `${resolveValue(props, props.theme.datePickerGridCellColorSelected)}`;
  },
  datePickerGridCellBackgroundColorUnderlayEnd: props => {
    return `${resolveValue(props, props.theme.datePickerGridCellBackgroundColorSelectionBetween)}`;
  },
  datePickerGridCellBorderRadiusSelectionBetween: '0',
  datePickerGridCellColorSelectionBetween: props => {
    return `${resolveValue(props, props.theme.datePickerGridCellColor)}`;
  },
  datePickerGridCellBackgroundColorSelectionBetween: props => {
    return `${resolveValue(props, props.theme.jatoBackgroundElevationLevel0)}`;
  },
  datePickerGridCellColorDisabled: props => {
    return `${resolveValue(props, props.theme.typographyColorDisabled)}`;
  },
  datePickerGridCellColorDisabledSelected: props => {
    return `${resolveValue(props, props.theme.typographyColorDisabled)}`;
  },
  datePickerGridCellBackgroundColorDisabledSelected: props => {
    return `rgba(
    ${resolveValue(props, props.theme.colorPrimaryRgb)},
    0.02
  )`;
  },
  datePickerGridCellBoxShadowDisabledSelected: 'none',
  datePickerGridCellBoxShadowDisabledSelectionStart: props => {
    return `inset 2px 0
    rgba(${resolveValue(props, props.theme.colorBlueRgb)}, 0.2)`;
  },
  datePickerGridCellBoxShadowDisabledSelectionEnd: props => {
    return `inset -2px 0 rgba(${resolveValue(props, props.theme.colorBlueRgb)}, 0.2)`;
  },
  datePickerGridCellBoxShadowFocused: props => {
    return `${resolveValue(props, props.theme.focusIndicatorBoxShadow)}`;
  },
  datePickerGridCellBoxShadowFocusedSelected: props => {
    return `${resolveValue(props, props.theme.focusIndicatorBoxShadow)}`;
  },
  datePickerGridCellBoxShadowFocusedSelectionStart: props => {
    return `${resolveValue(props, props.theme.datePickerGridCellBoxShadowSelectionStart)},
    ${resolveValue(props, props.theme.focusIndicatorBoxShadow)}`;
  },
  datePickerGridCellBoxShadowFocusedSelectionEnd: props => {
    return `${resolveValue(props, props.theme.datePickerGridCellBoxShadowSelectionEnd)},
    ${resolveValue(props, props.theme.focusIndicatorBoxShadow)}`;
  },
  datePickerGridCellColorOutsideOfMonth: props => {
    return `${resolveValue(props, props.theme.datePickerGridCellColorDisabled)}`;
  },
  datePickerGridCellColorOutsideOfMonthDateRange: 'transparent',
  datePickerDropdownColumnGap: '6px',
  datePickerDropdownWidth: 'auto',
  datePickerDropdownHeight: '24px',
  datePickerDropdownPaddingInline: '7px 3px',
  datePickerDropdownBorderRadius: '4px',
  datePickerDropdownBorderColor: props => {
    return `${resolveValue(props, props.theme.jatoCtaBorderColorSecondaryNeutral)}`;
  },
  datePickerDropdownBackgroundColorHover: props => {
    return `${resolveValue(props, props.theme.jatoCtaBackgroundSecondaryHover)}`;
  },
  datePickerDropdownBorderColorHover: props => {
    return `${resolveValue(props, props.theme.jatoCtaBorderColorSecondaryHover)}`;
  },
  datePickerDropdownBoxShadowHover: 'none',
  datePickerDropdownBackgroundColorActive: props => {
    return `${resolveValue(props, props.theme.jatoCtaBackgroundSecondaryActive)}`;
  },
  datePickerDropdownBorderColorActive: props => {
    return `${resolveValue(props, props.theme.jatoCtaBorderColorSecondaryActive)}`;
  },
  datePickerDropdownBorderColorFocused: props => {
    return `${resolveValue(props, props.theme.jatoCtaBorderColorSecondaryNeutral)}`;
  },
  datePickerDropdownBoxShadowFocused: 'none',
  datePickerDropdownValueColor: props => {
    return `${resolveValue(props, props.theme.jatoCtaContentColorSecondaryNeutral)}`;
  },
  datePickerDropdownValueFontSize: '12px',
  datePickerDropdownValueFontWeight: '400',
  datePickerDropdownValueColorHover: props => {
    return `${resolveValue(props, props.theme.jatoCtaContentColorSecondaryHover)}`;
  },
  datePickerDropdownValueColorActive: props => {
    return `${resolveValue(props, props.theme.jatoCtaContentColorSecondaryActive)}`;
  },
  datePickerDropdownArrowMinWidth: '16px',
  datePickerDropdownArrowFontSize: '16px',
  datePickerDropdownArrowColor: props => {
    return `${resolveValue(props, props.theme.jatoCtaContentColorSecondaryNeutral)}`;
  },
  datePickerDropdownArrowColorHover: props => {
    return `${resolveValue(props, props.theme.jatoCtaContentColorSecondaryHover)}`;
  },
  datePickerDropdownArrowColorActive: props => {
    return `${resolveValue(props, props.theme.jatoCtaContentColorSecondaryActive)}`;
  },
  dateRangePickerSummaryBorderBottom: props => {
    return `1px solid ${resolveValue(props, props.theme.jatoBorderColorPrimary)}`;
  },
  dateRangePickerSummaryHeight: '72px',
  dateRangePickerSummaryMarginInline: '8px',
  dateRangePickerSummaryMarginBlock: '0',
  dateRangePickerSummaryPaddingInline: '24px',
  dateRangePickerSummaryPaddingBlock: '0',
  dateRangePickerSummarySectionMarginBlockEnd: '1px',
  dateRangePickerSummarySectionFontWeight: '400',
  dateRangePickerSummarySectionFontSize: '12px',
  dateRangePickerSelectHeaderColor: props => {
    return `${resolveValue(props, props.theme.jatoCtaContentColorTertiary)}`;
  },
  dateRangePickerDateHeaderColor: props => {
    return `${resolveValue(props, props.theme.jatoCtaContentColorTertiary)}`;
  },
  dateRangePickerTimeHeaderHeight: '15px',
  dateRangePickerSummarySeparatorWidth: '64px',
  dateRangePickerSummarySeparatorColor: props => {
    return `${resolveValue(props, props.theme.jatoCtaContentColorSecondaryNeutral)}`;
  },
  dateRangePickerSummarySeparatorPaddingBlockStart: '2px',
  dateRangePickerSummarySeparatorIconSize: '24px',
  dateRangePickerSummaryIconTransformRtl: 'scaleX(-1)',
  dateRangePickerSummaryDurationMarginInline: '0',
  dateRangePickerSummaryDurationMarginBlock: '0',
  dateRangePickerSummaryDurationFontSize: '12px',
  dateTimePickerInputDividerHeight: '1px',
  dateTimePickerInputDividerMarginInline: '-8px',
  dateTimePickerInputDividerMarginBlock: '12px',
  dateTimePickerInputDividerMarginBlockStart: '12px',
  dateTimePickerInputDividerMarginBlockEnd: '12px',
  dateTimePickerInputDividerColor: props => {
    return `${resolveValue(props, props.theme.jatoBorderColorPrimary)}`;
  },
  dateTimePickerInputAdditionalContentMarginBlockStart: '0',
  dateTimePickerInputAdditionalContentAlignItems: 'center',
  dialogMaxHeight: '100%',
  dialogBackgroundColor: props => {
    return `${resolveValue(props, props.theme.elevationBackgroundColor3)}`;
  },
  dialogBoxShadow: props => {
    return `${resolveValue(props, props.theme.elevationBoxShadow3)}`;
  },
  dialogBorderColor: props => {
    return `${resolveValue(props, props.theme.jatoBorderColorPrimary)}`;
  },
  dialogBorderStyle: 'solid',
  dialogBorderWidth: '1px',
  dialogBorder: props => {
    return `${resolveValue(props, props.theme.dialogBorderStyle)} ${resolveValue(props, props.theme.dialogBorderWidth)}
    ${resolveValue(props, props.theme.dialogBorderColor)}`;
  },
  dialogBorderRadius: props => {
    return `${resolveValue(props, props.theme.jatoRadiiXl)}`;
  },
  dialogBackgroundClip: 'border-box',
  dialogBorderRadiusDrawer: '0',
  dialogOverflow: 'auto',
  dialogBorderRadiusModalPanelStart: props => {
    return `0 ${resolveValue(props, props.theme.jatoRadiiXl)} ${resolveValue(props, props.theme.jatoRadiiXl)} 0`;
  },
  dialogBorderRadiusModalPanelEnd: props => {
    return `${resolveValue(props, props.theme.jatoRadiiXl)} 0 0 ${resolveValue(props, props.theme.jatoRadiiXl)}`;
  },
  dialogBorderRadiusModalPanelTop: props => {
    return `${resolveValue(props, props.theme.jatoRadiiXl)}`;
  },
  dialogBorderRadiusModalPanelBottom: props => {
    return `${resolveValue(props, props.theme.jatoRadiiXl)}`;
  },
  dialogWidth: '448px',
  dialogWidthSmall: '345px',
  dialogWidthLarge: '720px',
  dialogLayoutGridTemplateRows: 'auto 1fr',
  dialogLayoutGridTemplateColumns: 'auto 1fr',
  dialogLayoutGridTemplateAreas: '"icon header" "content content" "footer footer"',
  dialogEmphasisIndicatorWidth: '0px',
  dialogEmphasisIndicatorMarginBlockStart: '0',
  dialogEmphasisIndicatorMarginBlockEnd: '0',
  dialogEmphasisIndicatorMarginInlineStart: '0',
  dialogEmphasisIndicatorMarginInlineEnd: '0',
  dialogEmphasisIndicatorBorderRadius: '0',
  dialogIconFill: props => {
    return `${resolveValue(props, props.theme.typographyColorHighEmphasis)}`;
  },
  dialogIconSize: '1rem',
  dialogIconMarginInlineStart: '16px',
  dialogIconMarginInlineEnd: '0',
  dialogIconMarginInline: props => {
    return `${resolveValue(props, props.theme.dialogIconMarginInlineStart)}
    ${resolveValue(props, props.theme.dialogIconMarginInlineEnd)}`;
  },
  dialogIconMarginBlockStart: '20px',
  dialogIconMarginBlockEnd: '0',
  dialogIconMarginBlock: props => {
    return `${resolveValue(props, props.theme.dialogIconMarginBlockStart)}
    ${resolveValue(props, props.theme.dialogIconMarginBlockEnd)}`;
  },
  dialogIconColorInfo: props => {
    return `${resolveValue(props, props.theme.jatoColorElectric0750)}`;
  },
  dialogIconColorError: props => {
    return `${resolveValue(props, props.theme.jatoColorFirebrick1440)}`;
  },
  dialogIconColorSuccess: props => {
    return `${resolveValue(props, props.theme.jatoColorHunter1635)}`;
  },
  dialogIconColorWarning: props => {
    return `${resolveValue(props, props.theme.jatoColorAmber2570)}`;
  },
  dialogIconColorQuestion: props => {
    return `${resolveValue(props, props.theme.jatoColorElectric0165)}`;
  },
  dialogHeaderColor: props => {
    return `${resolveValue(props, props.theme.jatoTypographyTextColorPrimary)}`;
  },
  dialogHeaderGap: '8px',
  dialogHeaderMarginInline: '0 0',
  dialogHeaderMarginBlock: '0 0',
  dialogHeaderPaddingInline: '16px',
  dialogHeaderPaddingBlock: '16px 8px',
  dialogHeaderFontSize: '1.125rem',
  dialogHeaderFontWeight: '600',
  dialogHeaderLetterSpacing: '-0.02em',
  dialogHeaderLineHeight: '20px',
  dialogHeaderOverflowContent: '""',
  dialogHeaderPaddingInlineModalMessage: '8px 16px',
  dialogHeaderMarginInlineModalMessage: '0px',
  dialogHeaderMarginInlineModalPanel: '16px',
  dialogHeaderMarginBlockModalPanel: '16px 8px',
  dialogHeaderPaddingInlineModalPanel: '0',
  dialogHeaderPaddingBlockModalPanel: '0',
  dialogHeaderTitlePaddingInlineStart: '0',
  dialogHeaderTitlePaddingInlineEnd: '0',
  dialogHeaderTitlePaddingInline: props => {
    return `${resolveValue(props, props.theme.dialogHeaderTitlePaddingInlineStart)}
    ${resolveValue(props, props.theme.dialogHeaderTitlePaddingInlineEnd)}`;
  },
  dialogHeaderTitlePaddingBlockStart: props => {
    return `${resolveValue(props, props.theme.jatoPaddingXxs)}`;
  },
  dialogHeaderTitlePaddingBlockEnd: props => {
    return `${resolveValue(props, props.theme.jatoPaddingXxs)}`;
  },
  dialogHeaderTitlePaddingBlock: props => {
    return `${resolveValue(props, props.theme.dialogHeaderTitlePaddingBlockStart)}
    ${resolveValue(props, props.theme.dialogHeaderTitlePaddingBlockEnd)}`;
  },
  dialogHeaderSubtitleFontSize: '0.6875rem',
  dialogHeaderSubtitleFontWeight: '500',
  dialogHeaderSubtitleLineHeight: '14px',
  dialogHeaderSubtitleTextColor: props => {
    return `${resolveValue(props, props.theme.jatoTypographyTextColorTertiary)}`;
  },
  dialogHeaderSubtitlePaddingInlineStart: '0',
  dialogHeaderSubtitlePaddingInlineEnd: '0',
  dialogHeaderSubtitlePaddingInline: props => {
    return `${resolveValue(props, props.theme.dialogHeaderSubtitlePaddingInlineStart)}
    ${resolveValue(props, props.theme.dialogHeaderSubtitlePaddingInlineEnd)}`;
  },
  dialogHeaderSubtitlePaddingBlockStart: props => {
    return `${resolveValue(props, props.theme.jatoPaddingXxs)}`;
  },
  dialogHeaderSubtitlePaddingBlockEnd: props => {
    return `${resolveValue(props, props.theme.jatoPaddingXxs)}`;
  },
  dialogHeaderSubtitlePaddingBlock: props => {
    return `${resolveValue(props, props.theme.dialogHeaderSubtitlePaddingBlockStart)}
    ${resolveValue(props, props.theme.dialogHeaderSubtitlePaddingBlockEnd)}`;
  },
  dialogContentColor: props => {
    return `${resolveValue(props, props.theme.jatoTypographyTextColorPrimary)}`;
  },
  dialogContentFontWeight: '400',
  dialogContentFontSize: '14px',
  dialogContentLineHeight: '20px',
  dialogContentMarginInline: '0 0',
  dialogContentMarginBlock: '0 0',
  dialogContentPaddingInlineStart: '16px',
  dialogContentPaddingInlineEnd: '16px',
  dialogContentPaddingInline: props => {
    return `${resolveValue(props, props.theme.dialogContentPaddingInlineStart)}
    ${resolveValue(props, props.theme.dialogContentPaddingInlineEnd)}`;
  },
  dialogContentPaddingBlockStart: '16px',
  dialogContentPaddingBlockEnd: '16px',
  dialogContentPaddingBlock: props => {
    return `${resolveValue(props, props.theme.dialogContentPaddingBlockStart)}
    ${resolveValue(props, props.theme.dialogContentPaddingBlockEnd)}`;
  },
  dialogContentBackground: 'linear-gradient(white 30%, rgba(255, 255, 255, 0)) center top,\n    linear-gradient(rgba(255, 255, 255, 0), white 70%) center bottom,\n    radial-gradient(farthest-side at 50% 0, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0)) center top,\n    radial-gradient(farthest-side at 50% 100%, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0)) center bottom',
  dialogContentBackgroundRepeat: 'no-repeat',
  dialogContentBackgroundSize: '100% 30px, 100% 30px, 100% 10px, 100% 10px',
  dialogContentBackgroundAttachment: 'local, local, scroll, scroll',
  dialogContentFocusOutlineOffset: '-2px',
  dialogContentPaddingBlockModalMessage: '4px 16px',
  dialogContentMarginInlineModalPanel: '0px',
  dialogContentMarginBlockModalPanel: '0px',
  dialogContentMaskImageTop: 'linear-gradient(\n    to top,\n    black calc(100% - 12px),\n    transparent 100%\n  )',
  dialogContentMaskImageBottom: 'linear-gradient(\n    to bottom,\n    black calc(100% - 12px),\n    transparent 100%\n  )',
  dialogContentMaskImageBoth: 'linear-gradient(\n    to bottom,\n    transparent 0%,\n    black 12px,\n    black calc(100% - 12px),\n    transparent 100%\n  )',
  dialogFooterBorderStyle: 'solid',
  dialogFooterBorderTopWidth: '0px',
  dialogFooterBorderRightWidth: '0',
  dialogFooterBorderBottomWidth: '0',
  dialogFooterBorderLeftWidth: '0',
  dialogFooterGap: '12px',
  dialogFooterGapDivider: props => {
    return `${resolveValue(props, props.theme.dialogFooterGap)}`;
  },
  dialogFooterBorderColor: 'transparent',
  dialogFooterOverflowContent: '""',
  dialogFooterMainPaddingInline: '16px 16px',
  dialogFooterMainPaddingBlock: '16px 16px',
  dialogFooterPaddingInline: '16px 16px',
  dialogFooterPaddingBlock: '16px 16px',
  dialogFooterMarginInline: '0 0',
  dialogFooterMarginBlock: '0 0',
  dialogFooterMarginInlineModalPanel: '0',
  dialogFooterMarginBlockModalPanel: '0',
  dialogFooterPaddingInlineModalPanel: '16px',
  dialogFooterPaddingBlockModalPanel: '16px',
  overlayBackdropBackground: props => {
    return `${resolveValue(props, props.theme.jatoBackgroundMaskPage)}`;
  },
  overlayBackdropBackdropFilter: 'blur(2px)',
  dialogDismissButtonPosition: 'unset',
  dialogDismissButtonTop: props => {
    return `${resolveValue(props, props.theme.spacingXs)}`;
  },
  dialogDismissButtonInsetInlineEnd: props => {
    return `${resolveValue(props, props.theme.spacingXs)}`;
  },
  dialogDismissButtonSize: '16px',
  dialogDismissButtonAlign: 'baseline',
  dialogDismissButtonContainerPosition: 'relative',
  drawerContainerBackgroundColor: props => {
    return `${resolveValue(props, props.theme.elevationBackgroundColorBase)}`;
  },
  drawerAnimationDuration: '0.3s',
  drawerContentBorderRadius: props => {
    return `${resolveValue(props, props.theme.jatoRadiiXl)}`;
  },
  drawerContentBoxShadow: props => {
    return `0 2px 4px ${resolveValue(props, props.theme.elevationBoxShadowColor2)}`;
  },
  drawerContentBackgroundColor: props => {
    return `${resolveValue(props, props.theme.elevationBackgroundColor2)}`;
  },
  drawerContentBorderStyle: 'solid',
  drawerContentBorderColor: props => {
    return `${resolveValue(props, props.theme.jatoBorderColorPrimary)}`;
  },
  drawerContentBorderWidthTopStart: '1px',
  drawerContentBorderWidthRightStart: '1px',
  drawerContentBorderWidthBottomStart: '1px',
  drawerContentBorderWidthLeftStart: '0',
  drawerContentBorderWidthTopEnd: '1px',
  drawerContentBorderWidthRightEnd: '0',
  drawerContentBorderWidthBottomEnd: '1px',
  drawerContentBorderWidthLeftEnd: '1px',
  drawerContentBorderWidthTopTop: '1px',
  drawerContentBorderWidthRightTop: '1px',
  drawerContentBorderWidthBottomTop: '0',
  drawerContentBorderWidthLeftTop: '1px',
  drawerContentBorderWidthTopBottom: '0',
  drawerContentBorderWidthRightBottom: '1px',
  drawerContentBorderWidthBottomBottom: '1px',
  drawerContentBorderWidthLeftBottom: '1px',
  drawerResizeHandleSize: '12px',
  drawerResizeHandleBorderWidth: '2px',
  drawerResizeHandleBorderStyle: 'solid',
  drawerResizeHandleBorderColor: 'transparent',
  drawerResizeHandleBorderColorHover: props => {
    return `${resolveValue(props, props.theme.focusOutlineColor)}`;
  },
  drawerResizeHandleWidthVertical: props => {
    return `calc(
    ${resolveValue(props, props.theme.drawerResizeHandleSize)} - ${resolveValue(props, props.theme.drawerResizeHandleBorderWidth)}
  )`;
  },
  drawerResizeHandleHeightHorizontal: props => {
    return `calc(
    ${resolveValue(props, props.theme.drawerResizeHandleSize)} - ${resolveValue(props, props.theme.drawerResizeHandleBorderWidth)}
  )`;
  },
  drawerResizeHandleIconSize: '1rem',
  drawerResizeHandleIconFill: props => {
    return `${resolveValue(props, props.theme.typographyColorLightest)}`;
  },
  drawerResizeHandleIconFillHover: props => {
    return `${resolveValue(props, props.theme.typographyColorHighEmphasis)}`;
  },
  flyoutBackgroundColor: props => {
    return `${resolveValue(props, props.theme.jatoBackgroundElevationLevel3)}`;
  },
  flyoutBorderColor: props => {
    return `${resolveValue(props, props.theme.jatoBorderColorPrimary)}`;
  },
  flyoutBorderRadius: '6px',
  flyoutColor: props => {
    return `${resolveValue(props, props.theme.jatoTypographyTextColorPrimary)}`;
  },
  flyoutWrapperBorderRadius: '5px',
  flyoutContentPaddingInlineBelow: '12px',
  flyoutContentPaddingBlockBelow: '16px 12px',
  flyoutContentBoxShadowBelow: props => {
    return `inset 0 3px 0 0 ${resolveValue(props, props.theme.jatoCtaFocusBorder)}`;
  },
  flyoutContentPaddingInlineAbove: '12px',
  flyoutContentPaddingBlockAbove: '12px 16px',
  flyoutContentBoxShadowAbove: props => {
    return `inset 0 -3px 0 0 ${resolveValue(props, props.theme.jatoCtaFocusBorder)}`;
  },
  flyoutContentPaddingInlineAfter: '16px 12px',
  flyoutContentPaddingBlockAfter: '12px',
  flyoutContentBoxShadowAfter: props => {
    return `inset 3px 0 0 0 ${resolveValue(props, props.theme.jatoCtaFocusBorder)}`;
  },
  flyoutContentPaddingInlineBefore: '12px 16px',
  flyoutContentPaddingBlockBefore: '12px',
  flyoutContentBoxShadowBefore: props => {
    return `inset -3px 0 0 0 ${resolveValue(props, props.theme.jatoCtaFocusBorder)}`;
  },
  formGap: '16px',
  formFieldLabelMarginBlockEnd: '4px',
  formFieldLabelLineHeight: props => {
    return `${resolveValue(props, props.theme.typographyLabelLineHeight)}`;
  },
  formFieldLabelMarginBlockEndHorizontal: '0',
  formFieldFeedbackColumnGap: '6px',
  formFieldFeedbackMarginBlockStart: '8px',
  formFieldFeedbackBoxShadow: props => {
    return `${resolveValue(props, props.theme.elevationBoxShadow3)}`;
  },
  formFieldFeedbackBorderRadius: props => {
    return `${resolveValue(props, props.theme.jatoRadiiSm)}`;
  },
  formFieldFeedbackBorderWidthTop: '1px',
  formFieldFeedbackBorderWidthRight: '1px',
  formFieldFeedbackBorderWidthBottom: '2px',
  formFieldFeedbackBorderWidthLeft: '1px',
  formFieldFeedbackPaddingInline: '6px',
  formFieldFeedbackPaddingBlock: '2px',
  formFieldFeedbackContentFontSize: '11px',
  formFieldFeedbackContentColor: props => {
    return `${resolveValue(props, props.theme.jatoTypographyTextColorSecondary)}`;
  },
  formFieldFeedbackContentLineHeight: '18px',
  formFieldFeedbackContentFontWeight: '500',
  formFieldFeedbackBorderColorError: props => {
    return `${resolveValue(props, props.theme.jatoMessagesInlineBorderError)}`;
  },
  formFieldFeedbackBorderColorSuccess: props => {
    return `${resolveValue(props, props.theme.jatoMessagesInlineBorderSuccess)}`;
  },
  formFieldFeedbackMarginBlockStartHorizontal: props => {
    return `calc(
    ${resolveValue(props, props.theme.formFieldFeedbackMarginBlockStart)} - ${resolveValue(props, props.theme.formGap)}
  )`;
  },
  formFieldFeedbackIconSize: '16px',
  formFieldFeedbackIconColorError: props => {
    return `${resolveValue(props, props.theme.colorNegative)}`;
  },
  formFieldFeedbackIconColorSuccess: props => {
    return `${resolveValue(props, props.theme.colorStatusSuccess)}`;
  },
  formFieldFeedbackMarginBlockEndSmall: '64px',
  formFieldFeedbackMarginBlockEndMedium: '80px',
  formFieldFeedbackMarginBlockEndLarge: '96px',
  formFieldGroupGap: '16px',
  formFieldGroupLabelFontWeight: props => {
    return `${resolveValue(props, props.theme.typographyFontWeightMedium)}`;
  },
  formFieldGroupLabelFontSize: props => {
    return `${resolveValue(props, props.theme.typographyFontSize)}`;
  },
  formFieldGroupLabelColor: props => {
    return `${resolveValue(props, props.theme.typographyColorHighEmphasis)}`;
  },
  formActionGroupGap: '16px',
  formActionGroupMarginBlockStart: props => {
    return `calc(24px - ${resolveValue(props, props.theme.formGap)})`;
  },
  requiredIndicatorColor: props => {
    return `${resolveValue(props, props.theme.jatoTypographyFormsTextColorRequiredAsterisk)}`;
  },
  requiredIndicatorPosition: 'absolute',
  requiredIndicatorInsetInlineStart: '-1px',
  requiredIndicatorTransform: 'translateX(-100%)',
  requiredIndicatorWidth: '6px',
  iconButtonPaddingInline: '7px',
  iconButtonPaddingBlock: '7px',
  iconButtonBorderRadius: props => {
    return `${resolveValue(props, props.theme.buttonBorderRadius)}`;
  },
  iconButtonBorderRadiusSmall: '4px',
  iconButtonWidth: '2rem',
  iconButtonOverflow: 'hidden',
  iconButtonCursor: props => {
    return `${resolveValue(props, props.theme.buttonCursor)}`;
  },
  iconButtonHeight: props => {
    return `${resolveValue(props, props.theme.buttonHeight)}`;
  },
  iconButtonMinWidth: props => {
    return `${resolveValue(props, props.theme.buttonMinWidth)}`;
  },
  iconButtonBorderRadiusCircular: '50%',
  iconButtonIconSize: '1rem',
  iconButtonWidthExtraSmall: '1.125rem',
  iconButtonHeightExtraSmall: props => {
    return `${resolveValue(props, props.theme.iconButtonWidthExtraSmall)}`;
  },
  iconButtonPaddingInlineExtraSmall: '1px',
  iconButtonPaddingBlockExtraSmall: '1px',
  iconButtonBorderRadiusExtraSmall: '2px',
  iconButtonIconSizeExtraSmall: props => {
    return `${resolveValue(props, props.theme.iconButtonIconSize)}`;
  },
  iconButtonWidthSmall: '1.5rem',
  iconButtonHeightSmall: props => {
    return `${resolveValue(props, props.theme.buttonHeightSmall)}`;
  },
  iconButtonPaddingInlineSmall: '3px',
  iconButtonPaddingBlockSmall: '3px',
  iconButtonIconSizeSmall: props => {
    return `${resolveValue(props, props.theme.iconButtonIconSize)}`;
  },
  iconButtonWidthLarge: '2.5rem',
  iconButtonHeightLarge: props => {
    return `${resolveValue(props, props.theme.buttonHeightLarge)}`;
  },
  iconButtonPaddingInlineLarge: '7px',
  iconButtonPaddingBlockLarge: '7px',
  iconButtonIconSizeLarge: props => {
    return `${resolveValue(props, props.theme.iconButtonIconSize)}`;
  },
  iconButtonWidthExtraLarge: '3rem',
  iconButtonHeightExtraLarge: '3rem',
  iconButtonPaddingInlineExtraLarge: '11px',
  iconButtonPaddingBlockExtraLarge: '11px',
  iconButtonIconSizeExtraLarge: props => {
    return `${resolveValue(props, props.theme.iconButtonIconSize)}`;
  },
  inlineEditGap: '0.5rem',
  inlineEditLabelContainerTransition: 'all 0.1s ease-in-out',
  inlineEditLabelContainerTransitionDelay: '250ms',
  inlineEditLabelContainerCursor: 'default',
  inlineEditLabelContainerBorderRadius: '0.375rem',
  inlineEditLabelContainerGap: '0.25rem',
  inlineEditLabelContainerPaddingBlockSmall: '3px',
  inlineEditLabelContainerMinHeightSmall: '24px',
  inlineEditLabelContainerPaddingBlockMedium: '4px',
  inlineEditLabelContainerMinHeightMedium: '32px',
  inlineEditLabelContainerPaddingBlockLarge: '8px',
  inlineEditLabelContainerMinHeightLarge: '40px',
  inlineEditLabelContainerBackgroundHover: props => {
    return `${resolveValue(props, props.theme.jatoCtaBackgroundTertiaryHover)}`;
  },
  inlineEditLabelContainerPaddingInlineHover: '9px',
  inlineEditLabelFontSize: '13px',
  inlineEditLabelLineHeight: '19px',
  inlineEditLabelMarginBlockEnd: '-1px',
  inlineEditLabelColor: props => {
    return `${resolveValue(props, props.theme.jatoTypographyTextColorPrimary)}`;
  },
  inlineEditLabelCursor: 'text',
  inlineEditLabelBorderRadius: '1px',
  inlineEditLabelRowGap: '13px',
  inlineEditLabelPaddingBlockSmall: '0',
  inlineEditLabelPaddingBlockMedium: '3px',
  inlineEditLabelPaddingBlockLarge: '3px',
  inlineEditPlaceholderColor: props => {
    return `${resolveValue(props, props.theme.jatoTypographyFormsTextColorPlaceholderText)}`;
  },
  inlineEditPlaceholderFontWeight: '350',
  inlineEditActionsGap: '0.25rem',
  inlineEditActionsTransition: 'opacity 0.1s ease-in-out',
  inlineEditActionsTransitionDelay: '250ms',
  inlineEditActionsOpacity: '0',
  inlineEditActionsOpacityHover: '1',
  inlineEditActionsOpacityFocus: '1',
  inlineEditActionsTransitionFocus: 'none',
  inlineEditEditingActionsGap: '0.5rem',
  inlineNotificationGridTemplateColumns: '1fr 0fr 0fr',
  inlineNotificationPaddingBlock: '0px',
  inlineNotificationPaddingInline: '12px 9px',
  inlineNotificationBorderTopWidth: '1px',
  inlineNotificationBorderBottomWidth: '2px',
  inlineNotificationBorderLeftWidth: '1px',
  inlineNotificationBorderRightWidth: '1px',
  inlineNotificationBorderStyle: 'solid',
  inlineNotificationMinHeight: '39px',
  inlineNotificationLineHeight: '16px',
  inlineNotificationFontSize: props => {
    return `${resolveValue(props, props.theme.typographyFontSizeSmall)}`;
  },
  inlineNotificationFontWeight: '400',
  inlineNotificationBorderRadius: props => {
    return `${resolveValue(props, props.theme.jatoRadiiSm)}`;
  },
  inlineNotificationBoxShadow: props => {
    return `${resolveValue(props, props.theme.elevationBoxShadow3)}`;
  },
  inlineNotificationJustifyContent: 'center',
  inlineNotificationGridTemplateArea: '"content actions dismiss"',
  inlineNotificationMinHeightSmall: '25px',
  inlineNotificationContentPaddingBlockSmall: '0',
  inlineNotificationPaddingInlineSmall: '6px',
  inlineNotificationFontWeightSmall: '500',
  inlineNotificationMinHeightLarge: '51px',
  inlineNotificationFontSizeLarge: props => {
    return `${resolveValue(props, props.theme.typographyFontSize)}`;
  },
  inlineNotificationFontWeightLarge: '500',
  inlineNotificationGridTemplateAreaVertical: '"content dismiss" ". actions"',
  inlineNotificationPaddingInlineVertical: '12px 6px',
  inlineNotificationRowGapVertical: '0',
  inlineNotificationBorderRadiusRounded: props => {
    return `${resolveValue(props, props.theme.jatoRadiiSm)}`;
  },
  inlineNotificationPaddingBlockActionable: '3px',
  inlineNotificationBorderColorInfo: props => {
    return `${resolveValue(props, props.theme.jatoMessagesInlineBorderInformation)}`;
  },
  inlineNotificationColorInfo: props => {
    return `${resolveValue(props, props.theme.jatoTypographyTextColorSecondary)}`;
  },
  inlineNotificationFontWeightInfo: props => {
    return `${resolveValue(props, props.theme.typographyFontWeightRegular)}`;
  },
  inlineNotificationColorInfoHover: props => {
    return `${resolveValue(props, props.theme.typographyColorHighEmphasis)}`;
  },
  inlineNotificationBorderColorWarning: props => {
    return `${resolveValue(props, props.theme.jatoMessagesInlineBorderWarning)}`;
  },
  inlineNotificationColorWarning: props => {
    return `${resolveValue(props, props.theme.jatoTypographyTextColorSecondary)}`;
  },
  inlineNotificationFontWeightWarning: props => {
    return `${resolveValue(props, props.theme.typographyFontWeightRegular)}`;
  },
  inlineNotificationColorWarningHover: props => {
    return `${resolveValue(props, props.theme.typographyColorHighEmphasis)}`;
  },
  inlineNotificationBorderColorError: props => {
    return `${resolveValue(props, props.theme.jatoMessagesInlineBorderError)}`;
  },
  inlineNotificationColorError: props => {
    return `${resolveValue(props, props.theme.jatoTypographyTextColorSecondary)}`;
  },
  inlineNotificationFontWeightError: props => {
    return `${resolveValue(props, props.theme.typographyFontWeightRegular)}`;
  },
  inlineNotificationColorErrorHover: props => {
    return `${resolveValue(props, props.theme.typographyColorHighEmphasis)}`;
  },
  inlineNotificationBorderColorSuccess: props => {
    return `${resolveValue(props, props.theme.jatoMessagesInlineBorderSuccess)}`;
  },
  inlineNotificationColorSuccess: props => {
    return `${resolveValue(props, props.theme.jatoTypographyTextColorSecondary)}`;
  },
  inlineNotificationFontWeightSuccess: props => {
    return `${resolveValue(props, props.theme.typographyFontWeightRegular)}`;
  },
  inlineNotificationColorSuccessHover: props => {
    return `${resolveValue(props, props.theme.typographyColorHighEmphasis)}`;
  },
  inlineNotificationBackgroundColorCritical: props => {
    return `${resolveValue(props, props.theme.jatoBackgroundElevationLevel1)}`;
  },
  inlineNotificationBorderColorCritical: props => {
    return `${resolveValue(props, props.theme.colorStatusError)}`;
  },
  inlineNotificationColorCritical: props => {
    return `${resolveValue(props, props.theme.jatoTypographyTextColorSecondary)}`;
  },
  inlineNotificationFontWeightCritical: props => {
    return `${resolveValue(props, props.theme.typographyFontWeightMedium)}`;
  },
  inlineNotificationColorCriticalHover: props => {
    return `${resolveValue(props, props.theme.colorStatusErrorContrast)}`;
  },
  inlineNotificationIconColorCritical: props => {
    return `${resolveValue(props, props.theme.colorStatusErrorContrast)}`;
  },
  inlineNotificationIndicatorBackgroundColorCritical: 'transparent',
  inlineNotificationDismissColorCritical: props => {
    return `${resolveValue(props, props.theme.colorStatusErrorContrast)}`;
  },
  inlineNotificationIconFontSize: '16px',
  inlineNotificationIconMarginInlineEnd: '8px',
  inlineNotificationIconMarginBlock: '0',
  inlineNotificationIconMarginInlineEndSmall: '8px',
  inlineNotificationIconMarginBlockVertical: '5px',
  inlineNotificationIconColorInfo: props => {
    return `${resolveValue(props, props.theme.colorStatusInfo)}`;
  },
  inlineNotificationIconColorWarning: props => {
    return `${resolveValue(props, props.theme.colorStatusWarning)}`;
  },
  inlineNotificationIconColorError: props => {
    return `${resolveValue(props, props.theme.colorStatusError)}`;
  },
  inlineNotificationIconColorSuccess: props => {
    return `${resolveValue(props, props.theme.colorStatusSuccess)}`;
  },
  inlineNotificationContainerGap: '8px',
  inlineNotificationContainerJustifyContent: 'center',
  inlineNotificationContainerAlignItems: 'center',
  inlineNotificationContainerJustifyContentVertical: 'flex-start',
  inlineNotificationContainerAlignItemsVertical: 'flex-start',
  inlineNotificationContentPaddingInline: '0',
  inlineNotificationContentPaddingBlock: '6px',
  inlineNotificationContentJustifySelf: 'center',
  inlineNotificationContentAlignSelf: 'center',
  inlineNotificationContentAlignSelfVertical: 'flex-start',
  inlineNotificationIndicatorDisplay: 'none',
  inlineNotificationIndicatorWidth: '3px',
  inlineNotificationIndicatorInsetInlineStart: props => {
    return `calc(
    ${resolveValue(props, props.theme.inlineNotificationBorderTopWidth)} * -1
  )`;
  },
  inlineNotificationIndicatorInsetBlock: props => {
    return `calc(
    ${resolveValue(props, props.theme.inlineNotificationBorderTopWidth)} * -1
  )`;
  },
  inlineNotificationIndicatorBackgroundColorInfo: props => {
    return `${resolveValue(props, props.theme.colorStatusInfo)}`;
  },
  inlineNotificationIndicatorBackgroundColorWarning: props => {
    return `${resolveValue(props, props.theme.colorStatusWarning)}`;
  },
  inlineNotificationIndicatorBackgroundColorError: props => {
    return `${resolveValue(props, props.theme.colorStatusError)}`;
  },
  inlineNotificationIndicatorBackgroundColorSuccess: props => {
    return `${resolveValue(props, props.theme.colorStatusSuccess)}`;
  },
  inlineNotificationActionsPaddingBlock: '4px',
  inlineNotificationActionsPaddingInline: '0',
  inlineNotificationActionsGap: '8px',
  inlineNotificationActionsJustifySelf: 'flex-end',
  inlineNotificationActionsPaddingBlockVertical: '0 3px',
  inlineNotificationActionsPaddingInlineVertical: '0',
  inlineNotificationDismissMarginInlineStart: '8px',
  inlineNotificationDismissMarginBlock: '0',
  inlineNotificationDismissJustifySelf: 'flex-end',
  inlineNotificationActionsMarginInlineStart: '0',
  inlineNotificationDismissMarginBlockVertical: '0',
  inlineNotificationLinkFontWeight: '700',
  inlineNotificationLinkFontSize: props => {
    return `${resolveValue(props, props.theme.typographyLinkFontSize)}`;
  },
  inlineNotificationLinkColorActive: props => {
    return `${resolveValue(props, props.theme.typographyLinkColorActive)}`;
  },
  inlineNotificationLinkColorVisited: props => {
    return `${resolveValue(props, props.theme.typographyLinkColorVisited)}`;
  },
  inlineNotificationLinkColorFocus: 'inherit',
  inlineNotificationLinkOutlineColorFocus: 'inherit',
  inlineNotificationLinkColorInfo: props => {
    return `${resolveValue(props, props.theme.typographyLinkColor)}`;
  },
  inlineNotificationLinkColorInfoHover: props => {
    return `${resolveValue(props, props.theme.jatoCtaLinksTextColorHover)}`;
  },
  inlineNotificationLinkFontWeightInfo: props => {
    return `${resolveValue(props, props.theme.inlineNotificationLinkFontWeight)}`;
  },
  inlineNotificationLinkColorWarning: props => {
    return `${resolveValue(props, props.theme.typographyLinkColor)}`;
  },
  inlineNotificationLinkColorWarningHover: props => {
    return `${resolveValue(props, props.theme.jatoCtaLinksTextColorHover)}`;
  },
  inlineNotificationLinkFontWeightWarning: props => {
    return `${resolveValue(props, props.theme.inlineNotificationLinkFontWeight)}`;
  },
  inlineNotificationLinkColorError: props => {
    return `${resolveValue(props, props.theme.typographyLinkColor)}`;
  },
  inlineNotificationLinkColorErrorHover: props => {
    return `${resolveValue(props, props.theme.jatoCtaLinksTextColorHover)}`;
  },
  inlineNotificationLinkFontWeightError: props => {
    return `${resolveValue(props, props.theme.inlineNotificationLinkFontWeight)}`;
  },
  inlineNotificationLinkColorSuccess: props => {
    return `${resolveValue(props, props.theme.typographyLinkColor)}`;
  },
  inlineNotificationLinkColorSuccessHover: props => {
    return `${resolveValue(props, props.theme.jatoCtaLinksTextColorHover)}`;
  },
  inlineNotificationLinkFontWeightSuccess: props => {
    return `${resolveValue(props, props.theme.inlineNotificationLinkFontWeight)}`;
  },
  inlineNotificationLinkColorCritical: props => {
    return `${resolveValue(props, props.theme.typographyLinkColor)}`;
  },
  inlineNotificationLinkColorCriticalHover: props => {
    return `${resolveValue(props, props.theme.jatoCtaLinksTextColorHover)}`;
  },
  inlineNotificationLinkFontWeightCritical: props => {
    return `${resolveValue(props, props.theme.inlineNotificationLinkFontWeight)}`;
  },
  inputGroupAddonButtonPaddingInline: '8px',
  inputGroupAddonButtonPaddingBlock: '8px',
  inputGroupAddonButtonColor: props => {
    return `${resolveValue(props, props.theme.applicationColor)}`;
  },
  inputGroupAddonButtonBackgroundColor: 'transparent',
  inputGroupAddonButtonBackgroundColorActive: props => {
    return `${resolveValue(props, props.theme.jatoCtaBackgroundTertiaryActive)}`;
  },
  inputGroupAddonButtonGap: '8px',
  inputGroupAddonButtonPaddingInlineLarge: '8px',
  inputGroupAddonButtonPaddingBlockLarge: '12px',
  inputGroupAddonButtonHeightLarge: '40px',
  inputGroupAddonButtonColorDisabled: props => {
    return `rgba(${resolveValue(props, props.theme.applicationColorRgb)}, 0.2)`;
  },
  searchGroupAddonButtonColor: props => {
    return `${resolveValue(props, props.theme.colorGray75)}`;
  },
  inputGroupBorderWidth: '1px',
  inputGroupBorderStyle: 'solid',
  inputGroupBorderColor: props => {
    return `${resolveValue(props, props.theme.textInputBorderColor)}`;
  },
  inputGroupBorder: props => {
    return `${resolveValue(props, props.theme.inputGroupBorderWidth)}
    ${resolveValue(props, props.theme.inputGroupBorderStyle)} ${resolveValue(props, props.theme.inputGroupBorderColor)}`;
  },
  inputGroupBorderRadius: props => {
    return `${resolveValue(props, props.theme.jatoRadiiMed)} ${resolveValue(props, props.theme.jatoRadiiMed)} 0 0`;
  },
  inputGroupColumnGap: '2px',
  inputGroupPaddingInlineStart: '8px',
  inputGroupPaddingInlineEnd: props => {
    return `${resolveValue(props, props.theme.inputGroupPaddingInlineStart)}`;
  },
  inputGroupPaddingInline: props => {
    return `${resolveValue(props, props.theme.inputGroupPaddingInlineStart)}
    ${resolveValue(props, props.theme.inputGroupPaddingInlineEnd)}`;
  },
  inputGroupPaddingBlockStart: '0',
  inputGroupPaddingBlockEnd: props => {
    return `${resolveValue(props, props.theme.inputGroupPaddingBlockStart)}`;
  },
  inputGroupPaddingBlock: props => {
    return `${resolveValue(props, props.theme.inputGroupPaddingBlockStart)}
    ${resolveValue(props, props.theme.inputGroupPaddingBlockEnd)}`;
  },
  inputGroupWidth: '100%',
  inputGroupHeight: '32px',
  inputGroupHeightSmall: '24px',
  inputGroupBorderRadiusSmall: props => {
    return `${resolveValue(props, props.theme.jatoRadiiSm)} ${resolveValue(props, props.theme.jatoRadiiSm)} 0 0`;
  },
  inputGroupHeightLarge: '40px',
  inputGroupBorderColorDisabled: props => {
    return `${resolveValue(props, props.theme.textInputBorderColorDisabled)}`;
  },
  inputGroupColorDisabled: props => {
    return `${resolveValue(props, props.theme.textInputColorDisabled)}`;
  },
  inputGroupBackgroundColorDisabled: props => {
    return `${resolveValue(props, props.theme.textInputBackgroundColorDisabled)}`;
  },
  inputGroupCursorDisabled: 'default',
  inputGroupBorderColorInvalid: props => {
    return `${resolveValue(props, props.theme.textInputBorderColorInvalid)}`;
  },
  inputGroupBackgroundColorInvalid: props => {
    return `${resolveValue(props, props.theme.textInputBackgroundColorInvalid)}`;
  },
  inputGroupBackgroundColorHoverInvalid: props => {
    return `${resolveValue(props, props.theme.textInputBackgroundColorHoverInvalid)}`;
  },
  inputGroupBoxShadowHoverInvalid: props => {
    return `${resolveValue(props, props.theme.textInputBoxShadowHoverInvalid)}`;
  },
  inputGroupBorderColorHoverInvalid: props => {
    return `${resolveValue(props, props.theme.textInputBorderColorHoverInvalid)}`;
  },
  inputGroupBorderColorHover: props => {
    return `${resolveValue(props, props.theme.textInputBorderColorHover)}`;
  },
  inputGroupBoxShadowHover: props => {
    return `${resolveValue(props, props.theme.textInputBoxShadowHover)}`;
  },
  inputGroupBackgroundColorHover: props => {
    return `${resolveValue(props, props.theme.textInputBackgroundColorHover)}`;
  },
  inputGroupBorderColorFocused: props => {
    return `${resolveValue(props, props.theme.textInputBorderColorFocused)}`;
  },
  inputGroupBoxShadowFocused: props => {
    return `${resolveValue(props, props.theme.textInputBoxShadowFocused)}`;
  },
  inputGroupPaddingBlockStartLarge: '4px',
  inputGroupPaddingBlockEndLarge: props => {
    return `${resolveValue(props, props.theme.inputGroupPaddingBlockStartLarge)}`;
  },
  inputGroupPaddingInlineStartLeadingAddon: '0',
  inputGroupPaddingInlineEndTrailingAddon: '4px',
  searchGroupBackgroundColor: props => {
    return `${resolveValue(props, props.theme.textInputBackgroundColor)}`;
  },
  searchGroupBorderColor: props => {
    return `${resolveValue(props, props.theme.textInputBorderColor)}`;
  },
  listBorderRadius: '2px',
  listBorder: props => {
    return `1px solid ${resolveValue(props, props.theme.elevationBorderColor4)}`;
  },
  listBackground: props => {
    return `${resolveValue(props, props.theme.elevationBackgroundColor4)}`;
  },
  listBoxShadow: props => {
    return `${resolveValue(props, props.theme.elevationBoxShadow4)}`;
  },
  listHeight: '256px',
  listHeaderBorderBottom: props => {
    return `1px solid ${resolveValue(props, props.theme.colorGray25)}`;
  },
  listItemHeight: '32px',
  listItemPaddingInline: '12px',
  listItemPaddingBlock: '0',
  listItemColumnGap: '8px',
  listItemCursor: 'pointer',
  listItemColor: props => {
    return `${resolveValue(props, props.theme.typographyColorBody)}`;
  },
  listItemFontSize: '14px',
  listItemFontWeight: '400',
  listItemLineHeight: '18px',
  listItemFontFamily: props => {
    return `${resolveValue(props, props.theme.typographyFontFamily)}`;
  },
  listItemBackgroundColorHover: 'rgba(0, 115, 231, 0.1)',
  listItemBackgroundColorFocus: props => {
    return `${resolveValue(props, props.theme.menuItemBackgroundColorFocus)}`;
  },
  listItemBoxShadowFocus: props => {
    return `${resolveValue(props, props.theme.menuItemBoxShadowFocus)}`;
  },
  listItemIconFontSize: '16px',
  listHeaderPaddingInline: '8px',
  listHeaderPaddingBlock: '8px 0',
  listHeaderItemsMarginInline: '-8px',
  listHeaderItemsMarginBlock: '0',
  listHeaderItemsHeight: '40px',
  listHeaderItemsMarginInlineFirstChild: '-8px',
  listHeaderItemsMarginBlockFirstChild: '-8px 0',
  listFooterHeight: '40px',
  listFooterPaddingInline: '4px',
  listFooterPaddingBlock: '0',
  listFooterBorderTop: props => {
    return `1px solid ${resolveValue(props, props.theme.colorGray25)}`;
  },
  listFooterColumnGap: '8px',
  listFooterTrailingPaddingInlineEnd: 'auto',
  listFooterContentColumnGap: '8px',
  loaderWidth: '36px',
  loaderBlockBorderRadius: '50%',
  loaderBlockAnimationDuration: '900ms',
  loaderBlockAnimationDelay: '200ms',
  loaderBlockAnimationTimingFunction: 'ease-in',
  loaderBlockSize: '8px',
  loaderBlockOpacity: '0.94',
  loaderBlockBackgroundColorPrimary: props => {
    return `${resolveValue(props, props.theme.jatoColorElectric1770)}`;
  },
  loaderBlockBackgroundColorSecondary: props => {
    return `${resolveValue(props, props.theme.jatoColorElectric1770)}`;
  },
  loginPageWidth: '100vw',
  loginPageHeight: '100vh',
  loginPageBackgroundColor: props => {
    return `${resolveValue(props, props.theme.jatoSigninBackground)}`;
  },
  loginPageBackdropBlendMode: 'initial',
  loginPageBackdropBackgroundSm: props => {
    return `${resolveValue(props, props.theme.jatoBackgroundElevationLevel1)}`;
  },
  loginPageBackdropBackgroundMd: 'url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjYwIiBoZWlnaHQ9Ijc0MiIgdmlld0JveD0iMCAwIDY2MCA3NDIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMF81M18zMDUzKSI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNDYuMTEyOCA1NTcuOTM5Qy0yNy44Mzk4IDU1Ny45MzkgLTg3Ljc5MDkgNDk3Ljk5MyAtODcuNzkwOSA0MjQuMDQ3Qy04Ny43OTA5IDM1MC4xMDEgLTI3LjgzOTggMjkwLjE1NSA0Ni4xMTI4IDI5MC4xNTVDMTIwLjA2NiAyOTAuMTU1IDE4MC4wMTcgMzUwLjEwMSAxODAuMDE3IDQyNC4wNDdDMTgwLjAxNyA0OTcuOTkzIDEyMC4wNjYgNTU3LjkzOSA0Ni4xMTI4IDU1Ny45MzlaTTQ2LjExMjggNTQ0LjI5M0MtMjAuMzA4NyA1NDQuMjkzIC03NC4xNDgxIDQ5MC40NTMgLTc0LjE0ODEgNDI0LjA0N0MtNzQuMTQ4MSAzNTcuNjQgLTIwLjMwODcgMzAzLjggNDYuMTEyOCAzMDMuOEMxMTIuNTM0IDMwMy44IDE2Ni4zNzQgMzU3LjY0IDE2Ni4zNzQgNDI0LjA0N0MxNjYuMzc0IDQ5MC40NTMgMTEyLjUzNCA1NDQuMjkzIDQ2LjExMjggNTQ0LjI5M1oiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcl81M18zMDUzKSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTU3MC4zNCA1NjUuNzg4TDUyNC41NTQgNTY3LjQ4NUM1MTQuNjI4IDU2Ny40NTggNTA4LjYxNyA1NjUuODAxIDUwNC45NDQgNTYzLjg0NUM1MDEuNTQ0IDU2Mi4wMzQgNDk5LjM3MyA1NTkuNTY5IDQ5Ny43NjYgNTU2LjAyOUM0OTYuMDAzIDU1Mi4xNDQgNDk0Ljg5IDU0Ni44NTggNDk0LjMzMyA1MzkuNjc0QzQ5My44MjYgNTMzLjEzMyA0OTMuODMxIDUyNS45NjYgNDkzLjgzNSA1MTcuNzkzQzQ5My44MzYgNTE3LjIyMyA0OTMuODM2IDUxNi42NDkgNDkzLjgzNiA1MTYuMDY5TDQ5My44MzYgMjcxLjQ5MUM0OTMuODM2IDI3MS4yNjggNDkzLjkyMiAyNzAuOTg0IDQ5NC4xOTEgMjcwLjcxNEM0OTQuNDUyIDI3MC40NTIgNDk0LjcyNCAyNzAuMzY0IDQ5NC45NjcgMjcwLjM2NEg1NzIuNTI2QzU4Mi4wNjggMjcwLjM2NCA1OTEuMDcxIDI2NS42NDIgNTk2LjM4NiAyNTcuNDA5TDU5Ni4zOTkgMjU3LjM4OEw2NTUuMzQ3IDE2Ni40NjZMNjU1LjM1OSAxNjYuNDQ3QzY2Ny43ODIgMTQ3LjQyMSA2NTMuOTc3IDEyMi41MzEgNjMxLjUyNCAxMjIuNTMxSDQ5Ni4xOThDNDk1LjU4NiAxMjIuNTMxIDQ5NS4wNjkgMTIyLjAwOSA0OTUuMDY5IDEyMS40MDRWMjguNjA3MUM0OTUuMDY5IDEzLjE0NzQgNDgyLjU0NiAwIDQ2Ni42NTMgMEgzMjUuNDUzQzMwOS43NzcgMCAyOTcuMDM3IDEyLjczNDUgMjk3LjAzNyAyOC40MTcxVjIzOS4wOTdDMjQwLjI2MSAxNjIuMTM3IDE0OC45NzMgMTEyLjE2IDQ1Ljk0MzkgMTEyLjE2Qy0xMjYuMzM1IDExMi4xNiAtMjY2IDI1MS44MDggLTI2NiA0MjQuMDgxQy0yNjYgNTk2LjM1MiAtMTI2LjMzNSA3MzYgNDUuOTQzOSA3MzZDMTUwLjg1NSA3MzYgMjQzLjU5MSA2ODQuMTggMzAwLjExMyA2MDQuODE3QzMwMy4zNDEgNjI5LjQzNyAzMTAuMDEzIDY1MS44NjEgMzIzLjkwOSA2NzIuMzk0TDMyMy45MzIgNjcyLjQyN0wzMjMuOTU1IDY3Mi40NjFDMzY1LjI3MiA3MzIuNzI2IDQzNy43NjQgNzM1LjMwMSA0OTUuODE3IDczNS4zMDFDNTI0LjMwOCA3MzUuMzAxIDU0NS42NTUgNzMyLjYyMSA1NzUuNDk3IDcyOC4xNDFMNTc1LjUzNCA3MjguMTM2TDU3NS41NzEgNzI4LjEzQzU4OS4zOTQgNzI1Ljk3OCA1OTkuODA2IDcxNC4wOTkgNTk5LjgwNiA2OTkuOTY4VjU5NC4yQzU5OS44MDYgNTc4LjEyOSA1ODYuNDgzIDU2NS4yNTEgNTcwLjM2NiA1NjUuNzg3TDU3MC4zNCA1NjUuNzg4Wk0zMTIuMDIxIDU4Ni44MTNDMzE0LjIyNSA2MTcuMDM3IDMyMC4wMjYgNjQyLjMxNCAzMzUuMjA3IDY2NC43NDRDMzcxLjk1IDcxOC4zMzggNDM2LjcyNiA3MjEuNjU2IDQ5NS44MTcgNzIxLjY1NkM1MjMuMjggNzIxLjY1NiA1NDMuODMgNzE5LjA5NiA1NzMuNDczIDcxNC42NDdDNTgwLjc2MiA3MTMuNTEyIDU4Ni4xNjMgNzA3LjI2MSA1ODYuMTYzIDY5OS45NjhWNTk0LjJDNTg2LjE2MyA1ODUuODY1IDU3OS4yNSA1NzkuMTQ0IDU3MC44MiA1NzkuNDI1TDUyNC43OTcgNTgxLjEzMUM0ODAuMTQ1IDU4MS4xMzEgNDgwLjE2NiA1NTIuNTc4IDQ4MC4xOTIgNTE3Ljg2NEM0ODAuMTkzIDUxNy4wMiA0ODAuMTk0IDUxNi4xNzIgNDgwLjE5NCA1MTUuMzIxVjI3MS40OTFDNDgwLjE5NCAyNjMuNDM1IDQ4Ni44MjIgMjU2LjcxOSA0OTQuOTY3IDI1Ni43MTlINTcyLjUyNkM1NzcuNTQ1IDI1Ni43MTkgNTgyLjE4NiAyNTQuMjU2IDU4NC45MzIgMjQ5Ljk5Nkw2NDMuOTI5IDE1OC45OTdDNjUwLjM3IDE0OS4xNDkgNjQzLjI2OCAxMzYuMTc2IDYzMS41MjQgMTM2LjE3Nkg0OTYuMTk4QzQ4OC4wNTMgMTM2LjE3NiA0ODEuNDI2IDEyOS41NDggNDgxLjQyNiAxMjEuNDA0VjI4LjYwNzFDNDgxLjQyNiAyMC40NjI5IDQ3NC43OTMgMTMuNjQ1NCA0NjYuNjUzIDEzLjY0NTRIMzI1LjQ1M0MzMTcuMzA4IDEzLjY0NTQgMzEwLjY4IDIwLjI3MzkgMzEwLjY4IDI4LjQxNzFWMjg2LjY2N0MzMDYuNDgzIDI3OC41OTkgMzAxLjkyOCAyNzAuNzQ3IDI5Ny4wMzcgMjYzLjEzMUMyNDMuOTk4IDE4MC41NDggMTUxLjM5IDEyNS44MDYgNDUuOTQzOSAxMjUuODA2Qy0xMTguODA0IDEyNS44MDYgLTI1Mi4zNTcgMjU5LjM0OCAtMjUyLjM1NyA0MjQuMDgxQy0yNTIuMzU3IDU4OC44MTIgLTExOC44MDQgNzIyLjM1NSA0NS45NDM5IDcyMi4zNTVDMTUyLjEwNiA3MjIuMzU1IDI0NS4yNTQgNjY2Ljg2NSAyOTguMTExIDU4My4zNEMzMDIuNjg0IDU3Ni4xMTUgMzA2Ljk1NSA1NjguNjggMzEwLjkwNiA1NjEuMDUzQzMxMS4wOSA1NzAuMDMzIDMxMS40MjMgNTc4LjYwNSAzMTIuMDIxIDU4Ni44MTNaIiBmaWxsPSJ1cmwoI3BhaW50MV9saW5lYXJfNTNfMzA1MykiLz4KPC9nPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyXzUzXzMwNTMiIHgxPSItMTk0LjQyMiIgeTE9Ijc2My40MjkiIHgyPSIyOTIuODczIiB5Mj0iLTEyOC4zNzIiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iIzAwMDA4QiIvPgo8c3RvcCBvZmZzZXQ9IjAuMDAwMSIgc3RvcC1jb2xvcj0iIzFBNkFGRiIvPgo8c3RvcCBvZmZzZXQ9IjAuMDAwMiIgc3RvcC1jb2xvcj0iIzg3NTY5RiIvPgo8c3RvcCBvZmZzZXQ9IjAuMDAwMyIgc3RvcC1jb2xvcj0iI0VCNDM0NyIvPgo8c3RvcCBvZmZzZXQ9IjAuMTA1IiBzdG9wLWNvbG9yPSIjRTFCQzM2Ii8+CjxzdG9wIG9mZnNldD0iMC4yMDUiIHN0b3AtY29sb3I9IiNFQjQzNDciLz4KPHN0b3Agb2Zmc2V0PSIwLjQxNSIgc3RvcC1jb2xvcj0iIzg3NTY5RiIvPgo8c3RvcCBvZmZzZXQ9IjAuNjMiIHN0b3AtY29sb3I9IiMxQTZBRkYiLz4KPHN0b3Agb2Zmc2V0PSIwLjg5IiBzdG9wLWNvbG9yPSIjMDAwMDhCIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQxX2xpbmVhcl81M18zMDUzIiB4MT0iLTE5NC40MjIiIHkxPSI3NjMuNDI5IiB4Mj0iMjkyLjg3MyIgeTI9Ii0xMjguMzcyIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiMwMDAwOEIiLz4KPHN0b3Agb2Zmc2V0PSIwLjAwMDEiIHN0b3AtY29sb3I9IiMxQTZBRkYiLz4KPHN0b3Agb2Zmc2V0PSIwLjAwMDIiIHN0b3AtY29sb3I9IiM4NzU2OUYiLz4KPHN0b3Agb2Zmc2V0PSIwLjAwMDMiIHN0b3AtY29sb3I9IiNFQjQzNDciLz4KPHN0b3Agb2Zmc2V0PSIwLjEwNSIgc3RvcC1jb2xvcj0iI0UxQkMzNiIvPgo8c3RvcCBvZmZzZXQ9IjAuMjA1IiBzdG9wLWNvbG9yPSIjRUI0MzQ3Ii8+CjxzdG9wIG9mZnNldD0iMC40MTUiIHN0b3AtY29sb3I9IiM4NzU2OUYiLz4KPHN0b3Agb2Zmc2V0PSIwLjYzIiBzdG9wLWNvbG9yPSIjMUE2QUZGIi8+CjxzdG9wIG9mZnNldD0iMC44OSIgc3RvcC1jb2xvcj0iIzAwMDA4QiIvPgo8L2xpbmVhckdyYWRpZW50Pgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzUzXzMwNTMiPgo8cmVjdCB3aWR0aD0iOTI2IiBoZWlnaHQ9Ijc0MiIgZmlsbD0id2hpdGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yNjYpIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg==")',
  loginPageBackdropBackgroundLg: 'url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzUyIiBoZWlnaHQ9Ijc5MSIgdmlld0JveD0iMCAwIDc1MiA3OTEiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNjUuMTg3MyA1OTEuNDlDLTE3LjU0OTggNTkxLjQ5IC04NC42MjIzIDUyNC40NTkgLTg0LjYyMjMgNDQxLjc3MkMtODQuNjIyMyAzNTkuMDg1IC0xNy41NDk4IDI5Mi4wNTMgNjUuMTg3MyAyOTIuMDUzQzE0Ny45MjUgMjkyLjA1MyAyMTQuOTk3IDM1OS4wODUgMjE0Ljk5NyA0NDEuNzcyQzIxNC45OTcgNTI0LjQ1OSAxNDcuOTI1IDU5MS40OSA2NS4xODczIDU5MS40OVpNNjUuMTg3MyA1NzYuMjMyQy05LjEyNDE4IDU3Ni4yMzIgLTY5LjM1ODkgNTE2LjAyOCAtNjkuMzU4OSA0NDEuNzcyQy02OS4zNTg5IDM2Ny41MTYgLTkuMTI0MTEgMzA3LjMxMSA2NS4xODczIDMwNy4zMTFDMTM5LjQ5OSAzMDcuMzExIDE5OS43MzQgMzY3LjUxNiAxOTkuNzM0IDQ0MS43NzJDMTk5LjczNCA1MTYuMDI4IDEzOS40OTkgNTc2LjIzMiA2NS4xODczIDU3Ni4yMzJaIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXJfMjM4MTJfMTU5NykiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02NTEuNjg2IDYwMC4yNjhMNjAwLjQ2IDYwMi4xNjVDNTg5LjM1NSA2MDIuMTM1IDU4Mi42MzEgNjAwLjI4MyA1NzguNTIxIDU5OC4wOTVDNTc0LjcxNyA1OTYuMDcgNTcyLjI4OCA1OTMuMzE0IDU3MC40OSA1ODkuMzU1QzU2OC41MTggNTg1LjAxMSA1NjcuMjcyIDU3OS4xMDEgNTY2LjY1IDU3MS4wNjdDNTY2LjA4MyA1NjMuNzUzIDU2Ni4wODcgNTU1LjczOSA1NjYuMDkzIDU0Ni41OTlDNTY2LjA5MyA1NDUuOTYyIDU2Ni4wOTQgNTQ1LjMyIDU2Ni4wOTQgNTQ0LjY3Mkw1NjYuMDk0IDI3MS4xODJDNTY2LjA5NCAyNzAuOTMzIDU2Ni4xOSAyNzAuNjE2IDU2Ni40OTEgMjcwLjMxNEM1NjYuNzgzIDI3MC4wMjEgNTY3LjA4NiAyNjkuOTIzIDU2Ny4zNTkgMjY5LjkyM0g2NTQuMTNDNjY0LjgwNyAyNjkuOTIzIDY3NC44NzggMjY0LjY0MiA2ODAuODI1IDI1NS40MzZMNjgwLjg0IDI1NS40MTJMNzQ2Ljc4OSAxNTMuNzQzTDc0Ni44MDMgMTUzLjcyMkM3NjAuNzAyIDEzMi40NDcgNzQ1LjI1NyAxMDQuNjE1IDcyMC4xMzcgMTA0LjYxNUg1NjguNzM2QzU2OC4wNTEgMTA0LjYxNSA1NjcuNDczIDEwNC4wMzIgNTY3LjQ3MyAxMDMuMzU1Vi0wLjQxMTQ4MkM1NjcuNDczIC0xNy42OTg2IDU1My40NjMgLTMyLjQwMDEgNTM1LjY4MSAtMzIuNDAwMUgzNzcuNzFDMzYwLjE3MSAtMzIuNDAwMSAzNDUuOTE4IC0xOC4xNjAzIDM0NS45MTggLTAuNjIzODQ4VjIzNC45NkMyODIuMzk4IDE0OC45MDIgMTgwLjI2NSA5My4wMTg0IDY0Ljk5ODMgOTMuMDE4NEMtMTI3Ljc0NSA5My4wMTg0IC0yODQgMjQ5LjE3MyAtMjg0IDQ0MS44MUMtMjg0IDYzNC40NDUgLTEyNy43NDQgNzkwLjYgNjQuOTk4MyA3OTAuNkMxODIuMzcxIDc5MC42IDI4Ni4xMjMgNzMyLjY1NCAzNDkuMzU5IDY0My45MTFDMzUyLjk3IDY3MS40NCAzNjAuNDM1IDY5Ni41MTUgMzc1Ljk4MiA3MTkuNDc1TDM3Ni4wMDcgNzE5LjUxM0wzNzYuMDMzIDcxOS41NTFDNDIyLjI1OCA3ODYuOTM5IDUwMy4zNiA3ODkuODE5IDU2OC4zMSA3ODkuODE5QzYwMC4xODUgNzg5LjgxOSA2MjQuMDY4IDc4Ni44MjEgNjU3LjQ1NSA3ODEuODEyTDY1Ny40OTYgNzgxLjgwNkw2NTcuNTM3IDc4MS43OTlDNjczLjAwMiA3NzkuMzkzIDY4NC42NTEgNzY2LjExIDY4NC42NTEgNzUwLjMwOFY2MzIuMDM5QzY4NC42NTEgNjE0LjA2NyA2NjkuNzQ2IDU5OS42NjcgNjUxLjcxNCA2MDAuMjY3TDY1MS42ODYgNjAwLjI2OFpNMzYyLjY4MiA2MjMuNzc4QzM2NS4xNDcgNjU3LjU3NCAzNzEuNjM4IDY4NS44NCAzODguNjIyIDcxMC45MjFDNDI5LjcyOSA3NzAuODUgNTAyLjIgNzc0LjU2IDU2OC4zMSA3NzQuNTZDNTk5LjAzNSA3NzQuNTYgNjIyLjAyNyA3NzEuNjk4IDY1NS4xOSA3NjYuNzIzQzY2My4zNDUgNzY1LjQ1NCA2NjkuMzg4IDc1OC40NjQgNjY5LjM4OCA3NTAuMzA4VjYzMi4wMzlDNjY5LjM4OCA2MjIuNzE4IDY2MS42NTQgNjE1LjIwMyA2NTIuMjIyIDYxNS41MTdMNjAwLjczMiA2MTcuNDI0QzU1MC43NzYgNjE3LjQyNCA1NTAuOCA1ODUuNDk2IDU1MC44MjkgNTQ2LjY3OUM1NTAuODMgNTQ1LjczNSA1NTAuODMxIDU0NC43ODcgNTUwLjgzMSA1NDMuODM1VjI3MS4xODJDNTUwLjgzMSAyNjIuMTc1IDU1OC4yNDYgMjU0LjY2NSA1NjcuMzU5IDI1NC42NjVINjU0LjEzQzY1OS43NDUgMjU0LjY2NSA2NjQuOTM5IDI1MS45MTEgNjY4LjAxIDI0Ny4xNDdMNzM0LjAxNiAxNDUuMzkxQzc0MS4yMjEgMTM0LjM3OSA3MzMuMjc2IDExOS44NzMgNzIwLjEzNyAxMTkuODczSDU2OC43MzZDNTU5LjYyNCAxMTkuODczIDU1Mi4yMDkgMTEyLjQ2MSA1NTIuMjA5IDEwMy4zNTVWLTAuNDExNDgyQzU1Mi4yMDkgLTkuNTE4MzEgNTQ0Ljc4OSAtMTcuMTQxNyA1MzUuNjgxIC0xNy4xNDE3SDM3Ny43MUMzNjguNTk3IC0xNy4xNDE3IDM2MS4xODEgLTkuNzI5NjQgMzYxLjE4MSAtMC42MjM4NDhWMjg4LjE1M0MzNTYuNDg2IDI3OS4xMzEgMzUxLjM5IDI3MC4zNTEgMzQ1LjkxOCAyNjEuODM1QzI4Ni41NzggMTY5LjQ5IDE4Mi45NyAxMDguMjc3IDY0Ljk5ODMgMTA4LjI3N0MtMTE5LjMxOSAxMDguMjc3IC0yNjguNzM3IDI1Ny42MDQgLTI2OC43MzcgNDQxLjgxQy0yNjguNzM3IDYyNi4wMTQgLTExOS4zMTkgNzc1LjM0MSA2NC45OTgzIDc3NS4zNDFDMTgzLjc3MSA3NzUuMzQxIDI4Ny45ODQgNzEzLjI5MiAzNDcuMTIgNjE5Ljg5NUMzNTIuMjM1IDYxMS44MTYgMzU3LjAxMyA2MDMuNTAyIDM2MS40MzQgNTk0Ljk3M0MzNjEuNjQgNjA1LjAxNCAzNjIuMDEyIDYxNC42IDM2Mi42ODIgNjIzLjc3OFoiIGZpbGw9InVybCgjcGFpbnQxX2xpbmVhcl8yMzgxMl8xNTk3KSIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyXzIzODEyXzE1OTciIHgxPSItMjAzLjkyIiB5MT0iODIxLjI3MSIgeDI9IjM0MC44MjQiIHkyPSItMTc2LjE4NCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjMDAwMDhCIi8+CjxzdG9wIG9mZnNldD0iMC4wMDAxIiBzdG9wLWNvbG9yPSIjMUE2QUZGIi8+CjxzdG9wIG9mZnNldD0iMC4wMDAyIiBzdG9wLWNvbG9yPSIjODc1NjlGIi8+CjxzdG9wIG9mZnNldD0iMC4wMDAzIiBzdG9wLWNvbG9yPSIjRUI0MzQ3Ii8+CjxzdG9wIG9mZnNldD0iMC4xMDUiIHN0b3AtY29sb3I9IiNFMUJDMzYiLz4KPHN0b3Agb2Zmc2V0PSIwLjIwNSIgc3RvcC1jb2xvcj0iI0VCNDM0NyIvPgo8c3RvcCBvZmZzZXQ9IjAuNDE1IiBzdG9wLWNvbG9yPSIjODc1NjlGIi8+CjxzdG9wIG9mZnNldD0iMC42MyIgc3RvcC1jb2xvcj0iIzFBNkFGRiIvPgo8c3RvcCBvZmZzZXQ9IjAuODkiIHN0b3AtY29sb3I9IiMwMDAwOEIiLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDFfbGluZWFyXzIzODEyXzE1OTciIHgxPSItMjAzLjkyIiB5MT0iODIxLjI3MSIgeDI9IjM0MC44MjQiIHkyPSItMTc2LjE4NCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjMDAwMDhCIi8+CjxzdG9wIG9mZnNldD0iMC4wMDAxIiBzdG9wLWNvbG9yPSIjMUE2QUZGIi8+CjxzdG9wIG9mZnNldD0iMC4wMDAyIiBzdG9wLWNvbG9yPSIjODc1NjlGIi8+CjxzdG9wIG9mZnNldD0iMC4wMDAzIiBzdG9wLWNvbG9yPSIjRUI0MzQ3Ii8+CjxzdG9wIG9mZnNldD0iMC4xMDUiIHN0b3AtY29sb3I9IiNFMUJDMzYiLz4KPHN0b3Agb2Zmc2V0PSIwLjIwNSIgc3RvcC1jb2xvcj0iI0VCNDM0NyIvPgo8c3RvcCBvZmZzZXQ9IjAuNDE1IiBzdG9wLWNvbG9yPSIjODc1NjlGIi8+CjxzdG9wIG9mZnNldD0iMC42MyIgc3RvcC1jb2xvcj0iIzFBNkFGRiIvPgo8c3RvcCBvZmZzZXQ9IjAuODkiIHN0b3AtY29sb3I9IiMwMDAwOEIiLz4KPC9saW5lYXJHcmFkaWVudD4KPC9kZWZzPgo8L3N2Zz4K")',
  loginPageBackdropBackgroundXl: 'url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODIwIiBoZWlnaHQ9IjgzNyIgdmlld0JveD0iMCAwIDgyMCA4MzciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNODIuODAyNCA2MjMuMTMzQy02LjAwNDAzIDYyMy4xMzMgLTc3Ljk5NjcgNTUxLjEzMyAtNzcuOTk2NyA0NjIuMzE4Qy03Ny45OTY3IDM3My41MDEgLTYuMDA0MDMgMzAxLjUwMSA4Mi44MDI0IDMwMS41MDFDMTcxLjYwOSAzMDEuNTAxIDI0My42MDIgMzczLjUwMSAyNDMuNjAyIDQ2Mi4zMThDMjQzLjYwMiA1NTEuMTMzIDE3MS42MDkgNjIzLjEzMyA4Mi44MDI0IDYyMy4xMzNaTTgyLjgwMjQgNjA2Ljc0M0MzLjAzOTcgNjA2Ljc0MyAtNjEuNjEzNiA1NDIuMDc3IC02MS42MTM2IDQ2Mi4zMThDLTYxLjYxMzYgMzgyLjU1NyAzLjAzOTc2IDMxNy44OTEgODIuODAyNCAzMTcuODkxQzE2Mi41NjUgMzE3Ljg5MSAyMjcuMjE5IDM4Mi41NTcgMjI3LjIxOSA0NjIuMzE4QzIyNy4yMTkgNTQyLjA3NyAxNjIuNTY1IDYwNi43NDMgODIuODAyNCA2MDYuNzQzWiIgZmlsbD0idXJsKCNwYWludDBfbGluZWFyXzIzODEyXzE2MDIpIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNzEyLjMyNCA2MzIuNTYxTDY1Ny4zNDEgNjM0LjU5OUM2NDUuNDIxIDYzNC41NjcgNjM4LjIwMyA2MzIuNTc3IDYzMy43OTIgNjMwLjIyN0M2MjkuNzA5IDYyOC4wNTIgNjI3LjEwMiA2MjUuMDkxIDYyNS4xNzMgNjIwLjg0QzYyMy4wNTUgNjE2LjE3MyA2MjEuNzE5IDYwOS44MjUgNjIxLjA1IDYwMS4xOTVDNjIwLjQ0MSA1OTMuMzM5IDYyMC40NDcgNTg0LjczMSA2MjAuNDUzIDU3NC45MTRDNjIwLjQ1MyA1NzQuMjMgNjIwLjQ1MyA1NzMuNTQgNjIwLjQ1NCA1NzIuODQ0TDYyMC40NTQgMjc5LjA4NEM2MjAuNDU0IDI3OC44MTYgNjIwLjU1NyAyNzguNDc2IDYyMC44OCAyNzguMTUxQzYyMS4xOTQgMjc3LjgzNiA2MjEuNTE5IDI3Ny43MzEgNjIxLjgxMSAyNzcuNzMxSDcxNC45NDhDNzI2LjQwOCAyNzcuNzMxIDczNy4yMTggMjcyLjA1OSA3NDMuNjAxIDI2Mi4xN0w3NDMuNjE3IDI2Mi4xNDVMODE0LjQwNCAxNTIuOTRMODE0LjQxOSAxNTIuOTE4QzgyOS4zMzcgMTMwLjA2NSA4MTIuNzU5IDEwMC4xNyA3ODUuNzk3IDEwMC4xN0g2MjMuMjlDNjIyLjU1NSAxMDAuMTcgNjIxLjkzNCA5OS41NDM4IDYyMS45MzQgOTguODE3M1YtMTIuNjQwNEM2MjEuOTM0IC0zMS4yMDg4IDYwNi44OTYgLTQ3IDU4Ny44MSAtNDdINDE4LjI1QzM5OS40MjUgLTQ3IDM4NC4xMjYgLTMxLjcwNDggMzg0LjEyNiAtMTIuODY4NVYyNDAuMTc2QzMxNS45NDcgMTQ3Ljc0MSAyMDYuMzIyIDg3LjcxNDQgODIuNTk5NSA4Ny43MTQ0Qy0xMjQuMjgyIDg3LjcxNDQgLTI5MiAyNTUuNDQ0IC0yOTIgNDYyLjM1OEMtMjkyIDY2OS4yNzEgLTEyNC4yODIgODM3IDgyLjU5OTUgODM3QzIwOC41ODIgODM3IDMxOS45NDUgNzc0Ljc2IDM4Ny44MTkgNjc5LjQzOEMzOTEuNjk2IDcwOS4wMDggMzk5LjcwOCA3MzUuOTQyIDQxNi4zOTYgNzYwLjYwM0w0MTYuNDIzIDc2MC42NDRMNDE2LjQ1MSA3NjAuNjg1QzQ2Ni4wNjYgODMzLjA2OCA1NTMuMTE4IDgzNi4xNjEgNjIyLjgzMyA4MzYuMTYxQzY1Ny4wNDYgODM2LjE2MSA2ODIuNjgxIDgzMi45NDEgNzE4LjUxNyA4MjcuNTYxTDcxOC41NjEgODI3LjU1NEw3MTguNjA1IDgyNy41NDdDNzM1LjIwNCA4MjQuOTYzIDc0Ny43MDggODEwLjY5NSA3NDcuNzA4IDc5My43MjJWNjY2LjY4NkM3NDcuNzA4IDY0Ny4zODMgNzMxLjcwOSA2MzEuOTE1IDcxMi4zNTUgNjMyLjU2TDcxMi4zMjQgNjMyLjU2MVpNNDAyLjEyIDY1Ny44MTNDNDA0Ljc2NiA2OTQuMTE1IDQxMS43MzMgNzI0LjQ3NSA0MjkuOTYzIDc1MS40MTZDNDc0LjA4NSA4MTUuNzg2IDU1MS44NzMgODE5Ljc3MiA2MjIuODMzIDgxOS43NzJDNjU1LjgxMiA4MTkuNzcyIDY4MC40ODkgODE2LjY5NyA3MTYuMDg1IDgxMS4zNTNDNzI0LjgzOSA4MDkuOTkgNzMxLjMyNSA4MDIuNDgyIDczMS4zMjUgNzkzLjcyMlY2NjYuNjg2QzczMS4zMjUgNjU2LjY3NCA3MjMuMDIzIDY0OC42MDMgNzEyLjkgNjQ4Ljk0TDY1Ny42MzMgNjUwLjk4OEM2MDQuMDEyIDY1MC45ODggNjA0LjAzOCA2MTYuNjk0IDYwNC4wNjkgNTc1QzYwNC4wNyA1NzMuOTg2IDYwNC4wNzEgNTcyLjk2NyA2MDQuMDcxIDU3MS45NDVWMjc5LjA4NEM2MDQuMDcxIDI2OS40MDkgNjEyLjAzIDI2MS4zNDIgNjIxLjgxMSAyNjEuMzQySDcxNC45NDhDNzIwLjk3NSAyNjEuMzQyIDcyNi41NDkgMjU4LjM4NCA3MjkuODQ2IDI1My4yNjdMODAwLjY5NCAxNDMuOTY5QzgwOC40MjcgMTMyLjE0MSA3OTkuODk5IDExNi41NTkgNzg1Ljc5NyAxMTYuNTU5SDYyMy4yOUM2MTMuNTA5IDExNi41NTkgNjA1LjU1MSAxMDguNTk4IDYwNS41NTEgOTguODE3M1YtMTIuNjQwNEM2MDUuNTUxIC0yMi40MjIyIDU5Ny41ODUgLTMwLjYxMDcgNTg3LjgxIC0zMC42MTA3SDQxOC4yNUM0MDguNDY5IC0zMC42MTA3IDQwMC41MSAtMjIuNjQ5MiA0MDAuNTEgLTEyLjg2ODVWMjk3LjMxMkMzOTUuNDY5IDI4Ny42MjIgMzkwIDI3OC4xOTEgMzg0LjEyNiAyNjkuMDQ0QzMyMC40MzQgMTY5Ljg1NCAyMDkuMjI1IDEwNC4xMDQgODIuNTk5NSAxMDQuMTA0Qy0xMTUuMjM4IDEwNC4xMDQgLTI3NS42MTcgMjY0LjQ5OSAtMjc1LjYxNyA0NjIuMzU4Qy0yNzUuNjE3IDY2MC4yMTUgLTExNS4yMzggODIwLjYxMSA4Mi41OTk1IDgyMC42MTFDMjEwLjA4NSA4MjAuNjExIDMyMS45NDIgNzUzLjk2MyAzODUuNDE2IDY1My42NDJDMzkwLjkwNyA2NDQuOTY0IDM5Ni4wMzYgNjM2LjAzNCA0MDAuNzgxIDYyNi44NzRDNDAxLjAwMSA2MzcuNjU5IDQwMS40MDEgNjQ3Ljk1NSA0MDIuMTIgNjU3LjgxM1oiIGZpbGw9InVybCgjcGFpbnQxX2xpbmVhcl8yMzgxMl8xNjAyKSIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyXzIzODEyXzE2MDIiIHgxPSItMjA2LjA0NSIgeTE9Ijg2OS45NDQiIHgyPSIzNzkuMjk5IiB5Mj0iLTIwMS4wOTEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iIzAwMDA4QiIvPgo8c3RvcCBvZmZzZXQ9IjAuMDAwMSIgc3RvcC1jb2xvcj0iIzFBNkFGRiIvPgo8c3RvcCBvZmZzZXQ9IjAuMDAwMiIgc3RvcC1jb2xvcj0iIzg3NTY5RiIvPgo8c3RvcCBvZmZzZXQ9IjAuMDAwMyIgc3RvcC1jb2xvcj0iI0VCNDM0NyIvPgo8c3RvcCBvZmZzZXQ9IjAuMTA1IiBzdG9wLWNvbG9yPSIjRTFCQzM2Ii8+CjxzdG9wIG9mZnNldD0iMC4yMDUiIHN0b3AtY29sb3I9IiNFQjQzNDciLz4KPHN0b3Agb2Zmc2V0PSIwLjQxNSIgc3RvcC1jb2xvcj0iIzg3NTY5RiIvPgo8c3RvcCBvZmZzZXQ9IjAuNjMiIHN0b3AtY29sb3I9IiMxQTZBRkYiLz4KPHN0b3Agb2Zmc2V0PSIwLjg5IiBzdG9wLWNvbG9yPSIjMDAwMDhCIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQxX2xpbmVhcl8yMzgxMl8xNjAyIiB4MT0iLTIwNi4wNDUiIHkxPSI4NjkuOTQ0IiB4Mj0iMzc5LjI5OSIgeTI9Ii0yMDEuMDkxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiMwMDAwOEIiLz4KPHN0b3Agb2Zmc2V0PSIwLjAwMDEiIHN0b3AtY29sb3I9IiMxQTZBRkYiLz4KPHN0b3Agb2Zmc2V0PSIwLjAwMDIiIHN0b3AtY29sb3I9IiM4NzU2OUYiLz4KPHN0b3Agb2Zmc2V0PSIwLjAwMDMiIHN0b3AtY29sb3I9IiNFQjQzNDciLz4KPHN0b3Agb2Zmc2V0PSIwLjEwNSIgc3RvcC1jb2xvcj0iI0UxQkMzNiIvPgo8c3RvcCBvZmZzZXQ9IjAuMjA1IiBzdG9wLWNvbG9yPSIjRUI0MzQ3Ii8+CjxzdG9wIG9mZnNldD0iMC40MTUiIHN0b3AtY29sb3I9IiM4NzU2OUYiLz4KPHN0b3Agb2Zmc2V0PSIwLjYzIiBzdG9wLWNvbG9yPSIjMUE2QUZGIi8+CjxzdG9wIG9mZnNldD0iMC44OSIgc3RvcC1jb2xvcj0iIzAwMDA4QiIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+Cjwvc3ZnPgo=")',
  loginPanelGap: '0',
  loginPanelWidth: '480px',
  loginPanelHeight: 'auto',
  loginPanelBackdropFilter: 'blur(32px)',
  loginPanelBoxShadow: props => {
    return `${resolveValue(props, props.theme.elevationBoxShadow4)}`;
  },
  loginPanelBorder: '0',
  loginPanelBorderRadius: '16px',
  loginPanelPaddingInline: props => {
    return `${resolveValue(props, props.theme.spacing4xl)}`;
  },
  loginPanelPaddingBlock: props => {
    return `${resolveValue(props, props.theme.spacing4xl)}`;
  },
  loginPanelGridTemplateAreas: '"brand" "title" "form"',
  loginPanelWidthSm: '100%',
  loginPanelBackgroundColorSm: props => {
    return `${resolveValue(props, props.theme.elevationBackgroundColor1)}`;
  },
  loginPanelBorderRadiusSm: '0',
  loginPanelBoxShadowSm: 'none',
  loginPanelMarginBlockStartSm: '0',
  loginPanelWidthMd: '400px',
  loginPanelWidthLg: '480px',
  loginAreaIconDisplay: 'block',
  loginIconSize: '70px',
  loginIconFontSize: '1.5rem',
  loginLanguageSelectPaddingInlineFlat: '10px',
  loginLanguageSelectPaddingBlockFlat: '0',
  loginLanguageSelectJustifySelf: 'end',
  loginLanguageSelectSize: '16px',
  loginAreaTitleMarginBlockStart: '0',
  loginAreaTitleMarginBlockEnd: '0',
  loginTitleMarginInline: '0 0',
  loginTitleMarginBlock: '8px 0',
  loginTitleFontWeight: '400',
  loginTitleFontSize: '28px',
  loginTitleTextTransform: 'none',
  loginTitleColor: props => {
    return `${resolveValue(props, props.theme.jatoTypographyTextColorProductName)}`;
  },
  loginTitleLineHeight: '34px',
  loginTitleLetterSpacing: '-0.02em',
  loginAreaFormMarginBlockStart: '56px',
  loginAreaFormMarginBlockEnd: props => {
    return `calc(
    ${resolveValue(props, props.theme.spacing4xl)} - ${resolveValue(props, props.theme.loginPanelGap)}
  )`;
  },
  loginFormActionGroupFontSize: '14px',
  loginFormActionGroupMarginBlockStart: '40px',
  loginBrandImageDisplay: 'block',
  loginBrandImageColor: props => {
    return `${resolveValue(props, props.theme.jatoTypographyTextColorProductName)}`;
  },
  loginAreaLinksFontSize: '14px',
  loginLinkTextDecoration: 'none',
  loginLinkSeparatorWidth: '1px',
  loginLinkSeparatorHeight: '12px',
  loginLinkSeparatorBorderRadius: '50%',
  loginLinkSeparatorBackgroundColor: '#cccccc',
  loginVersionFontWeight: '400',
  loginVersionFontSize: '14px',
  loginVersionTextTransform: 'none',
  loginVersionColor: props => {
    return `${resolveValue(props, props.theme.jatoTypographyTextColorProductName)}`;
  },
  loginVersionLineHeight: '24px',
  loginVersionLetterSpacing: '-0.02em',
  loginVersionOpacity: '0.5',
  loginVersionMarginInline: '0',
  loginVersionMarginBlock: '0',
  loginVersionMarginBlockStart: '0',
  loginTitleSecondaryFontWeight: '400',
  loginTitleSecondaryFontSize: '20px',
  loginTitleSecondaryTextTransform: 'none',
  loginTitleSecondaryLineHeight: '24px',
  loginTitleSecondaryLetterSpacing: '-0.02em',
  loginTitleSecondaryColor: props => {
    return `${resolveValue(props, props.theme.jatoTypographyTextColorProductName)}`;
  },
  loginTitleSecondaryOpacity: '0.65',
  loginTitleSecondaryMarginBlock: '0px 0',
  loginTitleSecondaryMarginInline: '0',
  loginButtonBackgroundColor: props => {
    return `padding-box
    linear-gradient(
      -5deg,
      ${resolveValue(props, props.theme.jatoSigninCtaBackgroundPrimaryNeutral01)} 7.96%,
      ${resolveValue(props, props.theme.jatoSigninCtaBackgroundPrimaryNeutral00)} 100%
    )`;
  },
  loginButtonFontWeight: '500',
  loginButtonHeight: '48px',
  loginButtonBackgroundColorHover: props => {
    return `padding-box
    linear-gradient(
      -5deg,
      ${resolveValue(props, props.theme.jatoSigninCtaBackgroundPrimaryHover01)} 7.96%,
      ${resolveValue(props, props.theme.jatoSigninCtaBackgroundPrimaryHover00)} 100%
    )`;
  },
  loginButtonBackgroundColorActive: props => {
    return `${resolveValue(props, props.theme.jatoSigninCtaBackgroundPrimaryActive)}`;
  },
  loginButtonBorderColorActive: 'transparent',
  loginButtonBackgroundColorDisabled: 'transparent',
  loginButtonBorderColorDisabled: props => {
    return `${resolveValue(props, props.theme.jatoColorNavy5140)}`;
  },
  loginButtonColorDisabled: props => {
    return `${resolveValue(props, props.theme.jatoColorNavy2570)}`;
  },
  loginFooterPaddingBlock: '16px',
  loginFooterPaddingInline: '32px',
  loginFooterGap: '16px',
  loginFooterFlexDirection: 'column',
  loginFooterColor: props => {
    return `${resolveValue(props, props.theme.jatoTypographyTextColorPrimary)}`;
  },
  loginFooterFlexDirectionLg: 'row',
  loginFooterLeadingFontSize: '12px',
  loginFooterLeadingLineHeight: '16px',
  loginFooterLeadingFontWeight: '400',
  loginFooterTrailingFontSize: '12px',
  loginFooterTrailingLineHeight: '16px',
  loginFooterTrailingFontWeight: '400',
  loginFooterTrailingGap: '12px',
  mastheadBorderBottomWidth: '0',
  mastheadBorderBottomStyle: 'solid',
  mastheadBorderBottomColor: 'transparent',
  mastheadBoxShadow: props => {
    return `${resolveValue(props, props.theme.elevationBoxShadow2)}`;
  },
  mastheadColorPrimary: props => {
    return `${resolveValue(props, props.theme.jatoBrandProductName)}`;
  },
  mastheadBackgroundPrimary: props => {
    return `${resolveValue(props, props.theme.jatoBackgroundElevationLevel2)}`;
  },
  mastheadHeightPrimary: '56px',
  mastheadGapPrimary: '0',
  mastheadGridTemplateColumnsPrimary: 'min-content auto min-content',
  mastheadGridTemplateAreasPrimary: '"menu main actions"',
  mastheadBorderBottomColorPrimary: 'transparent',
  mastheadPaddingInlinePrimary: '12px 16px',
  mastheadUnderlineHeightPrimary: '2px',
  mastheadUnderlineBackgroundImagePrimary: 'linear-gradient(\n    89.31deg,\n    #2f6df6 49.62%,\n    #000d85 69.38%,\n    #0edefb 89.14%\n  )',
  mastheadColorSecondary: props => {
    return `${resolveValue(props, props.theme.jatoTypographyTextColorSecondary)}`;
  },
  mastheadBackgroundSecondary: props => {
    return `${resolveValue(props, props.theme.elevationBackgroundColor2)}`;
  },
  mastheadHeightSecondary: '48px',
  mastheadBorderBottomWidthSecondary: '1px',
  mastheadBorderBottomColorSecondary: props => {
    return `${resolveValue(props, props.theme.jatoBorderColorPrimary)}`;
  },
  mastheadPaddingInlineSecondary: '12px 16px',
  mastheadSeparatorWidth: '0px',
  mastheadSeparatorHeight: '0',
  mastheadSeparatorMarginInline: '0',
  mastheadSeparatorBackgroundColor: 'transparent',
  mastheadIconHeight: props => {
    return `${resolveValue(props, props.theme.mastheadHeightPrimary)}`;
  },
  mastheadIconFontSize: '20px',
  mastheadIconFontWeight: props => {
    return `${resolveValue(props, props.theme.typographyFontWeightBold)}`;
  },
  mastheadTitleFontWeight: '400',
  mastheadTitleFontSize: '18px',
  mastheadTitleLineHeight: '24px',
  mastheadTitleMarginInline: '12px 0',
  mastheadTitleMarginBlock: '0',
  mastheadTitleLetterSpacing: '-0.01em',
  mastheadTitleTextTransform: 'none',
  mastheadTitleDisplayMed: 'none',
  mastheadLogoColor: props => {
    return `${resolveValue(props, props.theme.jatoBrandLogo)}`;
  },
  mastheadLogoWidth: 'initial',
  mastheadLogoHeight: 'initial',
  mastheadLogoDisplaySm: 'none',
  mastheadVersionFontSize: '12px',
  mastheadVersionPaddingInlineStart: '6px',
  mastheadVersionLineHeight: '16px',
  mastheadVersionOpacity: '0.65',
  mastheadTitleSecondaryMarginInlineStart: '6px',
  mastheadTitleSecondaryColor: props => {
    return `${resolveValue(props, props.theme.jatoTypographyTextColorProductName)}`;
  },
  mastheadTitleSecondaryOpacity: '0.65',
  mastheadModuleFontSize: '18px',
  mastheadModuleFontLineHeight: '24px',
  mastheadModuleMarginInlineEnd: '16px',
  mastheadModuleColor: props => {
    return `${resolveValue(props, props.theme.jatoTypographyTextColorSecondary)}`;
  },
  mastheadMenuButtonPaddingInline: '0',
  mastheadMenuButtonPaddingBlock: '0',
  mastheadMenuButtonMarginInline: '0 12px',
  mastheadMenuButtonDisplay: 'flex',
  mastheadMenuButtonAlignItems: 'center',
  mastheadMenuButtonIconSize: '24px',
  mastheadTabListColumnGap: '0',
  mastheadTabListMarginInlineStart: '0',
  mastheadTabListMarginInlineEnd: '0',
  mastheadTabPaddingInline: '16px',
  mastheadTabPaddingBlock: '0',
  mastheadTabBorderRadius: '0',
  mastheadTabFontWeight: props => {
    return `${resolveValue(props, props.theme.typographyFontWeightRegular)}`;
  },
  mastheadTabFontWeightSelected: props => {
    return `${resolveValue(props, props.theme.typographyFontWeightBold)}`;
  },
  mastheadTabBoxShadowFocused: props => {
    return `inset ${resolveValue(props, props.theme.tabBoxShadowFocused)}`;
  },
  mastheadTabColorPrimary: props => {
    return `${resolveValue(props, props.theme.jatoTabsNavigationContentColorNeutral)}`;
  },
  mastheadTabFontSizePrimary: '16px',
  mastheadTabColorPrimaryDisabled: props => {
    return `${resolveValue(props, props.theme.jatoTabsNavigationContentColorDisabled)}`;
  },
  mastheadTabBackgroundColorPrimaryDisabled: 'transparent',
  mastheadTabBackgroundColorPrimaryHover: 'transparent',
  mastheadTabBackgroundColorPrimaryActive: 'transparent',
  mastheadTabBackgroundColorPrimaryFocus: 'transparent',
  mastheadTabColorPrimarySelected: props => {
    return `${resolveValue(props, props.theme.jatoTabsNavigationContentColorNeutral)}`;
  },
  mastheadTabColorPrimaryHover: props => {
    return `${resolveValue(props, props.theme.mastheadTabColorPrimary)}`;
  },
  mastheadTabColorSecondary: props => {
    return `${resolveValue(props, props.theme.jatoTabsNavigationContentColorNeutral)}`;
  },
  mastheadTabFontSizeSecondary: '13px',
  mastheadTabColorSecondaryDisabled: props => {
    return `${resolveValue(props, props.theme.tabColorDisabled)}`;
  },
  mastheadTabBackgroundColorSecondaryDisabled: 'transparent',
  mastheadTabBackgroundColorSecondaryHover: 'transparent',
  mastheadTabBackgroundColorSecondaryActive: 'transparent',
  mastheadTabBackgroundColorSecondaryFocus: 'transparent',
  mastheadTabColorSecondarySelected: props => {
    return `${resolveValue(props, props.theme.mastheadTabColorSecondary)}`;
  },
  mastheadTabColorSecondaryHover: props => {
    return `${resolveValue(props, props.theme.mastheadTabColorSecondary)}`;
  },
  mastheadTabIndicatorWidthSelected: props => {
    return `${resolveValue(props, props.theme.tabIndicatorWidthSelected)}`;
  },
  mastheadTabIndicatorBackgroundColorPrimary: props => {
    return `${resolveValue(props, props.theme.jatoTabsNavigationIndicatorSelected)}`;
  },
  mastheadTabIndicatorBackgroundColorSecondary: props => {
    return `${resolveValue(props, props.theme.jatoTabsNavigationIndicatorSelected)}`;
  },
  mastheadActionsGap: '6px',
  mastheadActionsPaddingInlineStart: '0',
  mastheadActionsPaddingInlineEnd: '0',
  mastheadActionsPaddingInline: props => {
    return `${resolveValue(props, props.theme.mastheadActionsPaddingInlineStart)}
    ${resolveValue(props, props.theme.mastheadActionsPaddingInlineEnd)}`;
  },
  mastheadActionsGapSecondary: '12px',
  mastheadActionBackgroundColor: 'transparent',
  mastheadActionColor: props => {
    return `${resolveValue(props, props.theme.jatoCtaContentColorTertiary)}`;
  },
  mastheadActionColorHover: props => {
    return `${resolveValue(props, props.theme.mastheadActionColor)}`;
  },
  mastheadActionColorActive: props => {
    return `${resolveValue(props, props.theme.mastheadActionColor)}`;
  },
  mastheadActionColorFocus: props => {
    return `${resolveValue(props, props.theme.mastheadActionColor)}`;
  },
  mastheadActionFontWeight: props => {
    return `${resolveValue(props, props.theme.typographyFontWeightRegular)}`;
  },
  mastheadActionBackgroundColorHover: props => {
    return `${resolveValue(props, props.theme.jatoCtaBackgroundTertiaryHover)}`;
  },
  mastheadActionBackgroundColorActive: props => {
    return `${resolveValue(props, props.theme.jatoCtaBackgroundTertiaryActive)}`;
  },
  mastheadActionBackgroundColorFocus: 'transparent',
  mastheadAvatarMarginInlineStart: '2px',
  mastheadMyAviatorMarginInlineStart: '10px',
  menuMinWidth: 'initial',
  menuFilter: 'none',
  menuBorderRadius: props => {
    return `${resolveValue(props, props.theme.jatoRadiiLrg)}`;
  },
  menuBoxShadow: props => {
    return `${resolveValue(props, props.theme.elevationBoxShadow4)}`;
  },
  menuBorderWidth: '1px',
  menuBorderStyle: 'solid',
  menuBorderColor: props => {
    return `${resolveValue(props, props.theme.jatoBorderColorPrimary)}`;
  },
  menuBorder: props => {
    return `${resolveValue(props, props.theme.menuBorderWidth)} ${resolveValue(props, props.theme.menuBorderStyle)}
    ${resolveValue(props, props.theme.menuBorderColor)}`;
  },
  menuBackgroundColor: props => {
    return `${resolveValue(props, props.theme.jatoBackgroundElevationLevel4)}`;
  },
  menuPaddingInline: props => {
    return `${resolveValue(props, props.theme.jatoPaddingXxs)}`;
  },
  menuPaddingBlock: props => {
    return `${resolveValue(props, props.theme.jatoPaddingXxs)}`;
  },
  menuArrowSize: '8px',
  menuArrowInsetInlineStart: '34px',
  menuArrowInsetInlineEnd: props => {
    return `${resolveValue(props, props.theme.menuArrowInsetInlineStart)}`;
  },
  menuContentMinWidth: '160px',
  menuContentGap: '1px',
  menuItemHeight: 'auto',
  menuItemMinHeight: '32px',
  menuItemBorderRadius: props => {
    return `${resolveValue(props, props.theme.jatoRadiiMed)}`;
  },
  menuItemPaddingInline: '16px',
  menuItemPaddingBlock: '8px',
  menuItemBackgroundColor: props => {
    return `${resolveValue(props, props.theme.menuBackgroundColor)}`;
  },
  menuItemBorderColor: 'transparent',
  menuItemBorderWidth: '0',
  menuItemBorderStyle: 'solid',
  menuItemBorder: props => {
    return `${resolveValue(props, props.theme.menuItemBorderWidth)} ${resolveValue(props, props.theme.menuItemBorderStyle)}
    ${resolveValue(props, props.theme.menuItemBorderColor)}`;
  },
  menuItemColor: props => {
    return `${resolveValue(props, props.theme.jatoCtaContentColorTertiary)}`;
  },
  menuItemFontSize: '13px',
  menuItemFontWeight: '400',
  menuItemCursor: 'pointer',
  menuItemWhiteSpace: 'nowrap',
  menuItemOverflow: 'hidden',
  menuItemTextOverflow: 'ellipsis',
  menuItemContainerWidth: 'auto',
  menuItemLineHeight: '18px',
  menuItemColumnGap: '8px',
  menuItemBackgroundColorHover: props => {
    return `${resolveValue(props, props.theme.jatoBackgroundRowsHover)}`;
  },
  menuItemBackgroundColorActive: props => {
    return `${resolveValue(props, props.theme.jatoBackgroundRowsActive)}`;
  },
  menuItemBackgroundColorFocus: props => {
    return `${resolveValue(props, props.theme.menuItemBackgroundColorHover)}`;
  },
  menuItemBoxShadowFocus: props => {
    return `inset 0 0 0 ${resolveValue(props, props.theme.focusOutlineWidth)}
    ${resolveValue(props, props.theme.focusOutlineColor)}`;
  },
  menuItemColorDisabled: props => {
    return `${resolveValue(props, props.theme.jatoCtaContentColorPrimaryDisabled)}`;
  },
  menuItemCursorDisabled: 'default',
  menuItemBackgroundColorSelected: props => {
    return `${resolveValue(props, props.theme.jatoBackgroundRowsSelected)}`;
  },
  menuItemFontWeightSelected: '700',
  menuItemColorSelected: props => {
    return `${resolveValue(props, props.theme.jatoCtaContentColorTertiary)}`;
  },
  menuItemPaddingInlineSubmenu: '16px 8px',
  menuItemGapSubmenu: props => {
    return `${resolveValue(props, props.theme.spacingXs)}`;
  },
  menuItemBackgroundColorSubmenuExpanded: props => {
    return `${resolveValue(props, props.theme.jatoBackgroundRowsMenuToggled)}`;
  },
  menuItemBackgroundColorSubmenuExpandedHover: props => {
    return `${resolveValue(props, props.theme.jatoBackgroundRowsMenuToggled)}`;
  },
  menuSubmenuMarginInline: '-3px',
  submenuItemIndicatorSize: '16px',
  submenuItemIndicatorMarginInlineEnd: '-4px',
  menuGroupHeaderPaddingInline: '16px',
  menuGroupHeaderPaddingBlock: '8px 2px',
  menuGroupHeaderColor: props => {
    return `${resolveValue(props, props.theme.jatoTypographyFormsTextColorLabel)}`;
  },
  menuGroupHeaderFontSize: '12px',
  menuGroupHeaderFontWeight: '600',
  menuGroupHeaderLineHeight: '18px',
  menuGroupHeaderCursor: 'default',
  menuDividerHeight: '5px',
  menuDividerThickness: '1px',
  menuDividerBackgroundColor: props => {
    return `${resolveValue(props, props.theme.jatoDividerPrimary)}`;
  },
  multiSelectArrowTop: '50%',
  multiSelectArrowInsetInlineEnd: '12px',
  multiSelectArrowFontSize: '16px',
  multiSelectArrowColor: props => {
    return `${resolveValue(props, props.theme.selectArrowColor)}`;
  },
  multiSelectArrowTransform: 'translateY(-50%)',
  multiSelectArrowPointerEvents: 'none',
  multiSelectArrowColorDisabled: props => {
    return `${resolveValue(props, props.theme.selectArrowColorDisabled)}`;
  },
  multiSelectClearTop: '4px',
  multiSelectClearInsetInlineEnd: '28px',
  multiSelectTriggerPaddingInline: props => {
    return `${resolveValue(props, props.theme.textInputPaddingInlineStart)} 32px`;
  },
  multiSelectTriggerPaddingInlineClearable: props => {
    return `${resolveValue(props, props.theme.textInputPaddingInlineStart)}
    56px`;
  },
  multiValueChipGridTemplateColumns: '1fr auto',
  multiValueChipGridTemplateRows: 'auto',
  multiValueChipBackground: props => {
    return `${resolveValue(props, props.theme.jatoBackgroundElevationLevel1)}`;
  },
  multiValueChipBorderWidth: '1px',
  multiValueChipBorderStyle: 'solid',
  multiValueChipBorderColor: props => {
    return `${resolveValue(props, props.theme.jatoControlBorderPrimaryNeutralLight)}`;
  },
  multiValueChipBoxShadow: props => {
    return `${resolveValue(props, props.theme.jatoElevationShadowLevel1)}`;
  },
  multiValueChipPaddingInline: '7px 3px',
  multiValueChipBorderRadius: '12px',
  multiValueChipHeight: '24px',
  multiValueChipGap: '4px',
  multiValueChipCursor: 'default',
  multiValueChipTransition: 'background 100ms, border-color 100ms, box-shadow 100ms',
  multiValueChipTransitionTimingFunction: 'ease-out',
  multiValueChipBackgroundHover: props => {
    return `${resolveValue(props, props.theme.jatoControlBackgroundPrimaryHover)}`;
  },
  multiValueChipBorderColorHover: props => {
    return `${resolveValue(props, props.theme.jatoControlBorderPrimaryHover)}`;
  },
  multiValueChipBoxShadowHover: props => {
    return `${resolveValue(props, props.theme.jatoElevationShadowLevel2)}`;
  },
  multiValueChipBackgroundExpandedHover: props => {
    return `${resolveValue(props, props.theme.jatoBackgroundElevationLevel1)}`;
  },
  multiValueChipBorderColorExpandedHover: props => {
    return `${resolveValue(props, props.theme.jatoControlBorderPrimaryHover)}`;
  },
  multiValueChipBoxShadowExpandedHover: props => {
    return `${resolveValue(props, props.theme.jatoElevationShadowLevel2)}`;
  },
  multiValueChipBackgroundActive: props => {
    return `${resolveValue(props, props.theme.jatoControlBackgroundPrimaryActive)}`;
  },
  multiValueChipBorderColorActive: props => {
    return `${resolveValue(props, props.theme.jatoControlBorderPrimaryActive)}`;
  },
  multiValueChipBoxShadowActive: props => {
    return `${resolveValue(props, props.theme.jatoElevationShadowLevel1)}`;
  },
  multiValueChipBackgroundExpandedActive: props => {
    return `${resolveValue(props, props.theme.jatoBackgroundElevationLevel1)}`;
  },
  multiValueChipBorderColorExpandedActive: props => {
    return `${resolveValue(props, props.theme.jatoControlBorderPrimaryActive)}`;
  },
  multiValueChipBoxShadowExpandedActive: props => {
    return `${resolveValue(props, props.theme.jatoElevationShadowLevel1)}`;
  },
  multiValueChipOutlineFocus: props => {
    return `2px solid ${resolveValue(props, props.theme.jatoCtaFocusBorder)}`;
  },
  multiValueChipOutlineOffsetFocus: '2px',
  multiValueChipBackgroundDisabled: props => {
    return `${resolveValue(props, props.theme.jatoControlBackgroundPrimaryDisabled)}`;
  },
  multiValueChipBorderColorDisabled: props => {
    return `${resolveValue(props, props.theme.jatoControlBorderPrimaryDisabled)}`;
  },
  multiValueChipBoxShadowDisabled: 'none',
  multiValueChipBorderColorReadonly: props => {
    return `${resolveValue(props, props.theme.jatoControlBorderReadOnlyNeutral)}`;
  },
  multiValueChipBorderColorReadonlyHover: props => {
    return `${resolveValue(props, props.theme.jatoControlBorderReadOnlyHover)}`;
  },
  multiValueChipBorderColorReadonlyActive: props => {
    return `${resolveValue(props, props.theme.jatoControlBorderReadOnlyActive)}`;
  },
  multiValueChipHeightExpanded: 'auto',
  multiValueChipGridTemplateRowsExpanded: 'auto 1fr',
  multiValueChipOverviewGap: '4px',
  multiValueChipListGap: '2px',
  multiValueChipListPaddingBlockEnd: '8px',
  multiValueChipLabelFontWeight: '600',
  multiValueChipLabelFontSize: '12px',
  multiValueChipLabelLineHeight: '16px',
  multiValueChipLabelColor: props => {
    return `${resolveValue(props, props.theme.jatoTypographyTextColorSecondary)}`;
  },
  multiValueChipLabelMarginBlock: '3px',
  multiValueChipLabelWhiteSpace: 'nowrap',
  multiValueChipLabelColorDisabled: props => {
    return `${resolveValue(props, props.theme.jatoCtaContentColorPrimaryDisabled)}`;
  },
  multiValueChipLabelColorReadonly: props => {
    return `${resolveValue(props, props.theme.jatoTypographyTextColorTertiary)}`;
  },
  multiValueChipButtonWidth: '18px',
  multiValueChipButtonHeight: '18px',
  multiValueChipButtonBorderRadius: props => {
    return `${resolveValue(props, props.theme.jatoRadiiXl)}`;
  },
  multiValueChipButtonMarginBlock: '2px',
  multiValueChipButtonFontSize: '16px',
  multiValueChipButtonColor: props => {
    return `${resolveValue(props, props.theme.jatoCtaContentColorTertiary)}`;
  },
  multiValueChipButtonBackground: 'transparent',
  multiValueChipButtonBackgroundHover: props => {
    return `${resolveValue(props, props.theme.jatoCtaBackgroundTertiaryHover)}`;
  },
  multiValueChipButtonBackgroundActive: props => {
    return `${resolveValue(props, props.theme.jatoCtaBackgroundTertiaryActive)}`;
  },
  multiValueChipButtonBoxShadowFocus: props => {
    return `${resolveValue(props, props.theme.focusIndicatorBoxShadow)}`;
  },
  multiValueChipButtonColorDisabled: props => {
    return `${resolveValue(props, props.theme.jatoCtaContentColorPrimaryDisabled)}`;
  },
  multiValueChipsColor: props => {
    return `${resolveValue(props, props.theme.jatoCtaContentColorTertiary)}`;
  },
  multiValueChipsFontSize: '12px',
  multiValueChipsLineHeight: '16px',
  multiValueChipsFontWeight: '400',
  multiValueChipsMarginBlock: '3px',
  multiValueChipsColorDisabled: props => {
    return `${resolveValue(props, props.theme.jatoCtaContentColorPrimaryDisabled)}`;
  },
  myAviatorButtonPaddingInline: '12px',
  myAviatorButtonGap: '6px',
  myAviatorButtonHeight: '32px',
  myAviatorButtonBackground: props => {
    return `${resolveValue(props, props.theme.jatoCtaBackgroundMyaviatorNeutral)}`;
  },
  myAviatorButtonBorderWidth: '1px',
  myAviatorButtonBorderStyle: 'solid',
  myAviatorButtonBorderColor: props => {
    return `${resolveValue(props, props.theme.jatoCtaBorderColorMyaviatorNeutral)}`;
  },
  myAviatorButtonBorderRadius: '16px',
  myAviatorButtonCursor: 'pointer',
  myAviatorButtonTransition: 'grid-template-columns 0.5s linear, gap 0.5s linear,\n    background 0.2s linear, border-color 0.2s linear',
  myAviatorButtonBackgroundHover: props => {
    return `${resolveValue(props, props.theme.jatoCtaBackgroundMyaviatorHover)}`;
  },
  myAviatorButtonBorderColorHover: props => {
    return `${resolveValue(props, props.theme.jatoCtaBorderColorMyaviatorHover)}`;
  },
  myAviatorButtonBackgroundActive: props => {
    return `${resolveValue(props, props.theme.jatoCtaBackgroundMyaviatorActive)}`;
  },
  myAviatorButtonBorderColorActive: props => {
    return `${resolveValue(props, props.theme.jatoCtaBorderColorMyaviatorActive)}`;
  },
  myAviatorButtonOutlineFocus: props => {
    return `${resolveValue(props, props.theme.focusIndicatorOutline)}`;
  },
  myAviatorButtonOutlineOffsetFocus: props => {
    return `${resolveValue(props, props.theme.focusOutlineOffset)}`;
  },
  myAviatorButtonLabelFontFamily: props => {
    return `${resolveValue(props, props.theme.typographyFontFamily)}`;
  },
  myAviatorButtonLabelFontWeight: '400',
  myAviatorButtonLabelFontSize: '12px',
  myAviatorButtonLabelLineHeight: '16px',
  myAviatorButtonLabelTextAlign: 'center',
  myAviatorButtonLabelColor: props => {
    return `${resolveValue(props, props.theme.jatoCtaContentMyaviatorNeutral)}`;
  },
  myAviatorButtonLabelTransition: 'opacity 0.5s linear',
  myAviatorButtonLabelColorHover: props => {
    return `${resolveValue(props, props.theme.jatoCtaContentMyaviatorHover)}`;
  },
  myAviatorButtonLabelColorActive: props => {
    return `${resolveValue(props, props.theme.jatoCtaContentMyaviatorActive)}`;
  },
  myAviatorButtonIconColor: props => {
    return `${resolveValue(props, props.theme.jatoCtaContentMyaviatorNeutral)}`;
  },
  myAviatorButtonIconSize: '16px',
  myAviatorButtonIconColorHover: props => {
    return `${resolveValue(props, props.theme.jatoCtaContentMyaviatorHover)}`;
  },
  myAviatorButtonIconColorActive: props => {
    return `${resolveValue(props, props.theme.jatoCtaContentMyaviatorActive)}`;
  },
  navigationDrawerWidthMinimized: '0',
  navigationTreeDrawerWidthMinimized: '0',
  navigationDrawerDisplayMinimized: 'none',
  navigationHeaderGridTemplateAreas: '"minimize-button content"',
  navigationHeaderGridTemplateColumns: 'auto 1fr',
  navigationHeaderHeight: '56px',
  navigationHeaderPaddingInline: '12px',
  navigationHeaderPaddingBlock: '12px',
  navigationHeaderGap: '12px',
  navigationHeaderBoxShadow: 'none',
  navigationHeaderColor: props => {
    return `${resolveValue(props, props.theme.jatoBrandProductName)}`;
  },
  navigationHeaderPaddingInlineMinimized: '0',
  navigationHeaderPaddingBlockMinimized: '0',
  navigationItemColor: props => {
    return `${resolveValue(props, props.theme.jatoCtaContentColorTertiary)}`;
  },
  navigationItemFontWeight: '400',
  navigationItemColumnGap: '8px',
  navigationItemPaddingInline: '8px',
  navigationItemHeight: '40px',
  navigationItemHeightSmall: '40px',
  navigationItemHeightLarge: '40px',
  navigationItemBorder: 'none',
  navigationItemBorderRadius: props => {
    return `${resolveValue(props, props.theme.jatoRadiiSm)}`;
  },
  navigationItemPaddingMultiplier: '22px',
  navigationItemInset: props => {
    return `calc(
    ${resolveValue(props, props.theme.navigationItemExpanderWidth)} + ${resolveValue(props, props.theme.navigationItemColumnGap)}
  )`;
  },
  navigationItemPaddingInlineStartSingleLevel: '32px',
  navigationItemPaddingInlineStartMinimized: '24px',
  navigationItemPaddingInlineStartNoChildren: '32px',
  navigationItemPaddingInlineStartChildren: '0px',
  navigationItemBackgroundColorHover: props => {
    return `${resolveValue(props, props.theme.jatoBackgroundRowsHover)}`;
  },
  navigationItemBoxShadowFocus: props => {
    return `inset 0 0 0 ${resolveValue(props, props.theme.focusOutlineWidth)}
    ${resolveValue(props, props.theme.focusOutlineColor)}`;
  },
  navigationItemBoxShadowActive: 'none',
  navigationItemBoxShadowActiveFocus: props => {
    return `${resolveValue(props, props.theme.navigationItemBoxShadowFocus)}`;
  },
  navigationItemColorActive: props => {
    return `${resolveValue(props, props.theme.jatoCtaContentColorTertiary)}`;
  },
  navigationItemFontWeightActive: '600',
  navigationItemBackgroundColorActive: props => {
    return `${resolveValue(props, props.theme.jatoBackgroundRowsSelected)}`;
  },
  navigationItemBackgroundColorActiveHover: props => {
    return `${resolveValue(props, props.theme.jatoBackgroundRowsSelected)}`;
  },
  navigationItemBackgroundColorExpanded: 'inherit',
  navigationItemBackgroundColorChildrenExpanded: props => {
    return `${resolveValue(props, props.theme.elevationBackgroundColorBase)}`;
  },
  navigationItemColumnGapMinimized: '0',
  navigationItemPaddingStartMinimized: '4px',
  navigationItemIndicatorWidth: '4px',
  navigationItemIndicatorBackground: props => {
    return `${resolveValue(props, props.theme.jatoCtaLinksTextColorNeutral)}`;
  },
  navigationItemExpanderWidth: '1.5rem',
  navigationItemExpanderHeight: '100%',
  navigationItemExpanderFontSize: '1rem',
  navigationItemExpanderColor: props => {
    return `${resolveValue(props, props.theme.jatoCtaContentColorTertiary)}`;
  },
  navigationItemExpanderCursor: 'pointer',
  navigationItemExpanderIconTransformExpanded: 'rotate(90deg)',
  navigationItemExpanderIconTransformRtl: 'scale(-1, 1)',
  navigationItemExpanderIconTransformExpandedRtl: 'scale(-1, 1) rotate(90deg)',
  navigationItemLinkColumnGap: '8px',
  navigationItemLinkTextDecoration: 'none',
  navigationItemLinkIconFontSize: '16px',
  navigationItemLinkIconWidth: '16px',
  navigationItemLinkIconHeight: props => {
    return `${resolveValue(props, props.theme.navigationItemLinkIconWidth)}`;
  },
  navigationItemLinkIconColor: props => {
    return `${resolveValue(props, props.theme.jatoCtaContentColorTertiary)}`;
  },
  navigationItemTitleFontSize: '14px',
  navigationItemTitleFontWeight: '400',
  navigationItemTitleLineHeight: '18px',
  navigationItemTitleColor: props => {
    return `${resolveValue(props, props.theme.jatoCtaContentColorTertiary)}`;
  },
  navigationItemTitleDisplayMinimized: 'none',
  navigationItemTitleFontSizeChildren: '12px',
  navigationTreeDisplayMinimized: 'none',
  navigationTreeItemColumnGap: '6px',
  navigationTreeItemMarginInline: '6px',
  navigationTreeItemPaddingInlineStart: '8px',
  navigationTreeItemPaddingInlineEnd: '8px',
  navigationTreeItemPaddingMultiplier: '24px',
  navigationTreeItemColor: props => {
    return `${resolveValue(props, props.theme.jatoCtaContentColorTertiary)}`;
  },
  navigationTreeItemFontWeight: '400',
  navigationTreeItemBorder: 'none',
  navigationTreeItemBorderRadius: props => {
    return `${resolveValue(props, props.theme.jatoRadiiSm)}`;
  },
  navigationTreeItemHeight: '40px',
  navigationTreeItemHeightSmall: '40px',
  navigationTreeItemHeightLarge: '40px',
  navigationTreeItemBackgroundColor: 'transparent',
  navigationTreeItemBackgroundColorActive: props => {
    return `${resolveValue(props, props.theme.jatoBackgroundRowsSelected)}`;
  },
  navigationTreeItemFontWeightActive: '600',
  navigationTreeItemBoxShadowFocus: props => {
    return `${resolveValue(props, props.theme.navigationItemBoxShadowFocus)}`;
  },
  navigationTreeItemBackgroundColorHover: props => {
    return `${resolveValue(props, props.theme.navigationItemBackgroundColorHover)}`;
  },
  navigationTreeItemBackgroundColorActiveHover: props => {
    return `${resolveValue(props, props.theme.jatoBackgroundRowsSelected)}`;
  },
  navigationTreeChildrenBackgroundColor: props => {
    return `${resolveValue(props, props.theme.elevationBackgroundColorBase)}`;
  },
  navigationTreeItemIndicatorWidth: '4px',
  navigationTreeItemIndicatorBackground: props => {
    return `${resolveValue(props, props.theme.jatoCtaLinksTextColorNeutral)}`;
  },
  navigationMinimizeButtonSize: '24px',
  navigationMinimizeButtonColor: props => {
    return `${resolveValue(props, props.theme.jatoCtaContentColorTertiary)}`;
  },
  navigationMinimizeButtonTransform: 'none',
  navigationMinimizeButtonTransformMinimized: 'rotate(180deg)',
  navigationMinimizeButtonTransformRtl: 'scale(-1, 1)',
  navigationMinimizeButtonTransformMinimizedRtl: 'scale(-1, 1) rotate(180deg)',
  navigationSearchPaddingInline: '16px',
  navigationSearchHeight: '48px',
  notificationBackgroundColor: props => {
    return `${resolveValue(props, props.theme.jatoBackgroundElevationLevel2)}`;
  },
  notificationBoxShadow: props => {
    return `${resolveValue(props, props.theme.elevationBoxShadow2)}`;
  },
  notificationBorderWidth: '1px',
  notificationBorderStyle: 'solid',
  notificationBorderColor: props => {
    return `color-mix(
    in srgb,
    ${resolveValue(props, props.theme.jatoTableDividerHeader)},
    ${resolveValue(props, props.theme.jatoBorderColorPrimary)}
  )`;
  },
  notificationBorder: props => {
    return `${resolveValue(props, props.theme.notificationBorderWidth)} ${resolveValue(props, props.theme.notificationBorderStyle)} ${resolveValue(props, props.theme.notificationBorderColor)}`;
  },
  notificationBorderRadius: props => {
    return `${resolveValue(props, props.theme.jatoRadiiMed)}`;
  },
  notificationZIndex: '1000',
  notificationInset: '16px',
  notificationAnimationDuration: '0.25s',
  notificationBorderTopWidth: '1px',
  notificationBorderRightWidth: '1px',
  notificationBorderBottomWidth: '3px',
  notificationBorderLeftWidth: '1px',
  notificationLayoutPaddingInline: props => {
    return `${resolveValue(props, props.theme.spacingXl)} ${resolveValue(props, props.theme.spacingM)}`;
  },
  notificationLayoutPaddingBlock: props => {
    return `${resolveValue(props, props.theme.spacingM)} ${resolveValue(props, props.theme.spacingM)}`;
  },
  notificationLayoutPaddingInlineStartWithIcon: props => {
    return `${resolveValue(props, props.theme.spacingM)}`;
  },
  notificationToastWidth: 'auto',
  notificationToastLayoutMinHeight: '32px',
  notificationToastLayoutGap: '8px',
  notificationToastLayoutPaddingInline: props => {
    return `${resolveValue(props, props.theme.jatoPaddingXl)} ${resolveValue(props, props.theme.jatoPaddingSm)}`;
  },
  notificationToastLayoutPaddingBlock: props => {
    return `${resolveValue(props, props.theme.jatoPaddingSm)} ${resolveValue(props, props.theme.jatoPaddingSm)}`;
  },
  notificationDismissButtonTop: props => {
    return `${resolveValue(props, props.theme.spacingXs)}`;
  },
  notificationDismissButtonInsetInlineEnd: props => {
    return `${resolveValue(props, props.theme.spacingXs)}`;
  },
  notificationDismissButtonSize: '1rem',
  notificationHeaderMarginInline: '0 0',
  notificationHeaderMarginBlock: props => {
    return `0 ${resolveValue(props, props.theme.spacingXs)}`;
  },
  notificationContentPaddingBlockStart: '0',
  notificationContentFontSize: '12px',
  notificationContentColor: props => {
    return `${resolveValue(props, props.theme.jatoTypographyTextColorSecondary)}`;
  },
  notificationContentPaddingBlockStartToast: '3px',
  notificationFooterGap: props => {
    return `${resolveValue(props, props.theme.spacingM)}`;
  },
  notificationFooterMarginInline: '0 0',
  notificationFooterMarginBlock: props => {
    return `${resolveValue(props, props.theme.spacingM)} 0`;
  },
  notificationFooterColor: props => {
    return `${resolveValue(props, props.theme.colorGray80)}`;
  },
  notificationIconMarginInlineEnd: props => {
    return `${resolveValue(props, props.theme.spacingS)}`;
  },
  notificationIconFill: props => {
    return `${resolveValue(props, props.theme.typographyColor)}`;
  },
  notificationIconPaddingBlockStart: '2px',
  notificationIconSize: '16px',
  notificationIconMarginInlineEndToast: '0',
  notificationIconPaddingBlockStartToast: '4px',
  numberPickerWidth: '100%',
  numberPickerHeight: '32px',
  numberPickerBackgroundColor: 'transparent',
  numberPickerHeightSmall: '24px',
  numberPickerHeightLarge: '40px',
  numberPickerInputTextAlign: 'initial',
  numberPickerInputPaddingInlineStart: '8px',
  numberPickerInputPaddingInlineEnd: '8px',
  numberPickerInputHeightSmall: '24px',
  numberPickerInputHeightLarge: '40px',
  numberPickerInputBorderColorInvalid: props => {
    return `${resolveValue(props, props.theme.colorNegative)}`;
  },
  numberPickerButtonWidth: '24px',
  numberPickerButtonColor: props => {
    return `${resolveValue(props, props.theme.buttonColorFlatSecondary)}`;
  },
  numberPickerButtonBackgroundColorHover: props => {
    return `${resolveValue(props, props.theme.buttonBackgroundColorFlatSecondaryHover)}`;
  },
  numberPickerButtonColorDisabled: props => {
    return `${resolveValue(props, props.theme.buttonColorFlatSecondaryDisabled)}`;
  },
  numberPickerButtonIconSize: '16px',
  verticalNumberPickerHeight: '72px',
  verticalNumberPickerHeightSmall: '64px',
  verticalNumberPickerHeightLarge: '80px',
  verticalNumberPickerInputTextAlign: 'center',
  verticalNumberPickerButtonHeight: '20px',
  pageTabMenuBackground: props => {
    return `${resolveValue(props, props.theme.jatoBackgroundElevationLevel3)}`;
  },
  pageTabMenuBorder: props => {
    return `1px solid ${resolveValue(props, props.theme.jatoBorderColorPrimary)}`;
  },
  pageTabMenuBoxShadow: props => {
    return `${resolveValue(props, props.theme.jatoElevationShadowLevel4)}`;
  },
  pageTabMenuPaddingBlock: '2px',
  pageTabMenuPaddingInline: '2px',
  pageTabMenuHeight: '395px',
  pageTabMenuMaxWidth: '320px',
  pageTabMenuMinWidth: '176px',
  pageTabMenuBorderRadius: props => {
    return `${resolveValue(props, props.theme.jatoRadiiLrg)}`;
  },
  pageTabMenuSearchWidth: '292px',
  pageTabMenuSearchPaddingInline: '12px',
  pageTabMenuSearchPaddingBlock: '12px',
  pageTabMenuSearchMarginBlockEnd: '7px',
  pageTabMenuListRowGap: '1px',
  pageTabMenuListOverflow: 'auto',
  pageTabMenuListHeight: '100%',
  pageTabMenuListContainerBeforeTop: '-4px',
  pageTabMenuListContainerBeforeLeft: '0',
  pageTabMenuListContainerBeforeRight: '0',
  pageTabMenuListContainerBeforeHeight: '12px',
  pageTabMenuListContainerBeforeBackground: props => {
    return `linear-gradient(
    to bottom,
    ${resolveValue(props, props.theme.jatoBackgroundElevationLevel3)} 0%,
    transparent 100%
  )`;
  },
  pageTabMenuListContainerAfterBottom: '0',
  pageTabMenuListContainerAfterLeft: '0',
  pageTabMenuListContainerAfterRight: '0',
  pageTabMenuListContainerAfterHeight: '12px',
  pageTabMenuListContainerAfterBackground: props => {
    return `linear-gradient(
    to top,
    ${resolveValue(props, props.theme.jatoBackgroundElevationLevel3)} 0%,
    transparent 100%
  )`;
  },
  pageTabMenuListItemHeight: '32px',
  pageTabMenuListItemBackground: 'transparent',
  pageTabMenuListItemBorder: 'none',
  pageTabMenuListItemColor: props => {
    return `${resolveValue(props, props.theme.jatoCtaContentColorTertiary)}`;
  },
  pageTabMenuListItemBorderRadius: props => {
    return `${resolveValue(props, props.theme.jatoRadiiMed)}`;
  },
  pageTabMenuListItemPaddingInline: '16px 8px',
  pageTabMenuListItemPaddingBlock: props => {
    return `${resolveValue(props, props.theme.jatoPaddingLrg)}`;
  },
  pageTabMenuListItemFontFamily: 'inherit',
  pageTabMenuListItemColumnGap: '8px',
  pageTabMenuListItemTransition: 'background 100ms ease-out',
  pageTabMenuListItemBackgroundHover: props => {
    return `${resolveValue(props, props.theme.jatoBackgroundRowsHover)}`;
  },
  pageTabMenuListItemBackgroundActive: props => {
    return `${resolveValue(props, props.theme.jatoBackgroundRowsActive)}`;
  },
  pageTabMenuListItemBackgroundSelected: props => {
    return `${resolveValue(props, props.theme.jatoBackgroundRowsSelected)}`;
  },
  pageTabMenuListItemFontWeightSelected: '700',
  pageMenuListItemIconFontSize: '16px',
  pageTabMenuListItemLabelFontSize: '13px',
  pageTabMenuListItemLabelFontWeight: '400',
  pageTabMenuListItemLabelLineHeight: '16px',
  pageTabMenuListItemDismissWidth: '24px',
  pageTabMenuListItemDismissHeight: '24px',
  pageTabMenuListItemDismissBorderRadius: props => {
    return `${resolveValue(props, props.theme.jatoRadiiSm)}`;
  },
  pageTabMenuListItemDismissPaddingInline: '0',
  pageTabMenuListItemDismissPaddingBlock: '0',
  pageTabMenuListItemDismissColor: props => {
    return `${resolveValue(props, props.theme.jatoCtaContentColorTertiary)}`;
  },
  pageTabMenuListItemDismissBackgroundHover: props => {
    return `${resolveValue(props, props.theme.jatoCtaBackgroundTertiaryHover)}`;
  },
  pageTabMenuListItemDismissBackgroundActive: props => {
    return `${resolveValue(props, props.theme.jatoCtaBackgroundTertiaryActive)}`;
  },
  pageTabMenuListItemDismissOutlineFocus: props => {
    return `${resolveValue(props, props.theme.focusIndicatorOutline)}`;
  },
  pageTabMenuListEmptyPaddingBlock: props => {
    return `${resolveValue(props, props.theme.jatoPaddingXxl)}`;
  },
  pageTabMenuListEmptyPaddingInline: props => {
    return `${resolveValue(props, props.theme.jatoPaddingXxl)}`;
  },
  pageTabMenuListEmptyGap: '8px',
  pageTabMenuListEmptyIconSize: '110px',
  pageTabMenuListEmptyMessageFontSize: '16px',
  pageTabMenuListEmptyMessageFontWeight: '350',
  pageTabMenuListEmptyMessageLineHeight: '20px',
  pageTabMenuListEmptyMessageColor: props => {
    return `${resolveValue(props, props.theme.jatoTypographyTextColorSecondary)}`;
  },
  pageTabMenuFooterPaddingBlock: '12px',
  pageTabMenuFooterPaddingInline: '12px',
  pageTabGroupHeaderColumnGap: '8px',
  pageTabGroupHeaderMarginInlineEnd: '12px',
  pageTabGroupListContainerMaxWidth: 'calc(100% - 32px)',
  pageTabGroupListContainerFadeBackgroundStart: props => {
    return `linear-gradient(
    to left,
    transparent 0%,
    ${resolveValue(props, props.theme.jatoBackgroundElevationBase)} 100%
  )`;
  },
  pageTabGroupListContainerFadeBackgroundEnd: props => {
    return `linear-gradient(
    to right,
    transparent 0%,
    ${resolveValue(props, props.theme.jatoBackgroundElevationBase)} 100%
  )`;
  },
  pageTabGroupListColumnGap: '4px',
  pageTabPanelBackground: props => {
    return `${resolveValue(props, props.theme.jatoBackgroundElevationLevel1)}`;
  },
  pageTabPanelBorder: props => {
    return `1px solid ${resolveValue(props, props.theme.jatoBorderColorPrimary)}`;
  },
  pageTabPanelMinHeight: '100px',
  pageTabPanelMarginBlockStart: '-1px',
  pageTabPanelBorderRadius: '0px 12px 12px 12px',
  pageTabPanelColor: props => {
    return `${resolveValue(props, props.theme.jatoTypographyTextColorPrimary)}`;
  },
  pageTabPanelBackgroundLevel0: props => {
    return `${resolveValue(props, props.theme.jatoBackgroundElevationLevel0)}`;
  },
  pageTabButtonMinWidth: '110px',
  pageTabButtonMaxWidth: '240px',
  pageTabButtonGap: '4px',
  pageTabButtonBackground: props => {
    return `${resolveValue(props, props.theme.jatoBackgroundElevationLevel0)}`;
  },
  pageTabButtonBorderWidth: '1px',
  pageTabButtonBorderColor: props => {
    return `${resolveValue(props, props.theme.jatoBorderColorPrimary)}`;
  },
  pageTabButtonBorderRadius: props => {
    return `${resolveValue(props, props.theme.jatoRadiiMed)} ${resolveValue(props, props.theme.jatoRadiiMed)} 0px 0px`;
  },
  pageTabButtonTransition: 'background 100ms ease-out, border-color 100ms ease-out',
  pageTabButtonHeightSm: '32px',
  pageTabButtonHeightMd: '40px',
  pageTabButtonBackgroundSelected: props => {
    return `${resolveValue(props, props.theme.jatoBackgroundElevationLevel1)}`;
  },
  pageTabButtonBackgroundHover: props => {
    return `${resolveValue(props, props.theme.jatoBackgroundRowsHover)}`;
  },
  pageTabButtonBorderColorHover: props => {
    return `${resolveValue(props, props.theme.jatoBorderColorPrimaryHover)}`;
  },
  pageTabButtonBorderWidthHover: '2px 2px 0 2px',
  pageTabButtonBackgroundActive: props => {
    return `${resolveValue(props, props.theme.jatoBackgroundRowsActive)}`;
  },
  pageTabButtonBorderColorActive: props => {
    return `${resolveValue(props, props.theme.jatoBorderColorPrimaryActive)}`;
  },
  pageTabButtonBorderWidthActive: '2px 2px 0 2px',
  pageTabButtonOutlineFocus: props => {
    return `2px solid ${resolveValue(props, props.theme.jatoCtaFocusBorder)}`;
  },
  pageTabButtonOutlineOffsetFocus: '-2px',
  pageTabButtonBackgroundSelectedHover: 'transparent',
  pageTabButtonBackgroundLevel0: props => {
    return `${resolveValue(props, props.theme.jatoBackgroundElevationLevel1)}`;
  },
  pageTabButtonBackgroundLevel0Selected: props => {
    return `${resolveValue(props, props.theme.jatoBackgroundElevationLevel0)}`;
  },
  pageTabButtonLabelPaddingInlineEnd: '16px',
  pageTabButtonLabelFontSize: '13px',
  pageTabButtonLabelFontWeight: '400',
  pageTabButtonLabelLineHeight: '18px',
  pageTabButtonLabelColor: props => {
    return `${resolveValue(props, props.theme.jatoCtaContentColorTertiary)}`;
  },
  pageTabButtonLabelBackground: 'linear-gradient(\n    to right,\n    rgba(0, 0, 0, 1) 0%,\n    rgba(0, 0, 0, 1) calc(100% - 24px),\n    rgba(0, 0, 0, 0) calc(100% - 16px)\n  )',
  pageTabButtonLabelFontWeightSelected: '600',
  pageTabButtonLabelBackgroundHover: 'linear-gradient(\n    to right,\n    rgba(0, 0, 0, 1) 0%,\n    rgba(0, 0, 0, 1) calc(100% - 27px),\n    rgba(0, 0, 0, 0) calc(100% - 19px)\n  )',
  pageTabButtonDismissButtonOpacity: '0',
  pageTabButtonDismissButtonWidth: '24px',
  pageTabButtonDismissButtonHeight: '24px',
  pageTabButtonDismissButtonBackground: 'transparent',
  pageTabButtonDismissButtonBorderRadius: props => {
    return `${resolveValue(props, props.theme.jatoRadiiSm)}`;
  },
  pageTabButtonDismissButtonPaddingInline: '0',
  pageTabButtonDismissButtonPaddingBlock: '0',
  pageTabButtonDismissButtonFontSize: '16px',
  pageTabButtonDismissButtonInsetInlineEnd: '3px',
  pageTabButtonDismissButtonBorder: 'none',
  pageTabButtonDismissButtonOpacityHover: '1',
  pageTabButtonDismissButtonBackgroundHover: props => {
    return `${resolveValue(props, props.theme.jatoCtaBackgroundTertiaryHover)}`;
  },
  pageTabButtonDismissButtonBackgroundActive: props => {
    return `${resolveValue(props, props.theme.jatoCtaBackgroundTertiaryActive)}`;
  },
  pageTabButtonDismissButtonOpacitySelected: '1',
  paginationGap: '0',
  paginationMarginInlineStart: '0',
  paginationMarginInlineStartAlignEnd: '12px',
  paginationListBorderColor: 'transparent',
  paginationListBorder: 'none',
  paginationListBorderRadius: '0',
  pagaintionListHeight: '24px',
  paginationListBorderFlat: 'none',
  paginationItemBackgroundColor: 'transparent',
  paginationItemWidth: '32px',
  paginationItemBorderRadius: props => {
    return `${resolveValue(props, props.theme.jatoRadiiSm)}`;
  },
  paginationArrowWidth: '24px',
  paginationArrowSize: '16px',
  paginationArrowBorderRadius: props => {
    return `${resolveValue(props, props.theme.jatoRadiiSm)}`;
  },
  paginationArrowGap: '8px',
  paginationArrowDisplay: 'flex',
  paginationArrowVisibilityDisabled: 'hidden',
  paginationArrowBackgroundColorDisabled: 'transparent',
  paginationArrowColorDisabled: props => {
    return `${resolveValue(props, props.theme.jatoCtaContentColorTertiaryDisabled)}`;
  },
  paginationArrowDisplayDisabled: 'none',
  paginationArrowDisplayBoundary: 'flex',
  paginationArrowDisplayBoundaryDisabled: 'none',
  paginationArrowVisibilityBoundaryDisabled: 'hidden',
  paginationArrowBackgroundColorDisabledFlat: props => {
    return `${resolveValue(props, props.theme.paginationArrowBackgroundColorDisabled)}`;
  },
  paginationLinkColor: props => {
    return `${resolveValue(props, props.theme.jatoCtaContentColorTertiary)}`;
  },
  paginationLinkFontSize: '12px',
  paginationLinkFontWeight: '400',
  paginationLinkLineHeight: '16px',
  paginationLinkBoxShadow: 'none',
  paginationLinkColorHover: props => {
    return `${resolveValue(props, props.theme.jatoCtaBackgroundTertiaryHover)}`;
  },
  paginationLinkColorActive: props => {
    return `${resolveValue(props, props.theme.jatoCtaBackgroundTertiaryToggledNeutral)}`;
  },
  paginationLinkBoxShadowFocus: props => {
    return `0 0 0 1px ${resolveValue(props, props.theme.applicationBackgroundColor)},
    0 0 0 3px ${resolveValue(props, props.theme.jatoCtaFocusBorder)}`;
  },
  paginationLinkBoxShadowFocusFlat: props => {
    return `${resolveValue(props, props.theme.paginationLinkBoxShadowFocus)}`;
  },
  paginationLinkBackgroundColorSelected: props => {
    return `${resolveValue(props, props.theme.jatoCtaBackgroundTertiaryToggledNeutral)}`;
  },
  paginationLinkColorSelected: props => {
    return `${resolveValue(props, props.theme.jatoCtaContentColorTertiary)}`;
  },
  paginationLinkBoxShadowSelected: 'none',
  paginationLinkFontWeightSelected: '700',
  paginationLinkBackgroundColorSelectedHover: props => {
    return `${resolveValue(props, props.theme.paginationLinkBackgroundColorSelected)}`;
  },
  paginationLinkBoxShadowSelectedFocus: props => {
    return `${resolveValue(props, props.theme.paginationLinkBoxShadowFocus)}`;
  },
  paginationLinkBackgroundColorSelectedFlat: props => {
    return `${resolveValue(props, props.theme.paginationLinkBackgroundColorSelected)}`;
  },
  paginationLinkColorSelectedFlat: props => {
    return `${resolveValue(props, props.theme.paginationLinkColorSelected)}`;
  },
  paginationLinkBoxShadowSelectedFlat: props => {
    return `${resolveValue(props, props.theme.paginationLinkBoxShadowSelected)}`;
  },
  paginationLinkBackgroundColorSelectedFlatHover: props => {
    return `${resolveValue(props, props.theme.paginationLinkBackgroundColorSelectedHover)}`;
  },
  paginationLinkBoxShadowSelectedFlatFocus: props => {
    return `${resolveValue(props, props.theme.paginationLinkBoxShadowSelectedFocus)},
    ${resolveValue(props, props.theme.focusIndicatorBoxShadow)}`;
  },
  paginationSummaryDisplay: 'none',
  paginationSummaryColor: props => {
    return `${resolveValue(props, props.theme.typographyColorBody)}`;
  },
  paginationSummaryFontSize: '12px',
  paginationSummaryFontWeight: '400',
  paginationSummaryLineHeight: '16px',
  paginationDividerBackgroundColor: 'transparent',
  paginationDividerWidth: '0',
  paginationDividerHeight: '16px',
  paginationDividerBackgroundColorFlat: 'transparent',
  paginationBarBorderColor: props => {
    return `${resolveValue(props, props.theme.jatoBorderColorPrimary)}`;
  },
  paginationBarBorderWidth: '1px',
  paginationBarWidth: '100%',
  paginationBarHeight: '36px',
  paginationBarPaddingInline: '16px',
  paginationBarPaddingBlock: '0',
  paginationBarGridTemplateAreasAlignCenter: '"dropdown pagination count"',
  paginationBarGridTemplateColumnsAlignCenter: 'auto 1fr auto',
  paginationBarJustifyContentAlignCenter: 'initial',
  paginationBarGridTemplateAreasAlignEnd: '"count dropdown pagination"',
  paginationBarGridTemplateColumnsAlignEnd: 'max-content max-content max-content',
  paginationBarJustifyContentAlignEnd: 'end',
  paginationBarArrowGap: '0',
  paginationBarArrowDisplayDisabled: 'flex',
  paginationBarArrowDisplayBoundary: 'flex',
  paginationBarArrowDisplayBoundaryDisabled: 'flex',
  paginationBarArrowVisibilityDisabled: 'hidden',
  paginationCountColor: props => {
    return `${resolveValue(props, props.theme.jatoTypographyTextColorTertiary)}`;
  },
  paginationCountFontSize: '11px',
  paginationCountFontWeight: '400',
  paginationCountLineHeight: '16px',
  paginationCountBorderInlineEnd: 'none',
  paginationCountPaddingInlineEnd: '0',
  paginationCountHeight: '16px',
  paginationCountBorderInlineEndAlignEnd: props => {
    return `1px solid ${resolveValue(props, props.theme.jatoDividerColorPrimary)}`;
  },
  paginationCountPaddingInlineEndAlignEnd: '4px',
  paginationCountHeightAlignEnd: '16px',
  panelFontSize: props => {
    return `${resolveValue(props, props.theme.typographyFontSize)}`;
  },
  panelColor: props => {
    return `${resolveValue(props, props.theme.typographyColor)}`;
  },
  panelBackgroundColor: props => {
    return `${resolveValue(props, props.theme.elevationBackgroundColor1)}`;
  },
  panelBoxShadow: props => {
    return `${resolveValue(props, props.theme.elevationBoxShadow1)}`;
  },
  panelBorderWidth: '1px',
  panelBorderStyle: 'solid',
  panelBorderColor: props => {
    return `${resolveValue(props, props.theme.elevationBorderColor1)}`;
  },
  panelBorder: props => {
    return `${resolveValue(props, props.theme.panelBorderWidth)} ${resolveValue(props, props.theme.panelBorderStyle)} ${resolveValue(props, props.theme.panelBorderColor)}`;
  },
  panelBorderRadius: '4px',
  panelPaddingInline: '24px 24px',
  panelPaddingBlock: '24px 24px',
  popoverMinWidth: '24px',
  popoverBorderRadius: props => {
    return `${resolveValue(props, props.theme.jatoRadiiXl)}`;
  },
  popoverFilter: 'none',
  popoverBoxShadow: props => {
    return `${resolveValue(props, props.theme.elevationBoxShadow2)}`;
  },
  popoverBorderWidth: '1px',
  popoverBorderStyle: 'solid',
  popoverBorderColor: props => {
    return `${resolveValue(props, props.theme.jatoBorderColorPrimary)}`;
  },
  popoverBackgroundColor: props => {
    return `${resolveValue(props, props.theme.jatoBackgroundElevationLevel2)}`;
  },
  popoverColor: props => {
    return `${resolveValue(props, props.theme.jatoCtaContentColorTertiary)}`;
  },
  popoverFontSize: '11px',
  popoverPaddingInline: '24px',
  popoverPaddingBlock: '12px',
  popoverZIndex: props => {
    return `${resolveValue(props, props.theme.overlayZIndex)}`;
  },
  popoverColorAutoInverse: props => {
    return `${resolveValue(props, props.theme.jatoTooltipsTextColor)}`;
  },
  popoverBackgroundColorAutoInverse: props => {
    return `${resolveValue(props, props.theme.jatoTooltipsBackground)}`;
  },
  popoverBorderColorAutoInverse: props => {
    return `${resolveValue(props, props.theme.popoverBackgroundColorAutoInverse)}`;
  },
  popoverColorDark: props => {
    return `${resolveValue(props, props.theme.jatoColorSteel7335)}`;
  },
  popoverBackgroundColorDark: props => {
    return `${resolveValue(props, props.theme.jatoColorSteel0110)}`;
  },
  popoverBorderColorDark: props => {
    return `${resolveValue(props, props.theme.popoverBackgroundColorDark)}`;
  },
  popoverColorLight: props => {
    return `${resolveValue(props, props.theme.jatoColorSteel0730)}`;
  },
  popoverBackgroundColorLight: props => {
    return `${resolveValue(props, props.theme.jatoColorSteel8595)}`;
  },
  popoverBorderColorLight: props => {
    return `${resolveValue(props, props.theme.popoverBackgroundColorLight)}`;
  },
  popoverArrowSize: '4px',
  popoverArrowLeftStart: '34px',
  popoverArrowRightEnd: props => {
    return `${resolveValue(props, props.theme.popoverArrowLeftStart)}`;
  },
  popoverAboveArrowInlineStartCenter: props => {
    return `calc(50% - (${resolveValue(props, props.theme.popoverArrowSize)}))`;
  },
  popoverBelowArrowInlineStartCenter: props => {
    return `${resolveValue(props, props.theme.popoverAboveArrowInlineStartCenter)}`;
  },
  popoverBeforeArrowInlineEndBefore: '-8px',
  popoverBeforeArrowInlineEndAfter: '-7px',
  popoverAfterArrowInlineStartBefore: props => {
    return `${resolveValue(props, props.theme.popoverBeforeArrowInlineEndBefore)}`;
  },
  popoverAfterArrowInlineStartAfter: props => {
    return `${resolveValue(props, props.theme.popoverBeforeArrowInlineEndAfter)}`;
  },
  popoverBeforeArrowTopCenterBefore: props => {
    return `calc(50% - (${resolveValue(props, props.theme.popoverArrowSize)}))`;
  },
  popoverBeforeArrowTopCenterAfter: props => {
    return `calc(
    (50% - (${resolveValue(props, props.theme.popoverArrowSize)})) + 1px
  )`;
  },
  popoverAfterArrowTopCenterBefore: props => {
    return `${resolveValue(props, props.theme.popoverBeforeArrowTopCenterBefore)}`;
  },
  popoverAfterArrowTopCenterAfter: props => {
    return `${resolveValue(props, props.theme.popoverBeforeArrowTopCenterAfter)}`;
  },
  progressBarHeight: '10px',
  progressBarBorder: props => {
    return `1px solid ${resolveValue(props, props.theme.jatoBorderColorPrimary)}`;
  },
  progressBarBorderRadius: '5px',
  progressBarBackgroundColor: props => {
    return `${resolveValue(props, props.theme.jatoBackgroundElevationLevel0)}`;
  },
  progressBarTrackBorderRadius: props => {
    return `${resolveValue(props, props.theme.jatoRadiiSm)}`;
  },
  progressBarTrackBackgroundColor: props => {
    return `${resolveValue(props, props.theme.jatoLoaderIndicatorBackgroundNeutral)}`;
  },
  radioButtonCursorDisabled: 'default',
  radioButtonCursorReadonly: 'default',
  radioButtonContainerHeight: 'auto',
  radioButtonContainerBorderRadius: props => {
    return `${resolveValue(props, props.theme.jatoRadiiMed)}`;
  },
  radioButtonContainerCursor: 'pointer',
  radioButtonContainerPaddingInline: '7px',
  radioButtonContainerPaddingBlock: '7px',
  radioButtonContainerBackgroundColor: 'transparent',
  radioButtonContainerAlignItems: 'flex-start',
  radioButtonContainerBackgroundColorHover: 'transparent',
  radioButtonContainerBackgroundColorActive: 'transparent',
  radioButtonIndicatorBorderStyle: 'solid',
  radioButtonIndicatorBorderWidth: '1px',
  radioButtonIndicatorBorderColor: props => {
    return `${resolveValue(props, props.theme.jatoControlBorderPrimaryNeutral)}`;
  },
  radioButtonIndicatorBorderRadius: '50%',
  radioButtonIndicatorSize: '12px',
  radioButtonIndicatorBackgroundColor: props => {
    return `${resolveValue(props, props.theme.jatoControlBackgroundPrimaryNeutral)}`;
  },
  radioButtonIndicatorMarginBlock: '2px',
  radioButtonIndicatorBackgroundColorHover: props => {
    return `${resolveValue(props, props.theme.jatoControlBackgroundPrimaryHover)}`;
  },
  radioButtonIndicatorBorderColorHover: props => {
    return `${resolveValue(props, props.theme.jatoControlBorderPrimaryHover)}`;
  },
  radioButtonIndicatorBackgroundColorActive: props => {
    return `${resolveValue(props, props.theme.jatoControlBackgroundPrimaryActive)}`;
  },
  radioButtonIndicatorBorderColorActive: props => {
    return `${resolveValue(props, props.theme.jatoControlBorderPrimaryActive)}`;
  },
  radioButtonIndicatorBackgroundColorFocus: 'transparent',
  radioButtonIndicatorBackgroundColorChecked: props => {
    return `${resolveValue(props, props.theme.jatoControlBackgroundPrimarySelectedNeutral)}`;
  },
  radioButtonIndicatorBorderColorChecked: props => {
    return `${resolveValue(props, props.theme.jatoControlBorderPrimarySelectedNeutral)}`;
  },
  radioButtonIndicatorBackgroundColorCheckedHover: props => {
    return `${resolveValue(props, props.theme.jatoControlBackgroundPrimarySelectedHover)}`;
  },
  radioButtonIndicatorBorderColorCheckedHover: props => {
    return `${resolveValue(props, props.theme.jatoControlBorderPrimarySelectedHover)}`;
  },
  radioButtonIndicatorBackgroundColorCheckedActive: props => {
    return `${resolveValue(props, props.theme.jatoControlBackgroundPrimarySelectedActive)}`;
  },
  radioButtonIndicatorBorderColorCheckedActive: props => {
    return `${resolveValue(props, props.theme.jatoControlBorderPrimarySelectedActive)}`;
  },
  radioButtonIndicatorBackgroundColorCheckedFocus: props => {
    return `${resolveValue(props, props.theme.radioButtonIndicatorBackgroundColorChecked)}`;
  },
  radioButtonIndicatorBackgroundColorDisabled: props => {
    return `${resolveValue(props, props.theme.jatoControlBackgroundPrimaryDisabled)}`;
  },
  radioButtonIndicatorBorderColorDisabled: props => {
    return `${resolveValue(props, props.theme.jatoControlBorderPrimaryDisabled)}`;
  },
  radioButtonIndicatorBackgroundColorDisabledChecked: props => {
    return `${resolveValue(props, props.theme.jatoControlBackgroundPrimarySelectedDisabled)}`;
  },
  radioButtonIndicatorBorderColorDisabledChecked: props => {
    return `${resolveValue(props, props.theme.jatoControlBorderPrimarySelectedDisabled)}`;
  },
  radioButtonIndicatorBackgroundClipDisabled: 'content-box',
  radioButtonIndicatorInnerBackgroundColor: 'transparent',
  radioButtonIndicatorInnerSize: '3px',
  radioButtonIndicatorInnerBorderRadius: '50%',
  radioButtonIndicatorInnerBackgroundColorHover: props => {
    return `${resolveValue(props, props.theme.jatoColorElectric3335)}`;
  },
  radioButtonIndicatorInnerBackgroundColorActive: props => {
    return `${resolveValue(props, props.theme.jatoControlSymbolColorActive)}`;
  },
  radioButtonIndicatorInnerBackgroundColorChecked: props => {
    return `${resolveValue(props, props.theme.jatoControlSymbolColorSelectedNeutral)}`;
  },
  radioButtonIndicatorInnerBackgroundColorCheckedHover: props => {
    return `${resolveValue(props, props.theme.jatoControlSymbolColorSelectedHover)}`;
  },
  radioButtonIndicatorInnerBackgroundColorCheckedActive: props => {
    return `${resolveValue(props, props.theme.jatoControlSymbolColorSelectedActive)}`;
  },
  radioButtonIndicatorInnerBackgroundColorDisabledChecked: props => {
    return `${resolveValue(props, props.theme.jatoControlSymbolColorSelectedDisabled)}`;
  },
  radioButtonLabelColor: props => {
    return `${resolveValue(props, props.theme.jatoTypographyTextColorPrimary)}`;
  },
  radioButtonLabelMarginInlineStart: '9px',
  radioButtonLabelFontSize: '13px',
  radioButtonLabelLineHeight: '18px',
  radioButtonLabelFontWeight: '400',
  radioButtonLabelFontWeightChecked: '600',
  radioButtonLabelColorDisabled: props => {
    return `${resolveValue(props, props.theme.jatoTypographyTextColorDisabled)}`;
  },
  radioButtonGroupGap: '0',
  radioButtonGroupGapCompact: '0',
  radioButtonGroupGapSpacious: '0',
  radioButtonGroupGapHorizontal: '0',
  radioButtonGroupGapHorizontalCompact: '0',
  radioButtonGroupGapHorizontalSpacious: '0',
  selectHeight: '32px',
  selectBorderStyle: props => {
    return `${resolveValue(props, props.theme.textInputBorderStyle)}`;
  },
  selectBorderWidth: props => {
    return `${resolveValue(props, props.theme.textInputBorderWidth)}`;
  },
  selectBorderColor: props => {
    return `${resolveValue(props, props.theme.textInputBorderColor)}`;
  },
  selectBorder: props => {
    return `${resolveValue(props, props.theme.selectBorderStyle)} ${resolveValue(props, props.theme.selectBorderWidth)}
    ${resolveValue(props, props.theme.selectBorderColor)}`;
  },
  selectBorderRadius: props => {
    return `${resolveValue(props, props.theme.jatoRadiiMed)} ${resolveValue(props, props.theme.jatoRadiiMed)} 0 0`;
  },
  selectPaddingInline: '8px',
  selectBackgroundColor: props => {
    return `${resolveValue(props, props.theme.textInputBackgroundColor)}`;
  },
  selectFontSize: '13px',
  selectBorderBottomWidth: '1px',
  selectColumnGap: '0',
  selectHeightSmall: '24px',
  selectPaddingInlineSmall: '4px',
  selectBorderRadiusSmall: props => {
    return `${resolveValue(props, props.theme.jatoRadiiSm)} ${resolveValue(props, props.theme.jatoRadiiSm)} 0 0`;
  },
  selectHeightLarge: '40px',
  selectBorderColorFocused: props => {
    return `${resolveValue(props, props.theme.textInputBorderColorFocused)}`;
  },
  selectBoxShadowFocused: props => {
    return `${resolveValue(props, props.theme.textInputBoxShadowFocused)}`;
  },
  selectBorderColorHover: props => {
    return `${resolveValue(props, props.theme.textInputBorderColorHover)}`;
  },
  selectBackgroundColorHover: props => {
    return `${resolveValue(props, props.theme.textInputBackgroundColorHover)}`;
  },
  selectBoxShadowHover: props => {
    return `${resolveValue(props, props.theme.textInputBoxShadowHover)}`;
  },
  selectBorderColorActive: props => {
    return `${resolveValue(props, props.theme.textInputBorderColorHover)}`;
  },
  selectBorderColorInvalid: props => {
    return `${resolveValue(props, props.theme.textInputBorderColorInvalid)}`;
  },
  selectBackgroundColorInvalid: props => {
    return `${resolveValue(props, props.theme.textInputBackgroundColorInvalid)}`;
  },
  selectBackgroundColorHoverInvalid: props => {
    return `${resolveValue(props, props.theme.textInputBackgroundColorHoverInvalid)}`;
  },
  selectBoxShadowHoverInvalid: props => {
    return `${resolveValue(props, props.theme.textInputBoxShadowHoverInvalid)}`;
  },
  selectBorderColorHoverInvalid: props => {
    return `${resolveValue(props, props.theme.textInputBorderColorHoverInvalid)}`;
  },
  selectBorderColorExpanded: props => {
    return `${resolveValue(props, props.theme.selectBorderColorFocused)}`;
  },
  selectBoxShadowExpanded: props => {
    return `${resolveValue(props, props.theme.selectBoxShadowFocused)}`;
  },
  selectBorderColorDisabled: props => {
    return `${resolveValue(props, props.theme.textInputBorderColorDisabled)}`;
  },
  selectBackgroundColorDisabled: props => {
    return `${resolveValue(props, props.theme.textInputBackgroundColorDisabled)}`;
  },
  selectPlaceholderColor: props => {
    return `${resolveValue(props, props.theme.textInputPlaceholderColor)}`;
  },
  selectPlaceholderColorDisabled: props => {
    return `${resolveValue(props, props.theme.textInputPlaceholderColorDisabled)}`;
  },
  selectValueColor: props => {
    return `${resolveValue(props, props.theme.textInputColor)}`;
  },
  selectValueColorHover: props => {
    return `${resolveValue(props, props.theme.textInputColor)}`;
  },
  selectValueColorActive: props => {
    return `${resolveValue(props, props.theme.textInputColor)}`;
  },
  selectValueColorDisabled: props => {
    return `${resolveValue(props, props.theme.textInputColorDisabled)}`;
  },
  selectArrowMinWidth: '16px',
  selectArrowFontSize: '16px',
  selectArrowColor: props => {
    return `${resolveValue(props, props.theme.jatoCtaContentColorTertiary)}`;
  },
  selectArrowColorDisabled: props => {
    return `${resolveValue(props, props.theme.selectValueColorDisabled)}`;
  },
  selectFeedbackColor: props => {
    return `${resolveValue(props, props.theme.textInputColor)}`;
  },
  selectOptionPanelMaxHeight: '300px',
  selectOptionPanelMarginBlockStart: '0',
  selectOptionPanelMarginInlineEnd: '0',
  selectOptionPanelMarginBlockEnd: props => {
    return `${resolveValue(props, props.theme.selectOptionPanelMarginBlockStart)}`;
  },
  selectOptionPanelMarginInlineStart: '0',
  selectOptionPanelMarginInline: props => {
    return `${resolveValue(props, props.theme.selectOptionPanelMarginInlineStart)}
    ${resolveValue(props, props.theme.selectOptionPanelMarginInlineEnd)}`;
  },
  selectOptionPanelMarginBlock: props => {
    return `${resolveValue(props, props.theme.selectOptionPanelMarginBlockStart)}
    ${resolveValue(props, props.theme.selectOptionPanelMarginBlockEnd)}`;
  },
  selectOptionPanelBoxShadow: props => {
    return `${resolveValue(props, props.theme.elevationBoxShadow4)}`;
  },
  selectOptionPanelBorderStyle: props => {
    return `${resolveValue(props, props.theme.selectBorderStyle)}`;
  },
  selectOptionPanelBorderWidth: props => {
    return `${resolveValue(props, props.theme.selectBorderWidth)}`;
  },
  selectOptionPanelBorderColor: props => {
    return `${resolveValue(props, props.theme.elevationBorderColor4)}`;
  },
  selectOptionPanelBorder: props => {
    return `${resolveValue(props, props.theme.selectOptionPanelBorderStyle)}
    ${resolveValue(props, props.theme.selectOptionPanelBorderWidth)} ${resolveValue(props, props.theme.selectOptionPanelBorderColor)}`;
  },
  selectOptionPanelBorderRadius: props => {
    return `0 0 ${resolveValue(props, props.theme.jatoRadiiLrg)} ${resolveValue(props, props.theme.jatoRadiiLrg)}`;
  },
  selectOptionPanelBackgroundColor: props => {
    return `${resolveValue(props, props.theme.jatoBackgroundElevationLevel4)}`;
  },
  selectOptionPanelPaddingBlock: props => {
    return `${resolveValue(props, props.theme.jatoPaddingXxs)}`;
  },
  selectOptionPanelPaddingInline: props => {
    return `${resolveValue(props, props.theme.jatoPaddingXxs)}`;
  },
  selectOptionPanelGap: '1px',
  selectClearButtonWidth: '24px',
  selectClearButtonHeight: '24px',
  selectClearButtonPaddingInline: '4px',
  selectClearButtonPaddingBlock: '4px',
  selectClearButtonMarginInlineEnd: '4px',
  selectClearIconBorderRadius: '50%',
  selectClearIconFontSize: '16px',
  selectClearIconColor: props => {
    return `${resolveValue(props, props.theme.typographyColorBody)}`;
  },
  selectClearIconBackgroundColorHover: props => {
    return `${resolveValue(props, props.theme.colorSecondaryFlatHover)}`;
  },
  selectClearIconBackgroundColorFocus: props => {
    return `${resolveValue(props, props.theme.colorSecondaryFlatFocus)}`;
  },
  selectClearIconBoxShadowFocus: props => {
    return `${resolveValue(props, props.theme.focusIndicatorBoxShadow)}`;
  },
  selectClearIconBackgroundColorActive: props => {
    return `${resolveValue(props, props.theme.colorSecondaryFlatActive)}`;
  },
  skipLinkInsetInlineStart: '24px',
  skipLinkInsetBlockStart: '16px',
  skipLinkPaddingInline: props => {
    return `${resolveValue(props, props.theme.jatoPaddingXl)}`;
  },
  skipLinkPaddingBlock: props => {
    return `${resolveValue(props, props.theme.jatoPaddingSm)}`;
  },
  skipLinkBackground: props => {
    return `${resolveValue(props, props.theme.jatoCtaLinksSkipLinkBackgroundNeutral)}`;
  },
  skipLinkBorder: props => {
    return `2px solid ${resolveValue(props, props.theme.jatoCtaLinksSkipLinkBorderColor)}`;
  },
  skipLinkBoxShadow: props => {
    return `${resolveValue(props, props.theme.elevationBoxShadow2)}`;
  },
  skipLinkColor: props => {
    return `${resolveValue(props, props.theme.jatoCtaLinksSkipLinkTextColor)}`;
  },
  skipLinkBorderRadius: props => {
    return `${resolveValue(props, props.theme.jatoRadiiMed)}`;
  },
  skipLinkTextDecoration: 'none',
  skipLinkFontWeight: '700',
  skipLinkFontSize: '14px',
  skipLinkLineHeight: '20px',
  skipLinkCursor: 'pointer',
  skipLinkZIndex: '1000',
  skipLinkTransform: 'translateY(0)',
  skipLinkOpacity: '1',
  skipLinkTransition: 'transform 300ms ease-out, opacity 300ms ease-out',
  skipLinkBackgroundHover: props => {
    return `${resolveValue(props, props.theme.jatoCtaLinksSkipLinkBackgroundHover)}`;
  },
  skipLinkBoxShadowHover: props => {
    return `${resolveValue(props, props.theme.elevationBoxShadow3)}`;
  },
  skipLinkBackgroundActive: props => {
    return `${resolveValue(props, props.theme.jatoCtaLinksSkipLinkBackgroundActive)}`;
  },
  skipLinkBoxShadowActive: props => {
    return `${resolveValue(props, props.theme.elevationBoxShadow2)}`;
  },
  skipLinkOpacityUnfocused: '0',
  skipLinkTransformUnfocused: 'translateY(-4px)',
  sliderMinWidth: '150px',
  sliderRowGap: '10px',
  sliderRailHeight: '24px',
  sliderRailBackgroundColor: props => {
    return `rgba(${resolveValue(props, props.theme.colorBlackRgb)}, 0.1)`;
  },
  sliderRailPaddingInline: '0',
  sliderRailPaddingBlock: '10px',
  sliderTrackHeight: '24px',
  sliderTrackBorderRadius: '3px',
  sliderTrackBackgroundColor: props => {
    return `${resolveValue(props, props.theme.colorPrimary)}`;
  },
  sliderTrackPaddingInline: '0',
  sliderTrackPaddingBlock: '10px',
  sliderTrackBackgroundColorDisabled: props => {
    return `${resolveValue(props, props.theme.colorGray40)}`;
  },
  sliderThumbBoxTransform: 'translateX(-50%)',
  sliderThumbBoxTransformRtl: 'translateX(50%)',
  sliderThumbBoxHeight: '24px',
  sliderThumbBoxWidth: '24px',
  sliderThumbBoxAlignItems: 'center',
  sliderThumbBoxJustifyContent: 'center',
  sliderThumbBoxTop: '0',
  sliderThumbBoxTransformOrigin: 'center',
  sliderThumbCursor: 'pointer',
  sliderThumbWidth: '10px',
  sliderThumbHeight: '10px',
  sliderThumbBackgroundColor: props => {
    return `${resolveValue(props, props.theme.colorWhite)}`;
  },
  sliderThumbBorderWidth: '1px',
  sliderThumbBorderStyle: 'solid',
  sliderThumbBorderColor: props => {
    return `${resolveValue(props, props.theme.colorGray75)}`;
  },
  sliderThumbBorderRadius: '50%',
  sliderThumbTop: props => {
    return `calc(
    calc(${resolveValue(props, props.theme.sliderThumbHeight)} - ${resolveValue(props, props.theme.sliderRailHeight)}) / -2
  )`;
  },
  sliderThumbTransform: 'scale(1)',
  sliderThumbTransition: 'transform 0.16s linear',
  sliderThumbBackgroundColorHover: props => {
    return `${resolveValue(props, props.theme.colorWhite)}`;
  },
  sliderThumbBorderWidthHover: props => {
    return `${resolveValue(props, props.theme.sliderThumbBorderWidth)}`;
  },
  sliderThumbBorderStyleHover: props => {
    return `${resolveValue(props, props.theme.sliderThumbBorderStyle)}`;
  },
  sliderThumbBorderColorHover: props => {
    return `${resolveValue(props, props.theme.sliderThumbBorderColor)}`;
  },
  sliderThumbTransformHover: 'scale(1.2)',
  sliderThumbBackgroundColorDragging: props => {
    return `${resolveValue(props, props.theme.colorPrimary)}`;
  },
  sliderThumbBorderWidthDragging: props => {
    return `${resolveValue(props, props.theme.sliderThumbBorderWidth)}`;
  },
  sliderThumbBorderStyleDragging: props => {
    return `${resolveValue(props, props.theme.sliderThumbBorderStyle)}`;
  },
  sliderThumbBorderColorDragging: props => {
    return `${resolveValue(props, props.theme.colorPrimary)}`;
  },
  sliderThumbWidthDragging: props => {
    return `${resolveValue(props, props.theme.sliderThumbWidth)}`;
  },
  sliderThumbHeightDragging: props => {
    return `${resolveValue(props, props.theme.sliderThumbHeight)}`;
  },
  sliderThumbBoxShadowDragging: props => {
    return `${resolveValue(props, props.theme.focusIndicatorBoxShadow)}`;
  },
  sliderThumbTransformDragging: props => {
    return `${resolveValue(props, props.theme.sliderThumbTransformHover)}`;
  },
  sliderThumbBackgroundColorFocused: props => {
    return `${resolveValue(props, props.theme.sliderThumbBackgroundColorDragging)}`;
  },
  sliderThumbBorderWidthFocused: props => {
    return `${resolveValue(props, props.theme.sliderThumbBorderWidthDragging)}`;
  },
  sliderThumbBorderStyleFocused: props => {
    return `${resolveValue(props, props.theme.sliderThumbBorderStyleDragging)}`;
  },
  sliderThumbBorderColorFocused: props => {
    return `${resolveValue(props, props.theme.sliderThumbBorderColorDragging)}`;
  },
  sliderThumbWidthFocused: props => {
    return `${resolveValue(props, props.theme.sliderThumbWidthDragging)}`;
  },
  sliderThumbHeightFocused: props => {
    return `${resolveValue(props, props.theme.sliderThumbHeightDragging)}`;
  },
  sliderThumbBoxShadowFocused: props => {
    return `${resolveValue(props, props.theme.focusIndicatorBoxShadow)}`;
  },
  sliderThumbBackgroundColorDisabled: props => {
    return `${resolveValue(props, props.theme.colorWhite)}`;
  },
  sliderThumbBorderWidthDisabled: props => {
    return `${resolveValue(props, props.theme.sliderThumbBorderWidth)}`;
  },
  sliderThumbBorderStyleDisabled: props => {
    return `${resolveValue(props, props.theme.sliderThumbBorderStyle)}`;
  },
  sliderThumbBorderColorDisabled: props => {
    return `${resolveValue(props, props.theme.colorGray40)}`;
  },
  sliderThumbWidthDisabled: props => {
    return `${resolveValue(props, props.theme.sliderThumbWidth)}`;
  },
  sliderThumbHeightDisabled: props => {
    return `${resolveValue(props, props.theme.sliderThumbHeight)}`;
  },
  sliderThumbTransformDisabled: props => {
    return `${resolveValue(props, props.theme.sliderThumbTransform)}`;
  },
  sliderTickMarginInline: '0',
  sliderTickMarginBlock: '12px 0',
  sliderTickLineHeight: '16px',
  sliderTickFontWeight: props => {
    return `${resolveValue(props, props.theme.typographyFontWeightRegular)}`;
  },
  sliderTickFontSize: props => {
    return `${resolveValue(props, props.theme.typographyFontSizeSmall)}`;
  },
  sliderTickColor: props => {
    return `${resolveValue(props, props.theme.typographyColorTertiary)}`;
  },
  sliderTickTransform: 'translateX(-50%)',
  sliderTickTransformRtl: 'translateX(50%)',
  sliderTicksTop: '-12px',
  sliderThumbContainerMarginInline: props => {
    return `calc(${resolveValue(props, props.theme.sliderThumbWidth)} / 2)`;
  },
  sliderThumbContainerWidth: props => {
    return `calc(100% - ${resolveValue(props, props.theme.sliderThumbWidth)})`;
  },
  sliderThumbContainerCursor: 'pointer',
  sliderThumbContainerPaddingInline: '0',
  sliderThumbContainerPaddingBlock: '10px',
  rangeSliderContainerMarginInline: '16px',
  rangeSliderContainerMarginBlock: '0',
  rangeSliderContainerJustifyContent: 'center',
  rangeSliderContainerFlexDirection: 'column',
  rangeSliderContainerWidth: 'calc(100% - 32px)',
  rangeSliderThumbWidth: '24px',
  rangeSliderThumbJustifyContent: 'flex-start',
  rangeSliderThumbJustifyContentRtl: 'flex-end',
  rangeSliderThumbSize: '16px',
  rangeSliderThumbAlignItems: 'center',
  rangeSliderThumbStartTransform: 'rotate(180deg)',
  rangeSliderThumbStartTransformRtl: 'rotate(0)',
  rangeSliderThumbEndTransform: 'rotate(0)',
  rangeSliderThumbEndTransformRtl: 'rotate(180deg)',
  rangeSliderThumbEndJustifyContent: 'flex-start',
  rangeSliderThumbLowBoxTransform: 'translateX(-100%)',
  rangeSliderThumbLowBoxTransformRtl: 'translateX(100%)',
  rangeSliderThumbLowBoxJustifyContent: 'flex-end',
  rangeSliderThumbHighBoxTransform: 'translateX(0)',
  rangeSliderThumbHighBoxJustifyContent: 'flex-start',
  rangeHandleFill: props => {
    return `${resolveValue(props, props.theme.colorWhite)}`;
  },
  rangeHandleStroke: props => {
    return `${resolveValue(props, props.theme.colorGray90)}`;
  },
  rangeHandlePipeStroke: props => {
    return `${resolveValue(props, props.theme.colorGray90)}`;
  },
  rangeHandleFillDisabled: props => {
    return `${resolveValue(props, props.theme.colorWhite)}`;
  },
  rangeHandleStrokeDisabled: props => {
    return `${resolveValue(props, props.theme.colorGray40)}`;
  },
  rangeHandlePipeStrokeDisabled: props => {
    return `${resolveValue(props, props.theme.colorGray40)}`;
  },
  rangeHandleFillActive: props => {
    return `${resolveValue(props, props.theme.colorPrimary)}`;
  },
  rangeHandleStrokeActive: props => {
    return `${resolveValue(props, props.theme.colorPrimary)}`;
  },
  spinnerSizeMedium: '32px',
  spinnerSizeLarge: '70px',
  spinnerContainerSize: '100%',
  spinnerContainerSizeMedium: '32px',
  spinnerContainerSizeLarge: '70px',
  spinnerInnerAnimationDuration: '1150ms',
  spinnerInnerAnimationIterationCount: 'infinite',
  spinnerInnerAnimationTimingFunction: 'linear',
  spinnerInnerBoxShadowMedium: props => {
    return `0 0 0 0.15em ${resolveValue(props, props.theme.jatoColorWhite10000A015)},
    inset 0 0 0 0.4em ${resolveValue(props, props.theme.jatoColorWhite10000A015)}`;
  },
  spinnerInnerBoxShadowLarge: props => {
    return `0 0 0 0.25em ${resolveValue(props, props.theme.jatoColorWhite10000A015)},
    inset 0 0 0 0.8125em ${resolveValue(props, props.theme.jatoColorWhite10000A015)}`;
  },
  spinnerInnerBorderRadius: '50%',
  spinnerInnerRotateStart: 'rotateZ(0)',
  spinnerInnerRotateEnd: 'rotateZ(360deg)',
  spinnerCircleFill: props => {
    return `${resolveValue(props, props.theme.colorBlue)}`;
  },
  spinnerGradientStopColor: props => {
    return `${resolveValue(props, props.theme.colorBlue)}`;
  },
  splitButtonDividerHeight: '100%',
  splitButtonBorderRadiusSmallFirstChild: props => {
    return `${resolveValue(props, props.theme.buttonBorderRadiusSmall)} 0 0
    ${resolveValue(props, props.theme.buttonBorderRadiusSmall)}`;
  },
  splitButtonBorderRadiusSmallLastChild: props => {
    return `0 ${resolveValue(props, props.theme.buttonBorderRadiusSmall)}
    ${resolveValue(props, props.theme.buttonBorderRadiusSmall)} 0`;
  },
  splitButtonPaddingInlineSmall: '8px',
  splitButtonPaddingBlockSmall: '0',
  splitIconButtonWidthSmall: '28px',
  splitButtonBorderRadiusFirstChild: props => {
    return `${resolveValue(props, props.theme.buttonBorderRadius)} 0 0
    ${resolveValue(props, props.theme.buttonBorderRadius)}`;
  },
  splitButtonBorderRadiusLastChild: props => {
    return `0 ${resolveValue(props, props.theme.buttonBorderRadius)}
    ${resolveValue(props, props.theme.buttonBorderRadius)} 0`;
  },
  splitButtonPaddingInline: props => {
    return `${resolveValue(props, props.theme.jatoPaddingXl)}`;
  },
  splitButtonPaddingBlock: '0',
  splitIconButtonPaddingInline: props => {
    return `${resolveValue(props, props.theme.iconButtonPaddingInline)}`;
  },
  splitIconButtonPaddingBlock: props => {
    return `${resolveValue(props, props.theme.iconButtonPaddingBlock)}`;
  },
  splitIconButtonWidth: '32px',
  splitButtonBorderRadiusLargeFirstChild: props => {
    return `${resolveValue(props, props.theme.buttonBorderRadiusLarge)} 0 0
    ${resolveValue(props, props.theme.buttonBorderRadiusLarge)}`;
  },
  splitButtonBorderRadiusLargeLastChild: props => {
    return `0 ${resolveValue(props, props.theme.buttonBorderRadiusLarge)}
    ${resolveValue(props, props.theme.buttonBorderRadiusLarge)} 0`;
  },
  splitButtonPaddingInlineLarge: '16px',
  splitButtonPaddingBlockLarge: '0',
  splitIconButtonWidthLarge: '40px',
  splitButtonBorderWidthPrimary: '0',
  splitButtonBorderWidthPrimaryFirstChild: '0',
  splitButtonBorderWidthPrimaryLastChild: '0',
  splitButtonDividerBackgroundPrimary: props => {
    return `${resolveValue(props, props.theme.jatoCtaDividerBorderColor)}`;
  },
  splitButtonBorderWidthSecondary: '1px 0',
  splitButtonBorderWidthSecondaryFirstChild: '1px 0 1px 1px',
  splitButtonBorderWidthSecondaryLastChild: '1px 1px 1px 0',
  splitButtonDividerBackgroundSecondary: props => {
    return `${resolveValue(props, props.theme.jatoCtaDividerBorderColor)}`;
  },
  splitButtonPaddingInlineFlat: props => {
    return `${resolveValue(props, props.theme.splitButtonPaddingInline)}`;
  },
  splitButtonPaddingBlockFlat: props => {
    return `${resolveValue(props, props.theme.splitButtonPaddingBlock)}`;
  },
  splitButtonPaddingInlineFlatSmall: props => {
    return `${resolveValue(props, props.theme.splitButtonPaddingInlineSmall)}`;
  },
  splitButtonPaddingBlockFlatSmall: props => {
    return `${resolveValue(props, props.theme.splitButtonPaddingBlockSmall)}`;
  },
  splitButtonDividerBackgroundPrimaryFlat: props => {
    return `${resolveValue(props, props.theme.jatoCtaDividerBorderColor)}`;
  },
  splitButtonDividerBackgroundSecondaryFlat: props => {
    return `${resolveValue(props, props.theme.jatoCtaDividerBorderColor)}`;
  },
  splitButtonDividerBackgroundDisabled: props => {
    return `${resolveValue(props, props.theme.jatoCtaDividerBorderColorPrimaryDisabled)}`;
  },
  splitButtonDividerBackgroundSecondaryDisabled: props => {
    return `${resolveValue(props, props.theme.jatoCtaDividerBorderColorSecondaryDisabled)}`;
  },
  splitButtonBorderWidthSecondaryFirstChildRtl: '1px 1px 1px 0',
  splitButtonBorderWidthSecondaryLastChildRtl: '1px 0 1px 1px',
  splitButtonBorderRadiusFirstChildRtl: props => {
    return `0 ${resolveValue(props, props.theme.buttonBorderRadius)}
    ${resolveValue(props, props.theme.buttonBorderRadius)} 0`;
  },
  splitButtonBorderRadiusLastChildRtl: props => {
    return `${resolveValue(props, props.theme.buttonBorderRadius)} 0 0
    ${resolveValue(props, props.theme.buttonBorderRadius)}`;
  },
  splitButtonBorderRadiusSmallFirstChildRtl: props => {
    return `0
    ${resolveValue(props, props.theme.buttonBorderRadiusSmall)} ${resolveValue(props, props.theme.buttonBorderRadiusSmall)} 0`;
  },
  splitButtonBorderRadiusSmallLastChildRtl: props => {
    return `${resolveValue(props, props.theme.buttonBorderRadiusSmall)} 0
    0 ${resolveValue(props, props.theme.buttonBorderRadiusSmall)}`;
  },
  splitterGap: '16px',
  splitterDragHandleMargins: props => {
    return `${resolveValue(props, props.theme.jatoPaddingLrg)}`;
  },
  splitterDragHandleOverlap: props => {
    return `${resolveValue(props, props.theme.jatoPaddingLrg)}`;
  },
  splitterDragHandleStart: props => {
    return `${resolveValue(props, props.theme.jatoPaddingMed)}`;
  },
  splitterDragHandleBackground: props => {
    return `linear-gradient(
    180deg,
    ${resolveValue(props, props.theme.elevationBackgroundColor1)} 0%,
    ${resolveValue(props, props.theme.elevationBackgroundColor1)} 5%,
    ${resolveValue(props, props.theme.elevationBackgroundColor1)} 50%,
    ${resolveValue(props, props.theme.elevationBackgroundColor1)} 95%,
    ${resolveValue(props, props.theme.elevationBackgroundColor1)} 100%
  )`;
  },
  splitterDragHandleBackgroundSize: props => {
    return `${resolveValue(props, props.theme.splitterGap)}`;
  },
  splitterDragHandleColor: 'transparent',
  splitterDragHandleColorHover: props => {
    return `${resolveValue(props, props.theme.jatoBorderColorPrimaryHover)}`;
  },
  splitterDragHandleColorActive: props => {
    return `${resolveValue(props, props.theme.jatoBorderColorPrimarySelected)}`;
  },
  splitterDragHandleBorderColor: props => {
    return `${resolveValue(props, props.theme.jatoBorderColorDifference)}`;
  },
  splitterDragHandleBorderRadius: props => {
    return `${resolveValue(props, props.theme.jatoRadiiXs)}`;
  },
  splitterDragHandleWidth: '0',
  splitterDragHandleWidthHover: '2px',
  splitterDragHandleWidthActive: '3px',
  splitterDragHandleTransition: 'all 0.2s ease-in-out',
  tableBoxShadow: props => {
    return `${resolveValue(props, props.theme.elevationBoxShadow1)}`;
  },
  tableBorderRadius: '4px',
  tableBorderColor: 'transparent',
  tableBorderStyle: 'solid',
  tableBorderWidth: '0',
  tableBorder: props => {
    return `${resolveValue(props, props.theme.tableBorderColor)} ${resolveValue(props, props.theme.tableBorderStyle)}
    ${resolveValue(props, props.theme.tableBorderWidth)}`;
  },
  tableBackgroundColor: props => {
    return `${resolveValue(props, props.theme.elevationBackgroundColor1)}`;
  },
  tableBorderRadiusEmbedded: '0',
  tableBoxShadowEmbedded: 'none',
  tableHeadRowHeight: '32px',
  tableHeaderCellTextAlign: 'start',
  tableHeaderCellBorderColor: props => {
    return `${resolveValue(props, props.theme.jatoTableDividerHeader)}`;
  },
  tableHeaderCellBorderStyle: 'solid',
  tableHeaderCellBorderTopWidth: '0',
  tableHeaderCellBorderRightWidth: '0',
  tableHeaderCellBorderBottomWidth: '1px',
  tableHeaderCellBorderLeftWidth: '0',
  tableHeaderCellFontWeight: '500',
  tableHeaderCellFontSize: '12px',
  tableHeaderCellLineHeight: '16px',
  tableHeaderCellColor: props => {
    return `${resolveValue(props, props.theme.jatoTypographyTextColorPrimary)}`;
  },
  tableHeaderCellBackgroundColor: 'transparent',
  tableHeaderCellPaddingInline: '8px',
  tableHeaderCellPaddingBlock: '0',
  tableHeaderCellBoxSizing: 'border-box',
  tableHeaderCellLetterSpacing: 'normal',
  tableHeaderCellLineHeightCheckbox: '8px',
  tableHeaderCellBackgroundColorEmbedded: props => {
    return `${resolveValue(props, props.theme.jatoTabsNavigationContentColorCounterBackgroundColorDisabled)}`;
  },
  tableColumnResizeHandleColor: props => {
    return `${resolveValue(props, props.theme.tableHeaderCellBorderColor)}`;
  },
  tableColumnResizeHandleWidth: '1px',
  tableRowHeight: '33px',
  tableRowOutlineFocused: props => {
    return `2px solid ${resolveValue(props, props.theme.focusOutlineColor)}`;
  },
  tableRowOutlineOffsetFocused: '-2px',
  tableRowHeightSmall: '25px',
  tableRowHeightLarge: '41px',
  tableRowHeightExtralarge: '48px',
  tableCellBoxSizing: 'border-box',
  tableCellBorderColor: props => {
    return `${resolveValue(props, props.theme.jatoDividerColorPrimary)}`;
  },
  tableCellBorderStyle: 'solid',
  tableCellBorderTopWidth: '0',
  tableCellBorderRightWidth: '0',
  tableCellBorderBottomWidth: '1px',
  tableCellBorderLeftWidth: '0',
  tableCellPaddingInline: '8px',
  tableCellPaddingBlock: '0',
  tableCellFontSize: '13px',
  tableCellFontWeight: '400',
  tableCellTextAlign: 'start',
  tableCellLetterSpacing: 'normal',
  tableCellLineHeight: '18px',
  tableCellColor: props => {
    return `${resolveValue(props, props.theme.jatoTypographyTextColorPrimary)}`;
  },
  tableCellColorSelected: props => {
    return `${resolveValue(props, props.theme.jatoTypographyTextColorPrimary)}`;
  },
  tableCellBackgroundColorHover: props => {
    return `${resolveValue(props, props.theme.jatoBackgroundRowsHover)}`;
  },
  tableCellBackgroundColorSelected: props => {
    return `${resolveValue(props, props.theme.jatoBackgroundRowsSelected)}`;
  },
  tableCellBorderBottomWidthLast: '1px',
  tableCellLineHeightCheckbox: '8px',
  tableCellBackgroundColor: 'transparent',
  tableCellBackgroundColorOdd: props => {
    return `${resolveValue(props, props.theme.tableCellBackgroundColor)}`;
  },
  tableCellBackgroundColorOddHover: props => {
    return `${resolveValue(props, props.theme.tableCellBackgroundColorHover)}`;
  },
  tableCellBackgroundColorOddStriped: props => {
    return `${resolveValue(props, props.theme.jatoBackgroundRowsAlternate)}`;
  },
  tableSortIconColor: props => {
    return `${resolveValue(props, props.theme.jatoCtaContentColorTertiary)}`;
  },
  tableSortIconPaddingInline: '4px',
  tableSortIconPaddingBlock: '4px',
  tableSortToggleBackgroundColorActive: 'transparent',
  tableSortToggleBackgroundColorHover: 'transparent',
  tableSortToggleBackgroundColorFocused: 'transparent',
  tableSortToggleHeight: props => {
    return `${resolveValue(props, props.theme.tableHeadRowHeight)}`;
  },
  tableSortTogglePaddingInline: props => {
    return `${resolveValue(props, props.theme.tableCellPaddingInline)}`;
  },
  tableSortTogglePaddingBlock: '0',
  tableSortToggleColumnGap: '4px',
  tableSortToggleBorderRadius: '0',
  tableSortToggleFontSize: props => {
    return `${resolveValue(props, props.theme.tableHeaderCellFontSize)}`;
  },
  tableSortToggleFontWeight: props => {
    return `${resolveValue(props, props.theme.tableHeaderCellFontWeight)}`;
  },
  tableSortToggleFontWeightSorting: '700',
  tabGroupColumnGap: '0.5rem',
  tabListHeight: '3rem',
  tabListColumnGap: '0',
  tabListBorderTopWidth: '0',
  tabListBorderBottomWidth: '1px',
  tabListBorderInlineStartWidth: '0',
  tabListBorderInlineEndWidth: '0',
  tabListBorderStyle: 'solid',
  tabListBorderColor: props => {
    return `${resolveValue(props, props.theme.jatoBorderColorPrimary)}`;
  },
  tabListBorderBottomWidthVertical: '0',
  tabListBorderInlineEndWidthVertical: '0',
  tabListHeightSmall: props => {
    return `${resolveValue(props, props.theme.tabListHeight)}`;
  },
  tabListHeightMedium: props => {
    return `${resolveValue(props, props.theme.tabListHeight)}`;
  },
  tabBackgroundColor: 'transparent',
  tabMarginInline: '0',
  tabBorder: 'none',
  tabPaddingInline: '1rem',
  tabPaddingBlock: '0',
  tabFontWeight: '400',
  tabFontSize: '13px',
  tabColor: props => {
    return `${resolveValue(props, props.theme.jatoTabsNavigationContentColorNeutral)}`;
  },
  tabTextTransform: 'none',
  tabCursor: 'pointer',
  tabBoxShadow: 'none',
  tabMinWidth: 'initial',
  tabMaxWidth: 'initial',
  tabWhiteSpace: 'nowrap',
  tabHeight: '100%',
  tabJustifyContent: 'center',
  tabBorderRadius: '8px',
  tabHeightVertical: '2.75rem',
  tabFontSizeSmall: props => {
    return `${resolveValue(props, props.theme.tabFontSize)}`;
  },
  tabFontSizeMedium: props => {
    return `${resolveValue(props, props.theme.tabFontSize)}`;
  },
  tabColorSelected: props => {
    return `${resolveValue(props, props.theme.tabColor)}`;
  },
  tabFontWeightSelected: props => {
    return `${resolveValue(props, props.theme.tabFontWeight)}`;
  },
  tabBoxShadowFocused: props => {
    return `${resolveValue(props, props.theme.focusIndicatorBoxShadow)}`;
  },
  tabColorDisabled: props => {
    return `${resolveValue(props, props.theme.jatoTabsNavigationContentColorDisabled)}`;
  },
  tabCursorDisabled: 'default',
  tabIconSize: '1rem',
  tabIndicatorWidth: 'calc(100% - 32px)',
  tabIndicatorHeight: '3px',
  tabIndicatorBackgroundColor: 'transparent',
  tabIndicatorTransition: 'height 0.1s ease-out, width 0.1s ease-out,\n    background-color 0.1s ease-out',
  tabIndicatorBorderRadius: props => {
    return `${resolveValue(props, props.theme.jatoRadiiSm)} ${resolveValue(props, props.theme.jatoRadiiSm)} 0 0`;
  },
  tabIndicatorWidthSelected: props => {
    return `${resolveValue(props, props.theme.tabIndicatorWidth)}`;
  },
  tabIndicatorBackgroundColorSelected: props => {
    return `${resolveValue(props, props.theme.jatoTabsNavigationIndicatorSelected)}`;
  },
  tabIndicatorWidthHover: props => {
    return `${resolveValue(props, props.theme.tabIndicatorWidth)}`;
  },
  tabIndicatorHeightHover: '4px',
  tabIndicatorBackgroundColorHover: props => {
    return `${resolveValue(props, props.theme.jatoTabsNavigationIndicatorHover)}`;
  },
  tabIndicatorWidthSelectedHover: props => {
    return `${resolveValue(props, props.theme.tabIndicatorWidthSelected)}`;
  },
  tabIndicatorBackgroundColorSelectedHover: props => {
    return `${resolveValue(props, props.theme.jatoTabsNavigationIndicatorHover)}`;
  },
  tabIndicatorWidthActive: props => {
    return `${resolveValue(props, props.theme.tabIndicatorWidth)}`;
  },
  tabIndicatorHeightActive: props => {
    return `${resolveValue(props, props.theme.tabIndicatorHeight)}`;
  },
  tabIndicatorBackgroundColorActive: props => {
    return `${resolveValue(props, props.theme.jatoTabsNavigationIndicatorActive)}`;
  },
  tabIndicatorWidthSelectedActive: props => {
    return `${resolveValue(props, props.theme.tabIndicatorWidthActive)}`;
  },
  tabIndicatorHeightSelectedActive: props => {
    return `${resolveValue(props, props.theme.tabIndicatorHeightActive)}`;
  },
  tabIndicatorBackgroundColorSelectedActive: props => {
    return `${resolveValue(props, props.theme.jatoTabsNavigationIndicatorActive)}`;
  },
  tabIndicatorBackgroundColorSecondary: props => {
    return `${resolveValue(props, props.theme.tabIndicatorBackgroundColor)}`;
  },
  tabIndicatorBackgroundColorSecondaryHover: props => {
    return `${resolveValue(props, props.theme.tabIndicatorBackgroundColorHover)}`;
  },
  tabIndicatorBackgroundColorSecondarySelected: props => {
    return `${resolveValue(props, props.theme.tabIndicatorBackgroundColorSelected)}`;
  },
  tabIndicatorBackgroundColorSecondarySelectedHover: props => {
    return `${resolveValue(props, props.theme.tabIndicatorBackgroundColorSelectedHover)}`;
  },
  tabIndicatorBackgroundColorSecondaryActive: props => {
    return `${resolveValue(props, props.theme.tabIndicatorBackgroundColorActive)}`;
  },
  tabIndicatorBackgroundColorSecondarySelectedActive: props => {
    return `${resolveValue(props, props.theme.tabIndicatorBackgroundColorSelectedActive)}`;
  },
  tabIndicatorHeightVertical: 'calc(100% - 12px)',
  tabIndicatorBorderRadiusVertical: props => {
    return `0 ${resolveValue(props, props.theme.jatoRadiiSm)} ${resolveValue(props, props.theme.jatoRadiiSm)} 0`;
  },
  tabIndicatorHeightVerticalSelected: props => {
    return `${resolveValue(props, props.theme.tabIndicatorHeightVertical)}`;
  },
  tabIndicatorHeightVerticalHover: props => {
    return `${resolveValue(props, props.theme.tabIndicatorHeightVertical)}`;
  },
  tabIndicatorWidthVerticalHover: '4px',
  tabIndicatorHeightVerticalActive: props => {
    return `${resolveValue(props, props.theme.tabIndicatorHeightVerticalHover)}`;
  },
  tabIndicatorWidthVerticalActive: '3px',
  tabIndicatorWidthVerticalSelectedHover: props => {
    return `${resolveValue(props, props.theme.tabIndicatorWidthVerticalHover)}`;
  },
  tabIndicatorWidthVerticalSelectedActive: props => {
    return `${resolveValue(props, props.theme.tabIndicatorWidthVerticalActive)}`;
  },
  tabIndicatorHeightVerticalSelectedActive: props => {
    return `${resolveValue(props, props.theme.tabIndicatorHeightVerticalActive)}`;
  },
  textInputFontWeight: props => {
    return `${resolveValue(props, props.theme.typographyFontWeightRegular)}`;
  },
  textInputFontSize: '13px',
  textInputHeight: '32px',
  textInputPaddingInlineStart: '8px',
  textInputPaddingInlineEnd: props => {
    return `${resolveValue(props, props.theme.textInputPaddingInlineStart)}`;
  },
  textInputPaddingInline: props => {
    return `${resolveValue(props, props.theme.textInputPaddingInlineStart)}
    ${resolveValue(props, props.theme.textInputPaddingInlineEnd)}`;
  },
  textInputPaddingBlockStart: '6px',
  textInputPaddingBlockEnd: props => {
    return `${resolveValue(props, props.theme.textInputPaddingBlockStart)}`;
  },
  textInputColor: props => {
    return `${resolveValue(props, props.theme.jatoTypographyTextColorPrimary)}`;
  },
  textInputBackgroundColor: props => {
    return `${resolveValue(props, props.theme.jatoBackgroundElevationLevel1)}`;
  },
  textInputBorderWidth: '1px',
  textInputBorderStyle: 'solid',
  textInputBorderColor: props => {
    return `${resolveValue(props, props.theme.jatoInputBorderContainerNeutral)}
    ${resolveValue(props, props.theme.jatoInputBorderContainerNeutral)} ${resolveValue(props, props.theme.jatoInputBorderFocusNeutral)}
    ${resolveValue(props, props.theme.jatoInputBorderContainerNeutral)}`;
  },
  textInputBorder: props => {
    return `${resolveValue(props, props.theme.textInputBorderWidth)} ${resolveValue(props, props.theme.textInputBorderStyle)}
    ${resolveValue(props, props.theme.textInputBorderColor)}`;
  },
  textInputBorderRadius: props => {
    return `${resolveValue(props, props.theme.jatoRadiiMed)} ${resolveValue(props, props.theme.jatoRadiiMed)} 0 0`;
  },
  textInputWidth: '100%',
  textInputHeightSmall: '24px',
  textInputBorderRadiusSmall: props => {
    return `${resolveValue(props, props.theme.jatoRadiiSm)} ${resolveValue(props, props.theme.jatoRadiiSm)} 0 0`;
  },
  textInputHeightLarge: '40px',
  textInputPaddingBlockStartLarge: '8px',
  textInputPaddingBlockEndLarge: props => {
    return `${resolveValue(props, props.theme.textInputPaddingBlockStartLarge)}`;
  },
  textInputCursorReadonly: 'default',
  textInputBackgroundColorReadonly: 'transparent',
  textInputBorderColorReadonly: 'transparent',
  textInputPaddingInlineReadonly: '0',
  textInputBoxShadowReadonly: 'none',
  textInputBorderColorDisabled: props => {
    return `${resolveValue(props, props.theme.jatoInputBorderContainerDisabled)}
    ${resolveValue(props, props.theme.jatoInputBorderContainerDisabled)} ${resolveValue(props, props.theme.jatoInputBorderFocusDisabled)}
    ${resolveValue(props, props.theme.jatoInputBorderContainerDisabled)}`;
  },
  textInputCursorDisabled: 'default',
  textInputColorDisabled: props => {
    return `${resolveValue(props, props.theme.jatoTypographyTextColorTertiary)}`;
  },
  textInputBackgroundColorDisabled: props => {
    return `${resolveValue(props, props.theme.jatoBackgroundElevationLevel2Disabled)}`;
  },
  textInputBorderColorFocused: props => {
    return `${resolveValue(props, props.theme.jatoInputBorderContainerNeutral)}
    ${resolveValue(props, props.theme.jatoInputBorderContainerNeutral)} ${resolveValue(props, props.theme.jatoInputBorderFocusEnabled)}
    ${resolveValue(props, props.theme.jatoInputBorderContainerNeutral)}`;
  },
  textInputBoxShadowFocused: props => {
    return `inset 0px -1px 0px 0px ${resolveValue(props, props.theme.jatoInputBorderFocusEnabled)}`;
  },
  textInputBorderColorHover: props => {
    return `${resolveValue(props, props.theme.jatoInputBorderContainerHover)}
    ${resolveValue(props, props.theme.jatoInputBorderContainerHover)} ${resolveValue(props, props.theme.jatoInputBorderFocusHover)}
    ${resolveValue(props, props.theme.jatoInputBorderContainerHover)}`;
  },
  textInputBackgroundColorHover: props => {
    return `${resolveValue(props, props.theme.jatoBackgroundElevationLevel2Hover)}`;
  },
  textInputBoxShadowHover: props => {
    return `inset 0px -2px 0px 0px ${resolveValue(props, props.theme.jatoInputBorderFocusHover)}`;
  },
  textInputBorderColorInvalid: props => {
    return `${resolveValue(props, props.theme.jatoInputBorderContainerErrorNeutral)}
    ${resolveValue(props, props.theme.jatoInputBorderContainerErrorNeutral)} ${resolveValue(props, props.theme.jatoInputBorderFocusErrorNeutral)}
    ${resolveValue(props, props.theme.jatoInputBorderContainerErrorNeutral)}`;
  },
  textInputBackgroundColorInvalid: props => {
    return `${resolveValue(props, props.theme.jatoBackgroundErrorNeutral)}`;
  },
  textInputBackgroundColorHoverInvalid: props => {
    return `${resolveValue(props, props.theme.jatoBackgroundErrorHover)}`;
  },
  textInputBoxShadowHoverInvalid: props => {
    return `inset 0px -2px 0px 0px ${resolveValue(props, props.theme.jatoInputBorderFocusErrorHover)}`;
  },
  textInputBorderColorHoverInvalid: props => {
    return `${resolveValue(props, props.theme.jatoInputBorderContainerErrorHover)}
    ${resolveValue(props, props.theme.jatoInputBorderContainerErrorHover)} ${resolveValue(props, props.theme.jatoInputBorderFocusErrorHover)}
    ${resolveValue(props, props.theme.jatoInputBorderContainerErrorHover)}`;
  },
  textInputPaddingInlineStartSearch: '20px',
  textInputPlaceholderColor: props => {
    return `${resolveValue(props, props.theme.jatoTypographyFormsTextColorPlaceholderText)}`;
  },
  textInputPlaceholderFontWeight: '350',
  textInputPlaceholderColorDisabled: props => {
    return `${resolveValue(props, props.theme.jatoTypographyTextColorDisabled)}`;
  },
  textInputPlaceholderBackgroundImageSearch: 'url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMSA3QzExIDkuMjA5MTQgOS4yMDkxNCAxMSA3IDExQzQuNzkwODYgMTEgMyA5LjIwOTE0IDMgN0MzIDQuNzkwODYgNC43OTA4NiAzIDcgM0M5LjIwOTE0IDMgMTEgNC43OTA4NiAxMSA3Wk0xMC4xNjQ0IDEwLjg3MTVDOS4zMDI0NCAxMS41NzY4IDguMjAwNjQgMTIgNyAxMkM0LjIzODU4IDEyIDIgOS43NjE0MiAyIDdDMiA0LjIzODU4IDQuMjM4NTggMiA3IDJDOS43NjE0MiAyIDEyIDQuMjM4NTggMTIgN0MxMiA4LjIwMDYzIDExLjU3NjggOS4zMDI0MiAxMC44NzE1IDEwLjE2NDRMMTMuODg5MSAxMy4xODJDMTQuMDg0MyAxMy4zNzcyIDE0LjA4NDMgMTMuNjkzOCAxMy44ODkxIDEzLjg4OTFDMTMuNjkzOCAxNC4wODQzIDEzLjM3NzIgMTQuMDg0MyAxMy4xODIgMTMuODg5MUwxMC4xNjQ0IDEwLjg3MTVaIiBmaWxsPSIjNjQ3MDdDIi8+Cjwvc3ZnPgo=")',
  textInputPlaceholderBackgroundPositionSearch: '0px 7px',
  textInputPlaceholderBackgroundSizeSearch: '16px',
  textInputPlaceholderBackgroundPositionSearchSmall: '0px 3px',
  textInputPlaceholderBackgroundPositionSearchLarge: '0px 11px',
  textareaFontWeight: props => {
    return `${resolveValue(props, props.theme.typographyFontWeightRegular)}`;
  },
  textareaFontSize: '13px',
  textareaLineHeight: '19px',
  textareaPaddingInlineStart: props => {
    return `${resolveValue(props, props.theme.textInputPaddingInlineStart)}`;
  },
  textareaPaddingInlineEnd: props => {
    return `${resolveValue(props, props.theme.textInputPaddingInlineEnd)}`;
  },
  textareaPaddingInline: props => {
    return `${resolveValue(props, props.theme.textareaPaddingInlineStart)}
    ${resolveValue(props, props.theme.textareaPaddingInlineEnd)}`;
  },
  textareaPaddingBlockStart: props => {
    return `${resolveValue(props, props.theme.textInputPaddingBlockStart)}`;
  },
  textareaPaddingBlockEnd: props => {
    return `${resolveValue(props, props.theme.textInputPaddingBlockEnd)}`;
  },
  textareaColor: props => {
    return `${resolveValue(props, props.theme.typographyColorHighEmphasis)}`;
  },
  textareaBackgroundColor: props => {
    return `${resolveValue(props, props.theme.elevationBackgroundColor)}`;
  },
  textareaBorderWidth: '1px',
  textareaBorderStyle: 'solid',
  textareaBorderColor: props => {
    return `${resolveValue(props, props.theme.textInputBorderColor)}`;
  },
  textareaBorderRadius: props => {
    return `${resolveValue(props, props.theme.textInputBorderRadius)}`;
  },
  textareaWidth: '100%',
  textareaBorderColorDisabled: props => {
    return `rgba(${resolveValue(props, props.theme.colorBlackRgb)}, 0.1)`;
  },
  textareaCursorDisabled: 'default',
  textareaColorDisabled: props => {
    return `${resolveValue(props, props.theme.typographyColorDisabled)}`;
  },
  textareaBackgroundColorDisabled: props => {
    return `rgba(${resolveValue(props, props.theme.colorBlackRgb)}, 0.02)`;
  },
  textareaBorderColorInvalid: props => {
    return `${resolveValue(props, props.theme.textInputBorderColorInvalid)}`;
  },
  textareaBackgroundColorInvalid: props => {
    return `${resolveValue(props, props.theme.textInputBackgroundColorInvalid)}`;
  },
  textareaBorderColorHoverInvalid: props => {
    return `${resolveValue(props, props.theme.textInputBorderColorHoverInvalid)}`;
  },
  textareaBackgroundColorHoverInvalid: props => {
    return `${resolveValue(props, props.theme.textInputBackgroundColorHoverInvalid)}`;
  },
  textareaBoxShadowHoverInvalid: props => {
    return `${resolveValue(props, props.theme.textInputBoxShadowHoverInvalid)}`;
  },
  textareaBorderColorHover: props => {
    return `${resolveValue(props, props.theme.textInputBorderColorHover)}`;
  },
  textareaBackgroundColorHover: props => {
    return `${resolveValue(props, props.theme.textInputBackgroundColorHover)}`;
  },
  textareaBoxShadowHover: props => {
    return `${resolveValue(props, props.theme.textInputBoxShadowHover)}`;
  },
  textareaOutlineFocused: 'none',
  textareaBorderColorFocused: props => {
    return `${resolveValue(props, props.theme.textInputBorderColorFocused)}`;
  },
  textareaBoxShadowFocused: props => {
    return `${resolveValue(props, props.theme.textInputBoxShadowFocused)}`;
  },
  textareaCursorReadonly: 'default',
  textareaBackgroundColorReadonly: 'transparent',
  textareaBorderColorReadonly: 'transparent',
  textareaPaddingInlineReadonly: '0',
  textareaBoxShadowReadonly: 'none',
  textareaPlaceholderColor: props => {
    return `${resolveValue(props, props.theme.jatoTypographyFormsTextColorPlaceholderText)}`;
  },
  textareaPlaceholderFontWeight: '350',
  textareaPlaceholderColorDisabled: props => {
    return `${resolveValue(props, props.theme.typographyColorDisabled)}`;
  },
  timeOffsetPickerWidth: '6rem',
  timeOffsetPickerHeight: props => {
    return `${resolveValue(props, props.theme.verticalNumberPickerHeight)}`;
  },
  timeOffsetPickerBackgroundColor: props => {
    return `${resolveValue(props, props.theme.numberPickerBackgroundColor)}`;
  },
  timeOffsetPickerInputTextAlign: props => {
    return `${resolveValue(props, props.theme.verticalNumberPickerInputTextAlign)}`;
  },
  timeOffsetPickerInputPaddingInlineStart: props => {
    return `${resolveValue(props, props.theme.numberPickerInputPaddingInlineStart)}`;
  },
  timeOffsetPickerInputPaddingInlineEnd: props => {
    return `${resolveValue(props, props.theme.numberPickerInputPaddingInlineEnd)}`;
  },
  timeOffsetPickerButtonHeight: props => {
    return `${resolveValue(props, props.theme.verticalNumberPickerButtonHeight)}`;
  },
  timeOffsetPickerButtonColorDisabled: props => {
    return `${resolveValue(props, props.theme.numberPickerButtonColorDisabled)}`;
  },
  timeOffsetPickerButtonColor: props => {
    return `${resolveValue(props, props.theme.numberPickerButtonColor)}`;
  },
  timeOffsetPickerButtonIconSize: props => {
    return `${resolveValue(props, props.theme.numberPickerButtonIconSize)}`;
  },
  timeOffsetPickerButtonBackgroundColorHover: props => {
    return `${resolveValue(props, props.theme.numberPickerButtonBackgroundColorHover)}`;
  },
  timePickerColumnGap: '8px',
  timePickerTimeInputColumnGap: '4px',
  timePickerNumberPickerWidth: '34px',
  toggleButtonGroupBorderRadius: props => {
    return `${resolveValue(props, props.theme.buttonBorderRadius)}`;
  },
  toggleButtonGroupBorderWidth: '1px',
  toggleButtonGroupBorderStyle: 'solid',
  toggleButtonGroupBorderColorPrimary: props => {
    return `${resolveValue(props, props.theme.colorPrimary)}`;
  },
  toggleButtonGroupBorderColorSecondary: props => {
    return `${resolveValue(props, props.theme.colorGray90)}`;
  },
  toggleButtonGroupBorderColorDisabled: 'rgba(0, 0, 0, 0.2)',
  toggleButtonGroupBorderColorSinglePrimarySelected: props => {
    return `${resolveValue(props, props.theme.toggleButtonGroupBorderColorPrimary)}`;
  },
  toggleButtonGroupPaddingInlineSingleSelect: '3px',
  toggleButtonGroupPaddingBlockSingleSelect: '3px',
  toggleButtonGroupGapSingleSelect: '3px',
  toggleButtonDividerWidthSingleSelect: '0',
  toggleButtonGroupBorderColorSingleSelectPrimary: props => {
    return `${resolveValue(props, props.theme.colorPrimary)}`;
  },
  toggleButtonPaddingInlineMultipleSelect: '10px',
  toggleButtonPaddingBlockMultipleSelect: '0',
  toggleButtonBoxShadowMultipleSelect: 'none',
  toggleButtonCursor: props => {
    return `${resolveValue(props, props.theme.buttonCursor)}`;
  },
  toggleButtonHeight: props => {
    return `${resolveValue(props, props.theme.buttonHeight)}`;
  },
  toggleButtonMinWidth: 'unset',
  toggleButtonPaddingInline: props => {
    return `${resolveValue(props, props.theme.buttonPaddingInline)}`;
  },
  toggleButtonPaddingBlock: props => {
    return `${resolveValue(props, props.theme.buttonPaddingBlock)}`;
  },
  toggleButtonBorderRadius: '0',
  toggleButtonBorderRadiusFocused: props => {
    return `${resolveValue(props, props.theme.buttonBorderRadius)}`;
  },
  toggleButtonFontSize: props => {
    return `${resolveValue(props, props.theme.typographyFontSize)}`;
  },
  toggleButtonBorder: 'none',
  toggleButtonBoxShadowSelected: '0px 1px 4px 0px rgba(0, 0, 0, 0.14)',
  toggleButtonCursorSelected: 'pointer',
  toggleButtonColorPrimary: props => {
    return `${resolveValue(props, props.theme.colorPrimary)}`;
  },
  toggleButtonBackgroundColorPrimary: 'transparent',
  toggleButtonColorSelectedPrimary: props => {
    return `${resolveValue(props, props.theme.colorWhite)}`;
  },
  toggleButtonBackgroundColorSelectedPrimary: props => {
    return `${resolveValue(props, props.theme.colorPrimary)}`;
  },
  toggleButtonBackgroundColorHoverPrimary: props => {
    return `${resolveValue(props, props.theme.colorPrimaryFlatHover)}`;
  },
  toggleButtonBackgroundColorHoverSelectedPrimary: props => {
    return `${resolveValue(props, props.theme.colorPrimaryHover)}`;
  },
  toggleButtonBoxShadowFocusedSelectedPrimary: props => {
    return `${resolveValue(props, props.theme.buttonBoxShadowFocused)}`;
  },
  toggleButtonColorSecondary: props => {
    return `${resolveValue(props, props.theme.colorGray80)}`;
  },
  toggleButtonBackgroundColorSecondary: 'transparent',
  toggleButtonColorSelectedSecondary: props => {
    return `${resolveValue(props, props.theme.colorWhite)}`;
  },
  toggleButtonBackgroundColorSelectedSecondary: props => {
    return `${resolveValue(props, props.theme.colorGray80)}`;
  },
  toggleButtonBackgroundColorHoverSecondary: props => {
    return `${resolveValue(props, props.theme.colorSecondaryFlatHover)}`;
  },
  toggleButtonBackgroundColorHoverSelectedSecondary: props => {
    return `${resolveValue(props, props.theme.colorGray90)}`;
  },
  toggleButtonBoxShadowFocusedSelectedSecondary: props => {
    return `${resolveValue(props, props.theme.buttonBoxShadowFocused)}`;
  },
  toggleButtonCursorDisabled: 'default',
  toggleButtonColorDisabled: props => {
    return `${resolveValue(props, props.theme.typographyColorDisabled)}`;
  },
  toggleButtonBackgroundColorDisabled: 'transparent',
  toggleButtonBackgroundColorDisabledSelected: 'rgba(0, 0, 0, 0.05)',
  toggleButtonBorderStartStartRadiusFirstChild: '2px',
  toggleButtonBorderEndStartRadiusFirstChild: props => {
    return `${resolveValue(props, props.theme.toggleButtonBorderStartStartRadiusFirstChild)}`;
  },
  toggleButtonBorderStartEndRadiusLastChild: props => {
    return `${resolveValue(props, props.theme.toggleButtonBorderStartStartRadiusFirstChild)}`;
  },
  toggleButtonBorderEndEndRadiusLastChild: props => {
    return `${resolveValue(props, props.theme.toggleButtonBorderStartStartRadiusFirstChild)}`;
  },
  toggleButtonDividerHeight: '16px',
  toggleButtonDividerWidth: '1px',
  toggleButtonDividerBackgroundColorSelected: props => {
    return `rgba(${resolveValue(props, props.theme.colorWhiteRgb)}, 0.6)`;
  },
  toggleButtonDividerBackgroundColorDisabled: 'rgba(0, 0, 0, 0.08)',
  toggleButtonDividerBackgroundColorPrimary: props => {
    return `rgba(${resolveValue(props, props.theme.colorPrimaryRgb)}, 0.5)`;
  },
  toggleButtonDividerBackgroundColorSecondary: props => {
    return `${resolveValue(props, props.theme.colorGray80)}`;
  },
  toggleButtonHeightSingleSelect: '24px',
  toggleButtonPaddingInlineSingleSelect: '6px',
  toggleButtonPaddingBlockSingleSelect: '3px',
  toggleButtonBorderRadiusSingleSelect: '2px',
  toggleButtonBorderRadiusSingleSelectInner: props => {
    return `${resolveValue(props, props.theme.toggleButtonBorderRadiusSingleSelect)}`;
  },
  toggleButtonBorderSingleSelect: 'none',
  toggleButtonGroupBorderColorMultipleSelectPrimary: props => {
    return `${resolveValue(props, props.theme.colorPrimary)}`;
  },
  toggleButtonBoxShadowFocusedDeselected: 'none',
  toggleButtonOutlineFocusedDeselected: props => {
    return `${resolveValue(props, props.theme.focusOutlineWidth)} solid
    ${resolveValue(props, props.theme.focusOutlineColor)}`;
  },
  toggleButtonOutlineOffsetFocusedDeselected: '1px',
  toggleSwitchCursor: 'pointer',
  toggleSwitchMinHeight: '16px',
  toggleSwitchMaxWidth: 'fit-content',
  toggleSwitchSpacing: '8px',
  toggleSwitchBoxShadow: 'none',
  toggleSwitchPaddingInline: '6px',
  toggleSwitchPaddingBlock: '4px',
  toggleSwitchBorderRadius: props => {
    return `${resolveValue(props, props.theme.jatoRadiiMed)}`;
  },
  toggleSwitchBackgroundColor: 'none',
  toggleSwitchTransition: 'background-color 100ms ease-out',
  toggleSwitchBackgroundColorHover: 'transparent',
  toggleSwitchBackgroundColorActive: 'transparent',
  toggleSwitchBoxShadowFocused: props => {
    return `0 0 0 ${resolveValue(props, props.theme.focusOutlineWidth)}
    ${resolveValue(props, props.theme.focusOutlineColor)}`;
  },
  toggleSwitchCursorDisabled: 'default',
  toggleSwitchControlWidth: '46px',
  toggleSwitchControlHeight: '22px',
  toggleSwitchTrackWidth: props => {
    return `${resolveValue(props, props.theme.toggleSwitchControlWidth)}`;
  },
  toggleSwitchTrackHeight: props => {
    return `${resolveValue(props, props.theme.toggleSwitchControlHeight)}`;
  },
  toggleSwitchTrackBorderRadius: '12px',
  toggleSwitchTrackBackgroundColor: props => {
    return `${resolveValue(props, props.theme.jatoControlToggleBackgroundNeutral)}`;
  },
  toggleSwitchTrackBorderWidth: '1px',
  toggleSwitchTrackBorderColor: props => {
    return `${resolveValue(props, props.theme.jatoControlBorderPrimaryNeutral)}`;
  },
  toggleSwitchTrackTransition: 'all 100ms ease-out',
  toggleSwitchTrackBackgroundColorHover: props => {
    return `${resolveValue(props, props.theme.jatoControlBackgroundPrimaryHover)}`;
  },
  toggleSwitchTrackBorderColorHover: props => {
    return `${resolveValue(props, props.theme.jatoControlBorderPrimaryHover)}`;
  },
  toggleSwitchTrackBackgroundColorActive: props => {
    return `${resolveValue(props, props.theme.jatoControlBackgroundPrimaryActive)}`;
  },
  toggleSwitchTrackBorderColorActive: props => {
    return `${resolveValue(props, props.theme.jatoControlBorderPrimaryActive)}`;
  },
  toggleSwitchTrackBackgroundColorChecked: props => {
    return `${resolveValue(props, props.theme.jatoControlBackgroundPrimarySelectedNeutral)}`;
  },
  toggleSwitchTrackBorderColorChecked: props => {
    return `${resolveValue(props, props.theme.jatoControlBorderPrimarySelectedNeutral)}`;
  },
  toggleSwitchTrackBackgroundColorCheckedHover: props => {
    return `${resolveValue(props, props.theme.jatoControlBackgroundPrimarySelectedHover)}`;
  },
  toggleSwitchTrackBorderColorCheckedHover: props => {
    return `${resolveValue(props, props.theme.jatoControlBorderPrimarySelectedHover)}`;
  },
  toggleSwitchTrackBackgroundColorCheckedActive: props => {
    return `${resolveValue(props, props.theme.jatoControlBackgroundPrimarySelectedActive)}`;
  },
  toggleSwitchTrackBorderColorCheckedActive: props => {
    return `${resolveValue(props, props.theme.jatoControlBorderPrimarySelectedActive)}`;
  },
  toggleSwitchTrackBackgroundColorDisabled: props => {
    return `${resolveValue(props, props.theme.jatoControlBackgroundPrimaryDisabled)}`;
  },
  toggleSwitchTrackBorderColorDisabled: props => {
    return `${resolveValue(props, props.theme.jatoControlBorderPrimaryDisabled)}`;
  },
  toggleSwitchTrackBackgroundColorDisabledChecked: props => {
    return `${resolveValue(props, props.theme.jatoControlToggleBackgroundSelectedDisabled)}`;
  },
  toggleSwitchTrackBorderColorDisabledChecked: props => {
    return `${resolveValue(props, props.theme.jatoControlBorderPrimaryDisabled)}`;
  },
  toggleSwitchThumbInsetInlineStart: '4px',
  toggleSwitchThumbInsetInlineEnd: 'unset',
  toggleSwitchThumbWidth: '16px',
  toggleSwitchThumbHeight: '16px',
  toggleSwitchThumbBackgroundColor: props => {
    return `${resolveValue(props, props.theme.jatoControlToggleBackgroundHandle)}`;
  },
  toggleSwitchThumbBoxShadow: props => {
    return `0px 1px 4px rgba(0, 0, 0, 0.35),
    0px 0px 1px 1px ${resolveValue(props, props.theme.jatoColorSteel0730)}`;
  },
  toggleSwitchThumbBorderRadius: '12px',
  toggleSwitchThumbBorderWidth: '0',
  toggleSwitchThumbBorderStyle: 'solid',
  toggleSwitchThumbBorderColor: 'none',
  toggleSwitchThumbTransform: 'none',
  toggleSwitchThumbTransition: 'all 100ms ease-in-out',
  toggleSwitchThumbTransformActive: 'scale(1.25)',
  toggleSwitchThumbInsetInlineStartChecked: '26px',
  toggleSwitchThumbInsetInlineEndChecked: '0',
  toggleSwitchThumbBackgroundColorChecked: props => {
    return `${resolveValue(props, props.theme.jatoControlToggleBackgroundHandle)}`;
  },
  toggleSwitchThumbBorderColorChecked: 'none',
  toggleSwitchThumbInsetInlineEndHover: '4px',
  toggleSwitchThumbInsetInlineStartHoverChecked: props => {
    return `${resolveValue(props, props.theme.toggleSwitchThumbInsetInlineStartChecked)}`;
  },
  toggleSwitchThumbBorderColorDisabled: props => {
    return `${resolveValue(props, props.theme.jatoControlBorderPrimaryDisabled)}`;
  },
  toggleSwitchThumbBackgroundColorDisabled: props => {
    return `${resolveValue(props, props.theme.jatoControlToggleBackgroundHandleDisabled)}`;
  },
  toggleSwitchThumbBoxShadowDisabled: props => {
    return `0 0 1px 1px
    ${resolveValue(props, props.theme.jatoControlBorderPrimaryDisabled)}`;
  },
  toggleSwitchThumbBorderColorDisabledChecked: 'none',
  toggleSwitchThumbBackgroundColorDisabledChecked: props => {
    return `${resolveValue(props, props.theme.jatoControlToggleBackgroundHandleSelectedDisabled)}`;
  },
  toggleSwitchThumbBoxShadowDisabledChecked: 'none',
  toggleSwitchTrackBackgroundClipDisabledChecked: 'padding-box',
  toggleSwitchThumbBoxShadowFocused: props => {
    return `${resolveValue(props, props.theme.toggleSwitchThumbBoxShadow)}`;
  },
  toggleSwitchLabelFontSize: '13px',
  toggleSwitchLabelFontWeight: '400',
  toggleSwitchLabelColor: props => {
    return `${resolveValue(props, props.theme.jatoTypographyTextColorPrimary)}`;
  },
  toggleSwitchLabelColorDisabled: props => {
    return `${resolveValue(props, props.theme.jatoTypographyTextColorDisabled)}`;
  },
  toolbarHeight: '40px',
  toolbarPaddingInline: '8px',
  toolbarPaddingBlock: '0',
  toolbarBackgroundColor: props => {
    return `${resolveValue(props, props.theme.elevationBackgroundColor1)}`;
  },
  toolbarBoxShadow: props => {
    return `${resolveValue(props, props.theme.elevationBoxShadow1)}`;
  },
  toolbarBorderRadius: '2px',
  toolbarBorderWidth: '1px',
  toolbarBorderStyle: 'solid',
  toolbarBorderColor: props => {
    return `${resolveValue(props, props.theme.elevationBorderColor1)}`;
  },
  toolbarBorder: props => {
    return `${resolveValue(props, props.theme.toolbarBorderWidth)} ${resolveValue(props, props.theme.toolbarBorderStyle)} ${resolveValue(props, props.theme.toolbarBorderColor)}`;
  },
  toolbarGap: '8px',
  toolbarDividerHeight: '16px',
  toolbarDividerBackgroundColor: props => {
    return `${resolveValue(props, props.theme.colorGray30)}`;
  },
  toolbarDividerThickness: '1px',
  tooltipMinWidth: '24px',
  tooltipBorderRadius: props => {
    return `${resolveValue(props, props.theme.jatoRadiiMed)}`;
  },
  tooltipFilter: 'none',
  tooltipBoxShadow: props => {
    return `${resolveValue(props, props.theme.elevationBoxShadow3)}`;
  },
  tooltipBorderWidth: '1px',
  tooltipBorderStyle: 'solid',
  tooltipBorderColor: props => {
    return `${resolveValue(props, props.theme.jatoTooltipsBackground)}`;
  },
  tooltipBackgroundColor: props => {
    return `${resolveValue(props, props.theme.jatoTooltipsBackground)}`;
  },
  tooltipColor: props => {
    return `${resolveValue(props, props.theme.jatoTooltipsTextColor)}`;
  },
  tooltipFontSize: '11px',
  tooltipPaddingInline: '12px',
  tooltipPaddingBlock: '8px',
  tooltipZIndex: props => {
    return `${resolveValue(props, props.theme.overlayZIndex)}`;
  },
  tooltipColorAutoInverse: props => {
    return `${resolveValue(props, props.theme.jatoTooltipsTextColor)}`;
  },
  tooltipBackgroundColorAutoInverse: props => {
    return `${resolveValue(props, props.theme.jatoTooltipsBackground)}`;
  },
  tooltipBorderColorAutoInverse: props => {
    return `${resolveValue(props, props.theme.tooltipBackgroundColorAutoInverse)}`;
  },
  tooltipColorDark: props => {
    return `${resolveValue(props, props.theme.jatoColorSteel7335)}`;
  },
  tooltipBackgroundColorDark: props => {
    return `${resolveValue(props, props.theme.jatoColorSteel0110)}`;
  },
  tooltipBorderColorDark: props => {
    return `${resolveValue(props, props.theme.tooltipBackgroundColorDark)}`;
  },
  tooltipColorLight: props => {
    return `${resolveValue(props, props.theme.jatoColorSteel0730)}`;
  },
  tooltipBackgroundColorLight: props => {
    return `${resolveValue(props, props.theme.jatoColorSteel8595)}`;
  },
  tooltipBorderColorLight: props => {
    return `${resolveValue(props, props.theme.tooltipBackgroundColorLight)}`;
  },
  tooltipArrowSize: '8px',
  tooltipArrowLeftStart: '34px',
  tooltipArrowRightEnd: props => {
    return `${resolveValue(props, props.theme.tooltipArrowLeftStart)}`;
  },
  tooltipAboveArrowInlineStartCenter: props => {
    return `calc(50% - (${resolveValue(props, props.theme.tooltipArrowSize)}))`;
  },
  tooltipBelowArrowInlineStartCenter: props => {
    return `${resolveValue(props, props.theme.tooltipAboveArrowInlineStartCenter)}`;
  },
  tooltipBeforeArrowInlineEndBefore: '-8px',
  tooltipBeforeArrowInlineEndAfter: '-7px',
  tooltipAfterArrowInlineStartBefore: props => {
    return `${resolveValue(props, props.theme.tooltipBeforeArrowInlineEndBefore)}`;
  },
  tooltipAfterArrowInlineStartAfter: props => {
    return `${resolveValue(props, props.theme.tooltipBeforeArrowInlineEndAfter)}`;
  },
  tooltipBeforeArrowTopCenterBefore: props => {
    return `calc(50% - (${resolveValue(props, props.theme.tooltipArrowSize)}))`;
  },
  tooltipBeforeArrowTopCenterAfter: props => {
    return `calc(
    (50% - (${resolveValue(props, props.theme.tooltipArrowSize)})) + 1px
  )`;
  },
  tooltipAfterArrowTopCenterBefore: props => {
    return `${resolveValue(props, props.theme.tooltipBeforeArrowTopCenterBefore)}`;
  },
  tooltipAfterArrowTopCenterAfter: props => {
    return `${resolveValue(props, props.theme.tooltipBeforeArrowTopCenterAfter)}`;
  },
  treeDrawerWidthMinimized: '24px',
  treeHeaderHeight: '48px',
  treeHeaderPaddingInline: '8px',
  treeHeaderPaddingBlock: '8px',
  treeHeaderGap: '8px',
  treeHeaderBoxShadow: props => {
    return `inset 0px -1px 0px ${resolveValue(props, props.theme.colorGray25)}`;
  },
  treeHeaderPaddingInlineMinimized: '0',
  treeHeaderPaddingBlockMinimized: '0',
  treeNodeColor: props => {
    return `${resolveValue(props, props.theme.jatoCtaContentColorTertiary)}`;
  },
  treeNodeFontWeight: props => {
    return `${resolveValue(props, props.theme.typographyFontWeightRegular)}`;
  },
  treeNodeColumnGap: '6px',
  treeNodePaddingInline: '8px',
  treeNodeHeight: '32px',
  treeNodeHeightSmall: '24px',
  treeNodeHeightLarge: '48px',
  treeNodeBorder: 'none',
  treeNodeBorderRadius: '0',
  treeNodePaddingInlineStart: '8px',
  treeNodePaddingInlineEnd: '8px',
  treeNodePaddingMultiplier: '22px',
  treeNodeDisplay: 'flex',
  treeNodeInset: props => {
    return `calc(
    ${resolveValue(props, props.theme.treeNodeExpanderWidth)} + ${resolveValue(props, props.theme.treeNodeColumnGap)}
  )`;
  },
  treeNodeColorDisabled: props => {
    return `${resolveValue(props, props.theme.jatoCtaContentColorTertiaryDisabled)}`;
  },
  treeNodeBackgroundColorHover: props => {
    return `${resolveValue(props, props.theme.jatoBackgroundRowsHover)}`;
  },
  treeNodeBoxShadowFocus: props => {
    return `inset 0 0 0 ${resolveValue(props, props.theme.focusOutlineWidth)}
    ${resolveValue(props, props.theme.focusOutlineColor)}`;
  },
  treeNodeBackgroundColorFocus: props => {
    return `${resolveValue(props, props.theme.jatoBackgroundRowsSelected)}`;
  },
  treeNodeBoxShadowActive: 'none',
  treeNodeBoxShadowActiveFocus: props => {
    return `inset 0 0 0 ${resolveValue(props, props.theme.focusOutlineWidth)}
    ${resolveValue(props, props.theme.focusOutlineColor)}`;
  },
  treeNodeColorActive: props => {
    return `${resolveValue(props, props.theme.typographyColorHighEmphasis)}`;
  },
  treeNodeFontWeightActive: props => {
    return `${resolveValue(props, props.theme.typographyFontWeightBold)}`;
  },
  treeNodeBackgroundColorActive: props => {
    return `${resolveValue(props, props.theme.jatoBackgroundRowsActive)}`;
  },
  treeNodeBackgroundColorActiveHover: props => {
    return `${resolveValue(props, props.theme.jatoBackgroundRowsHover)}`;
  },
  treeNodeBackgroundColorExpanded: props => {
    return `${resolveValue(props, props.theme.colorGray05)}`;
  },
  treeNodeColumnGapMinimized: '0',
  treeNodePaddingStartMinimized: '4px',
  treeNodeBackgroundColorActiveChild: props => {
    return `${resolveValue(props, props.theme.jatoBackgroundRowsActive)}`;
  },
  treeNodeFontWeightActiveChild: props => {
    return `${resolveValue(props, props.theme.typographyFontWeightBold)}`;
  },
  treeNodeBackgroundColorFocusChild: props => {
    return `${resolveValue(props, props.theme.treeChildBackgroundColorSelected)}`;
  },
  treeNodeBackgroundColorActiveHoverChild: props => {
    return `${resolveValue(props, props.theme.treeChildBackgroundColorSelectedHover)}`;
  },
  treeNodeExpanderWidth: '1.5rem',
  treeNodeExpanderHeight: '100%',
  treeNodeExpanderFontSize: '1rem',
  treeNodeExpanderColor: props => {
    return `${resolveValue(props, props.theme.jatoCtaContentColorTertiary)}`;
  },
  treeNodeExpanderCursor: 'pointer',
  treeNodeExpanderPaddingInlineEnd: '8px',
  treeNodeExpanderIconTransformExpanded: 'rotate(90deg)',
  treeNodeExpanderIconTransformRtl: 'scale(-1, 1)',
  treeNodeExpanderIconTransformExpandedRtl: 'scale(-1, 1) rotate(90deg)',
  treeNodeContentColumnGap: '6px',
  treeNodeContentTextDecoration: 'none',
  treeNodeContentContainerPaddingInlineEnd: '8px',
  treeNodeIconFontSize: '16px',
  treeNodeIconWidth: '16px',
  treeNodeIconHeight: props => {
    return `${resolveValue(props, props.theme.treeNodeIconWidth)}`;
  },
  treeNodeIconColor: props => {
    return `${resolveValue(props, props.theme.jatoCtaContentColorTertiary)}`;
  },
  treeNodeTitleFontSize: '13px',
  treeNodeTitleFontWeight: '400',
  treeNodeTitleLineHeight: '18px',
  treeNodeTitleColor: props => {
    return `${resolveValue(props, props.theme.jatoCtaContentColorTertiary)}`;
  },
  treeNodeTitleDisplayMinimized: 'none',
  treeNodeLoadingContainerMinWidth: '24px',
  treeNodeLoadingContainerJustifyContent: 'center',
  treeMinimizeButtonSize: '12px',
  treeMinimizeButtonTransform: 'none',
  treeMinimizeButtonTransformMinimized: 'rotate(180deg)',
  treeNodeTrailingActionWidth: '24px',
  treeNodeTrailingActionHeight: '100%',
  treeNodeTrailingActionDisplay: 'flex',
  treeNodeTrailingActionAlignItems: 'center',
  treeNodeTrailingActionJustifyContent: 'center',
  treeMinimizeButtonTransformRtl: 'scale(-1, 1)',
  treeMinimizeButtonTransformMinimizedRtl: 'scale(-1, 1) rotate(180deg)',
  wizardWidth: '100%',
  wizardHeight: '460px',
  wizardBackgroundColor: props => {
    return `${resolveValue(props, props.theme.elevationBackgroundColor4)}`;
  },
  wizardSidePanelGap: props => {
    return `${resolveValue(props, props.theme.spacingM)}`;
  },
  wizardSidePanelPaddingInline: '8px 8px',
  wizardSidePanelPaddingBlock: '24px 24px',
  wizardSidePanelWidth: '200px',
  wizardSidePanelBackgroundColor: props => {
    return `${resolveValue(props, props.theme.colorGray05)}`;
  },
  wizardContentPanelPaddingInline: '28px 28px',
  wizardContentPanelPaddingBlock: '24px 24px',
  wizardStepHeaderPanelMarginInline: '4px 4px',
  wizardStepHeaderPanelMarginBlock: '0 6px',
  wizardStepContentPaddingInline: '4px 4px',
  wizardStepContentPaddingBlock: '4px 4px',
  wizardHeaderMarginInline: '8px 8px',
  wizardHeaderMarginBlock: '0 0',
  wizardHeaderBorderBottomWidth: '1px',
  wizardHeaderBorderBottomColor: props => {
    return `rgba(${resolveValue(props, props.theme.colorBlackRgb)}, 0.2)`;
  },
  wizardStepListGap: '4px',
  wizardStepListMarginInline: '-4px -4px',
  wizardStepListPaddingInline: '4px 4px',
  wizardStepListPaddingBlock: '4px 4px',
  wizardStepButtonHeight: '32px',
  wizardStepButtonBorder: 'none',
  wizardStepButtonBorderRadius: '2px',
  wizardStepButtonPaddingInline: '8px 10px',
  wizardStepButtonBackgroundColor: 'transparent',
  wizardStepButtonCursor: 'pointer',
  wizardStepButtonCursorDisabled: 'default',
  wizardStepButtonBackgroundColorHover: props => {
    return `rgba(${resolveValue(props, props.theme.colorPrimaryRgb)}, 0.1)`;
  },
  wizardStepButtonOutlineOffsetFocus: '-2px',
  wizardStepButtonBoxShadowActive: props => {
    return `0px 1px 4px rgba(${resolveValue(props, props.theme.colorBlackRgb)}, 0.14)`;
  },
  wizardStepButtonBackgroundColorActive: props => {
    return `rgba(${resolveValue(props, props.theme.colorPrimaryRgb)}, 0.2)`;
  },
  wizardStepLabelFontWeight: props => {
    return `${resolveValue(props, props.theme.typographyFontWeightRegular)}`;
  },
  wizardStepLabelColor: props => {
    return `${resolveValue(props, props.theme.typographyColorBody)}`;
  },
  wizardStepLabelColorDisabled: props => {
    return `${resolveValue(props, props.theme.typographyColorTertiary)}`;
  },
  wizardStepLabelFontWeightActive: props => {
    return `${resolveValue(props, props.theme.typographyFontWeightMedium)}`;
  },
  wizardStepLabelColorActive: props => {
    return `${resolveValue(props, props.theme.typographyColorHighEmphasis)}`;
  },
  wizardStepStatusIconSize: '12px',
  wizardStepStatusIconFillActive: props => {
    return `${resolveValue(props, props.theme.colorBlue)}`;
  },
  wizardStepHeaderTitleColor: props => {
    return `${resolveValue(props, props.theme.typographyColorSecondary)}`;
  },
  wizardStepHeaderDescriptionColor: props => {
    return `${resolveValue(props, props.theme.typographyColorTertiary)}`;
  },
  wizardTitleMarginInline: '0',
  wizardTitleMarginBlock: '0',
  wizardFooterMarginInline: '4px 4px',
  wizardFooterMarginBlock: '28px 0',
  jatoAvatarBackgroundBlue: props => {
    return `${resolveValue(props, props.theme.jatoColorBlue1100)}`;
  },
  jatoAvatarBackgroundCerulean: props => {
    return `${resolveValue(props, props.theme.jatoColorCerulean1145)}`;
  },
  jatoAvatarBackgroundNavy: props => {
    return `${resolveValue(props, props.theme.jatoColorNavy1170)}`;
  },
  jatoAvatarBackgroundPink: props => {
    return `${resolveValue(props, props.theme.jatoColorRaspberry1205)}`;
  },
  jatoAvatarBackgroundPurple: props => {
    return `${resolveValue(props, props.theme.jatoColorPlum1210)}`;
  },
  jatoAvatarBackgroundSteel: props => {
    return `${resolveValue(props, props.theme.jatoColorSteel0730)}`;
  },
  jatoAvatarBackgroundTeal: props => {
    return `${resolveValue(props, props.theme.jatoColorTeal1720)}`;
  },
  jatoAvatarBorderColorActive: props => {
    return `${resolveValue(props, props.theme.jatoColorBlack0000A025)}`;
  },
  jatoAvatarBorderColorHover: props => {
    return `${resolveValue(props, props.theme.jatoColorBlack0000A012)}`;
  },
  jatoAvatarTextColor: props => {
    return `${resolveValue(props, props.theme.jatoColorWhite10000)}`;
  },
  jatoAviatorPromptBackground: props => {
    return `${resolveValue(props, props.theme.jatoColorNavy8530)}`;
  },
  jatoAviatorPromptTypography: props => {
    return `${resolveValue(props, props.theme.jatoColorElectric0530)}`;
  },
  jatoAviatorQueryBackground: props => {
    return `${resolveValue(props, props.theme.jatoColorNavy7450)}`;
  },
  jatoBackgroundBase: props => {
    return `${resolveValue(props, props.theme.jatoColorCharcoal9555)}`;
  },
  jatoBackgroundElevationBase: props => {
    return `${resolveValue(props, props.theme.jatoColorCharcoal9200)}`;
  },
  jatoBackgroundElevationGradientControlInlineContent: props => {
    return `${resolveValue(props, props.theme.jatoColorSteel9165A000)}`;
  },
  jatoBackgroundElevationGradientControlLevel0: props => {
    return `${resolveValue(props, props.theme.jatoColorSteel8595A000)}`;
  },
  jatoBackgroundElevationGradientControlLevel1: props => {
    return `${resolveValue(props, props.theme.jatoColorWhite10000A000)}`;
  },
  jatoBackgroundElevationGradientControlLevel2: props => {
    return `${resolveValue(props, props.theme.jatoColorWhite10000A000)}`;
  },
  jatoBackgroundElevationGradientControlLevel3: props => {
    return `${resolveValue(props, props.theme.jatoColorWhite10000A000)}`;
  },
  jatoBackgroundElevationGradientControlLevel4: props => {
    return `${resolveValue(props, props.theme.jatoColorWhite10000A000)}`;
  },
  jatoBackgroundElevationInlineContent: props => {
    return `${resolveValue(props, props.theme.jatoColorSteel9165)}`;
  },
  jatoBackgroundElevationLevel0: props => {
    return `${resolveValue(props, props.theme.jatoColorSteel8595)}`;
  },
  jatoBackgroundElevationLevel1: props => {
    return `${resolveValue(props, props.theme.jatoColorWhite10000)}`;
  },
  jatoBackgroundElevationLevel2: props => {
    return `${resolveValue(props, props.theme.jatoColorWhite10000)}`;
  },
  jatoBackgroundElevationLevel2Active: props => {
    return `${resolveValue(props, props.theme.jatoColorElectric9110)}`;
  },
  jatoBackgroundElevationLevel2Disabled: props => {
    return `${resolveValue(props, props.theme.jatoColorCharcoal9300)}`;
  },
  jatoBackgroundElevationLevel2Hover: props => {
    return `${resolveValue(props, props.theme.jatoColorElectric9715)}`;
  },
  jatoBackgroundElevationLevel3: props => {
    return `${resolveValue(props, props.theme.jatoColorWhite10000)}`;
  },
  jatoBackgroundElevationLevel4: props => {
    return `${resolveValue(props, props.theme.jatoColorWhite10000)}`;
  },
  jatoBackgroundErrorActive: props => {
    return `${resolveValue(props, props.theme.jatoColorFirebrick9170)}`;
  },
  jatoBackgroundErrorHover: props => {
    return `${resolveValue(props, props.theme.jatoColorFirebrick9380)}`;
  },
  jatoBackgroundErrorNeutral: props => {
    return `${resolveValue(props, props.theme.jatoColorFirebrick9380)}`;
  },
  jatoBackgroundMaskArea: props => {
    return `${resolveValue(props, props.theme.jatoColorWhite10000A065)}`;
  },
  jatoBackgroundMaskAreaStrong: props => {
    return `${resolveValue(props, props.theme.jatoColorWhite10000A095)}`;
  },
  jatoBackgroundMaskPage: props => {
    return `${resolveValue(props, props.theme.jatoColorSteel7335A065)}`;
  },
  jatoBackgroundRowsActive: props => {
    return `${resolveValue(props, props.theme.jatoColorBlack0000A012)}`;
  },
  jatoBackgroundRowsAlternate: props => {
    return `${resolveValue(props, props.theme.jatoColorNavy5140A015)}`;
  },
  jatoBackgroundRowsHover: props => {
    return `${resolveValue(props, props.theme.jatoColorBlack0000A005)}`;
  },
  jatoBackgroundRowsMenuToggled: props => {
    return `${resolveValue(props, props.theme.jatoColorSteel7335)}`;
  },
  jatoBackgroundRowsNew: props => {
    return `${resolveValue(props, props.theme.jatoColorHunter9340)}`;
  },
  jatoBackgroundRowsSelected: props => {
    return `${resolveValue(props, props.theme.jatoColorElectric7430)}`;
  },
  jatoBackgroundSuccessActive: props => {
    return `${resolveValue(props, props.theme.jatoColorHunter9340)}`;
  },
  jatoBackgroundSuccessHover: props => {
    return `${resolveValue(props, props.theme.jatoColorHunter9770)}`;
  },
  jatoBackgroundSuccessNeutral: props => {
    return `${resolveValue(props, props.theme.jatoColorHunter9770)}`;
  },
  jatoBackgroundTextHighlight: props => {
    return `${resolveValue(props, props.theme.jatoColorDiscovery9275A070)}`;
  },
  jatoBorderColorContrast: props => {
    return `${resolveValue(props, props.theme.jatoColorCharcoal0315)}`;
  },
  jatoBorderColorDifference: props => {
    return `${resolveValue(props, props.theme.jatoColorWhite10000)}`;
  },
  jatoBorderColorPrimary: props => {
    return `${resolveValue(props, props.theme.jatoColorBlack0000A015)}`;
  },
  jatoBorderColorPrimaryActive: props => {
    return `${resolveValue(props, props.theme.jatoColorBlack0000A040)}`;
  },
  jatoBorderColorPrimaryHover: props => {
    return `${resolveValue(props, props.theme.jatoColorBlack0000A020)}`;
  },
  jatoBorderColorPrimarySelected: props => {
    return `${resolveValue(props, props.theme.jatoColorElectric2385)}`;
  },
  jatoBrandProductName: props => {
    return `${resolveValue(props, props.theme.jatoColorBlack0000)}`;
  },
  jatoCoachmarksBorder: props => {
    return `${resolveValue(props, props.theme.jatoColorWhite10000A025)}`;
  },
  jatoControlBackgroundPrimaryActive: props => {
    return `${resolveValue(props, props.theme.jatoColorElectric6365)}`;
  },
  jatoControlBackgroundPrimaryDisabled: props => {
    return `${resolveValue(props, props.theme.jatoColorCharcoal9300)}`;
  },
  jatoControlBackgroundPrimaryHover: props => {
    return `${resolveValue(props, props.theme.jatoColorElectric8645)}`;
  },
  jatoControlBackgroundPrimaryNeutral: props => {
    return `${resolveValue(props, props.theme.jatoColorWhite10000)}`;
  },
  jatoControlBackgroundPrimarySelectedActive: props => {
    return `${resolveValue(props, props.theme.jatoColorElectric0165)}`;
  },
  jatoControlBackgroundPrimarySelectedDisabled: props => {
    return `${resolveValue(props, props.theme.jatoColorCharcoal7365)}`;
  },
  jatoControlBackgroundPrimarySelectedHover: props => {
    return `${resolveValue(props, props.theme.jatoColorElectric0530)}`;
  },
  jatoControlBackgroundPrimarySelectedNeutral: props => {
    return `${resolveValue(props, props.theme.jatoColorElectric1435)}`;
  },
  jatoControlBackgroundReadOnlyActive: props => {
    return `${resolveValue(props, props.theme.jatoColorNavy5140)}`;
  },
  jatoControlBackgroundReadOnlyHover: props => {
    return `${resolveValue(props, props.theme.jatoColorNavy7145)}`;
  },
  jatoControlBackgroundReadOnlyNeutral: props => {
    return `${resolveValue(props, props.theme.jatoColorNavy9295)}`;
  },
  jatoControlBackgroundReadOnlyNeutral2: props => {
    return `${resolveValue(props, props.theme.jatoColorWhite10000A005)}`;
  },
  jatoControlBackgroundSecondaryActive: props => {
    return `${resolveValue(props, props.theme.jatoColorBlack0000A012)}`;
  },
  jatoControlBackgroundSecondaryHover: props => {
    return `${resolveValue(props, props.theme.jatoColorBlack0000A005)}`;
  },
  jatoControlBorderPrimaryActive: props => {
    return `${resolveValue(props, props.theme.jatoColorElectric0165)}`;
  },
  jatoControlBorderPrimaryDisabled: props => {
    return `${resolveValue(props, props.theme.jatoColorCharcoal7365)}`;
  },
  jatoControlBorderPrimaryHover: props => {
    return `${resolveValue(props, props.theme.jatoColorElectric0530)}`;
  },
  jatoControlBorderPrimaryNeutral: props => {
    return `${resolveValue(props, props.theme.jatoColorSteel1120)}`;
  },
  jatoControlBorderPrimaryNeutralLight: props => {
    return `${resolveValue(props, props.theme.jatoColorSteel6325)}`;
  },
  jatoControlBorderPrimarySelectedActive: props => {
    return `${resolveValue(props, props.theme.jatoColorElectric0165)}`;
  },
  jatoControlBorderPrimarySelectedDisabled: props => {
    return `${resolveValue(props, props.theme.jatoColorCharcoal7365)}`;
  },
  jatoControlBorderPrimarySelectedHover: props => {
    return `${resolveValue(props, props.theme.jatoColorElectric0530)}`;
  },
  jatoControlBorderPrimarySelectedNeutral: props => {
    return `${resolveValue(props, props.theme.jatoColorElectric1435)}`;
  },
  jatoControlBorderReadOnlyActive: props => {
    return `${resolveValue(props, props.theme.jatoColorNavy1755)}`;
  },
  jatoControlBorderReadOnlyHover: props => {
    return `${resolveValue(props, props.theme.jatoColorNavy3855)}`;
  },
  jatoControlBorderReadOnlyNeutral: props => {
    return `${resolveValue(props, props.theme.jatoColorNavy7145)}`;
  },
  jatoControlBorderSecondaryActive: props => {
    return `${resolveValue(props, props.theme.jatoColorBlack0000A012)}`;
  },
  jatoControlBorderSecondaryHover: props => {
    return `${resolveValue(props, props.theme.jatoColorBlack0000A005)}`;
  },
  jatoControlMvAddActive: props => {
    return `${resolveValue(props, props.theme.jatoColorElectric0530)}`;
  },
  jatoControlMvAddEnabled: props => {
    return `${resolveValue(props, props.theme.jatoColorElectric1435)}`;
  },
  jatoControlMvAddHover: props => {
    return `${resolveValue(props, props.theme.jatoColorElectric1435)}`;
  },
  jatoControlMvAddNeutral: props => {
    return `${resolveValue(props, props.theme.jatoColorSteel1120)}`;
  },
  jatoControlMvClearActive: props => {
    return `${resolveValue(props, props.theme.jatoColorFirebrick0385)}`;
  },
  jatoControlMvClearEnabled: props => {
    return `${resolveValue(props, props.theme.jatoColorFirebrick0995)}`;
  },
  jatoControlMvClearHover: props => {
    return `${resolveValue(props, props.theme.jatoColorFirebrick0995)}`;
  },
  jatoControlMvClearNeutral: props => {
    return `${resolveValue(props, props.theme.jatoColorSteel1120)}`;
  },
  jatoControlSymbolColorActive: props => {
    return `${resolveValue(props, props.theme.jatoColorElectric0165)}`;
  },
  jatoControlSymbolColorHover: props => {
    return `${resolveValue(props, props.theme.jatoColorElectric3335)}`;
  },
  jatoControlSymbolColorSelectedActive: props => {
    return `${resolveValue(props, props.theme.jatoColorElectric4705)}`;
  },
  jatoControlSymbolColorSelectedDisabled: props => {
    return `${resolveValue(props, props.theme.jatoColorCharcoal3805)}`;
  },
  jatoControlSymbolColorSelectedHover: props => {
    return `${resolveValue(props, props.theme.jatoColorElectric4705)}`;
  },
  jatoControlSymbolColorSelectedNeutral: props => {
    return `${resolveValue(props, props.theme.jatoColorWhite10000)}`;
  },
  jatoControlSymbolColorSingleActive: props => {
    return `${resolveValue(props, props.theme.jatoColorCharcoal0315)}`;
  },
  jatoControlSymbolColorSingleHover: props => {
    return `${resolveValue(props, props.theme.jatoColorCharcoal2410)}`;
  },
  jatoControlSymbolColorSingleSelectedDisabled: props => {
    return `${resolveValue(props, props.theme.jatoColorCharcoal3805)}`;
  },
  jatoControlSymbolColorSingleSelectedNeutral: props => {
    return `${resolveValue(props, props.theme.jatoColorCharcoal0315)}`;
  },
  jatoControlToggleBackgroundHandle: props => {
    return `${resolveValue(props, props.theme.jatoColorWhite10000)}`;
  },
  jatoControlToggleBackgroundHandleDisabled: props => {
    return `${resolveValue(props, props.theme.jatoColorWhite10000)}`;
  },
  jatoControlToggleBackgroundHandleSelectedDisabled: props => {
    return `${resolveValue(props, props.theme.jatoColorCharcoal5960)}`;
  },
  jatoControlToggleBackgroundNeutral: props => {
    return `${resolveValue(props, props.theme.jatoColorSteel9165)}`;
  },
  jatoControlToggleBackgroundSelectedDisabled: props => {
    return `${resolveValue(props, props.theme.jatoColorCharcoal3805)}`;
  },
  jatoControlToggleBackgroundSelectedNeutral: props => {
    return `${resolveValue(props, props.theme.jatoColorElectric1435)}`;
  },
  jatoControlToggleBorderNeutral: props => {
    return `${resolveValue(props, props.theme.jatoColorSteel1120)}`;
  },
  jatoControlToggleBorderSelected: props => {
    return `${resolveValue(props, props.theme.jatoColorElectric1435)}`;
  },
  jatoControlToggleShadowColor: props => {
    return `${resolveValue(props, props.theme.jatoColorSteel0730)}`;
  },
  jatoCtaBackgroundMyaviatorActive: props => {
    return `${resolveValue(props, props.theme.jatoColorElectric7430)}`;
  },
  jatoCtaBackgroundMyaviatorHover: props => {
    return `${resolveValue(props, props.theme.jatoColorElectric8645)}`;
  },
  jatoCtaBackgroundMyaviatorNeutral: props => {
    return `${resolveValue(props, props.theme.jatoColorElectric9110)}`;
  },
  jatoCtaBackgroundPrimaryActive: props => {
    return `${resolveValue(props, props.theme.jatoColorElectric0165)}`;
  },
  jatoCtaBackgroundPrimaryDisabled: props => {
    return `${resolveValue(props, props.theme.jatoColorBlack0000A005)}`;
  },
  jatoCtaBackgroundPrimaryHover: props => {
    return `${resolveValue(props, props.theme.jatoColorElectric0530)}`;
  },
  jatoCtaBackgroundPrimaryNeutral: props => {
    return `${resolveValue(props, props.theme.jatoColorElectric1435)}`;
  },
  jatoCtaBackgroundSecondaryActive: props => {
    return `${resolveValue(props, props.theme.jatoColorElectric7430)}`;
  },
  jatoCtaBackgroundSecondaryDisabled: props => {
    return `${resolveValue(props, props.theme.jatoColorCharcoal9300)}`;
  },
  jatoCtaBackgroundSecondaryHover: props => {
    return `${resolveValue(props, props.theme.jatoColorElectric8645)}`;
  },
  jatoCtaBackgroundSecondaryNeutral: props => {
    return `${resolveValue(props, props.theme.jatoColorWhite10000)}`;
  },
  jatoCtaBackgroundTertiaryActive: props => {
    return `${resolveValue(props, props.theme.jatoColorBlack0000A015)}`;
  },
  jatoCtaBackgroundTertiaryHover: props => {
    return `${resolveValue(props, props.theme.jatoColorBlack0000A010)}`;
  },
  jatoCtaBackgroundTertiaryToggledActive: props => {
    return `${resolveValue(props, props.theme.jatoColorBlack0000A012)}`;
  },
  jatoCtaBackgroundTertiaryToggledDisabled: props => {
    return `${resolveValue(props, props.theme.jatoColorSteel8595)}`;
  },
  jatoCtaBackgroundTertiaryToggledHover: props => {
    return `${resolveValue(props, props.theme.jatoColorBlack0000A005)}`;
  },
  jatoCtaBackgroundTertiaryToggledNeutral: props => {
    return `${resolveValue(props, props.theme.jatoColorSteel7335)}`;
  },
  jatoCtaBorderColorMyaviatorActive: props => {
    return `${resolveValue(props, props.theme.jatoColorElectric0165)}`;
  },
  jatoCtaBorderColorMyaviatorHover: props => {
    return `${resolveValue(props, props.theme.jatoColorElectric0530)}`;
  },
  jatoCtaBorderColorMyaviatorNeutral: props => {
    return `${resolveValue(props, props.theme.jatoColorElectric7430)}`;
  },
  jatoCtaBorderColorSecondaryActive: props => {
    return `${resolveValue(props, props.theme.jatoColorElectric0165)}`;
  },
  jatoCtaBorderColorSecondaryDisabled: props => {
    return `${resolveValue(props, props.theme.jatoColorBlack0000A015)}`;
  },
  jatoCtaBorderColorSecondaryHover: props => {
    return `${resolveValue(props, props.theme.jatoColorElectric0530)}`;
  },
  jatoCtaBorderColorSecondaryNeutral: props => {
    return `${resolveValue(props, props.theme.jatoColorElectric1435)}`;
  },
  jatoCtaContentColorPrimary: props => {
    return `${resolveValue(props, props.theme.jatoColorWhite10000)}`;
  },
  jatoCtaContentColorPrimaryDisabled: props => {
    return `${resolveValue(props, props.theme.jatoColorCharcoal2410)}`;
  },
  jatoCtaContentColorSecondaryActive: props => {
    return `${resolveValue(props, props.theme.jatoColorElectric0165)}`;
  },
  jatoCtaContentColorSecondaryDisabled: props => {
    return `${resolveValue(props, props.theme.jatoColorCharcoal2410)}`;
  },
  jatoCtaContentColorSecondaryHover: props => {
    return `${resolveValue(props, props.theme.jatoColorElectric0530)}`;
  },
  jatoCtaContentColorSecondaryNeutral: props => {
    return `${resolveValue(props, props.theme.jatoColorElectric1435)}`;
  },
  jatoCtaContentColorTertiary: props => {
    return `${resolveValue(props, props.theme.jatoColorCharcoal0315)}`;
  },
  jatoCtaContentColorTertiaryDisabled: props => {
    return `${resolveValue(props, props.theme.jatoColorCharcoal2410)}`;
  },
  jatoCtaContentMyaviatorActive: props => {
    return `${resolveValue(props, props.theme.jatoColorElectric0165)}`;
  },
  jatoCtaContentMyaviatorHover: props => {
    return `${resolveValue(props, props.theme.jatoColorElectric0530)}`;
  },
  jatoCtaContentMyaviatorNeutral: props => {
    return `${resolveValue(props, props.theme.jatoColorElectric1115)}`;
  },
  jatoCtaDividerBorderColor: props => {
    return `${resolveValue(props, props.theme.jatoColorElectric3335)}`;
  },
  jatoCtaDividerBorderColorPrimaryDisabled: props => {
    return `${resolveValue(props, props.theme.jatoColorBlack0000A020)}`;
  },
  jatoCtaDividerBorderColorSecondaryDisabled: props => {
    return `${resolveValue(props, props.theme.jatoColorBlack0000A015)}`;
  },
  jatoCtaFocusBorder: props => {
    return `${resolveValue(props, props.theme.jatoColorElectric1115)}`;
  },
  jatoCtaFocusShadow: props => {
    return `${resolveValue(props, props.theme.jatoColorWhite10000)}`;
  },
  jatoCtaLinksSkipLinkBackgroundActive: props => {
    return `${resolveValue(props, props.theme.jatoColorElectric1435)}`;
  },
  jatoCtaLinksSkipLinkBackgroundHover: props => {
    return `${resolveValue(props, props.theme.jatoColorElectric2385)}`;
  },
  jatoCtaLinksSkipLinkBackgroundNeutral: props => {
    return `${resolveValue(props, props.theme.jatoColorBlack0000A090)}`;
  },
  jatoCtaLinksSkipLinkBorderColor: props => {
    return `${resolveValue(props, props.theme.jatoColorWhite10000)}`;
  },
  jatoCtaLinksSkipLinkTextColor: props => {
    return `${resolveValue(props, props.theme.jatoColorWhite10000)}`;
  },
  jatoCtaLinksTextColorActive: props => {
    return `${resolveValue(props, props.theme.jatoColorElectric0165)}`;
  },
  jatoCtaLinksTextColorDisabled: props => {
    return `${resolveValue(props, props.theme.jatoColorCharcoal2410)}`;
  },
  jatoCtaLinksTextColorHover: props => {
    return `${resolveValue(props, props.theme.jatoColorElectric0530)}`;
  },
  jatoCtaLinksTextColorNeutral: props => {
    return `${resolveValue(props, props.theme.jatoColorElectric1435)}`;
  },
  jatoCtaLinksTextColorVisitedActive: props => {
    return `${resolveValue(props, props.theme.jatoColorRaspberry0540)}`;
  },
  jatoCtaLinksTextColorVisitedHover: props => {
    return `${resolveValue(props, props.theme.jatoColorRaspberry1205)}`;
  },
  jatoCtaLinksTextColorVisitedNeutral: props => {
    return `${resolveValue(props, props.theme.jatoColorRaspberry1665)}`;
  },
  jatoDividerColorPrimary: props => {
    return `${resolveValue(props, props.theme.jatoColorBlack0000A010)}`;
  },
  jatoDividerPrimary: props => {
    return `${resolveValue(props, props.theme.jatoColorBlack0000A010)}`;
  },
  jatoElevationBackgroundLevel1: props => {
    return `${resolveValue(props, props.theme.jatoColorWhite10000)}`;
  },
  jatoElevationBlurLevel2: props => {
    return `${resolveValue(props, props.theme.jatoMeasure4)}`;
  },
  jatoElevationBlurLevel3: props => {
    return `${resolveValue(props, props.theme.jatoMeasure10)}`;
  },
  jatoElevationBlurLevel4: props => {
    return `${resolveValue(props, props.theme.jatoMeasure24)}`;
  },
  jatoElevationShadowColorLevel1: props => {
    return `${resolveValue(props, props.theme.jatoColorBlack0000A006)}`;
  },
  jatoElevationShadowColorLevel2: props => {
    return `${resolveValue(props, props.theme.jatoColorBlack0000A010)}`;
  },
  jatoElevationShadowColorLevel3: props => {
    return `${resolveValue(props, props.theme.jatoColorBlack0000A010)}`;
  },
  jatoElevationShadowColorLevel4: props => {
    return `${resolveValue(props, props.theme.jatoColorBlack0000A012)}`;
  },
  jatoElevationShadowLevel1: props => {
    return `0 ${resolveValue(props, props.theme.jatoElevationYAxisLevel1)}
    ${resolveValue(props, props.theme.jatoElevationBlurLevel1)} ${resolveValue(props, props.theme.jatoElevationShadowColorLevel1)}`;
  },
  jatoElevationShadowLevel2: props => {
    return `0 ${resolveValue(props, props.theme.jatoElevationYAxisLevel2)}
    ${resolveValue(props, props.theme.jatoElevationBlurLevel2)} ${resolveValue(props, props.theme.jatoElevationShadowColorLevel2)}`;
  },
  jatoElevationShadowLevel3: props => {
    return `0 ${resolveValue(props, props.theme.jatoElevationYAxisLevel3)}
    ${resolveValue(props, props.theme.jatoElevationBlurLevel3)} ${resolveValue(props, props.theme.jatoElevationShadowColorLevel3)}`;
  },
  jatoElevationShadowLevel4: props => {
    return `0 ${resolveValue(props, props.theme.jatoElevationYAxisLevel4)}
    ${resolveValue(props, props.theme.jatoElevationBlurLevel4)} ${resolveValue(props, props.theme.jatoElevationShadowColorLevel4)}`;
  },
  jatoElevationYAxisLevel2: props => {
    return `${resolveValue(props, props.theme.jatoMeasure2)}`;
  },
  jatoElevationYAxisLevel3: props => {
    return `${resolveValue(props, props.theme.jatoMeasure6)}`;
  },
  jatoElevationYAxisLevel4: props => {
    return `${resolveValue(props, props.theme.jatoMeasure12)}`;
  },
  jatoInputBorderContainerActive: props => {
    return `${resolveValue(props, props.theme.jatoColorNavy2570)}`;
  },
  jatoInputBorderContainerDisabled: props => {
    return `${resolveValue(props, props.theme.jatoColorCharcoal7365)}`;
  },
  jatoInputBorderContainerErrorActive: props => {
    return `${resolveValue(props, props.theme.jatoColorFirebrick2350)}`;
  },
  jatoInputBorderContainerErrorHover: props => {
    return `${resolveValue(props, props.theme.jatoColorFirebrick0995)}`;
  },
  jatoInputBorderContainerErrorNeutral: props => {
    return `${resolveValue(props, props.theme.jatoColorFirebrick2900)}`;
  },
  jatoInputBorderContainerHover: props => {
    return `${resolveValue(props, props.theme.jatoColorNavy2570)}`;
  },
  jatoInputBorderContainerNeutral: props => {
    return `${resolveValue(props, props.theme.jatoColorCharcoal5960)}`;
  },
  jatoInputBorderContainerSuccessHover: props => {
    return `${resolveValue(props, props.theme.jatoColorHunter1150)}`;
  },
  jatoInputBorderContainerSuccessNeutral: props => {
    return `${resolveValue(props, props.theme.jatoColorHunter4630)}`;
  },
  jatoInputBorderFocusActive: props => {
    return `${resolveValue(props, props.theme.jatoColorElectric0530)}`;
  },
  jatoInputBorderFocusDisabled: props => {
    return `${resolveValue(props, props.theme.jatoColorCharcoal5960)}`;
  },
  jatoInputBorderFocusEnabled: props => {
    return `${resolveValue(props, props.theme.jatoColorElectric1435)}`;
  },
  jatoInputBorderFocusErrorActive: props => {
    return `${resolveValue(props, props.theme.jatoColorFirebrick1440)}`;
  },
  jatoInputBorderFocusErrorEnabled: props => {
    return `${resolveValue(props, props.theme.jatoColorFirebrick1440)}`;
  },
  jatoInputBorderFocusErrorHover: props => {
    return `${resolveValue(props, props.theme.jatoColorFirebrick0995)}`;
  },
  jatoInputBorderFocusErrorNeutral: props => {
    return `${resolveValue(props, props.theme.jatoColorFirebrick0995)}`;
  },
  jatoInputBorderFocusNeutral: props => {
    return `${resolveValue(props, props.theme.jatoColorCharcoal1675)}`;
  },
  jatoJatoSwitchBackground: props => {
    return `${resolveValue(props, props.theme.jatoColorElectric8645)}`;
  },
  jatoLoaderIndicatorBackgroundError: props => {
    return `${resolveValue(props, props.theme.jatoColorFirebrick1440)}`;
  },
  jatoLoaderIndicatorBackgroundNeutral: props => {
    return `${resolveValue(props, props.theme.jatoColorElectric1770)}`;
  },
  jatoLoaderIndicatorBackgroundSuccess: props => {
    return `${resolveValue(props, props.theme.jatoColorHunter1635)}`;
  },
  jatoMessagesBackgroundOpacity: props => {
    return `${resolveValue(props, props.theme.jatoMeasure100)}`;
  },
  jatoMessagesInlineBackgroundError: props => {
    return `${resolveValue(props, props.theme.jatoColorFirebrick9380)}`;
  },
  jatoMessagesInlineBackgroundInformation: props => {
    return `${resolveValue(props, props.theme.jatoColorElectric9340)}`;
  },
  jatoMessagesInlineBackgroundSuccess: props => {
    return `${resolveValue(props, props.theme.jatoColorHunter9905)}`;
  },
  jatoMessagesInlineBackgroundWarning: props => {
    return `${resolveValue(props, props.theme.jatoColorAmber9540)}`;
  },
  jatoMessagesInlineBorderError: props => {
    return `${resolveValue(props, props.theme.jatoColorFirebrick2900)}`;
  },
  jatoMessagesInlineBorderGradientError: props => {
    return `${resolveValue(props, props.theme.jatoColorFirebrick1440)}`;
  },
  jatoMessagesInlineBorderGradientSuccess: props => {
    return `${resolveValue(props, props.theme.jatoColorHunter3310)}`;
  },
  jatoMessagesInlineBorderGradientWarning: props => {
    return `${resolveValue(props, props.theme.jatoColorAmber2985)}`;
  },
  jatoMessagesInlineBorderInformation: props => {
    return `${resolveValue(props, props.theme.jatoColorBlue3365)}`;
  },
  jatoMessagesInlineBorderSuccess: props => {
    return `${resolveValue(props, props.theme.jatoColorHunter4630)}`;
  },
  jatoMessagesInlineBorderWarning: props => {
    return `${resolveValue(props, props.theme.jatoColorAmber4425)}`;
  },
  jatoMessagesInlineIconFillError: props => {
    return `${resolveValue(props, props.theme.jatoColorFirebrick1440)}`;
  },
  jatoMessagesInlineIconFillInformation: props => {
    return `${resolveValue(props, props.theme.jatoColorBlue1695)}`;
  },
  jatoMessagesInlineIconFillSuccess: props => {
    return `${resolveValue(props, props.theme.jatoColorHunter1635)}`;
  },
  jatoMessagesInlineIconFillWarning: props => {
    return `${resolveValue(props, props.theme.jatoColorAmber2570)}`;
  },
  jatoNotificationsUnreadIndicatorBackground: props => {
    return `${resolveValue(props, props.theme.jatoColorFirebrick1440)}`;
  },
  jatoNotificationsUnreadIndicatorBorder: props => {
    return `${resolveValue(props, props.theme.jatoColorWhite10000)}`;
  },
  jatoNotificationsUnreadIndicatorTextColor: props => {
    return `${resolveValue(props, props.theme.jatoColorWhite10000)}`;
  },
  jatoScrollbarThumbBackground: props => {
    return `${resolveValue(props, props.theme.jatoColorNavy0690)}`;
  },
  jatoScrollbarThumbBorder: props => {
    return `${resolveValue(props, props.theme.jatoColorWhite10000A040)}`;
  },
  jatoSigninBackground: props => {
    return `${resolveValue(props, props.theme.jatoColorNavy9295)}`;
  },
  jatoSigninCtaBackgroundPrimaryActive: props => {
    return `${resolveValue(props, props.theme.jatoColorElectric0530)}`;
  },
  jatoSigninCtaBackgroundPrimaryHover00: props => {
    return `${resolveValue(props, props.theme.jatoColorElectric1115)}`;
  },
  jatoSigninCtaBackgroundPrimaryHover01: props => {
    return `${resolveValue(props, props.theme.jatoColorElectric0165)}`;
  },
  jatoSigninCtaBackgroundPrimaryNeutral00: props => {
    return `${resolveValue(props, props.theme.jatoColorElectric1770)}`;
  },
  jatoSigninCtaBackgroundPrimaryNeutral01: props => {
    return `${resolveValue(props, props.theme.jatoColorElectric0750)}`;
  },
  jatoSigninCtaBorderColorActive: props => {
    return `${resolveValue(props, props.theme.jatoColorWhite10000)}`;
  },
  jatoSigninCtaBorderColorDisabled: props => {
    return `${resolveValue(props, props.theme.jatoColorNavy5140)}`;
  },
  jatoSigninCtaContentColorDisabled: props => {
    return `${resolveValue(props, props.theme.jatoColorNavy2570)}`;
  },
  jatoSigninModalBackground: props => {
    return `${resolveValue(props, props.theme.jatoColorWhite10000A070)}`;
  },
  jatoTableDividerHeader: props => {
    return `${resolveValue(props, props.theme.jatoColorCharcoal3805)}`;
  },
  jatoTabsNavigationContentColorCounterBackgroundColorActive: props => {
    return `${resolveValue(props, props.theme.jatoColorSteel4630)}`;
  },
  jatoTabsNavigationContentColorCounterBackgroundColorDisabled: props => {
    return `${resolveValue(props, props.theme.jatoColorCharcoal8710)}`;
  },
  jatoTabsNavigationContentColorCounterBackgroundColorHover: props => {
    return `${resolveValue(props, props.theme.jatoColorSteel6325)}`;
  },
  jatoTabsNavigationContentColorCounterBackgroundColorNeutral: props => {
    return `${resolveValue(props, props.theme.jatoColorSteel7335)}`;
  },
  jatoTabsNavigationContentColorCounterTextColorActive: props => {
    return `${resolveValue(props, props.theme.jatoColorSteel0295)}`;
  },
  jatoTabsNavigationContentColorCounterTextColorDisabled: props => {
    return `${resolveValue(props, props.theme.jatoColorCharcoal2410)}`;
  },
  jatoTabsNavigationContentColorCounterTextColorHover: props => {
    return `${resolveValue(props, props.theme.jatoColorSteel0570)}`;
  },
  jatoTabsNavigationContentColorCounterTextColorNeutral: props => {
    return `${resolveValue(props, props.theme.jatoColorSteel1120)}`;
  },
  jatoTabsNavigationContentColorDisabled: props => {
    return `${resolveValue(props, props.theme.jatoColorCharcoal2410)}`;
  },
  jatoTabsNavigationContentColorNeutral: props => {
    return `${resolveValue(props, props.theme.jatoColorCharcoal0315)}`;
  },
  jatoTabsNavigationIndicatorActive: props => {
    return `${resolveValue(props, props.theme.jatoColorElectric0165)}`;
  },
  jatoTabsNavigationIndicatorHover: props => {
    return `${resolveValue(props, props.theme.jatoColorElectric0530)}`;
  },
  jatoTabsNavigationIndicatorSelected: props => {
    return `${resolveValue(props, props.theme.jatoColorElectric1435)}`;
  },
  jatoTagsBackgroundNew: props => {
    return `${resolveValue(props, props.theme.jatoColorElectric8645)}`;
  },
  jatoTagsFormatThumbnailBackground: props => {
    return `${resolveValue(props, props.theme.jatoColorBlack0000A060)}`;
  },
  jatoTagsFormatThumbnailText: props => {
    return `${resolveValue(props, props.theme.jatoColorWhite10000)}`;
  },
  jatoTooltipsBackground: props => {
    return `${resolveValue(props, props.theme.jatoColorSteel0110)}`;
  },
  jatoTooltipsTextColor: props => {
    return `${resolveValue(props, props.theme.jatoColorSteel7335)}`;
  },
  jatoTypographyFormsTextColorLabel: props => {
    return `${resolveValue(props, props.theme.jatoColorCharcoal1185)}`;
  },
  jatoTypographyFormsTextColorPlaceholderText: props => {
    return `${resolveValue(props, props.theme.jatoColorSteel1575)}`;
  },
  jatoTypographyFormsTextColorRequiredAsterisk: props => {
    return `${resolveValue(props, props.theme.jatoColorFirebrick1725)}`;
  },
  jatoTypographyTextColorDisabled: props => {
    return `${resolveValue(props, props.theme.jatoColorCharcoal3805)}`;
  },
  jatoTypographyTextColorPrimary: props => {
    return `${resolveValue(props, props.theme.jatoColorCharcoal0125)}`;
  },
  jatoTypographyTextColorProductName: props => {
    return `${resolveValue(props, props.theme.jatoColorBlack0000)}`;
  },
  jatoTypographyTextColorSecondary: props => {
    return `${resolveValue(props, props.theme.jatoColorCharcoal0645)}`;
  },
  jatoTypographyTextColorTertiary: props => {
    return `${resolveValue(props, props.theme.jatoColorCharcoal1675)}`;
  },
  jatoGraphBackgroundChart: 'rgba(223, 238, 250, 1)',
  jatoGraphBorderAxisLines: props => {
    return `${resolveValue(props, props.theme.jatoColorSteel2390)}`;
  },
  jatoGraphBorderChartOutline: props => {
    return `${resolveValue(props, props.theme.jatoColorWhite10000)}`;
  },
  jatoGraphBorderGridLines: props => {
    return `${resolveValue(props, props.theme.jatoColorSteel8595)}`;
  },
  jatoGraphTypographyLegend: props => {
    return `${resolveValue(props, props.theme.jatoColorCharcoal0125)}`;
  },
  jatoGraphTypographyOverlayFigures: props => {
    return `${resolveValue(props, props.theme.jatoColorWhite10000)}`;
  },
  jatoMeaningfulColor2VeryHigh: 'rgba(229, 0, 77, 1)',
  jatoQualitative01: props => {
    return `${resolveValue(props, props.theme.jatoColorNavy1170)}`;
  },
  jatoQualitative02: props => {
    return `${resolveValue(props, props.theme.jatoColorTeal2440)}`;
  },
  jatoQualitative03: props => {
    return `${resolveValue(props, props.theme.jatoColorPlum0525)}`;
  },
  jatoQualitative04: props => {
    return `${resolveValue(props, props.theme.jatoColorRaspberry2355)}`;
  },
  jatoQualitative05: props => {
    return `${resolveValue(props, props.theme.jatoColorHunter0345)}`;
  },
  jatoQualitative06: 'rgba(210, 129, 0, 1)',
  jatoQualitative07: props => {
    return `${resolveValue(props, props.theme.jatoColorBlue0530)}`;
  },
  jatoQualitative08: props => {
    return `${resolveValue(props, props.theme.jatoColorGreen2360)}`;
  },
  jatoQualitative09: props => {
    return `${resolveValue(props, props.theme.jatoColorRaspberry0705)}`;
  },
  jatoQualitative10: props => {
    return `${resolveValue(props, props.theme.jatoColorElectric2385)}`;
  },
  jatoQualitative11: props => {
    return `${resolveValue(props, props.theme.jatoColorPlum0185)}`;
  },
  jatoQualitative12: 'rgba(250, 77, 86, 1)',
  jatoQualitative13: props => {
    return `${resolveValue(props, props.theme.jatoColorGreen0755)}`;
  },
  jatoQualitative14: props => {
    return `${resolveValue(props, props.theme.jatoColorPlum2510)}`;
  },
  jatoQualitative15: props => {
    return `${resolveValue(props, props.theme.jatoColorTeal0785)}`;
  },
  jatoQualitative16: props => {
    return `${resolveValue(props, props.theme.jatoColorNavy1755)}`;
  },
  jatoQualitative17: 'rgba(118, 32, 0, 1)',
  jatoQualitative18: 'rgba(139, 60, 176, 1)',
  jatoQualitative19: 'rgba(55, 0, 0, 1)',
  jatoQualitative20: props => {
    return `${resolveValue(props, props.theme.jatoColorTeal1720)}`;
  },
  jatoStatusRating01: props => {
    return `${resolveValue(props, props.theme.jatoColorFirebrick0995)}`;
  },
  jatoStatusRating02: 'rgba(230, 0, 84, 1)',
  jatoStatusRating03: props => {
    return `${resolveValue(props, props.theme.jatoColorAmber2570)}`;
  },
  jatoStatusRating04: 'rgba(192, 139, 25, 1)',
  jatoStatusRating045: props => {
    return `${resolveValue(props, props.theme.jatoColorCerulean1145)}`;
  },
  jatoStatusRating05: props => {
    return `${resolveValue(props, props.theme.jatoColorElectric2385)}`;
  },
  jatoStatusRating06: props => {
    return `${resolveValue(props, props.theme.jatoColorHunter2335)}`;
  },
  jatoStatusRating07: props => {
    return `${resolveValue(props, props.theme.jatoColorPlum1210)}`;
  },
  jatoStatusRating08: props => {
    return `${resolveValue(props, props.theme.jatoColorElectric0750)}`;
  },
  jatoStatusRating09: props => {
    return `${resolveValue(props, props.theme.jatoColorElectric0335)}`;
  },
  jatoStatusRating10: 'rgba(63, 98, 185, 1)',
  jatoStatusRating11: props => {
    return `${resolveValue(props, props.theme.jatoColorSteel2390)}`;
  },
  checkboxTickBackgroundImageHover: 'url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDEwIDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNOC45NDE5NCAwLjkyODYxOEM5LjE4NjAyIDEuMTcyNyA5LjE4NjAyIDEuNTY4NDIgOC45NDE5NCAxLjgxMjVMMy41IDcuMjU0NDRMMS4wNTgwNiA0LjgxMjVDMC44MTM5ODEgNC41Njg0MiAwLjgxMzk4MSA0LjE3MjcgMS4wNTgwNiAzLjkyODYyQzEuMzAyMTQgMy42ODQ1NCAxLjY5Nzg2IDMuNjg0NTQgMS45NDE5NCAzLjkyODYyTDMuNSA1LjQ4NjY4TDguMDU4MDYgMC45Mjg2MThDOC4zMDIxNCAwLjY4NDU0IDguNjk3ODYgMC42ODQ1NCA4Ljk0MTk0IDAuOTI4NjE4WiIgZmlsbD0iIzU3OURGRiIvPgo8L3N2Zz4K")',
  checkboxTickBackgroundImageActive: 'url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDEwIDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNOC45NDE5NCAwLjkyODYxOEM5LjE4NjAyIDEuMTcyNyA5LjE4NjAyIDEuNTY4NDIgOC45NDE5NCAxLjgxMjVMMy41IDcuMjU0NDRMMS4wNTgwNiA0LjgxMjVDMC44MTM5ODEgNC41Njg0MiAwLjgxMzk4MSA0LjE3MjcgMS4wNTgwNiAzLjkyODYyQzEuMzAyMTQgMy42ODQ1NCAxLjY5Nzg2IDMuNjg0NTQgMS45NDE5NCAzLjkyODYyTDMuNSA1LjQ4NjY4TDguMDU4MDYgMC45Mjg2MThDOC4zMDIxNCAwLjY4NDU0IDguNjk3ODYgMC42ODQ1NCA4Ljk0MTk0IDAuOTI4NjE4WiIgZmlsbD0iIzAwMDg3RCIvPgo8L3N2Zz4K")',
  checkboxTickBackgroundImageChecked: 'url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDEwIDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNOC45NDE5NCAwLjkyODYwM0M5LjE4NjAyIDEuMTcyNjggOS4xODYwMiAxLjU2ODQxIDguOTQxOTQgMS44MTI0OUwzLjUgNy4yNTQ0M0wxLjA1ODA2IDQuODEyNDlDMC44MTM5ODEgNC41Njg0MSAwLjgxMzk4MSA0LjE3MjY4IDEuMDU4MDYgMy45Mjg2QzEuMzAyMTQgMy42ODQ1MyAxLjY5Nzg2IDMuNjg0NTMgMS45NDE5NCAzLjkyODZMMy41IDUuNDg2NjZMOC4wNTgwNiAwLjkyODYwM0M4LjMwMjE0IDAuNjg0NTI1IDguNjk3ODYgMC42ODQ1MjUgOC45NDE5NCAwLjkyODYwM1oiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPg==")',
  checkboxTickBackgroundImageCheckedHover: 'url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDEwIDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNOC45NDE5NCAwLjkyODYxOEM5LjE4NjAyIDEuMTcyNyA5LjE4NjAyIDEuNTY4NDIgOC45NDE5NCAxLjgxMjVMMy41IDcuMjU0NDRMMS4wNTgwNiA0LjgxMjVDMC44MTM5ODEgNC41Njg0MiAwLjgxMzk4MSA0LjE3MjcgMS4wNTgwNiAzLjkyODYyQzEuMzAyMTQgMy42ODQ1NCAxLjY5Nzg2IDMuNjg0NTQgMS45NDE5NCAzLjkyODYyTDMuNSA1LjQ4NjY4TDguMDU4MDYgMC45Mjg2MThDOC4zMDIxNCAwLjY4NDU0IDguNjk3ODYgMC42ODQ1NCA4Ljk0MTk0IDAuOTI4NjE4WiIgZmlsbD0iIzgyQkFGRiIvPgo8L3N2Zz4K")',
  checkboxTickBackgroundImageCheckedActive: props => {
    return `${resolveValue(props, props.theme.checkboxTickBackgroundImageCheckedHover)}`;
  },
  checkboxTickBackgroundImageCheckedReadonly: 'url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxNCAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMC45NDE5IDMuOTI4NjZDMTEuMTg2IDQuMTcyNzQgMTEuMTg2IDQuNTY4NDcgMTAuOTQxOSA0LjgxMjU1TDUuNSAxMC4yNTQ1TDMuMDU4MDYgNy44MTI1NUMyLjgxMzk4IDcuNTY4NDcgMi44MTM5OCA3LjE3Mjc0IDMuMDU4MDYgNi45Mjg2NkMzLjMwMjE0IDYuNjg0NTkgMy42OTc4NiA2LjY4NDU5IDMuOTQxOTQgNi45Mjg2Nkw1LjUgOC40ODY3MkwxMC4wNTgxIDMuOTI4NjZDMTAuMzAyMSAzLjY4NDU5IDEwLjY5NzkgMy42ODQ1OSAxMC45NDE5IDMuOTI4NjZaIiBmaWxsPSIjMzEzMjMzIi8+Cjwvc3ZnPgo=")',
  checkboxTickBackgroundImageCheckedDisabled: 'url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDEwIDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNOC45NDE5NCAwLjkyODYxOEM5LjE4NjAyIDEuMTcyNyA5LjE4NjAyIDEuNTY4NDIgOC45NDE5NCAxLjgxMjVMMy41IDcuMjU0NDRMMS4wNTgwNiA0LjgxMjVDMC44MTM5ODEgNC41Njg0MiAwLjgxMzk4MSA0LjE3MjcgMS4wNTgwNiAzLjkyODYyQzEuMzAyMTQgMy42ODQ1NCAxLjY5Nzg2IDMuNjg0NTQgMS45NDE5NCAzLjkyODYyTDMuNSA1LjQ4NjY4TDguMDU4MDYgMC45Mjg2MThDOC4zMDIxNCAwLjY4NDU0IDguNjk3ODYgMC42ODQ1NCA4Ljk0MTk0IDAuOTI4NjE4WiIgZmlsbD0iI0E1QTZBOCIvPgo8L3N2Zz4K")',
  checkboxTickBackgroundImageIndeterminate: 'url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOCIgaGVpZ2h0PSIyIiB2aWV3Qm94PSIwIDAgOCAyIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSIxLjI1IiByeD0iMC42MjUiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=")',
  checkboxTickBackgroundImageIndeterminateHover: 'url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOCIgaGVpZ2h0PSIyIiB2aWV3Qm94PSIwIDAgOCAyIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSIxLjI1IiByeD0iMC42MjUiIGZpbGw9IiM4MkJBRkYiLz4KPC9zdmc+Cg==")',
  checkboxTickBackgroundImageIndeterminateActive: props => {
    return `${resolveValue(props, props.theme.checkboxTickBackgroundImageIndeterminateHover)}`;
  },
  checkboxTickBackgroundImageIndeterminateDisabled: 'url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOCIgaGVpZ2h0PSIyIiB2aWV3Qm94PSIwIDAgOCAyIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSIxLjI1IiByeD0iMC42MjUiIGZpbGw9IiNBNUE2QTgiLz4KPC9zdmc+Cg==")',
  chipBackgroundColorReadonly: props => {
    return `${resolveValue(props, props.theme.jatoControlBackgroundReadOnlyNeutral)}`;
  },
  breadcrumbSeparatorBackgroundImage: 'url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjEiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyMSAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyLjM2NyA2Ljg2MzY0TDkuNTU0NTEgMTcuMzEyNUg4LjYzNDA2TDExLjQ0NjYgNi44NjM2NEgxMi4zNjdaIiBmaWxsPSIjQTVBNkE4Ii8+Cjwvc3ZnPgo=")',
  formFieldFeedbackBackgroundError: props => {
    return `${resolveValue(props, props.theme.jatoMessagesInlineBackgroundError)}`;
  },
  formFieldFeedbackBackgroundSuccess: props => {
    return `${resolveValue(props, props.theme.jatoMessagesInlineBackgroundSuccess)}`;
  },
  inlineNotificationBackgroundColorInfo: props => {
    return `${resolveValue(props, props.theme.jatoMessagesInlineBackgroundInformation)}`;
  },
  inlineNotificationBackgroundColorWarning: props => {
    return `${resolveValue(props, props.theme.jatoMessagesInlineBackgroundWarning)}`;
  },
  inlineNotificationBackgroundColorError: props => {
    return `${resolveValue(props, props.theme.jatoMessagesInlineBackgroundError)}`;
  },
  inlineNotificationBackgroundColorSuccess: props => {
    return `${resolveValue(props, props.theme.jatoMessagesInlineBackgroundSuccess)}`;
  },
  loginPanelBackgroundColor: '#ffffffbf',
  multiValueChipBackgroundReadonly: props => {
    return `${resolveValue(props, props.theme.jatoControlBackgroundReadOnlyNeutral)}`;
  },
  multiValueChipBackgroundReadonlyHover: '#d9e3fa',
  multiValueChipBackgroundReadonlyActive: '#c3d0f6',
  pageTabMenuListItemBackgroundSelectedHover: props => {
    return `color-mix(
    in srgb,
    ${resolveValue(props, props.theme.jatoBackgroundRowsSelected)},
    #000 5%
  )`;
  },
  tableCellBackgroundColorOddStripedHover: '#e6e9ed',
  treeChildBackgroundColorSelected: 'rgba(199, 227, 255, 0.5)',
  treeChildBackgroundColorSelectedHover: 'rgba(215, 229, 242, 1)'
};
function resolveValue(theme, value) {
  return typeof value === 'function' ? value(theme) : value;
}

export { jatoLight };
