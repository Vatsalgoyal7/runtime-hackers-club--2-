import { Terminal, Code, Cpu, Shield, Globe, Users, Award, Calendar, Mail, Github, Twitter, Linkedin, ExternalLink, ChevronRight, Menu, X, Rocket, Zap, Target } from 'lucide-react';

export const CLUB_STATS = [
  { label: 'Active Members', value: 250, icon: Users },
  { label: 'Projects Completed', value: 45, icon: Code },
  { label: 'Hackathons Won', value: 12, icon: Award },
  { label: 'Events Hosted', value: 30, icon: Calendar },
];

export const PROJECTS = [
  {
    id: 1,
    title: 'CyberSentinel',
    description: 'An AI-powered network intrusion detection system with real-time visualization.',
    tags: ['Python', 'TensorFlow', 'React'],
    image: 'https://picsum.photos/seed/cyber/800/600',
    link: '#',
  },
  {
    id: 2,
    title: 'Runtime OS',
    description: 'A lightweight, security-focused microkernel built from scratch in Rust.',
    tags: ['Rust', 'Assembly', 'Low-level'],
    image: 'https://picsum.photos/seed/os/800/600',
    link: '#',
  },
  {
    id: 3,
    title: 'Decentralized Identity',
    description: 'Blockchain-based identity management system for secure digital interactions.',
    tags: ['Solidity', 'Web3', 'Node.js'],
    image: 'https://picsum.photos/seed/blockchain/800/600',
    link: '#',
  },
];

export const EVENTS = [
  {
    id: 1,
    title: 'Runtime Hackathon 2026',
    date: '2026-04-15T09:00:00',
    location: 'Main Auditorium / Virtual',
    description: 'Our flagship 48-hour hackathon where the brightest minds compete.',
    type: 'Hackathon',
  },
  {
    id: 2,
    title: 'CTF: Zero Day',
    date: '2026-03-25T18:00:00',
    location: 'Cyber Lab',
    description: 'A capture-the-flag competition focused on web exploitation and reverse engineering.',
    type: 'Competition',
  },
  {
    id: 3,
    title: 'AI & Security Workshop',
    date: '2026-03-30T14:00:00',
    location: 'Seminar Hall',
    description: 'Deep dive into how machine learning is revolutionizing cybersecurity.',
    type: 'Workshop',
  },
];

export const ACHIEVEMENTS = [
  {
    id: 1,
    title: '1st Place - Global Cyber Challenge',
    year: '2025',
    description: 'Won against 500+ teams in an international security competition.',
    icon: Award,
  },
  {
    id: 2,
    title: 'Best Tech Community Award',
    year: '2024',
    description: 'Recognized for outstanding contribution to the student developer ecosystem.',
    icon: Target,
  },
  {
    id: 3,
    title: 'Open Source Contribution Excellence',
    year: '2025',
    description: 'Over 1000+ PRs merged into major open source projects by club members.',
    icon: Zap,
  },
];
