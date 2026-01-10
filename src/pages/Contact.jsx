import React from 'react';
import { FiMail, FiPhone, FiMessageCircle } from "react-icons/fi"

const Contact = () => {
    const email = "hasnath.karim@gmail.com"
  const phone = "07593207299"
  const whatsappIntl = "447593207299"
  const contacts = [
    {
      id: "email",
      href: `mailto:${email}`,
      icon: <FiMail className="text-xl" />,
      title: "Email",
      subtitle: email,
    },
    {
      id: "phone",
      href: `tel:${phone}`,
      icon: <FiPhone className="text-xl" />,
      title: "Phone",
      subtitle: phone,
    },
    {
      id: "whatsapp",
      href: `https://wa.me/${whatsappIntl}`,
      icon: <FiMessageCircle className="text-xl" />,
      title: "WhatsApp",
      subtitle: "Chat on WhatsApp",
      external: true,
    },
  ];
    return (
          <section className="space-y-4">
      <h2 className="text-2xl font-bold">Contact</h2>

      <div className="grid gap-4 md:grid-cols-3">
        {contacts.map((c) => (
          <a
            key={c.id}
            href={c.href}
            {...(c.external ? { target: "_blank", rel: "noreferrer" } : {})}
            className="card bg-base-200 hover:bg-base-300 transition"
          >
            <div className="card-body flex-row items-center gap-3">
              {c.icon}
              <div>
                <b>{c.title}</b>
                <div className="opacity-80">{c.subtitle}</div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
    );
};

export default Contact;