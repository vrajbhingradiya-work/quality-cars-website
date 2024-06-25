const currentYear = new Date().getFullYear();
export const defaultFilterQueries = {
  regYear: {
    title: "All",
    value: {
      rangeStart: currentYear - 100,
      rangeEnd: currentYear,
    },
  },
  kmsDriven: {
    title: "",
    value: {
      rangeStart: 0,
      rangeEnd: 2000000,
    },
  },
  price: {
    title: "",
    value: {
      rangeStart: 0,
      rangeEnd: 1500000000,
    },
  },

  carType: {
    title: "",
    img: "",
    value: "",
  },
  brand: {
    title: "",
    img: "",
    value: "",
  },
  isCarNew: "",
};
