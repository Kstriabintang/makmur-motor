import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CalendarDays, Clock, ChevronRight } from "lucide-react";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { blogPostingJsonLd, breadcrumbJsonLd } from "@/lib/seo";
import { CONTACT } from "@/lib/contact";
import { waLink } from "@/lib/utils";

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Artikel tidak ditemukan" };
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      images: [{ url: post.cover }],
    },
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const jsonLd = [
    blogPostingJsonLd(post),
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Blog", path: "/blog" },
      { name: post.title, path: `/blog/${post.slug}` },
    ]),
  ];

  return (
    <article className="pt-16 md:pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="container-px py-8 md:py-12">
        <nav className="mb-6 flex items-center gap-1 text-sm text-ink-soft">
          <Link href="/" className="hover:text-brand">Home</Link>
          <ChevronRight className="h-4 w-4" />
          <Link href="/blog" className="hover:text-brand">Blog</Link>
          <ChevronRight className="h-4 w-4" />
          <span className="line-clamp-1 text-ink">{post.title}</span>
        </nav>

        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
            {post.title}
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-ink-soft">
            <span className="inline-flex items-center gap-1.5">
              <CalendarDays className="h-4 w-4" />
              {formatDate(post.date)}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              {post.readMinutes} menit baca
            </span>
            <span>oleh {post.author}</span>
          </div>

          <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-2xl bg-slate-100 dark:bg-slate-800">
            <Image
              src={post.cover}
              alt={post.title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
            />
          </div>

          <div className="mt-8 space-y-5 text-[17px] leading-relaxed text-ink-soft">
            {post.blocks.map((block, i) => {
              if (block.type === "h2") {
                return (
                  <h2
                    key={i}
                    className="pt-2 text-2xl font-bold tracking-tight text-ink"
                  >
                    {block.text}
                  </h2>
                );
              }
              if (block.type === "ul") {
                return (
                  <ul key={i} className="list-disc space-y-2 pl-6">
                    {block.items.map((it, j) => (
                      <li key={j}>{it}</li>
                    ))}
                  </ul>
                );
              }
              return <p key={i}>{block.text}</p>;
            })}
          </div>

          {/* CTA */}
          <div className="mt-12 rounded-2xl border border-card-border bg-slate-50 p-6 text-center dark:border-white/10 dark:bg-white/[0.03]">
            <h3 className="text-xl font-bold text-ink">
              Cari mobil bekas berkualitas di Denpasar?
            </h3>
            <p className="mt-2 text-sm text-ink-soft">
              Lihat koleksi terbaru kami atau konsultasi gratis via WhatsApp.
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-3">
              <Link href="/katalog" className="btn-primary">
                Lihat Katalog
              </Link>
              <a
                href={waLink(
                  "Halo Makmur Motor, saya ingin konsultasi soal mobil bekas.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                Chat WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
