import { Linkedin, Github, Mail, Instagram, Target } from 'lucide-react';
import { DiscordIcon, HackTheBoxIcon, FlagYardIcon } from '@/components/ui/CustomIcons';

export const siteConfig = {
    // ============================================
    // Profile Configuration (Pulled from hidden .env)
    // ============================================
    name: import.meta.env.VITE_NAME || "Nader Hany",
    avatarUrl: import.meta.env.BASE_URL + "profilepic.jpg",
    bio: import.meta.env.VITE_BIO || "Junior Penetration Tester",

    // ============================================
    // Badges / Titles
    // ============================================
    badges: [
        import.meta.env.VITE_BADGE_1,
        import.meta.env.VITE_BADGE_2
    ].filter(Boolean),

    // ============================================
    // Social Links
    // ============================================
    socials: [
        { icon: Linkedin, href: "https://www.linkedin.com/in/nader-hani-0x0/", label: 'LinkedIn' },
        { icon: Github, href: "https://github.com/Naderuni-CS", label: 'GitHub' }, 
        { icon: Mail, href: "mailto:Naderunics@gmail.com", label: 'Email' },
        { icon: Instagram, href: "https://www.instagram.com/nader_hanii/", label: 'Instagram' },
        { icon: DiscordIcon, href: "https://discordapp.com/users/anon_sad", label: 'Discord: anon_sad' },
        { icon: Target, href: "https://tryhackme.com/p/Nader0x0", label: 'TryHackMe' },
    ].filter(link => link.href && link.href !== ""),
};
