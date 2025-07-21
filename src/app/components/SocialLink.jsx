import Link from "next/link";

import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
  FacebookIcon,
  MeetupIcon,
  YouTubeIcon,
  WhatsappIcon,
} from "./SocialIcons";

const PLATFORMS = {
  twitter: {
    name: "Twitter",
    baseUrl: "https://twitter.com/",
    icon: TwitterIcon,
  },
  facebook: {
    name: "Facebook",
    baseUrl: "https://facebook.com/",
    icon: FacebookIcon,
  },
  linkedin: {
    name: "LinkedIn",
    baseUrl: "https://linkedin.com/company/",
    icon: LinkedInIcon,
  },
  instagram: {
    name: "Instagram",
    baseUrl: "https://instagram.com/",
    icon: InstagramIcon,
  },
  github: {
    name: "GitHub",
    baseUrl: "https://github.com/",
    icon: GitHubIcon,
  },
  meetup: {
    name: "Meetup",
    baseUrl: "https://meetup.com/",
    icon: MeetupIcon,
  },
  youtube: {
    name: "YouTube",
    baseUrl: "https://youtube.com/@",
    icon: YouTubeIcon,
  },
  whatsapp: {
    name: "WhatsApp",
    baseUrl: "https://chat.whatsapp.com/",
    icon: WhatsappIcon,
  },
};

export function SocialLink({ social, caption = false, ...props }) {
  const [platform, value] = Object.entries(social)[0];

  const { baseUrl, icon: Icon } = PLATFORMS[platform];
  const captionText = buildCaption(caption, platform);
  const url = typeof value === "string" ? `${baseUrl}${value}` : value.url;

  return (
    <Link
      key={platform}
      className="group flex flex-row"
      href={url}
      aria-label={captionText}
      target="_blank"
      {...props}
    >
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600" />

      {caption && (
        <div className="ml-4 text-sm font-semibold text-zinc-500 group-hover:text-zinc-600">
          {captionText}
        </div>
      )}
    </Link>
  );
}

function buildCaption(caption, platform) {
  if (typeof caption === "string") return caption;

  if (platform === "whatsapp") return `Join WhatsApp community`;

  return `Follow on ${PLATFORMS[platform].name}`;
}
