"use client"; // Garante que é um Client Component

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/"); // ✅ Só redireciona depois da montagem
  }, [router]);

  return (
    <>
    </>
  ); // 🔹 Evita renderizar qualquer coisa antes do redirecionamento
}
