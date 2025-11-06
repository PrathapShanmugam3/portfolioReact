import Image from 'next/image';
import { data } from '@/lib/data';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Mail, Phone, MapPin, Download } from 'lucide-react';
import { Button } from './ui/button';
import placeholderImages from '@/lib/placeholder-images.json';

const profilePic = placeholderImages.placeholderImages.find(p => p.id === 'profile-picture');

export function Hero() {
  return (
    <div className="flex flex-col-reverse items-center gap-12 text-center md:flex-row md:text-left">
      <div className="flex-1 space-y-6">
        <h1 className="text-4xl font-bold tracking-tighter font-headline sm:text-5xl lg:text-6xl">
          {data.name}
        </h1>
        <p className="text-xl text-primary font-medium">{data.title}</p>
        <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4" />
            <a href={`mailto:${data.email}`} className="hover:text-foreground">{data.email}</a>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4" />
            <a href={`tel:${data.mobile}`} className="hover:text-foreground">{data.mobile}</a>
          </div>
        </div>
        <p className="max-w-prose text-muted-foreground leading-relaxed">
          {data.summary}
        </p>
         <div className="flex gap-4 justify-center md:justify-start">
           <Button>
             <Download className="mr-2 h-4 w-4" />
             Download CV
           </Button>
         </div>
      </div>
      <div className="relative">
        <Avatar className="w-48 h-48 sm:w-64 sm:h-64 border-4 border-primary/20 shadow-lg">
          {profilePic && (
            <AvatarImage src={profilePic.imageUrl} alt={data.name} data-ai-hint={profilePic.imageHint} />
          )}
          <AvatarFallback>{data.name.substring(0, 2)}</AvatarFallback>
        </Avatar>
        <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-accent rounded-full -z-10 animate-pulse"></div>
        <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary rounded-lg -z-10 animate-pulse delay-75"></div>
      </div>
    </div>
  );
}
