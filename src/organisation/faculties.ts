import { Faculty, IndependentInstitute } from './types'

const teologinen: Faculty = {
  code: 'H10',
  name: {
    fi: 'Teologinen tiedekunta',
    en: 'Faculty of Theology',
    sv: 'Teologiska fakulteten',
  },
  programmes: [
    {
      key: 'KH10_001',
      name: {
        fi: 'Teologian ja uskonnontutkimuksen kandiohjelma',
        en: "Bachelor's Programme in Theology and Religious Studies",
        sv: 'Kandidatsprogrammet i religionsforskning',
      },
      level: 'bachelor',
      companionFaculties: [],
      international: false,
    },
    {
      key: 'MH10_001',
      name: {
        en: "Master's Programme in Theology and Religious Studies",
        fi: 'Teologian ja uskonnontutkimuksen maisteriohjelma',
        sv: 'Magisterprogrammet i teologi och religionsforskning',
      },
      level: 'master',
      companionFaculties: [],
      international: false,
    },
    {
      key: 'T920101',
      name: {
        fi: 'Teologian ja uskonnontutkimuksen tohtoriohjelma',
        en: 'Doctoral Programme in Theology and Religious Studies',
        sv: 'Doktorandprogrammet i teologi och religionsforskning',
      },
      level: 'doctoral',
      companionFaculties: ['kasvatustieteellinen', 'humanistinen'],
      international: false,
    },
  ],
} as const

const oikeustieteellinen: Faculty = {
  code: 'H20',
  name: {
    fi: 'Oikeustieteellinen tiedekunta',
    en: 'Faculty of Law',
    sv: 'Juridiska fakulteten',
  },
  programmes: [
    {
      key: 'KH20_001',
      name: {
        fi: 'Oikeusnotaarin koulutusohjelma',
        en: "Bachelor's Programme in Law",
        sv: 'Utbildningsprogrammet för rättsnotarie',
      },
      level: 'bachelor',
      companionFaculties: [],
      international: false,
    },
    {
      key: 'MH20_001',
      name: {
        fi: 'Oikeustieteen maisterin koulutusohjelma',
        en: "Master's Programme in Law",
        sv: 'Magisterprogrammet i rättsvetenskap',
      },
      level: 'master',
      companionFaculties: [],
      international: false,
    },
    {
      key: 'MH20_002',
      name: {
        fi: 'Kansainvälisen liikejuridiikan maisteriohjelma (International Business Law)',
        en: "Master's Programme in International Business Law",
        sv: 'Magisterprogrammet i internationell affärsjuridik',
      },
      level: 'master',
      companionFaculties: [],
      international: true,
    },
    {
      key: 'MH20_003',
      name: {
        fi: 'Globaalia hallintoa koskevan oikeuden maisteriohjelma',
        en: "Master's Programme in Global Governance Law",
        sv: "Master's Programme in Global Governance Law",
      },
      level: 'master',
      companionFaculties: [],
      international: true,
    },
    {
      key: 'T920102',
      name: {
        fi: 'Oikeustieteen tohtoriohjelma',
        en: 'Doctoral Programme in Law',
        sv: 'Doktorandprogrammet i juridik',
      },
      level: 'doctoral',
      companionFaculties: [],
      international: false,
    },
  ],
} as const

const laaketieteellinen: Faculty = {
  code: 'H30',
  name: {
    fi: 'Lääketieteellinen tiedekunta',
    en: 'Faculty of Medicine',
    sv: 'Medicinska fakulteten',
  },
  programmes: [
    {
      key: 'KH30_001',
      name: {
        fi: 'Psykologian kandiohjelma',
        en: "Bachelor's Programme in Psychology",
        sv: 'Kandidatprogrammet i psykologi',
      },
      level: 'bachelor',
      companionFaculties: [],
      international: false,
    },
    {
      key: 'KH30_002',
      name: {
        fi: 'Logopedian kandiohjelma',
        en: "Bachelor's Programme in Logopedics",
        sv: 'Kandidatprogrammet i logopedi',
      },
      level: 'bachelor',
      companionFaculties: [],
      international: false,
    },
    {
      key: 'KH30_003',
      name: {
        fi: 'Soveltavan psykologian kandiohjelma',
        en: "Bachelor's Programme in Applied Psychology",
        sv: 'Kandidatprogrammet i tillämpad psykologi',
      },
      level: 'bachelor',
      companionFaculties: [],
      international: false,
    },
    {
      key: 'MH30_001',
      name: {
        fi: 'Lääketieteen koulutusohjelma',
        en: 'Degree Programme in Medicine',
        sv: 'Utbildningsprogrammet i medicin',
      },
      level: 'master',
      companionFaculties: [],
      international: false,
    },
    {
      key: 'MH30_003',
      name: {
        fi: 'Hammaslääketieteen koulutusohjelma',
        en: 'Degree Programme in Dentistry',
        sv: 'Utbildningsprogrammet för odontologi',
      },
      level: 'master',
      companionFaculties: [],
      international: false,
    },
    {
      key: 'MH30_004',
      name: {
        fi: 'Psykologian maisteriohjelma',
        en: "Master's Programme in Psychology",
        sv: 'Magisterprogrammet i psykologi',
      },
      level: 'master',
      companionFaculties: [],
      international: false,
    },
    {
      key: 'MH30_005',
      name: {
        en: "Master's Programme in Logopedics",
        fi: 'Logopedian maisteriohjelma',
        sv: 'Magistgerprogrammet i logopedi',
      },
      level: 'master',
      companionFaculties: [],
      international: false,
    },
    {
      key: 'MH30_002',
      name: {
        fi: 'Translationaalisen lääketieteen maisteriohjelma (Translational Medicine)',
        en: "Master's Programme in Translational Medicine",
        sv: 'Magisterprogrammet i translationell medicin',
      },
      level: 'master',
      companionFaculties: [],
      international: true,
    },
    {
      key: 'MH30_006',
      name: {
        fi: 'Terveydenhuollon kehittämisen maisteriohjelma',
        en: "Master's Programme in Development of health care services",
        sv: 'Magisterprogrammet för utveckling av hälsovården',
      },
      level: 'master',
      companionFaculties: [],
      international: false,
    },
    {
      key: 'T921101',
      name: {
        fi: 'Biolääketieteellinen tohtoriohjelma',
        en: 'Doctoral Programme in Biomedicine',
        sv: 'Doktorandprogrammet i biomedicin',
      },
      level: 'doctoral',
      companionFaculties: ['farmasia'],
      international: false,
    },
    {
      key: 'T921102',
      name: {
        fi: 'Kliininen tohtoriohjelma',
        en: 'Doctoral Programme in Clinical Research',
        sv: 'Doktorandprogrammet i klinisk forskning',
      },
      level: 'doctoral',
      companionFaculties: [],
      international: false,
    },
    {
      key: 'T921103',
      name: {
        fi: 'Väestön terveyden tohtoriohjelma',
        en: 'Doctoral Programme in Population Health',
        sv: 'Doktorandprogrammet i befolkningshälsan',
      },
      level: 'doctoral',
      companionFaculties: [
        'maatalous-metsätieteellinen',
        'farmasia',
        'kasvatustieteellinen',
      ],
      international: false,
    },
    {
      key: 'T921104',
      name: {
        fi: 'Suun terveystieteen tohtoriohjelma',
        en: 'Doctoral Programme in Oral Sciences',
        sv: 'Doktorandprogrammet i oral hälsovetenskap',
      },
      level: 'doctoral',
      companionFaculties: [],
      international: false,
    },
    {
      key: 'T921109',
      name: {
        fi: 'Ihmisen käyttäytymisen tohtoriohjelma',
        en: 'Doctoral Programme in Human Behaviour',
        sv: 'Doktorandprogrammet i mänskligt beteende',
      },
      level: 'doctoral',
      companionFaculties: [],
      international: false,
    },
  ],
} as const

const humanistinen: Faculty = {
  code: 'H40',
  name: {
    fi: 'Humanistinen tiedekunta',
    en: 'Faculty of Arts',
    sv: 'Humanistiska fakulteten',
  },
  programmes: [
    {
      key: 'KH40_001',
      name: {
        fi: 'Filosofian kandiohjelma',
        en: "Bachelor's Programme in Philosophy",
        sv: 'Kandidatprogrammet i filosofi',
      },
      level: 'bachelor',
      companionFaculties: ['valtiotieteellinen'],
      international: false,
    },
    {
      key: 'KH40_002',
      name: {
        fi: 'Taiteiden tutkimuksen kandiohjelma',
        en: "Bachelor's Programme in Art Studies",
        sv: 'Kandidatprogrammet i konstforskning',
      },
      level: 'bachelor',
      companionFaculties: [],
      international: false,
    },
    {
      key: 'KH40_003',
      name: {
        fi: 'Kielten kandiohjelma',
        en: "Bachelor's Programme in Languages",
        sv: 'Kandidatprogrammet i språk',
      },
      level: 'bachelor',
      companionFaculties: [],
      international: false,
    },
    {
      key: 'KH40_004',
      name: {
        fi: 'Kotimaisten kielten ja kirjallisuuksien kandiohjelma',
        en: "Bachelor's Programme in the Languages and Literatures of Finland",
        sv: 'Kandidatprogrammet i finskugriska och nordiska språk och litteraturer',
      },
      level: 'bachelor',
      companionFaculties: [],
      international: false,
    },
    {
      key: 'KH40_005',
      name: {
        fi: 'Kulttuurien tutkimuksen kandiohjelma',
        en: "Bachelor's Programme in Cultural Studies",
        sv: 'Kandidatprogrammet i kulturforskning',
      },
      level: 'bachelor',
      companionFaculties: [],
      international: false,
    },
    {
      key: 'KH40_006',
      name: {
        fi: 'Historian kandiohjelma',
        en: "Bachelor's Programme in History",
        sv: 'Kandidatprogrammet i historia',
      },
      level: 'bachelor',
      companionFaculties: [],
      international: false,
    },
    {
      key: 'MH40_001',
      name: {
        fi: 'Taiteiden tutkimuksen maisteriohjelma',
        en: "Master's Programme in Art Studies",
        sv: 'Magisterprogrammet i konstforskning',
      },
      level: 'master',
      companionFaculties: [],
      international: false,
    },
    {
      key: 'MH40_002',
      name: {
        fi: 'Kielten maisteriohjelma',
        en: "Master's Programme in Languages",
        sv: 'Magisterprogrammet i språk',
      },
      level: 'master',
      companionFaculties: [],
      international: false,
    },
    {
      key: 'MH40_003',
      name: {
        fi: 'Englannin kielen ja kirjallisuuden maisteriohjelma',
        en: "Master's Programme in English Studies",
        sv: 'Magisterprogrammet i engelska språket och litteraturen',
      },
      level: 'master',
      companionFaculties: [],
      international: true,
    },
    {
      key: 'MH40_004',
      name: {
        fi: 'Venäjän tutkimuksen maisteriohjelma',
        en: "Master's Programme in Russian Studies",
        sv: 'Magisterprogrammet i ryska studier',
      },
      level: 'master',
      companionFaculties: [],
      international: true,
    },
    {
      key: 'MH40_005',
      name: {
        en: "Master's Programme Linguistic Diversity and Digital Humanities",
        fi: 'Kielellisen diversiteetin ja digitaalisten ihmistieteiden maisteriohjelma',
        sv: 'Magisterprogrammet i språklig diversitet och digitala metoder',
      },
      level: 'master',
      companionFaculties: [],
      international: true,
    },
    {
      key: 'MH40_006',
      name: {
        fi: 'Kääntämisen ja tulkkauksen maisteriohjelma',
        en: "Master's Programme in Translation and Interpreting",
        sv: 'Magisterprogrammet i översättning och tolkning',
      },
      level: 'master',
      companionFaculties: [],
      international: false,
    },
    {
      key: 'MH40_007',
      name: {
        fi: 'Suomen kielen ja suomalais-ugrilaisten kielten ja kulttuurien maisteriohjelma',
        en: "Master's Programme in Finnish and Finno-Ugrian Languages and Cultures",
        sv: 'Magisterprogrammet i finska och finskugriska språk och kulturer',
      },
      level: 'master',
      companionFaculties: [],
      international: false,
    },
    {
      key: 'MH40_008',
      name: {
        en: "Master's Programme in Scandinavian Languages and Literatures",
        fi: 'Pohjoismaisten kielten ja kirjallisuuksien maisteriohjelma',
        sv: 'Magisterprogrammet i nordiska språk och litteraturer',
      },
      level: 'master',
      companionFaculties: [],
      international: false,
    },
    {
      key: 'MH40_009',
      name: {
        fi: 'Kirjallisuudentutkimuksen maisteriohjelma',
        en: "Master's Programme in Literary Studies",
        sv: 'Magisterprogrammet i litteraturvetenskap',
      },
      level: 'master',
      companionFaculties: [],
      international: false,
    },
    {
      key: 'MH40_010',
      name: {
        fi: 'Kulttuuriperinnön maisteriohjelma',
        en: "Master's Programme in Cultural Heritage",
        sv: 'Magisterprogrammet i kulturarv',
      },
      level: 'master',
      companionFaculties: [],
      international: false,
    },
    {
      key: 'MH40_011',
      name: {
        fi: 'Kulttuurienvälisen vuorovaikutuksen maisteriohjelma',
        en: "Master's Programme in Intercultural Encounters",
        sv: 'Magisterprogrammet i interkulturell växelverkan',
      },
      level: 'master',
      companionFaculties: ['teologinen'],
      international: true,
    },
    {
      key: 'MH40_012',
      name: {
        fi: 'Alue- ja kulttuurintutkimuksen maisteriohjelma',
        en: "Master's Programme in Area and Cultural Studies",
        sv: 'Magisterprogrammet i region- och kulturstudier',
      },
      level: 'master',
      companionFaculties: [],
      international: false,
    },
    {
      key: 'MH40_015',
      name: {
        fi: 'Historian maisteriohjelma',
        en: "Master's Programme in History",
        sv: 'Magisterprogrammet i historia',
      },
      level: 'master',
      companionFaculties: [],
      international: false,
    },
    {
      key: 'MH40_014',
      name: {
        fi: 'Sukupuolentutkimuksen maisteriohjelma',
        en: "Master's Programme in Gender Studies",
        sv: 'Magisterprogrammet i genusvetenskap',
      },
      level: 'master',
      companionFaculties: [],
      international: false,
    },
    {
      key: 'MH40_013',
      name: {
        fi: 'Kulttuurin ja kommunikaation maisteriohjelma',
        en: "Master's Programme in Culture and Communication",
        sv: 'Magisterprogrammet i kultur och kommunikation',
      },
      level: 'master',
      companionFaculties: [],
      international: false,
    },
    {
      key: 'T920103',
      name: {
        fi: 'Historian ja kulttuuriperinnön tohtoriohjelma',
        en: 'Doctoral Programme in History and Cultural Heritage',
        sv: 'Doktorandprogrammet i historia och kulturarv',
      },
      level: 'doctoral',
      companionFaculties: [
        'teologinen',
        'kasvatustieteellinen',
        'oikeustieteellinen',
      ],
      international: false,
    },
    {
      key: 'T920104',
      name: {
        fi: 'Kielentutkimuksen tohtoriohjelma',
        en: 'Doctoral Programme in Language Studies',
        sv: 'Doktorandprogrammet i språkforskning',
      },
      level: 'doctoral',
      companionFaculties: ['kasvatustieteellinen', 'valtiotieteellinen'],
      international: false,
    },
    {
      key: 'T920105',
      name: {
        fi: 'Sukupuolen, kulttuurin ja yhteiskunnan tutkimuksen tohtoriohjelma',
        en: 'Doctoral Programme in Gender, Culture and Society',
        sv: 'Doktorandprogrammet i genus, kultur och samhällsforskning',
      },
      level: 'doctoral',
      companionFaculties: [
        'teologinen',
        'kasvatustieteellinen',
        'valtiotieteellinen',
        'oikeustieteellinen',
      ],
      international: false,
    },
    {
      key: 'T920111',
      name: {
        fi: 'Filosofian, taiteiden ja yhteiskunnan tutkimuksen tohtoriohjelma',
        en: 'Doctoral Programme in Philosophy, Arts and Society',
        sv: 'Doktorandprogrammet i filosofi, konstforskning och samhället',
      },
      level: 'doctoral',
      companionFaculties: ['valtiotieteellinen'],
      international: false,
    },
  ],
} as const

const matemaattisLuonnontieteellinen: Faculty = {
  code: 'H50',
  name: {
    fi: 'Matemaattis-luonnontieteellinen tiedekunta',
    en: 'Faculty of Science',
    sv: 'Matematisk-naturvetenskapliga fakulteten',
  },
  programmes: [
    {
      key: 'KH50_001',
      name: {
        fi: 'Matemaattisten tieteiden kandiohjelma',
        en: "Bachelor's Programme in Mathematical Sciences",
        sv: 'Kandidatsprogrammet i matematiska vetenskaper',
      },
      level: 'bachelor',
      companionFaculties: [],
      international: false,
    },
    {
      key: 'KH50_002',
      name: {
        fi: 'Fysikaalisten tieteiden kandiohjelma',
        en: "Bachelor's Programme in Physical Sciences",
        sv: 'Kandidatprogrammet i fysikaliska vetenskaper',
      },
      level: 'bachelor',
      companionFaculties: [],
      international: false,
    },
    {
      key: 'KH50_003',
      name: {
        fi: 'Kemian kandiohjelma',
        en: "Bachelor's Programme in Chemistry",
        sv: 'Kandidatprogrammet i kemi',
      },
      level: 'bachelor',
      companionFaculties: [],
      international: false,
    },
    {
      key: 'KH50_004',
      name: {
        fi: 'Matematiikan, fysiikan ja kemian opettajan kandiohjelma',
        en: "Bachelor's Programme for Teachers of Mathematics, Physics and Chemistry",
        sv: 'Kandidatprogrammet för ämneslärare i matematik, fysik och kemi',
      },
      level: 'bachelor',
      companionFaculties: [],
      international: false,
    },
    {
      key: 'KH50_005',
      name: {
        fi: 'Tietojenkäsittelytieteen kandiohjelma',
        en: "Bachelor's Programme in Computer Science",
        sv: 'Kandidatprogrammet i datavetenskap',
      },
      level: 'bachelor',
      companionFaculties: [],
      international: false,
    },
    {
      key: 'KH50_007',
      name: {
        fi: 'Maantieteen kandiohjelma',
        en: "Bachelor's Programme in Geography",
        sv: 'Kandidatprogrammet i geografi',
      },
      level: 'bachelor',
      companionFaculties: [],
      international: false,
    },
    {
      key: 'KH50_008',
      name: {
        en: 'Bachelor’s Programme in Science',
        fi: 'Luonnontieteiden kandiohjelma',
        sv: 'Kandidatprogrammet i naturvetenskaper',
      },
      level: 'bachelor',
      companionFaculties: [],
      international: false,
    },
    {
      key: 'KH50_006',
      name: {
        fi: 'Geotieteiden kandiohjelma',
        en: "Bachelor's Programme in Geosciences",
        sv: 'Kandidatsprogrammet i geovetenskap',
      },
      level: 'bachelor',
      companionFaculties: [],
      international: false,
    },
    {
      key: 'MH50_001',
      name: {
        fi: 'Matematiikan ja tilastotieteen maisteriohjelma',
        en: "Master's Programme in Mathematics and Statistics",
        sv: 'Magisterprogrammet i matematik och statistik',
      },
      level: 'master',
      companionFaculties: ['valtiotieteellinen'],
      international: true,
    },
    {
      key: 'MH50_002',
      name: {
        fi: 'Life Science Informatics -maisteriohjelma',
        en: "Master's Programme in Life Science Informatics",
        sv: 'Magisterprogrammet i Life Science Informatics',
      },
      level: 'master',
      companionFaculties: ['bio- ja ympäristötieteellinen'],
      international: true,
    },
    {
      key: 'MH50_003',
      name: {
        fi: 'Teoreettisten ja laskennallisten menetelmien maisteriohjelma',
        en: "Master's Programme in Theoretical and Computational Methods",
        sv: 'Magisterprogrammet i teoretiska och beräkningsmetoder',
      },
      level: 'master',
      companionFaculties: [],
      international: true,
    },
    {
      key: 'MH50_004',
      name: {
        fi: 'Alkeishiukkasfysiikan ja astrofysikaalisten tieteiden maisteriohjelma',
        en: "Master's Programme in Particle Physics and Astrophysical Sciences",
        sv: 'Magisterprogrammet i elementarpartikelfysik och astrofysikaliska vetenskaper',
      },
      level: 'master',
      companionFaculties: [],
      international: true,
    },
    {
      key: 'MH50_005',
      name: {
        fi: 'Materiaalitutkimuksen maisteriohjelma',
        en: "Master's Programme in Materials Research",
        sv: 'Magisterprogrammet i materialforskning',
      },
      level: 'master',
      companionFaculties: [],
      international: true,
    },
    {
      key: 'MH50_006',
      name: {
        fi: 'Ilmakehätieteiden maisteriohjelma',
        en: "Master's Programme in Atmospheric Sciences",
        sv: 'Magisterprogrammet i atmosfärsvetenskaper',
      },
      level: 'master',
      companionFaculties: ['maatalous-metsätieteellinen'],
      international: true,
    },
    {
      key: 'MH50_007',
      name: {
        fi: 'Kemian ja molekyylitieteiden maisteriohjelma',
        en: "Master's Programme in Chemistry and Molecular Sciences",
        sv: 'Magisterprogrammet i kemi och molekylära vetenskaper',
      },
      level: 'master',
      companionFaculties: [],
      international: true,
    },
    {
      key: 'MH50_008',
      name: {
        fi: 'Matematiikan, fysiikan ja kemian opettajan maisteriohjelma',
        en: "Master's Programme for Teachers of Mathematics, Physics and Chemistry",
        sv: 'Magisterprogrammet för ämneslärare i matematik, fysik och kemi',
      },
      level: 'master',
      companionFaculties: [],
      international: false,
    },
    {
      key: 'MH50_009',
      name: {
        fi: 'Tietojenkäsittelytieteen maisteriohjelma',
        en: "Master's Programme in Computer Science",
        sv: 'Magisterprogrammet i datavetenskap',
      },
      level: 'master',
      companionFaculties: [],
      international: true,
    },
    {
      key: 'MH50_010',
      name: {
        fi: 'Datatieteen maisteriohjelma',
        en: "Master's Programme in Data Science",
        sv: 'Magisterprogrammet i data science',
      },
      level: 'master',
      companionFaculties: [],
      international: true,
    },
    {
      key: 'MH50_011',
      name: {
        fi: 'Geologian ja geofysiikan maisteriohjelma',
        en: "Master's Programme in Geology and Geophysics",
        sv: 'Magisterprogrammet i geologi och geofysik',
      },
      level: 'master',
      companionFaculties: [],
      international: true,
    },
    {
      key: 'MH50_012',
      name: {
        fi: 'Maantieteen maisteriohjelma',
        en: "Master's Programme in Geography",
        sv: 'Magisterprogrammet i geografi',
      },
      level: 'master',
      companionFaculties: [],
      international: true,
    },
    {
      key: 'MH50_013',
      name: {
        fi: 'Kaupunkitutkimuksen ja suunnittelun maisteriohjelma',
        en: "Master's Programme in Urban Studies and Planning",
        sv: 'Magisterprogrammet i urbana studier och planering',
      },
      level: 'master',
      companionFaculties: [
        'bio- ja ympäristötieteellinen',
        'valtiotieteellinen',
        'humanistinen',
      ],
      international: true,
    },
    {
      key: 'MH50_014',
      name: {
        fi: 'Nordic Master Programme in Environmental Changes at Higher Latitudes',
        en: 'Nordic Master Programme in Environmental Changes at Higher Latitudes',
        sv: 'Nordic Master Programme in Environmental Changes at Higher Latitudes',
      },
      level: 'master',
      companionFaculties: [],
      international: true,
    },
    {
      key: 'T923102',
      name: {
        fi: 'Geotieteiden tohtoriohjelma',
        en: 'Doctoral Programme in Geosciences',
        sv: 'Doktorandprogrammet i geovetenskap',
      },
      level: 'doctoral',
      companionFaculties: ['humanistinen'],
      international: false,
    },
    {
      key: 'T923103',
      name: {
        fi: 'Ilmakehätieteiden tohtoriohjelma',
        en: 'Doctoral Programme in Atmospheric Sciences',
        sv: 'Doktorandprogrammet i atmosfärvetenskap',
      },
      level: 'doctoral',
      companionFaculties: ['maatalous-metsätieteellinen'],
      international: false,
    },
    {
      key: 'T923104',
      name: {
        fi: 'Kemian ja molekyylitutkimuksen tohtoriohjelma',
        en: 'Doctoral Programme in Chemistry and Molecular Research',
        sv: 'Doktorandprogrammet i kemi och molekylära vetenskaper',
      },
      level: 'doctoral',
      companionFaculties: ['farmasia'],
      international: false,
    },
    {
      key: 'T923105',
      name: {
        fi: 'Matematiikan ja tilastotieteen tohtoriohjelma',
        en: 'Doctoral Programme in Mathematics and Statistics',
        sv: 'Doktorandprogrammet i matematik och statistik',
      },
      level: 'doctoral',
      companionFaculties: [],
      international: false,
    },
    {
      key: 'T923106',
      name: {
        fi: 'Materiaalitutkimuksen ja nanotieteiden tohtoriohjelma',
        en: 'Doctoral Programme in Materials Research and Nanoscience',
        sv: 'Doktorandprogrammet i materialforskning och nanovetenskap',
      },
      level: 'doctoral',
      companionFaculties: ['farmasia'],
      international: false,
    },
    {
      key: 'T923107',
      name: {
        fi: 'Tietojenkäsittelytieteen tohtoriohjelma',
        en: 'Doctoral Programme in Computer Science',
        sv: 'Doktorandprogrammet i datavetenskap',
      },
      level: 'doctoral',
      companionFaculties: [],
      international: false,
    },
    {
      key: 'T923101',
      name: {
        fi: 'Alkeishiukkasfysiikan ja maailmankaikkeuden tutkimuksen tohtoriohjelma',
        en: 'Doctoral Programme in Particle Physics and Universe Sciences',
        sv: 'Doktorandprogrammet i elementarpartikelfysik och kosmologi',
      },
      level: 'doctoral',
      companionFaculties: [],
      international: false,
    },
  ],
} as const

const farmasia: Faculty = {
  code: 'H55',
  name: {
    fi: 'Farmasian tiedekunta',
    en: 'Faculty of Pharmacy',
    sv: 'Farmaceutiska fakulteten',
  },
  programmes: [
    {
      key: 'KH55_001',
      name: {
        fi: 'Farmaseutin koulutusohjelma',
        en: "Bachelor's Programme in Pharmacy",
        sv: 'Utbildningsprogrammet för farmaceutexamen',
      },
      level: 'bachelor',
      companionFaculties: [],
      international: false,
    },
    {
      key: 'MH55_001',
      name: {
        en: "Master's Programme in Pharmacy",
        fi: 'Proviisorin koulutusohjelma',
        sv: 'Utbildningsprogrammet för provisorsexamen',
      },
      level: 'master',
      companionFaculties: [],
      international: false,
    },
    {
      key: 'MH55_002',
      name: {
        en: "Master's programme in Pharmaceutical Research, Development and Safety",
        fi: "Master's programme in Pharmaceutical Research, Development and Safety",
        sv: "Master's programme in Pharmaceutical Research, Development and Safety",
      },
      level: 'master',
      companionFaculties: [],
      international: true,
    },
    {
      key: 'T921105',
      name: {
        fi: 'Lääketutkimuksen tohtoriohjelma',
        en: 'Doctoral Programme in Drug Research',
        sv: 'Doktorandprogrammet i läkemedelsforskning',
      },
      level: 'doctoral',
      companionFaculties: [
        'eläinlääketieteellinen',
        'lääketieteellinen',
        'matemaattis-luonnontieteellinen',
      ],
      international: false,
    },
  ],
} as const

const bioYmparistotieteellinen: Faculty = {
  code: 'H57',
  name: {
    fi: 'Bio- ja ympäristötieteellinen tiedekunta',
    en: 'Faculty of Biological and Environmental Sciences',
    sv: 'Bio- och miljövetenskapliga fakulteten',
  },
  programmes: [
    {
      key: 'KH57_001',
      name: {
        fi: 'Biologian kandiohjelma',
        en: "Bachelor's Programme in Biology",
        sv: 'Kandidatsprogrammet i biologi',
      },
      level: 'bachelor',
      companionFaculties: [],
      international: false,
    },
    {
      key: 'KH57_002',
      name: {
        fi: 'Molekyylibiotieteiden kandiohjelma',
        en: "Bachelor's Programme in Molecular Biosciences",
        sv: 'Kandidatsprogrammet i molekylära biovetenskaper',
      },
      level: 'bachelor',
      companionFaculties: ['maatalous-metsätieteellinen'],
      international: false,
    },
    {
      key: 'KH57_003',
      name: {
        en: "Bachelor's Programme in Enviromental Sciences",
        fi: 'Ympäristötieteiden kandiohjelma',
        sv: 'Kandidatprogrammet i miljövetenskaper',
      },
      level: 'bachelor',
      companionFaculties: ['maatalous-metsätieteellinen'],
      international: false,
    },
    {
      key: 'MH57_001',
      name: {
        fi: 'Ekologian ja evoluutiobiologian maisteriohjelma',
        en: "Master's Programme in Ecology and Evolutionary Biology",
        sv: 'Magisterprogrammet i ekologi och evolutionsbiologi',
      },
      level: 'master',
      companionFaculties: [],
      international: true,
    },
    {
      key: 'MH57_002',
      name: {
        fi: 'Kasvitieteen maisteriohjelma',
        en: "Master's Programme in Integrative Plant Sciences",
        sv: 'Magisterprogrammet i botanik',
      },
      level: 'master',
      companionFaculties: ['maatalous-metsätieteellinen'],
      international: true,
    },
    {
      key: 'MH57_003',
      name: {
        fi: 'Genetiikan ja molekulaaristen biotieteiden maisteriohjelma',
        en: "Master's Programme in Genetics and Molecular Biosciences",
        sv: 'Magisterprogrammet i genetik och molekylära biovetenskaper',
      },
      level: 'master',
      companionFaculties: ['maatalous-metsätieteellinen'],
      international: true,
    },
    {
      key: 'MH57_004',
      name: {
        fi: 'Neurotieteen maisteriohjelma',
        en: "Master's Programme in Neuroscience",
        sv: 'Magisterprogrammet i neurovetenskap',
      },
      level: 'master',
      companionFaculties: [],
      international: true,
    },
    {
      key: 'MH57_005',
      name: {
        fi: 'Ympäristömuutoksen ja globaalin kestävyyden maisteriohjelma',
        en: "Master's Programme in Environmental Change and Global Sustainability",
        sv: 'Magisterprogrammet i miljöförändringar och global hållbarhet',
      },
      level: 'master',
      companionFaculties: ['maatalous-metsätieteellinen', 'valtiotieteellinen'],
      international: true,
    },
    {
      key: 'T922101',
      name: {
        fi: 'Luonnonvaraisten eliöiden tutkimuksen tohtoriohjelma',
        en: 'Doctoral Programme in Wildlife Biology',
        sv: 'Doktorandprogrammet i forskning om vilda organismer',
      },
      level: 'doctoral',
      companionFaculties: [
        'maatalous-metsätieteellinen',
        'matemaattis-luonnontieteellinen',
      ],
      international: false,
    },
    {
      key: 'T922103',
      name: {
        fi: 'Ympäristöalan tieteidenvälinen tohtoriohjelma',
        en: 'Doctoral Programme in Interdisciplinary Environmental Sciences',
        sv: 'Doktorandprogrammet i tvärvetenskaplig miljöforskning',
      },
      level: 'doctoral',
      companionFaculties: [
        'maatalous-metsätieteellinen',
        'matemaattis-luonnontieteellinen',
        'kasvatustieteellinen',
        'valtiotieteellinen',
        'oikeustieteellinen',
        'humanistinen',
      ],
      international: false,
    },
    {
      key: 'T921107',
      name: {
        en: 'Doctoral Programme in Brain and Mind',
        fi: 'Aivot ja mieli tohtoriohjelma',
        sv: 'Doktorandprogrammet i hjärn- och medvetandeforskning',
      },
      level: 'doctoral',
      companionFaculties: [
        'eläinlääketieteellinen',
        'lääketieteellinen',
        'farmasia',
        'matemaattis-luonnontieteellinen',
        'kasvatustieteellinen',
        'humanistinen',
      ],
      international: false,
    },
    {
      key: 'T921106',
      name: {
        fi: 'Integroivien biotieteiden tohtoriohjelma',
        en: 'Doctoral Programme in Integrative Life Science',
        sv: 'Doktorandprogrammet i integrerande biovetenskap',
      },
      level: 'doctoral',
      companionFaculties: [
        'eläinlääketieteellinen',
        'maatalous-metsätieteellinen',
        'lääketieteellinen',
        'matemaattis-luonnontieteellinen',
      ],
      international: false,
    },
    {
      key: 'T922102',
      name: {
        fi: 'Kasvitieteen tohtoriohjelma',
        en: 'Doctoral Programme in Plant Sciences',
        sv: 'Doktorandprogrammet i botanik',
      },
      level: 'doctoral',
      companionFaculties: ['maatalous-metsätieteellinen'],
      international: false,
    },
  ],
} as const

const kasvatustieteellinen: Faculty = {
  code: 'H60',
  name: {
    fi: 'Kasvatustieteellinen tiedekunta',
    en: 'Faculty of Educational Sciences',
    sv: 'Pedagogiska fakulteten',
  },
  programmes: [
    {
      key: 'KH60_001',
      name: {
        fi: 'Kasvatustieteiden kandiohjelma',
        en: "Bachelor's Programme in Education",
        sv: 'Kandidatprogrammet i pedagogik',
      },
      level: 'bachelor',
      companionFaculties: [],
      international: false,
    },
    {
      key: 'MH60_001',
      name: {
        fi: 'Kasvatustieteiden maisteriohjelma',
        en: "Master's Programme in Education",
        sv: 'Magisterprogrammet i pedagogik',
      },
      level: 'master',
      companionFaculties: [],
      international: false,
    },
    {
      key: 'MH60_002',
      name: {
        fi: 'Muuttuvan kasvatuksen ja koulutuksen maisteriohjelma',
        en: "Master's Programme in Changing Education",
        sv: "Master's Programme in Changing Education",
      },
      level: 'master',
      companionFaculties: [],
      international: true,
    },
    {
      key: 'T920109',
      name: {
        fi: 'Koulun, kasvatuksen, yhteiskunnan ja kulttuurin tohtoriohjelma',
        en: 'Doctoral Programme in School, Education, Society and Culture',
        sv: 'Doktorandprogrammet i skola, fostran, samhälle och kultur',
      },
      level: 'doctoral',
      companionFaculties: ['teologinen', 'humanistinen'],
      international: false,
    },
    {
      key: 'T920110',
      name: {
        fi: 'Kognition, oppimisen, opetuksen ja kommunikaation tohtoriohjelma',
        en: 'Doctoral Programme in Cognition, Learning, Instruction and Communication',
        sv: 'Doktorandprogrammet i kognition, inlärning, undervisning och kommunikation',
      },
      level: 'doctoral',
      companionFaculties: [],
      international: false,
    },
  ],
} as const

const valtiotieteellinen: Faculty = {
  code: 'H70',
  name: {
    fi: 'Valtiotieteellinen tiedekunta',
    en: 'Faculty of Social Sciences',
    sv: 'Statsvetenskapliga fakulteten',
  },
  programmes: [
    {
      key: 'KH70_001',
      name: {
        fi: 'Politiikan ja viestinnän kandiohjelma',
        en: "Bachelor's Programme in Politics, Media and Communication",
        sv: 'Kandidatprogrammet i politik, medier och kommunikation',
      },
      level: 'bachelor',
      companionFaculties: [],
      international: false,
    },
    {
      key: 'KH70_002',
      name: {
        fi: 'Yhteiskunnallisen muutoksen kandiohjelma',
        en: "Bachelor's Programme in Society and Change",
        sv: 'Kandidatsprogrammet i samhälle förändrig',
      },
      level: 'bachelor',
      companionFaculties: [],
      international: false,
    },
    {
      key: 'KH70_003',
      name: {
        fi: 'Sosiaalitieteiden kandiohjelma',
        en: "Bachelor's Programme in Social Research",
        sv: 'Kandidatprogrammet i sociala vetenskaper',
      },
      level: 'bachelor',
      companionFaculties: [],
      international: false,
    },
    {
      key: 'KH70_004',
      name: {
        fi: 'Taloustieteen kandiohjelma',
        en: "Bachelor's Programme in Economics",
        sv: 'Kandidatprogrammet i ekonomi',
      },
      level: 'bachelor',
      companionFaculties: [],
      international: false,
    },
    {
      key: 'MH70_001',
      name: {
        fi: 'Filosofian maisteriohjelma',
        en: "Master's Programme in Philosophy",
        sv: 'Magisterprogrammet i filosofi',
      },
      level: 'master',
      companionFaculties: ['humanistinen'],
      international: false,
    },
    {
      key: 'MH70_002',
      name: {
        en: "Master's Programme in Politics, Media and Communication",
        fi: 'Politiikan ja viestinnän maisteriohjelma',
        sv: 'Magisterprogrammet i politik, medier och kommunikation',
      },
      level: 'master',
      companionFaculties: [],
      international: false,
    },
    {
      key: 'MH70_003',
      name: {
        fi: 'Globaalin politiikan ja viestinnän maisteriohjelma',
        en: "Master's Programme in Global Politics and Communication",
        sv: 'Magisterprogrammet i global politik och kommunikation',
      },
      level: 'master',
      companionFaculties: [],
      international: true,
    },
    {
      key: 'MH70_004',
      name: {
        en: "Master's Programme in Society and Change",
        fi: 'Yhteiskunnallisen muutoksen maisteriohjelma',
        sv: 'Magisterprogrammet för samhälle i förändring',
      },
      level: 'master',
      companionFaculties: [],
      international: false,
    },
    {
      key: 'MH70_005',
      name: {
        fi: 'Nyky-yhteiskunnan tutkimuksen maisteriohjelma',
        en: "Master's Programme in Contemporary Societies",
        sv: 'Magisterprogrammet i moderna samhällen',
      },
      level: 'master',
      companionFaculties: [],
      international: true,
    },
    {
      key: 'MH70_006',
      name: {
        fi: 'Euroopan ja pohjoismaiden tutkimuksen maisteriohjelma (European and Nordic Studies)',
        en: "Master's Programme in European and Nordic Studies",
        sv: 'Magisterprogrammet i Europa- och Nordenstudier',
      },
      level: 'master',
      companionFaculties: ['humanistinen'],
      international: true,
    },
    {
      key: 'MH70_007',
      name: {
        fi: 'Yhteiskuntatieteiden maisteriohjelma',
        en: "Master's Programme in Social Sciences",
        sv: 'Magisterprogrammet i samhällsvetenskaper',
      },
      level: 'master',
      companionFaculties: [],
      international: false,
    },
    {
      key: 'MH70_008',
      name: {
        fi: 'Sosiaalitieteiden maisteriohjelma',
        en: "Master's Programme in Social Research",
        sv: 'Magisterprogrammet i sociala vetenskaper',
      },
      level: 'master',
      companionFaculties: [],
      international: false,
    },
    {
      key: 'MH70_009',
      name: {
        fi: 'Taloustieteen maisteriohjelma',
        en: "Master's Programme in Economics",
        sv: 'Magisterprogrammet i ekonomi',
      },
      level: 'master',
      companionFaculties: [],
      international: true,
    },
    {
      key: 'MH70_011',
      name: {
        fi: 'Sosiaali- ja terveystutkimuksen ja johtamisen maisteriohjelma',
        en: "Master's programme in Social and Health Research and Management",
        sv: 'Magisterprogrammet i social- och hälsoforskning och ledning',
      },
      level: 'master',
      companionFaculties: ['lääketieteellinen'],
      international: false,
    },
    {
      key: 'T920106',
      name: {
        fi: 'Sosiaalitieteiden tohtoriohjelma',
        en: 'Doctoral Programme in Social Sciences',
        sv: 'Doktorandprogrammet i socialvetenskap',
      },
      level: 'doctoral',
      companionFaculties: [
        'kasvatustieteellinen',
        'matemaattis-luonnontieteellinen',
        'teologinen',
      ],
      international: false,
    },
    {
      key: 'T920107',
      name: {
        fi: 'Poliittisten, yhteiskunnallisten ja alueellisten muutosten tohtoriohjelma',
        en: 'Doctoral Programme in Political, Societal and Regional Changes',
        sv: 'Doktorandprogrammet i politisk, samhällelig och regional förändring',
      },
      level: 'doctoral',
      companionFaculties: [
        'maatalous-metsätieteellinen',
        'kasvatustieteellinen',
        'humanistinen',
        'matemaattis-luonnontieteellinen',
      ],
      international: false,
    },
    {
      key: 'T920108',
      name: {
        fi: 'Taloustieteen tohtoriohjelma',
        en: 'Doctoral Programme in Economics',
        sv: 'Doktorandprogrammet i ekonomi',
      },
      level: 'doctoral',
      companionFaculties: [
        'maatalous-metsätieteellinen',
        'matemaattis-luonnontieteellinen',
      ],
      international: false,
    },
  ],
} as const

const sockom: Faculty = {
  code: 'H74',
  name: {
    fi: 'Svenska social- och kommunalhögskolan',
    en: 'Swedish School of Social Science',
    sv: 'Svenska social- och kommunalhögskolan',
  },
  programmes: [
    {
      key: 'KH74_001',
      name: {
        en: "Bachelor's Programme in Social Sciences",
        fi: 'Kandidatprogrammet i samhällsvetenskaper',
        sv: 'Kandidatprogrammet i samhällsvetenskaper',
      },
      level: 'bachelor',
      companionFaculties: [],
      international: false,
    },
  ],
} as const

const maatalousMetsatieteellinen: Faculty = {
  code: 'H80',
  name: {
    fi: 'Maatalous-metsätieteellinen tiedekunta',
    en: 'Faculty of Agriculture and Forestry',
    sv: 'Agrikultur-forstvetenskapliga fakulteten',
  },
  programmes: [
    {
      key: 'KH80_001',
      name: {
        fi: 'Maataloustieteiden kandiohjelma',
        en: "Bachelor's Programme in Agricultural Sciences",
        sv: 'Kandidatprogrammet i lantbruksvetenskaper',
      },
      level: 'bachelor',
      companionFaculties: [],
      international: false,
    },
    {
      key: 'KH80_002',
      name: {
        fi: 'Metsätieteiden kandiohjelma',
        en: "Bachelor's Programme in Forest Sciences",
        sv: 'Kandidatprogrammet i skogsvetenskaper',
      },
      level: 'bachelor',
      companionFaculties: [],
      international: false,
    },
    {
      key: 'KH80_003',
      name: {
        fi: 'Elintarviketieteiden kandiohjelma',
        en: "Bachelor's Programme in Food Sciences",
        sv: 'Kandidatsprogrammet i livsmedelsvetenskaper',
      },
      level: 'bachelor',
      companionFaculties: [],
      international: false,
    },
    {
      key: 'KH80_004',
      name: {
        en: "Bachelor's Programme in Enviromental and Food Economics",
        fi: 'Ympäristö- ja elintarviketalouden kandiohjelma',
        sv: 'Kandidatprogrammet i miljö- och livsmedelsekonomi',
      },
      level: 'bachelor',
      companionFaculties: [],
      international: false,
    },
    {
      key: 'MH80_001',
      name: {
        en: "Master's Programme in Agricultural Sciences",
        fi: 'Maataloustieteiden maisteriohjelma',
        sv: 'Magisterprogrammet i lantbruksvetenskaper',
      },
      level: 'master',
      companionFaculties: [],
      international: true,
    },
    {
      key: 'MH80_002',
      name: {
        fi: 'Maatalous-, ympäristö- ja luonnonvaraekonomian maisteriohjelma',
        en: "Master's Programme in Agricultural, Environmental and Resource Economics",
        sv: 'Magisterprogrammet i lantbruks -, miljö- och naturresursekonomi',
      },
      level: 'master',
      companionFaculties: [],
      international: true,
    },
    {
      key: 'MH80_003',
      name: {
        fi: 'Metsätieteiden maisteriohjelma',
        en: "Master's Programme in Forest Sciences",
        sv: 'Magisterprogrammet i skogsvetenskaper',
      },
      level: 'master',
      companionFaculties: [],
      international: true,
    },
    {
      key: 'MH80_004',
      name: {
        fi: 'Elintarviketieteiden maisteriohjelma',
        en: "Master's Programme in Food Sciences",
        sv: 'Magisterprogrammet i livsmedelsvetenskaper',
      },
      level: 'master',
      companionFaculties: [],
      international: true,
    },
    {
      key: 'MH80_005',
      name: {
        en: "Master's Programme in Human Nutrition and Food-Related Behaviour",
        fi: 'Ihmisen ravitsemuksen ja ruokakäyttäytymisen maisteriohjelma',
        sv: 'Magisterprogrammet i human nutrition och matbeteende',
      },
      level: 'master',
      companionFaculties: [],
      international: true,
    },
    {
      key: 'MH80_006',
      name: {
        en: "Master's Programme in Food Economy and Consumption",
        fi: 'Elintarviketalouden ja kulutuksen maisteriohjelma',
        sv: 'Magisterprogrammet i livsmedelsekonomi och konsumtion',
      },
      level: 'master',
      companionFaculties: [],
      international: false,
    },
    {
      key: 'MH80_007',
      name: {
        fi: 'Mikrobiologian ja mikrobibiotekniikan maisteriohjelma',
        en: "Master's Programme in Microbiology and Microbial Biotechnology",
        sv: 'Magisterprogrammet i mikrobiologi och mikrobiell bioteknik',
      },
      level: 'master',
      companionFaculties: ['bio- ja ympäristötieteellinen'],
      international: true,
    },
    {
      key: 'MH80_008', // This one is mostly a mystery, hard to find information.
      name: {
        fi: "Erasmus-Mundus Master's Programme in Plant Breeding",
        en: "Erasmus-Mundus Master's Programme in Plant Breeding",
        sv: "Erasmus-Mundus Master's Programme in Plant Breeding",
      },
      level: 'master',
      companionFaculties: [], // best guess
      international: true,
    },
    {
      key: 'T922104',
      name: {
        fi: 'Uusiutuvien luonnonvarojen kestävän käytön tohtoriohjelma',
        en: 'Doctoral Programme in Sustainable Use of Renewable Natural Resources',
        sv: 'Doktorandprogrammet i hållbart utnyttjande av förnybara naturresurser',
      },
      level: 'doctoral',
      companionFaculties: ['bio- ja ympäristötieteellinen'],
      international: false,
    },
    {
      key: 'T922105',
      name: {
        fi: 'Mikrobiologian ja biotekniikan tohtoriohjelma',
        en: 'Doctoral Programme in Microbiology and Biotechnology',
        sv: 'Doktorandprogrammet i mikrobiologi och bioteknik',
      },
      level: 'doctoral',
      companionFaculties: [
        'eläinlääketieteellinen',
        'bio- ja ympäristötieteellinen',
      ],
      international: false,
    },
  ],
}

const elainlaaketieteellinen: Faculty = {
  code: 'H90',
  name: {
    fi: 'Eläinlääketieteellinen tiedekunta',
    en: 'Faculty of Veterinary Medicine',
    sv: 'Veterinärmedicinska fakulteten',
  },
  programmes: [
    {
      key: 'KH90_001',
      name: {
        fi: 'Eläinlääketieteen kandiohjelma',
        en: "Bachelor's Programme in Veterinary Medicine",
        sv: 'Kandidatsprogrammet i veterinärmedicin',
      },
      level: 'bachelor',
      companionFaculties: [],
      international: false,
    },
    {
      key: 'MH90_001',
      name: {
        fi: 'Eläinlääketieteen lisensiaatin koulutusohjelma',
        en: 'Degree Programme in Veterinary Medicine',
        sv: 'Utbildningsprogrammet i veterinärmedicin',
      },
      level: 'master',
      companionFaculties: [],
      international: false,
    },
    {
      key: 'T921108',
      name: {
        fi: 'Kliinisen eläinlääketieteen tohtoriohjelma',
        en: 'Doctoral Programme in Clinical Veterinary Medicine',
        sv: 'Doktorandprogrammet i klinisk veterinärmedicin',
      },
      level: 'doctoral',
      companionFaculties: ['maatalous-metsätieteellinen'],
      international: false,
    },
    {
      key: 'T922106',
      name: {
        fi: 'Ruokaketjun ja terveyden tohtoriohjelma',
        en: 'Doctoral Programme in Food Chain and Health',
        sv: 'Doktorandprogrammet i livsmedelskedjan och hälsa',
      },
      level: 'doctoral',
      companionFaculties: ['maatalous-metsätieteellinen'],
      international: false,
    },
  ],
} as const

const kielikeskus: IndependentInstitute = {
  code: 'H906',
  name: {
    fi: 'Kielikeskus',
    en: 'Language Centre',
    sv: 'Språkcentrum',
  },
  programmes: [],
  independentInstitute: true,
} as const

export const FACULTIES: Readonly<Faculty[]> = [
  humanistinen,
  teologinen,
  oikeustieteellinen,
  laaketieteellinen,
  matemaattisLuonnontieteellinen,
  farmasia,
  bioYmparistotieteellinen,
  kasvatustieteellinen,
  valtiotieteellinen,
  sockom,
  maatalousMetsatieteellinen,
  elainlaaketieteellinen,
  kielikeskus,
] as const
