import React from 'react'

  //mobile navbar Links
  const navLinks = [
    { title: "Home", path: "/" },
    {
      title: "About",
      children: [
        { label: "About Us", path: "/About" },
        { label: "Our Work", path: "/" },
        { label: "Our Team", path: "/" },
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
    { title: "Contacts", path: "/" },
  ];
export default navLinks;

