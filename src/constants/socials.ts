import { RxLinkedinLogo, RxGithubLogo, RxDiscordLogo } from 'react-icons/rx';

export const socials = [
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/jhonangelob/',
    icon: RxLinkedinLogo,
    show: {
      header: true,
      footer: true,
    },
  },
  {
    name: 'Github',
    link: 'https://github.com/jhonangelob',
    icon: RxGithubLogo,
    show: {
      header: true,
      footer: true,
    },
  },
  {
    name: 'Discord',
    link: 'https://discordapp.com/users/696241309081534484',
    icon: RxDiscordLogo,
    show: {
      header: false,
      footer: true,
    },
  },
];
