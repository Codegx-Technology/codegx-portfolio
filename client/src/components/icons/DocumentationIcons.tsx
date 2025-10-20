import React from "react";

interface IconProps {
  className?: string;
  size?: number;
}

// Getting Started Icon - Rocket with gradient
export const RocketIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <defs>
      <linearGradient id="rocketGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#c8a951" />
        <stop offset="100%" stopColor="#9f7b42" />
      </linearGradient>
    </defs>
    <path
      d="M12 2C12 2 8 6 8 10C8 13.31 10.24 16 12 16C13.76 16 16 13.31 16 10C16 6 12 2 12 2Z"
      fill="url(#rocketGradient)"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path
      d="M9 14L6 22M15 14L18 22M12 16V22"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <circle cx="12" cy="8" r="1.5" fill="white" />
  </svg>
);

// API Reference Icon - Code brackets
export const CodeIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <defs>
      <linearGradient id="codeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#c8a951" />
        <stop offset="100%" stopColor="#9f7b42" />
      </linearGradient>
    </defs>
    <path
      d="M9 6L3 12L9 18M15 6L21 12L15 18"
      stroke="url(#codeGradient)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14 4L10 20"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

// AI & ML Icon - Brain with neural network
export const BrainIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <defs>
      <linearGradient id="brainGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#c8a951" />
        <stop offset="100%" stopColor="#9f7b42" />
      </linearGradient>
    </defs>
    <circle cx="7" cy="8" r="2" fill="url(#brainGradient)" />
    <circle cx="17" cy="8" r="2" fill="url(#brainGradient)" />
    <circle cx="12" cy="4" r="2" fill="url(#brainGradient)" />
    <path
      d="M7 10C5 12 4 14 4 16C4 19.31 7.13 22 12 22C16.87 22 20 19.31 20 16C20 14 19 12 17 10"
      stroke="url(#brainGradient)"
      strokeWidth="1.5"
      fill="none"
    />
    <line x1="7" y1="8" x2="12" y2="4" stroke="currentColor" strokeWidth="1" />
    <line x1="17" y1="8" x2="12" y2="4" stroke="currentColor" strokeWidth="1" />
    <line x1="7" y1="8" x2="12" y2="12" stroke="currentColor" strokeWidth="1" />
    <line x1="17" y1="8" x2="12" y2="12" stroke="currentColor" strokeWidth="1" />
  </svg>
);

// Integration Icon - Puzzle pieces
export const PuzzleIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <defs>
      <linearGradient id="puzzleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#c8a951" />
        <stop offset="100%" stopColor="#9f7b42" />
      </linearGradient>
    </defs>
    <path
      d="M3 3H11V11H3V3Z"
      stroke="url(#puzzleGradient)"
      strokeWidth="1.5"
      fill="none"
    />
    <path
      d="M13 3H21V11H13V3Z"
      stroke="url(#puzzleGradient)"
      strokeWidth="1.5"
      fill="none"
    />
    <path
      d="M3 13H11V21H3V13Z"
      stroke="url(#puzzleGradient)"
      strokeWidth="1.5"
      fill="none"
    />
    <path
      d="M13 13H21V21H13V13Z"
      stroke="url(#puzzleGradient)"
      strokeWidth="1.5"
      fill="none"
    />
    <circle cx="11" cy="11" r="1.5" fill="url(#puzzleGradient)" />
  </svg>
);

// Security Icon - Shield with checkmark
export const ShieldIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <defs>
      <linearGradient id="shieldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#c8a951" />
        <stop offset="100%" stopColor="#9f7b42" />
      </linearGradient>
    </defs>
    <path
      d="M12 2L4 6V12C4 18 12 22 12 22C12 22 20 18 20 12V6L12 2Z"
      stroke="url(#shieldGradient)"
      strokeWidth="1.5"
      fill="none"
    />
    <path
      d="M9 12L11 14L15 10"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Troubleshooting Icon - Wrench
export const WrenchIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <defs>
      <linearGradient id="wrenchGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#c8a951" />
        <stop offset="100%" stopColor="#9f7b42" />
      </linearGradient>
    </defs>
    <path
      d="M3 6C3 4.89543 3.89543 4 5 4H8L14 10L10 14L4 8V6Z"
      stroke="url(#wrenchGradient)"
      strokeWidth="1.5"
      fill="none"
    />
    <circle cx="16" cy="16" r="3" stroke="url(#wrenchGradient)" strokeWidth="1.5" fill="none" />
    <path
      d="M14 18L20 24"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

// About Icon - Person with heart
export const AboutIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <defs>
      <linearGradient id="aboutGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#c8a951" />
        <stop offset="100%" stopColor="#9f7b42" />
      </linearGradient>
    </defs>
    <circle cx="12" cy="6" r="3" stroke="url(#aboutGradient)" strokeWidth="1.5" fill="none" />
    <path
      d="M4 20C4 16.13 7.58 13 12 13C16.42 13 20 16.13 20 20"
      stroke="url(#aboutGradient)"
      strokeWidth="1.5"
      fill="none"
    />
    <path
      d="M12 10L13.5 13.5L17 14L14 17L14.5 20.5L12 18.5L9.5 20.5L10 17L7 14L10.5 13.5L12 10Z"
      fill="url(#aboutGradient)"
    />
  </svg>
);

// Privacy Icon - Lock with eye
export const PrivacyIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <defs>
      <linearGradient id="privacyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#c8a951" />
        <stop offset="100%" stopColor="#9f7b42" />
      </linearGradient>
    </defs>
    <rect
      x="5"
      y="10"
      width="14"
      height="10"
      rx="2"
      stroke="url(#privacyGradient)"
      strokeWidth="1.5"
      fill="none"
    />
    <path
      d="M8 10V7C8 4.24 9.79 2 12 2C14.21 2 16 4.24 16 7V10"
      stroke="url(#privacyGradient)"
      strokeWidth="1.5"
      fill="none"
    />
    <circle cx="12" cy="15" r="1.5" fill="url(#privacyGradient)" />
  </svg>
);

// Terms Icon - Document with checkmark
export const TermsIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <defs>
      <linearGradient id="termsGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#c8a951" />
        <stop offset="100%" stopColor="#9f7b42" />
      </linearGradient>
    </defs>
    <path
      d="M4 2H16L20 6V22H4V2Z"
      stroke="url(#termsGradient)"
      strokeWidth="1.5"
      fill="none"
    />
    <path
      d="M16 2V6H20"
      stroke="url(#termsGradient)"
      strokeWidth="1.5"
      fill="none"
    />
    <path
      d="M8 10H16M8 14H16M8 18H12"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
    />
    <path
      d="M18 18L19 19L21 17"
      stroke="url(#termsGradient)"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Cookies Icon - Cookie with bite
export const CookieIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <defs>
      <linearGradient id="cookieGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#c8a951" />
        <stop offset="100%" stopColor="#9f7b42" />
      </linearGradient>
    </defs>
    <circle cx="12" cy="12" r="9" stroke="url(#cookieGradient)" strokeWidth="1.5" fill="none" />
    <path
      d="M19 15C20.66 15 22 16.34 22 18C22 19.66 20.66 21 19 21"
      stroke="url(#cookieGradient)"
      strokeWidth="1.5"
      fill="none"
    />
    <circle cx="8" cy="9" r="1.5" fill="url(#cookieGradient)" />
    <circle cx="14" cy="8" r="1.5" fill="url(#cookieGradient)" />
    <circle cx="11" cy="14" r="1.5" fill="url(#cookieGradient)" />
  </svg>
);

