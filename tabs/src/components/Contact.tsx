import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";

const links = [
  {
    href: "https://facebook.com/yourprofile",
    label: "Facebook",
    icon: (
      <FaFacebookF className="text-blue-600 hover:text-blue-800 transition" />
    ),
  },
  {
    href: "https://twitter.com/yourprofile",
    label: "Twitter",
    icon: <FaTwitter className="text-sky-500 hover:text-sky-700 transition" />,
  },
  {
    href: "https://linkedin.com/in/yourprofile",
    label: "LinkedIn",
    icon: (
      <FaLinkedinIn className="text-blue-700 hover:text-blue-900 transition" />
    ),
  },
  {
    href: "https://github.com/yourprofile",
    label: "GitHub",
    icon: <FaGithub className="text-gray-800 hover:text-black transition" />,
  },
];

const Contact = () => {
  return (
    <section className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="font-extrabold text-3xl text-gray-900 mb-6">Contact Me</h2>

      <div className="flex items-center">
        {links.map((link) => (
          <a
            href={link.href}
            key={link.label}
            rel="noopener noreferrer"
            target="_blank"
            className="flex items-center text-gray-900 hover:text-gray-600 space-x-2 mr-[2rem]"
          >
            {link.icon}
            <span className="text-lg">{link.label}</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;
