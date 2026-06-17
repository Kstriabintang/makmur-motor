import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { WhatsappButton } from "@/components/whatsapp-button";
import { BackToTop } from "@/components/back-to-top";
import { PageTransition } from "@/components/page-transition";

export default function SiteLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Navbar />
      <PageTransition>
        <main className="min-h-screen">{children}</main>
      </PageTransition>
      <Footer />
      <WhatsappButton />
      <BackToTop />
    </>
  );
}
