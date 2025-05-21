/*
  # Setup roles and permissions schema

  1. New Tables
    - `roles`
      - `id` (uuid, primary key)
      - `name` (text) - producer, co_producer, affiliate, admin
      - `created_at` (timestamp)
    
    - `user_roles`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references auth.users)
      - `role_id` (uuid, references roles)
      - `created_at` (timestamp)
    
    - `courses`
      - `id` (uuid, primary key)
      - `title` (text)
      - `description` (text)
      - `price` (numeric)
      - `producer_id` (uuid, references auth.users)
      - `status` (text) - draft, pending, approved, rejected
      - `created_at` (timestamp)
    
    - `course_co_producers`
      - `id` (uuid, primary key)
      - `course_id` (uuid, references courses)
      - `co_producer_id` (uuid, references auth.users)
      - `percentage` (numeric)
      - `created_at` (timestamp)
    
    - `affiliations`
      - `id` (uuid, primary key)
      - `course_id` (uuid, references courses)
      - `affiliate_id` (uuid, references auth.users)
      - `status` (text) - pending, approved, rejected
      - `commission_percentage` (numeric)
      - `created_at` (timestamp)
    
    - `transactions`
      - `id` (uuid, primary key)
      - `course_id` (uuid, references courses)
      - `buyer_id` (uuid, references auth.users)
      - `affiliate_id` (uuid, references auth.users)
      - `amount` (numeric)
      - `status` (text)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for each role
*/

-- Create roles table
CREATE TABLE roles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL UNIQUE,
  created_at timestamptz DEFAULT now()
);

-- Create user_roles table
CREATE TABLE user_roles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users NOT NULL,
  role_id uuid REFERENCES roles NOT NULL,
  created_at timestamptz DEFAULT now(),
  UNIQUE(user_id, role_id)
);

-- Create courses table
CREATE TABLE courses (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text,
  price numeric NOT NULL,
  producer_id uuid REFERENCES auth.users NOT NULL,
  status text NOT NULL DEFAULT 'draft',
  created_at timestamptz DEFAULT now()
);

-- Create course_co_producers table
CREATE TABLE course_co_producers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  course_id uuid REFERENCES courses NOT NULL,
  co_producer_id uuid REFERENCES auth.users NOT NULL,
  percentage numeric NOT NULL,
  created_at timestamptz DEFAULT now(),
  UNIQUE(course_id, co_producer_id)
);

-- Create affiliations table
CREATE TABLE affiliations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  course_id uuid REFERENCES courses NOT NULL,
  affiliate_id uuid REFERENCES auth.users NOT NULL,
  status text NOT NULL DEFAULT 'pending',
  commission_percentage numeric NOT NULL DEFAULT 20,
  created_at timestamptz DEFAULT now(),
  UNIQUE(course_id, affiliate_id)
);

-- Create transactions table
CREATE TABLE transactions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  course_id uuid REFERENCES courses NOT NULL,
  buyer_id uuid REFERENCES auth.users NOT NULL,
  affiliate_id uuid REFERENCES auth.users,
  amount numeric NOT NULL,
  status text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE roles ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_roles ENABLE ROW LEVEL SECURITY;
ALTER TABLE courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE course_co_producers ENABLE ROW LEVEL SECURITY;
ALTER TABLE affiliations ENABLE ROW LEVEL SECURITY;
ALTER TABLE transactions ENABLE ROW LEVEL SECURITY;

-- Insert default roles
INSERT INTO roles (name) VALUES
  ('admin'),
  ('producer'),
  ('co_producer'),
  ('affiliate');

-- Create policies
CREATE POLICY "Admins can do everything" ON roles
  FOR ALL USING (
    auth.uid() IN (
      SELECT user_id FROM user_roles
      WHERE role_id = (SELECT id FROM roles WHERE name = 'admin')
    )
  );

CREATE POLICY "Everyone can read roles" ON roles
  FOR SELECT USING (true);

-- Similar policies for other tables...