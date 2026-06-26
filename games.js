const teamBadges = {
  "DSHS SnowTrex Köln": {
    "short": "DSK",
    "color": "#0D6FB8",
    "text": "#FFFFFF"
  },
  "Eintracht Spontent Düsseldorf": {
    "short": "ESD",
    "color": "#343434",
    "text": "#FFFFFF"
  },
  "ESA Grimma Volleys": {
    "short": "EGV",
    "color": "#C3C3C3",
    "text": "#111111"
  },
  "BayerVolleys Leverkusen": {
    "short": "BVL",
    "color": "#343434",
    "text": "#FFFFFF"
  },
  "NawaRo Straubing": {
    "short": "STR",
    "color": "#EE7101",
    "text": "#FFFFFF"
  },
  "Neuseenland-Volleys Markkleeberg": {
    "short": "NVM",
    "color": "#65B32E",
    "text": "#FFFFFF"
  },
  "Sparkassen Wildcats Stralsund": {
    "short": "SWS",
    "color": "#343434",
    "text": "#FFFFFF"
  },
  "TV Planegg-Krailling": {
    "short": "TVP",
    "color": "#A4CFA1",
    "text": "#111111"
  },
  "TV Waldgirmes": {
    "short": "TVW",
    "color": "#3898CF",
    "text": "#FFFFFF"
  },
  "VCO Dresden": {
    "short": "VCO",
    "color": "#009CD0",
    "text": "#FFFFFF"
  },
  "VfL Oythe": {
    "short": "OYT",
    "color": "#E31825",
    "text": "#FFFFFF"
  },
  "Rote Raben Vilsbiburg": {
    "short": "RRV",
    "color": "#E20010",
    "text": "#FFFFFF"
  },
  "BBSC Berlin": {
    "short": "BER",
    "color": "#D70079",
    "text": "#FFFFFF"
  },
  "TV Dingolfing": {
    "short": "TVD",
    "color": "#E0B187",
    "text": "#111111"
  },
  "TV Hörde": {
    "short": "TVH",
    "color": "#111111",
    "text": "#FFFFFF"
  }
};

const teamProfileUrls = {
  "DSHS SnowTrex Köln": "https://www.volleyball-bundesliga.de/cms/home/2_bundesliga_frauen/2_bundesliga_frauen_pro/mannschaften.xhtml?c.teamId=776308895",
  "Eintracht Spontent Düsseldorf": "https://www.volleyball-bundesliga.de/cms/home/2_bundesliga_frauen/2_bundesliga_frauen_pro/mannschaften.xhtml?c.teamId=776311815",
  "ESA Grimma Volleys": "https://www.volleyball-bundesliga.de/cms/home/2_bundesliga_frauen/2_bundesliga_frauen_pro/mannschaften.xhtml?c.teamId=776308803",
  "BayerVolleys Leverkusen": "https://www.volleyball-bundesliga.de/cms/home/2_bundesliga_frauen/2_bundesliga_frauen_pro/mannschaften.xhtml?c.teamId=776308933",
  "NawaRo Straubing": "https://www.volleyball-bundesliga.de/cms/home/2_bundesliga_frauen/2_bundesliga_frauen_pro/mannschaften.xhtml?c.teamId=776308823",
  "Neuseenland-Volleys Markkleeberg": "https://www.volleyball-bundesliga.de/cms/home/2_bundesliga_frauen/2_bundesliga_frauen_pro/mannschaften.xhtml?c.teamId=776309559",
  "Sparkassen Wildcats Stralsund": "https://www.volleyball-bundesliga.de/cms/home/2_bundesliga_frauen/2_bundesliga_frauen_pro/mannschaften.xhtml?c.teamId=776309386",
  "TV Planegg-Krailling": "https://www.volleyball-bundesliga.de/cms/home/2_bundesliga_frauen/2_bundesliga_frauen_pro/mannschaften.xhtml?c.teamId=776309673",
  "TV Waldgirmes": "https://www.volleyball-bundesliga.de/cms/home/2_bundesliga_frauen/2_bundesliga_frauen_pro/mannschaften.xhtml?c.teamId=776309795",
  "VCO Dresden": "https://www.volleyball-bundesliga.de/cms/home/2_bundesliga_frauen/2_bundesliga_frauen_pro/mannschaften.xhtml?c.teamId=776309105",
  "VfL Oythe": "https://www.volleyball-bundesliga.de/cms/home/2_bundesliga_frauen/2_bundesliga_frauen_pro/mannschaften.xhtml?c.teamId=776308853",
  "Rote Raben Vilsbiburg": "https://www.volleyball-bundesliga.de/cms/home/2_bundesliga_frauen/2_bundesliga_frauen_pro/mannschaften.xhtml?c.teamId=776309082",
  "BBSC Berlin": "https://www.volleyball-bundesliga.de/cms/home/2_bundesliga_frauen/2_bundesliga_frauen_pro/mannschaften.xhtml?c.teamId=776308987",
  "TV Dingolfing": "https://www.volleyball-bundesliga.de/cms/home/2_bundesliga_frauen/2_bundesliga_frauen_pro/mannschaften.xhtml?c.teamId=776309004",
  "TV Hörde": "https://www.volleyball-bundesliga.de/cms/home/2_bundesliga_frauen/2_bundesliga_frauen_pro/mannschaften.xhtml?c.teamId=776309275"
};

const teamLogoUrls = {
  "DSHS SnowTrex Köln": "https://www.volleyball-bundesliga.de/uploads/9d7057ef-e7c8-4d41-9c70-3efce1b653a3/DSHS+SnowTrex+K%C3%B6ln.png",
  "BBSC Berlin": "https://www.volleyball-bundesliga.de/uploads/131fc503-06e0-4f69-a475-84adf278b0d9/BBSC+Berlin.png",
  "BayerVolleys Leverkusen": "https://www.volleyball-bundesliga.de/uploads/bb11fe67-9f40-49ed-a42f-1e99316dadf9/Bayer+Leverkusen.png",
  "ESA Grimma Volleys": "https://www.volleyball-bundesliga.de/uploads/e1c6edbd-64a5-4055-8f01-28c03e70f558/ESA+Grimma+Volleys_kreis.png",
  "Eintracht Spontent Düsseldorf": "https://www.volleyball-bundesliga.de/uploads/11eb6af6-6268-4767-8c60-813b6161d2fc/Eintracht+Spontent_Kreis.png",
  "TV Hörde": "https://www.volleyball-bundesliga.de/uploads/0a049112-a6b6-49b9-8e9d-38f09c907cb7/TV+H%C3%B6rde.png",
  "VfL Oythe": "https://www.volleyball-bundesliga.de/uploads/10c17d7b-d082-4d7d-a4e0-f1d800544ff8/oythe.png",
  "NawaRo Straubing": "https://www.volleyball-bundesliga.de/uploads/825c2558-e734-45c0-a93d-261df75fb4c3/Straubing.png",
  "Neuseenland-Volleys Markkleeberg": "https://www.volleyball-bundesliga.de/uploads/befce1b4-d568-4ffd-928a-d351be3301eb/Neuseenland-Volleys+Markkleeberg.png",
  "Rote Raben Vilsbiburg": "https://www.volleyball-bundesliga.de/uploads/19de3821-7526-4e46-a0b9-9cd60bf0535e/Vilsbiburg.png",
  "Sparkassen Wildcats Stralsund": "https://www.volleyball-bundesliga.de/uploads/edc53223-6279-497b-8f0c-a3b2bf93eed8/Sparkassen+Wildcats+Stralsund.png",
  "TV Dingolfing": "https://www.volleyball-bundesliga.de/uploads/b87f5e38-7eb4-4966-84a1-be0e4839f151/TV+Dingolfing.png",
  "TV Planegg-Krailling": "https://www.volleyball-bundesliga.de/uploads/c44d2e47-3206-4312-ac8e-067faff3ac85/Planegg-Krailling_Kreis.png",
  "TV Waldgirmes": "https://www.volleyball-bundesliga.de/uploads/89cb6afe-a0c8-4c30-a4c6-34cbe79176aa/TV_Waldgirmes_kreis.png",
  "VCO Dresden": "https://www.volleyball-bundesliga.de/uploads/33ebca47-ee88-4505-80a3-8f625a651bdc/Dresden.png"
};

const youtubeViewsDate = "26.06.2026";

const youtubeViews = {
  "3004": 15228,
  "3010": 1763,
  "3016": 1875,
  "3024": 1526,
  "3034": 1805,
  "3038": 1124,
  "3046": 1623,
  "3052": 1118,
  "3059": 1745,
  "3064": 1260,
  "3073": 1018,
  "3083": 1048,
  "3087": 1381,
  "3095": 1813,
  "3101": 1127,
  "3107": 1446,
  "3115": 1265,
  "3125": 1887,
  "3129": 892,
  "3137": 1549,
  "3143": 805,
  "3150": 923,
  "3155": 1193,
  "3164": 1298,
  "3174": 700,
  "3178": 1021,
  "3188": 1404,
  "3202": 1369
};

const finalStandingsSource = "VBL-Tabelle, Stand 06.05.2026";

const finalStandings = {
  "overall": [
    {
      "rank": 1,
      "team": "Rote Raben Vilsbiburg",
      "played": 28,
      "wins": 26,
      "sets": "80:11",
      "balls": "2215:1651",
      "points": 79
    },
    {
      "rank": 2,
      "team": "NawaRo Straubing",
      "played": 28,
      "wins": 24,
      "sets": "76:28",
      "balls": "2439:1973",
      "points": 72
    },
    {
      "rank": 3,
      "team": "VfL Oythe",
      "played": 28,
      "wins": 24,
      "sets": "75:32",
      "balls": "2485:2184",
      "points": 69
    },
    {
      "rank": 4,
      "team": "TV Planegg-Krailling",
      "played": 28,
      "wins": 22,
      "sets": "71:30",
      "balls": "2327:2023",
      "points": 63
    },
    {
      "rank": 5,
      "team": "VCO Dresden",
      "played": 28,
      "wins": 17,
      "sets": "65:45",
      "balls": "2422:2341",
      "points": 52
    },
    {
      "rank": 6,
      "team": "DSHS SnowTrex Köln",
      "played": 28,
      "wins": 15,
      "sets": "56:52",
      "balls": "2357:2400",
      "points": 45
    },
    {
      "rank": 7,
      "team": "BayerVolleys Leverkusen",
      "played": 28,
      "wins": 15,
      "sets": "55:53",
      "balls": "2358:2293",
      "points": 44
    },
    {
      "rank": 8,
      "team": "TV Waldgirmes",
      "played": 28,
      "wins": 14,
      "sets": "54:49",
      "balls": "2258:2248",
      "points": 42
    },
    {
      "rank": 9,
      "team": "ESA Grimma Volleys",
      "played": 28,
      "wins": 13,
      "sets": "49:59",
      "balls": "2282:2309",
      "points": 35
    },
    {
      "rank": 10,
      "team": "Sparkassen Wildcats Stralsund",
      "played": 28,
      "wins": 11,
      "sets": "49:63",
      "balls": "2332:2464",
      "points": 35
    },
    {
      "rank": 11,
      "team": "Eintracht Spontent Düsseldorf",
      "played": 28,
      "wins": 9,
      "sets": "43:67",
      "balls": "2284:2456",
      "points": 27
    },
    {
      "rank": 12,
      "team": "Neuseenland-Volleys Markkleeberg",
      "played": 28,
      "wins": 7,
      "sets": "34:70",
      "balls": "2128:2386",
      "points": 21
    },
    {
      "rank": 13,
      "team": "TV Dingolfing",
      "played": 28,
      "wins": 5,
      "sets": "32:75",
      "balls": "2134:2493",
      "points": 18
    },
    {
      "rank": 14,
      "team": "TV Hörde",
      "played": 28,
      "wins": 4,
      "sets": "26:77",
      "balls": "2067:2405",
      "points": 16
    },
    {
      "rank": 15,
      "team": "BBSC Berlin",
      "played": 28,
      "wins": 4,
      "sets": "24:78",
      "balls": "1968:2430",
      "points": 12
    }
  ],
  "home": [
    {
      "rank": 1,
      "team": "Rote Raben Vilsbiburg",
      "played": 14,
      "wins": 14,
      "sets": "42:3",
      "balls": "1108:803",
      "points": 42
    },
    {
      "rank": 2,
      "team": "VfL Oythe",
      "played": 14,
      "wins": 13,
      "sets": "41:10",
      "balls": "1229:1000",
      "points": 40
    },
    {
      "rank": 3,
      "team": "NawaRo Straubing",
      "played": 14,
      "wins": 11,
      "sets": "37:15",
      "balls": "1215:1018",
      "points": 35
    },
    {
      "rank": 4,
      "team": "TV Planegg-Krailling",
      "played": 14,
      "wins": 11,
      "sets": "34:15",
      "balls": "1121:975",
      "points": 31
    },
    {
      "rank": 5,
      "team": "VCO Dresden",
      "played": 14,
      "wins": 8,
      "sets": "32:24",
      "balls": "1243:1190",
      "points": 24
    },
    {
      "rank": 6,
      "team": "BayerVolleys Leverkusen",
      "played": 14,
      "wins": 8,
      "sets": "31:26",
      "balls": "1245:1165",
      "points": 24
    },
    {
      "rank": 7,
      "team": "TV Waldgirmes",
      "played": 14,
      "wins": 8,
      "sets": "28:24",
      "balls": "1143:1119",
      "points": 23
    },
    {
      "rank": 8,
      "team": "Sparkassen Wildcats Stralsund",
      "played": 14,
      "wins": 7,
      "sets": "29:28",
      "balls": "1205:1241",
      "points": 21
    },
    {
      "rank": 9,
      "team": "DSHS SnowTrex Köln",
      "played": 14,
      "wins": 7,
      "sets": "27:28",
      "balls": "1162:1199",
      "points": 20
    },
    {
      "rank": 10,
      "team": "ESA Grimma Volleys",
      "played": 14,
      "wins": 7,
      "sets": "27:28",
      "balls": "1201:1165",
      "points": 19
    },
    {
      "rank": 11,
      "team": "Eintracht Spontent Düsseldorf",
      "played": 14,
      "wins": 5,
      "sets": "25:30",
      "balls": "1196:1187",
      "points": 18
    },
    {
      "rank": 12,
      "team": "TV Dingolfing",
      "played": 14,
      "wins": 5,
      "sets": "20:33",
      "balls": "1078:1210",
      "points": 14
    },
    {
      "rank": 13,
      "team": "TV Hörde",
      "played": 14,
      "wins": 4,
      "sets": "17:35",
      "balls": "1093:1199",
      "points": 13
    },
    {
      "rank": 14,
      "team": "Neuseenland-Volleys Markkleeberg",
      "played": 14,
      "wins": 4,
      "sets": "16:34",
      "balls": "1023:1145",
      "points": 11
    },
    {
      "rank": 15,
      "team": "BBSC Berlin",
      "played": 14,
      "wins": 2,
      "sets": "12:38",
      "balls": "983:1195",
      "points": 7
    }
  ],
  "away": [
    {
      "rank": 1,
      "team": "NawaRo Straubing",
      "played": 14,
      "wins": 13,
      "sets": "39:13",
      "balls": "1224:955",
      "points": 37
    },
    {
      "rank": 2,
      "team": "Rote Raben Vilsbiburg",
      "played": 14,
      "wins": 12,
      "sets": "38:8",
      "balls": "1107:848",
      "points": 37
    },
    {
      "rank": 3,
      "team": "TV Planegg-Krailling",
      "played": 14,
      "wins": 11,
      "sets": "37:15",
      "balls": "1206:1048",
      "points": 32
    },
    {
      "rank": 4,
      "team": "VfL Oythe",
      "played": 14,
      "wins": 11,
      "sets": "34:22",
      "balls": "1256:1184",
      "points": 29
    },
    {
      "rank": 5,
      "team": "VCO Dresden",
      "played": 14,
      "wins": 9,
      "sets": "33:21",
      "balls": "1179:1151",
      "points": 28
    },
    {
      "rank": 6,
      "team": "DSHS SnowTrex Köln",
      "played": 14,
      "wins": 8,
      "sets": "29:24",
      "balls": "1195:1201",
      "points": 25
    },
    {
      "rank": 7,
      "team": "BayerVolleys Leverkusen",
      "played": 14,
      "wins": 7,
      "sets": "24:27",
      "balls": "1113:1128",
      "points": 20
    },
    {
      "rank": 8,
      "team": "TV Waldgirmes",
      "played": 14,
      "wins": 6,
      "sets": "26:25",
      "balls": "1115:1129",
      "points": 19
    },
    {
      "rank": 9,
      "team": "ESA Grimma Volleys",
      "played": 14,
      "wins": 6,
      "sets": "22:31",
      "balls": "1081:1144",
      "points": 16
    },
    {
      "rank": 10,
      "team": "Sparkassen Wildcats Stralsund",
      "played": 14,
      "wins": 4,
      "sets": "20:35",
      "balls": "1127:1223",
      "points": 14
    },
    {
      "rank": 11,
      "team": "Neuseenland-Volleys Markkleeberg",
      "played": 14,
      "wins": 3,
      "sets": "18:36",
      "balls": "1105:1241",
      "points": 10
    },
    {
      "rank": 12,
      "team": "Eintracht Spontent Düsseldorf",
      "played": 14,
      "wins": 4,
      "sets": "18:37",
      "balls": "1088:1269",
      "points": 9
    },
    {
      "rank": 13,
      "team": "BBSC Berlin",
      "played": 14,
      "wins": 2,
      "sets": "12:40",
      "balls": "985:1235",
      "points": 5
    },
    {
      "rank": 14,
      "team": "TV Dingolfing",
      "played": 14,
      "wins": 0,
      "sets": "12:42",
      "balls": "1056:1283",
      "points": 4
    },
    {
      "rank": 15,
      "team": "TV Hörde",
      "played": 14,
      "wins": 0,
      "sets": "9:42",
      "balls": "974:1206",
      "points": 3
    }
  ]
};

const playerProfileUrls = {
  "Carlotta Strube": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776311815&userId=678972761",
  "Valbona Ismaili": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308823&userId=158916735",
  "Marian Mischo": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308933&userId=685843413",
  "Georgia McGovern": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308853&userId=777895387",
  "Charlotte Kerscher": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308823&userId=767528985",
  "Lilly Roßberg": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309559&userId=770982472",
  "Pia Fernau": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309082&userId=678774889",
  "Sophia Minlend": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308987&userId=752329376",
  "Mille Kjosaas": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309386&userId=778013892",
  "Amber de Tant": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308823&userId=751749162",
  "Franziska Nitsche": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309559&userId=9958921",
  "Theresa Barner": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308823&userId=750792046",
  "Maja Löcker": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309795&userId=750736056",
  "Maia Rackel": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308823&userId=771986028",
  "Zoe Albert": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309105&userId=771894233",
  "Julia Ziegler": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309673&userId=742449977",
  "Emelie Siegner": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308895&userId=70748100",
  "Franziska Finke": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309275&userId=45496772",
  "Katherine Konkle": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309004&userId=777954769",
  "Marie Dreblow": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308803&userId=70141787",
  "Maria Petkova": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308853&userId=777895333",
  "Jette Hippel": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309105&userId=777554134",
  "Delaney Elizabeth Hogan": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308823&userId=777743932",
  "Paula Reinisch": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308987&userId=13394655",
  "Paula Gürsching": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308823&userId=742778846",
  "Gesa Brandstrup": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309386&userId=752329134",
  "Leonie Amann": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309795&userId=70434234",
  "Elisabeth Kettenbach": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309673&userId=59149633",
  "Annika Stenchly": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308895&userId=70003721",
  "Franziska Koob": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309004&userId=742778854",
  "Emma Neukirchen": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309275&userId=771345481",
  "Sophie Dreblow": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308803&userId=383895"
};

const gameSummaries = {};

const games = [
  {
    number: 3004,
    matchId: 777353312,
    weekday: "Samstag",
    date: "20.09.2025",
    time: "19:00",
    home: "Eintracht Spontent Düsseldorf",
    away: "NawaRo Straubing",
    score: "2:3",
    ballPoints: "92:114",
    sets: [
      "25:23",
      "14:25",
      "28:26",
      "13:25",
      "12:15"
    ],
    statsUrl: "https://distributor.sams-score.de/scoresheet/pdf/208332e9-b3a9-43e5-aad4-34a82f56af84/3004",
    rankAfter: 4,
    venue: "DH Brinckmannstraße, Hulda Pankok",
    spectators: 100,
    duration: 109,
    mvps: [
      {
        team: "Eintracht Spontent Düsseldorf",
        name: "Carlotta Strube",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776311815&userId=678972761"
      },
      {
        team: "NawaRo Straubing",
        name: "Valbona Ismaili",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308823&userId=158916735"
      }
    ],
    articleUrl: "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=778429330",
    summary: [
      "In einem hochdramatischen und emotionalen Volleyballkrimi der 2. Bundesliga Pro der Frauen musste sich Eintracht Spontent am Dienstagabend knapp mit 2:3 dem Topteam NawaRo Straubing geschlagen geben."
    ],
    videoUrl: "https://www.youtube.com/watch?v=cIskygiYw40&pp=ygUzRFlOIEVpbnRyYWNodCBTcG9udGVudCBEw7xzc2VsZG9yZiBOYXdhcm8gU3RyYXViaW5n"
  },
  {
    number: 3010,
    matchId: 777353355,
    weekday: "Samstag",
    date: "27.09.2025",
    time: "19:00",
    home: "NawaRo Straubing",
    away: "BayerVolleys Leverkusen",
    score: "2:3",
    ballPoints: "108:102",
    sets: [
      "23:25",
      "21:25",
      "25:21",
      "25:15",
      "14:16"
    ],
    statsUrl: "https://distributor.sams-score.de/scoresheet/pdf/a65ccd96-f4d0-427f-9364-82fbc31d995a/3010",
    rankAfter: 7,
    venue: "turmair Volleyballarena",
    spectators: 600,
    duration: 123,
    mvps: [
      {
        team: "NawaRo Straubing",
        name: "Valbona Ismaili",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308823&userId=158916735"
      },
      {
        team: "BayerVolleys Leverkusen",
        name: "Marian Mischo",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308933&userId=685843413"
      }
    ],
    articleUrl: "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=778504288",
    summary: [
      "Beim hart erkämpften 3:2 in Straubing wird Marian Mischo zur wertvollsten Spielerin gewählt"
    ],
    videoUrl: "https://www.youtube.com/watch?v=iUW-B97dKew"
  },
  {
    number: 3016,
    matchId: 777353386,
    weekday: "Samstag",
    date: "04.10.2025",
    time: "18:00",
    home: "VfL Oythe",
    away: "NawaRo Straubing",
    score: "2:3",
    ballPoints: "98:104",
    sets: [
      "19:25",
      "17:25",
      "25:19",
      "25:20",
      "12:15"
    ],
    statsUrl: "https://distributor.sams-score.de/scoresheet/pdf/959df3eb-1ef6-4455-bc80-578769bfdb8d/3016",
    rankAfter: 6,
    venue: "SH Gymnasium Antonianum Vechta",
    spectators: 215,
    duration: 124,
    mvps: [
      {
        team: "VfL Oythe",
        name: "Georgia McGovern",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308853&userId=777895387"
      },
      {
        team: "NawaRo Straubing",
        name: "Valbona Ismaili",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308823&userId=158916735"
      }
    ],
    articleUrl: "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=778576820",
    summary: [
      "Es war das erwartet schwere Auswärtsspiel für NawaRo Straubing beim VfL Oythe, aber am Ende konnten die Gäubodenstädterinnen mit zwei Zählern im Gepäck die Heimreise antreten."
    ],
    videoUrl: "https://www.youtube.com/live/X1TifBuQR5I?si=DaxwatD3wjLkHo-o"
  },
  {
    number: 3024,
    matchId: 777353441,
    weekday: "Samstag",
    date: "11.10.2025",
    time: "19:00",
    home: "NawaRo Straubing",
    away: "Neuseenland-Volleys Markkleeberg",
    score: "3:1",
    ballPoints: "98:80",
    sets: [
      "25:15",
      "22:25",
      "25:16",
      "26:24"
    ],
    statsUrl: "https://distributor.sams-score.de/scoresheet/pdf/7d8f678f-6ee1-4467-9a21-4d110fe07190/3024",
    rankAfter: 5,
    venue: "turmair Volleyballarena",
    spectators: 400,
    duration: 99,
    mvps: [
      {
        team: "NawaRo Straubing",
        name: "Charlotte Kerscher",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308823&userId=767528985"
      },
      {
        team: "Neuseenland-Volleys Markkleeberg",
        name: "Lilly Roßberg",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309559&userId=770982472"
      }
    ],
    articleUrl: "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=778675270",
    summary: [
      "Zum zweiten Auswärtsspiel der Saison erwartete am 11.10.2025 mit dem Vorjahresfünften und aktuellen Tabellensiebenten NawaRo Straubing eine bundes-ligaerfahrene Mannschaft die Neuseenland-Volleys"
    ],
    videoUrl: "https://www.youtube.com/live/4DqRDrqLc84?si=AuL-2ejbQRvqnjBl"
  },
  {
    number: 3034,
    matchId: 777353496,
    weekday: "Samstag",
    date: "18.10.2025",
    time: "19:00",
    home: "Rote Raben Vilsbiburg",
    away: "NawaRo Straubing",
    score: "3:0",
    ballPoints: "75:58",
    sets: [
      "25:21",
      "25:23",
      "25:14"
    ],
    statsUrl: "https://distributor.sams-score.de/scoresheet/pdf/060844cd-d73b-4215-8828-23d91a6fbaa2/3034",
    rankAfter: 7,
    venue: "Ballsporthalle Vilsbiburg",
    spectators: 1293,
    duration: 69,
    mvps: [
      {
        team: "Rote Raben Vilsbiburg",
        name: "Pia Fernau",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309082&userId=678774889"
      },
      {
        team: "NawaRo Straubing",
        name: "Valbona Ismaili",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308823&userId=158916735"
      }
    ],
    articleUrl: "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=778784266",
    summary: [
      "Der langjährige Erstligist Rote Raben Vilsbiburg war am Samstagabend für die Gäubodenstädterinnen eine Nummer zu groß. Am Ende stand ein 0:3 aus NawaRo-Sicht."
    ],
    videoUrl: "https://www.youtube.com/live/dkBUaQSwYAI?si=xtEo70digjrBO-H8"
  },
  {
    number: 3038,
    matchId: 777353527,
    weekday: "Samstag",
    date: "01.11.2025",
    time: "19:00",
    home: "NawaRo Straubing",
    away: "BBSC Berlin",
    score: "3:0",
    ballPoints: "77:58",
    sets: [
      "27:25",
      "25:16",
      "25:17"
    ],
    statsUrl: "https://distributor.sams-score.de/scoresheet/pdf/9fd8c517-61b4-446f-9c1e-1be5054c6f13/3038",
    rankAfter: 6,
    venue: "turmair Volleyballarena",
    spectators: 100,
    duration: 72,
    mvps: [
      {
        team: "NawaRo Straubing",
        name: "Valbona Ismaili",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308823&userId=158916735"
      },
      {
        team: "BBSC Berlin",
        name: "Sophia Minlend",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308987&userId=752329376"
      }
    ],
    articleUrl: "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=779014400",
    summary: [
      "Ohne Punkte für die Tabelle kehrte der BBSC vom Auswärtsspiel in die Hauptstadt zurück, jedoch war das Auftreten der Mannschaft ein Kompliment wert: nie aufgesteckt und knapp vor Satzgewinn"
    ],
    videoUrl: "https://www.youtube.com/live/V78zP-BNmSc?si=a3HAD5P3ybQDhgJd"
  },
  {
    number: 3046,
    matchId: 777353570,
    weekday: "Samstag",
    date: "15.11.2025",
    time: "17:00",
    home: "Sparkassen Wildcats Stralsund",
    away: "NawaRo Straubing",
    score: "1:3",
    ballPoints: "65:95",
    sets: [
      "25:20",
      "14:25",
      "13:25",
      "13:25"
    ],
    statsUrl: "https://distributor.sams-score.de/scoresheet/pdf/b8e92775-1cdf-40fc-bf9d-905393e8d457/3046",
    rankAfter: 5,
    venue: "Diesterweg-Sporthalle",
    spectators: 473,
    duration: 85,
    mvps: [
      {
        team: "Sparkassen Wildcats Stralsund",
        name: "Mille Kjosaas",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309386&userId=778013892"
      },
      {
        team: "NawaRo Straubing",
        name: "Amber de Tant",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308823&userId=751749162"
      }
    ],
    articleUrl: "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=779285948",
    summary: [
      "Nach einem furiosen Spiel im Pokal zeigte das Team eine ernüchternde Leistung"
    ],
    videoUrl: "https://www.youtube.com/live/aP7UdWGicRc?si=958bOjAQaAYnLxV0"
  },
  {
    number: 3115,
    matchId: 777354000,
    weekday: "Sonntag",
    date: "16.11.2025",
    time: "15:00",
    home: "Neuseenland-Volleys Markkleeberg",
    away: "NawaRo Straubing",
    score: "1:3",
    ballPoints: "79:96",
    sets: [
      "15:25",
      "19:25",
      "25:21",
      "20:25"
    ],
    statsUrl: "https://distributor.sams-score.de/scoresheet/pdf/8bb21828-b6c3-4a5c-99fe-a5577267e884/3115",
    rankAfter: 4,
    venue: "Neuseenlandhalle",
    spectators: 223,
    duration: 85,
    mvps: [
      {
        team: "Neuseenland-Volleys Markkleeberg",
        name: "Franziska Nitsche",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309559&userId=9958921"
      },
      {
        team: "NawaRo Straubing",
        name: "Theresa Barner",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308823&userId=750792046"
      }
    ],
    articleUrl: "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=779290045",
    summary: [
      "Am Sonntag, dem 16.11.2025, kamen die Damen von NawaRo Straubing inclusive einiger freundlicher Fans schon zum Saisonrückspiel nach Markkleeberg."
    ],
    videoUrl: "https://www.youtube.com/live/5Hl90D9nhvU?si=SDynTlKQAm_CWYjf"
  },
  {
    number: 3052,
    matchId: 777353613,
    weekday: "Samstag",
    date: "22.11.2025",
    time: "19:00",
    home: "NawaRo Straubing",
    away: "TV Waldgirmes",
    score: "3:1",
    ballPoints: "94:92",
    sets: [
      "17:25",
      "27:25",
      "25:20",
      "25:22"
    ],
    statsUrl: "https://distributor.sams-score.de/scoresheet/pdf/4e3282e7-ccd9-4d53-9bad-7cda3bd1f088/3052",
    rankAfter: 2,
    venue: "turmair Volleyballarena",
    spectators: 250,
    duration: 94,
    mvps: [
      {
        team: "NawaRo Straubing",
        name: "Theresa Barner",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308823&userId=750792046"
      },
      {
        team: "TV Waldgirmes",
        name: "Maja Löcker",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309795&userId=750736056"
      }
    ],
    articleUrl: "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=779392290",
    summary: [
      "Nawaro Straubing - TV Waldgirmes 3:1 / 94:92 (17:25 27:25 25:20 25:22) „Es war einfach unglaublich schwer sie out of system zu bekommen.“ sagte Trainer Daniel Bock nach dem Spiel."
    ],
    videoUrl: "https://www.youtube.com/live/2RGQWsr9K94?si=CrUJR-UriWw-uvze"
  },
  {
    number: 3202,
    matchId: 777354520,
    weekday: "Samstag",
    date: "29.11.2025",
    time: "19:00",
    home: "NawaRo Straubing",
    away: "VCO Dresden",
    score: "3:1",
    ballPoints: "102:72",
    sets: [
      "27:29",
      "25:11",
      "25:13",
      "25:19"
    ],
    statsUrl: "https://distributor.sams-score.de/scoresheet/pdf/020f1071-7be5-44f6-bcd7-f528f1111f74/3202",
    rankAfter: 2,
    venue: "turmair Volleyballarena",
    spectators: 150,
    duration: 86,
    mvps: [
      {
        team: "NawaRo Straubing",
        name: "Maia Rackel",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308823&userId=771986028"
      },
      {
        team: "VCO Dresden",
        name: "Zoe Albert",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309105&userId=771894233"
      }
    ],
    articleUrl: "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=779472358",
    summary: [
      "Am Samstagabend bezwingt NawaRo Straubing in beeindruckender Manier die top ausgebildeten Talente von VCO Dresden vor rund 350 Zuschauern mit 3:1 (27:29 25:11 25:13 25:19)."
    ],
    videoUrl: "https://www.youtube.com/live/6k_iE3Cvrk4?si=MGwl6zkUojmUdTxv"
  },
  {
    number: 3059,
    matchId: 777353650,
    weekday: "Sonntag",
    date: "30.11.2025",
    time: "16:00",
    home: "NawaRo Straubing",
    away: "TV Planegg-Krailling",
    score: "2:3",
    ballPoints: "97:102",
    sets: [
      "25:23",
      "22:25",
      "13:25",
      "25:14",
      "12:15"
    ],
    statsUrl: "https://distributor.sams-score.de/scoresheet/pdf/5ad2153b-801a-48f5-bf5c-250744780150/3059",
    rankAfter: 2,
    venue: "turmair Volleyballarena",
    spectators: 400,
    duration: 106,
    mvps: [
      {
        team: "NawaRo Straubing",
        name: "Maia Rackel",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308823&userId=771986028"
      },
      {
        team: "TV Planegg-Krailling",
        name: "Julia Ziegler",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309673&userId=742449977"
      }
    ],
    articleUrl: "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=779489769",
    summary: [
      "NawaRo Straubing beendet das Heimspielwochenende mit einer denkbar knappen 2:3-Niederlage gegen den TV Planegg-Krailling (25:23 22:25 13:25 25:14 12:15)."
    ],
    videoUrl: "https://www.youtube.com/live/Gbc-NFKxP_c?si=GwDipqBfGvkwU5D1"
  },
  {
    number: 3064,
    matchId: 777353687,
    weekday: "Samstag",
    date: "06.12.2025",
    time: "20:00",
    home: "DSHS SnowTrex Köln",
    away: "NawaRo Straubing",
    score: "1:3",
    ballPoints: "65:97",
    sets: [
      "25:22",
      "13:25",
      "10:25",
      "17:25"
    ],
    statsUrl: "https://distributor.sams-score.de/scoresheet/pdf/e11666bf-cbcc-48ac-aa7f-2c24bbe73f41/3064",
    rankAfter: 2,
    venue: "Deutsche Sporthochschule Köln, Halle 22",
    spectators: 120,
    duration: 88,
    mvps: [
      {
        team: "DSHS SnowTrex Köln",
        name: "Emelie Siegner",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308895&userId=70748100"
      },
      {
        team: "NawaRo Straubing",
        name: "Valbona Ismaili",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308823&userId=158916735"
      }
    ],
    articleUrl: "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=779583782",
    summary: [
      "DSHS SnowTrex Köln hat zum Auftakt des Doppelspieltags in der Sparda 2. Liga Pro trotz guter Anfangsphase eine 1:3-Heimniederlage gegen den Tabellenzweiten NawaRo Straubing hinnehmen müssen."
    ],
    videoUrl: "https://www.youtube.com/watch?v=0jImxEjn9xc"
  },
  {
    number: 3083,
    matchId: 777353797,
    weekday: "Sonntag",
    date: "07.12.2025",
    time: "16:00",
    home: "TV Hörde",
    away: "NawaRo Straubing",
    score: "0:3",
    ballPoints: "43:75",
    sets: [
      "14:25",
      "13:25",
      "16:25"
    ],
    statsUrl: "https://distributor.sams-score.de/scoresheet/pdf/ac29fc55-2327-4f9d-86f9-257b08e42412/3083",
    rankAfter: 2,
    venue: "Sporthalle Phoenix (Hörde III)",
    spectators: 67,
    duration: 60,
    mvps: [
      {
        team: "TV Hörde",
        name: "Franziska Finke",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309275&userId=45496772"
      },
      {
        team: "NawaRo Straubing",
        name: "Valbona Ismaili",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308823&userId=158916735"
      }
    ],
    articleUrl: "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=779640795",
    summary: [
      "Auch das Spiel am Sonntag verlieren die Hörder Mädchen."
    ],
    videoUrl: "https://www.youtube.com/live/H6L8Xmy-rbY?si=3SP5DVBJhKnQU8Qb"
  },
  {
    number: 3073,
    matchId: 777353736,
    weekday: "Samstag",
    date: "13.12.2025",
    time: "19:00",
    home: "NawaRo Straubing",
    away: "TV Dingolfing",
    score: "3:0",
    ballPoints: "75:45",
    sets: [
      "25:18",
      "25:16",
      "25:11"
    ],
    statsUrl: "https://distributor.sams-score.de/scoresheet/pdf/be68aedb-b656-47af-8c10-789509acfcff/3073",
    rankAfter: 1,
    venue: "turmair Volleyballarena",
    spectators: 500,
    duration: 65,
    mvps: [
      {
        team: "NawaRo Straubing",
        name: "Valbona Ismaili",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308823&userId=158916735"
      },
      {
        team: "TV Dingolfing",
        name: "Katherine Konkle",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309004&userId=777954769"
      }
    ],
    articleUrl: "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=779713818",
    summary: [
      "Mit 0:3 verlor der TV Dingolfing am Samstagabend das Niederbayern-Derby bei Nawaro Straubing."
    ],
    videoUrl: "https://www.youtube.com/live/2_8TQysZPJ0?si=pqhEEVmuXpO0BuFM"
  },
  {
    number: 3095,
    matchId: 777353877,
    weekday: "Samstag",
    date: "10.01.2026",
    time: "19:00",
    home: "NawaRo Straubing",
    away: "Eintracht Spontent Düsseldorf",
    score: "3:1",
    ballPoints: "98:75",
    sets: [
      "25:17",
      "25:13",
      "23:25",
      "25:20"
    ],
    statsUrl: "https://distributor.sams-score.de/scoresheet/pdf/d747dc17-4ece-4eb8-be7c-ed54649eace0/3095",
    rankAfter: 2,
    venue: "turmair Volleyballarena",
    spectators: 520,
    duration: 81,
    mvps: [
      {
        team: "NawaRo Straubing",
        name: "Maia Rackel",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308823&userId=771986028"
      },
      {
        team: "Eintracht Spontent Düsseldorf",
        name: "Carlotta Strube",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776311815&userId=678972761"
      }
    ],
    articleUrl: "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=780004838",
    summary: [
      "NawaRo Straubing startet stark in das neue Kalenderjahr, denn Eintracht Spontent Düsseldorf konnte vor 509 Zuschauern mit 3:1 (25:17 25:13 23:25 25:20) bezwungen werden."
    ],
    videoUrl: "https://www.youtube.com/watch?v=vN3VY_8f_9w&t=28s&pp=ygUzRFlOIEVpbnRyYWNodCBTcG9udGVudCBEw7xzc2VsZG9yZiBOYXdhcm8gU3RyYXViaW5n0gcJCUELAYcqIYzv"
  },
  {
    number: 3087,
    matchId: 777353828,
    weekday: "Sonntag",
    date: "11.01.2026",
    time: "15:00",
    home: "NawaRo Straubing",
    away: "ESA Grimma Volleys",
    score: "3:0",
    ballPoints: "75:59",
    sets: [
      "25:22",
      "25:16",
      "25:21"
    ],
    statsUrl: "https://distributor.sams-score.de/scoresheet/pdf/59f25bf9-1bde-4131-9b34-61fa9ca6d7d7/3087",
    rankAfter: 2,
    venue: "turmair Volleyballarena",
    spectators: 350,
    duration: 75,
    mvps: [
      {
        team: "NawaRo Straubing",
        name: "Maia Rackel",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308823&userId=771986028"
      },
      {
        team: "ESA Grimma Volleys",
        name: "Marie Dreblow",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308803&userId=70141787"
      }
    ],
    articleUrl: "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=780018188",
    summary: [
      "NawaRo Straubing macht mit einem 3:0-Heimsieg über Grimma (25:22 25:16 25:21) das erste Sechs-Punkte-Wochenende 2026 eindrucksvoll perfekt."
    ],
    videoUrl: "https://www.youtube.com/live/ZjQ4oANHm3k?si=leIJCZLYJyTAteJd"
  },
  {
    number: 3101,
    matchId: 777353914,
    weekday: "Samstag",
    date: "17.01.2026",
    time: "19:30",
    home: "BayerVolleys Leverkusen",
    away: "NawaRo Straubing",
    score: "1:3",
    ballPoints: "87:92",
    sets: [
      "18:25",
      "21:25",
      "25:17",
      "23:25"
    ],
    statsUrl: "https://distributor.sams-score.de/scoresheet/pdf/653ee276-a3f3-422e-b278-88a640ed7588/3101",
    rankAfter: 2,
    venue: "Ostermann-Arena",
    spectators: 248,
    duration: 92,
    mvps: [
      {
        team: "BayerVolleys Leverkusen",
        name: "Marian Mischo",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308933&userId=685843413"
      },
      {
        team: "NawaRo Straubing",
        name: "Theresa Barner",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308823&userId=750792046"
      }
    ],
    articleUrl: "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=780122793",
    summary: [
      "Keine Ausbeute im ersten Heimspiel des Jahres"
    ],
    videoUrl: "https://www.youtube.com/watch?v=r9wfPO92v4s"
  },
  {
    number: 3107,
    matchId: 777353951,
    weekday: "Samstag",
    date: "24.01.2026",
    time: "19:00",
    home: "NawaRo Straubing",
    away: "VfL Oythe",
    score: "3:1",
    ballPoints: "92:75",
    sets: [
      "25:13",
      "17:25",
      "25:23",
      "25:14"
    ],
    statsUrl: "https://distributor.sams-score.de/scoresheet/pdf/6679d640-96a3-483a-b3a8-2ac8b88b88ed/3107",
    rankAfter: 2,
    venue: "turmair Volleyballarena",
    spectators: 750,
    duration: 90,
    mvps: [
      {
        team: "NawaRo Straubing",
        name: "Amber de Tant",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308823&userId=751749162"
      },
      {
        team: "VfL Oythe",
        name: "Maria Petkova",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308853&userId=777895333"
      }
    ],
    articleUrl: "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=780182903",
    summary: [
      "NawaRo Straubing bezwingt am Samstagabend im Spitzenspiel den VfL Oythe klar mit 3:1 (25:13, 17:25, 25:23, 25:14) und behauptet somit den zweiten Tabellenplatz der Sparda 2. Liga Pro."
    ],
    videoUrl: "https://www.youtube.com/live/8YHq9piXuX0?si=6Lok5Upv42_y6BjR"
  },
  {
    number: 3188,
    matchId: 777354448,
    weekday: "Samstag",
    date: "31.01.2026",
    time: "19:00",
    home: "VCO Dresden",
    away: "NawaRo Straubing",
    score: "1:3",
    ballPoints: "78:94",
    sets: [
      "25:19",
      "12:25",
      "23:25",
      "18:25"
    ],
    statsUrl: "https://distributor.sams-score.de/scoresheet/pdf/2b75f4a7-2739-4a79-a694-9ba3006fd922/3188",
    rankAfter: 2,
    venue: "Schulsporthalle des Sportschulzentrum",
    spectators: 86,
    duration: 84,
    mvps: [
      {
        team: "VCO Dresden",
        name: "Jette Hippel",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309105&userId=777554134"
      },
      {
        team: "NawaRo Straubing",
        name: "Delaney Elizabeth Hogan",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308823&userId=777743932"
      }
    ],
    articleUrl: "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=780313502",
    summary: [
      "Der VCO Dresden empfing am 31. Januar um 19 Uhr vor großer Kulisse den Vizetabellenführer NawaRo Straubing. Mit viel Vorfreude und hohen Erwartungen ging Dresden in das Duell, das von Beginn an durch"
    ],
    videoUrl: "https://www.youtube.com/live/gegbzNtsa8c?si=kph__Bc1EAaqqqe5"
  },
  {
    number: 3125,
    matchId: 777354061,
    weekday: "Samstag",
    date: "07.02.2026",
    time: "19:00",
    home: "NawaRo Straubing",
    away: "Rote Raben Vilsbiburg",
    score: "0:3",
    ballPoints: "54:75",
    sets: [
      "13:25",
      "19:25",
      "22:25"
    ],
    statsUrl: "https://distributor.sams-score.de/scoresheet/pdf/fcac4f23-1bd2-4739-a68f-d4094ddb8a31/3125",
    rankAfter: 2,
    venue: "turmair Volleyballarena",
    spectators: 864,
    duration: 63,
    mvps: [
      {
        team: "NawaRo Straubing",
        name: "Valbona Ismaili",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308823&userId=158916735"
      },
      {
        team: "Rote Raben Vilsbiburg",
        name: "Pia Fernau",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309082&userId=678774889"
      }
    ],
    articleUrl: "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=780379225",
    summary: [
      "Mit 3:0 nach Sätzen konnte der mehrfache deutsche Meister und Pokalsieger von 2014 - Rote Raben Vilsbiburg – NawaRo Straubing am Samstagabend in heimischer Halle eine schmerzhafte Niederlage zufügen."
    ],
    videoUrl: "https://www.youtube.com/live/KIRh4YbMC0Q?si=_YfCxQqGpebTllTp"
  },
  {
    number: 3129,
    matchId: 777354086,
    weekday: "Samstag",
    date: "14.02.2026",
    time: "18:00",
    home: "BBSC Berlin",
    away: "NawaRo Straubing",
    score: "0:3",
    ballPoints: "40:75",
    sets: [
      "19:25",
      "12:25",
      "9:25"
    ],
    statsUrl: "https://distributor.sams-score.de/scoresheet/pdf/bd0224ac-17c7-45e2-8026-eea18051b887/3129",
    rankAfter: 2,
    venue: "Sporthalle Hämmerlingstraße",
    spectators: 145,
    duration: 54,
    mvps: [
      {
        team: "BBSC Berlin",
        name: "Paula Reinisch",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308987&userId=13394655"
      },
      {
        team: "NawaRo Straubing",
        name: "Paula Gürsching",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308823&userId=742778846"
      }
    ],
    articleUrl: "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=780478662",
    summary: [
      "Der Tabellenzweite NawaRo Straubing präsentierte am Samstagabend dem Berliner Publikum, wie in dieser Liga moderner Volleyball gespielt wird - der BBSC hatte in der gezeigten Form keine Chance."
    ],
    videoUrl: "https://www.youtube.com/live/LvcV98smFPA?si=UED5h-AJyYF4dJLY"
  },
  {
    number: 3137,
    matchId: 777354135,
    weekday: "Sonntag",
    date: "22.02.2026",
    time: "15:00",
    home: "NawaRo Straubing",
    away: "Sparkassen Wildcats Stralsund",
    score: "3:0",
    ballPoints: "75:56",
    sets: [
      "25:22",
      "25:20",
      "25:14"
    ],
    statsUrl: "https://distributor.sams-score.de/scoresheet/pdf/dd9c86b1-0de5-423b-b85e-8fcb400e175d/3137",
    rankAfter: 2,
    venue: "turmair Volleyballarena",
    spectators: 760,
    duration: 71,
    mvps: [
      {
        team: "NawaRo Straubing",
        name: "Amber de Tant",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308823&userId=751749162"
      },
      {
        team: "Sparkassen Wildcats Stralsund",
        name: "Gesa Brandstrup",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309386&userId=752329134"
      }
    ],
    articleUrl: "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=780616343",
    summary: [
      "Das Team erarbeitete sich durch ihr Spiel viel Anerkennung und Respekt"
    ],
    videoUrl: "https://www.youtube.com/live/-Ew3EIMdgKM?si=jXxiDyejbq1SwW2q"
  },
  {
    number: 3143,
    matchId: 777354196,
    weekday: "Samstag",
    date: "07.03.2026",
    time: "20:00",
    home: "TV Waldgirmes",
    away: "NawaRo Straubing",
    score: "0:3",
    ballPoints: "43:75",
    sets: [
      "12:25",
      "22:25",
      "9:25"
    ],
    statsUrl: "https://distributor.sams-score.de/scoresheet/pdf/3e2e69fb-db9f-409d-acf1-994b5abddb6a/3143",
    rankAfter: 2,
    venue: "Sporthalle der Lahntalschule Atzbach",
    spectators: 100,
    duration: 60,
    mvps: [
      {
        team: "TV Waldgirmes",
        name: "Leonie Amann",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309795&userId=70434234"
      },
      {
        team: "NawaRo Straubing",
        name: "Amber de Tant",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308823&userId=751749162"
      }
    ],
    articleUrl: "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=780755770",
    summary: [
      "TV Waldgirmes – NaWaRo Straubing 0:3 (12:25 22:25 9:25). Am Ende stand ein klarer Sieg des Teams aus Ostbayern. Es war das erste Mal, dass Waldgirmes in einem Heimspiel quasi chancenlos war."
    ],
    videoUrl: "https://www.youtube.com/live/-YuWpuyfppI?si=0CpiXswcDwEXHOVK"
  },
  {
    number: 3150,
    matchId: 777354215,
    weekday: "Samstag",
    date: "21.03.2026",
    time: "19:00",
    home: "TV Planegg-Krailling",
    away: "NawaRo Straubing",
    score: "0:3",
    ballPoints: "58:75",
    sets: [
      "18:25",
      "19:25",
      "21:25"
    ],
    statsUrl: "https://distributor.sams-score.de/scoresheet/pdf/0df17ec1-d1d3-4231-898c-b83a30b98f10/3150",
    rankAfter: 2,
    venue: "Feodor-Lynen-Gymnasium",
    spectators: 220,
    duration: 68,
    mvps: [
      {
        team: "TV Planegg-Krailling",
        name: "Elisabeth Kettenbach",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309673&userId=59149633"
      },
      {
        team: "NawaRo Straubing",
        name: "Maia Rackel",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308823&userId=771986028"
      }
    ],
    articleUrl: "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=780906912",
    summary: [
      "Der TV Planegg-Krailling muss sich im Heimspiel gegen NawaRo Straubing deutlich mit 0:3 geschlagen geben (18:25,19:25,21:25). Straubing überzeugte mit einer konsequenten Leistung und gewann verdient."
    ],
    videoUrl: "https://www.youtube.com/live/tSHqf8A2yi4?si=0p_Er4aEW3bMdXG2"
  },
  {
    number: 3155,
    matchId: 777354246,
    weekday: "Samstag",
    date: "28.03.2026",
    time: "19:00",
    home: "NawaRo Straubing",
    away: "DSHS SnowTrex Köln",
    score: "3:1",
    ballPoints: "95:74",
    sets: [
      "20:25",
      "25:20",
      "25:15",
      "25:14"
    ],
    statsUrl: "https://distributor.sams-score.de/scoresheet/pdf/11189648-76bd-47f0-85f4-a1af1430bccd/3155",
    rankAfter: 2,
    venue: "turmair Volleyballarena",
    spectators: 500,
    duration: 92,
    mvps: [
      {
        team: "NawaRo Straubing",
        name: "Theresa Barner",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308823&userId=750792046"
      },
      {
        team: "DSHS SnowTrex Köln",
        name: "Annika Stenchly",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308895&userId=70003721"
      }
    ],
    articleUrl: "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=781020462",
    summary: [
      "Trotz großer personeller Sorgen und eines Ausfalls beim Aufwärmen zeigte DSHS SnowTrex Köln beim Tabellenzweiten NawaRo Straubing eine couragierte Leistung."
    ],
    videoUrl: "https://www.youtube.com/watch?v=-FkRIwJ7_KI&t=2427s"
  },
  {
    number: 3164,
    matchId: 777354301,
    weekday: "Sonntag",
    date: "12.04.2026",
    time: "15:00",
    home: "TV Dingolfing",
    away: "NawaRo Straubing",
    score: "0:3",
    ballPoints: "53:75",
    sets: [
      "22:25",
      "17:25",
      "14:25"
    ],
    statsUrl: "https://distributor.sams-score.de/scoresheet/pdf/b83ecd30-84b6-430a-b108-89461c1e5890/3164",
    rankAfter: 2,
    venue: "Sporthalle Höll-Ost",
    spectators: 568,
    duration: 73,
    mvps: [
      {
        team: "TV Dingolfing",
        name: "Franziska Koob",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309004&userId=742778854"
      },
      {
        team: "NawaRo Straubing",
        name: "Maia Rackel",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308823&userId=771986028"
      }
    ],
    articleUrl: "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=781158864",
    summary: [
      "In drei Sätzen unterlag der TV Dingolfing am Sonntagnachmittag im Niederbayern-Derby Favorit und Tabellenzweiten Nawaro Straubing vor knapp 600 Zuschauern."
    ],
    videoUrl: "https://www.youtube.com/live/a47Xc8EBuFc?si=2YOhZ87erEAMtAV-"
  },
  {
    number: 3174,
    matchId: 777354362,
    weekday: "Samstag",
    date: "25.04.2026",
    time: "19:00",
    home: "NawaRo Straubing",
    away: "TV Hörde",
    score: "3:0",
    ballPoints: "75:53",
    sets: [
      "25:18",
      "25:19",
      "25:16"
    ],
    statsUrl: "https://distributor.sams-score.de/scoresheet/pdf/1271408c-49d3-410f-9d2e-d25c6b022c67/3174",
    rankAfter: 2,
    venue: "turmair Volleyballarena",
    spectators: 750,
    duration: 68,
    mvps: [
      {
        team: "NawaRo Straubing",
        name: "Maia Rackel",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308823&userId=771986028"
      },
      {
        team: "TV Hörde",
        name: "Emma Neukirchen",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309275&userId=771345481"
      }
    ],
    articleUrl: "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=781293091",
    summary: [
      "NawaRo Straubing setzt sich am Samstagabend vor 750 Zuschauern verdientermaßen mit 3:0 (25:18, 25:19, 25:16) gegen Hörde durch."
    ],
    videoUrl: "https://www.youtube.com/live/Fo-xBzlk3qU?si=1I16KvwBMhKEd1we"
  },
  {
    number: 3178,
    matchId: 777354387,
    weekday: "Samstag",
    date: "02.05.2026",
    time: "19:00",
    home: "ESA Grimma Volleys",
    away: "NawaRo Straubing",
    score: "1:3",
    ballPoints: "79:99",
    sets: [
      "24:26",
      "25:23",
      "15:25",
      "15:25"
    ],
    statsUrl: "https://distributor.sams-score.de/scoresheet/pdf/6d67145b-5c53-4d6f-8b3e-33b29bd7f543/3178",
    rankAfter: 2,
    venue: "Muldentalhalle",
    spectators: 338,
    duration: 95,
    mvps: [
      {
        team: "ESA Grimma Volleys",
        name: "Sophie Dreblow",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308803&userId=383895"
      },
      {
        team: "NawaRo Straubing",
        name: "Paula Gürsching",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308823&userId=742778846"
      }
    ],
    articleUrl: "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=781373398",
    summary: [
      "NawaRo Straubing hat mit einem 3:1-Auswärtserfolg in Grimma (26:24, 23:25, 25:15, 25:15) die Vizemeisterschaft der Sparda 2. Liga Pro fixiert."
    ],
    videoUrl: "https://www.youtube.com/live/-iWMObGD6sY?si=1g3_W2e_RiDDMnpi"
  }
];

games.forEach((game) => {
  const views = youtubeViews[String(game.number)];
  if (Number.isFinite(views)) game.youtubeViews = views;
});
