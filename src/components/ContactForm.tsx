
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from 'react-i18next';

const ContactForm: React.FC = () => {
  const { t } = useTranslation();
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
        title: t('contact.success'),
        description: t('contact.successDescription'),
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
            {t('contact.name')}
          </label>
          <Input
            id="name"
            name="name"
            placeholder={t('contact.namePlaceholder')}
            value={formData.name}
            onChange={handleChange}
            required
            className="glass"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">
            {t('contact.email')}
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder={t('contact.emailPlaceholder')}
            value={formData.email}
            onChange={handleChange}
            required
            className="glass"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="subject" className="text-sm font-medium">
          {t('contact.subject')}
        </label>
        <Input
          id="subject"
          name="subject"
          placeholder={t('contact.subjectPlaceholder')}
          value={formData.subject}
          onChange={handleChange}
          required
          className="glass"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium">
          {t('contact.message')}
        </label>
        <Textarea
          id="message"
          name="message"
          placeholder={t('contact.messagePlaceholder')}
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
        {loading ? t('contact.sending') : t('contact.send')}
      </Button>
    </form>
  );
};

export default ContactForm;
