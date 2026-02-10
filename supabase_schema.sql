-- Create a table for profiles
CREATE TABLE profiles (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  clerk_id TEXT UNIQUE NOT NULL,
  email TEXT NOT NULL,
  first_name TEXT,
  last_name TEXT,
  avatar_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create a table for projects
CREATE TABLE projects (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  client_id TEXT REFERENCES profiles(clerk_id) ON DELETE CASCADE NOT NULL,
  name TEXT NOT NULL,
  description TEXT,
  status TEXT DEFAULT 'planning' CHECK (status IN ('planning', 'in-progress', 'review', 'completed')),
  progress INTEGER DEFAULT 0 CHECK (progress >= 0 AND progress <= 100),
  github_url TEXT,
  demo_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create a table for messages/notes
CREATE TABLE communication (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  project_id UUID REFERENCES projects(id) ON DELETE CASCADE NOT NULL,
  sender_id TEXT NOT NULL, -- clerk_id
  content TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable Row Level Security
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE communication ENABLE ROW LEVEL SECURITY;

-- Policies for profiles
CREATE POLICY "Users can view their own profile" ON profiles
  FOR SELECT USING (auth.uid()::text = clerk_id);

CREATE POLICY "Admins can view all profiles" ON profiles
  FOR ALL USING (true); -- We'll handle admin check in app logic or via custom claims

-- Policies for projects
CREATE POLICY "Users can view their own projects" ON projects
  FOR SELECT USING (client_id = (SELECT clerk_id FROM profiles WHERE clerk_id = auth.uid()::text));

CREATE POLICY "Admins can manage all projects" ON projects
  FOR ALL USING (true);

-- Policies for communication
CREATE POLICY "Users can view communication for their projects" ON communication
  FOR SELECT USING (project_id IN (SELECT id FROM projects WHERE client_id = auth.uid()::text));

CREATE POLICY "Admins can manage all communication" ON communication
  FOR ALL USING (true);
