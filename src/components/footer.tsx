import React from "react";

type Props = {
  copyrightText: string;
  copyrightLink: string;
  linkLabel: string;
};

const Footer = ({ copyrightText, copyrightLink, linkLabel }: Props) => {
  return (
    <p className="mt-20 text-center" data-testid="footer">
      {copyrightText}
      <a
        target="_blank"
        href={copyrightLink}
        className="text-blue-500 hover:underline"
      >
        &nbsp;{linkLabel}.
      </a>
    </p>
  );
};

export default Footer;
