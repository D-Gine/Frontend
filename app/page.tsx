"use client";
import { Button } from "@material-tailwind/react";

export default function Home() {
  return (
    <div style={{}} className="bg-red-800 text-gray-900">
      {/* HERO */}
      <section className="relative h-[90vh] flex items-center justify-center text-center px-6">
        <div className="absolute inset-0 bg-linear-to-b from-brandDark/90 to-brandRed/90 z-0" />

        <div className="flex flex-col gap-5 items-center z-10 text-white max-w-2/3">
          <h1 className="text-4xl md:text-8xl font-bold mb-6 text-white">
            Jouer à des jeux de rôle en ligne gratuitement
          </h1>
          <p className="text-lg md:text-5xl mb-8 text-white">
            Lance les dés. Invoque les dragons. Écris ta légende.
          </p>
          <Button
            className="bg-red-700 hover:bg-red-900 transition transform hover:scale-105 px-8 py-4 rounded-lg font-semibold text-lg shadow-xl"
            onClick={() => console.log("clicked")}
            placeholder=""
            onPointerEnterCapture={() => {}} // le b a le c
            onPointerLeaveCapture={() => {}}
            onResize={() => {}}
            onResizeCapture={() => {}}
          >
            Commencer gratuitement
          </Button>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold text-brandRed mb-16">
          Pourquoi jouer sur notre plateforme ?
        </h2>

        <div className="flex flex-wrap justify-center gap-10">
          <div className="bg-white w-72 p-8 rounded-2xl shadow-xl hover:-translate-y-2 transition">
            <h3 className="text-xl font-semibold mb-4">
              Lancers de dés en temps réel
            </h3>
            <p>Animations dynamiques et résultats instantanés.</p>
          </div>

          <div className="bg-white w-72 p-8 rounded-2xl shadow-xl hover:-translate-y-2 transition">
            <h3 className="text-xl font-semibold mb-4">Cartes interactives</h3>
            <p>Fog of war, tokens et gestion fluide des combats.</p>
          </div>

          <div className="bg-white w-72 p-8 rounded-2xl shadow-xl hover:-translate-y-2 transition">
            <h3 className="text-xl font-semibold mb-4">Parties instantanées</h3>
            <p>Rejoins ou crée une table en quelques secondes.</p>
          </div>
        </div>
      </section>

      {/* HOW */}
      <section className="py-20 px-6 bg-orange-100 text-center">
        <h2 className="text-3xl font-bold text-brandDark mb-10">
          Comment commencer
        </h2>

        <ol className="space-y-4 text-lg">
          <li>1. Créer un compte gratuit</li>
          <li>2. Choisir ou créer une campagne</li>
          <li>3. Inviter tes joueurs</li>
          <li>4. Lancer l’aventure</li>
        </ol>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-brandRed text-center text-white">
        <h2 className="text-4xl font-bold mb-8">
          Prêt à entrer dans la légende ?
        </h2>
        <button className="bg-brandOrange hover:bg-orange-500 transition transform hover:scale-110 px-10 py-5 rounded-xl font-semibold text-xl shadow-2xl">
          Créer ma première partie
        </button>
      </section>
    </div>
  );
}
