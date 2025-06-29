const activities = [
  {
    type: "🖌️ Doodle",
    title: "Emotion Scribbles",
    desc: "Pick a feeling and doodle shapes or lines that express it.",
    tip: "Use colors to reflect intensity — bold for anger, soft for calm.",
    category: "Drawing",
    image:
      "https://plus.unsplash.com/premium_photo-1664197369883-a16e8ca7e503?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    type: "🖍️ Coloring",
    title: "Mood Mandalas",
    desc: "Download a mandala and color based on your mood.",
    tip: "Use a different color palette every time you feel different.",
    category: "Drawing",
    image:
      "https://images.unsplash.com/photo-1627926539471-0923dabdebb8?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    type: "🖼️ Collage",
    title: "Inner World Vision Board",
    desc: "Cut out pictures from magazines or use Canva to create a digital collage of your current mental state.",
    tip: "No need for perfection — just flow with what you feel.",
    category: "Drawing",
    image:
      "https://images.unsplash.com/photo-1686174484623-9402d1d36ba5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    type: "🎶 Synesthetic Art",
    title: "Paint a Song",
    desc: "Pick a song that makes you feel something and paint or draw how it would look if it were colors and shapes.",
    tip: "Focus on rhythm, energy, and texture instead of realism.",
    category: "Drawing",
    image:
      "https://plus.unsplash.com/premium_photo-1673549535436-7594dd43a08d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    type: "🖋️ Freewriting",
    title: "Stream of Consciousness",
    desc: "Write for 10 minutes without stopping. Let your thoughts spill out freely.",
    tip: "Don’t edit. Just flow, even if it feels messy or weird.",
    category: "Writing",
    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    type: "🎭 Drama Therapy",
    title: "Role-Flip Journaling",
    desc: "Write a dialogue between you and your inner critic — then respond with kindness.",
    tip: "Give your critic a silly name or voice. Make it less scary.",
    category: "Writing",
    image:
      "https://images.unsplash.com/photo-1569360531163-a61fa3da86ee?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    type: "📸 Photo Walk",
    title: "Emotional Snapshot Hunt",
    desc: "Take a walk and capture things that reflect your mood — light, colors, shadows.",
    tip: "No need for perfect shots. Just feel and click.",
    category: "Movement",
    image:
      "https://plus.unsplash.com/premium_photo-1723489324155-d0955ccf902d?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    type: "🎨 Messy Art",
    title: "Texture Play",
    desc: "Use glue, thread, foil, leaves — anything! Just explore textures with no rules.",
    tip: "Close your eyes and feel first, then create.",
    category: "Drawing",
    image:
      "https://images.unsplash.com/photo-1611087966028-bc70bc75d5f3?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    type: "🎞️ Memory Frame",
    title: "Recreate a Happy Moment",
    desc: "Draw or collage a memory that made you feel warm or safe.",
    tip: "Include smells, sounds, and tiny details to make it vivid.",
    category: "Drawing",
    image:
      "https://plus.unsplash.com/premium_photo-1664013683980-526e7e9e8414?q=80&w=676&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    type: "🪄 Affirmation Poster",
    title: "Design Your Power Quote",
    desc: "Pick your favorite quote and turn it into a mini poster or phone wallpaper.",
    tip: "Use bright, uplifting colors and your own handwriting.",
    category: "Writing",
    image:
      "https://images.unsplash.com/photo-1508003937473-789a1839fd57?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    type: "🎐 Breath + Draw",
    title: "Breathe and Trace",
    desc: "Close your eyes, breathe deeply, and trace shapes with your finger or pencil in rhythm.",
    tip: "Exhale longer than you inhale — it helps soothe your nervous system.",
    category: "Movement",
    image:
      "https://images.unsplash.com/photo-1583339824000-5afecfd41835?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    type: "🕯️ Candle Art",
    title: "Wax & Watercolor Magic",
    desc: "Draw with white wax crayon, then paint over with watercolor to reveal hidden art.",
    tip: "Let your feelings be hidden messages you reveal with color.",
    category: "Drawing",
    image:
      "https://plus.unsplash.com/premium_photo-1678812165213-12dc8d1f3e19?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    type: "🫧 Bubble Emotions",
    title: "Blow & Pop",
    desc: "Write negative thoughts on paper bubbles. Blow real bubbles and pop each one while saying something kind to yourself.",
    tip: "It’s not silly — it’s release in the gentlest form.",
    category: "Movement",
    image:
      "https://images.unsplash.com/photo-1494005155262-218c543aafe3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    type: "🎵 Mood Playlist Cover",
    title: "Design a Playlist Cover",
    desc: "Make a playlist for how you feel and design an album cover for it.",
    tip: "You can do it digitally or sketch it with colored pencils.",
    category: "Drawing",
    image:
      "https://plus.unsplash.com/premium_photo-1682125488670-29e72e5a7672?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  {
    type: "🏃‍♀️ Movement",
    title: "Mood Walk",
    desc: "Go on a walk or jog while observing your surroundings and how they mirror your inner world.",
    tip: "Match your pace with your breath, and let go of any expectations.",
    category: "Movement",
    image:
      "https://plus.unsplash.com/premium_photo-1690574169354-d6cc4299cf84?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3",
  },
  {
    type: "🧘 Yoga",
    title: "Emotional Flow Yoga",
    desc: "Try a slow yoga session focusing on releasing tension and emotions.",
    tip: "Focus on heart-opening poses or hip stretches to let feelings move.",
    category: "Movement",
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1080&auto=format&fit=crop",
  },
  {
    type: "🎤 Singing",
    title: "Sing It Out",
    desc: "Sing a song that resonates with your current emotions, loud and free.",
    tip: "Don’t worry about pitch — just let your voice be your outlet.",
    category: "Music",
    image:
      "https://media.istockphoto.com/id/1327182417/photo/young-man-singing-and-dancing-at-home.jpg?s=2048x2048&w=is&k=20&c=zz2XBnUpBlP1Vc-UZvoIGU-Tkx0R5eyiiPfEysPDEc0=",
  },
  {
    type: "🎶 Songwriting",
    title: "Lyric Release",
    desc: "Write a song or just a few lines about how you feel right now.",
    tip: "Use a melody or just free-write like poetry — let emotion guide it.",
    category: "Music",
    image:
      "https://plus.unsplash.com/premium_photo-1661333426737-40ce9d29a048?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    type: "🌿 Nature Therapy",
    title: "Garden Time",
    desc: "Spend time with plants or in a garden — observe, water, prune, or just sit.",
    tip: "Notice small changes in leaves, flowers, or insects — be mindful.",
    category: "Nature",
    image:
      "https://plus.unsplash.com/premium_photo-1673141390230-8b4a3c3152b1?q=80&w=1073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    type: "🌳 Outdoor Grounding",
    title: "Touch the Earth",
    desc: "Go barefoot on grass, hug a tree, or sit under the sun with your eyes closed.",
    tip: "Let the natural world absorb and settle your nervous system.",
    category: "Nature",
    image:
      "https://plus.unsplash.com/premium_photo-1673139100657-eaf08bf92ba1?q=80&w=1073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    type: "🧘‍♀️ Guided Meditation",
    title: "Body Scan Calm",
    desc: "Listen to a guided meditation that walks you through relaxing each part of your body.",
    tip: "Do this lying down in a cozy space with dim lights.",
    category: "Meditation",
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=799&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    type: "📓 Visual Journal",
    title: "Mood Tracker Art",
    desc: "Draw small doodles or color blocks daily to represent your feelings.",
    tip: "Use a key of shapes/colors to represent different moods and track them over time.",
    category: "Drawing",
    image:
      "https://images.unsplash.com/photo-1587483166702-bf9aa66bd791?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
  type: "🎧 Music",
  title: "Feel-It Playlist",
  desc: "Put on headphones and play music that matches your current mood — even the messy ones.",
  tip: "Let your body move or just sit still and let the music carry your emotions.",
  category: "Music",
  image: "https://images.unsplash.com/photo-1616356607338-fd87169ecf1a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
},
{
  type: "💃 Dance",
  title: "Dance Like No One’s Watching",
  desc: "Put on a high-energy song and dance freely to release stored tension.",
  tip: "Shut your door, turn the volume up, and let your body lead the way.",
  category: "Movement",
  image: "https://plus.unsplash.com/premium_photo-1682096578903-71faffaec40d?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
},
{
  type: "🗣️ Self-Talk",
  title: "Mirror Talk",
  desc: "Stand in front of a mirror and talk to yourself like you're your own best friend.",
  tip: "Start with: 'I’m proud of you for…' or 'It’s okay to feel…'",
  category: "Mind",
  image: "https://plus.unsplash.com/premium_photo-1731312361794-3c0ba7462070?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
},
{
  type: "🛁 Calm Space",
  title: "Create a Zen Corner",
  desc: "Set up a cozy space with candles, pillows, and a calm playlist. Just be there.",
  tip: "Let it be your no-judgment zone — even 10 minutes helps.",
  category: "Mind",
  image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1080&auto=format&fit=crop",
},
{
  type: "📓 Gratitude Dump",
  title: "Thankful Flood",
  desc: "Write down as many things you're grateful for — big or small — as fast as you can.",
  tip: "Set a timer for 5 minutes and don’t stop writing.",
  category: "Writing",
  image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?q=80&w=1080&auto=format&fit=crop",
},
{
  type: "🧴 Self-Soothing",
  title: "Pamper Yourself",
  desc: "Do a skincare routine, warm bath, or give yourself a massage with lotion.",
  tip: "Be slow and gentle — treat your body like someone you love.",
  category: "Body",
  image: "https://plus.unsplash.com/premium_photo-1679750866883-b1c549f65da9?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
},
{
  type: "🎙️ Voice Journal",
  title: "Record Your Thoughts",
  desc: "Use your phone to talk out what you’re feeling. Like a voice note to yourself.",
  tip: "You can delete it later — the power is in expressing, not saving.",
  category: "Writing",
  image: "https://plus.unsplash.com/premium_photo-1670071482248-f647a17c7d9e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
},
{
  type: "🌈 Visual Moodboard",
  title: "Color My Feelings",
  desc: "Use Canva or a notebook to create a board of images, words, and colors that reflect your emotion right now.",
  tip: "No rules. Let it be messy and raw.",
  category: "Drawing",
  image: "https://images.unsplash.com/photo-1558470598-a5dda9640f68?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
},
{
  type: "☕ Gentle Break",
  title: "Cup of Stillness",
  desc: "Make your favorite tea or coffee. Sit with it, feel the warmth, breathe, and do nothing.",
  tip: "Notice each sip. Let it calm your nervous system.",
  category: "Mind",
  image: "https://images.unsplash.com/photo-1495774856032-8b90bbb32b32?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
},
{
  type: "📷 Daily Snap",
  title: "Capture A Feeling",
  desc: "Take one photo today that represents your mood — no filter needed.",
  tip: "Could be your room, sky, hands, a plant — anything that feels real.",
  category: "Movement",
  image: "https://images.unsplash.com/photo-1582152629442-4a864303fb96?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
},
{
  type: "📚 Read Aloud",
  title: "Soothing Storytime",
  desc: "Read a comforting or empowering book out loud to yourself.",
  tip: "Let your voice be soft and nurturing, like you’re reading to a friend.",
  category: "Mind",
  image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1080&auto=format&fit=crop",
},

];

export default activities;
