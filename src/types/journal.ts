export interface Comment {
  id: string;
  author: string; // For now, can be a default value like "Anonymous"
  text: string;
  timestamp: Date;
}

export interface JournalEntry {
  id: string;
  date: Date;
  title: string;
  content: string;
  likes: number;
  comments: Comment[];
}
