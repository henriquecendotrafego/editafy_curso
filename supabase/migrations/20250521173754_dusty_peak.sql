/*
  # Add course modules and lessons

  1. New Tables
    - `course_modules`
      - `id` (uuid, primary key)
      - `course_id` (uuid, references courses)
      - `title` (text)
      - `order` (integer)
      - `created_at` (timestamp)
    
    - `course_lessons`
      - `id` (uuid, primary key)
      - `module_id` (uuid, references course_modules)
      - `title` (text)
      - `type` (text)
      - `content` (text)
      - `order` (integer)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on both tables
    - Add policies for course owners and co-producers
*/

-- Create course_modules table
CREATE TABLE course_modules (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  course_id uuid REFERENCES courses NOT NULL,
  title text NOT NULL,
  "order" integer NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Create course_lessons table
CREATE TABLE course_lessons (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  module_id uuid REFERENCES course_modules NOT NULL,
  title text NOT NULL,
  type text NOT NULL,
  content text NOT NULL,
  "order" integer NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE course_modules ENABLE ROW LEVEL SECURITY;
ALTER TABLE course_lessons ENABLE ROW LEVEL SECURITY;

-- Policies for course_modules
CREATE POLICY "Course owners can manage modules"
  ON course_modules
  FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM courses
      WHERE courses.id = course_modules.course_id
      AND courses.producer_id = auth.uid()
    )
  );

CREATE POLICY "Co-producers can manage modules"
  ON course_modules
  FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM course_co_producers
      WHERE course_co_producers.course_id = course_modules.course_id
      AND course_co_producers.co_producer_id = auth.uid()
    )
  );

-- Policies for course_lessons
CREATE POLICY "Course owners can manage lessons"
  ON course_lessons
  FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM course_modules
      JOIN courses ON courses.id = course_modules.course_id
      WHERE course_modules.id = course_lessons.module_id
      AND courses.producer_id = auth.uid()
    )
  );

CREATE POLICY "Co-producers can manage lessons"
  ON course_lessons
  FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM course_modules
      JOIN course_co_producers ON course_co_producers.course_id = course_modules.course_id
      WHERE course_modules.id = course_lessons.module_id
      AND course_co_producers.co_producer_id = auth.uid()
    )
  );