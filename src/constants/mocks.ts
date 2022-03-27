const profileDetails = {
  id: 1,
  name: "Ram Sankar"
}

const categories = [
  {
    id: "health-insurance",
    name: "Health Insurance",
    iconType: 'FontAwesome5',
    iconName: 'hand-holding-medical',
    bg: 'lightOrange',
    color: 'orange',
    navigateTo: 'InsuranceHome'
  },
  {
    id: "vehicle-insurance",
    name: "Vehicle Insurance",
    iconType: 'Ionicons',
    iconName: 'md-car-sport',
    bg: 'lightGreen',
    color: 'green',
    navigateTo: 'Insurance'
  },
  {
    id: "electricity",
    name: "Electricity Bill",
    iconType: 'MaterialIcons',
    iconName: 'electrical-services',
    bg: 'lightBlue',
    color: 'blue',
    navigateTo: 'Insurance'
  },
  {
    id: "gas-cylinder",
    name: "Gas Cylinder",
    iconType: 'MaterialCommunityIcons',
    iconName: 'gas-cylinder',
    bg: 'lightRed',
    color: 'red',
    navigateTo: 'Insurance'
  },
  {
    id: "dth",
    name: "DTH Recharge",
    iconType: 'Ionicons',
    iconName: 'ios-tv-outline',
    bg: 'lightGreen',
    color: 'green',
    navigateTo: 'Insurance'
  },
  {
    id: "broadband",
    name: "Broadband",
    iconType: 'FontAwesome5',
    iconName: 'inbox',
    bg: 'lightBlue',
    color: 'blue',
    navigateTo: 'Insurance'
  },
];

const family = [
  {
    id: '0',
    name: 'Ram Sankar',
    relationship: 'You',
    amount: '6,500',
  },
  {
    id: '1',
    name: 'Shyam Sundar',
    relationship: 'Brother',
    amount: '8,300',
  },
  {
    id: '2',
    name: 'Ravi Sankar',
    relationship: 'Father',
    amount: '23,520',
  },
  {
    id: '3',
    name: 'Amirtha Gowri',
    relationship: 'Mother',
    amount: 0,
  },
]

const dues = [
  {
    id: '0',
    type: 'electricity',
    name: 'Electricity Bill',
    amount: '1,320',
    daysLeft: 5,
  },
  {
    id: '1',
    type: 'dth',
    name: 'DTH bill',
    amount: '270',
    daysLeft: 7,
  },
  {
    id: '2',
    type: 'broadband',
    name: 'Broadband bill',
    amount: '899',
    daysLeft: 14,
  },
  {
    id: '3',
    type: 'medInsurance',
    name: 'Medical Insurance',
    amount: '7,500',
    daysLeft: 35,
  },
  {
    id: '4',
    type: 'bikeInsurance',
    name: 'Bike Insurance',
    amount: '1,400',
    daysLeft: 82,
  },
  {
    id: '5',
    type: 'carInsurance',
    name: 'Car Insurance',
    amount: '4,700',
    daysLeft: 153,
  },
]

const insuranceDetails = [
  {
    id: '1',
    name: 'Ravi Sankar',
    date: '10/02/2022',
    amount: '2,550',
    paidBy: 'Shyam Sundar'
  },
  {
    id: '2',
    name: 'Shyam Sundar',
    date: '07/01/2022',
    amount: '1,700',
    paidBy: 'Shyam Sundar'
  },
  {
    id: '3',
    name: 'Ram Sankar',
    date: '23/09/2021',
    amount: '1,500',
    paidBy: 'Ram Sankar'
  },
  {
    id: '4',
    name: 'Amirtha Gowri',
    date: '29/06/2021',
    amount: '2,550',
    paidBy: 'Shyam Sundar'
  }
]

const homeInvestmentMenu = [
  {
    name: "FD",
    icon: "money",
    family: "FontAwesome"
  },
  {
    name: "Mutual Funds",
    icon: "money-bill-wave",
    family: "FontAwesome5"
  },
  {
    name: "Crypto",
    icon: "money-bill-alt",
    family: "FontAwesome5"
  },
  {
    name: "NPS",
    icon: "money-check",
    family: "FontAwesome5"
  },
  {
    name: "EPF",
    icon: "monero",
    family: "FontAwesome5"
  },
  {
    name: "Stocks",
    icon: "attach-money",
    family: "MaterialIcons"
  }
]

const payMenu = [
  {
    name: "Family Transfer",
    icon: "family-restroom",
    family: "MaterialIcons"
  },
  {
    name: "Recharge",
    icon: "payment",
    family: "MaterialIcons"
  },
  {
    name: "EMI",
    icon: "payments",
    family: "MaterialIcons"
  },
  {
    name: "Bill Pay",
    icon: "money-check",
    family: "FontAwesome5"
  },
  {
    name: "Education",
    icon: "school",
    family: "Ionicons"
  },
  {
    name: "Insurance",
    icon: "ios-document-text-sharp",
    family: "Ionicons"
  },
  {
    name: "Medical",
    icon: "stethoscope",
    family: "MaterialCommunityIcons"
  },
  {
    name: "Credit Card Bills",
    icon: "credit-card",
    family: "FontAwesome"
  },
  {
    name: "Stock",
    icon: "area-graph",
    family: "Entypo"
  },
  {
    name: "General",
    icon: "add-circle",
    family: "Ionicons"
  }
]


export {
  profileDetails,
  categories,
  family,
  dues,
  insuranceDetails,
  homeInvestmentMenu,
  payMenu
}