import { container } from "tsyringe";
import mailConfig from "@config/mail";

import IMailProvider from "./models/IMailProvider";

import EtherealMailProvider from "./implementations/EtherealMailProvider";
import GmailMailProvider from "./implementations/GmailMailProvider";

const providers = {
  ethereal: EtherealMailProvider,
  gmail: GmailMailProvider,
};

container.registerSingleton<IMailProvider>(
  "MailProvider",
  providers[mailConfig.driver]
);
