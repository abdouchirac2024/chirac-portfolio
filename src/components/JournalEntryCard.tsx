import React, { useState } from 'react';
import type { JournalEntry, Comment as CommentType } from '../types/journal';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { ThumbsUp, MessageSquare } from 'lucide-react'; // Using lucide-react icons

interface JournalEntryCardProps {
  entry: JournalEntry;
}

const JournalEntryCard: React.FC<JournalEntryCardProps> = ({ entry }) => {
  const [likes, setLikes] = useState(entry.likes);
  const [comments, setComments] = useState<CommentType[]>(entry.comments);
  const [newCommentText, setNewCommentText] = useState('');
  const [showCommentInput, setShowCommentInput] = useState(false);

  const handleLike = () => {
    setLikes(prevLikes => prevLikes + 1);
  };

  const handleAddComment = () => {
    if (newCommentText.trim() === '') return;
    const newComment: CommentType = {
      id: Math.random().toString(36).substr(2, 9), // Basic unique ID
      author: 'Anonymous', // No auth, so comments are anonymous
      text: newCommentText,
      timestamp: new Date(),
    };
    setComments(prevComments => [...prevComments, newComment]);
    setNewCommentText('');
    setShowCommentInput(false); // Optionally hide input after commenting
  };

  return (
    <div className="rounded-lg overflow-hidden glass transition-all duration-300 hover:shadow-xl p-6 bg-card text-card-foreground border">
      <h3 className="text-xl font-semibold mb-2">{entry.title}</h3>
      <p className="text-sm text-muted-foreground mb-1">
        {new Date(entry.date).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
      </p>
      <p className="text-muted-foreground text-sm mb-4 whitespace-pre-line">{entry.content}</p>

      <div className="flex items-center justify-between mb-4">
        <Button variant="ghost" onClick={handleLike} className="flex items-center space-x-2 text-muted-foreground hover:text-primary">
          <ThumbsUp size={18} />
          <span>{likes} {likes === 1 ? 'Like' : 'Likes'}</span>
        </Button>
        <Button variant="ghost" onClick={() => setShowCommentInput(!showCommentInput)} className="flex items-center space-x-2 text-muted-foreground hover:text-primary">
          <MessageSquare size={18} />
          <span>{comments.length} {comments.length === 1 ? 'Commentaire' : 'Commentaires'}</span>
        </Button>
      </div>

      {showCommentInput && (
        <div className="mb-4">
          <Textarea
            placeholder="Ajouter un commentaire..."
            value={newCommentText}
            onChange={(e) => setNewCommentText(e.target.value)}
            className="mb-2"
          />
          <Button onClick={handleAddComment} size="sm">Commenter</Button>
        </div>
      )}

      {comments.length > 0 && (
        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-muted-foreground">Commentaires:</h4>
          {comments.map((comment) => (
            <div key={comment.id} className="p-3 rounded-md bg-muted/50 border text-sm">
              <p className="font-semibold text-foreground">{comment.author}</p>
              <p className="text-muted-foreground mb-1 whitespace-pre-line">{comment.text}</p>
              <p className="text-xs text-muted-foreground/80">
                {new Date(comment.timestamp).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default JournalEntryCard;
