import React from 'react'

  //mobile navbar Links
  const navLinks = [
    { title: "Home", path: "/" },
    {
      title: "About",
      children: [
        { label: "About Us", path: "/About" },
        { label: "Our Work", path: "/Our_Work" },
        { label: "Our Team", path: "/Our_Team" },
        { label: "Work Details", path: "/" },
        { label: "Faq", path: "/" },
      ],
    },
    {
      title: "Services",
      children: [
        { label: "View All Services", path: "/" },
        { label: "Paint Production", path: "/" },
        { label: "Wall Painting", path: "/" },
        { label: "Others", path: "/" },
      ],
    },
    { title: "Contacts", path: "/Contact-Us" },
  ];
export default navLinks;

