const getStates = (req, res) => {
  return res.status(200).json([
    {
      name: "آذربايجان شرقی",
      center: "تبریز",
      latitude: "38.50",
      longitude: "46.180",
      id: 1,
    },
    {
      name: "آذربايجان غربی",
      center: "ارومیه",
      latitude: "37.320",
      longitude: "45.40",
      id: 2,
    },
    {
      name: "اردبيل",
      center: "اردبیل",
      latitude: "38.140",
      longitude: "48.170",
      id: 3,
    },
    {
      name: "اصفهان",
      center: "اصفهان",
      latitude: "32.390",
      longitude: "51.400",
      id: 4,
    },
    {
      name: "البرز",
      center: "کرج",
      latitude: "35.8400",
      longitude: "50.9391",
      id: 19,
    },
    {
      name: "ايلام",
      center: "ايلام",
      latitude: "33.380",
      longitude: "46.250",
      id: 5,
    },
    {
      name: "بوشهر",
      center: "بوشهر",
      latitude: "28.590",
      longitude: "50.500",
      id: 6,
    },
    {
      name: "تهران",
      center: "تهران",
      latitude: "35.410",
      longitude: "51.240",
      id: 7,
    },
    {
      name: "چهارمحال بختیاری",
      center: "شهركرد",
      latitude: "32.190",
      longitude: "50.510",
      id: 8,
    },
    {
      name: "خراسان جنوبی",
      center: "بيرجند",
      latitude: "32.5216",
      longitude: "59.1315",
      id: 9,
    },
    {
      name: "خراسان رضوی",
      center: "مشهد",
      latitude: "36.170",
      longitude: "59.350",
      id: 10,
    },
    {
      name: "خراسان شمالی",
      center: "بجنورد",
      latitude: "37.2835",
      longitude: "57.1954",
      id: 11,
    },
    {
      name: "خوزستان",
      center: "اهواز",
      latitude: "31.190",
      longitude: "48.410",
      id: 12,
    },
    {
      name: "زنجان",
      center: "زنجان",
      latitude: "36.400",
      longitude: "48.290",
      id: 13,
    },
    {
      name: "سمنان",
      center: "سمنان",
      latitude: "35.340",
      longitude: "53.230",
      id: 14,
    },
    {
      name: "سيستان و بلوچستان",
      center: "زاهدان",
      latitude: "29.320",
      longitude: "60.540",
      id: 15,
    },
    {
      name: "فارس",
      center: "شيراز",
      latitude: "29.360",
      longitude: "52.310",
      id: 16,
    },
    {
      name: "قزوين",
      center: "قزوين",
      latitude: "36.167",
      longitude: "50.010",
      id: 17,
    },
    {
      name: "قم",
      center: "قم",
      latitude: "34.380",
      longitude: "50.530",
      id: 18,
    },
    {
      name: "كردستان",
      center: "سنندج",
      latitude: "35.180",
      longitude: "47.10",
      id: 20,
    },
    {
      name: "کرمان",
      center: "کرمان",
      latitude: "30.160",
      longitude: "57.40",
      id: 21,
    },
    {
      name: "كرمانشاه",
      center: "كرمانشاه",
      latitude: "34.180",
      longitude: "47.30",
      id: 22,
    },
    {
      name: "كهكيلويه و بويراحمد",
      center: "ياسوج",
      latitude: "30.390",
      longitude: "51.350",
      id: 23,
    },
    {
      name: "گلستان",
      center: "گرگان",
      latitude: "36.500",
      longitude: "54.250",
      id: 24,
    },
    {
      name: "گيلان",
      center: "رشت",
      latitude: "37.160",
      longitude: "49.350",
      id: 25,
    },
    {
      name: "لرستان",
      center: "خرم آباد",
      latitude: "33.290",
      longitude: "48.210",
      id: 26,
    },
    {
      name: "مازندران",
      center: "ساري",
      latitude: "36.330",
      longitude: "53.30",
      id: 27,
    },
    {
      name: "مرکزی",
      center: "اراک",
      latitude: "34.50",
      longitude: "49.410",
      id: 28,
    },
    {
      name: "هرمزگان",
      center: "بندرعباس",
      latitude: "56.266",
      longitude: "27.18",
      id: 29,
    },
    {
      name: "همدان",
      center: "همدان",
      latitude: "34.470",
      longitude: "48.300",
      id: 30,
    },
    {
      name: "يزد",
      center: "يزد",
      latitude: "31.530",
      longitude: "54.210",
      id: 31,
    },
  ]);
};

const getCities = (req, res) => {
  switch (req.query.state) {
    case "آذربايجان شرقی":
      res.status(200).json({
        name: "آذربايجان شرقی",
        center: "تبریز",
        latitude: "38.50",
        longitude: "46.180",
        cities: [
          {
            name: "آذرشهر",
            id: 1,
          },
          {
            name: "اسكو",
            latitude: "37.5458",
            longitude: "46.724",
            id: 2,
          },
          {
            name: "اهر",
            latitude: "38.2839",
            longitude: "47.412",
            id: 3,
          },
          {
            name: "بستان آباد",
            latitude: "37.5044",
            longitude: "46.4951",
            id: 4,
          },
          {
            name: "بناب",
            latitude: "38.260",
            longitude: "45.550",
            id: 5,
          },
          {
            name: "تبريز",
            latitude: "38.50",
            longitude: "46.180",
            id: 6,
          },
          {
            name: "جلفا",
            latitude: "38.5622",
            longitude: "45.3732",
            id: 7,
          },
          {
            name: "چاراویماق",
            id: 8,
          },
          {
            name: "خدا آفرین",
            id: 9,
          },
          {
            name: "سراب",
            latitude: "37.5629",
            longitude: "47.3210",
            id: 10,
          },
          {
            name: "شبستر",
            latitude: "38.1048",
            longitude: "45.429",
            id: 11,
          },
          {
            name: "عجب شیر",
            id: 12,
          },
          {
            name: "کلیبر",
            id: 13,
          },
          {
            name: "مراغه",
            latitude: "37.2335",
            longitude: "46.1439",
            id: 14,
          },
          {
            name: "مرند",
            latitude: "38.260",
            longitude: "45.470",
            id: 15,
          },
          {
            name: "ملكان",
            latitude: "37.839",
            longitude: "46.612",
            id: 16,
          },
          {
            name: "ميانه",
            latitude: "37.230",
            longitude: "47.450",
            id: 17,
          },
          {
            name: "ورزقان",
            latitude: "38.4048",
            longitude: "46.3931",
            id: 18,
          },
          {
            name: "هريس",
            latitude: "38.1445",
            longitude: "47.659",
            id: 19,
          },
          {
            name: "هشترود",
            latitude: "37.2849",
            longitude: "47.257",
            id: 20,
          },
          {
            name: "هوراند",
            latitude: "37.2849",
            longitude: "47.257",
            id: 21,
          },
        ],
        id: 1,
      });
      break;
    case "آذربايجان غربی":
      res.status(200).json({
        name: "آذربايجان غربی",
        center: "ارومیه",
        latitude: "37.320",
        longitude: "45.40",
        cities: [
          {
            name: "اروميه",
            latitude: "37.320",
            longitude: "45.40",
            id: 1,
          },
          {
            name: "اشنويه",
            latitude: "37.30",
            longitude: "45.70",
            id: 2,
          },
          {
            name: "باروق",
            id: 3,
          },
          {
            name: "بوكان",
            latitude: "36.3115",
            longitude: "46.1226",
            id: 4,
          },
          {
            name: "پيرانشهر",
            latitude: "36.4146",
            longitude: "45.831",
            id: 5,
          },
          {
            name: "تكاب",
            latitude: "36.2353",
            longitude: "47.76",
            id: 6,
          },
          {
            name: "خوي",
            latitude: "38.330",
            longitude: "44.570",
            id: 7,
          },
          {
            name: "چالدران",
            latitude: "39.358",
            longitude: "44.2312",
            id: 8,
          },
          {
            name: "چایپاره",
            id: 9,
          },
          {
            name: "شوط",
            id: 10,
          },
          {
            name: "شوط",
            id: 11,
          },
          {
            name: "پلدشت",
            latitude: "39.2026",
            longitude: "45.357",
            id: 12,
          },
          {
            name: "سر دشت",
            latitude: "30.200",
            longitude: "50.130",
            id: 13,
          },
          {
            name: "سلماس",
            latitude: "38.120",
            longitude: "44.460",
            id: 14,
          },
          {
            name: "شاهين دژ",
            latitude: "36.400",
            longitude: "46.340",
            id: 15,
          },
          {
            name: "ماكو",
            latitude: "39.1734",
            longitude: "44.4040",
            id: 16,
          },
          {
            name: "مهاباد",
            latitude: "36.450",
            longitude: "45.430",
            id: 17,
          },
          {
            name: "مياندوآب",
            latitude: "36.586",
            longitude: "46.612",
            id: 18,
          },

          {
            name: "نقده",
            latitude: "36.5719",
            longitude: "45.2332",
            id: 19,
          },
        ],
        id: 2,
      });
      break;

    case "اردبيل":
      res.status(200).json({
        name: "اردبيل",
        center: "اردبیل",
        latitude: "38.140",
        longitude: "48.170",
        cities: [
          {
            name: "اردبيل",
            latitude: "38.140",
            longitude: "48.170",
            id: 1,
          },
          {
            name: "اصلاندوز",
            id: 2,
          },
          {
            name: "انگوت",
            id: 2,
          },
          {
            name: "بیله سوار",
            id: 3,
          },
          {
            name: "پارس آباد",
            latitude: "39.3827",
            longitude: "47.5423",
            id: 4,
          },
          {
            name: "خلخال",
            latitude: "37.3732",
            longitude: "48.3124",
            id: 5,
          },
          {
            name: "سرعین",
            id: 6,
          },
          {
            name: "کوثر",
            id: 7,
          },
          {
            name: "گرمي",
            latitude: "39.116",
            longitude: "48.449",
            id: 8,
          },
          {
            name: "مشگين شهر",
            latitude: "38.240",
            longitude: "47.390",
            id: 9,
          },
          {
            name: "نمين",
            latitude: "38.250",
            longitude: "48.290",
            id: 10,
          },
          {
            name: "نير",
            latitude: "37.159",
            longitude: "47.5954",
            id: 11,
          },
          {
            name: "هیر",
            id: 12,
          },
        ],
        id: 3,
      });
      break;
    case "اصفهان":
      res.status(200).json({
        name: "اصفهان",
        center: "اصفهان",
        latitude: "32.390",
        longitude: "51.400",
        cities: [
          {
            name: "آران و بيدگل",
            latitude: "34.338",
            longitude: "51.2847",
            id: 1,
          },
          {
            name: "اردستان",
            latitude: "33.2228",
            longitude: "52.2157",
            id: 2,
          },
          {
            name: "اصفهان",
            latitude: "32.390",
            longitude: "51.400",
            id: 3,
          },
          {
            name: "برخوار",
            id: 4,
          },
          {
            name: "بوئین میاندشت",
            latitude: "32.3332",
            longitude: "51.3037",
            id: 5,
          },
          {
            name: "تیران و کرون",
            latitude: "32.420",
            longitude: "51.90",
            id: 6,
          },
          {
            name: "جرقویه",
            id: 7,
          },
          {
            name: "چادگان",
            id: 8,
          },
          {
            name: "خميني شهر",
            latitude: "32.410",
            longitude: "51.320",
            id: 9,
          },
          {
            name: "خوانسار",
            latitude: "33.130",
            longitude: "50.190",
            id: 10,
          },
          {
            name: "خوربیابانک",
            id: 11,
          },
          {
            name: "دهاقان",
            latitude: "31.560",
            longitude: "51.390",
            id: 12,
          },
          {
            name: "سميرم",
            latitude: "31.250",
            longitude: "51.340",
            id: 13,
          },

          {
            name: " شاهین‌شهر و میمه",
            latitude: "31.5952",
            longitude: "51.5129",
            id: 14,
          },
          {
            name: "شهرضا",
            latitude: "31.5952",
            longitude: "51.5129",
            id: 15,
          },
          {
            name: "فریدن",
            id: 16,
          },
          {
            name: "فریدون‌شهر",
            id: 17,
          },
          {
            name: "فلاورجان",
            id: 18,
          },
          {
            name: "كاشان",
            latitude: "33.590",
            longitude: "51.350",
            id: 19,
          },
          {
            name: "کوهپایه",
            latitude: "32.436",
            longitude: "52.2618",
            id: 21,
          },
          {
            name: "گلپايگان",
            latitude: "33.270",
            longitude: "50.170",
            id: 22,
          },
          {
            name: "لنجان",
            id: 23,
          },
          {
            name: "مباركه",
            latitude: "29.540",
            longitude: "54.270",
            id: 24,
          },
          {
            name: "نائین",
            id: 25,
          },
          {
            name: "نجف آباد",
            latitude: "32.380",
            longitude: "51.230",
            id: 26,
          },
          {
            name: "نطنز",
            latitude: "33.4049",
            longitude: "51.5455",
            id: 27,
          },
          {
            name: "ورزنه",
            latitude: "32.2458",
            longitude: "52.3813",
            id: 28,
          },
          {
            name: "هرند",
            id: 29,
          },
        ],
        id: 4,
      });
      break;
    case "ايلام":
      res.status(200).json({
        name: "ايلام",
        center: "ايلام",
        latitude: "33.380",
        longitude: "46.250",
        cities: [
          {
            name: "آبدانان",
            latitude: "32.5930",
            longitude: "47.2512",
            id: 1,
          },
          {
            name: "ايلام",
            latitude: "33.380",
            longitude: "46.250",
            id: 2,
          },
          {
            name: "ايوان",
            latitude: "33.502",
            longitude: "46.1833",
            id: 3,
          },
          {
            name: "بدره",
            id: 4,
          },
          {
            name: "چرداول",
            id: 5,
          },
          {
            name: "چوار",
            id: 6,
          },
          {
            name: "دره شهر",
            latitude: "33.823",
            longitude: "47.2233",
            id: 7,
          },
          {
            name: "دهلران",
            latitude: "32.410",
            longitude: "47.160",
            id: 8,
          },
          {
            name: "سیروان",
            id: 9,
          },
          {
            name: "ملکشاهی",
            id: 10,
          },
          {
            name: "مهران",
            latitude: "33.70",
            longitude: "46.100",
            id: 11,
          },
          {
            name: "هلیلان",
            id: 12,
          },
        ],
        id: 5,
      });
      break;
    case "بوشهر":
      res.status(200).json({
        name: "بوشهر",
        center: "بوشهر",
        latitude: "28.590",
        longitude: "50.500",
        cities: [
          {
            name: "بوشهر",
            latitude: "28.590",
            longitude: "50.500",
            id: 1,
          },
          {
            name: "تنگستان",
            id: 2,
          },
          {
            name: "جم",
            latitude: "27.490",
            longitude: "52.200",
            id: 3,
          },
          {
            name: "دشتستان",
            id: 4,
          },
          {
            name: "دشتی",
            id: 5,
          },
          {
            name: "دير",
            latitude: "27.510",
            longitude: "51.590",
            id: 6,
          },
          {
            name: "دیلم",
            id: 7,
          },
          {
            name: "عسلویه",
            latitude: "27.2835",
            longitude: "52.3650",
            id: 8,
          },
          {
            name: "كنگان",
            latitude: "27.500",
            longitude: "52.40",
            id: 9,
          },
          {
            name: "گناوه",
            latitude: "29.340",
            longitude: "50.310",
            id: 10,
          },
        ],
        id: 6,
      });
      break;
    case "تهران":
      res.status(200).json({
        name: "تهران",
        center: "تهران",
        latitude: "35.410",
        longitude: "51.240",
        cities: [
          {
            name: "اسلامشهر",
            latitude: "51.232",
            longitude: "35.552",
            id: 1,
          },
          {
            name: "بهارستان",
            id: 2,
          },
          {
            name: "پاكدشت",
            latitude: "35.2854",
            longitude: "51.4049",
            id: 3,
          },
          {
            name: "پردیس",
            id: 4,
          },
          {
            name: "پیشوا",
            id: 5,
          },
          {
            name: "تهران",
            latitude: "35.410",
            longitude: "51.240",
            id: 6,
          },
          {
            name: "دماوند",
            latitude: "35.430",
            longitude: "52.40",
            id: 7,
          },
          {
            name: "كهريزك",
            latitude: "35.3103",
            longitude: "51.2135",
            id: 8,
          },
          {
            name: "ري",
            latitude: "35.358",
            longitude: "51.269",
            id: 9,
          },
          {
            name: "شمیرانات",
            latitude: "35.4816",
            longitude: "51.2532",
            id: 10,
          },
          {
            name: "شهريار",
            latitude: "35.3927",
            longitude: "51.335",
            id: 11,
          },
          {
            name: "شهر قدس (قلعه حسن خان)",
            latitude: "35.4317",
            longitude: "51.632",
            id: 12,
          },
          {
            name: "قرچك",
            latitude: "35.2610",
            longitude: "51.3420",
            id: 13,
          },
          {
            name: "فيروزكوه",
            latitude: "35.450",
            longitude: "52.460",
            id: 14,
          },
          {
            name: "ملارد",
            latitude: "35.3927",
            longitude: "50.5835",
            id: 15,
          },
          {
            name: "ورامين",
            latitude: "35.200",
            longitude: "51.380",
            id: 2,
          },
        ],
        id: 7,
      });
      break;
    case "چهارمحال بختیاری":
      res.status(200).json({
        name: "چهارمحال بختیاری",
        center: "شهركرد",
        latitude: "32.190",
        longitude: "50.510",
        cities: [
          {
            name: "اردل",
            latitude: "31.5958",
            longitude: "50.3935",
            id: 1,
          },
          {
            name: "بروجن",
            latitude: "31.580",
            longitude: "51.170",
            id: 2,
          },
          {
            name: "بن",
            id: 3,
          },
          {
            name: "خانمیرزا",
            id: 4,
          },
          {
            name: "سامان",
            id: 5,
          },
          {
            name: "شهركرد",
            latitude: "32.190",
            longitude: "50.510",
            id: 6,
          },
          {
            name: "فارسان",
            latitude: "32.1527",
            longitude: "50.3341",
            id: 7,
          },
          {
            name: "فلارد",
            id: 8,
          },
          {
            name: "کوهرنگ",
            id: 9,
          },
          {
            name: "کیار",
            id: 10,
          },
          {
            name: "لردگان",
            latitude: "31.310",
            longitude: "50.500",
            id: 11,
          },
        ],
        id: 8,
      });
      break;
    case "خراسان جنوبی":
      res.status(200).json({
        name: "خراسان جنوبی",
        center: "بيرجند",
        latitude: "32.5216",
        longitude: "59.1315",
        cities: [
          {
            name: "اسدیه",
            id: 1,
          },
          {
            name: "بشرویه",
            id: 2,
          },
          {
            name: "بيرجند",
            latitude: "32.5216",
            longitude: "59.1315",
            id: 3,
          },
          {
            name: "حاجی آباد",
            id: 4,
          },
          {
            name: "خسوف",
            id: 5,
          },
          {
            name: "سرایان",
            id: 6,
          },
          {
            name: "سربيشه",
            latitude: "32.3432",
            longitude: "59.4755",
            id: 7,
          },
          {
            name: "طبس",
            latitude: "33.6033",
            longitude: "56.9324",
            id: 8,
          },
          {
            name: "فردوس",
            latitude: "34.00",
            longitude: "58.90",
            id: 9,
          },
          {
            name: "قائن",
            latitude: "33.430",
            longitude: "59.60",
            id: 10,
          },
          {
            name: "نهبندان",
            latitude: "31.320",
            longitude: "60.20",
            id: 11,
          },
        ],
        id: 9,
      });
      break;
    case "خراسان رضوی":
      res.status(200).json({
        name: "خراسان رضوی",
        center: "مشهد",
        latitude: "36.170",
        longitude: "59.350",
        cities: [
          {
            name: "باخرز",
            id: 1,
          },
          {
            name: "بجستان",
            id: 2,
          },
          {
            name: "بردسکن",
            id: 3,
          },
          {
            name: "شاندیز طرقبه",
            latitude: "36.1837",
            longitude: "59.2225",
            id: 4,
          },
          {
            name: "تايباد",
            latitude: "34.440",
            longitude: "60.470",
            id: 5,
          },
          {
            name: "تربت جام",
            latitude: "35.160",
            longitude: "60.360",
            id: 6,
          },
          {
            name: "تربت حيدريه",
            latitude: "35.1627",
            longitude: "59.139",
            id: 7,
          },
          {
            name: "جغتای",
            id: 8,
          },
          {
            name: "جوین",
            id: 9,
          },
          {
            name: "چناران",
            latitude: "59.121",
            longitude: "36.642",
            id: 10,
          },
          {
            name: "خلیل‌آباد",
            id: 11,
          },
          {
            name: "خواف",
            latitude: "34.320",
            longitude: "60.50",
            id: 12,
          },
          {
            name: "خوشاب",
            id: 13,
          },
          {
            name: "داورزن",
            id: 14,
          },
          {
            name: "زاوه",
            id: 15,
          },
          {
            name: "زبرخان",
            id: 16,
          },

          {
            name: "درگز",
            latitude: "37.2640",
            longitude: "59.628",
            id: 17,
          },
          {
            name: "رشتخوار",
            id: 18,
          },
          {
            name: "سبزوار",
            latitude: "36.130",
            longitude: "57.400",
            id: 19,
          },
          {
            name: "سرخس",
            latitude: "36.320",
            longitude: "61.100",
            id: 20,
          },
          {
            name: "ششتمد",
            id: 21,
          },

          {
            name: "صالح‌آباد",
            id: 22,
          },
          {
            name: "فريمان",
            latitude: "35.460",
            longitude: "59.490",
            id: 23,
          },
          {
            name: "فیروزه",
            id: 24,
          },
          {
            name: "قوچان",
            latitude: "37.40",
            longitude: "58.320",
            id: 25,
          },
          {
            name: "كاشمر",
            latitude: "35.144",
            longitude: "58.2738",
            id: 26,
          },
          {
            name: "کلات",
            id: 27,
          },
          {
            name: "کوه سرخ",
            id: 28,
          },
          {
            name: "گلبهار",
            id: 29,
          },
          {
            name: "گناباد",
            latitude: "34.2141",
            longitude: "58.4157",
            id: 30,
          },
          {
            name: "مشهد",
            latitude: "36.170",
            longitude: "59.350",
            id: 31,
          },
          {
            name: "مه‌ولات",
            id: 32,
          },
          {
            name: "میان‌جلگه",
            id: 33,
          },
          {
            name: "نيشابور",
            latitude: "36.130",
            longitude: "58.490",
            id: 34,
          },
        ],
        id: 10,
      });
      break;
    case "خراسان شمالی":
      res.status(200).json({
        name: "خراسان شمالی",
        center: "بجنورد",
        latitude: "37.2835",
        longitude: "57.1954",
        cities: [
          {
            name: "اسفراين",
            latitude: "37.436",
            longitude: "57.3035",
            id: 1,
          },
          {
            name: "بجنورد",
            latitude: "37.2835",
            longitude: "57.1954",
            id: 2,
          },
          {
            name: "جاجرم",
            latitude: "36.573",
            longitude: "56.2244",
            id: 3,
          },
          {
            name: "راز و جرگلان",
            latitude: "36.573",
            longitude: "56.2244",
            id: 4,
          },
          {
            name: "شيروان",
            latitude: "33.340",
            longitude: "46.520",
            id: 5,
          },
          {
            name: "فاروج",
            id: 6,
          },
          {
            name: "گرمه",
            id: 7,
          },
          {
            name: "مانه و سملقان",
            id: 8,
          },
        ],
        id: 11,
      });
      break;
    case "خوزستان":
      res.status(200).json({
        name: "خوزستان",
        center: "اهواز",
        latitude: "31.190",
        longitude: "48.410",
        cities: [
          {
            name: "آبادان",
            latitude: "30.2024",
            longitude: "48.1814",
            id: 1,
          },
          {
            name: "آغاجاری",
            id: 2,
          },
          {
            name: "امیدیه",
            id: 3,
          },
          {
            name: "اندیکا",
            id: 4,
          },
          {
            name: "انديمشك",
            latitude: "32.270",
            longitude: "48.200",
            id: 5,
          },
          {
            name: "اهواز",
            latitude: "31.190",
            longitude: "48.410",
            id: 6,
          },
          {
            name: "ايذه",
            latitude: "31.500",
            longitude: "49.520",
            id: 7,
          },
          {
            name: "باغ ملك",
            latitude: "31.310",
            longitude: "49.530",
            id: 8,
          },
          {
            name: "باوی",
            id: 9,
          },
          {
            name: "بندر ماهشهر",
            latitude: "30.340",
            longitude: "49.100",
            id: 10,
          },
          {
            name: "بهبهان",
            latitude: "30.360",
            longitude: "50.150",
            id: 11,
          },
          {
            name: "حمیدیه",
            latitude: "31.290",
            longitude: "48.260",
            id: 12,
          },
          {
            name: "خرمشهر",
            latitude: "30.2539",
            longitude: "48.118",
            id: 13,
          },
          {
            name: "دزپارت",
            id: 14,
          },
          {
            name: "دزفول",
            latitude: "32.2255",
            longitude: "48.2411",
            id: 15,
          },
          {
            name: "دشت آزادگان",
            id: 16,
          },
          {
            name: "رامشیر",
            latitude: "30.5335",
            longitude: "49.2425",
            id: 17,
          },
          {
            name: "رامهرمز",
            latitude: "31.170",
            longitude: "49.360",
            id: 18,
          },
          {
            name: "شادگان",
            latitude: "30.390",
            longitude: "48.400",
            id: 19,
          },
          {
            name: "شوش",
            latitude: "32.120",
            longitude: "48.150",
            id: 20,
          },
          {
            name: "شوشتر",
            latitude: "32.30",
            longitude: "48.510",
            id: 21,
          },
          {
            name: "کارون",
            id: 22,
          },
          {
            name: "کرخه",
            id: 23,
          },
          {
            name: "گوتوند",
            id: 24,
          },
          {
            name: "لالي",
            latitude: "32.1947",
            longitude: "49.538",
            id: 25,
          },
          {
            name: "مسجد سليمان",
            latitude: "31.590",
            longitude: "49.180",
            id: 26,
          },
          {
            name: "هفتکل",
            id: 27,
          },
          {
            name: "هندیجان",
            id: 28,
          },
          {
            name: "هویزه",
            id: 29,
          },
        ],
        id: 12,
      });
      break;
    case "زنجان":
      res.status(200).json({
        name: "زنجان",
        center: "زنجان",
        latitude: "36.400",
        longitude: "48.290",
        cities: [
          {
            name: "ابهر",
            latitude: "36.80",
            longitude: "49.130",
            id: 1,
          },
          {
            name: "ایجرود",
            id: 2,
          },
          {
            name: "خدابنده",
            latitude: "36.00",
            longitude: "48.30",
            id: 3,
          },
          {
            name: "خرمدره",
            latitude: "36.1240",
            longitude: "49.1147",
            id: 4,
          },
          {
            name: "زنجان",
            latitude: "36.400",
            longitude: "48.290",
            id: 5,
          },
          {
            name: "سلطانیه",
            id: 6,
          },
          {
            name: "طارم",
            id: 7,
          },
          {
            name: "ماهنشان",
            id: 8,
          },
        ],
        id: 13,
      });
      break;
    case "سمنان":
      res.status(200).json({
        name: "سمنان",
        center: "سمنان",
        latitude: "35.340",
        longitude: "53.230",
        cities: [
          {
            name: "آرادان",
            id: 1,
          },
          {
            name: "دامغان",
            latitude: "36.90",
            longitude: "54.220",
            id: 2,
          },
          {
            name: "سرخه",
            id: 3,
          },
          {
            name: "سمنان",
            latitude: "35.340",
            longitude: "53.230",
            id: 4,
          },
          {
            name: "شاهرود",
            latitude: "36.250",
            longitude: "55.00",
            id: 5,
          },
          {
            name: "گرمسار",
            latitude: "35.150",
            longitude: "52.200",
            id: 6,
          },
          {
            name: "مهدی شهر (سنگسر)",
            id: 7,
          },
          {
            name: "بسطام",
            id: 8,
          },
        ],
        id: 14,
      });
      break;
    case "سيستان و بلوچستان":
      res.status(200).json({
        name: "سيستان و بلوچستان",
        center: "زاهدان",
        latitude: "29.320",
        longitude: "60.540",
        cities: [
          {
            name: "ايرانشهر",
            latitude: "27.150",
            longitude: "60.410",
            id: 1,
          },
          {
            name: "بمپور",
            id: 2,
          },
          {
            name: "تفتان",
            id: 3,
          },
          {
            name: "چابهار",
            latitude: "60.634",
            longitude: "25.296",
            id: 4,
          },
          {
            name: "خاش",
            latitude: "28.130",
            longitude: "61.130",
            id: 5,
          },
          {
            name: "دشتیاری",
            id: 6,
          },
          {
            name: "دلگان",
            id: 7,
          },
          {
            name: "راسک",
            id: 8,
          },
          {
            name: "زابل",
            latitude: "31.00",
            longitude: "61.320",
            id: 9,
          },
          {
            name: "زاهدان",
            latitude: "29.320",
            longitude: "60.540",
            id: 10,
          },
          {
            name: "زرآباد",
            id: 11,
          },
          {
            name: "زهک",
            id: 12,
          },
          {
            name: "سراوان",
            latitude: "27.2214",
            longitude: "62.203",
            id: 13,
          },
          {
            name: "سرباز",
            latitude: "26.400",
            longitude: "61.200",
            id: 14,
          },
          {
            name: "سیب و سوران",
            id: 15,
          },
          {
            name: "فنوج",
            id: 16,
          },
          {
            name: "قصرقند",
            id: 17,
          },
          {
            name: "کنارک",
            id: 18,
          },
          {
            name: "گلشن",
            id: 19,
          },
          {
            name: "لاشار",
            id: 20,
          },
          {
            name: "مهرستان",
            id: 21,
          },
          {
            name: "ميرجاوه",
            latitude: "29.10",
            longitude: "61.300",
            id: 22,
          },
          {
            name: "نیک‌شهر",
            id: 23,
          },
          {
            name: "نیمروز",
            id: 24,
          },
          {
            name: "هامون",
            id: 25,
          },
          {
            name: "هیرمند",
            id: 26,
          },
        ],
        id: 15,
      });
      break;
    case "فارس":
      res.status(200).json({
        name: "فارس",
        center: "شيراز",
        latitude: "29.360",
        longitude: "52.310",
        cities: [
          {
            name: "آباده",
            latitude: "31.60",
            longitude: "52.400",
            id: 1,
          },
          {
            name: "ارسنجان",
            latitude: "29.550",
            longitude: "53.1743",
            id: 2,
          },
          {
            name: "استهبان",
            latitude: "29.80",
            longitude: "54.20",
            id: 3,
          },
          {
            name: "اقليد",
            latitude: "30.530",
            longitude: "52.410",
            id: 4,
          },
          {
            name: "اوز",
            id: 5,
          },
          {
            name: "بختگان",
            id: 6,
          },
          {
            name: "بوانات",
            latitude: "30.2915",
            longitude: "53.3534",
            id: 7,
          },
          {
            name: "بیضا",
            id: 8,
          },
          {
            name: "پاسارگاد",
            id: 9,
          },
          {
            name: "جویم",
            id: 10,
          },
          {
            name: "جهرم",
            latitude: "28.290",
            longitude: "53.320",
            id: 11,
          },
          {
            name: "خرامه",
            latitude: "53.321",
            longitude: "29.501",
            id: 12,
          },
          {
            name: "خرم بید",
            id: 13,
          },
          {
            name: "خفر",
            id: 14,
          },
          {
            name: "خنج",
            latitude: "27.530",
            longitude: "53.260",
            id: 15,
          },
          {
            name: "داراب",
            latitude: "28.450",
            longitude: "54.330",
            id: 16,
          },
          {
            name: "رستم",
            id: 17,
          },
          {
            name: "زرقان",
            latitude: "29.4628",
            longitude: "52.4329",
            id: 18,
          },
          {
            name: "زین دشت",
            id: 19,
          },
          {
            name: "سپيدان",
            latitude: "30.1432",
            longitude: "51.5938",
            id: 20,
          },
          {
            name: "سرچهان",
            id: 21,
          },
          {
            name: "سروستان",
            latitude: "29.160",
            longitude: "53.130",
            id: 22,
          },
          {
            name: "شيراز",
            latitude: "29.360",
            longitude: "52.310",
            id: 23,
          },
          {
            name: "فراشبند",
            latitude: "28.530",
            longitude: "52.70",
            id: 24,
          },
          {
            name: "فسا",
            latitude: "28.550",
            longitude: "53.390",
            id: 25,
          },
          {
            name: "فیروزآباد",
            latitude: "28.550",
            longitude: "53.390",
            id: 26,
          },
          {
            name: "قیر",
            id: 27,
          },
          {
            name: "كازرون",
            latitude: "29.350",
            longitude: "51.400",
            id: 28,
          },
          {
            name: "کوار",
            latitude: "29.1217",
            longitude: "52.4124",
            id: 29,
          },
          {
            name: "کوه‌چنار",
            id: 30,
          },
          {
            name: "گراش",
            id: 31,
          },
          {
            name: "لامرد",
            latitude: "27.300",
            longitude: "53.200",
            id: 32,
          },
          {
            name: "مرودشت",
            latitude: "52.802",
            longitude: "29.874",
            id: 33,
          },
          {
            name: "ممسی",
            id: 34,
          },
          {
            name: "مهر",
            latitude: "27.330",
            longitude: "52.530",
            id: 35,
          },
          {
            name: "نی‌ریز",
            id: 36,
          },
        ],
        id: 16,
      });
      break;
    case "قزوين":
      res.status(200).json({
        name: "قزوين",
        center: "قزوين",
        latitude: "36.167",
        longitude: "50.010",
        cities: [
          {
            name: "آبيك",
            latitude: "36.30",
            longitude: "50.310",
            id: 1,
          },
          {
            name: "آوج",
            id: 2,
          },
          {
            name: "البرز",
            id: 3,
          },
          {
            name: "بوئين زهرا",
            latitude: "35.466",
            longitude: "50.331",
            id: 4,
          },
          {
            name: "تاكستان",
            latitude: "36.20",
            longitude: "49.400",
            id: 5,
          },
          {
            name: "قزوين",
            latitude: "36.167",
            longitude: "50.010",
            id: 6,
          },
        ],
        id: 17,
      });
      break;
    case "قم":
      res.status(200).json({
        name: "قم",
        center: "قم",
        latitude: "34.380",
        longitude: "50.530",
        cities: [
          {
            name: "جعفرآباد",
            latitude: "34.774",
            longitude: " 50.516",
            id: 1,
          },
          {
            name: "قم",
            latitude: "34.380",
            longitude: "50.530",
            id: 2,
          },

          {
            name: "کهک",
            latitude: "34.392",
            longitude: "50.863",
            id: 4,
          },
        ],
        id: 18,
      });
      break;
    case "البرز":
      res.status(200).json({
        name: "البرز",
        center: "کرج",
        latitude: "35.8400",
        longitude: "50.9391",
        cities: [
          {
            name: "اشتهارد",
            latitude: "35.430",
            longitude: "50.220",
            id: 1,
          },
          {
            name: "چهارباغ",
            id: 2,
          },
          {
            name: "ساوجبلاغ",
            latitude: "35.5742",
            longitude: "50.4048",
            id: 3,
          },
          {
            name: "طالقان",
            latitude: "36.100",
            longitude: "50.445",
            id: 4,
          },
          {
            name: "فردیس",
            id: 5,
          },
          {
            name: "کرج",
            latitude: "35.8400",
            longitude: "50.9391",
            id: 6,
          },

          {
            name: "نظرآباد",
            latitude: "50.608",
            longitude: "35.956",
            id: 7,
          },
        ],
        id: 19,
      });
      break;
    case "كردستان":
      res.status(200).json({
        name: "كردستان",
        center: "سنندج",
        latitude: "35.180",
        longitude: "47.10",
        cities: [
          {
            name: "بانه",
            latitude: "35.590",
            longitude: "45.540",
            id: 1,
          },
          {
            name: "بيجار",
            latitude: "35.520",
            longitude: "47.390",
            id: 2,
          },
          {
            name: "دهگلان",
            id: 3,
          },
          {
            name: "دیواندره",
            id: 4,
          },
          {
            name: "سروآباد",
            id: 5,
          },
          {
            name: "سقز",
            latitude: "36.140",
            longitude: "46.150",
            id: 6,
          },
          {
            name: "سنندج",
            latitude: "35.180",
            longitude: "47.10",
            id: 7,
          },
          {
            name: "قروه",
            latitude: "35.90",
            longitude: "47.480",
            id: 8,
          },
          {
            name: "کامیاران",
            id: 9,
          },
          {
            name: "مريوان",
            latitude: "35.310",
            longitude: "46.100",
            id: 10,
          },
        ],
        id: 20,
      });
      break;
    case "کرمان":
      res.status(200).json({
        name: "کرمان",
        center: "کرمان",
        latitude: "30.160",
        longitude: "57.40",
        cities: [
          {
            name: "ارزوئیه",
            id: 1,
          },
          {
            name: "انار",
            latitude: "30.550",
            longitude: "55.150",
            id: 2,
          },
          {
            name: "بافت",
            latitude: "29.120",
            longitude: "56.360",
            id: 3,
          },
          {
            name: "بردسير",
            latitude: "29.5541",
            longitude: "56.3427",
            id: 4,
          },
          {
            name: "بم",
            latitude: "29.70",
            longitude: "58.200",
            id: 5,
          },
          {
            name: "جازموریان",
            id: 6,
          },
          {
            name: "جيرفت",
            latitude: "28.400",
            longitude: "57.440",
            id: 7,
          },
          {
            name: "رابر",
            id: 8,
          },
          {
            name: "راور",
            latitude: "31.150",
            longitude: "56.510",
            id: 9,
          },
          {
            name: "رفسنجان",
            id: 10,
          },
          {
            name: "رودبار جنوب",
            id: 11,
          },
          {
            name: "ریگان",
            id: 12,
          },
          {
            name: "زرند",
            latitude: "30.500",
            longitude: "56.350",
            id: 13,
          },
          {
            name: "سيرجان",
            latitude: "29.270",
            longitude: "55.400",
            id: 14,
          },
          {
            name: "شهربابک",
            id: 15,
          },
          {
            name: "عنبرآباد",
            id: 16,
          },
          {
            name: "فاریاب",
            id: 17,
          },
          {
            name: "فهرج",
            id: 18,
          },
          {
            name: "قلعه گنج",
            id: 19,
          },
          {
            name: "کرمان",
            latitude: "30.160",
            longitude: "57.40",
            id: 20,
          },
          {
            name: "كهنوج",
            latitude: "27.5653",
            longitude: "57.4155",
            id: 21,
          },
          {
            name: "کوهبنان",
            latitude: "31.250",
            longitude: "56.170",
            id: 22,
          },
          {
            name: "گنبکی",
            id: 23,
          },
          {
            name: "منوجان",
            id: 24,
          },
          {
            name: "نرماشیر",
            id: 25,
          },
        ],
        id: 21,
      });
      break;
    case "كرمانشاه":
      res.status(200).json({
        name: "كرمانشاه",
        center: "كرمانشاه",
        latitude: "34.180",
        longitude: "47.30",
        cities: [
          {
            name: "اسلام آباد غرب",
            latitude: "46.528",
            longitude: "34.111",
            id: 1,
          },
          {
            name: "پاوه",
            latitude: "35.30",
            longitude: "46.220",
            id: 2,
          },
          {
            name: "ثلاث باباجانی",
            id: 3,
          },
          {
            name: "جوانرود",
            latitude: "34.4823",
            longitude: "46.3023",
            id: 4,
          },
          {
            name: "دالاهو",
            id: 5,
          },
          {
            name: "سرپل ذهاب",
            id: 6,
          },
          {
            name: "سنقر",
            latitude: "34.470",
            longitude: "47.360",
            id: 7,
          },
          {
            name: "صحنه",
            latitude: "34.290",
            longitude: "47.410",
            id: 8,
          },
          {
            name: "قصر شيرين",
            latitude: "34.310",
            longitude: "45.350",
            id: 9,
          },
          {
            name: "كرمانشاه",
            latitude: "34.180",
            longitude: "47.30",
            id: 10,
          },
          {
            name: "كنگاور",
            latitude: "34.290",
            longitude: "47.550",
            id: 11,
          },
          {
            name: "گیلانغرب",
            id: 12,
          },
          {
            name: "هرسين",
            latitude: "34.160",
            longitude: "47.350",
            id: 13,
          },
          {
            name: "روانسر",
            id: 14,
          },
        ],
        id: 22,
      });
      break;
    case "كهكيلويه و بويراحمد":
      res.status(200).json({
        name: "كهكيلويه و بويراحمد",
        center: "ياسوج",
        latitude: "30.390",
        longitude: "51.350",
        cities: [
          {
            name: "باشت",
            id: 1,
          },
          {
            name: "بهمئی",
            id: 2,
          },
          {
            name: "بویراحمد",
            id: 3,
          },
          {
            name: "چرام",
            id: 4,
          },
          {
            name: "دنا",
            id: 5,
          },
          {
            name: "کهگیلویه",
            id: 6,
          },
          {
            name: "گچساران",
            latitude: "30.2128",
            longitude: "50.4757",
            id: 7,
          },
          {
            name: "لنده",
            id: 8,
          },
          {
            name: "مارگون",
            id: 9,
          },
        ],
        id: 23,
      });
      break;
    case "گلستان":
      res.status(200).json({
        name: "گلستان",
        center: "گرگان",
        latitude: "36.500",
        longitude: "54.250",
        cities: [
          {
            name: "آزادشهر",
            latitude: "37.50",
            longitude: "55.100",
            id: 1,
          },
          {
            name: "آق قلا",
            latitude: "37.10",
            longitude: "54.2757",
            id: 2,
          },
          {
            name: "بندر ترکمن",
            latitude: "37.150",
            longitude: "55.100",
            id: 3,
          },
          {
            name: "بندر گز",
            id: 4,
          },
          {
            name: "راميان",
            latitude: "37.024",
            longitude: "55.835",
            id: 5,
          },
          {
            name: "علي آباد كتول",
            latitude: "36.5429",
            longitude: "54.5148",
            id: 6,
          },
          {
            name: "كردكوی",
            latitude: "36.4748",
            longitude: "54.655",
            id: 7,
          },
          {
            name: "كلاله",
            latitude: "37.2251",
            longitude: "55.2930",
            id: 8,
          },
          {
            name: "گالیکش",
            id: 9,
          },
          {
            name: "گرگان",
            latitude: "36.500",
            longitude: "54.250",
            id: 10,
          },
          {
            name: "گمیشان",
            id: 11,
          },
          {
            name: "گنبد كاووس",
            latitude: "37.150",
            longitude: "55.100",
            id: 12,
          },
          {
            name: "مراوه تپه",
            id: 13,
          },
          {
            name: "مینودشت",
            id: 14,
          },
        ],
        id: 24,
      });
      break;
    case "گيلان":
      res.status(200).json({
        name: "گيلان",
        center: "رشت",
        latitude: "37.160",
        longitude: "49.350",
        cities: [
          {
            name: "املش",
            latitude: "37.520",
            longitude: "50.1114",
            id: 1,
          },
          {
            name: "آستارا",
            latitude: "38.2518",
            longitude: "48.5221",
            id: 2,
          },
          {
            name: "آستانه اشرفیه",
            id: 3,
          },
          {
            name: "بندر انزلی",
            id: 4,
          },
          {
            name: "تالش",
            latitude: "37.484",
            longitude: "48.5428",
            id: 5,
          },
          {
            name: "خمام",
            id: 6,
          },
          {
            name: "رشت",
            latitude: "37.160",
            longitude: "49.350",
            id: 7,
          },
          {
            name: "رضوانشهر",
            id: 8,
          },
          {
            name: "رودبار",
            latitude: "36.4920",
            longitude: "49.2533",
            id: 9,
          },
          {
            name: "رودسر",
            id: 10,
          },
          {
            name: "سیاهکل",
            id: 11,
          },
          {
            name: "شفت",
            latitude: "37.90",
            longitude: "49.240",
            id: 12,
          },
          {
            name: "صومعه سرا",
            latitude: "37.180",
            longitude: "49.180",
            id: 13,
          },
          {
            name: "فومن",
            latitude: "37.150",
            longitude: "49.190",
            id: 14,
          },
          {
            name: "لاهیجان",
            latitude: "37.130",
            longitude: "50.00",
            id: 15,
          },
          {
            name: "لنگرود",
            latitude: "37.120",
            longitude: "50.90",
            id: 16,
          },
          {
            name: "ماسال",
            latitude: "37.2249",
            longitude: "49.633",
            id: 17,
          },
        ],
        id: 25,
      });
      break;
    case "لرستان":
      res.status(200).json({
        name: "لرستان",
        center: "خرم آباد",
        latitude: "33.290",
        longitude: "48.210",
        cities: [
          {
            name: "ازنا",
            latitude: "33.2713",
            longitude: "49.279",
            id: 1,
          },
          {
            name: "اليگودرز",
            latitude: "33.230",
            longitude: "49.420",
            id: 2,
          },
          {
            name: "بروجرد",
            latitude: "33.550",
            longitude: "48.480",
            id: 3,
          },
          {
            name: "پلدختر",
            id: 4,
          },
          {
            name: "چگنی",
            id: 5,
          },
          {
            name: "خرم آباد",
            latitude: "33.290",
            longitude: "48.210",
            id: 6,
          },
          {
            name: "دلفان",
            id: 7,
          },
          {
            name: "دورود",
            latitude: "33.2940",
            longitude: "49.425",
            id: 8,
          },
          {
            name: "رومشکان",
            latitude: "47.972",
            longitude: "34.074",
            id: 9,
          },
          {
            name: "سلسله",
            id: 10,
          },
          {
            name: "كوهدشت",
            latitude: "33.320",
            longitude: "47.360",
            id: 11,
          },
        ],
        id: 26,
      });
      break;
    case "مازندران":
      res.status(200).json({
        name: "مازندران",
        center: "ساري",
        latitude: "36.330",
        longitude: "53.30",
        cities: [
          {
            name: "آمل",
            latitude: "36.280",
            longitude: "52.220",
            id: 1,
          },
          {
            name: "بابل",
            latitude: "36.330",
            longitude: "52.410",
            id: 2,
          },
          {
            name: "بابلسر",
            latitude: "36.420",
            longitude: "52.390",
            id: 3,
          },
          {
            name: "بهشهر",
            latitude: "36.420",
            longitude: "53.330",
            id: 4,
          },
          {
            name: "تنكابن",
            latitude: "36.490",
            longitude: "50.530",
            id: 5,
          },
          {
            name: "جويبار",
            latitude: "36.380",
            longitude: "52.550",
            id: 6,
          },
          {
            name: "چالوس",
            latitude: "36.390",
            longitude: "51.250",
            id: 7,
          },
          {
            name: "رامسر",
            latitude: "37.5426",
            longitude: "50.3944",
            id: 8,
          },
          {
            name: "ساري",
            latitude: "36.330",
            longitude: "53.30",
            id: 9,
          },
          {
            name: "سوادکوه",
            id: 10,
          },
          {
            name: "سیمرغ",
            id: 11,
          },
          {
            name: "عباس آباد",
            id: 12,
          },
          {
            name: "فریدونکنار",
            id: 13,
          },
          {
            name: "قائم شهر",
            latitude: "52.859",
            longitude: "36.466",
            id: 14,
          },
          {
            name: "کلاردشت",
            id: 15,
          },
          {
            name: "گلوگاه",
            id: 16,
          },
          {
            name: "محمود آباد",
            latitude: "52.278",
            longitude: "36.634",
            id: 17,
          },
          {
            name: "میان دورود",
            id: 18,
          },
          {
            name: "نكا",
            latitude: "36.390",
            longitude: "53.180",
            id: 19,
          },
          {
            name: "نور",
            latitude: "36.3410",
            longitude: "52.049",
            id: 20,
          },
          {
            name: "نوشهر",
            latitude: "36.390",
            longitude: "51.300",
            id: 21,
          },
        ],
        id: 27,
      });
      break;
    case "مرکزی":
      res.status(200).json({
        name: "مرکزی",
        center: "اراک",
        latitude: "34.50",
        longitude: "49.410",
        cities: [
          {
            name: "آشتيان",
            latitude: "34.320",
            longitude: "50.00",
            id: 1,
          },
          {
            name: "اراک",
            latitude: "34.50",
            longitude: "49.410",
            id: 2,
          },
          {
            name: "تفرش",
            latitude: "34.4139",
            longitude: "50.055",
            id: 3,
          },
          {
            name: "خمين",
            latitude: "33.380",
            longitude: "50.40",
            id: 4,
          },
          {
            name: "خنداب",
            id: 5,
          },
          {
            name: "دليجان",
            latitude: "33.590",
            longitude: "50.410",
            id: 6,
          },
          {
            name: "زرندیه",
            id: 7,
          },
          {
            name: "ساوه",
            latitude: "35.117",
            longitude: "50.2124",
            id: 8,
          },
          {
            name: "شازند",
            latitude: "33.5616",
            longitude: "49.250",
            id: 9,
          },
          {
            name: "فرهان",
            id: 10,
          },
          {
            name: "کمیجان",
            id: 11,
          },
          {
            name: "محلات",
            latitude: "33.540",
            longitude: "50.280",
            id: 12,
          },
        ],
        id: 28,
      });
      break;
    case "هرمزگان":
      res.status(200).json({
        name: "هرمزگان",
        center: "بندرعباس",
        latitude: "56.266",
        longitude: "27.18",
        cities: [
          {
            name: "بستك",
            latitude: "27.160",
            longitude: "54.260",
            id: 1,
          },
          {
            name: "بشاگرد",
            id: 2,
          },

          {
            name: "بندرعباس",
            latitude: "56.266",
            longitude: "27.18",
            id: 3,
          },
          {
            name: "بندر لنگه",
            latitude: "26.340",
            longitude: "54.520",
            id: 4,
          },
          {
            name: "پارسیان",
            id: 5,
          },
          {
            name: " جاسك",
            latitude: "25.3839",
            longitude: "57.4624",
            id: 6,
          },
          {
            name: "جزیره ابوموسی",
            id: 7,
          },
          {
            name: "جزیره تنب بزرگ",
            id: 8,
          },
          {
            name: "جزیره تنب کوچک",
            id: 9,
          },
          {
            name: "جزیره سیری",
            id: 10,
          },
          {
            name: "جزیره شیدور (ماران)",
            id: 11,
          },
          {
            name: "جزیره قشم",
            latitude: "26.580",
            longitude: "56.170",
            id: 12,
          },
          {
            name: "جزیره كيش",
            latitude: "26.320",
            longitude: "53.580",
            id: 13,
          },
          {
            name: "جزیره لارک",
            id: 14,
          },
          {
            name: "جزیره لاوان",
            id: 15,
          },
          {
            name: "جزیره هرمز",
            id: 16,
          },
          {
            name: "جزیره هندرابی",
            id: 17,
          },
          {
            name: "جزیره هنگام",
            id: 18,
          },
          {
            name: "حاجي آباد",
            latitude: "33.3622",
            longitude: "59.5957",
            id: 19,
          },
          {
            name: "خمیر",
            latitude: "26.570",
            longitude: "55.350",
            id: 20,
          },
          {
            name: "رودان",
            id: 21,
          },
          {
            name: "سیریک",
            id: 22,
          },
          {
            name: "ميناب",
            latitude: "27.70",
            longitude: "57.60",
            id: 23,
          },
        ],
        id: 29,
      });
      break;
    case "همدان":
      res.status(200).json({
        name: "همدان",
        center: "همدان",
        latitude: "34.470",
        longitude: "48.300",
        cities: [
          {
            name: "اسدآباد",
            latitude: "48.123",
            longitude: "34.783",
            id: 1,
          },
          {
            name: "بهار",
            latitude: "34.5425",
            longitude: "48.2622",
            id: 2,
          },
          {
            name: "تویسرکان",
            id: 3,
          },
          {
            name: "درگزین",
            id: 4,
          },
          {
            name: "رزن",
            latitude: "49.033",
            longitude: "35.39",
            id: 5,
          },
          {
            name: "فامنین",
            latitude: "34.5425",
            longitude: "48.2622",
            id: 6,
          },
          {
            name: "کبودرآهنگ",
            latitude: "34.5425",
            longitude: "48.2622",
            id: 7,
          },
          {
            name: "ملاير",
            latitude: "34.180",
            longitude: "48.490",
            id: 8,
          },
          {
            name: "نهاوند",
            latitude: "34.130",
            longitude: "48.210",
            id: 9,
          },
          {
            name: "همدان",
            latitude: "34.470",
            longitude: "48.300",
            id: 10,
          },
        ],
        id: 30,
      });
      break;
    case "يزد":
      res.status(200).json({
        name: "يزد",
        center: "يزد",
        latitude: "31.530",
        longitude: "54.210",
        cities: [
          {
            name: "ابركوه",
            latitude: "31.741",
            longitude: "53.1652",
            id: 1,
          },
          {
            name: "اردكان",
            latitude: "32.200",
            longitude: "53.590",
            id: 2,
          },
          {
            name: "اشكذر",
            latitude: "31.5938",
            longitude: "54.1220",
            id: 3,
          },
          {
            name: "بافق",
            latitude: "31.360",
            longitude: "55.240",
            id: 4,
          },
          {
            name: "بهاباد",
            id: 5,
          },
          {
            name: "تفت",
            latitude: "31.450",
            longitude: "54.120",
            id: 6,
          },
          {
            name: "خاتم",
            id: 7,
          },
          {
            name: "زارچ",
            latitude: "54.26",
            longitude: "31.979",
            id: 8,
          },
          {
            name: "مروست",
            id: 7,
          },
          {
            name: "مهريز",
            latitude: "31.359",
            longitude: "54.2520",
            id: 8,
          },
          {
            name: "ميبد",
            latitude: "32.140",
            longitude: "54.10",
            id: 9,
          },
          {
            name: "يزد",
            latitude: "31.530",
            longitude: "54.210",
            id: 10,
          },
        ],
        id: 31,
      });
      break;
    default:
      res.status(409).json({
        message: "Send a valid state name with `state` parameter",
      });
      break;
  }
};

const getPhoneCode = (req, res) => {
  switch (req.query.state) {
    case "آذربايجان شرقی":
      res.status(200).json({
        name: "آذربايجان شرقی",
        center: "تبریز",
        latitude: "38.50",
        longitude: "46.180",
        phone: [
          {
            code: 41,
            id: 1,
          },
        ],
        id: 1,
      });
      break;
    case "آذربايجان غربی":
      res.status(200).json({
        name: "آذربايجان غربی",
        center: "ارومیه",
        latitude: "37.320",
        longitude: "45.40",
        phone: [
          {
            code: 44,
            id: 2,
          },
        ],
        id: 2,
      });
      break;

    case "اردبيل":
      res.status(200).json({
        name: "اردبيل",
        center: "اردبیل",
        latitude: "38.140",
        longitude: "48.170",
        phone: [
          {
            code: 45,
            id: 3,
          },
        ],
        id: 3,
      });
      break;
    case "اصفهان":
      res.status(200).json({
        name: "اصفهان",
        center: "اصفهان",
        latitude: "32.390",
        longitude: "51.400",
        phone: [
          {
            code: 31,
            id: 4,
          },
        ],
        id: 4,
      });
      break;
    case "ايلام":
      res.status(200).json({
        name: "ايلام",
        center: "ايلام",
        latitude: "33.380",
        longitude: "46.250",
        phone: [
          {
            code: 84,
            id: 5,
          },
        ],
        id: 5,
      });
      break;
    case "بوشهر":
      res.status(200).json({
        name: "بوشهر",
        center: "بوشهر",
        latitude: "28.590",
        longitude: "50.500",
        phone: [
          {
            code: 77,
            id: 6,
          },
        ],
        id: 6,
      });
      break;
    case "تهران":
      res.status(200).json({
        name: "تهران",
        center: "تهران",
        latitude: "35.410",
        longitude: "51.240",
        phone: [
          {
            code: 21,
            id: 7,
          },
        ],
        id: 7,
      });
      break;
    case "چهارمحال بختیاری":
      res.status(200).json({
        name: "چهارمحال بختیاری",
        center: "شهركرد",
        latitude: "32.190",
        longitude: "50.510",
        phone: [
          {
            code: 38,
            id: 8,
          },
        ],
        id: 8,
      });
      break;
    case "خراسان جنوبی":
      res.status(200).json({
        name: "خراسان جنوبی",
        center: "بيرجند",
        latitude: "32.5216",
        longitude: "59.1315",
        phone: [
          {
            code: 56,
            id: 9,
          },
        ],
        id: 9,
      });
      break;
    case "خراسان رضوی":
      res.status(200).json({
        name: "خراسان رضوی",
        center: "مشهد",
        latitude: "36.170",
        longitude: "59.350",
        phone: [
          {
            code: 51,
            id: 10,
          },
        ],
        id: 10,
      });
      break;
    case "خراسان شمالی":
      res.status(200).json({
        name: "خراسان شمالی",
        center: "بجنورد",
        latitude: "37.2835",
        longitude: "57.1954",
        phone: [
          {
            code: 58,
            id: 11,
          },
        ],
        id: 11,
      });
      break;
    case "خوزستان":
      res.status(200).json({
        name: "خوزستان",
        center: "اهواز",
        latitude: "31.190",
        longitude: "48.410",
        phone: [
          {
            code: 61,
            id: 12,
          },
        ],
        id: 12,
      });
      break;
    case "زنجان":
      res.status(200).json({
        name: "زنجان",
        center: "زنجان",
        latitude: "36.400",
        longitude: "48.290",
        phone: [
          {
            code: 24,
            id: 13,
          },
        ],
        id: 13,
      });
      break;
    case "سمنان":
      res.status(200).json({
        name: "سمنان",
        center: "سمنان",
        latitude: "35.340",
        longitude: "53.230",
        phone: [
          {
            code: 23,
            id: 14,
          },
        ],
        id: 14,
      });
      break;
    case "سيستان و بلوچستان":
      res.status(200).json({
        name: "سيستان و بلوچستان",
        center: "زاهدان",
        latitude: "29.320",
        longitude: "60.540",
        phone: [
          {
            code: 54,
            id: 15,
          },
        ],
        id: 15,
      });
      break;
    case "فارس":
      res.status(200).json({
        name: "فارس",
        center: "شيراز",
        latitude: "29.360",
        longitude: "52.310",
        phone: [
          {
            code: 71,
            id: 16,
          },
        ],
        id: 16,
      });
      break;
    case "قزوين":
      res.status(200).json({
        name: "قزوين",
        center: "قزوين",
        latitude: "36.167",
        longitude: "50.010",
        phone: [
          {
            code: 28,
            id: 17,
          },
        ],
        id: 17,
      });
      break;
    case "قم":
      res.status(200).json({
        name: "قم",
        center: "قم",
        latitude: "34.380",
        longitude: "50.530",
        phone: [
          {
            code: 25,
            id: 18,
          },
        ],
        id: 18,
      });
      break;
    case "البرز":
      res.status(200).json({
        name: "البرز",
        center: "کرج",
        latitude: "35.8400",
        longitude: "50.9391",
        phone: [
          {
            code: 26,
            id: 19,
          },
        ],
        id: 19,
      });
      break;
    case "كردستان":
      res.status(200).json({
        name: "كردستان",
        center: "سنندج",
        latitude: "35.180",
        longitude: "47.10",
        phone: [
          {
            code: 87,
            id: 20,
          },
        ],
        id: 20,
      });
      break;
    case "کرمان":
      res.status(200).json({
        name: "کرمان",
        center: "کرمان",
        latitude: "30.160",
        longitude: "57.40",
        phone: [
          {
            code: 34,
            id: 21,
          },
        ],
        id: 21,
      });
      break;
    case "كرمانشاه":
      res.status(200).json({
        name: "كرمانشاه",
        center: "كرمانشاه",
        latitude: "34.180",
        longitude: "47.30",
        phone: [
          {
            code: 87,
            id: 22,
          },
        ],
        id: 22,
      });
      break;
    case "كهكيلويه و بويراحمد":
      res.status(200).json({
        name: "كهكيلويه و بويراحمد",
        center: "ياسوج",
        latitude: "30.390",
        longitude: "51.350",
        phone: [
          {
            code: 74,
            id: 23,
          },
        ],
        id: 23,
      });
      break;
    case "گلستان":
      res.status(200).json({
        name: "گلستان",
        center: "گرگان",
        latitude: "36.500",
        longitude: "54.250",
        phone: [
          {
            code: 17,
            id: 24,
          },
        ],
        id: 24,
      });
      break;
    case "گيلان":
      res.status(200).json({
        name: "گيلان",
        center: "رشت",
        latitude: "37.160",
        longitude: "49.350",
        phone: [
          {
            code: 13,
            id: 25,
          },
        ],
        id: 25,
      });
      break;
    case "لرستان":
      res.status(200).json({
        name: "لرستان",
        center: "خرم آباد",
        latitude: "33.290",
        longitude: "48.210",
        phone: [
          {
            code: 66,
            id: 26,
          },
        ],
        id: 26,
      });
      break;
    case "مازندران":
      res.status(200).json({
        name: "مازندران",
        center: "ساري",
        latitude: "36.330",
        longitude: "53.30",
        phone: [
          {
            code: 11,
            id: 27,
          },
        ],
        id: 27,
      });
      break;
    case "مرکزی":
      res.status(200).json({
        name: "مرکزی",
        center: "اراک",
        latitude: "34.50",
        longitude: "49.410",
        phone: [
          {
            code: 86,
            id: 28,
          },
        ],
        id: 28,
      });
      break;
    case "هرمزگان":
      res.status(200).json({
        name: "هرمزگان",
        center: "بندرعباس",
        latitude: "56.266",
        longitude: "27.18",
        phone: [
          {
            code: 76,
            id: 29,
          },
        ],
        id: 29,
      });
      break;
    case "همدان":
      res.status(200).json({
        name: "همدان",
        center: "همدان",
        latitude: "34.470",
        longitude: "48.300",
        phone: [
          {
            code: 81,
            id: 30,
          },
        ],
        id: 30,
      });
      break;
    case "يزد":
      res.status(200).json({
        name: "يزد",
        center: "يزد",
        latitude: "31.530",
        longitude: "54.210",
        phone: [
          {
            code: 35,
            id: 31,
          },
        ],
        id: 31,
      });
      break;
    default:
      res.status(409).json({
        message: "Send a valid state name with `state` parameter",
      });
      break;
  }
};

//*>----------- module export

module.exports = { getStates, getCities, getPhoneCode };
