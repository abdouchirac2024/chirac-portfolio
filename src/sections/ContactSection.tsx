import React from 'react';
import ContactForm from '../components/ContactForm';
import { Card } from '@/components/ui/card';
import { FaWhatsapp } from 'react-icons/fa';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="container relative z-10">
        <h2 className="section-title">Contact</h2>
        
        <div className="max-w-3xl mx-auto">
          <Card className="glass border-none shadow-lg p-6 md:p-8">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
              <div>
                <h3 className="text-xl font-bold mb-4">Me contacter</h3>
                <p className="text-muted-foreground mb-6">
                  Vous avez un projet en tête ou souhaitez discuter d'une opportunité ? N'hésitez pas à me contacter !
                </p>
                
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium">Email</p>
                    <a href="mailto:abdouchirac411@gmail.com" className="text-primary hover:underline">
                      abdouchirac411@gmail.com
                    </a>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium">Téléphone</p>
                    <a href="tel:+237658488485" className="text-primary hover:underline">
                      +237 658 488 485
                    </a>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium">Localisation</p>
                    <p>Cameroun</p>
                  </div>
                  <div className="flex justify-center mt-8">
                    <a
                      href="https://wa.me/237658488485"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="WhatsApp"
                      className="inline-flex items-center gap-3 px-8 py-4 bg-green-500 text-white text-2xl font-bold rounded-full shadow-lg hover:bg-green-600 transition-all"
                    >
                      <FaWhatsapp className="text-4xl" />
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
              
              <div>
                <ContactForm />
              </div>
            </div>
          </Card>
        </div>
      </div>
      
      {/* Wave SVG background */}
      <div className="absolute bottom-0 left-0 w-full opacity-20">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="fill-primary">
          <path d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default ContactSection;
