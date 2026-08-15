import React from 'react';

export const techIcons: Record<string, React.ReactNode> = {
  // =====================
  // Linguagens
  // =====================
  csharp: (
    <svg viewBox="0 0 32 32" width="28" height="28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 2L28.1244 8.99999V23L16 30L3.87564 23V8.99999L16 2Z" fill="#9B4993" />
      <path d="M16 4.5L25.9615 10.25V21.75L16 27.5L6.03848 21.75V10.25L16 4.5Z" fill="#68217A" />
      <path d="M15.2 11.5C13.2 11.5 11.8 12.8 11.8 15.2C11.8 17.6 13.2 18.9 15.2 18.9C16.3 18.9 17.2 18.5 17.8 17.8L19.1 19C18.2 20 16.8 20.6 15.1 20.6C12 20.6 9.8 18.5 9.8 15.2C9.8 11.9 12 9.8 15.1 9.8C16.8 9.8 18.1 10.4 19 11.4L17.7 12.6C17.1 11.9 16.2 11.5 15.2 11.5Z" fill="#FFFFFF" />
      <path d="M21.8 12.5H22.7V11H23.6V12.5H24.5V13.4H23.6V14.6H24.5V15.5H23.6V17H22.7V15.5H21.8V17H20.9V15.5H20V14.6H20.9V13.4H20V12.5H20.9V11H21.8V12.5ZM21.8 13.4V14.6H22.7V13.4H21.8Z" fill="#FFFFFF" />
    </svg>
  ),

  typescript: (
    <svg viewBox="0 0 32 32" width="28" height="28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="32" height="32" rx="6" fill="#3178C6" />
      <path d="M13.8 13.2H6.6V11H16V13.2H13.8V23H11.4V13.2H13.8Z" fill="#FFFFFF" />
      <path d="M22.5 14.8C20.6 14.8 19.5 15.8 19.5 17.2C19.5 19.8 24.3 19.3 24.3 21.4C24.3 22.2 23.5 22.8 22.3 22.8C20.9 22.8 19.6 22.1 18.9 21.2L17.2 22.7C18.3 24.1 20.2 25 22.3 25C25.1 25 26.8 23.5 26.8 21.2C26.8 18.5 22 19 22 17C22 16.4 22.6 15.9 23.5 15.9C24.6 15.9 25.5 16.5 26.1 17.1L27.6 15.5C26.6 14.3 25 13.7 23.4 13.7C23.1 13.7 22.8 14.1 22.5 14.8Z" fill="#FFFFFF" />
    </svg>
  ),

  javascript: (
    <svg viewBox="0 0 32 32" width="28" height="28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="32" height="32" rx="6" fill="#F7DF1E" />
      <path d="M14.5 13.5V20.2C14.5 22.4 13.2 23.5 11.2 23.5C9.4 23.5 8.2 22.5 7.6 21.2L9.7 19.9C10.1 20.7 10.6 21.2 11.3 21.2C12 21.2 12.3 20.7 12.3 19.8V13.5H14.5Z" fill="#000000" />
      <path d="M22.5 13.3C24.6 13.3 26 14.4 26.6 15.8L24.5 17C24.1 16.1 23.5 15.6 22.5 15.6C21.6 15.6 21 16.1 21 16.8C21 17.7 21.7 18.1 23.2 18.7C25.2 19.5 26.8 20.5 26.8 22.6C26.8 24.8 25 26.2 22.5 26.2C20.2 26.2 18.6 25 17.9 23.4L20 22.2C20.5 23.3 21.4 24 22.5 24C23.5 24 24.3 23.4 24.3 22.5C24.3 21.6 23.5 21.2 22.1 20.6C20.2 19.8 18.7 18.8 18.7 16.8C18.7 14.8 20.3 13.3 22.5 13.3Z" fill="#000000" />
    </svg>
  ),

  html5: (
    <svg viewBox="0 0 32 32" width="28" height="28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 3L6.5 27.5L16 30L25.5 27.5L28 3H4Z" fill="#E34F26" />
      <path d="M16 28L23.7 25.8L25.8 5.2H16V28Z" fill="#EF652A" />
      <path d="M16 11.2H11.5L11.8 14.8H16V11.2ZM16 18.5H16.1L13.8 17.9L13.6 15.7H11.9L12.3 19.9L16 20.9V18.5Z" fill="#EBEBEB" />
      <path d="M16 11.2V14.8H20.2L19.8 19.9L16 20.9V23.4L22.2 21.7L22.8 14.8H16V11.2ZM16 6H7.9L8.4 11.2H16V6ZM16 6V8.6H23.5L23.7 6H16Z" fill="#FFFFFF" />
    </svg>
  ),

  css: (
    <svg viewBox="0 0 32 32" width="28" height="28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 3L6.5 27.5L16 30L25.5 27.5L28 3H4Z" fill="#1572B6" />
      <path d="M16 28L23.7 25.8L25.8 5.2H16V28Z" fill="#33A9DC" />
      <path d="M16 11.2H11.5L11.8 14.8H16V11.2ZM16 6H7.9L8.4 11.2H16V6ZM16 20.9L12.3 19.9L11.9 15.7H13.6L13.8 17.9L16 18.5V20.9Z" fill="#EBEBEB" />
      <path d="M20.5 11.2L20.3 14.8H16V18.5H18.2L18.4 16.5H20.2L19.8 21.7L16 22.8V25.3L22.2 23.6L22.8 14.8H20.7L20.8 11.2H16V8.6H23.1L23.3 6H16V8.6H20.7L20.5 11.2Z" fill="#FFFFFF" />
    </svg>
  ),

  // =====================
  // Frameworks & Libs
  // =====================
  react: (
    <svg viewBox="-12 -11 24 22" width="28" height="28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="0" cy="0" r="2.2" fill="#00D8FF" />
      <g stroke="#00D8FF" strokeWidth="1.15" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  ),

  nextdotjs: (
    <svg viewBox="0 0 32 32" width="28" height="28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="16" fill="#000000" />
      <path d="M22.5 24.5L12.3 11.3H10V20.7H11.8V13.8L20.7 25.5C21.3 25.2 21.9 24.9 22.5 24.5ZM20.2 11.3H22V19.2H20.2V11.3Z" fill="#FFFFFF" />
    </svg>
  ),

  blazor: (
    <svg viewBox="0 0 32 32" width="28" height="28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="32" height="32" rx="6" fill="#5C2D91" />
      <path d="M17.5 7C12.5 7 8 10.5 8 15.5C8 19.2 10.4 22.4 13.9 23.8L12.5 26.5H20.5L18.7 23.5C21.8 22.1 24 19 24 15.5C24 10.5 19.5 7 17.5 7ZM16 11C18.2 11 20 12.8 20 15C20 17.2 18.2 19 16 19C13.8 19 12 17.2 12 15C12 12.8 13.8 11 16 11Z" fill="#FFFFFF" />
    </svg>
  ),

  dotnet: (
    <svg viewBox="0 0 32 32" width="28" height="28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="32" height="32" rx="6" fill="#512BD4" />
      <circle cx="9" cy="21" r="2" fill="#FFFFFF" />
      <path d="M14 11H17.5C19.5 11 21 12.2 21 14.5C21 16.8 19.5 18 17.5 18H15.8V23H14V11ZM15.8 16.2H17.2C18.4 16.2 19.2 15.6 19.2 14.5C19.2 13.4 18.4 12.8 17.2 12.8H15.8V16.2Z" fill="#FFFFFF" />
      <path d="M23 11H24.8V23H23V11Z" fill="#FFFFFF" />
    </svg>
  ),

  abp: (
    <svg viewBox="0 0 32 32" width="28" height="28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="16" fill="#0078D7" />
      <path d="M16 6L7 11V21L16 26L25 21V11L16 6ZM16 9.5L22.5 13.1L16 16.7L9.5 13.1L16 9.5ZM9 15L15 18.3V23.7L9 20.3V15ZM17 23.7V18.3L23 15V20.3L17 23.7Z" fill="#FFFFFF" />
    </svg>
  ),

  mudblazor: (
    <svg viewBox="0 0 32 32" width="28" height="28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="32" height="32" rx="6" fill="#594AE2" />
      <path d="M16 6L25 10.5V21.5L16 26L7 21.5V10.5L16 6Z" stroke="#FFFFFF" strokeWidth="2" fill="none" />
      <path d="M11 13L16 16L21 13" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
      <path d="M16 16V22" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),

  tailwindcss: (
    <svg viewBox="0 0 32 32" width="28" height="28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.5 8C6 8 3.8 9.8 3 13.5C4.5 11.5 6.2 10.8 8.2 11.2C9.4 11.5 10.2 12.3 11.1 13.2C12.6 14.7 14.3 16.5 18.5 16.5C22 16.5 24.2 14.8 25 11C23.5 13 21.8 13.8 19.8 13.3C18.6 13 17.8 12.2 16.9 11.3C15.4 9.8 13.7 8 9.5 8ZM3 16.5C1.5 16.5.8 17.5.5 19.5C1.8 18 3 17.5 4.5 17.8C5.4 18 6 18.6 6.7 19.3C7.8 20.4 9.1 21.8 12.2 21.8C15.2 21.8 17 20.5 17.8 17.8C16.5 19.2 15.2 19.8 13.8 19.5C12.8 19.3 12.2 18.7 11.6 18C10.5 16.9 9.3 16.5 3 16.5Z" fill="#06B6D4" />
    </svg>
  ),

  bootstrap: (
    <svg viewBox="0 0 32 32" width="28" height="28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="32" height="32" rx="6" fill="#7952B3" />
      <path d="M12 8H17.5C19.8 8 21.5 9.2 21.5 11.2C21.5 12.5 20.7 13.5 19.5 14C21 14.5 22 15.8 22 17.5C22 19.8 20.1 21.5 17.5 21.5H12V8ZM14.8 10.5V13.5H17.2C18.2 13.5 18.8 12.8 18.8 12C18.8 11.2 18.2 10.5 17.2 10.5H14.8ZM14.8 15.8V19H17.5C18.6 19 19.2 18.2 19.2 17.4C19.2 16.6 18.6 15.8 17.5 15.8H14.8Z" fill="#FFFFFF" />
    </svg>
  ),

  // =====================
  // Arquitetura
  // =====================
  architecture: (
    <svg viewBox="0 0 32 32" width="28" height="28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 4L4 10L16 16L28 10L16 4Z" fill="#0284C7" />
      <path d="M4 16L16 22L28 16" stroke="#0284C7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 22L16 28L28 22" stroke="#0284C7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),

  modular: (
    <svg viewBox="0 0 32 32" width="28" height="28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="5" width="9" height="9" rx="2.5" fill="#8B5CF6" />
      <rect x="18" y="5" width="9" height="9" rx="2.5" fill="#8B5CF6" />
      <rect x="5" y="18" width="9" height="9" rx="2.5" fill="#8B5CF6" />
      <rect x="18" y="18" width="9" height="9" rx="2.5" fill="#C4B5FD" />
    </svg>
  ),

  mvc: (
    <svg viewBox="0 0 32 32" width="28" height="28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="5" width="24" height="22" rx="4" stroke="#10B981" strokeWidth="2.5" fill="none" />
      <line x1="4" y1="12" x2="28" y2="12" stroke="#10B981" strokeWidth="2" />
      <line x1="13" y1="12" x2="13" y2="27" stroke="#10B981" strokeWidth="2" />
    </svg>
  ),

  seo: (
    <svg viewBox="0 0 32 32" width="28" height="28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="13" stroke="#F59E0B" strokeWidth="2.2" fill="none" />
      <path d="M9 17L13 13L17 17L23 11" stroke="#F59E0B" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <polyline points="19 11 23 11 23 15" stroke="#F59E0B" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),

  // =====================
  // Ferramentas & DevOps
  // =====================
  figma: (
    <svg viewBox="0 0 32 32" width="28" height="28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11 5C8.8 5 7 6.8 7 9C7 11.2 8.8 13 11 13H16V5H11Z" fill="#F24E1E" />
      <path d="M16 5H21C23.2 5 25 6.8 25 9C25 11.2 23.2 13 21 13C18.8 13 16 13 16 13V5Z" fill="#FF7262" />
      <path d="M7 16C7 13.8 8.8 12 11 12H16V20H11C8.8 20 7 18.2 7 16Z" fill="#A259FF" />
      <path d="M16 16C16 13.8 17.8 12 20 12C22.2 12 24 13.8 24 16C24 18.2 22.2 20 20 20C17.8 20 16 20 16 20V16Z" fill="#1ABCFE" />
      <path d="M7 23C7 20.8 8.8 19 11 19H16V23C16 25.2 14.2 27 12 27C9.8 27 7 25.2 7 23Z" fill="#0ACF83" />
    </svg>
  ),

  azuredevops: (
    <svg viewBox="0 0 32 32" width="28" height="28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M28 8L22 4L11 8L5 13L2 21L7 27L18 29L26 24L30 15L28 8Z" fill="#0078D7" />
      <path d="M7 13L15 6L23 11L18 17L11 19L7 13Z" fill="#50E6FF" />
      <path d="M11 19L18 17L25 21L19 26L11 23V19Z" fill="#1B59A7" />
    </svg>
  ),

  git: (
    <svg viewBox="0 0 32 32" width="28" height="28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M30.4 14.6L17.4 1.6C16.6.8 15.4.8 14.6 1.6L11.7 4.5L15.3 8.1C16.2 7.8 17.3 8 18 8.7C18.7 9.4 19 10.5 18.6 11.4L22.2 15C23.1 14.6 24.2 14.9 24.9 15.6C25.9 16.6 25.9 18.2 24.9 19.2C23.9 20.2 22.3 20.2 21.3 19.2C20.6 18.5 20.3 17.4 20.7 16.5L17.3 13.1V20.7C17.5 21 17.6 21.4 17.6 21.8C17.6 23.2 16.4 24.4 15 24.4C13.6 24.4 12.4 23.2 12.4 21.8C12.4 20.7 13.1 19.8 14.1 19.4V11.8C13.1 11.4 12.4 10.5 12.4 9.4C12.4 8.9 12.6 8.5 12.8 8.1L9.2 4.5L1.6 12.1C.8 12.9.8 14.1 1.6 14.9L14.6 27.9C15.4 28.7 16.6 28.7 17.4 27.9L30.4 14.9C31.2 14.1 31.2 15.4 30.4 14.6Z" fill="#F05032" />
    </svg>
  ),

  github: (
    <svg viewBox="0 0 32 32" width="28" height="28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M16 2C8.27 2 2 8.27 2 16C2 22.19 6.02 27.44 11.61 29.3C12.31 29.43 12.57 29 12.57 28.63C12.57 28.3 12.55 27.21 12.55 26.04C8.67 26.89 7.85 24.37 7.85 24.37C7.22 22.75 6.3 22.33 6.3 22.33C5.03 21.47 6.4 21.48 6.4 21.48C7.8 21.58 8.54 22.92 8.54 22.92C9.79 25.05 11.82 24.44 12.62 24.08C12.75 23.18 13.11 22.56 13.51 22.21C10.41 21.86 7.15 20.67 7.15 15.34C7.15 13.82 7.69 12.58 8.58 11.61C8.44 11.26 7.96 9.84 8.71 7.92C8.71 7.92 9.88 7.55 12.54 9.35C13.65 9.04 14.83 8.89 16 8.88C17.17 8.89 18.35 9.04 19.46 9.35C22.12 7.55 23.29 7.92 23.29 7.92C24.04 9.84 23.56 11.26 23.42 11.61C24.31 12.58 24.85 13.82 24.85 15.34C24.85 20.68 21.58 21.86 18.47 22.2C18.97 22.63 19.41 23.48 19.41 24.78C19.41 26.65 19.39 28.15 19.39 28.63C19.39 29.01 19.64 29.44 20.36 29.3C25.96 27.43 29.98 22.18 29.98 16C29.98 8.27 23.72 2 16 2Z" fill="#181717" />
    </svg>
  ),

  clickup: (
    <svg viewBox="0 0 32 32" width="28" height="28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 22L8.5 18.5C12.5 22.5 19.5 22.5 23.5 18.5L28 22C22 28 10 28 4 22Z" fill="#7B68EE" />
      <path d="M16 6L20.5 10.5L17.5 13.5L16 12L14.5 13.5L11.5 10.5L16 6Z" fill="#FF007A" />
    </svg>
  ),
};
