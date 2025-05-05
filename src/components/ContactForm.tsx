
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from "@/hooks/use-toast";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message envoyé!",
        description: "Merci pour votre message. Je vous contacterai bientôt.",
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      setLoading(false);
    }, 1500);

    // In real-world scenario, you would connect this to Firebase or EmailJS
    // Example EmailJS code:
    /*
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData, 'YOUR_USER_ID')
      .then((result) => {
          toast({
            title: "Message sent!",
            description: "Thank you for your message. I'll get back to you soon.",
          });
          setFormData({
            name: '',
            email: '',
            subject: '',
            message: '',
          });
      }, (error) => {
          toast({
            title: "Error",
            description: "There was an error sending your message.",
            variant: "destructive",
          });
      })
      .finally(() => setLoading(false));
    */
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium">
            Nom
          </label>
          <Input
            id="name"
            name="name"
            placeholder="Votre nom"
            value={formData.name}
            onChange={handleChange}
            required
            className="glass"
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="votre@email.com"
            value={formData.email}
            onChange={handleChange}
            required
            className="glass"
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <label htmlFor="subject" className="text-sm font-medium">
          Sujet
        </label>
        <Input
          id="subject"
          name="subject"
          placeholder="Sujet du message"
          value={formData.subject}
          onChange={handleChange}
          required
          className="glass"
        />
      </div>
      
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium">
          Message
        </label>
        <Textarea
          id="message"
          name="message"
          placeholder="Votre message ici..."
          rows={6}
          value={formData.message}
          onChange={handleChange}
          required
          className="glass resize-none"
        />
      </div>
      
      <Button 
        type="submit" 
        className="w-full md:w-auto"
        disabled={loading}
      >
        {loading ? 'Envoi...' : 'Envoyer le message'}
      </Button>
    </form>
  );
};

export default ContactForm;
