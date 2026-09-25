import { FaWhatsapp } from 'react-icons/fa';
import { whatsappUrl } from '@/lib/data';

/** Floating "chat on WhatsApp" button pinned to the bottom-right corner. */
export function WhatsAppButton() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[#25D366] p-3.5 text-white shadow-xl shadow-[#25D366]/40 transition-all hover:-translate-y-1 md:bottom-8 md:right-8"
    >
      <span aria-hidden className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366] opacity-30" />
      <FaWhatsapp className="h-7 w-7" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-medium transition-all duration-500 group-hover:max-w-40 group-hover:pr-1">
        Chat with me
      </span>
    </a>
  );
}
