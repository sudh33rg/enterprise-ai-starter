const opentextStage1Dark = {
  colorGray95: '#eceff5',
  colorGray95Rgb: '236, 239, 245',
  colorGray95Contrast: '#000',
  colorGray95ContrastRgb: '0, 0, 0',
  colorGray90: '#dce0e8',
  colorGray90Rgb: '220, 224, 232',
  colorGray90Contrast: '#000',
  colorGray90ContrastRgb: '0, 0, 0',
  colorGray80: '#b9bec9',
  colorGray80Rgb: '185, 190, 201',
  colorGray80Contrast: '#000',
  colorGray80ContrastRgb: '0, 0, 0',
  colorGray75: '#9ea1ad',
  colorGray75Rgb: '158, 161, 173',
  colorGray75Contrast: '#000',
  colorGray75ContrastRgb: '0, 0, 0',
  colorGray70: '#888b99',
  colorGray70Rgb: '136, 139, 153',
  colorGray70Contrast: '#000',
  colorGray70ContrastRgb: '0, 0, 0',
  colorGray60: '#737584',
  colorGray60Rgb: '115, 117, 132',
  colorGray60Contrast: '#000',
  colorGray60ContrastRgb: '0, 0, 0',
  colorGray50: '#5a5e6f',
  colorGray50Rgb: '90, 94, 111',
  colorGray50Contrast: '#000',
  colorGray50ContrastRgb: '0, 0, 0',
  colorGray40: '#44495b',
  colorGray40Rgb: '68, 73, 91',
  colorGray40Contrast: '#000',
  colorGray40ContrastRgb: '0, 0, 0',
  colorGray30: '#33384c',
  colorGray30Rgb: '51, 56, 76',
  colorGray30Contrast: '#000',
  colorGray30ContrastRgb: '0, 0, 0',
  colorGray25: '#2a2f45',
  colorGray25Rgb: '42, 47, 69',
  colorGray25Contrast: '#fff',
  colorGray25ContrastRgb: '255, 255, 255',
  colorGray20: '#24293f',
  colorGray20Rgb: '36, 41, 63',
  colorGray20Contrast: '#fff',
  colorGray20ContrastRgb: '255, 255, 255',
  colorGray10: '#1d2238',
  colorGray10Rgb: '29, 34, 56',
  colorGray10Contrast: '#fff',
  colorGray10ContrastRgb: '255, 255, 255',
  colorGray05: '#101629',
  colorGray05Rgb: '16, 22, 41',
  colorGray05Contrast: '#fff',
  colorGray05ContrastRgb: '255, 255, 255',
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
  colorStatusSuccess: '#28bc6c',
  colorStatusSuccessRgb: '40, 188, 108',
  colorStatusSuccessContrast: '#000',
  colorStatusSuccessContrastRgb: '0, 0, 0',
  colorStatusWarning: props => {
    return `${resolveValue(props, props.theme.colorYellow)}`;
  },
  colorStatusWarningRgb: props => {
    return `${resolveValue(props, props.theme.colorYellowRgb)}`;
  },
  colorStatusWarningContrast: props => {
    return `${resolveValue(props, props.theme.colorYellowContrast)}`;
  },
  colorStatusWarningContrastRgb: props => {
    return `${resolveValue(props, props.theme.colorYellowContrastRgb)}`;
  },
  colorStatusError: '#e5004c',
  colorStatusErrorRgb: '229, 0, 76',
  colorStatusErrorContrast: '#fff',
  colorStatusErrorContrastRgb: '255, 255, 255',
  colorStatusInfo: '#3398ff',
  colorStatusInfoRgb: '51, 152, 255',
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
  colorPrimaryFlat: '#61b0ff',
  colorPrimaryFlatHover: props => {
    return `rgba(${resolveValue(props, props.theme.colorPrimaryActiveRgb)}, 0.15)`;
  },
  colorPrimaryFlatActive: props => {
    return `rgba(${resolveValue(props, props.theme.colorPrimaryActiveRgb)}, 0.3)`;
  },
  colorPrimaryFlatFocus: props => {
    return `${resolveValue(props, props.theme.colorPrimaryFlatHover)}`;
  },
  colorSecondary: 'transparent',
  colorSecondaryRgb: '0, 0, 0',
  colorSecondaryContrast: '#fff',
  colorSecondaryContrastRgb: '255, 255, 255',
  colorSecondaryHover: 'rgba(255, 255, 255, 0.1)',
  colorSecondaryHoverRgb: '255, 255, 255',
  colorSecondaryHoverContrast: '#000',
  colorSecondaryHoverContrastRgb: '0, 0, 0',
  colorSecondaryActive: 'rgba(255, 255, 255, 0.2)',
  colorSecondaryActiveRgb: '255, 255, 255',
  colorSecondaryActiveContrast: '#000',
  colorSecondaryActiveContrastRgb: '0, 0, 0',
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
  colorSecondaryFlatHover: 'rgba(255, 255, 255, 0.1)',
  colorSecondaryFlatActive: 'rgba(255, 255, 255, 0.2)',
  colorSecondaryFlatFocus: props => {
    return `${resolveValue(props, props.theme.colorPrimaryFlatHover)}`;
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
  colorNegativeFlat: '#ff7588',
  colorNegativeFlatHover: props => {
    return `rgba(${resolveValue(props, props.theme.colorNegativeActiveRgb)}, 0.15)`;
  },
  colorNegativeFlatActive: props => {
    return `rgba(${resolveValue(props, props.theme.colorNegativeActiveRgb)}, 0.3)`;
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
    return `${resolveValue(props, props.theme.colorWhite)}`;
  },
  typographyColorHighEmphasisRgb: props => {
    return `${resolveValue(props, props.theme.colorWhiteRgb)}`;
  },
  typographyColorHighEmphasisContrast: props => {
    return `${resolveValue(props, props.theme.colorWhiteContrast)}`;
  },
  typographyColorHighEmphasisContrastRgb: props => {
    return `${resolveValue(props, props.theme.colorWhiteContrastRgb)}`;
  },
  typographyColorBody: props => {
    return `${resolveValue(props, props.theme.colorGray95)}`;
  },
  typographyColorBodyRgb: props => {
    return `${resolveValue(props, props.theme.colorGray95Rgb)}`;
  },
  typographyColorBodyContrast: props => {
    return `${resolveValue(props, props.theme.colorGray95Contrast)}`;
  },
  typographyColorBodyContrastRgb: props => {
    return `${resolveValue(props, props.theme.colorGray95ContrastRgb)}`;
  },
  typographyColorSecondary: props => {
    return `${resolveValue(props, props.theme.colorGray90)}`;
  },
  typographyColorSecondaryRgb: props => {
    return `${resolveValue(props, props.theme.colorGray90Rgb)}`;
  },
  typographyColorSecondaryContrast: props => {
    return `${resolveValue(props, props.theme.colorGray90Contrast)}`;
  },
  typographyColorSecondaryContrastRgb: props => {
    return `${resolveValue(props, props.theme.colorGray90ContrastRgb)}`;
  },
  typographyColorTertiary: props => {
    return `${resolveValue(props, props.theme.colorGray80)}`;
  },
  typographyColorTertiaryRgb: props => {
    return `${resolveValue(props, props.theme.colorGray80Rgb)}`;
  },
  typographyColorTertiaryContrast: props => {
    return `${resolveValue(props, props.theme.colorGray80Contrast)}`;
  },
  typographyColorTertiaryContrastRgb: props => {
    return `${resolveValue(props, props.theme.colorGray80ContrastRgb)}`;
  },
  typographyColorLightest: props => {
    return `${resolveValue(props, props.theme.colorGray75)}`;
  },
  typographyColorLightestRgb: props => {
    return `${resolveValue(props, props.theme.colorGray75Rgb)}`;
  },
  typographyColorLightestContrast: props => {
    return `${resolveValue(props, props.theme.colorGray75Contrast)}`;
  },
  typographyColorLightestContrastRgb: props => {
    return `${resolveValue(props, props.theme.colorGray75ContrastRgb)}`;
  },
  typographyColorPlaceholder: 'rgba(255, 255, 255, 0.55)',
  typographyColorPlaceholderRgb: '255, 255, 255',
  typographyColorPlaceholderContrast: '#000',
  typographyColorPlaceholderContrastRgb: '0, 0, 0',
  typographyColorDisabled: 'rgba(255, 255, 255, 0.2)',
  typographyColorDisabledRgb: '255, 255, 255',
  typographyColorDisabledContrast: '#000',
  typographyColorDisabledContrastRgb: '0, 0, 0',
  typographyColorLink: '#61b0ff',
  typographyColorLinkRgb: '97, 176, 255',
  typographyColorLinkContrast: '#000',
  typographyColorLinkContrastRgb: '0, 0, 0',
  typographyColorLinkHover: '#88baf1',
  typographyColorLinkFocus: props => {
    return `${resolveValue(props, props.theme.colorPrimary)}`;
  },
  typographyColorLinkActive: props => {
    return `${resolveValue(props, props.theme.typographyColorLink)}`;
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
  typographyLinkFontWeight: props => {
    return `${resolveValue(props, props.theme.typographyFontWeightRegular)}`;
  },
  typographyLinkColor: props => {
    return `${resolveValue(props, props.theme.typographyColorLink)}`;
  },
  typographyLinkTextTransform: 'none',
  typographyLinkLineHeight: '1.125rem',
  typographyLinkTextDecoration: 'underline',
  typographyLinkColorHover: props => {
    return `${resolveValue(props, props.theme.typographyColorLinkHover)}`;
  },
  typographyLinkColorActive: props => {
    return `${resolveValue(props, props.theme.typographyColorLinkActive)}`;
  },
  typographyLinkColorVisited: props => {
    return `${resolveValue(props, props.theme.typographyColorLinkVisited)}`;
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
    return `${resolveValue(props, props.theme.typographyColorSecondary)}`;
  },
  typographyLabelTextTransform: 'none',
  typographyLabelLineHeight: '1.125rem',
  focusOutlineColor: '#61b0ff',
  focusOutlineOffset: '2px',
  focusOutlineWidth: '2px',
  focusOutlineStyle: 'solid',
  focusIndicatorBoxShadow: props => {
    return `0 0 0 1px ${resolveValue(props, props.theme.elevationBackgroundColor)},
    0 0 0 3px ${resolveValue(props, props.theme.focusOutlineColor)}`;
  },
  focusIndicatorOutline: props => {
    return `${resolveValue(props, props.theme.focusOutlineWidth)} ${resolveValue(props, props.theme.focusOutlineStyle)}
    ${resolveValue(props, props.theme.focusOutlineColor)}`;
  },
  overlayZIndex: '1000',
  elevationBackgroundColorBase: props => {
    return `${resolveValue(props, props.theme.colorGray05)}`;
  },
  elevationBoxShadowBase: 'none',
  elevationBorderColorBase: 'transparent',
  elevationBackgroundColor1: props => {
    return `${resolveValue(props, props.theme.colorGray10)}`;
  },
  elevationBoxShadowColor1: 'rgba(0, 0, 0, 0.32)',
  elevationBoxShadow1: props => {
    return `0 1px 4px 1px ${resolveValue(props, props.theme.elevationBoxShadowColor1)}`;
  },
  elevationBorderColor1: 'rgba(255, 255, 255, 0.1)',
  elevationBackgroundColor2: props => {
    return `${resolveValue(props, props.theme.colorGray20)}`;
  },
  elevationBoxShadowColor2: 'rgba(0, 0, 0, 0.32)',
  elevationBoxShadow2: props => {
    return `0 6px 12px 1px ${resolveValue(props, props.theme.elevationBoxShadowColor2)}`;
  },
  elevationBorderColor2: props => {
    return `${resolveValue(props, props.theme.elevationBorderColor1)}`;
  },
  elevationBackgroundColor3: props => {
    return `${resolveValue(props, props.theme.colorGray25)}`;
  },
  elevationBoxShadowColor3: 'rgba(0, 0, 0, 0.32)',
  elevationBoxShadow3: props => {
    return `0 12px 24px -3px ${resolveValue(props, props.theme.elevationBoxShadowColor3)}`;
  },
  elevationBorderColor3: props => {
    return `${resolveValue(props, props.theme.elevationBorderColor1)}`;
  },
  elevationBackgroundColor4: props => {
    return `${resolveValue(props, props.theme.colorGray30)}`;
  },
  elevationBoxShadowColor4: 'rgba(0, 0, 0, 0.32)',
  elevationBoxShadow4: props => {
    return `0 18px 32px -3px ${resolveValue(props, props.theme.elevationBoxShadowColor4)}`;
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
  accordionBorderWidth: '1px',
  accordionBorderStyle: 'solid',
  accordionBorderColor: props => {
    return `rgba(${resolveValue(props, props.theme.colorWhiteRgb)}, 0.1)`;
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
    return `rgba(${resolveValue(props, props.theme.colorWhiteRgb)}, 0.1)`;
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
    return `${resolveValue(props, props.theme.colorGray05)}`;
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
    return `${resolveValue(props, props.theme.colorGray05)}`;
  },
  alertBackgroundColorWarning: props => {
    return `${resolveValue(props, props.theme.colorStatusWarning)}`;
  },
  alertColorWarning: props => {
    return `${resolveValue(props, props.theme.colorGray05)}`;
  },
  alertBackgroundColorDark: props => {
    return `${resolveValue(props, props.theme.colorGray50)}`;
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
  avatarColor: 'black',
  avatarBorderColorHover: 'transparent',
  avatarBorderColorActive: 'transparent',
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
  avatarLineHeightXs: '14px',
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
  jatoAvatarBackgroundPink: 'transparent',
  jatoAvatarBackgroundPurple: 'transparent',
  jatoAvatarBackgroundBlue: 'transparent',
  jatoAvatarBackgroundCerulean: 'transparent',
  jatoAvatarBackgroundTeal: 'transparent',
  jatoAvatarBackgroundNavy: 'transparent',
  jatoAvatarBackgroundSteel: 'transparent',
  breadcrumbsDisplay: 'block',
  breadcrumbsMinHeight: 'none',
  breadcrumbColor: props => {
    return `${resolveValue(props, props.theme.typographyColorTertiary)}`;
  },
  breadcrumbFontWeight: '400',
  breadcrumbFontSize: '14px',
  breadcrumbGap: '6px',
  breadcrumbTextDecoration: 'none',
  breadcrumbOutline: 'none',
  breadcrumbHeight: 'auto',
  breadcrumbWidth: 'auto',
  breadcrumbPaddingInline: 'unset',
  breadcrumbPaddingBlock: 'unset',
  breadcrumbBorderRadius: '0',
  breadcrumbColorHover: props => {
    return `${resolveValue(props, props.theme.typographyColorBody)}`;
  },
  breadcrumbTextDecorationHover: 'underline',
  breadcrumbCursorHover: 'pointer',
  breadcrumbColorActive: props => {
    return `${resolveValue(props, props.theme.breadcrumbColorHover)}`;
  },
  breadcrumbTextDecorationActive: 'underline',
  breadcrumbCursorActive: 'pointer',
  breadcrumbColorCurrent: props => {
    return `${resolveValue(props, props.theme.typographyColorHighEmphasis)}`;
  },
  breadcrumbFontWeightCurrent: '500',
  breadcrumbTextDecorationCurrent: 'none',
  breadcrumbCursorCurrent: 'default',
  breadcrumbOutlineOffsetFocus: '0',
  breadcrumbOverflowButtonColor: props => {
    return `${resolveValue(props, props.theme.buttonColorFlatSecondary)}`;
  },
  breadcrumbOverflowButtonColorHover: props => {
    return `${resolveValue(props, props.theme.buttonColorFlatSecondaryHover)}`;
  },
  breadcrumbOverflowButtonColorActive: props => {
    return `${resolveValue(props, props.theme.buttonColorFlatSecondaryActive)}`;
  },
  breadcrumbSeparatorBackgroundImage: 'url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02LjE0NjQ1IDExLjg1MzZDNS45NTExOCAxMS42NTgzIDUuOTUxMTggMTEuMzQxNyA2LjE0NjQ1IDExLjE0NjRMOS4yOTI4OSA4TDYuMTQ2NDUgNC44NTM1NUM1Ljk1MTE4IDQuNjU4MjkgNS45NTExOCA0LjM0MTcxIDYuMTQ2NDUgNC4xNDY0NUM2LjM0MTcxIDMuOTUxMTggNi42NTgyOSAzLjk1MTE4IDYuODUzNTUgNC4xNDY0NUwxMC43MDcxIDhMNi44NTM1NSAxMS44NTM2QzYuNjU4MjkgMTIuMDQ4OCA2LjM0MTcxIDEyLjA0ODggNi4xNDY0NSAxMS44NTM2WiIgZmlsbD0iIzlFQTFBRCIvPgo8L3N2Zz4K")',
  breadcrumbSeparatorWidth: '16px',
  breadcrumbSeparatorHeight: '16px',
  breadcrumbSeparatorFontSize: '16px',
  breadcrumbSeparatorColor: props => {
    return `${resolveValue(props, props.theme.colorGray75)}`;
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
    return `${resolveValue(props, props.theme.colorGray90)}`;
  },
  breadcrumbSeparatorBackgroundImageMasthead: 'url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02LjE0NjQ1IDExLjg1MzZDNS45NTExOCAxMS42NTgzIDUuOTUxMTggMTEuMzQxNyA2LjE0NjQ1IDExLjE0NjRMOS4yOTI4OSA4TDYuMTQ2NDUgNC44NTM1NUM1Ljk1MTE4IDQuNjU4MjkgNS45NTExOCA0LjM0MTcxIDYuMTQ2NDUgNC4xNDY0NUM2LjM0MTcxIDMuOTUxMTggNi42NTgyOSAzLjk1MTE4IDYuODUzNTUgNC4xNDY0NUwxMC43MDcxIDhMNi44NTM1NSAxMS44NTM2QzYuNjU4MjkgMTIuMDQ4OCA2LjM0MTcxIDEyLjA0ODggNi4xNDY0NSAxMS44NTM2WiIgZmlsbD0iI2RjZTBlOCIvPgo8L3N2Zz4K")',
  breadcrumbListColumnGap: '6px',
  breadcrumbButtonColor: props => {
    return `${resolveValue(props, props.theme.buttonColorFlatSecondary)}`;
  },
  breadcrumbButtonColorHover: props => {
    return `${resolveValue(props, props.theme.buttonColorFlatSecondaryHover)}`;
  },
  breadcrumbButtonColorActive: props => {
    return `${resolveValue(props, props.theme.buttonColorFlatSecondaryActive)}`;
  },
  breadcrumbButtonColorFocused: props => {
    return `${resolveValue(props, props.theme.buttonColorFlatSecondaryFocused)}`;
  },
  breadcrumbCollapsedMenuItemsColor: props => {
    return `${resolveValue(props, props.theme.breadcrumbColor)}`;
  },
  breadcrumbCollapsedMenuItemsColorHover: props => {
    return `${resolveValue(props, props.theme.breadcrumbColorHover)}`;
  },
  breadcrumbCollapsedMenuItemsColorActive: props => {
    return `${resolveValue(props, props.theme.breadcrumbColorActive)}`;
  },
  buttonColumnGap: '0.375rem',
  buttonFontSize: props => {
    return `${resolveValue(props, props.theme.typographyFontSize)}`;
  },
  buttonCursor: 'pointer',
  buttonHeight: '2rem',
  buttonPaddingInline: '1rem',
  buttonPaddingBlock: '0rem',
  buttonFontWeight: props => {
    return `${resolveValue(props, props.theme.typographyFontWeightRegular)}`;
  },
  buttonTextTransform: 'none',
  buttonLineHeight: 'normal',
  buttonBorderColor: props => {
    return `${resolveValue(props, props.theme.colorBlack)}`;
  },
  buttonBorderRadius: '0.125rem',
  buttonBorderWidth: '0.0625rem',
  buttonBorderStyle: 'solid',
  buttonMinWidth: 'unset',
  buttonBoxShadow: 'none',
  buttonTextAlign: 'center',
  buttonBoxSizing: 'border-box',
  buttonIconSize: 'inherit',
  buttonCursorDisabled: 'default',
  buttonBoxShadowFocused: props => {
    return `${resolveValue(props, props.theme.focusIndicatorBoxShadow)}`;
  },
  buttonColorPrimary: props => {
    return `${resolveValue(props, props.theme.colorWhite)}`;
  },
  buttonBackgroundColorPrimary: props => {
    return `${resolveValue(props, props.theme.colorPrimary)}`;
  },
  buttonBorderColorPrimary: 'transparent',
  buttonBorderWidthPrimary: '0.0625rem',
  buttonBorderStylePrimary: 'solid',
  buttonBoxShadowPrimaryHover: 'none',
  buttonBorderColorPrimaryHover: props => {
    return `${resolveValue(props, props.theme.buttonBorderColorPrimary)}`;
  },
  buttonColorPrimaryHover: props => {
    return `${resolveValue(props, props.theme.buttonColorPrimary)}`;
  },
  buttonBackgroundColorPrimaryHover: props => {
    return `${resolveValue(props, props.theme.colorPrimaryHover)}`;
  },
  buttonBoxShadowPrimaryActive: 'none',
  buttonBorderColorPrimaryActive: props => {
    return `${resolveValue(props, props.theme.buttonBorderColorPrimary)}`;
  },
  buttonColorPrimaryActive: props => {
    return `${resolveValue(props, props.theme.buttonColorPrimary)}`;
  },
  buttonBackgroundColorPrimaryActive: props => {
    return `${resolveValue(props, props.theme.colorPrimaryActive)}`;
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
    return `${resolveValue(props, props.theme.colorPrimaryFocus)}`;
  },
  buttonColorPrimaryDisabled: props => {
    return `${resolveValue(props, props.theme.typographyColorDisabled)}`;
  },
  buttonBackgroundColorPrimaryDisabled: props => {
    return `${resolveValue(props, props.theme.buttonColorPrimaryDisabled)}`;
  },
  buttonBorderColorPrimaryDisabled: props => {
    return `${resolveValue(props, props.theme.buttonBorderColorPrimary)}`;
  },
  buttonColorSecondary: props => {
    return `${resolveValue(props, props.theme.colorWhite)}`;
  },
  buttonBackgroundColorSecondary: 'transparent',
  buttonBorderColorSecondary: props => {
    return `${resolveValue(props, props.theme.colorGray80)}`;
  },
  buttonBorderWidthSecondary: '0.0625rem',
  buttonBorderStyleSecondary: 'solid',
  buttonBoxShadowSecondaryHover: 'none',
  buttonBorderColorSecondaryHover: props => {
    return `${resolveValue(props, props.theme.buttonBorderColorSecondary)}`;
  },
  buttonColorSecondaryHover: props => {
    return `${resolveValue(props, props.theme.buttonColorSecondary)}`;
  },
  buttonBackgroundColorSecondaryHover: props => {
    return `${resolveValue(props, props.theme.colorSecondaryHover)}`;
  },
  buttonBoxShadowSecondaryActive: 'none',
  buttonBorderColorSecondaryActive: props => {
    return `${resolveValue(props, props.theme.buttonBorderColorSecondary)}`;
  },
  buttonColorSecondaryActive: props => {
    return `${resolveValue(props, props.theme.buttonColorSecondary)}`;
  },
  buttonBackgroundColorSecondaryActive: props => {
    return `${resolveValue(props, props.theme.colorSecondaryActive)}`;
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
    return `${resolveValue(props, props.theme.colorSecondaryFocus)}`;
  },
  buttonColorSecondaryDisabled: props => {
    return `${resolveValue(props, props.theme.typographyColorDisabled)}`;
  },
  buttonBackgroundColorSecondaryDisabled: 'transparent',
  buttonBorderColorSecondaryDisabled: props => {
    return `${resolveValue(props, props.theme.buttonColorSecondaryDisabled)}`;
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
    return `${resolveValue(props, props.theme.buttonColorNegativeDisabled)}`;
  },
  buttonBorderColorNegativeDisabled: 'transparent',
  buttonHeightFlat: props => {
    return `${resolveValue(props, props.theme.buttonHeight)}`;
  },
  buttonFontSizeFlat: props => {
    return `${resolveValue(props, props.theme.buttonFontSize)}`;
  },
  buttonFontWeightFlat: props => {
    return `${resolveValue(props, props.theme.typographyFontWeightMedium)}`;
  },
  buttonTextTransformFlat: props => {
    return `${resolveValue(props, props.theme.buttonTextTransform)}`;
  },
  buttonLineHeightFlat: props => {
    return `${resolveValue(props, props.theme.buttonLineHeight)}`;
  },
  buttonPaddingInlineFlat: '0.625rem',
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
    return `${resolveValue(props, props.theme.buttonBackgroundColorFlat)}`;
  },
  buttonBackgroundColorFlatExpandedHover: props => {
    return `${resolveValue(props, props.theme.buttonBackgroundColorFlat)}`;
  },
  buttonBackgroundColorFlatExpandedActive: props => {
    return `${resolveValue(props, props.theme.buttonBackgroundColorFlat)}`;
  },
  buttonColorFlatPrimary: props => {
    return `${resolveValue(props, props.theme.colorPrimaryFlat)}`;
  },
  buttonBackgroundColorFlatPrimary: 'transparent',
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
    return `${resolveValue(props, props.theme.colorPrimaryFlatHover)}`;
  },
  buttonBoxShadowFlatPrimaryActive: 'none',
  buttonBorderColorFlatPrimaryActive: props => {
    return `${resolveValue(props, props.theme.buttonBorderColorFlatPrimary)}`;
  },
  buttonColorFlatPrimaryActive: props => {
    return `${resolveValue(props, props.theme.buttonColorFlatPrimary)}`;
  },
  buttonBackgroundColorFlatPrimaryActive: props => {
    return `${resolveValue(props, props.theme.colorPrimaryFlatActive)}`;
  },
  buttonColorFlatPrimaryDisabled: props => {
    return `${resolveValue(props, props.theme.typographyColorDisabled)}`;
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
  buttonBackgroundColorFlatPrimaryFocused: props => {
    return `${resolveValue(props, props.theme.buttonBackgroundColorFlatPrimaryHover)}`;
  },
  buttonColorFlatSecondary: props => {
    return `${resolveValue(props, props.theme.typographyColorTertiary)}`;
  },
  buttonBackgroundColorFlatSecondary: props => {
    return `${resolveValue(props, props.theme.colorSecondaryFlat)}`;
  },
  buttonBorderColorFlatSecondary: props => {
    return `${resolveValue(props, props.theme.buttonBackgroundColorFlatSecondary)}`;
  },
  buttonBorderWidthFlatSecondary: '0.0625rem',
  buttonBorderStyleFlatSecondary: 'solid',
  buttonFontWeightFlatSecondary: props => {
    return `${resolveValue(props, props.theme.typographyFontWeightRegular)}`;
  },
  buttonBoxShadowFlatSecondaryHover: 'none',
  buttonBorderColorFlatSecondaryHover: props => {
    return `${resolveValue(props, props.theme.buttonBorderColorFlatSecondary)}`;
  },
  buttonColorFlatSecondaryHover: props => {
    return `${resolveValue(props, props.theme.buttonColorFlatSecondary)}`;
  },
  buttonBackgroundColorFlatSecondaryHover: props => {
    return `${resolveValue(props, props.theme.colorSecondaryFlatHover)}`;
  },
  buttonBoxShadowFlatSecondaryActive: 'none',
  buttonBorderColorFlatSecondaryActive: props => {
    return `${resolveValue(props, props.theme.buttonBorderColorFlatSecondary)}`;
  },
  buttonColorFlatSecondaryActive: props => {
    return `${resolveValue(props, props.theme.buttonColorFlatSecondary)}`;
  },
  buttonBackgroundColorFlatSecondaryActive: props => {
    return `${resolveValue(props, props.theme.colorSecondaryFlatActive)}`;
  },
  buttonColorFlatSecondaryDisabled: props => {
    return `${resolveValue(props, props.theme.typographyColorDisabled)}`;
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
  buttonBackgroundColorFlatSecondaryFocused: props => {
    return `${resolveValue(props, props.theme.colorSecondaryFlatFocus)}`;
  },
  buttonColorFlatNegative: props => {
    return `${resolveValue(props, props.theme.colorNegativeFlat)}`;
  },
  buttonBackgroundColorFlatNegative: 'transparent',
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
  buttonHeightSmall: '1.5rem',
  buttonMinWidthSmall: 'unset',
  buttonBorderRadiusSmall: props => {
    return `${resolveValue(props, props.theme.buttonBorderRadius)}`;
  },
  buttonPaddingInlineSmall: '0.75rem',
  buttonPaddingBlockSmall: '0',
  buttonFontSizeSmall: props => {
    return `${resolveValue(props, props.theme.typographyFontSizeSmall)}`;
  },
  buttonPaddingInlineFlatSmall: '0.625rem',
  buttonPaddingBlockFlatSmall: '0',
  buttonColumnGapLarge: props => {
    return `${resolveValue(props, props.theme.buttonColumnGap)}`;
  },
  buttonHeightLarge: '2.5rem',
  buttonMinWidthLarge: 'unset',
  buttonBorderRadiusLarge: props => {
    return `${resolveValue(props, props.theme.buttonBorderRadius)}`;
  },
  buttonPaddingInlineLarge: '1rem',
  buttonPaddingBlockLarge: '0',
  buttonFontSizeLarge: '1rem',
  buttonPaddingInlineFlatLarge: '0.75rem',
  buttonPaddingBlockFlatLarge: '0',
  cardGap: '12px',
  cardPaddingBlock: '16px',
  cardPaddingInline: '16px',
  cardBorderRadius: '12px',
  cardBackgroundColor: props => {
    return `${resolveValue(props, props.theme.elevationBackgroundColor2)}`;
  },
  cardBoxShadow: props => {
    return `0 0 0 1px ${resolveValue(props, props.theme.elevationBorderColor2)},
    0 2px 4px ${resolveValue(props, props.theme.elevationBoxShadow2)}`;
  },
  cardOutlineFocus: props => {
    return `2px solid ${resolveValue(props, props.theme.focusOutlineColor)}`;
  },
  cardOutlineOffsetFocus: '2px',
  cardBoxShadowBasicHover: props => {
    return `0 0 0 2px ${resolveValue(props, props.theme.cardBoxShadow)}`;
  },
  cardBoxShadowBasicActive: props => {
    return `0 0 0 2px ${resolveValue(props, props.theme.cardBoxShadow)}`;
  },
  cardBoxShadowThumbnailActive: props => {
    return `0 0 0 2px ${resolveValue(props, props.theme.cardBoxShadow)}`;
  },
  cardBoxShadowPreviewActive: props => {
    return `0 0 0 2px ${resolveValue(props, props.theme.cardBoxShadow)}`;
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
    return `${resolveValue(props, props.theme.typographyColorHighEmphasis)}`;
  },
  cardTitleFontWeightThumbnail: '500',
  cardTitleFontSizeThumbnail: '24px',
  cardTitleLineHeightThumbnail: '29px',
  cardSubtitleFontSize: '11px',
  cardSubtitleFontWeight: '500',
  cardSubtitleLineHeight: '16px',
  cardSubtitleColor: props => {
    return `${resolveValue(props, props.theme.typographyColorSecondary)}`;
  },
  cardBodyGap: '12px',
  cardAvatarSize: '40px',
  cardThumbnailSize: '72px',
  cardChipListGap: '8px',
  cardContentFontSize: '13px',
  cardContentFontWeight: '400',
  cardContentLineHeight: '18px',
  cardContentColor: props => {
    return `${resolveValue(props, props.theme.typographyColorHighEmphasis)}`;
  },
  cardContentFontSizeSmall: '12px',
  cardContentColorSmall: props => {
    return `${resolveValue(props, props.theme.typographyColorTertiary)}`;
  },
  cardFooterGapStacked: '4px',
  cardFooterLeadingGap: '8px',
  cardFooterTrailingGap: '12px',
  checkboxWidth: '0.875rem',
  checkboxHeight: props => {
    return `${resolveValue(props, props.theme.checkboxWidth)}`;
  },
  checkboxBorderStyle: 'solid',
  checkboxBorderWidth: '1px',
  checkboxBorderColor: props => {
    return `${resolveValue(props, props.theme.colorGray90)}`;
  },
  checkboxBorderRadius: '1px',
  checkboxCursor: 'pointer',
  checkboxBackgroundColor: 'transparent',
  checkboxMarginBlock: '0',
  checkboxBackgroundColorHover: props => {
    return `rgba(${resolveValue(props, props.theme.colorWhiteRgb)}, 0.2)`;
  },
  checkboxBorderColorHover: props => {
    return `${resolveValue(props, props.theme.checkboxBorderColor)}`;
  },
  checkboxBackgroundColorFocused: props => {
    return `rgba(${resolveValue(props, props.theme.colorPrimaryRgb)}, 0.1)`;
  },
  checkboxBackgroundColorActive: props => {
    return `${resolveValue(props, props.theme.checkboxBackgroundColorHover)}`;
  },
  checkboxBorderColorActive: props => {
    return `${resolveValue(props, props.theme.checkboxBorderColorHover)}`;
  },
  checkboxBackgroundColorChecked: props => {
    return `${resolveValue(props, props.theme.colorPrimary)}`;
  },
  checkboxBorderColorChecked: props => {
    return `${resolveValue(props, props.theme.checkboxBackgroundColorChecked)}`;
  },
  checkboxBorderWidthChecked: '0',
  checkboxBackgroundColorCheckedHover: props => {
    return `${resolveValue(props, props.theme.checkboxBackgroundColorChecked)}`;
  },
  checkboxBackgroundColorCheckedActive: props => {
    return `${resolveValue(props, props.theme.checkboxBackgroundColorChecked)}`;
  },
  checkboxBackgroundColorIndeterminate: props => {
    return `${resolveValue(props, props.theme.colorPrimary)}`;
  },
  checkboxBorderColorIndeterminate: props => {
    return `${resolveValue(props, props.theme.checkboxBackgroundColorChecked)}`;
  },
  checkboxBorderWidthIndeterminate: '0',
  checkboxBackgroundColorIndeterminateHover: props => {
    return `${resolveValue(props, props.theme.checkboxBackgroundColorIndeterminate)}`;
  },
  checkboxBackgroundColorIndeterminateActive: props => {
    return `${resolveValue(props, props.theme.checkboxBackgroundColorIndeterminate)}`;
  },
  checkboxCursorReadonly: 'default',
  checkboxBackgroundColorReadonly: props => {
    return `${resolveValue(props, props.theme.checkboxBackgroundColor)}`;
  },
  checkboxBorderColorReadonly: props => {
    return `${resolveValue(props, props.theme.checkboxBorderColor)}`;
  },
  checkboxBackgroundColorReadonlyChecked: props => {
    return `${resolveValue(props, props.theme.checkboxBackgroundColorChecked)}`;
  },
  checkboxBorderColorReadonlyChecked: props => {
    return `${resolveValue(props, props.theme.checkboxBackgroundColorChecked)}`;
  },
  checkboxBackgroundColorDisabled: 'transparent',
  checkboxBorderColorDisabled: props => {
    return `${resolveValue(props, props.theme.checkboxLabelColorDisabled)}`;
  },
  checkboxCursorDisabled: 'default',
  checkboxBackgroundColorCheckedDisabled: props => {
    return `${resolveValue(props, props.theme.checkboxBorderColorDisabled)}`;
  },
  checkboxBorderColorCheckedDisabled: props => {
    return `${resolveValue(props, props.theme.checkboxBackgroundColorCheckedDisabled)}`;
  },
  checkboxBackgroundColorIndeterminateDisabled: props => {
    return `${resolveValue(props, props.theme.checkboxBackgroundColorCheckedDisabled)}`;
  },
  checkboxBorderColorIndeterminateDisabled: props => {
    return `${resolveValue(props, props.theme.checkboxBackgroundColorCheckedDisabled)}`;
  },
  checkboxLabelColor: props => {
    return `${resolveValue(props, props.theme.typographyColorBody)}`;
  },
  checkboxLabelMarginBlockStart: '0',
  checkboxLabelMarginInlineEnd: '0',
  checkboxLabelMarginBlockEnd: '0',
  checkboxLabelMarginInlineStart: props => {
    return `${resolveValue(props, props.theme.spacingXs)}`;
  },
  checkboxLabelMarginInline: props => {
    return `${resolveValue(props, props.theme.checkboxLabelMarginInlineStart)}
    ${resolveValue(props, props.theme.checkboxLabelMarginInlineEnd)}`;
  },
  checkboxLabelMarginBlock: props => {
    return `${resolveValue(props, props.theme.checkboxLabelMarginBlockStart)}
    ${resolveValue(props, props.theme.checkboxLabelMarginBlockEnd)}`;
  },
  checkboxLabelFontSize: '0.875rem',
  checkboxLabelFontWeight: '400',
  checkboxLabelLineHeight: '1',
  checkboxLabelFontWeightChecked: '400',
  checkboxLabelColorDisabled: props => {
    return `${resolveValue(props, props.theme.typographyColorDisabled)}`;
  },
  checkboxTickBackgroundImageHover: 'none',
  checkboxTickBackgroundImageActive: 'none',
  checkboxTickBackgroundImageChecked: 'url("data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMTQiCiAgaGVpZ2h0PSIxNCIKICB2aWV3Qm94PSIwIDAgMTQgMTQiCj4KICA8Zz4KICAgIDxwYXRoIGZpbGw9IiNGRkYiIGQ9Ik00LjExOSA2LjQxNkwzIDcuODQgNi4yMTYgMTAuMzY3IDExIDQuODY3IDkuNjMzIDMuNjc4IDUuOTggNy44Nzd6IiAvPgogIDwvZz4KPC9zdmc+")',
  checkboxTickBackgroundImageCheckedHover: props => {
    return `${resolveValue(props, props.theme.checkboxTickBackgroundImageChecked)}`;
  },
  checkboxTickBackgroundImageCheckedActive: props => {
    return `${resolveValue(props, props.theme.checkboxTickBackgroundImageChecked)}`;
  },
  checkboxTickBackgroundImageCheckedReadonly: props => {
    return `${resolveValue(props, props.theme.checkboxTickBackgroundImageChecked)}`;
  },
  checkboxTickBackgroundImageCheckedDisabled: props => {
    return `${resolveValue(props, props.theme.checkboxTickBackgroundImageChecked)}`;
  },
  checkboxTickBackgroundImageIndeterminate: 'url("data:image/svg+xml;base64,PHN2ZwogICAgICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgICAgIHdpZHRoPSIxNCIKICAgICAgaGVpZ2h0PSIxNCIKICAgICAgdmlld0JveD0iMCAwIDE0IDE0IgogICAgPgogICAgICA8Zz4KICAgICAgICA8cGF0aCBmaWxsPSIjRkZGIiBkPSJNMyA2SDExVjhIM3oiIC8+CiAgICAgIDwvZz4KICAgIDwvc3ZnPg==")',
  checkboxTickBackgroundImageIndeterminateHover: props => {
    return `${resolveValue(props, props.theme.checkboxTickBackgroundImageIndeterminate)}`;
  },
  checkboxTickBackgroundImageIndeterminateActive: props => {
    return `${resolveValue(props, props.theme.checkboxTickBackgroundImageIndeterminate)}`;
  },
  checkboxTickBackgroundImageIndeterminateDisabled: props => {
    return `${resolveValue(props, props.theme.checkboxTickBackgroundImageIndeterminate)}`;
  },
  checkboxGroupGap: '0.125em',
  checkboxGroupGapCompact: '0',
  checkboxGroupGapSpacious: '0.5rem',
  checkboxGroupGapHorizontal: '0.75rem',
  checkboxGroupGapHorizontalCompact: '0.5rem',
  checkboxGroupGapHorizontalSpacious: '1.25rem',
  checkboxContainerHeight: '24px',
  checkboxContainerBorderRadius: '2px',
  checkboxContainerBackgroundColor: 'transparent',
  checkboxContainerPaddingInline: '0',
  checkboxContainerPaddingBlock: '0',
  checkboxContainerAlignItems: 'center',
  checkboxContainerBackgroundColorHover: 'transparent',
  checkboxContainerBackgroundColorActive: 'transparent',
  chipHeight: '24px',
  chipBorderRadius: '100px',
  chipBorderWidth: '1px',
  chipBorderStyle: 'solid',
  chipBorderColor: 'rgba(255, 255, 255, 0.2)',
  chipPaddingInlineStart: '8px',
  chipPaddingInlineEnd: '8px',
  chipFontWeight: '400',
  chipColor: props => {
    return `${resolveValue(props, props.theme.typographyColor)}`;
  },
  chipBackgroundColor: 'transparent',
  chipFontSize: props => {
    return `${resolveValue(props, props.theme.typographyFontSizeSmall)}`;
  },
  chipCursor: 'default',
  chipBoxShadow: 'none',
  chipTransition: 'none',
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
  chipBoxShadowSelectable: 'none',
  chipBackgroundColorSelectableHover: props => {
    return `${resolveValue(props, props.theme.colorSecondaryFlatHover)}`;
  },
  chipBorderColorSelectableHover: props => {
    return `${resolveValue(props, props.theme.chipBorderColor)}`;
  },
  chipBoxShadowSelectableHover: 'none',
  chipBackgroundColorSelectableActive: props => {
    return `${resolveValue(props, props.theme.chipBackgroundColorSelectableHover)}`;
  },
  chipBorderColorSelectableActive: props => {
    return `${resolveValue(props, props.theme.chipBorderColorSelectableHover)}`;
  },
  chipBoxShadowSelectableActive: 'none',
  chipPaddingInlineEndRemovable: '0',
  chipPaddingInlineEndLargeRemovable: '0',
  chipBackgroundColorRemovableHover: props => {
    return `${resolveValue(props, props.theme.chipBackgroundColor)}`;
  },
  chipBorderColorRemovableHover: props => {
    return `${resolveValue(props, props.theme.chipBorderColor)}`;
  },
  chipBackgroundColorRemovableActive: props => {
    return `${resolveValue(props, props.theme.chipBackgroundColor)}`;
  },
  chipBorderColorRemovableActive: props => {
    return `${resolveValue(props, props.theme.chipBorderColor)}`;
  },
  chipFontWeightSelected: '400',
  chipColorSelected: props => {
    return `${resolveValue(props, props.theme.typographyColorHighEmphasis)}`;
  },
  chipBackgroundColorSelected: 'rgba(97, 176, 255, 0.4)',
  chipBorderColorSelected: 'transparent',
  chipBorderWidthSelected: '1px',
  chipBoxShadowSelected: 'none',
  chipBackgroundColorSelectedHover: 'rgba(97, 176, 255, 0.55)',
  chipBorderColorSelectedHover: 'transparent',
  chipBoxShadowSelectedHover: 'none',
  chipBackgroundColorSelectedActive: props => {
    return `${resolveValue(props, props.theme.chipBackgroundColorSelectedHover)}`;
  },
  chipBorderColorSelectedActive: props => {
    return `${resolveValue(props, props.theme.chipBorderColorSelectedHover)}`;
  },
  chipBoxShadowSelectedActive: props => {
    return `${resolveValue(props, props.theme.chipBoxShadowSelectedHover)}`;
  },
  chipBoxShadowSelectedFocused: props => {
    return `${resolveValue(props, props.theme.chipBoxShadowFocused)}`;
  },
  chipBoxShadowSelectableFocused: props => {
    return `${resolveValue(props, props.theme.focusIndicatorBoxShadow)}`;
  },
  chipBackgroundColorReadonly: props => {
    return `${resolveValue(props, props.theme.chipBackgroundColor)}`;
  },
  chipBorderColorReadonly: props => {
    return `${resolveValue(props, props.theme.chipBorderColor)}`;
  },
  chipBoxShadowReadonly: props => {
    return `${resolveValue(props, props.theme.chipBoxShadow)}`;
  },
  chipBackgroundColorDisabled: '#00000005',
  chipBorderColorDisabled: '#0000001a',
  chipColorDisabled: '#00000033',
  chipBoxShadowDisabled: 'none',
  chipBackgroundColorDragging: props => {
    return `${resolveValue(props, props.theme.chipBackgroundColor)}`;
  },
  chipBorderColorDragging: props => {
    return `${resolveValue(props, props.theme.chipBorderColor)}`;
  },
  chipBorderWidthDragging: props => {
    return `${resolveValue(props, props.theme.chipBorderWidth)}`;
  },
  chipBoxShadowDragging: props => {
    return `${resolveValue(props, props.theme.chipBoxShadow)}`;
  },
  chipRemoveContainerWidth: '26px',
  chipRemoveContainerHeight: '100%',
  chipRemoveContainerPaddingInlineEnd: '3px',
  chipRemoveContainerWidthLarge: '30px',
  chipRemoveContainerPaddingInlineEndLarge: '7px',
  chipRemoveBorderRadius: '50%',
  chipRemoveSize: '16px',
  chipRemoveColor: props => {
    return `${resolveValue(props, props.theme.typographyColorLightest)}`;
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
    return `${resolveValue(props, props.theme.colorSecondaryFlatHover)}`;
  },
  chipRemoveColorHover: props => {
    return `${resolveValue(props, props.theme.typographyColor)}`;
  },
  chipRemoveBackgroundColorActive: props => {
    return `${resolveValue(props, props.theme.chipRemoveBackgroundColorHover)}`;
  },
  chipRemoveColorActive: props => {
    return `${resolveValue(props, props.theme.chipRemoveColorHover)}`;
  },
  chipRemoveBackgroundColorSelectedHover: 'rgba(97, 176, 255, 0.55)',
  chipRemoveColorSelectedHover: props => {
    return `${resolveValue(props, props.theme.typographyColorSecondary)}`;
  },
  chipRemoveColorDisabled: props => {
    return `${resolveValue(props, props.theme.chipColorDisabled)}`;
  },
  chipRemoveBoxShadowFocused: props => {
    return `${resolveValue(props, props.theme.focusIndicatorBoxShadow)}`;
  },
  chipRemoveIconSize: '16px',
  chipColorTagSize: '8px',
  chipColorTagBorderRadius: '50%',
  chipColorTagOpacity: '1',
  chipColorTagBoxShadow: 'none',
  chipColorTagSizeLarge: '10px',
  chipAvatarSize: '20px',
  chipAvatarBorderRadius: '50%',
  chipAvatarFontWeight: props => {
    return `${resolveValue(props, props.theme.typographyFontWeightSemibold)}`;
  },
  chipAvatarFontSize: '9px',
  chipAvatarTextAlign: 'center',
  chipAvatarMarginStart: props => {
    return `calc(calc(${resolveValue(props, props.theme.chipAvatarSize)} * -0.5) + 3px)`;
  },
  chipAvatarBackgroundSize: 'cover',
  chipAvatarOpacity: '1',
  chipAvatarBoxShadow: 'none',
  chipAvatarSizeLarge: '26px',
  chipAvatarFontSizeLarge: '12px',
  chipAvatarMarginStartLarge: props => {
    return `calc(${resolveValue(props, props.theme.chipAvatarSize)} * -0.5)`;
  },
  chipAvatarBackgroundColorDisabled: props => {
    return `${resolveValue(props, props.theme.colorGray25)}`;
  },
  chipAvatarOpacityDisabled: '1',
  chipAvatarImageBoxShadow: 'none',
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
    return `rgba(${resolveValue(props, props.theme.colorWhiteRgb)}, 0.02)`;
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
  chipMultiSelectCounterBackgroundColor: props => {
    return `${resolveValue(props, props.theme.colorGray25)}`;
  },
  chipMultiSelectCounterBackgroundColorSelectableHover: props => {
    return `${resolveValue(props, props.theme.colorGray25)}`;
  },
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
  coachmarkContainerBorder: '1px solid transparent',
  coachmarkBorderColor: 'transparent',
  coachmarkBorderRadius: '12px',
  coachmarkBackground: 'green',
  coachmarkBoxShadow: 'none',
  coachmarkColor: 'rgba(217, 217, 217, 1)',
  coachmarkLayoutPaddingInline: '0px',
  coachmarkLayoutPaddingBlock: '0px',
  coachmarkLayoutBackground: 'green',
  coachmarkDividerColor: 'white',
  coachmarkContentFontWeight: '',
  coachmarkContentFontSize: '13px',
  coachmarkContentLineHeight: '18px',
  coachmarkContentLetterSpacing: '0px',
  coachmarkContentColor: 'white',
  coachmarkHeaderTitleFontWeight: '600',
  coachmarkHeaderTitleFontSize: '13px',
  coachmarkHeaderTitleLineHeight: '18px',
  coachmarkHeaderTitleLetterSpacing: '0px',
  coachmarkHeaderTitleColor: 'white',
  coachmarkFooterFontWeight: '700',
  coachmarkFooterFontSize: '13px',
  coachmarkFooterLineHeight: '18px',
  coachmarkFooterLetterSpacing: '0px',
  typographyLinkColorDisabled: 'gray',
  coachmarkSlidePaginationMarkerBackgroundColor: 'white',
  coachmarkSlidePaginationSelectedBackgroundColor: 'white',
  coachmarkNextButtonColor: 'black',
  coachmarkNextButtonPaddingBlock: '0px',
  coachmarkNextButtonPaddingInline: '0px',
  coachmarkNextButtonBorderRadius: '7px',
  coachmarkNextButtonHeight: '32px',
  datePickerPaddingInline: '1.5rem',
  datePickerPaddingBlock: '1.5rem',
  datePickerFontWeight: props => {
    return `${resolveValue(props, props.theme.typographyFontWeightRegular)}`;
  },
  datePickerHeaderFontWeight: props => {
    return `${resolveValue(props, props.theme.typographyFontWeightMedium)}`;
  },
  datePickerHeaderMarginBlockEnd: '1.125rem',
  datePickerHeaderControlBorderRadius: '0',
  datePickerHeaderControlIconSize: '1rem',
  datePickerHeaderControlIconTransformRtl: 'scaleX(-1)',
  datePickerSelectMonthMinWidth: '7rem',
  datePickerSelectYearMinWidth: '4.5rem',
  datePickerSelectSeparatorMinWidth: '6px',
  datePickerSelectOutlineFocus: 'none',
  datePickerSelectOutlineOffsetFocus: '0',
  datePickerCalendarHeaderColor: props => {
    return `${resolveValue(props, props.theme.colorGray75)}`;
  },
  datePickerCalendarHeaderMarginBlockEnd: '0.5rem',
  datePickerCalendarHeaderFontSize: '0.875rem',
  datePickerCalendarHeaderDayFontWeight: props => {
    return `${resolveValue(props, props.theme.typographyFontWeightMedium)}`;
  },
  datePickerGridGridTemplateColumns: 'repeat(7, 35px)',
  datePickerGridGap: '0',
  datePickerGridColumnGap: '0',
  datePickerGridCellWidth: '35px',
  datePickerGridCellMinWidth: '0',
  datePickerGridCellHeight: props => {
    return `${resolveValue(props, props.theme.datePickerGridCellWidth)}`;
  },
  datePickerGridCellFontSize: '0.875rem',
  datePickerGridCellBackgroundColor: 'inherit',
  datePickerGridCellBorder: 'none',
  datePickerGridCellBorderRadius: '0',
  datePickerGridCellPaddingInline: '0',
  datePickerGridCellPaddingBlock: '0',
  datePickerGridCellColor: props => {
    return `${resolveValue(props, props.theme.typographyColorBody)}`;
  },
  datePickerGridCellBackgroundColorHover: props => {
    return `rgba(${resolveValue(props, props.theme.colorWhiteRgb)}, 0.1)`;
  },
  datePickerGridCellBackgroundColorActive: props => {
    return `rgba(${resolveValue(props, props.theme.colorBlueRgb)}, 0.05)`;
  },
  datePickerGridCellBorderToday: 'none',
  datePickerGridCellColorToday: props => {
    return `${resolveValue(props, props.theme.typographyColorLink)}`;
  },
  datePickerGridCellFontWeightToday: props => {
    return `${resolveValue(props, props.theme.typographyFontWeightMedium)}`;
  },
  datePickerGridCellColorTodaySelected: props => {
    return `${resolveValue(props, props.theme.colorBlue)}`;
  },
  datePickerGridCellColorSelected: props => {
    return `${resolveValue(props, props.theme.typographyColorHighEmphasis)}`;
  },
  datePickerGridCellFontWeightSelected: props => {
    return `${resolveValue(props, props.theme.typographyFontWeightMedium)}`;
  },
  datePickerGridCellBackgroundColorSelected: props => {
    return `rgba(${resolveValue(props, props.theme.colorWhiteRgb)}, 0.2)`;
  },
  datePickerGridCellBoxShadowSelected: props => {
    return `inset 0 -2px ${resolveValue(props, props.theme.colorWhite)}`;
  },
  datePickerGridCellBoxShadowSelectionStart: props => {
    return `inset 2px 0 ${resolveValue(props, props.theme.colorWhite)}`;
  },
  datePickerGridCellBackgroundColorSelectionStart: props => {
    return `${resolveValue(props, props.theme.datePickerGridCellBackgroundColorSelectionBetween)}`;
  },
  datePickerGridCellBackgroundColorSelectionStartActive: props => {
    return `${resolveValue(props, props.theme.datePickerGridCellBackgroundColorSelected)}`;
  },
  datePickerGridCellBorderRadiusSelectionStart: '0',
  datePickerGridCellColorSelectionStart: props => {
    return `${resolveValue(props, props.theme.datePickerGridCellColor)}`;
  },
  datePickerGridCellBackgroundColorUnderlayStart: 'transparent',
  datePickerGridCellBackgroundColorSelectionEnd: props => {
    return `${resolveValue(props, props.theme.datePickerGridCellBackgroundColorSelectionBetween)}`;
  },
  datePickerGridCellBackgroundColorSelectionEndActive: props => {
    return `${resolveValue(props, props.theme.datePickerGridCellBackgroundColorSelected)}`;
  },
  datePickerGridCellBoxShadowSelectionEnd: props => {
    return `inset -2px 0 ${resolveValue(props, props.theme.colorWhite)}`;
  },
  datePickerGridCellBorderRadiusSelectionEnd: '0',
  datePickerGridCellColorSelectionEnd: props => {
    return `${resolveValue(props, props.theme.datePickerGridCellColor)}`;
  },
  datePickerGridCellBackgroundColorUnderlayEnd: 'transparent',
  datePickerGridCellBorderRadiusSelectionBetween: '0',
  datePickerGridCellColorSelectionBetween: props => {
    return `${resolveValue(props, props.theme.datePickerGridCellColor)}`;
  },
  datePickerGridCellBackgroundColorSelectionBetween: props => {
    return `rgba(
    ${resolveValue(props, props.theme.colorWhiteRgb)},
    0.05
  )`;
  },
  datePickerGridCellColorDisabled: props => {
    return `${resolveValue(props, props.theme.typographyColorDisabled)}`;
  },
  datePickerGridCellColorDisabledSelected: props => {
    return `${resolveValue(props, props.theme.typographyColorDisabled)}`;
  },
  datePickerGridCellBackgroundColorDisabledSelected: props => {
    return `rgba(
    ${resolveValue(props, props.theme.colorWhiteRgb)},
    0.02
  )`;
  },
  datePickerGridCellBoxShadowDisabledSelected: props => {
    return `inset 0 -0.125rem rgba(${resolveValue(props, props.theme.colorWhiteRgb)}, 0.2)`;
  },
  datePickerGridCellBoxShadowDisabledSelectionStart: props => {
    return `inset 2px 0
    rgba(${resolveValue(props, props.theme.colorWhiteRgb)}, 0.2)`;
  },
  datePickerGridCellBoxShadowDisabledSelectionEnd: props => {
    return `inset -2px 0 rgba(${resolveValue(props, props.theme.colorWhiteRgb)}, 0.2)`;
  },
  datePickerGridCellBoxShadowFocused: props => {
    return `${resolveValue(props, props.theme.focusIndicatorBoxShadow)}`;
  },
  datePickerGridCellBoxShadowFocusedSelected: props => {
    return `${resolveValue(props, props.theme.datePickerGridCellBoxShadowSelected)},
    ${resolveValue(props, props.theme.focusIndicatorBoxShadow)}`;
  },
  datePickerGridCellBoxShadowFocusedSelectionStart: props => {
    return `${resolveValue(props, props.theme.datePickerGridCellBoxShadowSelectionStart)},
    ${resolveValue(props, props.theme.focusIndicatorBoxShadow)}`;
  },
  datePickerGridCellBoxShadowFocusedSelectionEnd: props => {
    return `${resolveValue(props, props.theme.datePickerGridCellBoxShadowSelectionEnd)},
    ${resolveValue(props, props.theme.focusIndicatorBoxShadow)}`;
  },
  datePickerGridCellColorOutsideOfMonth: 'transparent',
  datePickerGridCellColorOutsideOfMonthDateRange: 'transparent',
  datePickerDropdownColumnGap: '0',
  datePickerDropdownWidth: '100%',
  datePickerDropdownHeight: '32px',
  datePickerDropdownPaddingInline: '11px 7px',
  datePickerDropdownBorderRadius: '2px',
  datePickerDropdownBorderColor: props => {
    return `${resolveValue(props, props.theme.textInputBorderColor)}`;
  },
  datePickerDropdownBackgroundColorHover: props => {
    return `${resolveValue(props, props.theme.textInputBackgroundColor)}`;
  },
  datePickerDropdownBorderColorHover: props => {
    return `${resolveValue(props, props.theme.textInputBorderColorHover)}`;
  },
  datePickerDropdownBoxShadowHover: 'none',
  datePickerDropdownBackgroundColorActive: props => {
    return `${resolveValue(props, props.theme.textInputBackgroundColor)}`;
  },
  datePickerDropdownBorderColorActive: props => {
    return `${resolveValue(props, props.theme.textInputBorderColorHover)}`;
  },
  datePickerDropdownBorderColorFocused: props => {
    return `${resolveValue(props, props.theme.textInputBorderColorFocused)}`;
  },
  datePickerDropdownBoxShadowFocused: 'none',
  datePickerDropdownValueColor: props => {
    return `${resolveValue(props, props.theme.textInputColor)}`;
  },
  datePickerDropdownValueFontSize: '14px',
  datePickerDropdownValueFontWeight: '500',
  datePickerDropdownValueColorHover: props => {
    return `${resolveValue(props, props.theme.textInputColor)}`;
  },
  datePickerDropdownValueColorActive: props => {
    return `${resolveValue(props, props.theme.textInputColor)}`;
  },
  datePickerDropdownArrowMinWidth: '16px',
  datePickerDropdownArrowFontSize: '16px',
  datePickerDropdownArrowColor: props => {
    return `${resolveValue(props, props.theme.typographyColor)}`;
  },
  datePickerDropdownArrowColorHover: props => {
    return `${resolveValue(props, props.theme.typographyColor)}`;
  },
  datePickerDropdownArrowColorActive: props => {
    return `${resolveValue(props, props.theme.typographyColor)}`;
  },
  dateRangePickerSummaryBorderBottom: props => {
    return `1px solid rgba(${resolveValue(props, props.theme.colorWhiteRgb)}, 0.1)`;
  },
  dateRangePickerSummaryHeight: '72px',
  dateRangePickerSummaryMarginInline: '8px',
  dateRangePickerSummaryMarginBlock: '0',
  dateRangePickerSummaryPaddingInline: '24px',
  dateRangePickerSummaryPaddingBlock: '0',
  dateRangePickerSummarySectionMarginBlockEnd: '1px',
  dateRangePickerSummarySectionFontWeight: props => {
    return `${resolveValue(props, props.theme.typographyFontWeightRegular)}`;
  },
  dateRangePickerSummarySectionFontSize: props => {
    return `${resolveValue(props, props.theme.typographyFontSizeSmall)}`;
  },
  dateRangePickerSelectHeaderColor: props => {
    return `${resolveValue(props, props.theme.typographyColorBody)}`;
  },
  dateRangePickerDateHeaderColor: props => {
    return `${resolveValue(props, props.theme.typographyColor)}`;
  },
  dateRangePickerTimeHeaderHeight: '15px',
  dateRangePickerSummarySeparatorWidth: '64px',
  dateRangePickerSummarySeparatorColor: props => {
    return `${resolveValue(props, props.theme.typographyColorLink)}`;
  },
  dateRangePickerSummarySeparatorPaddingBlockStart: '2px',
  dateRangePickerSummarySeparatorIconSize: '24px',
  dateRangePickerSummaryIconTransformRtl: 'scaleX(-1)',
  dateRangePickerSummaryDurationMarginInline: '0',
  dateRangePickerSummaryDurationMarginBlock: '0',
  dateRangePickerSummaryDurationFontSize: props => {
    return `${resolveValue(props, props.theme.typographyFontSize)}`;
  },
  dateTimePickerInputDividerHeight: '1px',
  dateTimePickerInputDividerMarginInline: '-8px',
  dateTimePickerInputDividerMarginBlock: '0',
  dateTimePickerInputDividerMarginBlockStart: '24px',
  dateTimePickerInputDividerMarginBlockEnd: '24px',
  dateTimePickerInputDividerColor: props => {
    return `rgba(${resolveValue(props, props.theme.colorWhiteRgb)}, 0.1)`;
  },
  dateTimePickerInputAdditionalContentMarginBlockStart: '8px',
  dateTimePickerInputAdditionalContentAlignItems: 'stretch',
  dialogMaxHeight: '100%',
  dialogBackgroundColor: props => {
    return `${resolveValue(props, props.theme.elevationBackgroundColor3)}`;
  },
  dialogBoxShadow: props => {
    return `${resolveValue(props, props.theme.elevationBoxShadow3)}`;
  },
  dialogBorderColor: props => {
    return `${resolveValue(props, props.theme.elevationBorderColor3)}`;
  },
  dialogBorderStyle: 'solid',
  dialogBorderWidth: '1px',
  dialogBorder: props => {
    return `${resolveValue(props, props.theme.dialogBorderStyle)} ${resolveValue(props, props.theme.dialogBorderWidth)}
    ${resolveValue(props, props.theme.dialogBorderColor)}`;
  },
  dialogBorderRadius: '4px',
  dialogBorderRadiusDrawer: '0',
  dialogOverflow: 'none',
  dialogBorderRadiusModalPanelStart: '0',
  dialogBorderRadiusModalPanelEnd: '0',
  dialogBorderRadiusModalPanelTop: '0',
  dialogBorderRadiusModalPanelBottom: '0',
  dialogWidth: '470px',
  dialogWidthSmall: '345px',
  dialogWidthLarge: '720px',
  dialogLayoutGridTemplateRows: 'auto 1fr',
  dialogLayoutGridTemplateColumns: 'auto auto 1fr',
  dialogLayoutGridTemplateAreas: '"emphasize icon header" "emphasize icon content"\n    "emphasize footer footer"',
  dialogEmphasisIndicatorWidth: '4px',
  dialogEmphasisIndicatorMarginBlockStart: '8px',
  dialogEmphasisIndicatorMarginBlockEnd: '8px',
  dialogEmphasisIndicatorMarginInlineStart: '8px',
  dialogEmphasisIndicatorMarginInlineEnd: '0',
  dialogEmphasisIndicatorBorderRadius: '2px',
  dialogIconFill: props => {
    return `${resolveValue(props, props.theme.typographyColorHighEmphasis)}`;
  },
  dialogIconSize: '1rem',
  dialogIconMarginInlineStart: '12px',
  dialogIconMarginInlineEnd: '0',
  dialogIconMarginInline: props => {
    return `${resolveValue(props, props.theme.dialogIconMarginInlineStart)}
    ${resolveValue(props, props.theme.dialogIconMarginInlineEnd)}`;
  },
  dialogIconMarginBlockStart: '28px',
  dialogIconMarginBlockEnd: '0',
  dialogIconMarginBlock: props => {
    return `${resolveValue(props, props.theme.dialogIconMarginBlockStart)}
    ${resolveValue(props, props.theme.dialogIconMarginBlockEnd)}`;
  },
  dialogIconColorInfo: props => {
    return `${resolveValue(props, props.theme.colorStatusInfo)}`;
  },
  dialogIconColorError: props => {
    return `${resolveValue(props, props.theme.colorStatusError)}`;
  },
  dialogIconColorSuccess: props => {
    return `${resolveValue(props, props.theme.colorStatusSuccess)}`;
  },
  dialogIconColorWarning: props => {
    return `${resolveValue(props, props.theme.colorStatusWarning)}`;
  },
  dialogIconColorQuestion: props => {
    return `${resolveValue(props, props.theme.dialogIconColorInfo)}`;
  },
  dialogHeaderColor: props => {
    return `${resolveValue(props, props.theme.typographyColorHighEmphasis)}`;
  },
  dialogHeaderGap: '16px',
  dialogHeaderMarginInline: '16px 16px',
  dialogHeaderMarginBlock: '24px 0',
  dialogHeaderPaddingInline: '0 0',
  dialogHeaderPaddingBlock: '0 0',
  dialogHeaderFontSize: '1.25rem',
  dialogHeaderFontWeight: props => {
    return `${resolveValue(props, props.theme.typographyFontWeightMedium)}`;
  },
  dialogHeaderLetterSpacing: '0.5px',
  dialogHeaderLineHeight: 'normal',
  dialogHeaderOverflowContent: 'none',
  dialogHeaderPaddingInlineModalMessage: '0',
  dialogHeaderMarginInlineModalMessage: '0px',
  dialogHeaderMarginInlineModalPanel: '24px',
  dialogHeaderMarginBlockModalPanel: '24px 0',
  dialogHeaderPaddingInlineModalPanel: '0',
  dialogHeaderPaddingBlockModalPanel: '0',
  dialogHeaderTitlePaddingInlineStart: '0',
  dialogHeaderTitlePaddingInlineEnd: '0',
  dialogHeaderTitlePaddingInline: props => {
    return `${resolveValue(props, props.theme.dialogHeaderTitlePaddingInlineStart)}
    ${resolveValue(props, props.theme.dialogHeaderTitlePaddingInlineEnd)}`;
  },
  dialogHeaderTitlePaddingBlockStart: '0',
  dialogHeaderTitlePaddingBlockEnd: '0',
  dialogHeaderTitlePaddingBlock: props => {
    return `${resolveValue(props, props.theme.dialogHeaderTitlePaddingBlockStart)}
    ${resolveValue(props, props.theme.dialogHeaderTitlePaddingBlockEnd)}`;
  },
  dialogHeaderSubtitleFontSize: '0.6875rem',
  dialogHeaderSubtitleFontWeight: '500',
  dialogHeaderSubtitleLineHeight: '14px',
  dialogHeaderSubtitleTextColor: props => {
    return `${resolveValue(props, props.theme.typographyColorTertiary)}`;
  },
  dialogHeaderSubtitlePaddingInlineStart: '0',
  dialogHeaderSubtitlePaddingInlineEnd: '0',
  dialogHeaderSubtitlePaddingInline: props => {
    return `${resolveValue(props, props.theme.dialogHeaderSubtitlePaddingInlineStart)}
    ${resolveValue(props, props.theme.dialogHeaderSubtitlePaddingInlineEnd)}`;
  },
  dialogHeaderSubtitlePaddingBlockStart: '0',
  dialogHeaderSubtitlePaddingBlockEnd: '0',
  dialogHeaderSubtitlePaddingBlock: props => {
    return `${resolveValue(props, props.theme.dialogHeaderSubtitlePaddingBlockStart)}
    ${resolveValue(props, props.theme.dialogHeaderSubtitlePaddingBlockEnd)}`;
  },
  dialogContentColor: props => {
    return `${resolveValue(props, props.theme.typographyColorBody)}`;
  },
  dialogContentFontWeight: props => {
    return `${resolveValue(props, props.theme.typographyBodyFontWeight)}`;
  },
  dialogContentFontSize: props => {
    return `${resolveValue(props, props.theme.typographyBodyFontSize)}`;
  },
  dialogContentLineHeight: props => {
    return `${resolveValue(props, props.theme.typographyBodyLineHeight)}`;
  },
  dialogContentMarginInline: '16px 16px',
  dialogContentMarginBlock: '8px 24px',
  dialogContentPaddingInline: '0 0',
  dialogContentPaddingBlock: '0 0',
  dialogContentBackground: 'none',
  dialogContentBackgroundRepeat: 'none',
  dialogContentBackgroundSize: 'none',
  dialogContentBackgroundAttachment: 'none',
  dialogContentFocusOutlineOffset: props => {
    return `${resolveValue(props, props.theme.focusOutlineOffset)}`;
  },
  dialogContentPaddingBlockModalMessage: props => {
    return `${resolveValue(props, props.theme.dialogContentPaddingBlock)}`;
  },
  dialogContentMarginInlineModalPanel: '24px',
  dialogContentMarginBlockModalPanel: '24px',
  dialogContentMaskImageTop: 'none',
  dialogContentMaskImageBottom: 'none',
  dialogContentMaskImageBoth: 'none',
  dialogFooterBorderStyle: 'solid',
  dialogFooterBorderTopWidth: '1px',
  dialogFooterBorderRightWidth: '0',
  dialogFooterBorderBottomWidth: '0',
  dialogFooterBorderLeftWidth: '0',
  dialogFooterGap: '16px',
  dialogFooterBorderColor: props => {
    return `${resolveValue(props, props.theme.elevationBorderColor3)}`;
  },
  dialogFooterOverflowContent: 'none',
  dialogFooterPaddingInline: '0 0',
  dialogFooterPaddingBlock: '16px 0',
  dialogFooterMainPaddingInline: '0 0',
  dialogFooterMainPaddingBlock: '0 0',
  dialogFooterMarginInline: '16px 16px',
  dialogFooterMarginBlock: '0 16px',
  dialogFooterMarginInlineModalPanel: '0',
  dialogFooterMarginBlockModalPanel: '0',
  dialogFooterPaddingInlineModalPanel: '16px',
  dialogFooterPaddingBlockModalPanel: '16px',
  overlayBackdropBackground: props => {
    return `rgba(${resolveValue(props, props.theme.colorBlackRgb)}, 0.32)`;
  },
  overlayBackdropBackdropFilter: 'none',
  dialogDismissButtonPosition: 'absolute',
  dialogDismissButtonTop: props => {
    return `${resolveValue(props, props.theme.spacingXs)}`;
  },
  dialogDismissButtonInsetInlineEnd: props => {
    return `${resolveValue(props, props.theme.spacingXs)}`;
  },
  dialogDismissButtonSize: '16px',
  dialogDismissButtonAlign: 'none',
  dialogDismissButtonContainerPosition: 'none',
  flyoutBackgroundColor: props => {
    return `${resolveValue(props, props.theme.popoverBackgroundColor)}`;
  },
  flyoutBorderColor: props => {
    return `${resolveValue(props, props.theme.popoverBorderColor)}`;
  },
  flyoutColor: props => {
    return `${resolveValue(props, props.theme.popoverColor)}`;
  },
  flyoutBorderRadius: props => {
    return `${resolveValue(props, props.theme.popoverBorderRadius)}`;
  },
  flyoutWrapperBorderRadius: props => {
    return `${resolveValue(props, props.theme.popoverBorderRadius)}`;
  },
  flyoutContentPaddingInlineBelow: props => {
    return `${resolveValue(props, props.theme.popoverPaddingInline)}`;
  },
  flyoutContentPaddingBlockBelow: props => {
    return `${resolveValue(props, props.theme.popoverPaddingBlock)}`;
  },
  flyoutContentBoxShadowBelow: 'none',
  flyoutContentPaddingInlineAbove: props => {
    return `${resolveValue(props, props.theme.popoverPaddingInline)}`;
  },
  flyoutContentPaddingBlockAbove: props => {
    return `${resolveValue(props, props.theme.popoverPaddingBlock)}`;
  },
  flyoutContentBoxShadowAbove: 'none',
  flyoutContentPaddingInlineAfter: props => {
    return `${resolveValue(props, props.theme.popoverPaddingInline)}`;
  },
  flyoutContentPaddingBlockAfter: props => {
    return `${resolveValue(props, props.theme.popoverPaddingBlock)}`;
  },
  flyoutContentBoxShadowAfter: 'none',
  flyoutContentPaddingInlineBefore: props => {
    return `${resolveValue(props, props.theme.popoverPaddingInline)}`;
  },
  flyoutContentPaddingBlockBefore: props => {
    return `${resolveValue(props, props.theme.popoverPaddingBlock)}`;
  },
  flyoutContentBoxShadowBefore: 'none',
  drawerContainerBackgroundColor: props => {
    return `${resolveValue(props, props.theme.elevationBackgroundColorBase)}`;
  },
  drawerAnimationDuration: '0.3s',
  drawerContentBorderRadius: '0',
  drawerContentBoxShadow: props => {
    return `0 0 4px ${resolveValue(props, props.theme.elevationBoxShadowColor2)}`;
  },
  drawerContentBackgroundColor: props => {
    return `${resolveValue(props, props.theme.elevationBackgroundColor2)}`;
  },
  drawerContentBorderStyle: 'solid',
  drawerContentBorderColor: 'transparent',
  drawerContentBorderWidthTopStart: '0',
  drawerContentBorderWidthRightStart: '0',
  drawerContentBorderWidthBottomStart: '0',
  drawerContentBorderWidthLeftStart: '0',
  drawerContentBorderWidthTopEnd: '0',
  drawerContentBorderWidthRightEnd: '0',
  drawerContentBorderWidthBottomEnd: '0',
  drawerContentBorderWidthLeftEnd: '0',
  drawerContentBorderWidthTopTop: '0',
  drawerContentBorderWidthRightTop: '0',
  drawerContentBorderWidthBottomTop: '0',
  drawerContentBorderWidthLeftTop: '0',
  drawerContentBorderWidthTopBottom: '0',
  drawerContentBorderWidthRightBottom: '0',
  drawerContentBorderWidthBottomBottom: '0',
  drawerContentBorderWidthLeftBottom: '0',
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
  formGap: '16px',
  formFieldLabelMarginBlockEnd: '4px',
  formFieldLabelLineHeight: props => {
    return `${resolveValue(props, props.theme.typographyLabelLineHeight)}`;
  },
  formFieldLabelMarginBlockEndHorizontal: '0',
  formFieldFeedbackColumnGap: '4px',
  formFieldFeedbackMarginBlockStart: '6px',
  formFieldFeedbackBoxShadow: 'none',
  formFieldFeedbackBorderRadius: '0',
  formFieldFeedbackBorderWidthTop: '0',
  formFieldFeedbackBorderWidthRight: '0',
  formFieldFeedbackBorderWidthBottom: '0',
  formFieldFeedbackBorderWidthLeft: '0',
  formFieldFeedbackPaddingInline: '0',
  formFieldFeedbackPaddingBlock: '0',
  formFieldFeedbackContentFontSize: '12px',
  formFieldFeedbackContentColor: props => {
    return `${resolveValue(props, props.theme.typographyColorHighEmphasis)}`;
  },
  formFieldFeedbackContentLineHeight: '18px',
  formFieldFeedbackContentFontWeight: '400',
  formFieldFeedbackBackgroundError: 'transparent',
  formFieldFeedbackBorderColorError: 'transparent',
  formFieldFeedbackBackgroundSuccess: 'transparent',
  formFieldFeedbackBorderColorSuccess: 'transparent',
  formFieldFeedbackMarginBlockStartHorizontal: props => {
    return `calc(
    ${resolveValue(props, props.theme.formFieldFeedbackMarginBlockStart)} - ${resolveValue(props, props.theme.formGap)}
  )`;
  },
  formFieldFeedbackIconSize: '1rem',
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
    return `${resolveValue(props, props.theme.typographyColorLink)}`;
  },
  requiredIndicatorWidth: 'auto',
  iconButtonPaddingInline: '7px',
  iconButtonPaddingBlock: '7px',
  iconButtonBorderRadius: props => {
    return `${resolveValue(props, props.theme.buttonBorderRadius)}`;
  },
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
  iconButtonWidthExtraSmall: '1.5rem',
  iconButtonHeightExtraSmall: props => {
    return `${resolveValue(props, props.theme.iconButtonWidthExtraSmall)}`;
  },
  iconButtonPaddingInlineExtraSmall: '3px',
  iconButtonPaddingBlockExtraSmall: '3px',
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
  iconButtonIconSizeLarge: '1.5rem',
  iconButtonWidthExtraLarge: '3rem',
  iconButtonHeightExtraLarge: '3rem',
  iconButtonPaddingInlineExtraLarge: '11px',
  iconButtonPaddingBlockExtraLarge: '11px',
  iconButtonIconSizeExtraLarge: props => {
    return `${resolveValue(props, props.theme.iconButtonIconSizeLarge)}`;
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
    return `${resolveValue(props, props.theme.colorPrimaryFlatHover)}`;
  },
  inlineEditLabelContainerPaddingInlineHover: '9px',
  inlineEditLabelFontSize: '13px',
  inlineEditLabelLineHeight: '19px',
  inlineEditLabelMarginBlockEnd: '-1px',
  inlineEditLabelColor: props => {
    return `${resolveValue(props, props.theme.typographyColorBody)}`;
  },
  inlineEditLabelCursor: 'text',
  inlineEditLabelBorderRadius: '1px',
  inlineEditLabelRowGap: '13px',
  inlineEditLabelPaddingBlockSmall: '0',
  inlineEditLabelPaddingBlockMedium: '3px',
  inlineEditLabelPaddingBlockLarge: '3px',
  inlineEditPlaceholderColor: props => {
    return `${resolveValue(props, props.theme.typographyColorPlaceholder)}`;
  },
  inlineEditPlaceholderFontWeight: '400',
  inlineEditActionsGap: '0.25rem',
  inlineEditActionsTransition: 'opacity 0.1s ease-in-out',
  inlineEditActionsTransitionDelay: '250ms',
  inlineEditActionsOpacity: '0',
  inlineEditActionsOpacityHover: '1',
  inlineEditActionsOpacityFocus: '1',
  inlineEditActionsTransitionFocus: 'none',
  inlineEditEditingActionsGap: '0.5rem',
  inlineNotificationGridTemplateColumns: '1fr 0fr 0fr',
  inlineNotificationPaddingBlock: '2px',
  inlineNotificationPaddingInline: '12px 8px',
  inlineNotificationBorderTopWidth: '1px',
  inlineNotificationBorderBottomWidth: '1px',
  inlineNotificationBorderLeftWidth: '1px',
  inlineNotificationBorderRightWidth: '1px',
  inlineNotificationBorderStyle: 'solid',
  inlineNotificationMinHeight: '32px',
  inlineNotificationLineHeight: '16px',
  inlineNotificationFontSize: props => {
    return `${resolveValue(props, props.theme.typographyFontSizeSmall)}`;
  },
  inlineNotificationFontWeight: props => {
    return `${resolveValue(props, props.theme.typographyFontWeightRegular)}`;
  },
  inlineNotificationFontWeightSmall: props => {
    return `${resolveValue(props, props.theme.typographyFontWeightRegular)}`;
  },
  inlineNotificationFontWeightLarge: props => {
    return `${resolveValue(props, props.theme.typographyFontWeightRegular)}`;
  },
  inlineNotificationBorderRadius: '0',
  inlineNotificationColor: props => {
    return `${resolveValue(props, props.theme.typographyColorBody)}`;
  },
  inlineNotificationBoxShadow: 'none',
  inlineNotificationGridTemplateArea: '"content actions dismiss"',
  inlineNotificationGridTemplateAreaVertical: '"content dismiss" "actions ."',
  inlineNotificationRowGapVertical: '4px',
  inlineNotificationPaddingInlineVertical: '12px 8px',
  inlineNotificationBorderRadiusRounded: '4px',
  inlineNotificationPaddingBlockActionable: '3px',
  inlineNotificationBackgroundColorInfo: 'rgba(158, 219, 250, 0.2)',
  inlineNotificationBorderColorInfo: 'rgba(255, 255, 255, 0.2)',
  inlineNotificationColorInfo: props => {
    return `${resolveValue(props, props.theme.typographyColorBody)}`;
  },
  inlineNotificationFontWeightInfo: props => {
    return `${resolveValue(props, props.theme.typographyFontWeightRegular)}`;
  },
  inlineNotificationColorInfoHover: props => {
    return `${resolveValue(props, props.theme.typographyColorHighEmphasis)}`;
  },
  inlineNotificationLinkFontWeightInfo: props => {
    return `${resolveValue(props, props.theme.inlineNotificationFontWeightInfo)}`;
  },
  inlineNotificationBackgroundColorWarning: 'rgba(253, 225, 89, 0.2)',
  inlineNotificationBorderColorWarning: 'rgba(255, 255, 255, 0.2)',
  inlineNotificationColorWarning: props => {
    return `${resolveValue(props, props.theme.typographyColorBody)}`;
  },
  inlineNotificationFontWeightWarning: props => {
    return `${resolveValue(props, props.theme.typographyFontWeightRegular)}`;
  },
  inlineNotificationColorWarningHover: props => {
    return `${resolveValue(props, props.theme.typographyColorHighEmphasis)}`;
  },
  inlineNotificationLinkFontWeightWarning: props => {
    return `${resolveValue(props, props.theme.inlineNotificationFontWeightWarning)}`;
  },
  inlineNotificationBackgroundColorError: 'rgba(255, 160, 173, 0.15)',
  inlineNotificationBorderColorError: 'rgba(255, 255, 255, 0.15)',
  inlineNotificationColorError: props => {
    return `${resolveValue(props, props.theme.typographyColorBody)}`;
  },
  inlineNotificationFontWeightError: props => {
    return `${resolveValue(props, props.theme.typographyFontWeightRegular)}`;
  },
  inlineNotificationColorErrorHover: props => {
    return `${resolveValue(props, props.theme.typographyColorHighEmphasis)}`;
  },
  inlineNotificationLinkFontWeightError: props => {
    return `${resolveValue(props, props.theme.inlineNotificationFontWeightError)}`;
  },
  inlineNotificationBackgroundColorSuccess: 'rgba(132, 224, 182, 0.2)',
  inlineNotificationBorderColorSuccess: 'rgba(255, 255, 255, 0.2)',
  inlineNotificationColorSuccess: props => {
    return `${resolveValue(props, props.theme.typographyColorBody)}`;
  },
  inlineNotificationFontWeightSuccess: props => {
    return `${resolveValue(props, props.theme.typographyFontWeightRegular)}`;
  },
  inlineNotificationColorSuccessHover: props => {
    return `${resolveValue(props, props.theme.typographyColorHighEmphasis)}`;
  },
  inlineNotificationLinkFontWeightSuccess: props => {
    return `${resolveValue(props, props.theme.inlineNotificationFontWeightSuccess)}`;
  },
  inlineNotificationBackgroundColorCritical: props => {
    return `${resolveValue(props, props.theme.colorStatusError)}`;
  },
  inlineNotificationBorderColorCritical: props => {
    return `${resolveValue(props, props.theme.colorStatusError)}`;
  },
  inlineNotificationColorCritical: props => {
    return `${resolveValue(props, props.theme.colorStatusErrorContrast)}`;
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
  inlineNotificationContainerJustifyContent: 'flex-start',
  inlineNotificationContainerAlignItems: 'center',
  inlineNotificationContainerJustifyContentVertical: 'flex-start',
  inlineNotificationContainerAlignItemsVertical: 'center',
  inlineNotificationContentPaddingInline: '0',
  inlineNotificationContentPaddingBlock: '4px',
  inlineNotificationContentJustifySelf: 'start',
  inlineNotificationContentAlignSelf: 'center',
  inlineNotificationContentAlignSelfVertical: 'flex-start',
  inlineNotificationIndicatorDisplay: 'inline-block',
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
  inlineNotificationActionsPaddingInline: '24px 4px',
  inlineNotificationActionsGap: '8px',
  inlineNotificationActionsMarginInlineStart: '24px',
  inlineNotificationActionsPaddingBlockVertical: '0 9px',
  inlineNotificationActionsPaddingInlineVertical: '0 16px',
  inlineNotificationActionsJustifySelfVertical: 'flex-start',
  inlineNotificationDismissMarginInlineStart: '8px',
  inlineNotificationDismissMarginBlock: '0',
  inlineNotificationDismissJustifySelf: 'flex-end',
  inlineNotificationDismissMarginBlockVertical: '3px',
  inlineNotificationLinkColorInfo: props => {
    return `${resolveValue(props, props.theme.typographyColorBody)}`;
  },
  inlineNotificationLinkColorInfoHover: props => {
    return `${resolveValue(props, props.theme.typographyColorHighEmphasis)}`;
  },
  inlineNotificationLinkColorWarning: props => {
    return `${resolveValue(props, props.theme.typographyColorBody)}`;
  },
  inlineNotificationLinkColorWarningHover: props => {
    return `${resolveValue(props, props.theme.typographyColorHighEmphasis)}`;
  },
  inlineNotificationLinkColorError: props => {
    return `${resolveValue(props, props.theme.typographyColorBody)}`;
  },
  inlineNotificationLinkColorErrorHover: props => {
    return `${resolveValue(props, props.theme.typographyColorHighEmphasis)}`;
  },
  inlineNotificationLinkColorSuccess: props => {
    return `${resolveValue(props, props.theme.typographyColorBody)}`;
  },
  inlineNotificationLinkColorSuccessHover: props => {
    return `${resolveValue(props, props.theme.typographyColorHighEmphasis)}`;
  },
  inlineNotificationLinkColorCritical: props => {
    return `${resolveValue(props, props.theme.colorStatusErrorContrast)}`;
  },
  inlineNotificationLinkColorCriticalHover: props => {
    return `${resolveValue(props, props.theme.colorStatusErrorContrast)}`;
  },
  inlineNotificationLinkFontWeightCritical: props => {
    return `${resolveValue(props, props.theme.typographyFontWeightMedium)}`;
  },
  inputGroupAddonButtonPaddingInline: '8px',
  inputGroupAddonButtonPaddingBlock: '8px',
  inputGroupAddonButtonColor: props => {
    return `${resolveValue(props, props.theme.typographyColorSecondary)}`;
  },
  inputGroupAddonButtonBackgroundColorActive: props => {
    return `${resolveValue(props, props.theme.buttonBackgroundColorFlatSecondaryActive)}`;
  },
  inputGroupAddonButtonGap: '2px',
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
  inputGroupBorderRadius: '2px',
  inputGroupColumnGap: '2px',
  inputGroupPaddingInlineStart: '12px',
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
  inputGroupWidth: '100%',
  inputGroupHeight: '32px',
  inputGroupHeightSmall: '24px',
  inputGroupBorderRadiusSmall: props => {
    return `${resolveValue(props, props.theme.inputGroupBorderRadius)}`;
  },
  inputGroupHeightLarge: '40px',
  inputGroupBorderColorDisabled: props => {
    return `${resolveValue(props, props.theme.textInputBorderColorDisabled)}`;
  },
  inputGroupColorDisabled: props => {
    return `rgba(${resolveValue(props, props.theme.colorBlackRgb)}, 0.3)`;
  },
  inputGroupBackgroundColorDisabled: props => {
    return `${resolveValue(props, props.theme.textInputBackgroundColorDisabled)}`;
  },
  inputGroupCursorDisabled: 'default',
  inputGroupBorderColorInvalid: props => {
    return `${resolveValue(props, props.theme.colorNegative)}`;
  },
  inputGroupBackgroundColorInvalid: props => {
    return `${resolveValue(props, props.theme.textInputBackgroundColorInvalid)}`;
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
  inputGroupBackgroundColorHoverInvalid: props => {
    return `${resolveValue(props, props.theme.textInputBackgroundColorHoverInvalid)}`;
  },
  inputGroupBoxShadowHoverInvalid: props => {
    return `${resolveValue(props, props.theme.textInputBoxShadowHoverInvalid)}`;
  },
  inputGroupBorderColorHoverInvalid: props => {
    return `${resolveValue(props, props.theme.textInputBorderColorHoverInvalid)}`;
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
  searchGroupBackgroundColor: props => {
    return `rgba(${resolveValue(props, props.theme.colorWhiteRgb)}, 0.1)`;
  },
  searchGroupBorderColor: 'transparent',
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
  loaderWidth: '32px',
  loaderBlockBackgroundColorPrimary: props => {
    return `${resolveValue(props, props.theme.colorPrimary)}`;
  },
  loaderBlockBackgroundColorSecondary: props => {
    return `${resolveValue(props, props.theme.colorGray80)}`;
  },
  loaderBlockBorderRadius: '50%',
  loaderBlockAnimationDuration: '2s',
  loaderBlockAnimationDelay: '200ms',
  loaderBlockAnimationTimingFunction: 'ease-in',
  loaderBlockSize: props => {
    return `calc(${resolveValue(props, props.theme.loaderWidth)} / 4)`;
  },
  loaderBlockOpacity: '1',
  loginPageWidth: '100vw',
  loginPageHeight: '100vh',
  loginPageBackgroundColor: props => {
    return `${resolveValue(props, props.theme.colorWhite)}`;
  },
  loginPageBackdropBackground: 'linear-gradient(\n    90deg,\n    #303a60 0%,\n    #2c3661 25%,\n    #394780 65%,\n    #146693 90%,\n    #088cb2 100%\n  )',
  loginPageBackdropBlendMode: 'multiply',
  loginPageBackdropBackgroundSm: props => {
    return `${resolveValue(props, props.theme.loginPageBackdropBackground)}`;
  },
  loginPageBackdropBackgroundMd: props => {
    return `${resolveValue(props, props.theme.loginPageBackdropBackground)}`;
  },
  loginPageBackdropBackgroundLg: props => {
    return `${resolveValue(props, props.theme.loginPageBackdropBackground)}`;
  },
  loginPageBackdropBackgroundXl: props => {
    return `${resolveValue(props, props.theme.loginPageBackdropBackground)}`;
  },
  loginPanelGap: props => {
    return `${resolveValue(props, props.theme.spacingM)}`;
  },
  loginPanelWidth: '426px',
  loginPanelHeight: 'auto',
  loginPanelBackdropFilter: 'none',
  loginPanelBackgroundColor: props => {
    return `${resolveValue(props, props.theme.elevationBackgroundColor2)}`;
  },
  loginPanelBoxShadow: '0px 10px 50px rgba(0, 0, 0, 0.1)',
  loginPanelBorder: 'none',
  loginPanelBorderRadius: '16px',
  loginPanelPaddingInline: props => {
    return `${resolveValue(props, props.theme.spacing4xl)}`;
  },
  loginPanelPaddingBlock: props => {
    return `${resolveValue(props, props.theme.spacing4xl)}`;
  },
  loginPanelGridTemplateAreas: '"brand brand" "title title" "form form" "language links"',
  loginPanelWidthSm: props => {
    return `${resolveValue(props, props.theme.loginPanelWidth)}`;
  },
  loginPanelBackgroundColorSm: props => {
    return `${resolveValue(props, props.theme.loginPanelBackgroundColor)}`;
  },
  loginPanelBorderRadiusSm: props => {
    return `${resolveValue(props, props.theme.loginPanelBorderRadius)}`;
  },
  loginPanelBoxShadowSm: props => {
    return `${resolveValue(props, props.theme.loginPanelBoxShadow)}`;
  },
  loginPanelMarginBlockStartSm: 'auto',
  loginPanelWidthMd: props => {
    return `${resolveValue(props, props.theme.loginPanelWidth)}`;
  },
  loginPanelWidthLg: props => {
    return `${resolveValue(props, props.theme.loginPanelWidth)}`;
  },
  loginAreaIconDisplay: 'none',
  loginIconSize: '70px',
  loginIconFontSize: '1.5rem',
  loginLanguageSelectPaddingInlineFlat: '10px',
  loginLanguageSelectPaddingBlockFlat: '0',
  loginLanguageSelectJustifySelf: 'start',
  loginLanguageSelectSize: '16px',
  loginAreaTitleMarginBlockStart: '8px',
  loginAreaTitleMarginBlockEnd: props => {
    return `calc(
    ${resolveValue(props, props.theme.spacing3xl)} - ${resolveValue(props, props.theme.loginPanelGap)}
  )`;
  },
  loginTitleMarginInline: '0 0',
  loginTitleMarginBlock: '0 0',
  loginTitleFontWeight: props => {
    return `${resolveValue(props, props.theme.typographyHeading1FontWeight)}`;
  },
  loginTitleFontSize: props => {
    return `${resolveValue(props, props.theme.typographyHeading1FontSize)}`;
  },
  loginTitleTextTransform: props => {
    return `${resolveValue(props, props.theme.typographyHeading1TextTransform)}`;
  },
  loginTitleColor: props => {
    return `${resolveValue(props, props.theme.typographyHeading1Color)}`;
  },
  loginTitleLineHeight: props => {
    return `${resolveValue(props, props.theme.typographyHeading1LineHeight)}`;
  },
  loginTitleLetterSpacing: 'initial',
  loginAreaFormMarginBlockEnd: props => {
    return `calc(
    ${resolveValue(props, props.theme.spacing4xl)} - ${resolveValue(props, props.theme.loginPanelGap)}
  )`;
  },
  loginFormActionGroupFontSize: '0.75rem',
  loginFormActionGroupMarginBlockStart: props => {
    return `calc(
    ${resolveValue(props, props.theme.spacing3xl)} - ${resolveValue(props, props.theme.formGap)}
  )`;
  },
  loginBrandImageDisplay: 'flex',
  loginBrandImageColor: props => {
    return `${resolveValue(props, props.theme.colorWhite)}`;
  },
  loginAreaLinksFontSize: '0.75rem',
  loginLinkTextDecoration: 'underline',
  loginLinkTextDecorationHover: 'underline',
  loginLinkSeparatorWidth: '1px',
  loginLinkSeparatorHeight: '12px',
  loginLinkSeparatorBorderRadius: '50%',
  loginLinkSeparatorBackgroundColor: 'transparent',
  loginVersionFontWeight: '400',
  loginVersionFontSize: '30px',
  loginVersionTextTransform: props => {
    return `${resolveValue(props, props.theme.typographyHeading2TextTransform)}`;
  },
  loginVersionColor: props => {
    return `${resolveValue(props, props.theme.typographyHeading2Color)}`;
  },
  loginVersionLineHeight: props => {
    return `${resolveValue(props, props.theme.typographyHeading2LineHeight)}`;
  },
  loginVersionLetterSpacing: 'initial',
  loginVersionMarginInline: '0',
  loginVersionMarginBlock: '0',
  loginVersionMarginBlockStart: '8px',
  loginTitleSecondaryFontWeight: props => {
    return `${resolveValue(props, props.theme.typographyHeading2FontWeight)}`;
  },
  loginTitleSecondaryFontSize: props => {
    return `${resolveValue(props, props.theme.typographyHeading2FontSize)}`;
  },
  loginTitleSecondaryTextTransform: props => {
    return `${resolveValue(props, props.theme.typographyHeading2TextTransform)}`;
  },
  loginTitleSecondaryLineHeight: props => {
    return `${resolveValue(props, props.theme.typographyHeading2LineHeight)}`;
  },
  loginTitleSecondaryLetterSpacing: 'initial',
  loginTitleSecondaryColor: props => {
    return `rgba(${resolveValue(props, props.theme.colorWhiteRgb)}, 0.65)`;
  },
  loginTitleSecondaryMarginBlock: '8px 0',
  loginTitleSecondaryMarginInline: '0',
  loginButtonBackgroundColor: props => {
    return `${resolveValue(props, props.theme.buttonBackgroundColorPrimary)}`;
  },
  loginButtonFontWeight: props => {
    return `${resolveValue(props, props.theme.buttonFontWeight)}`;
  },
  loginButtonHeight: props => {
    return `${resolveValue(props, props.theme.buttonHeightLarge)}`;
  },
  loginButtonBackgroundColorHover: props => {
    return `${resolveValue(props, props.theme.buttonBackgroundColorPrimaryHover)}`;
  },
  loginButtonBackgroundColorActive: props => {
    return `${resolveValue(props, props.theme.buttonBackgroundColorPrimaryActive)}`;
  },
  loginButtonBorderColorActive: props => {
    return `${resolveValue(props, props.theme.buttonBorderColorPrimaryActive)}`;
  },
  loginButtonBackgroundColorDisabled: props => {
    return `${resolveValue(props, props.theme.buttonBackgroundColorPrimaryDisabled)}`;
  },
  loginButtonBorderColorDisabled: props => {
    return `${resolveValue(props, props.theme.buttonBorderColorPrimaryDisabled)}`;
  },
  loginButtonColorDisabled: props => {
    return `${resolveValue(props, props.theme.buttonColorPrimaryDisabled)}`;
  },
  loginFooterPaddingBlock: '16px',
  loginFooterPaddingInline: '32px',
  loginFooterGap: '16px',
  loginFooterFlexDirection: 'column',
  loginFooterColor: 'inherit',
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
  mastheadBoxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
  mastheadColorPrimary: props => {
    return `${resolveValue(props, props.theme.colorWhite)}`;
  },
  mastheadBackgroundPrimary: 'linear-gradient(\n    90deg,\n    #303a60 0%,\n    #2c3661 25%,\n    #394780 65%,\n    #146693 90%,\n    #088cb2 100%\n  )',
  mastheadHeightPrimary: '56px',
  mastheadGapPrimary: '24px',
  mastheadBorderBottomWidthSecondary: '0',
  mastheadGridTemplateColumnsPrimary: 'auto 1fr auto',
  mastheadGridTemplateAreasPrimary: '"menu main actions"',
  mastheadBorderBottomColorPrimary: 'transparent',
  mastheadColorSecondary: props => {
    return `${resolveValue(props, props.theme.typographyColorBody)}`;
  },
  mastheadBackgroundSecondary: props => {
    return `${resolveValue(props, props.theme.colorGray20)}`;
  },
  mastheadHeightSecondary: '48px',
  mastheadBorderBottomColorSecondary: 'transparent',
  mastheadSeparatorWidth: '1px',
  mastheadSeparatorHeight: '18px',
  mastheadSeparatorMarginInline: '8px 16px',
  mastheadSeparatorBackgroundColor: props => {
    return `${resolveValue(props, props.theme.colorWhite)}`;
  },
  mastheadIconHeight: props => {
    return `${resolveValue(props, props.theme.mastheadHeightPrimary)}`;
  },
  mastheadIconFontSize: '20px',
  mastheadIconFontWeight: props => {
    return `${resolveValue(props, props.theme.typographyFontWeightBold)}`;
  },
  mastheadTitleFontWeight: props => {
    return `${resolveValue(props, props.theme.typographyFontWeightRegular)}`;
  },
  mastheadTitleFontSize: '18px',
  mastheadTitleMarginInline: '0 32px',
  mastheadTitleMarginBlock: '0',
  mastheadTitleLineHeight: '18px',
  mastheadTitleTextTransform: 'none',
  mastheadLogoColor: props => {
    return `${resolveValue(props, props.theme.colorWhite)}`;
  },
  mastheadVersionFontSize: '14px',
  mastheadVersionPaddingInlineStart: '16px',
  mastheadVersionLineHeight: '14px',
  mastheadTitleSecondaryMarginInlineStart: '4px',
  mastheadTitleSecondaryColor: props => {
    return `rgba(${resolveValue(props, props.theme.colorWhiteRgb)}, 0.65)`;
  },
  mastheadModuleFontSize: '18px',
  mastheadModuleFontLineHeight: '18px',
  mastheadModuleMarginInlineEnd: '32px',
  mastheadModuleColor: props => {
    return `${resolveValue(props, props.theme.colorWhite)}`;
  },
  mastheadMenuButtonPaddingInline: '0',
  mastheadMenuButtonPaddingBlock: '0',
  mastheadMenuButtonMarginInline: '8px -16px',
  mastheadMenuButtonDisplay: 'flex',
  mastheadMenuButtonAlignItems: 'center',
  mastheadTabListColumnGap: '0',
  mastheadTabListMarginInlineStart: '-12px',
  mastheadTabListMarginInlineEnd: '-12px',
  mastheadTabPaddingInline: '12px',
  mastheadTabPaddingBlock: '0',
  mastheadTabFontWeight: props => {
    return `${resolveValue(props, props.theme.typographyFontWeightRegular)}`;
  },
  mastheadTabFontWeightSelected: props => {
    return `${resolveValue(props, props.theme.typographyFontWeightMedium)}`;
  },
  mastheadTabBoxShadowFocused: props => {
    return `inset ${resolveValue(props, props.theme.tabBoxShadowFocused)}`;
  },
  mastheadTabColorPrimary: props => {
    return `${resolveValue(props, props.theme.colorGray90)}`;
  },
  mastheadTabFontSizePrimary: '16px',
  mastheadTabColorPrimaryDisabled: props => {
    return `rgba(${resolveValue(props, props.theme.colorWhiteRgb)}, 0.35)`;
  },
  mastheadTabBackgroundColorPrimaryDisabled: 'transparent',
  mastheadTabBackgroundColorPrimaryHover: 'transparent',
  mastheadTabBackgroundColorPrimaryActive: 'transparent',
  mastheadTabBackgroundColorPrimaryFocus: 'transparent',
  mastheadTabColorPrimarySelected: props => {
    return `${resolveValue(props, props.theme.colorWhite)}`;
  },
  mastheadTabColorPrimaryHover: props => {
    return `${resolveValue(props, props.theme.colorWhite)}`;
  },
  mastheadTabColorSecondary: props => {
    return `${resolveValue(props, props.theme.colorWhite)}`;
  },
  mastheadTabFontSizeSecondary: '12px',
  mastheadTabColorSecondaryDisabled: props => {
    return `${resolveValue(props, props.theme.mastheadTabColorPrimaryDisabled)}`;
  },
  mastheadTabBackgroundColorSecondaryDisabled: 'transparent',
  mastheadTabBackgroundColorSecondaryHover: props => {
    return `${resolveValue(props, props.theme.colorSecondaryHover)}`;
  },
  mastheadTabBackgroundColorSecondaryActive: props => {
    return `${resolveValue(props, props.theme.colorSecondaryActive)}`;
  },
  mastheadTabBackgroundColorSecondaryFocus: props => {
    return `${resolveValue(props, props.theme.colorSecondaryFocus)}`;
  },
  mastheadTabColorSecondarySelected: props => {
    return `${resolveValue(props, props.theme.typographyColorHighEmphasis)}`;
  },
  mastheadTabIndicatorWidthSelected: 'calc(100% - 24px)',
  mastheadTabIndicatorBackgroundColorPrimary: props => {
    return `${resolveValue(props, props.theme.colorWhite)}`;
  },
  mastheadTabIndicatorBackgroundColorSecondary: props => {
    return `${resolveValue(props, props.theme.colorWhite)}`;
  },
  mastheadActionsGap: '24px',
  mastheadActionsPaddingInlineStart: '0',
  mastheadActionsPaddingInlineEnd: props => {
    return `${resolveValue(props, props.theme.mastheadGapPrimary)}`;
  },
  mastheadActionsPaddingInline: props => {
    return `${resolveValue(props, props.theme.mastheadActionsPaddingInlineStart)}
    ${resolveValue(props, props.theme.mastheadActionsPaddingInlineEnd)}`;
  },
  mastheadActionsGapSecondary: '0px',
  mastheadActionBackgroundColor: 'transparent',
  mastheadActionColor: props => {
    return `${resolveValue(props, props.theme.colorWhite)}`;
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
  mastheadActionBackgroundColorHover: 'rgba(0, 0, 0, 0.2)',
  mastheadActionBackgroundColorActive: 'rgba(0, 0, 0, 0.35)',
  mastheadActionBackgroundColorFocus: 'transparent',
  mastheadAvatarMarginInlineStart: '2px',
  mastheadMainContentMarginInlineStart: '-4px',
  mastheadMyAviatorMarginInlineStart: '10px',
  menuMinWidth: 'initial',
  menuFilter: 'none',
  menuBorderRadius: '2px',
  menuBoxShadow: props => {
    return `${resolveValue(props, props.theme.elevationBoxShadow4)}`;
  },
  menuBorderWidth: '1px',
  menuBorderStyle: 'solid',
  menuBorderColor: props => {
    return `${resolveValue(props, props.theme.elevationBorderColor4)}`;
  },
  menuBorder: props => {
    return `${resolveValue(props, props.theme.menuBorderWidth)} ${resolveValue(props, props.theme.menuBorderStyle)}
    ${resolveValue(props, props.theme.menuBorderColor)}`;
  },
  menuBackgroundColor: props => {
    return `${resolveValue(props, props.theme.elevationBackgroundColor4)}`;
  },
  menuPaddingInline: '0',
  menuPaddingBlock: '0',
  menuArrowSize: '8px',
  menuArrowInsetInlineStart: '34px',
  menuArrowInsetInlineEnd: props => {
    return `${resolveValue(props, props.theme.menuArrowInsetInlineStart)}`;
  },
  menuContentMinWidth: '160px',
  menuContentGap: '0',
  menuItemHeight: 'auto',
  menuItemMinHeight: '32px',
  menuItemPaddingInlineStart: '12px',
  menuItemBorderRadius: '0',
  menuItemPaddingInlineEnd: props => {
    return `${resolveValue(props, props.theme.menuItemPaddingInlineStart)}`;
  },
  menuItemPaddingBlockStart: '6px',
  menuItemPaddingBlockEnd: props => {
    return `${resolveValue(props, props.theme.menuItemPaddingBlockStart)}`;
  },
  menuItemPaddingInline: props => {
    return `${resolveValue(props, props.theme.menuItemPaddingInlineStart)}
    ${resolveValue(props, props.theme.menuItemPaddingInlineEnd)}`;
  },
  menuItemPaddingBlock: props => {
    return `${resolveValue(props, props.theme.menuItemPaddingBlockStart)}
    ${resolveValue(props, props.theme.menuItemPaddingBlockEnd)}`;
  },
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
    return `${resolveValue(props, props.theme.typographyColorBody)}`;
  },
  menuItemFontSize: props => {
    return `${resolveValue(props, props.theme.typographyFontSize)}`;
  },
  menuItemFontWeight: props => {
    return `${resolveValue(props, props.theme.typographyFontWeightRegular)}`;
  },
  menuItemCursor: 'pointer',
  menuItemWhiteSpace: 'nowrap',
  menuItemOverflow: 'hidden',
  menuItemTextOverflow: 'ellipsis',
  menuItemContainerWidth: 'auto',
  menuItemLineHeight: 'normal',
  menuItemColumnGap: '8px',
  menuItemBackgroundColorHover: props => {
    return `rgba(${resolveValue(props, props.theme.colorWhiteRgb)}, 0.1)`;
  },
  menuItemBackgroundColorActive: props => {
    return `${resolveValue(props, props.theme.menuItemBackgroundColorHover)}`;
  },
  menuItemBackgroundColorFocus: props => {
    return `${resolveValue(props, props.theme.menuItemBackgroundColorHover)}`;
  },
  menuItemBoxShadowFocus: props => {
    return `inset 0 0 0 ${resolveValue(props, props.theme.focusOutlineWidth)}
    ${resolveValue(props, props.theme.focusOutlineColor)}`;
  },
  menuItemColorDisabled: props => {
    return `${resolveValue(props, props.theme.typographyColorDisabled)}`;
  },
  menuItemCursorDisabled: 'default',
  menuItemBackgroundColorSelected: props => {
    return `rgba(${resolveValue(props, props.theme.colorWhiteRgb)}, 0.2)`;
  },
  menuItemFontWeightSelected: props => {
    return `${resolveValue(props, props.theme.typographyFontWeightMedium)}`;
  },
  menuItemColorSelected: props => {
    return `${resolveValue(props, props.theme.typographyColorHighEmphasis)}`;
  },
  menuItemPaddingInlineSubmenu: props => {
    return `${resolveValue(props, props.theme.menuItemPaddingInline)}`;
  },
  menuItemGapSubmenu: props => {
    return `${resolveValue(props, props.theme.spacingXs)}`;
  },
  menuItemBackgroundColorSubmenuExpanded: props => {
    return `${resolveValue(props, props.theme.menuItemBackgroundColor)}`;
  },
  menuItemBackgroundColorSubmenuExpandedHover: props => {
    return `${resolveValue(props, props.theme.menuItemBackgroundColorHover)}`;
  },
  menuSubmenuMarginInline: '0',
  submenuItemIndicatorSize: '16px',
  submenuItemIndicatorMarginInlineEnd: '-4px',
  menuGroupHeaderPaddingBlockStart: '10px',
  menuGroupHeaderPaddingInlineEnd: '12px',
  menuGroupHeaderPaddingBlockEnd: '6px',
  menuGroupHeaderPaddingInlineStart: '12px',
  menuGroupHeaderPaddingInline: props => {
    return `${resolveValue(props, props.theme.menuGroupHeaderPaddingInlineStart)}
    ${resolveValue(props, props.theme.menuGroupHeaderPaddingInlineEnd)}`;
  },
  menuGroupHeaderPaddingBlock: props => {
    return `${resolveValue(props, props.theme.menuGroupHeaderPaddingBlockStart)}
    ${resolveValue(props, props.theme.menuGroupHeaderPaddingBlockEnd)}`;
  },
  menuGroupHeaderColor: props => {
    return `${resolveValue(props, props.theme.colorGray70)}`;
  },
  menuGroupHeaderFontSize: props => {
    return `${resolveValue(props, props.theme.typographyFontSizeSmall)}`;
  },
  menuGroupHeaderFontWeight: '400',
  menuGroupHeaderLineHeight: 'normal',
  menuGroupHeaderCursor: 'default',
  menuDividerHeight: '5px',
  menuDividerThickness: '1px',
  menuDividerBackgroundColor: props => {
    return `${resolveValue(props, props.theme.elevationBorderColor4)}`;
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
    return `${resolveValue(props, props.theme.elevationBackgroundColor1)}`;
  },
  multiValueChipBorderWidth: '1px',
  multiValueChipBorderStyle: 'solid',
  multiValueChipBorderColor: props => {
    return `${resolveValue(props, props.theme.colorGray25)}`;
  },
  multiValueChipBoxShadow: props => {
    return `${resolveValue(props, props.theme.elevationBoxShadow1)}`;
  },
  multiValueChipPaddingInline: '8px 4px',
  multiValueChipBorderRadius: '12px',
  multiValueChipHeight: '24px',
  multiValueChipGap: '4px',
  multiValueChipCursor: 'default',
  multiValueChipTransition: 'background 100ms, border-color 100ms, box-shadow 100ms',
  multiValueChipTransitionTimingFunction: 'ease-out',
  multiValueChipBackgroundHover: props => {
    return `${resolveValue(props, props.theme.colorPrimaryFlatHover)}`;
  },
  multiValueChipBorderColorHover: props => {
    return `${resolveValue(props, props.theme.colorGray25)}`;
  },
  multiValueChipBoxShadowHover: props => {
    return `${resolveValue(props, props.theme.elevationBoxShadowColor2)}`;
  },
  multiValueChipBackgroundExpandedHover: props => {
    return `${resolveValue(props, props.theme.elevationBackgroundColor1)}`;
  },
  multiValueChipBorderColorExpandedHover: props => {
    return `${resolveValue(props, props.theme.colorGray25)}`;
  },
  multiValueChipBoxShadowExpandedHover: props => {
    return `${resolveValue(props, props.theme.elevationBoxShadow2)}`;
  },
  multiValueChipBackgroundActive: props => {
    return `${resolveValue(props, props.theme.colorPrimaryFlatActive)}`;
  },
  multiValueChipBorderColorActive: props => {
    return `${resolveValue(props, props.theme.colorGray25)}`;
  },
  multiValueChipBoxShadowActive: props => {
    return `${resolveValue(props, props.theme.elevationBoxShadowColor1)}`;
  },
  multiValueChipBackgroundExpandedActive: props => {
    return `${resolveValue(props, props.theme.elevationBackgroundColor1)}`;
  },
  multiValueChipBorderColorExpandedActive: props => {
    return `${resolveValue(props, props.theme.colorGray25)}`;
  },
  multiValueChipBoxShadowExpandedActive: props => {
    return `${resolveValue(props, props.theme.elevationBoxShadow1)}`;
  },
  multiValueChipOutlineFocus: props => {
    return `2px solid ${resolveValue(props, props.theme.focusOutlineColor)}`;
  },
  multiValueChipOutlineOffsetFocus: '2px',
  multiValueChipBackgroundDisabled: '#00000005',
  multiValueChipBorderColorDisabled: '#0000001a',
  multiValueChipBoxShadowDisabled: 'none',
  multiValueChipBackgroundReadonly: props => {
    return `${resolveValue(props, props.theme.multiValueChipBackground)}`;
  },
  multiValueChipBorderColorReadonly: props => {
    return `${resolveValue(props, props.theme.colorGray25)}`;
  },
  multiValueChipBackgroundReadonlyHover: props => {
    return `${resolveValue(props, props.theme.multiValueChipBackgroundReadonly)}`;
  },
  multiValueChipBorderColorReadonlyHover: props => {
    return `${resolveValue(props, props.theme.multiValueChipBorderColorReadonly)}`;
  },
  multiValueChipBackgroundReadonlyActive: props => {
    return `${resolveValue(props, props.theme.multiValueChipBackgroundReadonly)}`;
  },
  multiValueChipBorderColorReadonlyActive: props => {
    return `${resolveValue(props, props.theme.multiValueChipBorderColorReadonly)}`;
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
    return `${resolveValue(props, props.theme.typographyColorSecondary)}`;
  },
  multiValueChipLabelMarginBlock: '3px',
  multiValueChipLabelWhiteSpace: 'nowrap',
  multiValueChipLabelColorDisabled: props => {
    return `${resolveValue(props, props.theme.typographyColorDisabled)}`;
  },
  multiValueChipLabelColorReadonly: props => {
    return `${resolveValue(props, props.theme.multiValueChipLabelColor)}`;
  },
  multiValueChipButtonWidth: '18px',
  multiValueChipButtonHeight: '18px',
  multiValueChipButtonBorderRadius: '2px',
  multiValueChipButtonMarginBlock: '2px',
  multiValueChipButtonFontSize: '16px',
  multiValueChipButtonColor: props => {
    return `${resolveValue(props, props.theme.typographyColor)}`;
  },
  multiValueChipButtonBackground: 'transparent',
  multiValueChipButtonBackgroundHover: props => {
    return `${resolveValue(props, props.theme.colorSecondaryFlatHover)}`;
  },
  multiValueChipButtonBackgroundActive: props => {
    return `${resolveValue(props, props.theme.colorSecondaryFlatActive)}`;
  },
  multiValueChipButtonBoxShadowFocus: props => {
    return `${resolveValue(props, props.theme.focusIndicatorBoxShadow)}`;
  },
  multiValueChipButtonColorDisabled: props => {
    return `${resolveValue(props, props.theme.typographyColorDisabled)}`;
  },
  multiValueChipsColor: props => {
    return `${resolveValue(props, props.theme.typographyColorTertiary)}`;
  },
  multiValueChipsFontSize: '12px',
  multiValueChipsLineHeight: '16px',
  multiValueChipsFontWeight: '400',
  multiValueChipsMarginBlock: '3px',
  multiValueChipsColorDisabled: props => {
    return `${resolveValue(props, props.theme.typographyColorDisabled)}`;
  },
  myAviatorButtonPaddingInline: '12px',
  myAviatorButtonGap: '6px',
  myAviatorButtonHeight: '32px',
  myAviatorButtonBackground: 'transparent',
  myAviatorButtonBorderWidth: '1px',
  myAviatorButtonBorderStyle: 'solid',
  myAviatorButtonBorderColor: 'transparent',
  myAviatorButtonBorderRadius: '16px',
  myAviatorButtonCursor: 'pointer',
  myAviatorButtonTransition: 'grid-template-columns 0.5s linear, gap 0.5s linear,\n    background 0.2s linear, border-color 0.2s linear',
  myAviatorButtonBackgroundHover: 'transparent',
  myAviatorButtonBorderColorHover: 'transparent',
  myAviatorButtonBackgroundActive: 'transparent',
  myAviatorButtonBorderColorActive: 'transparent',
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
  myAviatorButtonLabelColor: 'transparent',
  myAviatorButtonLabelTransition: 'opacity 0.5s linear',
  myAviatorButtonLabelColorHover: 'transparent',
  myAviatorButtonLabelColorActive: 'transparent',
  myAviatorButtonIconColor: 'transparent',
  myAviatorButtonIconSize: '16px',
  myAviatorButtonIconColorHover: 'transparent',
  myAviatorButtonIconColorActive: 'transparent',
  navigationDrawerWidthMinimized: '56px',
  navigationTreeDrawerWidthMinimized: '24px',
  navigationHeaderGridTemplateAreas: '"content minimize-button"',
  navigationHeaderGridTemplateColumns: '1fr auto',
  navigationHeaderHeight: '48px',
  navigationHeaderPaddingInline: '8px',
  navigationHeaderPaddingBlock: '8px',
  navigationHeaderGap: '8px',
  navigationHeaderBoxShadow: props => {
    return `inset 0px -1px 0px ${resolveValue(props, props.theme.colorGray25)}`;
  },
  navigationHeaderPaddingInlineMinimized: '0',
  navigationHeaderPaddingBlockMinimized: '0',
  navigationItemColor: props => {
    return `${resolveValue(props, props.theme.typographyColorBody)}`;
  },
  navigationItemFontWeight: props => {
    return `${resolveValue(props, props.theme.typographyFontWeightRegular)}`;
  },
  navigationItemColumnGap: '6px',
  navigationItemPaddingInline: '8px',
  navigationItemHeight: '32px',
  navigationItemHeightSmall: '24px',
  navigationItemHeightLarge: '48px',
  navigationItemBorder: 'none',
  navigationItemBorderRadius: '0',
  navigationItemPaddingMultiplier: '22px',
  navigationItemInset: props => {
    return `calc(
    ${resolveValue(props, props.theme.navigationItemExpanderWidth)} + ${resolveValue(props, props.theme.navigationItemColumnGap)}
  )`;
  },
  navigationItemPaddingInlineStartSingleLevel: '16px',
  navigationItemPaddingInlineStartMinimized: '24px',
  navigationItemPaddingInlineStartNoChildren: '30px',
  navigationItemPaddingInlineStartChildren: '0px',
  navigationItemBackgroundColorHover: props => {
    return `${resolveValue(props, props.theme.colorSecondaryHover)}`;
  },
  navigationItemBoxShadowFocus: props => {
    return `inset 0 0 0 ${resolveValue(props, props.theme.focusOutlineWidth)}
    ${resolveValue(props, props.theme.focusOutlineColor)}`;
  },
  navigationItemBoxShadowActive: props => {
    return `inset 3px 0 0 ${resolveValue(props, props.theme.colorWhite)}`;
  },
  navigationItemBoxShadowActiveFocus: props => {
    return `${resolveValue(props, props.theme.navigationItemBoxShadowActive)},
    ${resolveValue(props, props.theme.navigationItemBoxShadowFocus)}`;
  },
  navigationItemColorActive: props => {
    return `${resolveValue(props, props.theme.typographyColorHighEmphasis)}`;
  },
  navigationItemFontWeightActive: props => {
    return `${resolveValue(props, props.theme.typographyFontWeightMedium)}`;
  },
  navigationItemBackgroundColorActive: props => {
    return `${resolveValue(props, props.theme.colorSecondaryHover)}`;
  },
  navigationItemBackgroundColorActiveHover: props => {
    return `${resolveValue(props, props.theme.colorSecondaryActive)}`;
  },
  navigationItemBackgroundColorExpanded: props => {
    return `${resolveValue(props, props.theme.colorGray30)}`;
  },
  navigationItemBackgroundColorChildrenExpanded: props => {
    return `${resolveValue(props, props.theme.colorGray30)}`;
  },
  navigationItemColumnGapMinimized: '0',
  navigationItemPaddingStartMinimized: '4px',
  navigationItemExpanderWidth: '1.5rem',
  navigationItemExpanderHeight: '100%',
  navigationItemExpanderFontSize: '1rem',
  navigationItemExpanderColor: props => {
    return `${resolveValue(props, props.theme.typographyColorBody)}`;
  },
  navigationItemExpanderCursor: 'pointer',
  navigationItemExpanderIconTransformExpanded: 'rotate(90deg)',
  navigationItemExpanderIconTransformRtl: 'scale(-1, 1)',
  navigationItemExpanderIconTransformExpandedRtl: 'scale(-1, 1) rotate(90deg)',
  navigationItemLinkColumnGap: '6px',
  navigationItemLinkTextDecoration: 'none',
  navigationItemLinkIconFontSize: '16px',
  navigationItemLinkIconWidth: '16px',
  navigationItemLinkIconHeight: props => {
    return `${resolveValue(props, props.theme.navigationItemLinkIconWidth)}`;
  },
  navigationItemLinkIconColor: props => {
    return `${resolveValue(props, props.theme.typographyColorBody)}`;
  },
  navigationItemTitleFontSize: '14px',
  navigationItemTitleFontWeight: '400',
  navigationItemTitleLineHeight: '18px',
  navigationItemTitleColor: props => {
    return `${resolveValue(props, props.theme.typographyColorBody)}`;
  },
  navigationItemTitleDisplayMinimized: 'none',
  navigationItemTitleFontSizeChildren: '14px',
  navigationTreeDisplayMinimized: 'none',
  navigationTreeItemColumnGap: '6px',
  navigationTreeItemMarginInline: '0',
  navigationTreeItemPaddingInlineStart: '8px',
  navigationTreeItemPaddingInlineEnd: '8px',
  navigationTreeItemPaddingMultiplier: '22px',
  navigationTreeItemColor: props => {
    return `${resolveValue(props, props.theme.typographyColorBody)}`;
  },
  navigationTreeItemFontWeight: props => {
    return `${resolveValue(props, props.theme.typographyFontWeightRegular)}`;
  },
  navigationTreeItemBorder: 'none',
  navigationTreeItemBorderRadius: '0',
  navigationTreeItemHeight: '32px',
  navigationTreeItemHeightSmall: '24px',
  navigationTreeItemHeightLarge: '48px',
  navigationTreeItemBackgroundColor: 'transparent',
  navigationTreeItemBackgroundColorActive: props => {
    return `${resolveValue(props, props.theme.colorSecondaryActive)}`;
  },
  navigationTreeItemFontWeightActive: props => {
    return `${resolveValue(props, props.theme.typographyFontWeightMedium)}`;
  },
  navigationTreeItemBoxShadowFocus: props => {
    return `${resolveValue(props, props.theme.navigationItemBoxShadowFocus)}`;
  },
  navigationTreeItemBackgroundColorHover: props => {
    return `${resolveValue(props, props.theme.colorSecondaryHover)}`;
  },
  navigationTreeItemBackgroundColorActiveHover: 'rgba(255, 255, 255, 0.25)',
  navigationTreeChildrenBackgroundColor: 'transparent',
  navigationMinimizeButtonSize: '12px',
  navigationMinimizeButtonColor: props => {
    return `${resolveValue(props, props.theme.typographyColor)}`;
  },
  navigationMinimizeButtonTransform: 'none',
  navigationMinimizeButtonTransformMinimized: 'rotate(180deg)',
  navigationMinimizeButtonTransformRtl: 'scale(-1, 1)',
  navigationMinimizeButtonTransformMinimizedRtl: 'scale(-1, 1) rotate(180deg)',
  navigationSearchPaddingInline: '16px',
  navigationSearchHeight: '48px',
  notificationBackgroundColor: props => {
    return `${resolveValue(props, props.theme.elevationBackgroundColor3)}`;
  },
  notificationBoxShadow: props => {
    return `${resolveValue(props, props.theme.elevationBoxShadow3)}`;
  },
  notificationBorderWidth: '1px',
  notificationBorderStyle: 'solid',
  notificationBorderColor: props => {
    return `${resolveValue(props, props.theme.elevationBorderColor3)}`;
  },
  notificationBorder: props => {
    return `${resolveValue(props, props.theme.notificationBorderWidth)} ${resolveValue(props, props.theme.notificationBorderStyle)} ${resolveValue(props, props.theme.notificationBorderColor)}`;
  },
  notificationBorderRadius: '4px',
  notificationZIndex: '1000',
  notificationInset: '16px',
  notificationAnimationDuration: '0.25s',
  notificationBorderTopWidth: '1px',
  notificationBorderRightWidth: '1px',
  notificationBorderBottomWidth: '1px',
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
  notificationToastWidth: '572px',
  notificationToastLayoutMinHeight: '40px',
  notificationToastLayoutGap: '12px',
  notificationToastLayoutPaddingInline: props => {
    return `${resolveValue(props, props.theme.spacingM)} ${resolveValue(props, props.theme.spacingXs)}`;
  },
  notificationToastLayoutPaddingBlock: props => {
    return `${resolveValue(props, props.theme.spacingXs)} ${resolveValue(props, props.theme.spacingXs)}`;
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
  notificationContentPaddingBlockStartToast: '3px',
  notificationContentFontSize: '14px',
  notificationFooterGap: props => {
    return `${resolveValue(props, props.theme.spacingM)}`;
  },
  notificationFooterMarginInline: '0 0',
  notificationFooterMarginBlock: props => {
    return `${resolveValue(props, props.theme.spacingM)} 0`;
  },
  notificationFooterColor: props => {
    return `${resolveValue(props, props.theme.colorGray90)}`;
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
    return `${resolveValue(props, props.theme.elevationBackgroundColor3)}`;
  },
  pageTabMenuBorder: props => {
    return `1px solid ${resolveValue(props, props.theme.elevationBoxShadowColor3)}`;
  },
  pageTabMenuBoxShadow: props => {
    return `${resolveValue(props, props.theme.elevationBoxShadow4)}`;
  },
  pageTabMenuPaddingBlock: props => {
    return `${resolveValue(props, props.theme.spacingXxs)}`;
  },
  pageTabMenuPaddingInline: props => {
    return `${resolveValue(props, props.theme.spacingXxs)}`;
  },
  pageTabMenuHeight: '395px',
  pageTabMenuMaxHeight: '395px',
  pageTabMenuMinHeight: '50px',
  pageTabMenuMaxWidth: '320px',
  pageTabMenuMinWidth: '176px',
  pageTabMenuBorderRadius: '12px',
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
    ${resolveValue(props, props.theme.elevationBackgroundColor3)} 0%,
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
    ${resolveValue(props, props.theme.elevationBackgroundColor3)} 0%,
    transparent 100%
  )`;
  },
  pageTabMenuListItemHeight: '32px',
  pageTabMenuListItemBackground: 'transparent',
  pageTabMenuListItemBorder: 'none',
  pageTabMenuListItemColor: props => {
    return `${resolveValue(props, props.theme.typographyColorTertiary)}`;
  },
  pageTabMenuListItemBorderRadius: '8px',
  pageTabMenuListItemPaddingInline: '16px',
  pageTabMenuListItemPaddingBlock: '8px',
  pageTabMenuListItemFontFamily: 'inherit',
  pageTabMenuListItemColumnGap: '8px',
  pageTabMenuListItemTransition: 'background 100ms ease-out',
  pageTabMenuListItemBackgroundHover: 'transparent',
  pageTabMenuListItemBackgroundActive: 'transparent',
  pageTabMenuListItemBackgroundSelected: 'transparent',
  pageTabMenuListItemBackgroundSelectedHover: 'transparent',
  pageTabMenuListItemFontWeightSelected: '700',
  pageMenuListItemIconFontSize: '16px',
  pageTabMenuListItemLabelFontSize: '13px',
  pageTabMenuListItemLabelFontWeight: '400',
  pageTabMenuListItemLabelLineHeight: '16px',
  pageTabMenuListItemDismissWidth: '24px',
  pageTabMenuListItemDismissHeight: '24px',
  pageTabMenuListItemDismissBorderRadius: '4px',
  pageTabMenuListItemDismissPaddingInline: '4px',
  pageTabMenuListItemDismissPaddingBlock: '4px',
  pageTabMenuListItemDismissColor: props => {
    return `${resolveValue(props, props.theme.typographyColorTertiary)}`;
  },
  pageTabMenuListItemDismissBackgroundHover: 'transparent',
  pageTabMenuListItemDismissBackgroundActive: 'transparent',
  pageTabMenuListItemDismissOutlineFocus: props => {
    return `${resolveValue(props, props.theme.focusIndicatorOutline)}`;
  },
  pageTabMenuListEmptyPaddingBlock: '16px',
  pageTabMenuListEmptyPaddingInline: '16px',
  pageTabMenuListEmptyGap: '8px',
  pageTabMenuListEmptyIconSize: '110px',
  pageTabMenuListEmptyMessageFontSize: '16px',
  pageTabMenuListEmptyMessageFontWeight: '350',
  pageTabMenuListEmptyMessageLineHeight: '20px',
  pageTabMenuListEmptyMessageColor: props => {
    return `${resolveValue(props, props.theme.typographyColorSecondary)}`;
  },
  pageTabMenuFooterPaddingBlock: '12px',
  pageTabMenuFooterPaddingInline: '12px',
  pageTabGroupHeaderColumnGap: '8px',
  pageTabGroupHeaderMarginInlineEnd: '12px',
  pageTabGroupListContainerMaxWidth: 'calc(100% - 32px)',
  pageTabGroupListContainerFadeBackgroundStart: 'linear-gradient(\n    to left,\n    transparent 0%,\n    rgba(255, 255, 255, 0.5) 100%\n  )',
  pageTabGroupListContainerFadeBackgroundEnd: 'linear-gradient(\n    to right,\n    transparent 0%,\n    rgba(255, 255, 255, 0.5) 100%\n  )',
  pageTabGroupListColumnGap: '4px',
  pageTabPanelBackground: props => {
    return `${resolveValue(props, props.theme.elevationBackgroundColor1)}`;
  },
  pageTabPanelBorder: props => {
    return `1px solid ${resolveValue(props, props.theme.elevationBorderColor1)}`;
  },
  pageTabPanelMinHeight: '100px',
  pageTabPanelMarginBlockStart: '-1px',
  pageTabPanelBorderRadius: '0px 12px 12px 12px',
  pageTabPanelColor: props => {
    return `${resolveValue(props, props.theme.typographyColorHighEmphasis)}`;
  },
  pageTabButtonMinWidth: '110px',
  pageTabButtonMaxWidth: '240px',
  pageTabButtonGap: '4px',
  pageTabButtonBackground: props => {
    return `${resolveValue(props, props.theme.elevationBackgroundColorBase)}`;
  },
  pageTabButtonBorderWidth: '1px',
  pageTabButtonBorderColor: props => {
    return `${resolveValue(props, props.theme.elevationBorderColorBase)}`;
  },
  pageTabButtonBorderRadius: '6px 6px 0px 0px',
  pageTabButtonTransition: 'background 100ms ease-out, border-color 100ms ease-out',
  pageTabButtonHeightSm: '32px',
  pageTabButtonHeightMd: '40px',
  pageTabButtonBackgroundSelected: props => {
    return `${resolveValue(props, props.theme.elevationBackgroundColor1)}`;
  },
  pageTabButtonBackgroundHover: 'transparent',
  pageTabButtonBorderColorHover: 'transparent',
  pageTabButtonBorderWidthHover: '2px 2px 0 2px',
  pageTabButtonBackgroundActive: props => {
    return `${resolveValue(props, props.theme.elevationBackgroundColor1)}`;
  },
  pageTabButtonBorderColorActive: props => {
    return `${resolveValue(props, props.theme.elevationBackgroundColor1)}`;
  },
  pageTabButtonBorderWidthActive: '2px 2px 0 2px',
  pageTabButtonOutlineFocus: props => {
    return `2px solid ${resolveValue(props, props.theme.focusOutlineColor)}`;
  },
  pageTabButtonOutlineOffsetFocus: '1px',
  pageTabButtonBackgroundSelectedHover: 'transparent',
  pageTabButtonLabelPaddingInlineEnd: '16px',
  pageTabButtonLabelFontSize: '13px',
  pageTabButtonLabelFontWeight: '400',
  pageTabButtonLabelLineHeight: '18px',
  pageTabButtonLabelColor: props => {
    return `${resolveValue(props, props.theme.typographyColorHighEmphasis)}`;
  },
  pageTabButtonLabelBackground: 'linear-gradient(\n    to right,\n    rgba(0, 0, 0, 1) 0%,\n    rgba(0, 0, 0, 1) calc(100% - 24px),\n    rgba(0, 0, 0, 0) calc(100% - 16px)\n  )',
  pageTabButtonLabelFontWeightSelected: '600',
  pageTabButtonLabelBackgroundHover: 'linear-gradient(\n    to right,\n    rgba(0, 0, 0, 1) 0%,\n    rgba(0, 0, 0, 1) calc(100% - 27px),\n    rgba(0, 0, 0, 0) calc(100% - 19px)\n  )',
  pageTabButtonDismissButtonOpacity: '0',
  pageTabButtonDismissButtonWidth: '24px',
  pageTabButtonDismissButtonHeight: '24px',
  pageTabButtonDismissButtonBackground: 'transparent',
  pageTabButtonDismissButtonBorderRadius: '4px',
  pageTabButtonDismissButtonPaddingInline: '0',
  pageTabButtonDismissButtonPaddingBlock: '0',
  pageTabButtonDismissButtonFontSize: '16px',
  pageTabButtonDismissButtonInsetInlineEnd: '3px',
  pageTabButtonDismissButtonBorder: 'none',
  pageTabButtonDismissButtonOpacityHover: '1',
  pageTabButtonDismissButtonBackgroundHover: 'transparent',
  pageTabButtonDismissButtonBackgroundActive: 'transparent',
  pageTabButtonDismissButtonOpacitySelected: '1',
  paginationGap: '16px',
  paginationMarginInlineStart: '0',
  paginationMarginInlineStartAlignEnd: '0',
  paginationListBorderColor: props => {
    return `${resolveValue(props, props.theme.colorPrimary)}`;
  },
  paginationListBorder: props => {
    return `1px solid ${resolveValue(props, props.theme.paginationListBorderColor)}`;
  },
  paginationListBorderRadius: '2px',
  pagaintionListHeight: '32px',
  paginationItemBorderRadius: '0',
  paginationListBorderFlat: 'none',
  paginationItemBackgroundColor: 'transparent',
  paginationItemWidth: '40px',
  paginationArrowWidth: '48px',
  paginationArrowSize: '16px',
  paginationArrowGap: '0',
  paginationArrowBorderRadius: '0',
  paginationArrowBackgroundColorDisabled: props => {
    return `${resolveValue(props, props.theme.colorSecondaryFlatHover)}`;
  },
  paginationArrowColorDisabled: props => {
    return `${resolveValue(props, props.theme.typographyColorDisabled)}`;
  },
  paginationArrowBackgroundColorDisabledFlat: 'transparent',
  paginationArrowDisplayBoundary: 'none',
  paginationArrowVisibilityBoundary: 'hidden',
  paginationArrowVisibilityBoundaryDisabled: 'hidden',
  paginationLinkColor: props => {
    return `${resolveValue(props, props.theme.typographyColorBody)}`;
  },
  paginationLinkFontSize: '12px',
  paginationLinkFontWeight: '400',
  paginationLinkLineHeight: '16px',
  paginationLinkBoxShadow: 'none',
  paginationLinkFontWeightSelected: props => {
    return `${resolveValue(props, props.theme.paginationLinkFontWeight)}`;
  },
  paginationLinkColorHover: 'rgba(255, 255, 255, 0.1)',
  paginationLinkBoxShadowFocus: props => {
    return `0 0 0 1px ${resolveValue(props, props.theme.paginationListBorderColor)},
    0 0 0 2px ${resolveValue(props, props.theme.applicationBackgroundColor)}, 0 0 0 4px ${resolveValue(props, props.theme.focusOutlineColor)}`;
  },
  paginationLinkBoxShadowFocusFlat: props => {
    return `${resolveValue(props, props.theme.focusIndicatorBoxShadow)}`;
  },
  paginationLinkBackgroundColorSelected: props => {
    return `${resolveValue(props, props.theme.colorPrimary)}`;
  },
  paginationLinkColorSelected: props => {
    return `${resolveValue(props, props.theme.colorWhite)}`;
  },
  paginationLinkBoxShadowSelected: 'none',
  paginationLinkBackgroundColorSelectedHover: props => {
    return `${resolveValue(props, props.theme.colorPrimaryHover)}`;
  },
  paginationLinkBoxShadowSelectedFocus: props => {
    return `${resolveValue(props, props.theme.paginationLinkBoxShadowFocus)}`;
  },
  paginationLinkBackgroundColorSelectedFlat: 'transparent',
  paginationLinkColorSelectedFlat: props => {
    return `${resolveValue(props, props.theme.typographyColorHighEmphasis)}`;
  },
  paginationLinkBoxShadowSelectedFlat: props => {
    return `inset 0 -2px 0 ${resolveValue(props, props.theme.colorPrimary)}`;
  },
  paginationLinkBackgroundColorSelectedFlatHover: props => {
    return `${resolveValue(props, props.theme.colorPrimaryFlatActive)}`;
  },
  paginationLinkBoxShadowSelectedFlatFocus: props => {
    return `${resolveValue(props, props.theme.paginationLinkBoxShadowSelectedFlat)},
    ${resolveValue(props, props.theme.focusIndicatorBoxShadow)}`;
  },
  paginationSummaryColor: props => {
    return `${resolveValue(props, props.theme.typographyColorBody)}`;
  },
  paginationSummaryFontSize: '12px',
  paginationSummaryFontWeight: '400',
  paginationSummaryLineHeight: '16px',
  paginationDividerBackgroundColor: props => {
    return `${resolveValue(props, props.theme.colorGray70)}`;
  },
  paginationDividerWidth: '1px',
  paginationDividerHeight: '16px',
  paginationDividerBackgroundColorFlat: 'transparent',
  paginationBarBorderColor: 'rgba(0, 0, 0, 0.1)',
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
  paginationBarArrowDisplayBoundary: 'none',
  paginationBarArrowDisplayBoundaryDisabled: 'none',
  paginationBarArrowVisibilityDisabled: 'hidden',
  paginationCountColor: props => {
    return `${resolveValue(props, props.theme.typographyColorBody)}`;
  },
  paginationCountFontSize: '11px',
  paginationCountFontWeight: '400',
  paginationCountLineHeight: '16px',
  paginationCountBorderInlineEnd: 'none',
  paginationCountPaddingInlineEnd: '0',
  paginationCountHeight: '16px',
  paginationCountBorderInlineEndAlignEnd: 'none',
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
  popoverBorderRadius: '2px',
  popoverFilter: 'none',
  popoverBoxShadow: props => {
    return `${resolveValue(props, props.theme.elevationBoxShadow4)}`;
  },
  popoverBorderWidth: '1px',
  popoverBorderStyle: 'solid',
  popoverBorderColor: props => {
    return `${resolveValue(props, props.theme.popoverBackgroundColorDark)}`;
  },
  popoverBackgroundColor: props => {
    return `${resolveValue(props, props.theme.popoverBackgroundColorDark)}`;
  },
  popoverColor: props => {
    return `${resolveValue(props, props.theme.colorWhite)}`;
  },
  popoverFontSize: props => {
    return `${resolveValue(props, props.theme.typographyFontSizeSmall)}`;
  },
  popoverPaddingInline: '8px',
  popoverPaddingBlock: '8px',
  popoverZIndex: props => {
    return `${resolveValue(props, props.theme.overlayZIndex)}`;
  },
  popoverColorLight: props => {
    return `${resolveValue(props, props.theme.colorBlack)}`;
  },
  popoverBackgroundColorLight: props => {
    return `${resolveValue(props, props.theme.colorGray90)}`;
  },
  popoverBorderColorLight: props => {
    return `${resolveValue(props, props.theme.colorGray90)}`;
  },
  popoverColorDark: props => {
    return `${resolveValue(props, props.theme.colorWhite)}`;
  },
  popoverBackgroundColorDark: props => {
    return `${resolveValue(props, props.theme.colorGray30)}`;
  },
  popoverColorAutoInverse: props => {
    return `${resolveValue(props, props.theme.colorBlack)}`;
  },
  popoverBackgroundColorAutoInverse: props => {
    return `${resolveValue(props, props.theme.popoverColor)}`;
  },
  popoverBorderColorAutoInverse: props => {
    return `${resolveValue(props, props.theme.elevationBorderColor1)}`;
  },
  popoverArrowSize: '8px',
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
  progressBarHeight: '8px',
  progressBarBorder: 'none',
  progressBarBorderRadius: '0',
  progressBarBackgroundColor: 'rgba(255, 255, 255, 0.1)',
  progressBarTrackBorderRadius: '0',
  progressBarTrackBackgroundColor: props => {
    return `${resolveValue(props, props.theme.colorPrimary)}`;
  },
  radioButtonCursorDisabled: 'default',
  radioButtonCursorReadonly: 'default',
  radioButtonContainerHeight: '24px',
  radioButtonContainerBorderRadius: '2px',
  radioButtonContainerCursor: 'pointer',
  radioButtonContainerPaddingInline: '0',
  radioButtonContainerPaddingBlock: '0',
  radioButtonContainerBackgroundColor: 'transparent',
  radioButtonContainerAlignItems: 'center',
  radioButtonContainerBackgroundColorHover: 'transparent',
  radioButtonContainerBackgroundColorActive: 'transparent',
  radioButtonIndicatorBorderStyle: 'solid',
  radioButtonIndicatorBorderWidth: '1px',
  radioButtonIndicatorBorderColor: props => {
    return `${resolveValue(props, props.theme.colorGray90)}`;
  },
  radioButtonIndicatorBorderRadius: '50%',
  radioButtonIndicatorSize: '12px',
  radioButtonIndicatorBackgroundColor: 'transparent',
  radioButtonIndicatorMarginBlock: '0',
  radioButtonIndicatorBackgroundColorHover: props => {
    return `rgba(${resolveValue(props, props.theme.colorWhiteRgb)}, 0.2)`;
  },
  radioButtonIndicatorBorderColorHover: props => {
    return `${resolveValue(props, props.theme.radioButtonIndicatorBorderColor)}`;
  },
  radioButtonIndicatorBackgroundColorActive: props => {
    return `${resolveValue(props, props.theme.radioButtonIndicatorBackgroundColorHover)}`;
  },
  radioButtonIndicatorBorderColorActive: props => {
    return `${resolveValue(props, props.theme.radioButtonIndicatorBorderColorHover)}`;
  },
  radioButtonIndicatorBackgroundColorFocus: props => {
    return `rgba(${resolveValue(props, props.theme.colorPrimaryRgb)}, 0.1)`;
  },
  radioButtonIndicatorBackgroundColorChecked: 'transparent',
  radioButtonIndicatorBorderColorChecked: props => {
    return `${resolveValue(props, props.theme.colorPrimary)}`;
  },
  radioButtonIndicatorBackgroundColorCheckedHover: props => {
    return `${resolveValue(props, props.theme.radioButtonIndicatorBackgroundColorHover)}`;
  },
  radioButtonIndicatorBorderColorCheckedHover: props => {
    return `${resolveValue(props, props.theme.radioButtonIndicatorBorderColorChecked)}`;
  },
  radioButtonIndicatorBackgroundColorCheckedActive: props => {
    return `${resolveValue(props, props.theme.radioButtonIndicatorBackgroundColorHover)}`;
  },
  radioButtonIndicatorBorderColorCheckedActive: props => {
    return `${resolveValue(props, props.theme.radioButtonIndicatorBorderColorChecked)}`;
  },
  radioButtonIndicatorBackgroundColorCheckedFocus: props => {
    return `${resolveValue(props, props.theme.radioButtonIndicatorBackgroundColorFocus)}`;
  },
  radioButtonIndicatorBackgroundColorDisabled: 'transparent',
  radioButtonIndicatorBorderColorDisabled: props => {
    return `${resolveValue(props, props.theme.radioButtonLabelColorDisabled)}`;
  },
  radioButtonIndicatorBackgroundColorDisabledChecked: 'transparent',
  radioButtonIndicatorBorderColorDisabledChecked: props => {
    return `${resolveValue(props, props.theme.radioButtonIndicatorBorderColorDisabled)}`;
  },
  radioButtonIndicatorInnerBackgroundColor: 'transparent',
  radioButtonIndicatorInnerSize: '3px',
  radioButtonIndicatorInnerBorderRadius: '50%',
  radioButtonIndicatorInnerBackgroundColorHover: 'transparent',
  radioButtonIndicatorInnerBackgroundColorActive: 'transparent',
  radioButtonIndicatorInnerBackgroundColorChecked: props => {
    return `${resolveValue(props, props.theme.colorPrimary)}`;
  },
  radioButtonIndicatorInnerBackgroundColorCheckedHover: props => {
    return `${resolveValue(props, props.theme.colorPrimary)}`;
  },
  radioButtonIndicatorInnerBackgroundColorCheckedActive: props => {
    return `${resolveValue(props, props.theme.colorPrimary)}`;
  },
  radioButtonIndicatorInnerBackgroundColorDisabledChecked: props => {
    return `${resolveValue(props, props.theme.radioButtonLabelColorDisabled)}`;
  },
  radioButtonLabelColor: props => {
    return `${resolveValue(props, props.theme.applicationColor)}`;
  },
  radioButtonLabelMarginInlineStart: props => {
    return `${resolveValue(props, props.theme.spacingXs)}`;
  },
  radioButtonLabelFontSize: '0.875rem',
  radioButtonLabelLineHeight: '1',
  radioButtonLabelFontWeight: '400',
  radioButtonLabelFontWeightChecked: '400',
  radioButtonLabelColorDisabled: props => {
    return `${resolveValue(props, props.theme.typographyColorDisabled)}`;
  },
  radioButtonGroupGap: '0.125em',
  radioButtonGroupGapCompact: '0',
  radioButtonGroupGapSpacious: '0.5rem',
  radioButtonGroupGapHorizontal: '0.75rem',
  radioButtonGroupGapHorizontalCompact: '0.5rem',
  radioButtonGroupGapHorizontalSpacious: '1.25rem',
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
    return `${resolveValue(props, props.theme.textInputBorderRadius)}`;
  },
  selectPaddingInline: '11px',
  selectBackgroundColor: props => {
    return `${resolveValue(props, props.theme.textInputBackgroundColor)}`;
  },
  selectFontSize: props => {
    return `${resolveValue(props, props.theme.typographyFontSize)}`;
  },
  selectColumnGap: '0',
  selectHeightSmall: '24px',
  selectPaddingInlineSmall: '11px',
  selectBorderRadiusSmall: props => {
    return `${resolveValue(props, props.theme.selectBorderRadius)}`;
  },
  selectHeightLarge: '40px',
  selectBorderColorHover: props => {
    return `${resolveValue(props, props.theme.textInputBorderColorHover)}`;
  },
  selectBackgroundColorHover: props => {
    return `${resolveValue(props, props.theme.selectBackgroundColor)}`;
  },
  selectBoxShadowHover: 'none',
  selectBorderColorFocused: props => {
    return `${resolveValue(props, props.theme.textInputBorderColorFocused)}`;
  },
  selectBoxShadowFocused: props => {
    return `${resolveValue(props, props.theme.textInputBoxShadowFocused)}`;
  },
  selectBorderColorExpanded: props => {
    return `${resolveValue(props, props.theme.selectBorderColorFocused)}`;
  },
  selectBoxShadowExpanded: 'none',
  selectBorderColorDisabled: props => {
    return `${resolveValue(props, props.theme.textInputBorderColorDisabled)}`;
  },
  selectBackgroundColorDisabled: props => {
    return `${resolveValue(props, props.theme.textInputBackgroundColorDisabled)}`;
  },
  selectBorderColorInvalid: props => {
    return `${resolveValue(props, props.theme.colorNegative)}`;
  },
  selectBackgroundColorInvalid: props => {
    return `${resolveValue(props, props.theme.textInputBackgroundColorInvalid)}`;
  },
  selectBackgroundColorHoverInvalid: props => {
    return `${resolveValue(props, props.theme.textInputBackgroundColorHoverInvalid)}`;
  },
  selectBoxShadowHoverInvalid: 'none',
  selectBorderColorHoverInvalid: props => {
    return `${resolveValue(props, props.theme.textInputBorderColorHoverInvalid)}`;
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
  selectValueColorDisabled: props => {
    return `${resolveValue(props, props.theme.textInputColorDisabled)}`;
  },
  selectArrowMinWidth: '16px',
  selectArrowColor: props => {
    return `${resolveValue(props, props.theme.typographyColor)}`;
  },
  selectArrowColorDisabled: props => {
    return `${resolveValue(props, props.theme.selectValueColorDisabled)}`;
  },
  selectFeedbackColor: props => {
    return `${resolveValue(props, props.theme.textInputColor)}`;
  },
  selectOptionPanelMaxHeight: '256px',
  selectOptionPanelMarginBlockStart: '2px',
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
    return `${resolveValue(props, props.theme.selectBorderRadius)}`;
  },
  selectOptionPanelBackgroundColor: props => {
    return `${resolveValue(props, props.theme.elevationBackgroundColor4)}`;
  },
  selectOptionPanelPaddingInline: '0',
  selectOptionPanelPaddingBlock: '0',
  selectOptionPanelGap: '0',
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
  skipLinkPaddingInline: '12px',
  skipLinkPaddingBlock: '4px',
  skipLinkBackground: props => {
    return `${resolveValue(props, props.theme.colorGray95)}`;
  },
  skipLinkBorder: '2px solid #fff',
  skipLinkBoxShadow: props => {
    return `${resolveValue(props, props.theme.elevationBoxShadow2)}`;
  },
  skipLinkColor: props => {
    return `${resolveValue(props, props.theme.colorGray05)}`;
  },
  skipLinkBorderRadius: '6px',
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
    return `${resolveValue(props, props.theme.colorPrimaryHover)}`;
  },
  skipLinkBoxShadowHover: props => {
    return `${resolveValue(props, props.theme.elevationBoxShadow3)}`;
  },
  skipLinkBackgroundActive: props => {
    return `${resolveValue(props, props.theme.colorPrimaryActive)}`;
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
    return `rgba(${resolveValue(props, props.theme.colorWhiteRgb)}, 0.1)`;
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
    return `${resolveValue(props, props.theme.colorGray60)}`;
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
    return `${resolveValue(props, props.theme.colorGray25)}`;
  },
  sliderThumbBorderWidth: '1px',
  sliderThumbBorderStyle: 'solid',
  sliderThumbBorderColor: props => {
    return `${resolveValue(props, props.theme.colorGray90)}`;
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
    return `${resolveValue(props, props.theme.colorPrimary)}`;
  },
  sliderThumbBorderWidthHover: props => {
    return `${resolveValue(props, props.theme.sliderThumbBorderWidth)}`;
  },
  sliderThumbBorderStyleHover: props => {
    return `${resolveValue(props, props.theme.sliderThumbBorderStyle)}`;
  },
  sliderThumbBorderColorHover: props => {
    return `${resolveValue(props, props.theme.colorPrimary)}`;
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
    return `${resolveValue(props, props.theme.colorGray30)}`;
  },
  sliderThumbBorderWidthDisabled: props => {
    return `${resolveValue(props, props.theme.sliderThumbBorderWidth)}`;
  },
  sliderThumbBorderStyleDisabled: props => {
    return `${resolveValue(props, props.theme.sliderThumbBorderStyle)}`;
  },
  sliderThumbBorderColorDisabled: props => {
    return `${resolveValue(props, props.theme.colorGray50)}`;
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
    return `${resolveValue(props, props.theme.colorGray25)}`;
  },
  rangeHandleStroke: props => {
    return `${resolveValue(props, props.theme.colorGray90)}`;
  },
  rangeHandlePipeStroke: props => {
    return `${resolveValue(props, props.theme.colorGray90)}`;
  },
  rangeHandleFillDisabled: props => {
    return `${resolveValue(props, props.theme.colorGray25)}`;
  },
  rangeHandleStrokeDisabled: props => {
    return `${resolveValue(props, props.theme.colorGray50)}`;
  },
  rangeHandlePipeStrokeDisabled: props => {
    return `${resolveValue(props, props.theme.colorGray50)}`;
  },
  rangeHandleFillActive: props => {
    return `${resolveValue(props, props.theme.colorPrimary)}`;
  },
  rangeHandleStrokeActive: props => {
    return `${resolveValue(props, props.theme.colorPrimary)}`;
  },
  spinnerSizeMedium: '35px',
  spinnerSizeLarge: '84px',
  spinnerContainerSize: '100%',
  spinnerContainerSizeMedium: '32px',
  spinnerContainerSizeLarge: '64px',
  spinnerInnerAnimationDuration: '1250ms',
  spinnerInnerAnimationIterationCount: 'infinite',
  spinnerInnerAnimationTimingFunction: 'linear',
  spinnerInnerBoxShadowMedium: 'none',
  spinnerInnerBoxShadowLarge: 'none',
  spinnerInnerBorderRadius: 'none',
  spinnerInnerRotateStart: 'rotate(0)',
  spinnerInnerRotateEnd: 'rotate(360deg)',
  spinnerCircleFill: props => {
    return `${resolveValue(props, props.theme.colorPrimaryFlat)}`;
  },
  spinnerGradientStopColor: props => {
    return `${resolveValue(props, props.theme.colorStatusInfo)}`;
  },
  splitterGap: '16px',
  splitterDragHandleMargins: '8px',
  splitterDragHandleOverlap: '8px',
  splitterDragHandleStart: '6px',
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
    return `${resolveValue(props, props.theme.colorGray70)}`;
  },
  splitterDragHandleColorActive: props => {
    return `${resolveValue(props, props.theme.focusOutlineColor)}`;
  },
  splitterDragHandleBorderColor: 'rgba(255, 255, 255, 0.5)',
  splitterDragHandleBorderRadius: '2px',
  splitterDragHandleWidth: '0',
  splitterDragHandleWidthHover: '2px',
  splitterDragHandleWidthActive: '3px',
  splitterDragHandleTransition: 'all 0.1s ease-in-out',
  splitButtonDividerHeight: '10px',
  splitButtonBorderRadiusFirstChild: props => {
    return `${resolveValue(props, props.theme.buttonBorderRadius)} 0 0
    ${resolveValue(props, props.theme.buttonBorderRadius)}`;
  },
  splitButtonBorderRadiusLastChild: props => {
    return `0 ${resolveValue(props, props.theme.buttonBorderRadius)}
    ${resolveValue(props, props.theme.buttonBorderRadius)} 0`;
  },
  splitButtonPaddingInline: '12px 7px',
  splitButtonPaddingBlock: '0',
  splitIconButtonPaddingInline: props => {
    return `${resolveValue(props, props.theme.iconButtonPaddingInline)}`;
  },
  splitIconButtonPaddingBlock: props => {
    return `${resolveValue(props, props.theme.iconButtonPaddingBlock)}`;
  },
  splitIconButtonWidth: '24px',
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
  splitIconButtonWidthSmall: '24px',
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
  splitIconButtonWidthLarge: '32px',
  splitButtonBorderWidthPrimary: '0',
  splitButtonBorderWidthPrimaryFirstChild: '0',
  splitButtonBorderWidthPrimaryLastChild: '0',
  splitButtonDividerBackgroundPrimary: 'rgba(255, 255, 255, 0.5)',
  splitButtonBorderWidthSecondary: '1px 0',
  splitButtonBorderWidthSecondaryFirstChild: '1px 0 1px 1px',
  splitButtonBorderWidthSecondaryLastChild: '1px 1px 1px 0',
  splitButtonDividerBackgroundSecondary: 'rgba(255, 255, 255, 0.5)',
  splitButtonPaddingInlineFlat: '10px 7px',
  splitButtonPaddingBlockFlat: '0',
  splitButtonPaddingInlineFlatSmall: '8px',
  splitButtonPaddingBlockFlatSmall: '0',
  splitButtonDividerBackgroundPrimaryFlat: 'rgba(0, 115, 231, 0.5)',
  splitButtonDividerBackgroundSecondaryFlat: 'rgba(255, 255, 255, 0.5)',
  splitButtonDividerBackgroundDisabled: 'rgba(255, 255, 255, 0.1)',
  splitButtonDividerBackgroundSecondaryDisabled: props => {
    return `${resolveValue(props, props.theme.splitButtonDividerBackgroundDisabled)}`;
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
  tableBoxShadow: props => {
    return `${resolveValue(props, props.theme.elevationBoxShadow1)}`;
  },
  tableBorderRadius: '4px',
  tableBorderColor: props => {
    return `${resolveValue(props, props.theme.elevationBorderColor1)}`;
  },
  tableBorderStyle: 'solid',
  tableBorderWidth: '1px',
  tableBorder: props => {
    return `${resolveValue(props, props.theme.tableBorderColor)} ${resolveValue(props, props.theme.tableBorderStyle)}
    ${resolveValue(props, props.theme.tableBorderWidth)}`;
  },
  tableBackgroundColor: props => {
    return `${resolveValue(props, props.theme.elevationBackgroundColor1)}`;
  },
  tableHeadRowHeight: '40px',
  tableHeaderCellTextAlign: 'start',
  tableHeaderCellBorderColor: props => {
    return `${resolveValue(props, props.theme.colorGray40)}`;
  },
  tableHeaderCellBorderStyle: 'solid',
  tableHeaderCellBorderTopWidth: '0',
  tableHeaderCellBorderRightWidth: '0',
  tableHeaderCellBorderBottomWidth: '1px',
  tableHeaderCellBorderLeftWidth: '0',
  tableHeaderCellFontWeight: props => {
    return `${resolveValue(props, props.theme.typographyFontWeightMedium)}`;
  },
  tableHeaderCellColor: props => {
    return `${resolveValue(props, props.theme.typographyColorSecondary)}`;
  },
  tableHeaderCellBackgroundColor: 'transparent',
  tableHeaderCellPaddingInline: '16px',
  tableHeaderCellPaddingBlock: '0',
  tableHeaderCellFontSize: '14px',
  tableHeaderCellLineHeight: 'normal',
  tableHeaderCellLetterSpacing: 'normal',
  tableHeaderCellBoxSizing: 'content-box',
  tableColumnResizeHandleColor: props => {
    return `${resolveValue(props, props.theme.tableHeaderCellBorderColor)}`;
  },
  tableColumnResizeHandleWidth: '1px',
  tableRowHeight: '32px',
  tableRowOutlineFocused: props => {
    return `2px solid ${resolveValue(props, props.theme.focusOutlineColor)}`;
  },
  tableRowOutlineOffsetFocused: '-2px',
  tableRowHeightSmall: '24px',
  tableRowHeightLarge: '40px',
  tableRowHeightExtralarge: '48px',
  tableCellBoxSizing: 'content-box',
  tableCellBorderColor: props => {
    return `${resolveValue(props, props.theme.elevationBorderColor1)}`;
  },
  tableCellBorderStyle: 'solid',
  tableCellBorderTopWidth: '0',
  tableCellBorderRightWidth: '0',
  tableCellBorderBottomWidth: '1px',
  tableCellBorderLeftWidth: '0',
  tableCellPaddingInline: '16px',
  tableCellPaddingBlock: '0',
  tableCellFontSize: props => {
    return `${resolveValue(props, props.theme.typographyFontSize)}`;
  },
  tableCellFontWeight: props => {
    return `${resolveValue(props, props.theme.typographyFontWeightRegular)}`;
  },
  tableCellTextAlign: 'start',
  tableCellLetterSpacing: 'normal',
  tableCellColor: props => {
    return `${resolveValue(props, props.theme.typographyColorBody)}`;
  },
  tableCellColorSelected: props => {
    return `${resolveValue(props, props.theme.typographyColorHighEmphasis)}`;
  },
  tableCellLineHeight: 'normal',
  tableCellBackgroundColorHover: props => {
    return `rgba(${resolveValue(props, props.theme.colorWhiteRgb)}, 0.1)`;
  },
  tableCellBackgroundColorSelected: props => {
    return `rgba(${resolveValue(props, props.theme.colorWhiteRgb)}, 0.2)`;
  },
  tableCellBackgroundColorOddHover: props => {
    return `${resolveValue(props, props.theme.tableCellBackgroundColorHover)}`;
  },
  tableSortIconColor: props => {
    return `${resolveValue(props, props.theme.buttonColorFlatPrimary)}`;
  },
  tableSortIconPaddingInline: '0',
  tableSortIconPaddingBlock: '0',
  tableSortToggleBackgroundColorActive: props => {
    return `rgba(${resolveValue(props, props.theme.colorGray40Rgb)}, 0.2)`;
  },
  tableSortToggleBackgroundColorHover: props => {
    return `rgba(${resolveValue(props, props.theme.colorGray40Rgb)}, 0.1)`;
  },
  tableSortToggleBackgroundColorFocused: props => {
    return `${resolveValue(props, props.theme.tableSortToggleBackgroundColorActive)}`;
  },
  tableSortToggleHeight: props => {
    return `${resolveValue(props, props.theme.tableHeadRowHeight)}`;
  },
  tableSortTogglePaddingInline: '16px',
  tableSortTogglePaddingBlock: '0',
  tableSortToggleColumnGap: '6px',
  tableSortToggleBorderRadius: '0',
  tableSortToggleFontSize: props => {
    return `${resolveValue(props, props.theme.tableHeaderCellFontSize)}`;
  },
  tableSortToggleFontWeight: props => {
    return `${resolveValue(props, props.theme.tableHeaderCellFontWeight)}`;
  },
  tableSortToggleFontWeightSorting: props => {
    return `${resolveValue(props, props.theme.tableSortToggleFontWeight)}`;
  },
  tabGroupColumnGap: '0.5rem',
  tabListHeight: '3rem',
  tabListColumnGap: '1.5rem',
  tabListBorderTopWidth: '0',
  tabListBorderBottomWidth: '0',
  tabListBorderInlineStartWidth: '0',
  tabListBorderInlineEndWidth: '0',
  tabListBorderStyle: 'solid',
  tabListBorderColor: 'transparent',
  tabListBorderBottomWidthVertical: '0',
  tabListBorderInlineEndWidthVertical: '0',
  tabListHeightSmall: '2.5rem',
  tabListHeightMedium: '3rem',
  tabBackgroundColor: 'transparent',
  tabMarginInline: '0',
  tabBorder: 'none',
  tabPaddingInline: '0',
  tabPaddingBlock: '0',
  tabFontWeight: props => {
    return `${resolveValue(props, props.theme.typographyFontWeightRegular)}`;
  },
  tabFontSize: props => {
    return `${resolveValue(props, props.theme.typographyFontSizeSmall)}`;
  },
  tabColor: props => {
    return `${resolveValue(props, props.theme.typographyColorBody)}`;
  },
  tabTextTransform: 'none',
  tabCursor: 'pointer',
  tabBoxShadow: 'none',
  tabMinWidth: 'initial',
  tabMaxWidth: 'initial',
  tabWhiteSpace: 'nowrap',
  tabHeight: '100%',
  tabJustifyContent: 'center',
  tabBorderRadius: '0',
  tabHeightVertical: '2.5rem',
  tabFontSizeSmall: props => {
    return `${resolveValue(props, props.theme.typographyFontSizeSmall)}`;
  },
  tabFontSizeMedium: props => {
    return `${resolveValue(props, props.theme.typographyFontSize)}`;
  },
  tabColorSelected: props => {
    return `${resolveValue(props, props.theme.typographyColorHighEmphasis)}`;
  },
  tabFontWeightSelected: props => {
    return `${resolveValue(props, props.theme.typographyFontWeightMedium)}`;
  },
  tabBoxShadowFocused: props => {
    return `0 0 0 2px ${resolveValue(props, props.theme.focusOutlineColor)}`;
  },
  tabColorDisabled: props => {
    return `${resolveValue(props, props.theme.typographyColorDisabled)}`;
  },
  tabCursorDisabled: 'default',
  tabIconSize: '1em',
  tabIndicatorWidth: '0',
  tabIndicatorHeight: '3px',
  tabIndicatorBackgroundColor: props => {
    return `${resolveValue(props, props.theme.colorPrimary)}`;
  },
  tabIndicatorTransition: 'width 0.24s ease-out',
  tabIndicatorBorderRadius: '0',
  tabIndicatorWidthSelected: '100%',
  tabIndicatorBackgroundColorSelected: props => {
    return `${resolveValue(props, props.theme.tabIndicatorBackgroundColor)}`;
  },
  tabIndicatorWidthHover: '0',
  tabIndicatorHeightHover: props => {
    return `${resolveValue(props, props.theme.tabIndicatorHeight)}`;
  },
  tabIndicatorBackgroundColorHover: props => {
    return `${resolveValue(props, props.theme.colorWhite)}`;
  },
  tabIndicatorWidthSelectedHover: props => {
    return `${resolveValue(props, props.theme.tabIndicatorWidthSelected)}`;
  },
  tabIndicatorBackgroundColorSelectedHover: props => {
    return `${resolveValue(props, props.theme.tabIndicatorBackgroundColor)}`;
  },
  tabIndicatorHeightActive: props => {
    return `${resolveValue(props, props.theme.tabIndicatorHeight)}`;
  },
  tabIndicatorWidthActive: props => {
    return `${resolveValue(props, props.theme.tabIndicatorWidth)}`;
  },
  tabIndicatorBackgroundColorActive: props => {
    return `${resolveValue(props, props.theme.tabIndicatorBackgroundColor)}`;
  },
  tabIndicatorWidthSelectedActive: props => {
    return `${resolveValue(props, props.theme.tabIndicatorWidthSelected)}`;
  },
  tabIndicatorHeightSelectedActive: props => {
    return `${resolveValue(props, props.theme.tabIndicatorHeight)}`;
  },
  tabIndicatorBackgroundColorSelectedActive: props => {
    return `${resolveValue(props, props.theme.tabIndicatorBackgroundColorActive)}`;
  },
  tabIndicatorBackgroundColorSecondary: props => {
    return `${resolveValue(props, props.theme.colorWhite)}`;
  },
  tabIndicatorBackgroundColorSecondaryHover: props => {
    return `${resolveValue(props, props.theme.tabIndicatorBackgroundColorSecondary)}`;
  },
  tabIndicatorBackgroundColorSecondarySelected: props => {
    return `${resolveValue(props, props.theme.tabIndicatorBackgroundColorSecondary)}`;
  },
  tabIndicatorBackgroundColorSecondarySelectedHover: props => {
    return `${resolveValue(props, props.theme.tabIndicatorBackgroundColorSecondary)}`;
  },
  tabIndicatorBackgroundColorSecondaryActive: props => {
    return `${resolveValue(props, props.theme.tabIndicatorBackgroundColorSecondary)}`;
  },
  tabIndicatorBackgroundColorSecondarySelectedActive: props => {
    return `${resolveValue(props, props.theme.tabIndicatorBackgroundColorSecondary)}`;
  },
  tabIndicatorHeightVertical: '0',
  tabIndicatorBorderRadiusVertical: '0',
  tabIndicatorHeightVerticalSelected: '100%',
  tabIndicatorHeightVerticalHover: props => {
    return `${resolveValue(props, props.theme.tabIndicatorHeightVertical)}`;
  },
  tabIndicatorWidthVerticalHover: '3px',
  tabIndicatorHeightVerticalActive: props => {
    return `${resolveValue(props, props.theme.tabIndicatorHeightVerticalHover)}`;
  },
  tabIndicatorWidthVerticalActive: props => {
    return `${resolveValue(props, props.theme.tabIndicatorWidthVerticalHover)}`;
  },
  tabIndicatorWidthVerticalSelectedHover: '3px',
  tabIndicatorWidthVerticalSelectedActive: props => {
    return `${resolveValue(props, props.theme.tabIndicatorWidthVerticalActive)}`;
  },
  tabIndicatorHeightVerticalSelectedActive: props => {
    return `${resolveValue(props, props.theme.tabIndicatorHeightVerticalActive)}`;
  },
  textInputFontWeight: props => {
    return `${resolveValue(props, props.theme.typographyFontWeightRegular)}`;
  },
  textInputFontSize: props => {
    return `${resolveValue(props, props.theme.typographyFontSize)}`;
  },
  textInputHeight: '32px',
  textInputPaddingInlineStart: '12px',
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
    return `${resolveValue(props, props.theme.typographyColorHighEmphasis)}`;
  },
  textInputBackgroundColor: props => {
    return `${resolveValue(props, props.theme.elevationBackgroundColor)}`;
  },
  textInputBorderWidth: '1px',
  textInputBorderStyle: 'solid',
  textInputBorderColor: props => {
    return `rgba(${resolveValue(props, props.theme.colorWhiteRgb)}, 0.2)`;
  },
  textInputBorder: props => {
    return `${resolveValue(props, props.theme.textInputBorderWidth)} ${resolveValue(props, props.theme.textInputBorderStyle)}
    ${resolveValue(props, props.theme.textInputBorderColor)}`;
  },
  textInputBorderRadius: '2px',
  textInputWidth: '100%',
  textInputHeightSmall: props => {
    return `${resolveValue(props, props.theme.textInputHeight)}`;
  },
  textInputBorderRadiusSmall: props => {
    return `${resolveValue(props, props.theme.textInputBorderRadius)}`;
  },
  textInputHeightLarge: '40px',
  textInputPaddingBlockStartLarge: '10px',
  textInputPaddingBlockEndLarge: props => {
    return `${resolveValue(props, props.theme.textInputPaddingBlockStartLarge)}`;
  },
  textInputCursorReadonly: 'default',
  textInputBackgroundColorReadonly: 'transparent',
  textInputBorderColorReadonly: 'transparent',
  textInputPaddingInlineReadonly: '0',
  textInputBoxShadowReadonly: 'none',
  textInputBorderColorDisabled: props => {
    return `rgba(${resolveValue(props, props.theme.colorWhiteRgb)}, 0.1)`;
  },
  textInputCursorDisabled: 'default',
  textInputColorDisabled: props => {
    return `${resolveValue(props, props.theme.typographyColorDisabled)}`;
  },
  textInputBackgroundColorDisabled: props => {
    return `rgba(${resolveValue(props, props.theme.colorWhiteRgb)}, 0.02)`;
  },
  textInputBorderColorInvalid: props => {
    return `${resolveValue(props, props.theme.colorNegative)}`;
  },
  textInputBackgroundColorInvalid: props => {
    return `${resolveValue(props, props.theme.textInputBackgroundColor)}`;
  },
  textInputBackgroundColorHover: 'transparent',
  textInputBoxShadowHover: 'none',
  textInputBorderColorHover: props => {
    return `rgba(${resolveValue(props, props.theme.colorPrimaryRgb)}, 0.5)`;
  },
  textInputBackgroundColorHoverInvalid: props => {
    return `${resolveValue(props, props.theme.textInputBackgroundColor)}`;
  },
  textInputBoxShadowHoverInvalid: 'none',
  textInputBorderColorHoverInvalid: props => {
    return `${resolveValue(props, props.theme.textInputBorderColorInvalid)}`;
  },
  textInputBorderColorFocused: props => {
    return `${resolveValue(props, props.theme.colorPrimary)}`;
  },
  textInputBoxShadowFocused: 'none',
  textInputPlaceholderColor: props => {
    return `${resolveValue(props, props.theme.typographyColorPlaceholder)}`;
  },
  textInputPlaceholderFontWeight: '400',
  textInputPlaceholderColorDisabled: 'transparent',
  textInputPaddingInlineStartSearch: '0',
  textInputPlaceholderBackgroundImageSearch: 'none',
  textInputPlaceholderBackgroundPositionSearch: '0',
  textInputPlaceholderBackgroundSizeSearch: '0',
  textInputPlaceholderBackgroundPositionSearchSmall: '0',
  textInputPlaceholderBackgroundPositionSearchLarge: '0',
  textareaFontWeight: props => {
    return `${resolveValue(props, props.theme.typographyFontWeightRegular)}`;
  },
  textareaFontSize: props => {
    return `${resolveValue(props, props.theme.typographyFontSize)}`;
  },
  textareaLineHeight: '18px',
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
    return `rgba(${resolveValue(props, props.theme.colorWhiteRgb)}, 0.2)`;
  },
  textareaBorder: props => {
    return `${resolveValue(props, props.theme.textareaBorderWidth)} ${resolveValue(props, props.theme.textareaBorderStyle)}
    ${resolveValue(props, props.theme.textareaBorderColor)}`;
  },
  textareaBorderRadius: '2px',
  textareaWidth: '100%',
  textareaBorderColorDisabled: props => {
    return `rgba(${resolveValue(props, props.theme.colorWhiteRgb)}, 0.1)`;
  },
  textareaCursorDisabled: 'default',
  textareaColorDisabled: props => {
    return `${resolveValue(props, props.theme.typographyColorDisabled)}`;
  },
  textareaBackgroundColorDisabled: props => {
    return `rgba(${resolveValue(props, props.theme.colorWhiteRgb)}, 0.02)`;
  },
  textareaBorderColorInvalid: props => {
    return `${resolveValue(props, props.theme.colorNegative)}`;
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
    return `rgba(${resolveValue(props, props.theme.colorPrimaryRgb)}, 0.5)`;
  },
  textareaBackgroundColorHover: props => {
    return `${resolveValue(props, props.theme.textInputBackgroundColorHover)}`;
  },
  textareaBoxShadowHover: props => {
    return `${resolveValue(props, props.theme.textInputBoxShadowHover)}`;
  },
  textareaBoxShadowFocused: 'none',
  textareaBorderColorFocused: props => {
    return `${resolveValue(props, props.theme.colorPrimary)}`;
  },
  textareaOutlineFocused: 'none',
  textareaCursorReadonly: 'default',
  textareaBackgroundColorReadonly: 'transparent',
  textareaBorderColorReadonly: 'transparent',
  textareaPaddingInlineReadonly: '0',
  textareaBoxShadowReadonly: 'none',
  textareaPlaceholderColor: props => {
    return `${resolveValue(props, props.theme.typographyColorPlaceholder)}`;
  },
  textareaPlaceholderFontWeight: '400',
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
    return `${resolveValue(props, props.theme.colorPrimaryFlat)}`;
  },
  toggleButtonGroupBorderColorSecondary: props => {
    return `${resolveValue(props, props.theme.colorGray80)}`;
  },
  toggleButtonGroupBorderColorDisabled: 'rgba(255, 255, 255, 0.2)',
  toggleButtonGroupBorderColorSinglePrimarySelected: props => {
    return `${resolveValue(props, props.theme.toggleButtonBackgroundColorPrimary)}`;
  },
  toggleButtonGroupPaddingInlineSingleSelect: '3px',
  toggleButtonGroupPaddingBlockSingleSelect: '3px',
  toggleButtonGroupGapSingleSelect: '3px',
  toggleButtonDividerWidthSingleSelect: '0',
  toggleButtonGroupBorderColorSingleSelectPrimary: props => {
    return `${resolveValue(props, props.theme.colorPrimaryFlat)}`;
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
    return `${resolveValue(props, props.theme.buttonColorFlatPrimary)}`;
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
    return `${resolveValue(props, props.theme.colorGray60)}`;
  },
  toggleButtonBackgroundColorHoverSecondary: props => {
    return `${resolveValue(props, props.theme.colorSecondaryFlatHover)}`;
  },
  toggleButtonBackgroundColorHoverSelectedSecondary: props => {
    return `${resolveValue(props, props.theme.colorGray50)}`;
  },
  toggleButtonBoxShadowFocusedSelectedSecondary: props => {
    return `${resolveValue(props, props.theme.buttonBoxShadowFocused)}`;
  },
  toggleButtonCursorDisabled: 'default',
  toggleButtonColorDisabled: props => {
    return `${resolveValue(props, props.theme.typographyColorDisabled)}`;
  },
  toggleButtonBackgroundColorDisabled: 'transparent',
  toggleButtonBackgroundColorDisabledSelected: props => {
    return `${resolveValue(props, props.theme.toggleButtonGroupBorderColorDisabled)}`;
  },
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
    return `${resolveValue(props, props.theme.colorPrimary)}`;
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
  toggleSwitchPaddingInline: '0',
  toggleSwitchPaddingBlock: '0',
  toggleSwitchTransition: 'none',
  toggleSwitchBorderRadius: '0',
  toggleSwitchBoxShadowFocused: 'none',
  toggleSwitchCursorDisabled: 'default',
  toggleSwitchControlWidth: '24px',
  toggleSwitchControlHeight: '16px',
  toggleSwitchTrackWidth: props => {
    return `${resolveValue(props, props.theme.toggleSwitchControlWidth)}`;
  },
  toggleSwitchTrackHeight: '8px',
  toggleSwitchTrackBorderRadius: '7.5px',
  toggleSwitchTrackBackgroundColor: props => {
    return `rgba(${resolveValue(props, props.theme.colorWhiteRgb)}, 0.2)`;
  },
  toggleSwitchTrackBorderWidth: '0',
  toggleSwitchTrackBorderColor: 'none',
  toggleSwitchTrackTransition: 'none',
  toggleSwitchTrackBackgroundColorChecked: props => {
    return `${resolveValue(props, props.theme.toggleSwitchTrackBackgroundColor)}`;
  },
  toggleSwitchTrackBackgroundColorHover: props => {
    return `${resolveValue(props, props.theme.toggleSwitchTrackBackgroundColor)}`;
  },
  toggleSwitchTrackBackgroundColorActive: props => {
    return `${resolveValue(props, props.theme.toggleSwitchTrackBackgroundColor)}`;
  },
  toggleSwitchTrackBackgroundColorCheckedHover: props => {
    return `${resolveValue(props, props.theme.toggleSwitchTrackBackgroundColorChecked)}`;
  },
  toggleSwitchTrackBackgroundColorCheckedActive: props => {
    return `${resolveValue(props, props.theme.toggleSwitchTrackBackgroundColorChecked)}`;
  },
  toggleSwitchTrackBackgroundColorDisabled: props => {
    return `${resolveValue(props, props.theme.toggleSwitchTrackBackgroundColor)}`;
  },
  toggleSwitchTrackBackgroundColorDisabledChecked: props => {
    return `${resolveValue(props, props.theme.toggleSwitchTrackBackgroundColorDisabled)}`;
  },
  toggleSwitchThumbInsetInlineStart: '0',
  toggleSwitchThumbInsetInlineEnd: '8px',
  toggleSwitchThumbWidth: 'unset',
  toggleSwitchThumbHeight: props => {
    return `${resolveValue(props, props.theme.toggleSwitchMinHeight)}`;
  },
  toggleSwitchThumbBackgroundColor: props => {
    return `${resolveValue(props, props.theme.colorGray25)}`;
  },
  toggleSwitchThumbBoxShadow: 'none',
  toggleSwitchThumbBorderRadius: '8px',
  toggleSwitchThumbBorderWidth: '1px',
  toggleSwitchThumbBorderStyle: 'solid',
  toggleSwitchThumbBorderColor: props => {
    return `${resolveValue(props, props.theme.colorGray90)}`;
  },
  toggleSwitchThumbTransition: 'all 0.16s ease',
  toggleSwitchThumbInsetInlineStartChecked: '8px',
  toggleSwitchThumbInsetInlineEndChecked: '0',
  toggleSwitchThumbBackgroundColorChecked: props => {
    return `${resolveValue(props, props.theme.colorPrimary)}`;
  },
  toggleSwitchThumbBorderColorChecked: props => {
    return `${resolveValue(props, props.theme.colorPrimary)}`;
  },
  toggleSwitchThumbInsetInlineEndHover: '4px',
  toggleSwitchThumbInsetInlineStartHoverChecked: '4px',
  toggleSwitchThumbBorderColorDisabled: props => {
    return `${resolveValue(props, props.theme.colorGray50)}`;
  },
  toggleSwitchThumbBackgroundColorDisabled: props => {
    return `${resolveValue(props, props.theme.colorGray30)}`;
  },
  toggleSwitchThumbBoxShadowDisabled: 'none',
  toggleSwitchThumbBorderColorDisabledChecked: props => {
    return `${resolveValue(props, props.theme.colorGray30)}`;
  },
  toggleSwitchThumbBackgroundColorDisabledChecked: props => {
    return `${resolveValue(props, props.theme.colorGray50)}`;
  },
  toggleSwitchThumbBoxShadowDisabledChecked: 'none',
  toggleSwitchThumbBoxShadowFocused: props => {
    return `${resolveValue(props, props.theme.focusIndicatorBoxShadow)}`;
  },
  toggleSwitchLabelFontSize: props => {
    return `${resolveValue(props, props.theme.typographyFontSize)}`;
  },
  toggleSwitchLabelFontWeight: props => {
    return `${resolveValue(props, props.theme.typographyFontWeightRegular)}`;
  },
  toggleSwitchLabelColor: props => {
    return `${resolveValue(props, props.theme.typographyColor)}`;
  },
  toggleSwitchLabelColorDisabled: props => {
    return `${resolveValue(props, props.theme.typographyColorDisabled)}`;
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
    return `${resolveValue(props, props.theme.colorGray60)}`;
  },
  toolbarDividerThickness: '1px',
  tooltipMinWidth: '24px',
  tooltipBorderRadius: '2px',
  tooltipFilter: 'none',
  tooltipBoxShadow: props => {
    return `${resolveValue(props, props.theme.elevationBoxShadow4)}`;
  },
  tooltipBorderWidth: '1px',
  tooltipBorderStyle: 'solid',
  tooltipBorderColor: props => {
    return `${resolveValue(props, props.theme.tooltipBorderColorLight)}`;
  },
  tooltipBackgroundColor: props => {
    return `${resolveValue(props, props.theme.tooltipBackgroundColorLight)}`;
  },
  tooltipColor: props => {
    return `${resolveValue(props, props.theme.tooltipColorLight)}`;
  },
  tooltipFontSize: props => {
    return `${resolveValue(props, props.theme.typographyFontSizeSmall)}`;
  },
  tooltipPaddingInline: '8px',
  tooltipPaddingBlock: '8px',
  tooltipZIndex: props => {
    return `${resolveValue(props, props.theme.overlayZIndex)}`;
  },
  tooltipColorLight: props => {
    return `${resolveValue(props, props.theme.colorBlack)}`;
  },
  tooltipBackgroundColorLight: props => {
    return `${resolveValue(props, props.theme.colorWhite)}`;
  },
  tooltipBorderColorLight: props => {
    return `${resolveValue(props, props.theme.elevationBorderColor1)}`;
  },
  tooltipColorDark: props => {
    return `${resolveValue(props, props.theme.colorWhite)}`;
  },
  tooltipBackgroundColorDark: props => {
    return `${resolveValue(props, props.theme.colorGray90)}`;
  },
  tooltipColorAutoInverse: props => {
    return `${resolveValue(props, props.theme.tooltipBackgroundColorLight)}`;
  },
  tooltipBackgroundColorAutoInverse: props => {
    return `${resolveValue(props, props.theme.tooltipBackgroundColorDark)}`;
  },
  tooltipBorderColorAutoInverse: props => {
    return `${resolveValue(props, props.theme.tooltipBackgroundColorDark)}`;
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
    return `${resolveValue(props, props.theme.typographyColorBody)}`;
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
  treeNodeBackgroundColorHover: props => {
    return `${resolveValue(props, props.theme.colorSecondaryHover)}`;
  },
  treeNodeBoxShadowFocus: props => {
    return `inset 0 0 0 ${resolveValue(props, props.theme.focusOutlineWidth)}
    ${resolveValue(props, props.theme.focusOutlineColor)}`;
  },
  treeNodeBackgroundColorFocus: props => {
    return `${resolveValue(props, props.theme.colorSecondaryHover)}`;
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
    return `${resolveValue(props, props.theme.typographyFontWeightMedium)}`;
  },
  treeNodeBackgroundColorActive: props => {
    return `${resolveValue(props, props.theme.colorSecondaryHover)}`;
  },
  treeNodeBackgroundColorActiveHover: props => {
    return `${resolveValue(props, props.theme.colorSecondaryActive)}`;
  },
  treeNodeBackgroundColorExpanded: props => {
    return `${resolveValue(props, props.theme.colorGray30)}`;
  },
  treeNodeColumnGapMinimized: '0',
  treeNodePaddingStartMinimized: '4px',
  treeNodeBackgroundColorActiveChild: 'rgba(255, 255, 255, 0.05)',
  treeNodeFontWeightActiveChild: props => {
    return `${resolveValue(props, props.theme.typographyFontWeightRegular)}`;
  },
  treeNodeBackgroundColorActiveHoverChild: props => {
    return `${resolveValue(props, props.theme.colorSecondaryHover)}`;
  },
  treeNodeBackgroundColorFocusChild: 'rgba(255, 255, 255, 0.05)',
  treeNodeExpanderWidth: '1.5rem',
  treeNodeExpanderHeight: '100%',
  treeNodeExpanderFontSize: '1rem',
  treeNodeExpanderColor: props => {
    return `${resolveValue(props, props.theme.typographyColorBody)}`;
  },
  treeNodeExpanderCursor: 'pointer',
  treeNodeExpanderPaddingInlineEnd: '6px',
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
    return `${resolveValue(props, props.theme.typographyColorBody)}`;
  },
  treeNodeTitleFontSize: '14px',
  treeNodeTitleFontWeight: '400',
  treeNodeTitleLineHeight: '18px',
  treeNodeTitleColor: props => {
    return `${resolveValue(props, props.theme.typographyColorBody)}`;
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
    return `${resolveValue(props, props.theme.colorGray10)}`;
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
    return `rgba(${resolveValue(props, props.theme.colorWhiteRgb)}, 0.2)`;
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
    return `rgba(${resolveValue(props, props.theme.colorWhiteRgb)}, 0.1)`;
  },
  wizardStepButtonOutlineOffsetFocus: '-2px',
  wizardStepButtonBoxShadowActive: props => {
    return `0px 1px 4px rgba(${resolveValue(props, props.theme.colorBlackRgb)}, 0.14)`;
  },
  wizardStepButtonBackgroundColorActive: props => {
    return `rgba(${resolveValue(props, props.theme.colorWhiteRgb)}, 0.2)`;
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
    return `${resolveValue(props, props.theme.colorWhite)}`;
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
  checkboxIconInnerBackgroundColorDisabled: props => {
    return `${resolveValue(props, props.theme.colorGray25)}`;
  },
  chipMultiSelectBackgroundColor: props => {
    return `${resolveValue(props, props.theme.textInputBackgroundColorDisabled)}`;
  },
  datePickerHeaderControlColor: props => {
    return `${resolveValue(props, props.theme.colorGray90)}`;
  },
  datePickerGridCellBorderBottomSelected: props => {
    return `0.125rem solid ${resolveValue(props, props.theme.colorWhite)}`;
  },
  loginFormActionGroupBackgroundColor: props => {
    return `${resolveValue(props, props.theme.elevationBackgroundColor2)}`;
  },
  loginLanguageSelectColor: props => {
    return `${resolveValue(props, props.theme.colorWhite)}`;
  },
  mastheadTabColorSecondaryHover: props => {
    return `${resolveValue(props, props.theme.mastheadTabColorSecondary)}`;
  },
  tabBackgroundColorHover: props => {
    return `rgba(${resolveValue(props, props.theme.colorWhiteRgb)}, 0.05)`;
  },
  toggleButtonGroupBorderColorSingleSelectSecondary: props => {
    return `${resolveValue(props, props.theme.colorGray60)}`;
  },
  mastheadLogoWidth: '101px',
  mastheadLogoHeight: '19px',
  mastheadTitleColor: props => {
    return `${resolveValue(props, props.theme.colorWhite)}`;
  },
  loginBrandImageWidth: '190px',
  loginBrandImageHeight: '36px',
  loginFormActionGroupColor: props => {
    return `${resolveValue(props, props.theme.colorGray90)}`;
  }
};
function resolveValue(theme, value) {
  return typeof value === 'function' ? value(theme) : value;
}

export { opentextStage1Dark };
