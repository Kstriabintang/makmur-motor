import { notFound } from "next/navigation";
import { getCarByIdAdmin } from "@/lib/db/queries";
import { CarForm } from "@/components/admin/car-form";

export const dynamic = "force-dynamic";

export default async function EditCarPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const car = await getCarByIdAdmin(id);
  if (!car) notFound();
  return <CarForm car={car} />;
}
