const getTimeZones = (req, res) => {
  const country = req.query.country;
  let TimeZone = "";
  let Capital = "";
  let DialCode = "";
  switch (country.toLowerCase()) {
    case "iran":
      TimeZone = new Date().toLocaleString("fa-IR", {
        timeZone: "Asia/Tehran",
      });
      Capital = "Tehran";
      DialCode = "+98";
      res.status(200).json({ TimeZone, Capital, DialCode });
      break;

    case "emirates":
      TimeZone = new Date().toLocaleString("fa-IR", {
        timeZone: "Asia/Dubai",
      });
      Capital = "Abu Dhabi";
      DialCode = "+971";
      res.status(200).json({ TimeZone, Capital, DialCode });
      break;

    case "afghanistan":
      TimeZone = new Date().toLocaleString("fa-IR", {
        timeZone: "Asia/Kabul",
      });
      Capital = "Kabul";
      DialCode = "+93";
      res.status(200).json({ TimeZone, Capital, DialCode });
      break;

    case "andorra":
      TimeZone = new Date().toLocaleString("en-US", {
        timeZone: "Europe/Andorra",
      });
      Capital = "Andorra La Vella";
      DialCode = "+376";
      res.status(200).json({ TimeZone, Capital, DialCode });
      break;

    case "albania":
      TimeZone = new Date().toLocaleString("en-US", {
        timeZone: "Europe/Tirane",
      });
      Capital = "Tirane";
      DialCode = "+355";
      res.status(200).json({ TimeZone, Capital, DialCode });
      break;

    case "armenia":
      TimeZone = new Date().toLocaleString("en-US", {
        timeZone: "Asia/Yerevan",
      });
      Capital = "Yerevan";
      DialCode = "+374";
      res.status(200).json({ TimeZone, Capital, DialCode });
      break;

    case "argentina":
      TimeZone = {
        AmericaArgentinaBuenos_Aires: new Date().toLocaleString("en-US", {
          timeZone: "America/Argentina/Buenos_Aires",
        }),
        AmericaArgentinaCordoba: new Date().toLocaleString("en-US", {
          timeZone: "America/Argentina/Cordoba",
        }),

        AmericaArgentinaSalta: new Date().toLocaleString("en-US", {
          timeZone: "America/Argentina/Salta",
        }),
        AmericaArgentinaJujuy: new Date().toLocaleString("en-US", {
          timeZone: "America/Argentina/Jujuy",
        }),
        AmericaArgentinaTucuman: new Date().toLocaleString("en-US", {
          timeZone: "America/Argentina/Tucuman",
        }),
      };

      Capital = "Buenos Aires";
      DialCode = "+54";
      res.status(200).json({ TimeZone, Capital, DialCode });
      break;

    case "austria":
      TimeZone = new Date().toLocaleString("en-US", {
        timeZone: "Europe/Vienna",
      });
      Capital = "Vienna";
      DialCode = "+43";
      res.status(200).json({ TimeZone, Capital, DialCode });
      break;

    case "australia":
      TimeZone = {
        AustraliaLordHowe: new Date().toLocaleString("en-US", {
          timeZone: "Australia/Lord_Howe",
        }),
        AntarcticaMacquarie: new Date().toLocaleString("en-US", {
          timeZone: "Antarctica/Macquarie",
        }),
        AustraliaHobart: new Date().toLocaleString("en-US", {
          timeZone: "Australia/Hobart",
        }),
        AustraliaCurrie: new Date().toLocaleString("en-US", {
          timeZone: "Australia/Currie",
        }),
        AustraliaMelbourne: new Date().toLocaleString("en-US", {
          timeZone: "Australia/Melbourne",
        }),
        AustraliaSydney: new Date().toLocaleString("en-US", {
          timeZone: "Australia/Sydney",
        }),
        AustraliaBroken_Hill: new Date().toLocaleString("en-US", {
          timeZone: "Australia/Broken_Hill",
        }),
        AustraliaBrisbane: new Date().toLocaleString("en-US", {
          timeZone: "Australia/Brisbane",
        }),
        AustraliaLindeman: new Date().toLocaleString("en-US", {
          timeZone: "Australia/Lindeman",
        }),
        AustraliaAdelaide: new Date().toLocaleString("en-US", {
          timeZone: "Australia/Adelaide",
        }),
        AustraliaDarwin: new Date().toLocaleString("en-US", {
          timeZone: "Australia/Darwin",
        }),
        AustraliaPerth: new Date().toLocaleString("en-US", {
          timeZone: "Australia/Perth",
        }),
        AustraliaEucla: new Date().toLocaleString("en-US", {
          timeZone: "Australia/Eucla",
        }),
      };
      Capital = "Canberra";
      DialCode = "+61";
      res.status(200).json({ TimeZone, Capital, DialCode });
      break;

    case "azerbaijan":
      (TimeZone = new Date().toLocaleString("en-US", {
        timeZone: "Asia/Baku",
      })),
        (Capital = "Baku");
      DialCode = "+994";
      res.status(200).json({ TimeZone, Capital, DialCode });
      break;

    case "barbados":
      (TimeZone = new Date().toLocaleString("en-US", {
        timeZone: "America/Barbados",
      })),
        (Capital = "Bridgetown");
      DialCode = "+1";
      res.status(200).json({ TimeZone, Capital, DialCode });
      break;

    case "bangladesh":
      (TimeZone = new Date().toLocaleString("en-US", {
        timeZone: "Asia/Dhaka",
      })),
        (Capital = "Dhaka");
      DialCode = "+880";
      res.status(200).json({ TimeZone, Capital, DialCode });
      break;

    case "belgium":
      (TimeZone = new Date().toLocaleString("en-US", {
        timeZone: "Europe/Brussels",
      })),
        (Capital = "Brussels");
      DialCode = "+32";
      res.status(200).json({ TimeZone, Capital, DialCode });
      break;

    case "bulgaria":
      (TimeZone = new Date().toLocaleString("en-US", {
        timeZone: "Europe/Sofia",
      })),
        (Capital = "Sofia");
      DialCode = "+359";
      res.status(200).json({ TimeZone, Capital, DialCode });
      break;

    case "brunei":
      (TimeZone = new Date().toLocaleString("en-US", {
        timeZone: "Asia/Brunei",
      })),
        (Capital = "Bandar Seri Begawan");
      DialCode = "+673";
      res.status(200).json({ TimeZone, Capital, DialCode });
      break;

    case "bolivia":
      (TimeZone = new Date().toLocaleString("en-US", {
        timeZone: "America/La_Paz",
      })),
        (Capital = "Sucre");
      DialCode = "+591";
      res.status(200).json({ TimeZone, Capital, DialCode });
      break;

    case "brazil":
      TimeZone = {
        AmericaLa_Paz: new Date().toLocaleString("en-US", {
          timeZone: "America/La_Paz",
        }),
        AmericaNoronha: new Date().toLocaleString("en-US", {
          timeZone: "America/Noronha",
        }),
        AmericaBelem: new Date().toLocaleString("en-US", {
          timeZone: "America/Belem",
        }),
        AmericaFortaleza: new Date().toLocaleString("en-US", {
          timeZone: "America/Fortaleza",
        }),
        AmericaRecife: new Date().toLocaleString("en-US", {
          timeZone: "America/Recife",
        }),
        AmericaAraguaina: new Date().toLocaleString("en-US", {
          timeZone: "America/Araguaina",
        }),
        AmericaMaceio: new Date().toLocaleString("en-US", {
          timeZone: "America/Maceio",
        }),
      };
      Capital = "Brasilia";
      DialCode = "+55";
      res.status(200).json({ TimeZone, Capital, DialCode });
      break;

    default:
      res.status(409).json({
        message: "Send a valid country name with `country` parameter",
      });
      break;
  }
};

//*>----------- module export

module.exports = { getTimeZones };
