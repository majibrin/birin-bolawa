# Birin Bolawa Heritage Archive

![Birin Bolawa Banner](https://img.shields.io/badge/Birin_Bolawa-Heritage_Archive-green)
![React](https://img.shields.io/badge/React-18.2-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Vite](https://img.shields.io/badge/Vite-4.0-purple)
![Supabase](https://img.shields.io/badge/Supabase-PostgreSQL-orange)

A modern web platform for preserving and verifying the cultural heritage of Birin Bolawa through community contributions, archival management, and heritage verification.

## 🌟 Features

### 📤 Community Submission Portal
- **Secure Form Submission**: Community members can submit oral histories, photos, documents, and artifacts
- **Image Upload Support**: Upload up to 5 images/documents (5MB each) with preview functionality
- **Multi-category Support**: Categorize submissions as Oral History, Photos, Documents, or Artifacts
- **Rich Metadata**: Include contributor information, estimated time periods, and location details

### ✅ Verification Workflow
- **Admin Dashboard**: Heritage committee members can review and verify submissions
- **Status Tracking**: Real-time tracking of submission status (Pending → Verified/Rejected)
- **Secure Authentication**: Role-based access control for committee members

### 📚 Public Archive
- **Verified Content Display**: Public gallery of authenticated historical materials
- **Advanced Filtering**: Filter by category, time period, and contributor type
- **Responsive Design**: Beautiful, accessible interface for all device types

### 🛠️ Technical Features
- **Type-Safe Development**: Full TypeScript integration for robust codebase
- **Real-time Updates**: Live submission status updates via Supabase
- **File Storage**: Secure media storage with Supabase Storage
- **Modern UI**: Tailwind CSS with custom design system

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm/yarn/pnpm
- Supabase account (free tier works)
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/majibrin/birinbolawa.git
   cd birinbolawa
```

1. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```
2. Environment Setup
   Create a .env file in the root directory:
   ```env
   VITE_SUPABASE_URL=your_supabase_project_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```
3. Database Setup
   · Create a Supabase project
   · Run the SQL schema from supabase/schema.sql
   · Set up storage bucket named history-media
4. Start Development Server
   ```bash
   npm run dev
   ```
   Open http://localhost:5173

📁 Project Structure

```
birinbolawa/
├── src/
│   ├── components/          # React components
│   │   ├── ArchiveForm.tsx  # Submission form
│   │   ├── VerifiedArchive.tsx # Public archive display
│   │   └── AdminPanel.tsx   # Verification dashboard
│   ├── lib/
│   │   └── supabase.ts      # Supabase client configuration
│   ├── types/               # TypeScript interfaces
│   └── styles/              # Global styles
├── public/                  # Static assets
├── supabase/
│   └── schema.sql          # Database schema
└── package.json
```

🗄️ Database Schema

Main Tables

submissions

```sql
id: uuid (primary key)
title: text
description: text
category: enum('oral_history', 'photo', 'document', 'artifact')
contributor_name: text
contributor_age: integer
contributor_relation: text
contact_info: text
estimated_period: text
location_details: text
status: enum('pending', 'verified', 'rejected')
media_urls: text[]  -- Array of image/document URLs
created_at: timestamp
verified_at: timestamp
verified_by: uuid (references auth.users)
```

Storage

· Bucket: history-media
· Structure: {submission_id}/{timestamp}-{random}.{ext}

🎨 Design System

The project uses a custom color palette inspired by West African heritage:

Color Hex Usage
Green #2E8B57 Primary actions, verification
Brown #8B4513 Text, backgrounds
Gold #FFD700 Accents, highlights
Sand #F4E4C1 Backgrounds, borders

🔧 Development Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run type-check   # TypeScript type checking
```

🚀 Deployment

Vercel Deployment

1. Connect your GitHub repository to Vercel
2. Add environment variables:
   · VITE_SUPABASE_URL
   · VITE_SUPABASE_ANON_KEY
3. Deploy automatically on push to main branch

Manual Build

```bash
npm run build
# Outputs to /dist folder
```

📱 User Roles

Community Members

· Submit historical materials
· View verified archive
· Track submission status

Heritage Committee (Admins)

· Review and verify submissions
· Reject invalid submissions
· Manage archive content
· Generate heritage reports

🔒 Security Features

· Role-based Authentication: Supabase RLS policies
· File Validation: Size and type restrictions on uploads
· Input Sanitization: Protected against XSS attacks
· Secure Storage: Encrypted file storage with access controls

📊 Future Roadmap

· Mobile app for field researchers
· Multilingual support (Hausa, Fulfulde, English)
· Interactive timeline visualization
· Audio recording integration for oral histories
· QR code generation for physical artifacts
· API for academic research access
· Advanced search with AI tagging

🤝 Contributing

We welcome contributions from:

· Historians: Content verification and categorization
· Developers: Feature development and bug fixes
· Designers: UI/UX improvements
· Community Members: Content submission and testing

Contribution Guidelines

1. Fork the repository
2. Create a feature branch
3. Commit changes with descriptive messages
4. Submit a pull request

📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

🙏 Acknowledgments

· Birin Bolawa community elders and historians
· Supabase for the excellent backend platform
· The React and TypeScript communities
· All contributors preserving cultural heritage

📞 Support & Contact

For support, questions, or heritage contributions:

· 📧 Email: heritage@birinbolawa.org
· 🐛 Issues: GitHub Issues
· 🌐 Website: birinbolawa.org

---

"Preserving our past to enlighten our future" – Birin Bolawa Heritage Committee
