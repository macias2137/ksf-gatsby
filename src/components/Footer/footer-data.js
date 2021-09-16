import { faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export const FooterData = {
  footerLeftPane: [
    { text: "Krzyszti Software Playhouse" },
    { text: "Krzysztof Szyda" },
    { text: "600 367 277 / krzysztof@ksf.pl" },
    //more lines of text can be added, the footer will automatically expand
  ],
  footerRightPane: [
    { icon: faFacebook, link: "https://www.facebook.com/krzysztof.szyda" },
    {
      icon: faLinkedin,
      link: "https://www.linkedin.com/in/krzysztof-szyda-974b24a4/",
    },
  ],
};
