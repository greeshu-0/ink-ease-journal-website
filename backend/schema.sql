-- USERS TABLE
CREATE TABLE IF NOT EXISTS public.users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100) NOT NULL UNIQUE,
    password TEXT NOT NULL
);

-- ENTRIES TABLE
CREATE TABLE IF NOT EXISTS public.entries (
    id SERIAL PRIMARY KEY,
    date DATE NOT NULL,
    title TEXT NOT NULL,
    content TEXT,
    mood TEXT,
    user_id TEXT
);

-- MOODS TABLE
CREATE TABLE IF NOT EXISTS public.moods (
    id SERIAL PRIMARY KEY,
    user_id INTEGER,
    date DATE NOT NULL,
    mood TEXT NOT NULL,
    emoji TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT moods_user_id_fkey FOREIGN KEY (user_id)
        REFERENCES public.users (id)
        ON DELETE CASCADE
);

-- COMMENTS TABLE
CREATE TABLE IF NOT EXISTS public.comments (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
