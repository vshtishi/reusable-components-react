import React from 'react';
import {
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaHome,
  FaUserFriends,
  FaInstagram,
  FaYoutube,
  FaYoutubeSquare,
  FaAdn,
} from 'react-icons/fa';
export const links = [
  {
    id: 1,
    url: '/',
    text: 'home',
    icon: <FaHome />,
  },
  {
    id: 2,
    url: '/contact',
    text: 'contact',
    icon: <FaUserFriends />,
  },
  {
    id: 3,
    url: '/videos',
    text: 'videos',
    icon: <FaYoutube />,
  },
  {
    id: 4,
    url: '/categories',
    text: 'categories',
    icon: <FaYoutubeSquare />,
  },
  {
    id: 5,
    url: '/about',
    text: 'about',
    icon: <FaAdn />,
  },
];

export const social = [
  {
    id: 1,
    url: 'https://www.facebook.com',
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: 'https://www.twitter.com',
    icon: <FaTwitter />,
  },
  {
    id: 3,
    url: 'https://www.linkedin.com',
    icon: <FaLinkedin />,
  },
  {
    id: 4,
    url: 'https://www.instagram.com',
    icon: <FaInstagram/>,
  },

];