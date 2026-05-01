export interface Meme {
  id: string;
  title: string;
  imageSrc: string;
  imageAlt: string;
  creditUrl?: string;
  creditText?: string;
  hasClickCounter?: boolean;
  clickMessages?: string[];
  description?: string;
}

export const memes: Meme[] = [
  {
    id: "gandalf-break",
    title: "Gandalf Takes a Break",
    imageSrc: "/ian-mckellen-gandalf-takes-a-break-on-his-macbook-pro-while-v0-fi893h7fuzf81.jpg",
    imageAlt: "Ian McKellen as Gandalf taking a break with his MacBook on set",
    creditUrl: "https://www.reddit.com/r/Moviesinthemaking/comments/sl45so/ian_mckellen_gandalf_takes_a_break_on_his_macbook/",
    creditText: "r/Moviesinthemaking",
    hasClickCounter: true,
    clickMessages: [
      '',
      'You shall not click!',
      'You shall not click... again!',
      'Seriously, stop clicking!',
      'This is getting ridiculous...',
      'Fine, you win. Click away.',
    ],
    description: "Even wizards need breaks between debugging sessions."
  }
];
