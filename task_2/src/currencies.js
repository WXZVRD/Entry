const currencies = [
    {
        id: "ZWL",
        name: "Zimbabwean Dollar",
        sign: "",
    },
    {
        id: "ZMW",
        name: "Zambian Kwacha",
        sign: "",
    },
    {
        id: "ZAR",
        name: "South African Rand",
        sign: "",
    },
    {
        id: "YER",
        name: "Yemeni Rial",
        sign: "",
    },
    {
        id: "XPF",
        name: "CFP Franc (Franc Pacifique)",
        sign: "",
    },
    {
        id: "XOF",
        name: "West African CFA Franc BCEAO",
        sign: "",
    },
    {
        id: "XDR",
        name: "ignore",
        sign: "",
    },
    {
        id: "XCD",
        name: "East Caribbean Dollar",
        sign: "",
    },
    {
        id: "XAF",
        name: "Central African CFA Franc BEAC",
        sign: "",
    },
    {
        id: "WST",
        name: "Samoan Tala",
        sign: "",
    },
    {
        id: "VUV",
        name: "Vanuatu Vatu",
        sign: "",
    },
    {
        id: "VND",
        name: "Vietnamese Dong",
        sign: "",
    },
    {
        id: "VES",
        name: "Venezuelan Bolívar Soberano",
        sign: "",
    },
    {
        id: "UZS",
        name: "Uzbekistani Som",
        sign: "",
    },
    {
        id: "UYU",
        name: "Uruguayan Peso",
        sign: "",
    },
    {
        id: "UGX",
        name: "Ugandan Shilling",
        sign: "",
    },
    {
        id: "UAH",
        name: "Ukrainian Hryvnia",
        sign: "",
    },
    {
        id: "TZS",
        name: "Tanzanian Shilling",
        sign: "",
    },
    {
        id: "TWD",
        name: "New Taiwan Dollar",
        sign: "",
    },
    {
        id: "TVD",
        name: "Tuvaluan Dollar",
        sign: "",
    },
    {
        id: "TTD",
        name: "Trinidad and Tobago Dollar",
        sign: "",
    },
    {
        id: "TRY",
        name: "Turkish Lira",
        sign: "",
    },
    {
        id: "TOP",
        name: "Tongan Paʻanga",
        sign: "",
    },
    {
        id: "TND",
        name: "Tunisian Dinar",
        sign: "",
    },
    {
        id: "TMT",
        name: "Turkmenistan Manat",
        sign: "",
    },
    {
        id: "TJS",
        name: "Tajikistani Somoni",
        sign: "",
    },
    {
        id: "THB",
        name: "Thai Baht",
        sign: "",
    },
    {
        id: "SZL",
        name: "Swazi Lilangeni",
        sign: "",
    },
    {
        id: "SYP",
        name: "Syrian Pound",
        sign: "",
    },
    {
        id: "STN",
        name: "Sao Tome and Príncipe Dobra",
        sign: "",
    },
    {
        id: "SSP",
        name: "South Sudanese Pound",
        sign: "",
    },
    {
        id: "SRD",
        name: "Surinamese Dollar",
        sign: "",
    },
    {
        id: "SOS",
        name: "Somali Shilling",
        sign: "",
    },
    {
        id: "SLL",
        name: "Sierra Leonean Leone",
        sign: "",
    },
    {
        id: "SLE",
        name: "Sierra Leonean Leone",
        sign: "",
    },
    {
        id: "SHP",
        name: "Saint Helena Pound",
        sign: "",
    },
    {
        id: "SGD",
        name: "Singapore Dollar",
        sign: "",
    },
    {
        id: "SEK",
        name: "Swedish Krona",
        sign: "",
    },
    {
        id: "SDG",
        name: "Sudanese Pound",
        sign: "",
    },
    {
        id: "SCR",
        name: "Seychellois Rupee",
        sign: "",
    },
    {
        id: "SBD",
        name: "Solomon Islands Dollar",
        sign: "",
    },
    {
        id: "SAR",
        name: "Saudi Riyal",
        sign: "",
    },
    {
        id: "RWF",
        name: "Rwandan Franc",
        sign: "",
    },
    {
        id: "RUB",
        name: "Russian Ruble",
        sign: "₽",
    },
    {
        id: "RSD",
        name: "Serbian Dinar",
        sign: "",
    },
    {
        id: "RON",
        name: "Romanian Leu",
        sign: "",
    },
    {
        id: "QAR",
        name: "Qatari Riyal",
        sign: "",
    },
    {
        id: "PYG",
        name: "Paraguayan Guaraní",
        sign: "",
    },
    {
        id: "PLN",
        name: "Polish Zloty",
        sign: "",
    },
    {
        id: "PKR",
        name: "Pakistani Rupee",
        sign: "",
    },
    {
        id: "PHP",
        name: "Philippine Peso",
        sign: "",
    },
    {
        id: "PGK",
        name: "Papua New Guinean Kina",
        sign: "",
    },
    {
        id: "PEN",
        name: "Peruvian Sol",
        sign: "",
    },
    {
        id: "PAB",
        name: "Panamanian Balboa",
        sign: "",
    },
    {
        id: "OMR",
        name: "Omani Rial",
        sign: "",
    },
    {
        id: "NZD",
        name: "New Zealand Dollar",
        sign: "",
    },
    {
        id: "NPR",
        name: "Nepalese Rupee",
        sign: "",
    },
    {
        id: "NOK",
        name: "Norwegian Krone",
        sign: "",
    },
    {
        id: "NIO",
        name: "Nicaraguan Córdoba",
        sign: "",
    },
    {
        id: "NGN",
        name: "Nigerian Naira",
        sign: "",
    },
    {
        id: "NAD",
        name: "Namibian Dollar",
        sign: "",
    },
    {
        id: "MZN",
        name: "Mozambican Metical",
        sign: "",
    },
    {
        id: "MYR",
        name: "Malaysian Ringgit",
        sign: "",
    },
    {
        id: "MXN",
        name: "Mexican Peso",
        sign: "",
    },
    {
        id: "MWK",
        name: "Malawian Kwacha",
        sign: "",
    },
    {
        id: "MVR",
        name: "Maldivian Rufiyaa",
        sign: "",
    },
    {
        id: "MUR",
        name: "Mauritian Rupee",
        sign: "",
    },
    {
        id: "MRU",
        name: "Mauritanian Ouguiya",
        sign: "",
    },
    {
        id: "MOP",
        name: "Macanese Pataca",
        sign: "",
    },
    {
        id: "MNT",
        name: "Mongolian Tögrög",
        sign: "",
    },
    {
        id: "MMK",
        name: "Myanmar Kyat",
        sign: "",
    },
    {
        id: "MKD",
        name: "Macedonian Denar",
        sign: "",
    },
    {
        id: "MGA",
        name: "Malagasy Ariary",
        sign: "",
    },
    {
        id: "MDL",
        name: "Moldovan Leu",
        sign: "",
    },
    {
        id: "MAD",
        name: "Moroccan Dirham",
        sign: "",
    },
    {
        id: "LYD",
        name: "Libyan Dinar",
        sign: "",
    },
    {
        id: "LSL",
        name: "Lesotho Loti",
        sign: "",
    },
    {
        id: "LRD",
        name: "Liberian Dollar",
        sign: "",
    },
    {
        id: "LKR",
        name: "Sri Lankan Rupee",
        sign: "",
    },
    {
        id: "LBP",
        name: "Lebanese Pound",
        sign: "",
    },
    {
        id: "LAK",
        name: "Lao Kip",
        sign: "",
    },
    {
        id: "KZT",
        name: "Kazakhstani Tenge",
        sign: "",
    },
    {
        id: "KYD",
        name: "Cayman Islands Dollar",
        sign: "",
    },
    {
        id: "KWD",
        name: "Kuwaiti Dinar",
        sign: "",
    },
    {
        id: "KRW",
        name: "South Korean Won",
        sign: "",
    },
    {
        id: "KMF",
        name: "Comorian Franc",
        sign: "",
    },
    {
        id: "KID",
        name: "Kiribati Dollar",
        sign: "",
    },
    {
        id: "KHR",
        name: "Cambodian Riel",
        sign: "",
    },
    {
        id: "KGS",
        name: "Kyrgyzstani Som",
        sign: "",
    },
    {
        id: "KES",
        name: "Kenyan Shilling",
        sign: "",
    },
    {
        id: "JPY",
        name: "Japanese Yen",
        sign: "",
    },
    {
        id: "JOD",
        name: "Jordanian Dinar",
        sign: "",
    },
    {
        id: "JMD",
        name: "Jamaican Dollar",
        sign: "",
    },
    {
        id: "JEP",
        name: "Jersey Pound",
        sign: "",
    },
    {
        id: "ISK",
        name: "Icelandic Krona",
        sign: "",
    },
    {
        id: "IRR",
        name: "Iranian Rial",
        sign: "",
    },
    {
        id: "IQD",
        name: "Iraqi Dinar",
        sign: "",
    },
    {
        id: "INR",
        name: "Indian Rupee",
        sign: "",
    },
    {
        id: "IMP",
        name: "Manx Pound",
        sign: "",
    },
    {
        id: "ILS",
        name: "Israeli new Shekel",
        sign: "",
    },
    {
        id: "IDR",
        name: "Indonesian Rupiah",
        sign: "",
    },
    {
        id: "HUF",
        name: "Hungarian Forint",
        sign: "",
    },
    {
        id: "HTG",
        name: "Haitian Gourde",
        sign: "",
    },
    {
        id: "HRK",
        name: "Croatian Kuna",
        sign: "",
    },
    {
        id: "HNL",
        name: "Honduran Lempira",
        sign: "",
    },
    {
        id: "HKD",
        name: "Hong Kong Dollar",
        sign: "",
    },
    {
        id: "GYD",
        name: "Guyanese Dollar",
        sign: "",
    },
    {
        id: "GTQ",
        name: "Guatemalan Quetzal",
        sign: "",
    },
    {
        id: "GNF",
        name: "Guinean Franc",
        sign: "",
    },
    {
        id: "GMD",
        name: "Gambian Dalasi",
        sign: "",
    },
    {
        id: "GIP",
        name: "Gibraltar Pound",
        sign: "",
    },
    {
        id: "GHS",
        name: "Ghanaian Cedi",
        sign: "",
    },
    {
        id: "GGP",
        name: "Guernsey Pound",
        sign: "",
    },
    {
        id: "GEL",
        name: "Georgian Lari",
        sign: "",
    },
    {
        id: "GBP",
        name: "Pound Sterling",
        sign: "£",
    },
    {
        id: "FOK",
        name: "Faroese Króna",
        sign: "",
    },
    {
        id: "FKP",
        name: "Falkland Islands Pound",
        sign: "",
    },
    {
        id: "FJD",
        name: "Fijian Dollar",
        sign: "",
    },
    {
        id: "EUR",
        name: "Euro",
        sign: "€",
    },
    {
        id: "ETB",
        name: "Ethiopian Birr",
        sign: "",
    },
    {
        id: "ERN",
        name: "Eritrean Nakfa",
        sign: "",
    },
    {
        id: "EGP",
        name: "Egyptian Pound",
        sign: "",
    },
    {
        id: "DZD",
        name: "Algerian Dinar",
        sign: "",
    },
    {
        id: "DOP",
        name: "Dominican Peso",
        sign: "",
    },
    {
        id: "DKK",
        name: "Danish Krone",
        sign: "",
    },
    {
        id: "DJF",
        name: "Djiboutian Franc",
        sign: "",
    },
    {
        id: "CZK",
        name: "Czech Koruna",
        sign: "",
    },
    {
        id: "CVE",
        name: "Cabo Verdean Escudo",
        sign: "",
    },
    {
        id: "CUP",
        name: "Cuban Peso",
        sign: "",
    },
    {
        id: "CRC",
        name: "Costa Rican Colon",
        sign: "",
    },
    {
        id: "COP",
        name: "Colombian Peso",
        sign: "",
    },
    {
        id: "CNY",
        name: "Chinese Yuan",
        sign: "¥",
    },
    {
        id: "CLP",
        name: "Chilean Peso",
        sign: "",
    },
    {
        id: "CHF",
        name: "Swiss Franc",
        sign: "",
    },
    {
        id: "CDF",
        name: "Congolese Franc",
        sign: "",
    },
    {
        id: "CAD",
        name: "Canadian Dollar",
        sign: "",
    },
    {
        id: "BZD",
        name: "Belize Dollar",
        sign: "",
    },
    {
        id: "BYN",
        name: "Belarusian Ruble",
        sign: "",
    },
    {
        id: "BWP",
        name: "Botswana Pula",
        sign: "",
    },
    {
        id: "BTN",
        name: "Bhutanese Ngultrum",
        sign: "",
    },
    {
        id: "BSD",
        name: "Bahamian Dollar",
        sign: "",
    },
    {
        id: "BRL",
        name: "Brazilian Real",
        sign: "",
    },
    {
        id: "BOB",
        name: "Bolivian Boliviano",
        sign: "",
    },
    {
        id: "BND",
        name: "Brunei Dollar",
        sign: "",
    },
    {
        id: "BMD",
        name: "Bermudian Dollar",
        sign: "",
    },
    {
        id: "BIF",
        name: "Burundian Franc",
        sign: "",
    },
    {
        id: "BHD",
        name: "Bahraini Dinar",
        sign: "",
    },
    {
        id: "BGN",
        name: "Bulgarian Lev",
        sign: "",
    },
    {
        id: "BDT",
        name: "Bangladeshi Taka",
        sign: "",
    },
    {
        id: "BBD",
        name: "Barbadian Dollar",
        sign: "",
    },
    {
        id: "BAM",
        name: "Bosnia and Herzegovina Convertible Mark",
        sign: "",
    },
    {
        id: "AZN",
        name: "Azerbaijani Manat",
        sign: "",
    },
    {
        id: "AWG",
        name: "Aruban Florin",
        sign: "",
    },
    {
        id: "AUD",
        name: "Australian Dollar",
        sign: "",
    },
    {
        id: "ARS",
        name: "Argentine Peso",
        sign: "",
    },
    {
        id: "AOA",
        name: "Angolan Kwanza",
        sign: "",
    },
    {
        id: "ANG",
        name: "Netherlands Antillean Guilder",
        sign: "",
    },
    {
        id: "AMD",
        name: "Armenian Dram",
        sign: "",
    },
    {
        id: "ALL",
        name: "Albanian Lek",
        sign: "",
    },
    {
        id: "AFN",
        name: "Afghan Afghani",
        sign: "",
    },
    {
        id: "AED",
        name: "United Arab Emirates Dirham",
        sign: "",
    },
    {
        id: "USD",
        name: "United States Dollar",
        sign: "$",
    },
];

export default currencies;