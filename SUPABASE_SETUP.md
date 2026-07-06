# Supabase & Persistent Storage Setup Guide

This guide outlines the steps to transition the Codegx Portfolio from ephemeral in-memory storage to persistent, enterprise-grade Supabase (PostgreSQL).

## 1. Supabase Project Setup
1. Log in to your [Supabase Dashboard](https://supabase.com/dashboard).
2. Create a new project named `codegx-portfolio`.
3. Navigate to **Project Settings > Database**.
4. Copy the **Connection String** (use the **URI** format, looks like `postgresql://postgres:[YOUR-PASSWORD]@db.[YOUR-PROJECT-REF].supabase.co:5432/postgres`).

## 2. Local Environment Configuration
1. In your local `codegx-portfolio` directory, create or update your `.env` file:
   ```env
   DATABASE_URL=your_supabase_connection_string_here
   ```
2. Replace `your_supabase_connection_string_here` with the URI you copied, ensuring you include your actual database password.

## 3. Database Migration
Run the following commands in your terminal to initialize the database schema:

```bash
# Install new dependency
npm install postgres

# Push the schema to Supabase
npm run db:push
```

## 4. Verification
1. Once the migration is complete, start your development server:
   ```bash
   npm run dev
   ```
2. Submit a test message via the contact form.
3. Check your Supabase Dashboard under **Table Editor > contact_messages** to verify the data is persisted.

## Technical Justification
Transitioning to Supabase provides:
- **Persistence:** Data survives server restarts and redeployments.
- **Scalability:** Enterprise-grade PostgreSQL infrastructure.
- **Security:** Managed database with built-in backups and encryption.
- **Traceability:** Audit logs and versioned schema migrations via Drizzle ORM.
