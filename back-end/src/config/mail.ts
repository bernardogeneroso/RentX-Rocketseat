interface IMailConfig {
  driver: "ethereal" | "gmail";

  defaults: {
    from: {
      email: string;
      name: string;
    };
  };
}

export default {
  driver: "gmail",

  defaults: {
    from: {
      email: "fachooapp@gmail.com",
      name: "RenteX Support",
    },
  },
} as IMailConfig;
