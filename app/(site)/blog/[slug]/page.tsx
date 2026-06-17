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

        <div className="mx-auto max-w-[44rem]">
          <h1 className="text-balance font-display text-[2rem] font-bold leading-[1.15] tracking-tight text-ink md:text-[2.6rem]">
            {post.title}
          </h1>
          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-ink-soft">
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

          <hr className="mt-6 border-card-border dark:border-white/10" />

          <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-2xl bg-slate-100 shadow-sm ring-1 ring-card-border dark:bg-slate-800 dark:ring-white/10">
            <Image
              src={post.cover}
              alt={post.title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 720px"
              className="object-cover"
            />
          </div>

          <div className="mt-10 space-y-6">
            {post.blocks.map((block, i) => {
              if (block.type === "h2") {
                return (
                  <h2
                    key={i}
                    className="mb-1 mt-12 font-display text-2xl font-bold tracking-tight text-ink md:text-[1.7rem]"
                  >
                    {block.text}
                  </h2>
                );
              }
              if (block.type === "ul") {
                return (
                  <ul key={i} className="space-y-3">
                    {block.items.map((it, j) => (
                      <li
                        key={j}
                        className="relative pl-7 text-[1.0625rem] leading-[1.8] text-slate-600 dark:text-slate-300"
                      >
                        <span className="absolute left-1 top-[0.7rem] h-1.5 w-1.5 rounded-full bg-brand" />
                        {it}
                      </li>
                    ))}
                  </ul>
                );
              }
              if (i === 0) {
                return (
                  <p
                    key={i}
                    className="text-xl leading-relaxed text-ink/90 dark:text-slate-200"
                  >
                    {block.text}
                  </p>
                );
              }
              return (
                <p
                  key={i}
                  className="text-[1.0625rem] leading-[1.85] text-slate-600 dark:text-slate-300"
                >
                  {block.text}
                </p>
              );
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
