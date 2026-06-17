import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CalendarDays, Clock } from "lucide-react";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog & Tips Mobil Bekas",
  description:
    "Artikel, tips, dan panduan seputar jual beli mobil bekas berkualitas di Denpasar dari Makmur Motor.",
  alternates: { canonical: "/blog" },
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <div className="pt-16 md:pt-20">
      <section className="border-b border-card-border bg-slate-50/60 dark:border-white/10 dark:bg-white/[0.02]">
        <div className="container-px py-12 md:py-16">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand">
            Blog & Tips
          </p>
          <h1 className="font-display text-3xl font-bold tracking-tight md:text-5xl">
            Tips & Panduan Mobil Bekas
          </h1>
          <p className="mt-3 max-w-2xl text-ink-soft">
            Pelajari cara memilih, mengecek, dan membeli mobil bekas berkualitas
            di Denpasar bersama Makmur Motor.
          </p>
        </div>
      </section>

      <div className="container-px section-py">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col overflow-hidden rounded-2xl border border-card-border bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-slate-900"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-slate-800">
                <Image
                  src={post.cover}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <div className="mb-2 flex items-center gap-3 text-xs text-ink-soft">
                  <span className="inline-flex items-center gap-1">
                    <CalendarDays className="h-3.5 w-3.5" />
                    {formatDate(post.date)}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    {post.readMinutes} menit
                  </span>
                </div>
                <h2 className="font-display text-lg font-bold leading-snug text-ink transition-colors group-hover:text-brand">
                  {post.title}
                </h2>
                <p className="mt-2 line-clamp-3 flex-1 text-sm text-ink-soft">
                  {post.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                  Baca selengkapnya
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
